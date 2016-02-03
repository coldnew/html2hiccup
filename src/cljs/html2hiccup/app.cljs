(ns html2hiccup.app
  (:require [goog.dom     :as gdom]
            [om.next      :as om   :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [hickory.core :as hickory]
            [clojure.string :as str]
            [cljsjs.codemirror]))

(enable-console-print!)

(def default-content
  "<div class=\"container\">
  <div class=\"row\">
    <h2>Html to Hiccup</h2>
    <a href=\"https://github.com/coldnew/html2hiccup\">
      Fork me from GitHub
    </a>
    <p>
      Edit Html here and see the generated Hiccup syntax :)
    </p>
  </div>
</div>")

(defn- html->hiccup
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

(defn- create-editor [id cfg]
  (.fromTextArea js/CodeMirror (gdom/getElement id)
                 (clj->js (merge {:lineNumbers true
                                  :indentWithTabs false
                                  :matchBrackets true
                                  :indentAuto true} cfg))))

(defui MainWindow
  Object
  (componentDidMount [this]
                     ;; (set! (.-value (gdom/getElement "htmlEdit") ) "asd")
                     (let [htmlEdit (create-editor "htmlEdit"
                                                   {:autofocus true
                                                    :mode "text/html"
                                                    :autoCloseTags true
                                                    :autoCloseBrackets true})
                           hiccupEdit (create-editor "hiccupEdit"
                                                     {:autofocus false
                                                      :mode "clojure"
                                                      :readOnly true})]
                       ;; When html change, convert it to hiccup style
                       (doto htmlEdit
                         (.on "change"
                              (fn []
                                (.setValue hiccupEdit (html->hiccup (.getValue htmlEdit)))
                                (loop [i 0] ; indent whole buffer
                                  (when (< i (.lineCount hiccupEdit))
                                    (.indentLine hiccupEdit i)
                                    (recur (inc i))))))
                         ;; setup default value
                         (.setValue default-content))))
  (render [this]
          (html
           [:div.container
            [:div.row
             [:div.col-md-12 [:h2 "Html to Hiccup"]]]
            [:div.row
             ;; Html
             [:div.col-md-6 [:h3 "HTML"]
              [:textarea
               {:id "htmlEdit" :class "form-control col-md-6"}]]
             ;; Hiccup
             [:div.col-md-6 [:h3 "Hiccup"]
              [:textarea
               {:id "hiccupEdit" :class "form-control col-md-6"}]]
             ;; footer
             [:p "© 2016 Yen-Chin, Lee <coldnew>"]
             ]])))

(def mainwin (om/factory MainWindow))

(defn init []
  (js/ReactDOM.render
   (mainwin {})
   (gdom/getElement "app")))
