// Compiled by ClojureScript 0.0-2816 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__14441__auto__ = elem.textContent;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4404__auto__ = elem.classList;
if(cljs.core.truth_(temp__4404__auto__)){
var class_list = temp__4404__auto__;
return class_list.contains(c__$1);
} else {
var temp__4406__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4406__auto__)){
var class_name = temp__4406__auto__;
var temp__4406__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4406__auto____$1)){
var i = temp__4406__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__29147_SHARP_){
return !((p1__29147_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__29154_29160 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__29155_29161 = null;
var count__29156_29162 = (0);
var i__29157_29163 = (0);
while(true){
if((i__29157_29163 < count__29156_29162)){
var vec__29158_29164 = cljs.core._nth.call(null,chunk__29155_29161,i__29157_29163);
var k_29165 = cljs.core.nth.call(null,vec__29158_29164,(0),null);
var v_29166 = cljs.core.nth.call(null,vec__29158_29164,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_29165),v_29166);

var G__29167 = seq__29154_29160;
var G__29168 = chunk__29155_29161;
var G__29169 = count__29156_29162;
var G__29170 = (i__29157_29163 + (1));
seq__29154_29160 = G__29167;
chunk__29155_29161 = G__29168;
count__29156_29162 = G__29169;
i__29157_29163 = G__29170;
continue;
} else {
var temp__4406__auto___29171 = cljs.core.seq.call(null,seq__29154_29160);
if(temp__4406__auto___29171){
var seq__29154_29172__$1 = temp__4406__auto___29171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29154_29172__$1)){
var c__15228__auto___29173 = cljs.core.chunk_first.call(null,seq__29154_29172__$1);
var G__29174 = cljs.core.chunk_rest.call(null,seq__29154_29172__$1);
var G__29175 = c__15228__auto___29173;
var G__29176 = cljs.core.count.call(null,c__15228__auto___29173);
var G__29177 = (0);
seq__29154_29160 = G__29174;
chunk__29155_29161 = G__29175;
count__29156_29162 = G__29176;
i__29157_29163 = G__29177;
continue;
} else {
var vec__29159_29178 = cljs.core.first.call(null,seq__29154_29172__$1);
var k_29179 = cljs.core.nth.call(null,vec__29159_29178,(0),null);
var v_29180 = cljs.core.nth.call(null,vec__29159_29178,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_29179),v_29180);

var G__29181 = cljs.core.next.call(null,seq__29154_29172__$1);
var G__29182 = null;
var G__29183 = (0);
var G__29184 = (0);
seq__29154_29160 = G__29181;
chunk__29155_29161 = G__29182;
count__29156_29162 = G__29183;
i__29157_29163 = G__29184;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__29185__i = 0, G__29185__a = new Array(arguments.length -  1);
while (G__29185__i < G__29185__a.length) {G__29185__a[G__29185__i] = arguments[G__29185__i + 1]; ++G__29185__i;}
  kvs = new cljs.core.IndexedSeq(G__29185__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29186){
var elem = cljs.core.first(arglist__29186);
var kvs = cljs.core.rest(arglist__29186);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__29193_29199 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__29194_29200 = null;
var count__29195_29201 = (0);
var i__29196_29202 = (0);
while(true){
if((i__29196_29202 < count__29195_29201)){
var vec__29197_29203 = cljs.core._nth.call(null,chunk__29194_29200,i__29196_29202);
var k_29204 = cljs.core.nth.call(null,vec__29197_29203,(0),null);
var v_29205 = cljs.core.nth.call(null,vec__29197_29203,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_29204,[cljs.core.str(v_29205),cljs.core.str("px")].join(''));

var G__29206 = seq__29193_29199;
var G__29207 = chunk__29194_29200;
var G__29208 = count__29195_29201;
var G__29209 = (i__29196_29202 + (1));
seq__29193_29199 = G__29206;
chunk__29194_29200 = G__29207;
count__29195_29201 = G__29208;
i__29196_29202 = G__29209;
continue;
} else {
var temp__4406__auto___29210 = cljs.core.seq.call(null,seq__29193_29199);
if(temp__4406__auto___29210){
var seq__29193_29211__$1 = temp__4406__auto___29210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29193_29211__$1)){
var c__15228__auto___29212 = cljs.core.chunk_first.call(null,seq__29193_29211__$1);
var G__29213 = cljs.core.chunk_rest.call(null,seq__29193_29211__$1);
var G__29214 = c__15228__auto___29212;
var G__29215 = cljs.core.count.call(null,c__15228__auto___29212);
var G__29216 = (0);
seq__29193_29199 = G__29213;
chunk__29194_29200 = G__29214;
count__29195_29201 = G__29215;
i__29196_29202 = G__29216;
continue;
} else {
var vec__29198_29217 = cljs.core.first.call(null,seq__29193_29211__$1);
var k_29218 = cljs.core.nth.call(null,vec__29198_29217,(0),null);
var v_29219 = cljs.core.nth.call(null,vec__29198_29217,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_29218,[cljs.core.str(v_29219),cljs.core.str("px")].join(''));

var G__29220 = cljs.core.next.call(null,seq__29193_29211__$1);
var G__29221 = null;
var G__29222 = (0);
var G__29223 = (0);
seq__29193_29199 = G__29220;
chunk__29194_29200 = G__29221;
count__29195_29201 = G__29222;
i__29196_29202 = G__29223;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__29224__i = 0, G__29224__a = new Array(arguments.length -  1);
while (G__29224__i < G__29224__a.length) {G__29224__a[G__29224__i] = arguments[G__29224__i + 1]; ++G__29224__i;}
  kvs = new cljs.core.IndexedSeq(G__29224__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__29225){
var elem = cljs.core.first(arglist__29225);
var kvs = cljs.core.rest(arglist__29225);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__29234 = elem;
(G__29234[k__$1] = v);

return G__29234;
} else {
var G__29235 = elem;
G__29235.setAttribute(k__$1,v);

return G__29235;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__29242__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__29236_29243 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__29237_29244 = null;
var count__29238_29245 = (0);
var i__29239_29246 = (0);
while(true){
if((i__29239_29246 < count__29238_29245)){
var vec__29240_29247 = cljs.core._nth.call(null,chunk__29237_29244,i__29239_29246);
var k_29248__$1 = cljs.core.nth.call(null,vec__29240_29247,(0),null);
var v_29249__$1 = cljs.core.nth.call(null,vec__29240_29247,(1),null);
set_attr_BANG_.call(null,elem,k_29248__$1,v_29249__$1);

var G__29250 = seq__29236_29243;
var G__29251 = chunk__29237_29244;
var G__29252 = count__29238_29245;
var G__29253 = (i__29239_29246 + (1));
seq__29236_29243 = G__29250;
chunk__29237_29244 = G__29251;
count__29238_29245 = G__29252;
i__29239_29246 = G__29253;
continue;
} else {
var temp__4406__auto___29254 = cljs.core.seq.call(null,seq__29236_29243);
if(temp__4406__auto___29254){
var seq__29236_29255__$1 = temp__4406__auto___29254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29236_29255__$1)){
var c__15228__auto___29256 = cljs.core.chunk_first.call(null,seq__29236_29255__$1);
var G__29257 = cljs.core.chunk_rest.call(null,seq__29236_29255__$1);
var G__29258 = c__15228__auto___29256;
var G__29259 = cljs.core.count.call(null,c__15228__auto___29256);
var G__29260 = (0);
seq__29236_29243 = G__29257;
chunk__29237_29244 = G__29258;
count__29238_29245 = G__29259;
i__29239_29246 = G__29260;
continue;
} else {
var vec__29241_29261 = cljs.core.first.call(null,seq__29236_29255__$1);
var k_29262__$1 = cljs.core.nth.call(null,vec__29241_29261,(0),null);
var v_29263__$1 = cljs.core.nth.call(null,vec__29241_29261,(1),null);
set_attr_BANG_.call(null,elem,k_29262__$1,v_29263__$1);

var G__29264 = cljs.core.next.call(null,seq__29236_29255__$1);
var G__29265 = null;
var G__29266 = (0);
var G__29267 = (0);
seq__29236_29243 = G__29264;
chunk__29237_29244 = G__29265;
count__29238_29245 = G__29266;
i__29239_29246 = G__29267;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__29242 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__29268__i = 0, G__29268__a = new Array(arguments.length -  3);
while (G__29268__i < G__29268__a.length) {G__29268__a[G__29268__i] = arguments[G__29268__i + 3]; ++G__29268__i;}
  kvs = new cljs.core.IndexedSeq(G__29268__a,0);
} 
return G__29242__delegate.call(this,elem,k,v,kvs);};
G__29242.cljs$lang$maxFixedArity = 3;
G__29242.cljs$lang$applyTo = (function (arglist__29269){
var elem = cljs.core.first(arglist__29269);
arglist__29269 = cljs.core.next(arglist__29269);
var k = cljs.core.first(arglist__29269);
arglist__29269 = cljs.core.next(arglist__29269);
var v = cljs.core.first(arglist__29269);
var kvs = cljs.core.rest(arglist__29269);
return G__29242__delegate(elem,k,v,kvs);
});
G__29242.cljs$core$IFn$_invoke$arity$variadic = G__29242__delegate;
return G__29242;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
var G__29270 = null;
if (arguments.length > 3) {
var G__29271__i = 0, G__29271__a = new Array(arguments.length -  3);
while (G__29271__i < G__29271__a.length) {G__29271__a[G__29271__i] = arguments[G__29271__i + 3]; ++G__29271__i;}
G__29270 = new cljs.core.IndexedSeq(G__29271__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__29270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_29280__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_29280__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_29280__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__29281__delegate = function (elem,k,ks){
var seq__29276_29282 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__29277_29283 = null;
var count__29278_29284 = (0);
var i__29279_29285 = (0);
while(true){
if((i__29279_29285 < count__29278_29284)){
var k_29286__$1 = cljs.core._nth.call(null,chunk__29277_29283,i__29279_29285);
remove_attr_BANG_.call(null,elem,k_29286__$1);

var G__29287 = seq__29276_29282;
var G__29288 = chunk__29277_29283;
var G__29289 = count__29278_29284;
var G__29290 = (i__29279_29285 + (1));
seq__29276_29282 = G__29287;
chunk__29277_29283 = G__29288;
count__29278_29284 = G__29289;
i__29279_29285 = G__29290;
continue;
} else {
var temp__4406__auto___29291 = cljs.core.seq.call(null,seq__29276_29282);
if(temp__4406__auto___29291){
var seq__29276_29292__$1 = temp__4406__auto___29291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29276_29292__$1)){
var c__15228__auto___29293 = cljs.core.chunk_first.call(null,seq__29276_29292__$1);
var G__29294 = cljs.core.chunk_rest.call(null,seq__29276_29292__$1);
var G__29295 = c__15228__auto___29293;
var G__29296 = cljs.core.count.call(null,c__15228__auto___29293);
var G__29297 = (0);
seq__29276_29282 = G__29294;
chunk__29277_29283 = G__29295;
count__29278_29284 = G__29296;
i__29279_29285 = G__29297;
continue;
} else {
var k_29298__$1 = cljs.core.first.call(null,seq__29276_29292__$1);
remove_attr_BANG_.call(null,elem,k_29298__$1);

var G__29299 = cljs.core.next.call(null,seq__29276_29292__$1);
var G__29300 = null;
var G__29301 = (0);
var G__29302 = (0);
seq__29276_29282 = G__29299;
chunk__29277_29283 = G__29300;
count__29278_29284 = G__29301;
i__29279_29285 = G__29302;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__29281 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__29303__i = 0, G__29303__a = new Array(arguments.length -  2);
while (G__29303__i < G__29303__a.length) {G__29303__a[G__29303__i] = arguments[G__29303__i + 2]; ++G__29303__i;}
  ks = new cljs.core.IndexedSeq(G__29303__a,0);
} 
return G__29281__delegate.call(this,elem,k,ks);};
G__29281.cljs$lang$maxFixedArity = 2;
G__29281.cljs$lang$applyTo = (function (arglist__29304){
var elem = cljs.core.first(arglist__29304);
arglist__29304 = cljs.core.next(arglist__29304);
var k = cljs.core.first(arglist__29304);
var ks = cljs.core.rest(arglist__29304);
return G__29281__delegate(elem,k,ks);
});
G__29281.cljs$core$IFn$_invoke$arity$variadic = G__29281__delegate;
return G__29281;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__29305 = null;
if (arguments.length > 2) {
var G__29306__i = 0, G__29306__a = new Array(arguments.length -  2);
while (G__29306__i < G__29306__a.length) {G__29306__a[G__29306__i] = arguments[G__29306__i + 2]; ++G__29306__i;}
G__29305 = new cljs.core.IndexedSeq(G__29306__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__29305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4404__auto___29331 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___29331)){
var class_list_29332 = temp__4404__auto___29331;
var seq__29319_29333 = cljs.core.seq.call(null,classes__$1);
var chunk__29320_29334 = null;
var count__29321_29335 = (0);
var i__29322_29336 = (0);
while(true){
if((i__29322_29336 < count__29321_29335)){
var c_29337 = cljs.core._nth.call(null,chunk__29320_29334,i__29322_29336);
class_list_29332.add(c_29337);

var G__29338 = seq__29319_29333;
var G__29339 = chunk__29320_29334;
var G__29340 = count__29321_29335;
var G__29341 = (i__29322_29336 + (1));
seq__29319_29333 = G__29338;
chunk__29320_29334 = G__29339;
count__29321_29335 = G__29340;
i__29322_29336 = G__29341;
continue;
} else {
var temp__4406__auto___29342 = cljs.core.seq.call(null,seq__29319_29333);
if(temp__4406__auto___29342){
var seq__29319_29343__$1 = temp__4406__auto___29342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29319_29343__$1)){
var c__15228__auto___29344 = cljs.core.chunk_first.call(null,seq__29319_29343__$1);
var G__29345 = cljs.core.chunk_rest.call(null,seq__29319_29343__$1);
var G__29346 = c__15228__auto___29344;
var G__29347 = cljs.core.count.call(null,c__15228__auto___29344);
var G__29348 = (0);
seq__29319_29333 = G__29345;
chunk__29320_29334 = G__29346;
count__29321_29335 = G__29347;
i__29322_29336 = G__29348;
continue;
} else {
var c_29349 = cljs.core.first.call(null,seq__29319_29343__$1);
class_list_29332.add(c_29349);

var G__29350 = cljs.core.next.call(null,seq__29319_29343__$1);
var G__29351 = null;
var G__29352 = (0);
var G__29353 = (0);
seq__29319_29333 = G__29350;
chunk__29320_29334 = G__29351;
count__29321_29335 = G__29352;
i__29322_29336 = G__29353;
continue;
}
} else {
}
}
break;
}
} else {
var seq__29323_29354 = cljs.core.seq.call(null,classes__$1);
var chunk__29324_29355 = null;
var count__29325_29356 = (0);
var i__29326_29357 = (0);
while(true){
if((i__29326_29357 < count__29325_29356)){
var c_29358 = cljs.core._nth.call(null,chunk__29324_29355,i__29326_29357);
var class_name_29359 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_29359,c_29358))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_29359 === ""))?c_29358:[cljs.core.str(class_name_29359),cljs.core.str(" "),cljs.core.str(c_29358)].join('')));
}

var G__29360 = seq__29323_29354;
var G__29361 = chunk__29324_29355;
var G__29362 = count__29325_29356;
var G__29363 = (i__29326_29357 + (1));
seq__29323_29354 = G__29360;
chunk__29324_29355 = G__29361;
count__29325_29356 = G__29362;
i__29326_29357 = G__29363;
continue;
} else {
var temp__4406__auto___29364 = cljs.core.seq.call(null,seq__29323_29354);
if(temp__4406__auto___29364){
var seq__29323_29365__$1 = temp__4406__auto___29364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29323_29365__$1)){
var c__15228__auto___29366 = cljs.core.chunk_first.call(null,seq__29323_29365__$1);
var G__29367 = cljs.core.chunk_rest.call(null,seq__29323_29365__$1);
var G__29368 = c__15228__auto___29366;
var G__29369 = cljs.core.count.call(null,c__15228__auto___29366);
var G__29370 = (0);
seq__29323_29354 = G__29367;
chunk__29324_29355 = G__29368;
count__29325_29356 = G__29369;
i__29326_29357 = G__29370;
continue;
} else {
var c_29371 = cljs.core.first.call(null,seq__29323_29365__$1);
var class_name_29372 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_29372,c_29371))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_29372 === ""))?c_29371:[cljs.core.str(class_name_29372),cljs.core.str(" "),cljs.core.str(c_29371)].join('')));
}

