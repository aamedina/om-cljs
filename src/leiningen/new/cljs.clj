(ns leiningen.new.cljs
  (:require [leiningen.new.templates :refer [renderer name-to-path ->files]]
            [leiningen.core.main :as main]))

(def render (renderer "cljs"))

(defn cljs
  ""
  [name]
  (let [data {:name name
              :sanitized (name-to-path name)}]
    (main/info "Generating fresh 'lein new' cljs project.")
    (->files data
      ["src/{{sanitized}}/foo.clj" (render "foo.clj" data)])))
