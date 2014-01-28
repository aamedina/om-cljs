(ns {{name}}.core
    (:require [clojure.browser.repl]
              [cljs.core.async :as a :refer [<! >! put! take! chan]]
              [om.core :as om :include-macros true]
              [sablono.core :as html :refer [html] :include-macros true]
              [dommy.core :as dom])
    (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                     [dommy.macros :refer [sel sel1 node deftemplate]]))

(enable-console-print!)

(defn ^:export -main []
  (om/root {}
    (fn [data owner]
      (om/component
        (html [:h1 "Hello, world!"])))
    (sel1 :#content)))
