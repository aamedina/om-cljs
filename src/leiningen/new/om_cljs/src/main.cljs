(ns {{name}}.main
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [om-tools.core :refer-macros [defcomponent]]
            [dommy.core :refer-macros [sel1]]))

(defonce app-state (atom {:text "Hello, production!"}))

(defcomponent app
  [data owner]
  (render [_]
    (html
      [:h1 (:text data)])))

(om/root app app-state {:target (sel1 :#app)})