var G__29373 = cljs.core.next.call(null,seq__29323_29365__$1);
var G__29374 = null;
var G__29375 = (0);
var G__29376 = (0);
seq__29323_29354 = G__29373;
chunk__29324_29355 = G__29374;
count__29325_29356 = G__29375;
i__29326_29357 = G__29376;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__29377__delegate = function (elem,classes,more_classes){
var seq__29327_29378 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__29328_29379 = null;
var count__29329_29380 = (0);
var i__29330_29381 = (0);
while(true){
if((i__29330_29381 < count__29329_29380)){
var c_29382 = cljs.core._nth.call(null,chunk__29328_29379,i__29330_29381);
add_class_BANG_.call(null,elem,c_29382);

var G__29383 = seq__29327_29378;
var G__29384 = chunk__29328_29379;
var G__29385 = count__29329_29380;
var G__29386 = (i__29330_29381 + (1));
seq__29327_29378 = G__29383;
chunk__29328_29379 = G__29384;
count__29329_29380 = G__29385;
i__29330_29381 = G__29386;
continue;
} else {
var temp__4406__auto___29387 = cljs.core.seq.call(null,seq__29327_29378);
if(temp__4406__auto___29387){
var seq__29327_29388__$1 = temp__4406__auto___29387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29327_29388__$1)){
var c__15228__auto___29389 = cljs.core.chunk_first.call(null,seq__29327_29388__$1);
var G__29390 = cljs.core.chunk_rest.call(null,seq__29327_29388__$1);
var G__29391 = c__15228__auto___29389;
var G__29392 = cljs.core.count.call(null,c__15228__auto___29389);
var G__29393 = (0);
seq__29327_29378 = G__29390;
chunk__29328_29379 = G__29391;
count__29329_29380 = G__29392;
i__29330_29381 = G__29393;
continue;
} else {
var c_29394 = cljs.core.first.call(null,seq__29327_29388__$1);
add_class_BANG_.call(null,elem,c_29394);

var G__29395 = cljs.core.next.call(null,seq__29327_29388__$1);
var G__29396 = null;
var G__29397 = (0);
var G__29398 = (0);
seq__29327_29378 = G__29395;
chunk__29328_29379 = G__29396;
count__29329_29380 = G__29397;
i__29330_29381 = G__29398;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__29377 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__29399__i = 0, G__29399__a = new Array(arguments.length -  2);
while (G__29399__i < G__29399__a.length) {G__29399__a[G__29399__i] = arguments[G__29399__i + 2]; ++G__29399__i;}
  more_classes = new cljs.core.IndexedSeq(G__29399__a,0);
} 
return G__29377__delegate.call(this,elem,classes,more_classes);};
G__29377.cljs$lang$maxFixedArity = 2;
G__29377.cljs$lang$applyTo = (function (arglist__29400){
var elem = cljs.core.first(arglist__29400);
arglist__29400 = cljs.core.next(arglist__29400);
var classes = cljs.core.first(arglist__29400);
var more_classes = cljs.core.rest(arglist__29400);
return G__29377__delegate(elem,classes,more_classes);
});
G__29377.cljs$core$IFn$_invoke$arity$variadic = G__29377__delegate;
return G__29377;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__29401 = null;
if (arguments.length > 2) {
var G__29402__i = 0, G__29402__a = new Array(arguments.length -  2);
while (G__29402__i < G__29402__a.length) {G__29402__a[G__29402__i] = arguments[G__29402__i + 2]; ++G__29402__i;}
G__29401 = new cljs.core.IndexedSeq(G__29402__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4404__auto___29411 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___29411)){
var class_list_29412 = temp__4404__auto___29411;
class_list_29412.remove(c__$1);
} else {
var class_name_29413 = dommy.core.class$.call(null,elem);
var new_class_name_29414 = dommy.utils.remove_class_str.call(null,class_name_29413,c__$1);
if((class_name_29413 === new_class_name_29414)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_29414);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__29415__delegate = function (elem,class$,classes){
var seq__29407 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__29408 = null;
var count__29409 = (0);
var i__29410 = (0);
while(true){
if((i__29410 < count__29409)){
var c = cljs.core._nth.call(null,chunk__29408,i__29410);
remove_class_BANG_.call(null,elem,c);

var G__29416 = seq__29407;
var G__29417 = chunk__29408;
var G__29418 = count__29409;
var G__29419 = (i__29410 + (1));
seq__29407 = G__29416;
chunk__29408 = G__29417;
count__29409 = G__29418;
i__29410 = G__29419;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__29407);
if(temp__4406__auto__){
var seq__29407__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29407__$1)){
var c__15228__auto__ = cljs.core.chunk_first.call(null,seq__29407__$1);
var G__29420 = cljs.core.chunk_rest.call(null,seq__29407__$1);
var G__29421 = c__15228__auto__;
var G__29422 = cljs.core.count.call(null,c__15228__auto__);
var G__29423 = (0);
seq__29407 = G__29420;
chunk__29408 = G__29421;
count__29409 = G__29422;
i__29410 = G__29423;
continue;
} else {
var c = cljs.core.first.call(null,seq__29407__$1);
remove_class_BANG_.call(null,elem,c);

var G__29424 = cljs.core.next.call(null,seq__29407__$1);
var G__29425 = null;
var G__29426 = (0);
var G__29427 = (0);
seq__29407 = G__29424;
chunk__29408 = G__29425;
count__29409 = G__29426;
i__29410 = G__29427;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__29415 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__29428__i = 0, G__29428__a = new Array(arguments.length -  2);
while (G__29428__i < G__29428__a.length) {G__29428__a[G__29428__i] = arguments[G__29428__i + 2]; ++G__29428__i;}
  classes = new cljs.core.IndexedSeq(G__29428__a,0);
} 
return G__29415__delegate.call(this,elem,class$,classes);};
G__29415.cljs$lang$maxFixedArity = 2;
G__29415.cljs$lang$applyTo = (function (arglist__29429){
var elem = cljs.core.first(arglist__29429);
arglist__29429 = cljs.core.next(arglist__29429);
var class$ = cljs.core.first(arglist__29429);
var classes = cljs.core.rest(arglist__29429);
return G__29415__delegate(elem,class$,classes);
});
G__29415.cljs$core$IFn$_invoke$arity$variadic = G__29415__delegate;
return G__29415;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__29430 = null;
if (arguments.length > 2) {
var G__29431__i = 0, G__29431__a = new Array(arguments.length -  2);
while (G__29431__i < G__29431__a.length) {G__29431__a[G__29431__i] = arguments[G__29431__i + 2]; ++G__29431__i;}
G__29430 = new cljs.core.IndexedSeq(G__29431__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__29430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4404__auto___29432 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___29432)){
var class_list_29433 = temp__4404__auto___29432;
class_list_29433.toggle(c__$1);
} else {
toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__29439 = parent;
G__29439.appendChild(child);

return G__29439;
});
var append_BANG___3 = (function() { 
var G__29444__delegate = function (parent,child,more_children){
var seq__29440_29445 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__29441_29446 = null;
var count__29442_29447 = (0);
var i__29443_29448 = (0);
while(true){
if((i__29443_29448 < count__29442_29447)){
var c_29449 = cljs.core._nth.call(null,chunk__29441_29446,i__29443_29448);
append_BANG_.call(null,parent,c_29449);

var G__29450 = seq__29440_29445;
var G__29451 = chunk__29441_29446;
var G__29452 = count__29442_29447;
var G__29453 = (i__29443_29448 + (1));
seq__29440_29445 = G__29450;
chunk__29441_29446 = G__29451;
count__29442_29447 = G__29452;
i__29443_29448 = G__29453;
continue;
} else {
var temp__4406__auto___29454 = cljs.core.seq.call(null,seq__29440_29445);
if(temp__4406__auto___29454){
var seq__29440_29455__$1 = temp__4406__auto___29454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29440_29455__$1)){
var c__15228__auto___29456 = cljs.core.chunk_first.call(null,seq__29440_29455__$1);
var G__29457 = cljs.core.chunk_rest.call(null,seq__29440_29455__$1);
var G__29458 = c__15228__auto___29456;
var G__29459 = cljs.core.count.call(null,c__15228__auto___29456);
var G__29460 = (0);
seq__29440_29445 = G__29457;
chunk__29441_29446 = G__29458;
count__29442_29447 = G__29459;
i__29443_29448 = G__29460;
continue;
} else {
var c_29461 = cljs.core.first.call(null,seq__29440_29455__$1);
append_BANG_.call(null,parent,c_29461);

var G__29462 = cljs.core.next.call(null,seq__29440_29455__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__29440_29445 = G__29462;
chunk__29441_29446 = G__29463;
count__29442_29447 = G__29464;
i__29443_29448 = G__29465;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__29444 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__29466__i = 0, G__29466__a = new Array(arguments.length -  2);
while (G__29466__i < G__29466__a.length) {G__29466__a[G__29466__i] = arguments[G__29466__i + 2]; ++G__29466__i;}
  more_children = new cljs.core.IndexedSeq(G__29466__a,0);
} 
return G__29444__delegate.call(this,parent,child,more_children);};
G__29444.cljs$lang$maxFixedArity = 2;
G__29444.cljs$lang$applyTo = (function (arglist__29467){
var parent = cljs.core.first(arglist__29467);
arglist__29467 = cljs.core.next(arglist__29467);
var child = cljs.core.first(arglist__29467);
var more_children = cljs.core.rest(arglist__29467);
return G__29444__delegate(parent,child,more_children);
});
G__29444.cljs$core$IFn$_invoke$arity$variadic = G__29444__delegate;
return G__29444;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__29468 = null;
if (arguments.length > 2) {
var G__29469__i = 0, G__29469__a = new Array(arguments.length -  2);
while (G__29469__i < G__29469__a.length) {G__29469__a[G__29469__i] = arguments[G__29469__i + 2]; ++G__29469__i;}
G__29468 = new cljs.core.IndexedSeq(G__29469__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__29468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__29475 = parent;
G__29475.insertBefore(child,parent.firstChild);

return G__29475;
});
var prepend_BANG___3 = (function() { 
var G__29480__delegate = function (parent,child,more_children){
var seq__29476_29481 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__29477_29482 = null;
var count__29478_29483 = (0);
var i__29479_29484 = (0);
while(true){
if((i__29479_29484 < count__29478_29483)){
var c_29485 = cljs.core._nth.call(null,chunk__29477_29482,i__29479_29484);
prepend_BANG_.call(null,parent,c_29485);

var G__29486 = seq__29476_29481;
var G__29487 = chunk__29477_29482;
var G__29488 = count__29478_29483;
var G__29489 = (i__29479_29484 + (1));
seq__29476_29481 = G__29486;
chunk__29477_29482 = G__29487;
count__29478_29483 = G__29488;
i__29479_29484 = G__29489;
continue;
} else {
var temp__4406__auto___29490 = cljs.core.seq.call(null,seq__29476_29481);
if(temp__4406__auto___29490){
var seq__29476_29491__$1 = temp__4406__auto___29490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29476_29491__$1)){
var c__15228__auto___29492 = cljs.core.chunk_first.call(null,seq__29476_29491__$1);
var G__29493 = cljs.core.chunk_rest.call(null,seq__29476_29491__$1);
var G__29494 = c__15228__auto___29492;
var G__29495 = cljs.core.count.call(null,c__15228__auto___29492);
var G__29496 = (0);
seq__29476_29481 = G__29493;
chunk__29477_29482 = G__29494;
count__29478_29483 = G__29495;
i__29479_29484 = G__29496;
continue;
} else {
var c_29497 = cljs.core.first.call(null,seq__29476_29491__$1);
prepend_BANG_.call(null,parent,c_29497);

var G__29498 = cljs.core.next.call(null,seq__29476_29491__$1);
var G__29499 = null;
var G__29500 = (0);
var G__29501 = (0);
seq__29476_29481 = G__29498;
chunk__29477_29482 = G__29499;
count__29478_29483 = G__29500;
i__29479_29484 = G__29501;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__29480 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__29502__i = 0, G__29502__a = new Array(arguments.length -  2);
while (G__29502__i < G__29502__a.length) {G__29502__a[G__29502__i] = arguments[G__29502__i + 2]; ++G__29502__i;}
  more_children = new cljs.core.IndexedSeq(G__29502__a,0);
} 
return G__29480__delegate.call(this,parent,child,more_children);};
G__29480.cljs$lang$maxFixedArity = 2;
G__29480.cljs$lang$applyTo = (function (arglist__29503){
var parent = cljs.core.first(arglist__29503);
arglist__29503 = cljs.core.next(arglist__29503);
var child = cljs.core.first(arglist__29503);
var more_children = cljs.core.rest(arglist__29503);
return G__29480__delegate(parent,child,more_children);
});
G__29480.cljs$core$IFn$_invoke$arity$variadic = G__29480__delegate;
return G__29480;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__29504 = null;
if (arguments.length > 2) {
var G__29505__i = 0, G__29505__a = new Array(arguments.length -  2);
while (G__29505__i < G__29505__a.length) {G__29505__a[G__29505__i] = arguments[G__29505__i + 2]; ++G__29505__i;}
G__29504 = new cljs.core.IndexedSeq(G__29505__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__29504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4404__auto___29506 = other.nextSibling;
if(cljs.core.truth_(temp__4404__auto___29506)){
var next_29507 = temp__4404__auto___29506;
dommy.core.insert_before_BANG_.call(null,elem,next_29507);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__29509 = p;
G__29509.removeChild(elem);

return G__29509;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29510){
var vec__29511 = p__29510;
var special_mouse_event = cljs.core.nth.call(null,vec__29511,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__29511,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__29511,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__29511,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__14441__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__14429__auto__ = related_target;
if(cljs.core.truth_(and__14429__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__14429__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__29511,special_mouse_event,real_mouse_event))
});})(vec__29511,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__14429__auto__ = selected_target;
if(cljs.core.truth_(and__14429__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__14429__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__14441__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__29512__i = 0, G__29512__a = new Array(arguments.length -  2);
while (G__29512__i < G__29512__a.length) {G__29512__a[G__29512__i] = arguments[G__29512__i + 2]; ++G__29512__i;}
  args = new cljs.core.IndexedSeq(G__29512__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__29513){
var elem = cljs.core.first(arglist__29513);
arglist__29513 = cljs.core.next(arglist__29513);
var f = cljs.core.first(arglist__29513);
var args = cljs.core.rest(arglist__29513);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__29537_29560 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29561 = cljs.core.nth.call(null,vec__29537_29560,(0),null);
var selector_29562 = cljs.core.nth.call(null,vec__29537_29560,(1),null);
var seq__29538_29563 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29545_29564 = null;
var count__29546_29565 = (0);
var i__29547_29566 = (0);
while(true){
if((i__29547_29566 < count__29546_29565)){
var vec__29554_29567 = cljs.core._nth.call(null,chunk__29545_29564,i__29547_29566);
var orig_type_29568 = cljs.core.nth.call(null,vec__29554_29567,(0),null);
var f_29569 = cljs.core.nth.call(null,vec__29554_29567,(1),null);
var seq__29548_29570 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29568,new cljs.core.PersistentArrayMap.fromArray([orig_type_29568,cljs.core.identity], true, false)));
var chunk__29550_29571 = null;
var count__29551_29572 = (0);
var i__29552_29573 = (0);
while(true){
if((i__29552_29573 < count__29551_29572)){
var vec__29555_29574 = cljs.core._nth.call(null,chunk__29550_29571,i__29552_29573);
var actual_type_29575 = cljs.core.nth.call(null,vec__29555_29574,(0),null);
var factory_29576 = cljs.core.nth.call(null,vec__29555_29574,(1),null);
var canonical_f_29577 = (cljs.core.truth_(selector_29562)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29561,selector_29562):cljs.core.identity).call(null,factory_29576.call(null,f_29569));
dommy.core.update_event_listeners_BANG_.call(null,elem_29561,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29562,actual_type_29575,f_29569], null),canonical_f_29577);

if(cljs.core.truth_(elem_29561.addEventListener)){
elem_29561.addEventListener(cljs.core.name.call(null,actual_type_29575),canonical_f_29577);
} else {
elem_29561.attachEvent(cljs.core.name.call(null,actual_type_29575),canonical_f_29577);
}

var G__29578 = seq__29548_29570;
var G__29579 = chunk__29550_29571;
var G__29580 = count__29551_29572;
var G__29581 = (i__29552_29573 + (1));
seq__29548_29570 = G__29578;
chunk__29550_29571 = G__29579;
count__29551_29572 = G__29580;
i__29552_29573 = G__29581;
continue;
} else {
var temp__4406__auto___29582 = cljs.core.seq.call(null,seq__29548_29570);
if(temp__4406__auto___29582){
var seq__29548_29583__$1 = temp__4406__auto___29582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29548_29583__$1)){
var c__15228__auto___29584 = cljs.core.chunk_first.call(null,seq__29548_29583__$1);
var G__29585 = cljs.core.chunk_rest.call(null,seq__29548_29583__$1);
var G__29586 = c__15228__auto___29584;
var G__29587 = cljs.core.count.call(null,c__15228__auto___29584);
var G__29588 = (0);
seq__29548_29570 = G__29585;
chunk__29550_29571 = G__29586;
count__29551_29572 = G__29587;
i__29552_29573 = G__29588;
continue;
} else {
var vec__29556_29589 = cljs.core.first.call(null,seq__29548_29583__$1);
var actual_type_29590 = cljs.core.nth.call(null,vec__29556_29589,(0),null);
var factory_29591 = cljs.core.nth.call(null,vec__29556_29589,(1),null);
var canonical_f_29592 = (cljs.core.truth_(selector_29562)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29561,selector_29562):cljs.core.identity).call(null,factory_29591.call(null,f_29569));
dommy.core.update_event_listeners_BANG_.call(null,elem_29561,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29562,actual_type_29590,f_29569], null),canonical_f_29592);

if(cljs.core.truth_(elem_29561.addEventListener)){
elem_29561.addEventListener(cljs.core.name.call(null,actual_type_29590),canonical_f_29592);
} else {
elem_29561.attachEvent(cljs.core.name.call(null,actual_type_29590),canonical_f_29592);
}

var G__29593 = cljs.core.next.call(null,seq__29548_29583__$1);
var G__29594 = null;
var G__29595 = (0);
var G__29596 = (0);
seq__29548_29570 = G__29593;
chunk__29550_29571 = G__29594;
count__29551_29572 = G__29595;
i__29552_29573 = G__29596;
continue;
}
} else {
}
}
break;
}

var G__29597 = seq__29538_29563;
var G__29598 = chunk__29545_29564;
var G__29599 = count__29546_29565;
var G__29600 = (i__29547_29566 + (1));
seq__29538_29563 = G__29597;
chunk__29545_29564 = G__29598;
count__29546_29565 = G__29599;
i__29547_29566 = G__29600;
continue;
} else {
var temp__4406__auto___29601 = cljs.core.seq.call(null,seq__29538_29563);
if(temp__4406__auto___29601){
var seq__29538_29602__$1 = temp__4406__auto___29601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29538_29602__$1)){
var c__15228__auto___29603 = cljs.core.chunk_first.call(null,seq__29538_29602__$1);
var G__29604 = cljs.core.chunk_rest.call(null,seq__29538_29602__$1);
var G__29605 = c__15228__auto___29603;
var G__29606 = cljs.core.count.call(null,c__15228__auto___29603);
var G__29607 = (0);
seq__29538_29563 = G__29604;
chunk__29545_29564 = G__29605;
count__29546_29565 = G__29606;
i__29547_29566 = G__29607;
continue;
} else {
var vec__29557_29608 = cljs.core.first.call(null,seq__29538_29602__$1);
var orig_type_29609 = cljs.core.nth.call(null,vec__29557_29608,(0),null);
var f_29610 = cljs.core.nth.call(null,vec__29557_29608,(1),null);
var seq__29539_29611 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29609,new cljs.core.PersistentArrayMap.fromArray([orig_type_29609,cljs.core.identity], true, false)));
var chunk__29541_29612 = null;
var count__29542_29613 = (0);
var i__29543_29614 = (0);
while(true){
if((i__29543_29614 < count__29542_29613)){
var vec__29558_29615 = cljs.core._nth.call(null,chunk__29541_29612,i__29543_29614);
var actual_type_29616 = cljs.core.nth.call(null,vec__29558_29615,(0),null);
var factory_29617 = cljs.core.nth.call(null,vec__29558_29615,(1),null);
var canonical_f_29618 = (cljs.core.truth_(selector_29562)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29561,selector_29562):cljs.core.identity).call(null,factory_29617.call(null,f_29610));
dommy.core.update_event_listeners_BANG_.call(null,elem_29561,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29562,actual_type_29616,f_29610], null),canonical_f_29618);

if(cljs.core.truth_(elem_29561.addEventListener)){
elem_29561.addEventListener(cljs.core.name.call(null,actual_type_29616),canonical_f_29618);
} else {
elem_29561.attachEvent(cljs.core.name.call(null,actual_type_29616),canonical_f_29618);
}

var G__29619 = seq__29539_29611;
var G__29620 = chunk__29541_29612;
var G__29621 = count__29542_29613;
var G__29622 = (i__29543_29614 + (1));
seq__29539_29611 = G__29619;
chunk__29541_29612 = G__29620;
count__29542_29613 = G__29621;
i__29543_29614 = G__29622;
continue;
} else {
var temp__4406__auto___29623__$1 = cljs.core.seq.call(null,seq__29539_29611);
if(temp__4406__auto___29623__$1){
var seq__29539_29624__$1 = temp__4406__auto___29623__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29539_29624__$1)){
var c__15228__auto___29625 = cljs.core.chunk_first.call(null,seq__29539_29624__$1);
var G__29626 = cljs.core.chunk_rest.call(null,seq__29539_29624__$1);
var G__29627 = c__15228__auto___29625;
var G__29628 = cljs.core.count.call(null,c__15228__auto___29625);
var G__29629 = (0);
seq__29539_29611 = G__29626;
chunk__29541_29612 = G__29627;
count__29542_29613 = G__29628;
i__29543_29614 = G__29629;
continue;
} else {
var vec__29559_29630 = cljs.core.first.call(null,seq__29539_29624__$1);
var actual_type_29631 = cljs.core.nth.call(null,vec__29559_29630,(0),null);
var factory_29632 = cljs.core.nth.call(null,vec__29559_29630,(1),null);
var canonical_f_29633 = (cljs.core.truth_(selector_29562)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29561,selector_29562):cljs.core.identity).call(null,factory_29632.call(null,f_29610));
dommy.core.update_event_listeners_BANG_.call(null,elem_29561,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29562,actual_type_29631,f_29610], null),canonical_f_29633);

