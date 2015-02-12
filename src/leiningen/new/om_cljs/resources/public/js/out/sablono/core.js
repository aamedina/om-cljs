// Compiled by ClojureScript 0.0-2816 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__28212__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28211 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__28211,(0),null);
var body = cljs.core.nthnext.call(null,vec__28211,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28213__i = 0, G__28213__a = new Array(arguments.length -  0);
while (G__28213__i < G__28213__a.length) {G__28213__a[G__28213__i] = arguments[G__28213__i + 0]; ++G__28213__i;}
  args = new cljs.core.IndexedSeq(G__28213__a,0);
} 
return G__28212__delegate.call(this,args);};
G__28212.cljs$lang$maxFixedArity = 0;
G__28212.cljs$lang$applyTo = (function (arglist__28214){
var args = cljs.core.seq(arglist__28214);
return G__28212__delegate(args);
});
G__28212.cljs$core$IFn$_invoke$arity$variadic = G__28212__delegate;
return G__28212;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__15197__auto__ = (function iter__28219(s__28220){
return (new cljs.core.LazySeq(null,(function (){
var s__28220__$1 = s__28220;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__28220__$1);
if(temp__4406__auto__){
var s__28220__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28220__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__28220__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__28222 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__28221 = (0);
while(true){
if((i__28221 < size__15196__auto__)){
var args = cljs.core._nth.call(null,c__15195__auto__,i__28221);
cljs.core.chunk_append.call(null,b__28222,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28223 = (i__28221 + (1));
i__28221 = G__28223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28222),iter__28219.call(null,cljs.core.chunk_rest.call(null,s__28220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28222),null);
}
} else {
var args = cljs.core.first.call(null,s__28220__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__28219.call(null,cljs.core.rest.call(null,s__28220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__15197__auto__ = (function iter__28228(s__28229){
return (new cljs.core.LazySeq(null,(function (){
var s__28229__$1 = s__28229;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__28229__$1);
if(temp__4406__auto__){
var s__28229__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28229__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__28229__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__28231 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__28230 = (0);
while(true){
if((i__28230 < size__15196__auto__)){
var style = cljs.core._nth.call(null,c__15195__auto__,i__28230);
cljs.core.chunk_append.call(null,b__28231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28232 = (i__28230 + (1));
i__28230 = G__28232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28231),iter__28228.call(null,cljs.core.chunk_rest.call(null,s__28229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28231),null);
}
} else {
var style = cljs.core.first.call(null,s__28229__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__28228.call(null,cljs.core.rest.call(null,s__28229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__28233__i = 0, G__28233__a = new Array(arguments.length -  0);
while (G__28233__i < G__28233__a.length) {G__28233__a[G__28233__i] = arguments[G__28233__i + 0]; ++G__28233__i;}
  styles = new cljs.core.IndexedSeq(G__28233__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__28234){
var styles = cljs.core.seq(arglist__28234);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to28235 = (function() { 
var link_to28235__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28235 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__28236__i = 0, G__28236__a = new Array(arguments.length -  1);
while (G__28236__i < G__28236__a.length) {G__28236__a[G__28236__i] = arguments[G__28236__i + 1]; ++G__28236__i;}
  content = new cljs.core.IndexedSeq(G__28236__a,0);
} 
return link_to28235__delegate.call(this,url,content);};
link_to28235.cljs$lang$maxFixedArity = 1;
link_to28235.cljs$lang$applyTo = (function (arglist__28237){
var url = cljs.core.first(arglist__28237);
var content = cljs.core.rest(arglist__28237);
return link_to28235__delegate(url,content);
});
link_to28235.cljs$core$IFn$_invoke$arity$variadic = link_to28235__delegate;
return link_to28235;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28235);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28238 = (function() { 
var mail_to28238__delegate = function (e_mail,p__28239){
var vec__28241 = p__28239;
var content = cljs.core.nth.call(null,vec__28241,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__14441__auto__ = content;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to28238 = function (e_mail,var_args){
var p__28239 = null;
if (arguments.length > 1) {
var G__28242__i = 0, G__28242__a = new Array(arguments.length -  1);
while (G__28242__i < G__28242__a.length) {G__28242__a[G__28242__i] = arguments[G__28242__i + 1]; ++G__28242__i;}
  p__28239 = new cljs.core.IndexedSeq(G__28242__a,0);
} 
return mail_to28238__delegate.call(this,e_mail,p__28239);};
mail_to28238.cljs$lang$maxFixedArity = 1;
mail_to28238.cljs$lang$applyTo = (function (arglist__28243){
var e_mail = cljs.core.first(arglist__28243);
var p__28239 = cljs.core.rest(arglist__28243);
return mail_to28238__delegate(e_mail,p__28239);
});
mail_to28238.cljs$core$IFn$_invoke$arity$variadic = mail_to28238__delegate;
return mail_to28238;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28238);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28244 = (function unordered_list28244(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__15197__auto__ = (function iter__28249(s__28250){
return (new cljs.core.LazySeq(null,(function (){
var s__28250__$1 = s__28250;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__28250__$1);
if(temp__4406__auto__){
var s__28250__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28250__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__28250__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__28252 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__28251 = (0);
while(true){
if((i__28251 < size__15196__auto__)){
var x = cljs.core._nth.call(null,c__15195__auto__,i__28251);
cljs.core.chunk_append.call(null,b__28252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28253 = (i__28251 + (1));
i__28251 = G__28253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28252),iter__28249.call(null,cljs.core.chunk_rest.call(null,s__28250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28252),null);
}
} else {
var x = cljs.core.first.call(null,s__28250__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__28249.call(null,cljs.core.rest.call(null,s__28250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28244);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28254 = (function ordered_list28254(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__15197__auto__ = (function iter__28259(s__28260){
return (new cljs.core.LazySeq(null,(function (){
var s__28260__$1 = s__28260;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__28260__$1);
if(temp__4406__auto__){
var s__28260__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28260__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__28260__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__28262 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__28261 = (0);
while(true){
if((i__28261 < size__15196__auto__)){
var x = cljs.core._nth.call(null,c__15195__auto__,i__28261);
cljs.core.chunk_append.call(null,b__28262,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28263 = (i__28261 + (1));
i__28261 = G__28263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28262),iter__28259.call(null,cljs.core.chunk_rest.call(null,s__28260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28262),null);
}
} else {
var x = cljs.core.first.call(null,s__28260__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__28259.call(null,cljs.core.rest.call(null,s__28260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28254);
/**
* Create an image element.
*/
sablono.core.image28264 = (function() {
var image28264 = null;
var image28264__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image28264__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image28264 = function(src,alt){
switch(arguments.length){
case 1:
return image28264__1.call(this,src);
case 2:
return image28264__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28264.cljs$core$IFn$_invoke$arity$1 = image28264__1;
image28264.cljs$core$IFn$_invoke$arity$2 = image28264__2;
return image28264;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28264);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__28265_SHARP_,p2__28266_SHARP_){
return [cljs.core.str(p1__28265_SHARP_),cljs.core.str("["),cljs.core.str(p2__28266_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__28267_SHARP_,p2__28268_SHARP_){
return [cljs.core.str(p1__28267_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28268_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field28269 = (function() {
var color_field28269 = null;
var color_field28269__1 = (function (name__20615__auto__){
return color_field28269.call(null,name__20615__auto__,null);
});
var color_field28269__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20615__auto__,value__20616__auto__);
});
color_field28269 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return color_field28269__1.call(this,name__20615__auto__);
case 2:
return color_field28269__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field28269.cljs$core$IFn$_invoke$arity$1 = color_field28269__1;
color_field28269.cljs$core$IFn$_invoke$arity$2 = color_field28269__2;
return color_field28269;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28269);

/**
* Creates a date input field.
*/
sablono.core.date_field28270 = (function() {
var date_field28270 = null;
var date_field28270__1 = (function (name__20615__auto__){
return date_field28270.call(null,name__20615__auto__,null);
});
var date_field28270__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20615__auto__,value__20616__auto__);
});
date_field28270 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return date_field28270__1.call(this,name__20615__auto__);
case 2:
return date_field28270__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field28270.cljs$core$IFn$_invoke$arity$1 = date_field28270__1;
date_field28270.cljs$core$IFn$_invoke$arity$2 = date_field28270__2;
return date_field28270;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28270);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field28271 = (function() {
var datetime_field28271 = null;
var datetime_field28271__1 = (function (name__20615__auto__){
return datetime_field28271.call(null,name__20615__auto__,null);
});
var datetime_field28271__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20615__auto__,value__20616__auto__);
});
datetime_field28271 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return datetime_field28271__1.call(this,name__20615__auto__);
case 2:
return datetime_field28271__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field28271.cljs$core$IFn$_invoke$arity$1 = datetime_field28271__1;
datetime_field28271.cljs$core$IFn$_invoke$arity$2 = datetime_field28271__2;
return datetime_field28271;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28271);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field28272 = (function() {
var datetime_local_field28272 = null;
var datetime_local_field28272__1 = (function (name__20615__auto__){
return datetime_local_field28272.call(null,name__20615__auto__,null);
});
var datetime_local_field28272__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20615__auto__,value__20616__auto__);
});
datetime_local_field28272 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return datetime_local_field28272__1.call(this,name__20615__auto__);
case 2:
return datetime_local_field28272__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field28272.cljs$core$IFn$_invoke$arity$1 = datetime_local_field28272__1;
datetime_local_field28272.cljs$core$IFn$_invoke$arity$2 = datetime_local_field28272__2;
return datetime_local_field28272;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28272);

/**
* Creates a email input field.
*/
sablono.core.email_field28273 = (function() {
var email_field28273 = null;
var email_field28273__1 = (function (name__20615__auto__){
return email_field28273.call(null,name__20615__auto__,null);
});
var email_field28273__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20615__auto__,value__20616__auto__);
});
email_field28273 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return email_field28273__1.call(this,name__20615__auto__);
case 2:
return email_field28273__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28273.cljs$core$IFn$_invoke$arity$1 = email_field28273__1;
email_field28273.cljs$core$IFn$_invoke$arity$2 = email_field28273__2;
return email_field28273;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28273);

/**
* Creates a file input field.
*/
sablono.core.file_field28274 = (function() {
var file_field28274 = null;
var file_field28274__1 = (function (name__20615__auto__){
return file_field28274.call(null,name__20615__auto__,null);
});
var file_field28274__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20615__auto__,value__20616__auto__);
});
file_field28274 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return file_field28274__1.call(this,name__20615__auto__);
case 2:
return file_field28274__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field28274.cljs$core$IFn$_invoke$arity$1 = file_field28274__1;
file_field28274.cljs$core$IFn$_invoke$arity$2 = file_field28274__2;
return file_field28274;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28274);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28275 = (function() {
var hidden_field28275 = null;
var hidden_field28275__1 = (function (name__20615__auto__){
return hidden_field28275.call(null,name__20615__auto__,null);
});
var hidden_field28275__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20615__auto__,value__20616__auto__);
});
hidden_field28275 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return hidden_field28275__1.call(this,name__20615__auto__);
case 2:
return hidden_field28275__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28275.cljs$core$IFn$_invoke$arity$1 = hidden_field28275__1;
hidden_field28275.cljs$core$IFn$_invoke$arity$2 = hidden_field28275__2;
return hidden_field28275;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28275);

/**
* Creates a month input field.
*/
sablono.core.month_field28276 = (function() {
var month_field28276 = null;
var month_field28276__1 = (function (name__20615__auto__){
return month_field28276.call(null,name__20615__auto__,null);
});
var month_field28276__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20615__auto__,value__20616__auto__);
});
month_field28276 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return month_field28276__1.call(this,name__20615__auto__);
case 2:
return month_field28276__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field28276.cljs$core$IFn$_invoke$arity$1 = month_field28276__1;
month_field28276.cljs$core$IFn$_invoke$arity$2 = month_field28276__2;
return month_field28276;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28276);

/**
* Creates a number input field.
*/
sablono.core.number_field28277 = (function() {
var number_field28277 = null;
var number_field28277__1 = (function (name__20615__auto__){
return number_field28277.call(null,name__20615__auto__,null);
});
var number_field28277__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20615__auto__,value__20616__auto__);
});
number_field28277 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return number_field28277__1.call(this,name__20615__auto__);
case 2:
return number_field28277__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field28277.cljs$core$IFn$_invoke$arity$1 = number_field28277__1;
number_field28277.cljs$core$IFn$_invoke$arity$2 = number_field28277__2;
return number_field28277;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28277);

/**
* Creates a password input field.
*/
sablono.core.password_field28278 = (function() {
var password_field28278 = null;
var password_field28278__1 = (function (name__20615__auto__){
return password_field28278.call(null,name__20615__auto__,null);
});
var password_field28278__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20615__auto__,value__20616__auto__);
});
password_field28278 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return password_field28278__1.call(this,name__20615__auto__);
case 2:
return password_field28278__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28278.cljs$core$IFn$_invoke$arity$1 = password_field28278__1;
password_field28278.cljs$core$IFn$_invoke$arity$2 = password_field28278__2;
return password_field28278;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28278);

/**
* Creates a range input field.
*/
sablono.core.range_field28279 = (function() {
var range_field28279 = null;
var range_field28279__1 = (function (name__20615__auto__){
return range_field28279.call(null,name__20615__auto__,null);
});
var range_field28279__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20615__auto__,value__20616__auto__);
});
range_field28279 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return range_field28279__1.call(this,name__20615__auto__);
case 2:
return range_field28279__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field28279.cljs$core$IFn$_invoke$arity$1 = range_field28279__1;
range_field28279.cljs$core$IFn$_invoke$arity$2 = range_field28279__2;
return range_field28279;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28279);

/**
* Creates a search input field.
*/
sablono.core.search_field28280 = (function() {
var search_field28280 = null;
var search_field28280__1 = (function (name__20615__auto__){
return search_field28280.call(null,name__20615__auto__,null);
});
var search_field28280__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20615__auto__,value__20616__auto__);
});
search_field28280 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return search_field28280__1.call(this,name__20615__auto__);
case 2:
return search_field28280__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field28280.cljs$core$IFn$_invoke$arity$1 = search_field28280__1;
search_field28280.cljs$core$IFn$_invoke$arity$2 = search_field28280__2;
return search_field28280;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28280);

/**
* Creates a tel input field.
*/
sablono.core.tel_field28281 = (function() {
var tel_field28281 = null;
var tel_field28281__1 = (function (name__20615__auto__){
return tel_field28281.call(null,name__20615__auto__,null);
});
var tel_field28281__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20615__auto__,value__20616__auto__);
});
tel_field28281 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return tel_field28281__1.call(this,name__20615__auto__);
case 2:
return tel_field28281__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field28281.cljs$core$IFn$_invoke$arity$1 = tel_field28281__1;
tel_field28281.cljs$core$IFn$_invoke$arity$2 = tel_field28281__2;
return tel_field28281;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28281);

/**
* Creates a text input field.
*/
sablono.core.text_field28282 = (function() {
var text_field28282 = null;
var text_field28282__1 = (function (name__20615__auto__){
return text_field28282.call(null,name__20615__auto__,null);
});
var text_field28282__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20615__auto__,value__20616__auto__);
});
text_field28282 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return text_field28282__1.call(this,name__20615__auto__);
case 2:
return text_field28282__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28282.cljs$core$IFn$_invoke$arity$1 = text_field28282__1;
text_field28282.cljs$core$IFn$_invoke$arity$2 = text_field28282__2;
return text_field28282;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28282);

/**
* Creates a time input field.
*/
sablono.core.time_field28283 = (function() {
var time_field28283 = null;
var time_field28283__1 = (function (name__20615__auto__){
return time_field28283.call(null,name__20615__auto__,null);
});
var time_field28283__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20615__auto__,value__20616__auto__);
});
time_field28283 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return time_field28283__1.call(this,name__20615__auto__);
case 2:
return time_field28283__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field28283.cljs$core$IFn$_invoke$arity$1 = time_field28283__1;
time_field28283.cljs$core$IFn$_invoke$arity$2 = time_field28283__2;
return time_field28283;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28283);

/**
* Creates a url input field.
*/
sablono.core.url_field28284 = (function() {
var url_field28284 = null;
var url_field28284__1 = (function (name__20615__auto__){
return url_field28284.call(null,name__20615__auto__,null);
});
var url_field28284__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20615__auto__,value__20616__auto__);
});
url_field28284 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return url_field28284__1.call(this,name__20615__auto__);
case 2:
return url_field28284__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field28284.cljs$core$IFn$_invoke$arity$1 = url_field28284__1;
url_field28284.cljs$core$IFn$_invoke$arity$2 = url_field28284__2;
return url_field28284;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28284);

/**
* Creates a week input field.
*/
sablono.core.week_field28285 = (function() {
var week_field28285 = null;
var week_field28285__1 = (function (name__20615__auto__){
return week_field28285.call(null,name__20615__auto__,null);
});
var week_field28285__2 = (function (name__20615__auto__,value__20616__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20615__auto__,value__20616__auto__);
});
week_field28285 = function(name__20615__auto__,value__20616__auto__){
switch(arguments.length){
case 1:
return week_field28285__1.call(this,name__20615__auto__);
case 2:
return week_field28285__2.call(this,name__20615__auto__,value__20616__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field28285.cljs$core$IFn$_invoke$arity$1 = week_field28285__1;
week_field28285.cljs$core$IFn$_invoke$arity$2 = week_field28285__2;
return week_field28285;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28285);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box28286 = (function() {
var check_box28286 = null;
var check_box28286__1 = (function (name){
return check_box28286.call(null,name,null);
});
var check_box28286__2 = (function (name,checked_QMARK_){
return check_box28286.call(null,name,checked_QMARK_,"true");
});
var check_box28286__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box28286 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28286__1.call(this,name);
case 2:
return check_box28286__2.call(this,name,checked_QMARK_);
case 3:
return check_box28286__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28286.cljs$core$IFn$_invoke$arity$1 = check_box28286__1;
check_box28286.cljs$core$IFn$_invoke$arity$2 = check_box28286__2;
check_box28286.cljs$core$IFn$_invoke$arity$3 = check_box28286__3;
return check_box28286;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28286);
/**
* Creates a radio button.
*/
sablono.core.radio_button28287 = (function() {
var radio_button28287 = null;
var radio_button28287__1 = (function (group){
return radio_button28287.call(null,group,null);
});
var radio_button28287__2 = (function (group,checked_QMARK_){
return radio_button28287.call(null,group,checked_QMARK_,"true");
});
var radio_button28287__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button28287 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28287__1.call(this,group);
case 2:
return radio_button28287__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28287__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28287.cljs$core$IFn$_invoke$arity$1 = radio_button28287__1;
radio_button28287.cljs$core$IFn$_invoke$arity$2 = radio_button28287__2;
radio_button28287.cljs$core$IFn$_invoke$arity$3 = radio_button28287__3;
return radio_button28287;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28287);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28288 = (function() {
var select_options28288 = null;
var select_options28288__1 = (function (coll){
return select_options28288.call(null,coll,null);
});
var select_options28288__2 = (function (coll,selected){
var iter__15197__auto__ = (function iter__28297(s__28298){
return (new cljs.core.LazySeq(null,(function (){
var s__28298__$1 = s__28298;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__28298__$1);
if(temp__4406__auto__){
var s__28298__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28298__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__28298__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__28300 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__28299 = (0);
while(true){
if((i__28299 < size__15196__auto__)){
var x = cljs.core._nth.call(null,c__15195__auto__,i__28299);
cljs.core.chunk_append.call(null,b__28300,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28303 = x;
var text = cljs.core.nth.call(null,vec__28303,(0),null);
var val = cljs.core.nth.call(null,vec__28303,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28303,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options28288.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__28305 = (i__28299 + (1));
i__28299 = G__28305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28300),iter__28297.call(null,cljs.core.chunk_rest.call(null,s__28298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28300),null);
}
} else {
var x = cljs.core.first.call(null,s__28298__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28304 = x;
var text = cljs.core.nth.call(null,vec__28304,(0),null);
var val = cljs.core.nth.call(null,vec__28304,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28304,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options28288.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28297.call(null,cljs.core.rest.call(null,s__28298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,coll);
});
select_options28288 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28288__1.call(this,coll);
case 2:
return select_options28288__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28288.cljs$core$IFn$_invoke$arity$1 = select_options28288__1;
select_options28288.cljs$core$IFn$_invoke$arity$2 = select_options28288__2;
return select_options28288;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28288);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28306 = (function() {
var drop_down28306 = null;
var drop_down28306__2 = (function (name,options){
return drop_down28306.call(null,name,options,null);
});
var drop_down28306__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28306 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28306__2.call(this,name,options);
case 3:
return drop_down28306__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28306.cljs$core$IFn$_invoke$arity$2 = drop_down28306__2;
drop_down28306.cljs$core$IFn$_invoke$arity$3 = drop_down28306__3;
return drop_down28306;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28306);
/**
* Creates a text area element.
*/
sablono.core.text_area28307 = (function() {
var text_area28307 = null;
var text_area28307__1 = (function (name){
return text_area28307.call(null,name,null);
});
var text_area28307__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area28307 = function(name,value){
switch(arguments.length){
case 1:
return text_area28307__1.call(this,name);
case 2:
return text_area28307__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28307.cljs$core$IFn$_invoke$arity$1 = text_area28307__1;
text_area28307.cljs$core$IFn$_invoke$arity$2 = text_area28307__2;
return text_area28307;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28307);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28308 = (function label28308(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28308);
/**
* Creates a submit button.
*/
sablono.core.submit_button28309 = (function submit_button28309(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28309);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28310 = (function reset_button28310(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28310);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28311 = (function() { 
var form_to28311__delegate = function (p__28312,body){
var vec__28314 = p__28312;
var method = cljs.core.nth.call(null,vec__28314,(0),null);
var action = cljs.core.nth.call(null,vec__28314,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28311 = function (p__28312,var_args){
var body = null;
if (arguments.length > 1) {
var G__28315__i = 0, G__28315__a = new Array(arguments.length -  1);
while (G__28315__i < G__28315__a.length) {G__28315__a[G__28315__i] = arguments[G__28315__i + 1]; ++G__28315__i;}
  body = new cljs.core.IndexedSeq(G__28315__a,0);
} 
return form_to28311__delegate.call(this,p__28312,body);};
form_to28311.cljs$lang$maxFixedArity = 1;
form_to28311.cljs$lang$applyTo = (function (arglist__28316){
var p__28312 = cljs.core.first(arglist__28316);
var body = cljs.core.rest(arglist__28316);
return form_to28311__delegate(p__28312,body);
});
form_to28311.cljs$core$IFn$_invoke$arity$variadic = form_to28311__delegate;
return form_to28311;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28311);

//# sourceMappingURL=core.js.map