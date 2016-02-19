(ns html2hiccup.converter
  (:require [clojure.string :as str]
            [hickory.core   :as hickory]))

(defn html->hiccup
  "Convert Html syntax to Hiccup syntax, return result in string."
  [content]
  (-> content
      hickory/parse
      hickory/as-hiccup
      str
      (str/replace #"\((.*)\)" "$1")                 ; remove first/last ()
      (str/replace #"\"\\n\s*\"" "")                 ; remove weird "\n    "
      (str/replace #"\"\\n\s*(.*)\\n\s*\"" "\"$1\"") ; remove weird "\n    "
      (str/replace #"\"\\n\s*(.*)" "\"$1")           ; remove weird "\n    "
      (str/replace #"\"(.*)\\n\s*\"" "\"$1\"")       ; remove weird "\n    "
      (str/replace #"\[" "\n[")                      ; start every opening [ on new line
      (str/replace #"\n\[:html" "[:html")            ; first line doesn't neet to add newline char
      (str/replace #" \{\}" "")                      ; remove empty {}
      (str/replace #"\s*\n" "\n")                    ; remove space in line-end
      (str/replace #"]\s*]" "]]")                    ; close ] tag
      identity))