if(cljs.core.truth_(elem_29561.addEventListener)){
elem_29561.addEventListener(cljs.core.name.call(null,actual_type_29631),canonical_f_29633);
} else {
elem_29561.attachEvent(cljs.core.name.call(null,actual_type_29631),canonical_f_29633);
}

var G__29634 = cljs.core.next.call(null,seq__29539_29624__$1);
var G__29635 = null;
var G__29636 = (0);
var G__29637 = (0);
seq__29539_29611 = G__29634;
chunk__29541_29612 = G__29635;
count__29542_29613 = G__29636;
i__29543_29614 = G__29637;
continue;
}
} else {
}
}
break;
}

var G__29638 = cljs.core.next.call(null,seq__29538_29602__$1);
var G__29639 = null;
var G__29640 = (0);
var G__29641 = (0);
seq__29538_29563 = G__29638;
chunk__29545_29564 = G__29639;
count__29546_29565 = G__29640;
i__29547_29566 = G__29641;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__29642__i = 0, G__29642__a = new Array(arguments.length -  1);
while (G__29642__i < G__29642__a.length) {G__29642__a[G__29642__i] = arguments[G__29642__i + 1]; ++G__29642__i;}
  type_fs = new cljs.core.IndexedSeq(G__29642__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__29643){
var elem_sel = cljs.core.first(arglist__29643);
var type_fs = cljs.core.rest(arglist__29643);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__29667_29690 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29691 = cljs.core.nth.call(null,vec__29667_29690,(0),null);
var selector_29692 = cljs.core.nth.call(null,vec__29667_29690,(1),null);
var seq__29668_29693 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29675_29694 = null;
var count__29676_29695 = (0);
var i__29677_29696 = (0);
while(true){
if((i__29677_29696 < count__29676_29695)){
var vec__29684_29697 = cljs.core._nth.call(null,chunk__29675_29694,i__29677_29696);
var orig_type_29698 = cljs.core.nth.call(null,vec__29684_29697,(0),null);
var f_29699 = cljs.core.nth.call(null,vec__29684_29697,(1),null);
var seq__29678_29700 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29698,new cljs.core.PersistentArrayMap.fromArray([orig_type_29698,cljs.core.identity], true, false)));
var chunk__29680_29701 = null;
var count__29681_29702 = (0);
var i__29682_29703 = (0);
while(true){
if((i__29682_29703 < count__29681_29702)){
var vec__29685_29704 = cljs.core._nth.call(null,chunk__29680_29701,i__29682_29703);
var actual_type_29705 = cljs.core.nth.call(null,vec__29685_29704,(0),null);
var __29706 = cljs.core.nth.call(null,vec__29685_29704,(1),null);
var keys_29707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29692,actual_type_29705,f_29699], null);
var canonical_f_29708 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29691),keys_29707);
dommy.core.update_event_listeners_BANG_.call(null,elem_29691,dommy.utils.dissoc_in,keys_29707);

