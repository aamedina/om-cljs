(defproject {{name}} "0.1.0-SNAPSHOT"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype"
                 "http://oss.sonatype.org/content/repositories/snapshots"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 [om "0.6.2"]
                 [sablono "0.2.16"]
                 [prismatic/dommy "0.1.2"]
                 [weasel "0.2.0"]]
  :profiles {:dev {:dependencies [[org.clojure/tools.namespace "0.2.4"]
                                  [ring "1.2.1"]
                                  [compojure "1.1.6"]
                                  [enlive "1.1.4"]]
                   :plugins [[com.cemerick/austin "0.1.5-SNAPSHOT"]]
                   :source-paths ["dev"]}}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/main.js"
                           :output-dir "resources/public/js/out"
                           :source-map true
                           :optimizations :none}}
               {:id "prod"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/main.js"
                           :pretty-print false
                           :preamble ["react/react.min.js"]
                           :externs ["react/externs/react.js"]
                           :optimizations :advanced}}]})
