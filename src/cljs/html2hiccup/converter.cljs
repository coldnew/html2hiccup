(ns html2hiccup.converter
  (:require [clojure.string :as str]
            [hickory.core   :as hickory]
            [clojure.walk   :as walk]))

;; https://github.com/davidsantiago/hickory/issues/28
(def ^:private whitespace?
  "Is this a string, and does it consist of only whitespace?"
  (every-pred string? (partial re-matches #"\s*")))

(defn ^:private remove-whitespace
  "Walk a given Hiccup form and remove all pure whitespace."
  [row]
  (walk/prewalk
   (fn [form]
     (if (vector? form)
       (into [] (remove whitespace? form))
       form))
   row))

(defn html->hiccup
  "Convert Html syntax to Hiccup syntax, return result in string."
  [content]
  (-> content
      hickory/parse
      hickory/as-hiccup
      remove-whitespace
      str
      (str/replace #"\((.*)\)" "$1")      ; remove first/last ()
      (str/replace #"\"\\n\s*\"" "")      ; remove weird "\n    "
      (str/replace #"\\n      " "")       ; remove weird "\n    "
      (str/replace #"\\n    " "")         ; remove weird "\n    "
      (str/replace #"\[" "\n[")           ; start every opening [ on new line
      (str/replace #"\n\[:html" "[:html") ; first line doesn't neet to add newline char
      (str/replace #" \{\}" "")           ; remove empty {}
      (str/replace #"\s*\n" "\n")         ; remove space in line-end
      (str/replace #"]\s*]" "]]")         ; close ] tag
      identity))