(ns leiningen.new.om-cljs
  (:require [leiningen.new.templates :refer [renderer name-to-path ->files]]
            [leiningen.core.main :as main]))

(def render (renderer "om-cljs"))

(defn om-cljs
  ""
  [name]
  (let [data {:name name
              :sanitized (name-to-path name)}]
    (main/info "Generating fresh 'lein new' om-cljs project.")
    (->files data
      [".gitignore" (render ".gitignore" data)]

      ["README.md" (render "README.md" data)]

      ["epl.html" (render "epl.html" data)]
      
      ["project.clj" (render "project.clj" data)]
      ["src/{{sanitized}}/core.cljs" (render "src/core.cljs" data)]
      
      ["resources/public/404.html"
       (render "resources/public/404.html" data)]
      ["resources/public/favicon.ico"
       (render "resources/public/favicon.ico" data)]
      ["resources/public/index.html"
       (render "resources/public/index.html" data)]

      ["resources/.bowerrc"
       (render "resources/.bowerrc" data)]
      
      ["resources/build.sh"
       (render "resources/build.sh" data)]

      ["resources/public/css/goog.css"
       (render "resources/public/css/goog.css" data)]

      ["dev/user.clj" (render "dev/user.clj" data)])))
