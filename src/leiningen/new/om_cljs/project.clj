(defproject {{name}} "0.1.0-SNAPSHOT"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype" "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha2"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]
                 [sablono "0.2.22"]
                 [cljs-http "0.1.16"]
                 [weasel "0.4.0-SNAPSHOT"]
                 [prismatic/dommy "1.0.0"]]
  :profiles {:dev {:dependencies [[org.clojure/tools.namespace "0.2.7"]
                                  [ring "1.3.1"]
                                  [ring/ring-defaults "0.1.1"]
                                  [compojure "1.1.9"]
                                  [enlive "1.1.5"]]
                   :plugins [[com.cemerick/austin "0.2.0-SNAPSHOT"]]
                   :source-paths ["dev"]}}
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
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
