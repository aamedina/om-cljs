// Compiled by ClojureScript 0.0-2816 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('sablono.util');
goog.require('clojure.string');

sablono.interpreter.IInterpreter = (function (){var obj28330 = {};
return obj28330;
})();

sablono.interpreter.interpret = (function interpret(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (sablono.interpreter.interpret["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});

sablono.interpreter.wrap_form_element = (function wrap_form_element(ctor,display_name){
return React.createFactory(React.createClass({"render": (function (){
var this$ = this;
var props = {};
goog.object.extend(props,this$.props,{"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])});

return ctor.call(null,props);
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
handler.call(null,e);

return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){
return cljs.core.name.call(null,display_name);
})}));
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element.call(null,React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element.call(null,React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element.call(null,React.DOM.textarea,"textarea");
/**
* @param {...*} var_args
*/
sablono.interpreter.create_element = (function() { 
var create_element__delegate = function (type,props,children){
return ((sablono.util.wrapped_type_QMARK_.call(null,type))?cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),sablono.interpreter.input,new cljs.core.Keyword(null,"option","option",65132272),sablono.interpreter.option,new cljs.core.Keyword(null,"textarea","textarea",-650375824),sablono.interpreter.textarea], null),cljs.core.keyword.call(null,type)):cljs.core.partial.call(null,React.createElement,cljs.core.name.call(null,type))).call(null,props,(((cljs.core.sequential_QMARK_.call(null,children)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,children))))?cljs.core.first.call(null,children):children));
};
var create_element = function (type,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__28331__i = 0, G__28331__a = new Array(arguments.length -  2);
while (G__28331__i < G__28331__a.length) {G__28331__a[G__28331__i] = arguments[G__28331__i + 2]; ++G__28331__i;}
  children = new cljs.core.IndexedSeq(G__28331__a,0);
} 
return create_element__delegate.call(this,type,props,children);};
create_element.cljs$lang$maxFixedArity = 2;
create_element.cljs$lang$applyTo = (function (arglist__28332){
var type = cljs.core.first(arglist__28332);
arglist__28332 = cljs.core.next(arglist__28332);
var props = cljs.core.first(arglist__28332);
var children = cljs.core.rest(arglist__28332);
return create_element__delegate(type,props,children);
});
create_element.cljs$core$IFn$_invoke$arity$variadic = create_element__delegate;
return create_element;
})()
;
sablono.interpreter.attributes = (function attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((class$ instanceof Array)?clojure.string.join.call(null," ",class$):class$);
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,class$__$1))){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.interpreter.element = (function element(element__$1){
var vec__28334 = sablono.util.normalize_element.call(null,element__$1);
var type = cljs.core.nth.call(null,vec__28334,(0),null);
var attrs = cljs.core.nth.call(null,vec__28334,(1),null);
var content = cljs.core.nth.call(null,vec__28334,(2),null);
var js_attrs = sablono.interpreter.attributes.call(null,attrs);
if((cljs.core.sequential_QMARK_.call(null,content)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,content)))){
return sablono.interpreter.create_element.call(null,type,js_attrs,sablono.interpreter.interpret.call(null,cljs.core.first.call(null,content)));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.call(null,type,js_attrs,sablono.interpreter.interpret.call(null,content));
} else {
return sablono.interpreter.create_element.call(null,type,js_attrs,null);

}
}
});
sablono.interpreter.interpret_seq = (function interpret_seq(s){
return cljs.core.into_array.call(null,cljs.core.map.call(null,sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

//# sourceMappingURL=interpreter.js.map