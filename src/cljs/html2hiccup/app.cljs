(ns html2hiccup.app
  (:require [goog.dom     :as gdom]
            [om.next      :as om   :refer-macros [defui]]
            [om.dom       :as dom]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defui MainWindow
  Object
  (render [this]
          (html
           [:div.container
            [:div.row
             [:div.col-md-12 [:h2 "Convert Html to Hiccup"]]]
            [:div.row
             ;; Html
             [:div.col-md-6 [:h3 "HTML"]
              [:div#in_html [:div.col-md-6 []]]]
             ;; Hiccup
             [:div.col-md-6 [:h3 "Hiccup"]
              [:div#in_hiccup [:div.col-md-6 []]]]
             ;; footer
             ;; [:p "© 2016 Yen-Chin, Lee <coldnew>"]
             ]])))

(def mainwin (om/factory MainWindow))


(defn init []
  (js/ReactDOM.render
   (mainwin ;; {:title "Hello, world!"}
    {})
   (gdom/getElement "app")))
