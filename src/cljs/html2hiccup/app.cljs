(ns html2hiccup.app
  (:require-macros [html2hiccup.macros :refer [read-resource]])
  (:require [goog.dom       :as gdom]
            [om.next        :as om   :refer-macros [defui]]
            [om.dom         :as dom]
            [cljsjs.material-ui]
            [cljs-react-material-ui.core :as ui]
            [cljs-react-material-ui.icons :as ic]
            ;; libraries
            [html2hiccup.converter :refer [html->hiccup]]
            ;; codemirror and it's friends
            [cljsjs.codemirror]
            [cljsjs.codemirror.mode.xml]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.addon.edit.closetag]
            [cljsjs.codemirror.addon.edit.closebrackets]
            [cljsjs.codemirror.addon.edit.matchbrackets]))

(enable-console-print!)

(def default-content
  (read-resource "data/template.html"))

(defn- create-editor [id cfg]
  (.fromTextArea js/CodeMirror (gdom/getElement id)
                 (clj->js (merge {:lineNumbers true
                                  :indentWithTabs false
                                  :matchBrackets true
                                  :indentAuto true} cfg))))

(defui MainWindow
  Object
  (componentDidMount [this]
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
          (ui/mui-theme-provider
           {:mui-theme (ui/get-mui-theme
                        {:palette {:primary1-color (ui/color :deep-orange-500)}})}
           (dom/div {:class-name "container"}
                    ;; titlebar
                    (ui/app-bar {:title "HTML to Hiccup"
                                 :show-menu-icon-button false
                                 :icon-element-right (ui/icon-button {:icon-class-name "muidocs-icon-custom-github"
                                                                      :touch true
                                                                      :link-button true
                                                                      :href "https://github.com/coldnew/html2hiccup"
                                                                      :target :_blank})})
                    ;; textareas
                    (ui/paper {:class-name "row mar-top-20" :id "wrapper"}
                              ;; left
                              (dom/div #js {:className "col-md-6"}
                                       (dom/textarea #js {:id "htmlEdit"}))
                              ;; right
                              (dom/div #js {:class-name "col-md-6"}
                                       (dom/textarea #js {:id "hiccupEdit"})))
                    ;; footer
                    (dom/div #js {:className "footer"}
                             (dom/div #js {:className "container"}
                                      "© 2016 Yen-Chin, Lee <coldnew>"))))))

(def mainwin (om/factory MainWindow))

(defn init []
  (js/ReactDOM.render
   (mainwin {})
   (gdom/getElement "app")))