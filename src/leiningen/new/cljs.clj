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
      [".gitignore" (render ".gitignore" data)]

      ["README.md" (render "README.md" data)]
      
      ["project.clj" (render "project.clj" data)]
      ["src/{{sanitized}}/core.cljs" (render "src/core.cljs" data)]

      ["resources/Gruntfile.js" (render "resources/Gruntfile.js" data)]
      ["resources/package.json" (render "resources/package.json" data)]

      ["resources/less/alerts.less"
       (render "resources/less/alerts.less" data)]
      ["resources/less/badges.less"
       (render "resources/less/badges.less" data)]
      ["resources/less/bootstrap.less"
       (render "resources/less/bootstrap.less" data)]
      ["resources/less/overrides.less"
       (render "resources/less/overrides.less")]
      ["resources/less/breadcrumbs.less"
       (render "resources/less/breadcrumbs.less" data)]
      ["resources/less/button-groups.less"
       (render "resources/less/button-groups.less" data)]
      ["resources/less/buttons.less"
       (render "resources/less/buttons.less" data)]
      ["resources/less/carousel.less"
       (render "resources/less/carousel.less" data)]
      ["resources/less/close.less"
       (render "resources/less/close.less" data)]
      ["resources/less/code.less"
       (render "resources/less/code.less" data)]
      ["resources/less/component-animations.less"
       (render "resources/less/component-animations.less" data)]
      ["resources/less/dropdowns.less"
       (render "resources/less/dropdowns.less" data)]
      ["resources/less/forms.less"
       (render "resources/less/forms.less" data)]
      ["resources/less/glyphicons.less"
       (render "resources/less/glyphicons.less" data)]
      ["resources/less/navbar.less"
       (render "resources/less/navbar.less" data)]
      ["resources/less/normalize.less"
       (render "resources/less/normalize.less" data)]
      ["resources/less/navs.less"
       (render "resources/less/navs.less" data)]
      ["resources/less/tables.less"
       (render "resources/less/tables.less" data)]
      ["resources/less/theme.less"
       (render "resources/less/theme.less" data)]
      ["resources/less/thumbnails.less"
       (render "resources/less/thumbnails.less" data)]
      ["resources/less/grid.less"
       (render "resources/less/grid.less" data)]
      ["resources/less/input-groups.less"
       (render "resources/less/input-groups.less" data)]
      ["resources/less/jumbotron.less"
       (render "resources/less/jumbotron.less" data)]
      ["resources/less/labels.less"
       (render "resources/less/labels.less" data)]
      ["resources/less/list-group.less"
       (render "resources/less/list-group.less" data)]
      ["resources/less/media.less"
       (render "resources/less/media.less" data)]
      ["resources/less/mixins.less"
       (render "resources/less/mixins.less" data)]
      ["resources/less/modals.less"
       (render "resources/less/modals.less" data)]
      ["resources/less/pager.less"
       (render "resources/less/pager.less" data)]
      ["resources/less/pagination.less"
       (render "resources/less/pagination.less" data)]
      ["resources/less/panels.less"
       (render "resources/less/panels.less" data)]
      ["resources/less/popovers.less"
       (render "resources/less/popovers.less" data)]
      ["resources/less/print.less"
       (render "resources/less/print.less" data)]
      ["resources/less/progress-bars.less"
       (render "resources/less/progress-bars.less" data)]
      ["resources/less/responsive-utilities.less"
       (render "resources/less/responsive-utilities.less" data)]
      ["resources/less/scaffolding.less"
       (render "resources/less/scaffolding.less" data)]
      ["resources/less/tooltip.less"
       (render "resources/less/tooltip.less" data)]
      ["resources/less/type.less"
       (render "resources/less/type.less" data)]
      ["resources/less/utilities.less"
       (render "resources/less/utilities.less" data)]
      ["resources/less/variables.less"
       (render "resources/less/variables.less" data)]
      ["resources/less/wells.less"
       (render "resources/less/wells.less" data)]
      
      ["resources/public/404.html"
       (render "resources/public/404.html" data)]
      ["resources/public/favicon.ico"
       (render "resources/public/favicon.ico" data)]
      ["resources/public/index.html"
       (render "resources/public/index.html" data)]

      ["resources/public/fonts/glyphicons-halflings-regular.eot"
       (render "resources/public/fonts/glyphicons-halflings-regular.eot" data)]
      ["resources/public/fonts/glyphicons-halflings-regular.svg"
       (render "resources/public/fonts/glyphicons-halflings-regular.svg" data)]
      ["resources/public/fonts/glyphicons-halflings-regular.ttf"
       (render "resources/public/fonts/glyphicons-halflings-regular.ttf" data)]
      ["resources/public/fonts/glyphicons-halflings-regular.woff"
       (render "resources/public/fonts/glyphicons-halflings-regular.woff" data)]

      ["resources/public/css/goog.css"
       (render "resources/public/css/goog.css" data)]

      ["dev/user.clj" (render "dev/user.clj" data)]
      )))
