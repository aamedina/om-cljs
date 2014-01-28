# cljs

A Leiningen template for ClojureScript projects.

Comes with vanilla Bootstrap 3 LESS for CSS, a dev server with easy to use ClojureScript REPL support, and a "hello, world!" Om component to get you started!

## Usage

Fire up a REPL and when you're in your user namespace, type (go) to start the dev server on localhost:3000.

You can exit the CLJS REPL by typing :cljs/quit, and reset (and reload all Clojure namespaces as well, useful for easing macro development in ClojureScript) by calling (reset). Calling (reset) will also bring you back into a CLJS REPL.

To compile the LESS, go into the resources directory of your project and type "npm install" (to pull down grunt modules), and globally install grunt-cli if you don't have it already by calling "npm install -g grunt-cli".

Now you can recompile the LESS automatically by running "grunt watch", which will recompile when one of the LESS source files are changed, or alternatively simply run "grunt recess" for a once off compilation. 

## License

Copyright © 2014 Adrian Medina

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