if(cljs.core.truth_(elem_29691.removeEventListener)){
elem_29691.removeEventListener(cljs.core.name.call(null,actual_type_29705),canonical_f_29708);
} else {
elem_29691.detachEvent(cljs.core.name.call(null,actual_type_29705),canonical_f_29708);
}

var G__29709 = seq__29678_29700;
var G__29710 = chunk__29680_29701;
var G__29711 = count__29681_29702;
var G__29712 = (i__29682_29703 + (1));
seq__29678_29700 = G__29709;
chunk__29680_29701 = G__29710;
count__29681_29702 = G__29711;
i__29682_29703 = G__29712;
continue;
} else {
var temp__4406__auto___29713 = cljs.core.seq.call(null,seq__29678_29700);
if(temp__4406__auto___29713){
var seq__29678_29714__$1 = temp__4406__auto___29713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29678_29714__$1)){
var c__15228__auto___29715 = cljs.core.chunk_first.call(null,seq__29678_29714__$1);
var G__29716 = cljs.core.chunk_rest.call(null,seq__29678_29714__$1);
var G__29717 = c__15228__auto___29715;
var G__29718 = cljs.core.count.call(null,c__15228__auto___29715);
var G__29719 = (0);
seq__29678_29700 = G__29716;
chunk__29680_29701 = G__29717;
count__29681_29702 = G__29718;
i__29682_29703 = G__29719;
continue;
} else {
var vec__29686_29720 = cljs.core.first.call(null,seq__29678_29714__$1);
var actual_type_29721 = cljs.core.nth.call(null,vec__29686_29720,(0),null);
var __29722 = cljs.core.nth.call(null,vec__29686_29720,(1),null);
var keys_29723 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29692,actual_type_29721,f_29699], null);
var canonical_f_29724 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29691),keys_29723);
dommy.core.update_event_listeners_BANG_.call(null,elem_29691,dommy.utils.dissoc_in,keys_29723);

