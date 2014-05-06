(ns {{name}}.core
    (:require [weasel.repl :as repl]
              [cljs.core.async :as a :refer [<! >! put! take! chan]]
              [om.core :as om :include-macros true]
              [sablono.core :as html :refer [html] :include-macros true]
              [dommy.core :as dom])
    (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                     [dommy.macros :refer [sel sel1 node deftemplate]]))

(enable-console-print!)

(defn hello-world
  [data owner]
  (om/component
   (html [:h1 "Hello, world!"])))

(defn ^:export -main []
  (repl/connect "ws://localhost:9001")
  (om/root hello-world
    {} {:target (sel1 :#content)}))
