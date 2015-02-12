// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4406__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4406__auto__)){
var ns = temp__4406__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35477_35481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35478_35482 = null;
var count__35479_35483 = (0);
var i__35480_35484 = (0);
while(true){
if((i__35480_35484 < count__35479_35483)){
var f_35485 = cljs.core._nth.call(null,chunk__35478_35482,i__35480_35484);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35485);

var G__35486 = seq__35477_35481;
var G__35487 = chunk__35478_35482;
var G__35488 = count__35479_35483;
var G__35489 = (i__35480_35484 + (1));
seq__35477_35481 = G__35486;
chunk__35478_35482 = G__35487;
count__35479_35483 = G__35488;
i__35480_35484 = G__35489;
continue;
} else {
var temp__4406__auto___35490 = cljs.core.seq.call(null,seq__35477_35481);
if(temp__4406__auto___35490){
var seq__35477_35491__$1 = temp__4406__auto___35490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35477_35491__$1)){
var c__15228__auto___35492 = cljs.core.chunk_first.call(null,seq__35477_35491__$1);
var G__35493 = cljs.core.chunk_rest.call(null,seq__35477_35491__$1);
var G__35494 = c__15228__auto___35492;
var G__35495 = cljs.core.count.call(null,c__15228__auto___35492);
var G__35496 = (0);
seq__35477_35481 = G__35493;
chunk__35478_35482 = G__35494;
count__35479_35483 = G__35495;
i__35480_35484 = G__35496;
continue;
} else {
var f_35497 = cljs.core.first.call(null,seq__35477_35491__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_35497);

var G__35498 = cljs.core.next.call(null,seq__35477_35491__$1);
var G__35499 = null;
var G__35500 = (0);
var G__35501 = (0);
seq__35477_35481 = G__35498;
chunk__35478_35482 = G__35499;
count__35479_35483 = G__35500;
i__35480_35484 = G__35501;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map