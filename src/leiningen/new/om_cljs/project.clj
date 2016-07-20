(defproject {{name}} "0.1.0-SNAPSHOT"
  :description ""
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.93"]
                 [org.clojure/core.async "0.2.385"]
                 [org.omcljs/om "1.0.0-alpha40"]
                 [cljsjs/react "15.2.1-1"]
                 [cljsjs/react-dom "15.2.1-1"]
                 [prismatic/om-tools "0.4.0"]
                 [prismatic/dommy "1.1.0"]
                 [sablono "0.7.3"]]
  :plugins [[lein-cljsbuild "1.1.3"]]
  :profiles {:dev {:dependencies [[org.clojure/tools.namespace "0.2.11"]
                                  [figwheel-sidecar "0.5.4-7"]]
                   :plugins [[lein-figwheel "0.5.4-7"]]
                   :source-paths ["dev"]
                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :css-dirs ["resources/public/css"]
                              :repl false
                              :server-logfile "/tmp/figwheel.log"
                              :ring-handler user/handler}}}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:main {{name}}.main
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :asset-path "/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main {{name}}.main
                                   :output-to "resources/public/js/main.js"
                                   :asset-path "/js/out"
                                   :pretty-print false
                                   :optimizations :advanced
                                   :source-map true}}]}
  :jvm-opts ^:replace ["-server"])
