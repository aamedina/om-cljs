(ns user
  "Tools for interactive development with the REPL. This file should
  not be included in a production build of the application."
  (:require [figwheel-sidecar.repl-api :as repl-api :refer [cljs-repl]]
            [clojure.java.io :as io]
            [ring.util.response :as res]))

(def figwheel-config
  {:figwheel-options {:http-server-root "public"
                      :server-port 3449
                      :css-dirs ["resources/public/css"]
                      :server-logfile "/tmp/figwheel.log"
                      :ring-handler 'user/handler}
   :build-ids ["dev"]
   :all-builds [{:id "dev"
                 :source-paths ["src"]
                 :figwheel true
                 :compiler {:main "{{name}}.main"
                            :output-to "resources/public/js/main.js"
                            :output-dir "resources/public/js/out"
                            :asset-path "/js/out"
                            :parallel-build true
                            :optimizations :none
                            :cache-analysis true
                            :source-map true}}]})

(def system
  "A Var containing an object representing the application under
  development."
  nil)

(defn init
  "Creates and initializes the system under development in the Var
  #'system."
  [])

(defn start
  "Starts the system running, updates the Var #'system."
  []
  (repl-api/start-figwheel! figwheel-config))

(defn stop
  "Stops the system if it is currently running, updates the Var
  #'system."
  []
  (repl-api/stop-figwheel!))

(defn go
  "Initializes and starts the system running."
  []
  (init)
  (start)
  :ready)

(defn reset
  "Stops the system, reloads modified source files, and restarts it."
  []
  (stop)
  (go))

(defn handler
  [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (slurp "resources/public/index.html")})