if(cljs.core.truth_(elem_29691.removeEventListener)){
elem_29691.removeEventListener(cljs.core.name.call(null,actual_type_29721),canonical_f_29724);
} else {
elem_29691.detachEvent(cljs.core.name.call(null,actual_type_29721),canonical_f_29724);
}

var G__29725 = cljs.core.next.call(null,seq__29678_29714__$1);
var G__29726 = null;
var G__29727 = (0);
var G__29728 = (0);
seq__29678_29700 = G__29725;
chunk__29680_29701 = G__29726;
count__29681_29702 = G__29727;
i__29682_29703 = G__29728;
continue;
}
} else {
}
}
break;
}

var G__29729 = seq__29668_29693;
var G__29730 = chunk__29675_29694;
var G__29731 = count__29676_29695;
var G__29732 = (i__29677_29696 + (1));
seq__29668_29693 = G__29729;
chunk__29675_29694 = G__29730;
count__29676_29695 = G__29731;
i__29677_29696 = G__29732;
continue;
} else {
var temp__4406__auto___29733 = cljs.core.seq.call(null,seq__29668_29693);
if(temp__4406__auto___29733){
var seq__29668_29734__$1 = temp__4406__auto___29733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29668_29734__$1)){
var c__15228__auto___29735 = cljs.core.chunk_first.call(null,seq__29668_29734__$1);
var G__29736 = cljs.core.chunk_rest.call(null,seq__29668_29734__$1);
var G__29737 = c__15228__auto___29735;
var G__29738 = cljs.core.count.call(null,c__15228__auto___29735);
var G__29739 = (0);
seq__29668_29693 = G__29736;
chunk__29675_29694 = G__29737;
count__29676_29695 = G__29738;
i__29677_29696 = G__29739;
continue;
} else {
var vec__29687_29740 = cljs.core.first.call(null,seq__29668_29734__$1);
var orig_type_29741 = cljs.core.nth.call(null,vec__29687_29740,(0),null);
var f_29742 = cljs.core.nth.call(null,vec__29687_29740,(1),null);
var seq__29669_29743 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29741,new cljs.core.PersistentArrayMap.fromArray([orig_type_29741,cljs.core.identity], true, false)));
var chunk__29671_29744 = null;
var count__29672_29745 = (0);
var i__29673_29746 = (0);
while(true){
if((i__29673_29746 < count__29672_29745)){
var vec__29688_29747 = cljs.core._nth.call(null,chunk__29671_29744,i__29673_29746);
var actual_type_29748 = cljs.core.nth.call(null,vec__29688_29747,(0),null);
var __29749 = cljs.core.nth.call(null,vec__29688_29747,(1),null);
var keys_29750 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29692,actual_type_29748,f_29742], null);
var canonical_f_29751 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29691),keys_29750);
dommy.core.update_event_listeners_BANG_.call(null,elem_29691,dommy.utils.dissoc_in,keys_29750);

