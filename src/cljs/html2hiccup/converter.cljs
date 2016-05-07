(ns html2hiccup.converter
  (:require [clojure.string :as str]
            [hickory.core   :as hickory]
            [clojure.walk   :as walk]))

;; https://github.com/davidsantiago/hickory/issues/28
(def ^:private whitespace?
  "Is this a string, and does it consist of only whitespace?"
  (every-pred string? (partial re-matches #"\s*")))

(defn ^:private fixup-hiccup
  "Fixup hiccup tree generate by hickory, this function do:
  1. remove wired \\n\\s* in string.
  2. remove all pure whitespace."
  [row]
  (walk/prewalk
   (fn [form]
     (cond
       ;; remove wired \n\s*
       (string? form) (str/replace form #"\n\s*" "")
       ;; remove all pure whitespace
       (vector? form) (into [] (remove whitespace? form))
       :else form))
   row))

(defn html->hiccup
  "Convert Html syntax to Hiccup syntax, return result in string."
  [content]
  (-> content
      hickory/parse
      hickory/as-hiccup
      fixup-hiccup
      str
      (str/replace #"\((.*)\)" "$1")    ; remove first/last ()
      (str/replace #"\[" "\n[")         ; start every opening [ on new line
      (str/replace #"\n\[:html" "[:html") ; first line doesn't neet to add newline char
      (str/replace #" \{\}" "")           ; remove empty {}
      (str/replace #"]\s*]" "]]")         ; close ] tag
      identity))