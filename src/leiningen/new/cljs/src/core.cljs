(ns {{name}}.core
    (:require [clojure.browser.repl]
              [cljs.core.async :as a :refer [<! >! put! take! chan]]
              [cljs.core.match :as m]
              [dommy.core :as dom])
    (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                     [cljs.core.match.macros :as m :refer [match]]
                     [dommy.macros :refer [sel sel1 node deftemplate]]))

(enable-console-print!)

(defn ^:export -main []
  (println "Hello, world!"))
