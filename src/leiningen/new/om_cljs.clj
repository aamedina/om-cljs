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
      
      ["project.clj" (render "project.clj" data)]
      ["dev/{{sanitized}}/dev.cljs" (render "dev/dev.cljs" data)]
      ["src/{{sanitized}}/main.cljs" (render "src/main.cljs" data)]
      
      ["resources/public/index.html"
       (render "resources/public/index.html" data)]

      ["dev/user.clj" (render "dev/user.clj" data)])))
