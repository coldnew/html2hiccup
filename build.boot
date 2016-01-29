(set-env!
 :dependencies '[[adzerk/boot-cljs              "1.7.48-6"   :scope "test"]
                 [adzerk/boot-cljs-repl         "0.2.0"      :scope "test"]
                 [adzerk/boot-reload            "0.4.4"]
                 [hoplon/boot-hoplon            "0.1.13"]
                 [degree9/boot-bower            "0.2.3"]
                 [hoplon/hoplon                 "6.0.0-alpha11"]
                 [hoplon/twitter-bootstrap      "0.2.0"]
                 [org.clojure/clojure           "1.8.0"]
                 [org.clojure/clojurescript     "1.7.228"]
                 [hickory                       "0.6.0"]
                 [hiccups                       "0.3.0"]
                 [cljsjs/codemirror             "5.10.0-0"]
                 [tailrecursion/boot-jetty      "0.1.3"]]
 :source-paths #{"src/hoplon" "src/cljs"}
 :asset-paths  #{"assets"})

(require
 '[degree9.boot-bower :refer [bower]]
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload       :refer [reload]]
 '[hoplon.boot-hoplon       :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]])

(deftask fetch-deps
  "Fetch extra deps."
  []
  (bower :install {:bootstrap  "twbs/bootstrap#v3.3.6"
                   :codemirror "codemirror/CodeMirror#5.10.0"}))

(deftask dev
  "Build html2hiccup for local development."
  []
  (comp
   (fetch-deps)
   (watch)
   (speak)
   (hoplon)
   (cljs-repl)
   (reload)
   (cljs)
   (serve :port 8000)))

(deftask prod
  "Build html2hiccup for production deployment."
  []
  (comp
   (fetch-deps)
   (hoplon)
   (cljs :optimizations :advanced)
   (prerender)))