if(cljs.core.truth_(elem_29691.removeEventListener)){
elem_29691.removeEventListener(cljs.core.name.call(null,actual_type_29748),canonical_f_29751);
} else {
elem_29691.detachEvent(cljs.core.name.call(null,actual_type_29748),canonical_f_29751);
}

var G__29752 = seq__29669_29743;
var G__29753 = chunk__29671_29744;
var G__29754 = count__29672_29745;
var G__29755 = (i__29673_29746 + (1));
seq__29669_29743 = G__29752;
chunk__29671_29744 = G__29753;
count__29672_29745 = G__29754;
i__29673_29746 = G__29755;
continue;
} else {
var temp__4406__auto___29756__$1 = cljs.core.seq.call(null,seq__29669_29743);
if(temp__4406__auto___29756__$1){
var seq__29669_29757__$1 = temp__4406__auto___29756__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29669_29757__$1)){
var c__15228__auto___29758 = cljs.core.chunk_first.call(null,seq__29669_29757__$1);
var G__29759 = cljs.core.chunk_rest.call(null,seq__29669_29757__$1);
var G__29760 = c__15228__auto___29758;
var G__29761 = cljs.core.count.call(null,c__15228__auto___29758);
var G__29762 = (0);
seq__29669_29743 = G__29759;
chunk__29671_29744 = G__29760;
count__29672_29745 = G__29761;
i__29673_29746 = G__29762;
continue;
} else {
var vec__29689_29763 = cljs.core.first.call(null,seq__29669_29757__$1);
var actual_type_29764 = cljs.core.nth.call(null,vec__29689_29763,(0),null);
var __29765 = cljs.core.nth.call(null,vec__29689_29763,(1),null);
var keys_29766 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29692,actual_type_29764,f_29742], null);
var canonical_f_29767 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29691),keys_29766);
dommy.core.update_event_listeners_BANG_.call(null,elem_29691,dommy.utils.dissoc_in,keys_29766);

