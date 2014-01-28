(defproject {{name}} "0.1.0-SNAPSHOT"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype"
                 "http://oss.sonatype.org/content/repositories/snapshots"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.3.0"]
                 [sablono "0.2.3"]
                 [riddley "0.1.6"]
                 [prismatic/dommy "0.1.2"]
                 [cider/cider-nrepl "0.1.0-SNAPSHOT"]]
  :repl-options {:nrepl-middleware
                 [cider.nrepl.middleware.doc/wrap-doc
                  cider.nrepl.middleware.complete/wrap-complete]}
  :profiles {:dev {:dependencies [[org.clojure/tools.namespace "0.2.4"]
                                  [ring "1.2.0"]
                                  [compojure "1.1.6"]
                                  [enlive "1.1.4"]]
                   :plugins [[com.cemerick/austin "0.1.4-SNAPSHOT"]]
                   :source-paths ["dev"]}}
  :plugins [[lein-cljsbuild "1.0.1"]]
  :cljsbuild {:builds
              [{:source-paths ["src"]
                :compiler {:output-to "resources/public/js/main.js"
                           :output-dir "resources/public/js/out"
                           :source-map "resources/public/js/main.js.map"
                           :source-map-path "resources/public/js/out"
                           :optimizations :none}}]})
