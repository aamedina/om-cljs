(ns user
  "Tools for interactive development with the REPL. This file should
  not be included in a production build of the application."
  (:require
   [clojure.edn :as edn]
   [cemerick.austin]
   [cemerick.austin.repls
    :refer (browser-repl-env browser-connected-repl-js exec)]
   [cljs.closure :as cljsc]
   [clojure.java.shell :refer (sh with-sh-dir)]
   [clojure.java.browse :refer (browse-url)]
   [clojure.java.io :as io]
   [clojure.java.javadoc :refer (javadoc)]
   [clojure.pprint :refer (pprint)]
   [clojure.reflect :refer (reflect)]
   [clojure.repl :refer (apropos dir doc find-doc pst source)]
   [clojure.set :as set]
   [clojure.string :as str]
   [clojure.test :as test]
   [clojure.tools.namespace.repl :refer (refresh refresh-all)]
   [cemerick.austin]
   [cemerick.austin.repls :as repls :refer [browser-repl-env exec]]
   [compojure.core :refer (GET ANY POST defroutes)]
   [compojure.route :as route]
   [compojure.handler :refer [site]]
   [net.cgrand.enlive-html :as enlive :refer [deftemplate]]
   [ring.util.response :as res]
   [ring.adapter.jetty :refer (run-jetty)]))

(deftemplate index
  (io/resource "public/index.html")
  []
  [:body]
  (enlive/append
    (enlive/html [:script (repls/browser-connected-repl-js)])))

(defroutes app
  (route/resources "/")
  (ANY "*" req (index)))

(def system
  "A Var containing an object representing the application under
  development."
  nil)

(defn init
  "Creates and initializes the system under development in the Var
  #'system."
  []
  (alter-var-root
    #'system
    (fn [system]
      (if-not (:server system)
        {:server (run-jetty #'app {:port 3000 :join? false})
         :repl-env (reset! browser-repl-env (cemerick.austin/repl-env))}
        (do (.start (:server system)) system)))))

(defn start
  "Starts the system running, updates the Var #'system."
  []
  (cemerick.austin.repls/cljs-repl (:repl-env system) :optimizations :none))

(defn stop
  "Stops the system if it is currently running, updates the Var
  #'system."
  []
  (when (try (.stop (:server system))
             (catch Throwable e false))
    true))

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
  (refresh-all :after 'user/go))