if(cljs.core.truth_(elem_29691.removeEventListener)){
elem_29691.removeEventListener(cljs.core.name.call(null,actual_type_29764),canonical_f_29767);
} else {
elem_29691.detachEvent(cljs.core.name.call(null,actual_type_29764),canonical_f_29767);
}

var G__29768 = cljs.core.next.call(null,seq__29669_29757__$1);
var G__29769 = null;
var G__29770 = (0);
var G__29771 = (0);
seq__29669_29743 = G__29768;
chunk__29671_29744 = G__29769;
count__29672_29745 = G__29770;
i__29673_29746 = G__29771;
continue;
}
} else {
}
}
break;
}

var G__29772 = cljs.core.next.call(null,seq__29668_29734__$1);
var G__29773 = null;
var G__29774 = (0);
var G__29775 = (0);
seq__29668_29693 = G__29772;
chunk__29675_29694 = G__29773;
count__29676_29695 = G__29774;
i__29677_29696 = G__29775;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__29776__i = 0, G__29776__a = new Array(arguments.length -  1);
while (G__29776__i < G__29776__a.length) {G__29776__a[G__29776__i] = arguments[G__29776__i + 1]; ++G__29776__i;}
  type_fs = new cljs.core.IndexedSeq(G__29776__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__29777){
var elem_sel = cljs.core.first(arglist__29777);
var type_fs = cljs.core.rest(arglist__29777);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__29785_29792 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29793 = cljs.core.nth.call(null,vec__29785_29792,(0),null);
var selector_29794 = cljs.core.nth.call(null,vec__29785_29792,(1),null);
var seq__29786_29795 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29787_29796 = null;
var count__29788_29797 = (0);
var i__29789_29798 = (0);
while(true){
if((i__29789_29798 < count__29788_29797)){
var vec__29790_29799 = cljs.core._nth.call(null,chunk__29787_29796,i__29789_29798);
var type_29800 = cljs.core.nth.call(null,vec__29790_29799,(0),null);
var f_29801 = cljs.core.nth.call(null,vec__29790_29799,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_29800,((function (seq__29786_29795,chunk__29787_29796,count__29788_29797,i__29789_29798,vec__29790_29799,type_29800,f_29801,vec__29785_29792,elem_29793,selector_29794){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_29800,this_fn);

return f_29801.call(null,e);
});})(seq__29786_29795,chunk__29787_29796,count__29788_29797,i__29789_29798,vec__29790_29799,type_29800,f_29801,vec__29785_29792,elem_29793,selector_29794))
);

