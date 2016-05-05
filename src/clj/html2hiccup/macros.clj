(ns html2hiccup.macros
  (:require [clojure.java.io :as io]))

(defmacro read-resource [file]
  (slurp (io/resource file)))
