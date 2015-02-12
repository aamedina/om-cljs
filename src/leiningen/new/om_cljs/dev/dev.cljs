(ns {{name}}.dev
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]
            [weasel.repl :as repl]
            [figwheel.client :as figwheel]))

(defonce app-state (atom {:text "Hello, development!"}))

(defcomponent app
  [data owner]
  (render [_]
    (html
      [:h1 (:text data)])))

(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(figwheel/start {:build-id "dev"})

(om/root app app-state {:target (sel1 :#app)})