var G__29802 = seq__29786_29795;
var G__29803 = chunk__29787_29796;
var G__29804 = count__29788_29797;
var G__29805 = (i__29789_29798 + (1));
seq__29786_29795 = G__29802;
chunk__29787_29796 = G__29803;
count__29788_29797 = G__29804;
i__29789_29798 = G__29805;
continue;
} else {
var temp__4406__auto___29806 = cljs.core.seq.call(null,seq__29786_29795);
if(temp__4406__auto___29806){
var seq__29786_29807__$1 = temp__4406__auto___29806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29786_29807__$1)){
var c__15228__auto___29808 = cljs.core.chunk_first.call(null,seq__29786_29807__$1);
var G__29809 = cljs.core.chunk_rest.call(null,seq__29786_29807__$1);
var G__29810 = c__15228__auto___29808;
var G__29811 = cljs.core.count.call(null,c__15228__auto___29808);
var G__29812 = (0);
seq__29786_29795 = G__29809;
chunk__29787_29796 = G__29810;
count__29788_29797 = G__29811;
i__29789_29798 = G__29812;
continue;
} else {
var vec__29791_29813 = cljs.core.first.call(null,seq__29786_29807__$1);
var type_29814 = cljs.core.nth.call(null,vec__29791_29813,(0),null);
var f_29815 = cljs.core.nth.call(null,vec__29791_29813,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_29814,((function (seq__29786_29795,chunk__29787_29796,count__29788_29797,i__29789_29798,vec__29791_29813,type_29814,f_29815,seq__29786_29807__$1,temp__4406__auto___29806,vec__29785_29792,elem_29793,selector_29794){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_29814,this_fn);

return f_29815.call(null,e);
});})(seq__29786_29795,chunk__29787_29796,count__29788_29797,i__29789_29798,vec__29791_29813,type_29814,f_29815,seq__29786_29807__$1,temp__4406__auto___29806,vec__29785_29792,elem_29793,selector_29794))
);

var G__29816 = cljs.core.next.call(null,seq__29786_29807__$1);
var G__29817 = null;
var G__29818 = (0);
var G__29819 = (0);
seq__29786_29795 = G__29816;
chunk__29787_29796 = G__29817;
count__29788_29797 = G__29818;
i__29789_29798 = G__29819;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__29820__i = 0, G__29820__a = new Array(arguments.length -  1);
while (G__29820__i < G__29820__a.length) {G__29820__a[G__29820__i] = arguments[G__29820__i + 1]; ++G__29820__i;}
  type_fs = new cljs.core.IndexedSeq(G__29820__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__29821){
var elem_sel = cljs.core.first(arglist__29821);
var type_fs = cljs.core.rest(arglist__29821);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map