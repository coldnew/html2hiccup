(set-env!
 :dependencies '[[adzerk/boot-cljs              "1.7.48-6"   :scope "test"]
                 [adzerk/boot-cljs-repl         "0.2.0"      :scope "test"]
                 [pandeiro/boot-http            "0.6.3"      :scope "test"]
                 [adzerk/boot-reload            "0.4.4"]
                 [hoplon/boot-hoplon            "0.1.13"]
                 [degree9/boot-bower            "0.2.3"]
                 [org.clojure/clojure           "1.8.0"]
                 [org.clojure/clojurescript     "1.7.228"]
                 [hickory                       "0.6.0"]
                 [hiccups                       "0.3.0"]
                 [cljsjs/codemirror             "5.10.0-0"]
                 [org.omcljs/om                 "1.0.0-alpha22"]
                 [sablono                       "0.5.3"]
                 [cljsjs/react                  "0.14.3-0"]
                 [cljsjs/react-dom              "0.14.3-1"]
                 [cljsjs/react-dom-server       "0.14.3-0"]]

 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"})

(require
 '[degree9.boot-bower       :refer [bower]]
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload       :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask fetch-deps
  "Fetch extra deps."
  []
  (bower :install {:bootstrap  "twbs/bootstrap#v3.3.6"
                   :codemirror "codemirror/CodeMirror#5.10.0"}))

(deftask build []
  (comp (speak)
        (cljs)))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'html2hiccup.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))

(deftask prod
  "Simple alias to run application in production mode"
  []
  (comp (production)
        (build)))
