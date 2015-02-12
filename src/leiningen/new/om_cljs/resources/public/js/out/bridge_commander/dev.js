// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bridge_commander.dev');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('dommy.core');
if(typeof bridge_commander.dev.app_state !== 'undefined'){
} else {
bridge_commander.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, development!"], null));
}

var ufv___20652 = schema.utils.use_fn_validation;
var output_schema20638_20653 = schema.core.Any;
var input_schema20639_20654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker20640_20655 = schema.core.checker.call(null,input_schema20639_20654);
var output_checker20641_20656 = schema.core.checker.call(null,output_schema20638_20653);
/**
* Inputs: [data owner]
*/
bridge_commander.dev.app = ((function (ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function app(G__20642,G__20643){
var validate__17010__auto__ = ufv___20652.get_cell();
if(cljs.core.truth_(validate__17010__auto__)){
var args__17011__auto___20657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20642,G__20643], null);
var temp__4406__auto___20658 = input_checker20640_20655.call(null,args__17011__auto___20657);
if(cljs.core.truth_(temp__4406__auto___20658)){
var error__17012__auto___20659 = temp__4406__auto___20658;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17012__auto___20659)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17012__auto___20659,new cljs.core.Keyword(null,"value","value",305978217),args__17011__auto___20657,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20639_20654,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17013__auto__ = (function (){var data = G__20642;
var owner = G__20643;
while(true){
if(typeof bridge_commander.dev.t20648 !== 'undefined'){
} else {

/**
* @constructor
*/
bridge_commander.dev.t20648 = (function (owner,data,G__20642,input_checker20640,input_schema20639,validate__17010__auto__,output_checker20641,G__20643,app,ufv__,output_schema20638,meta20649){
this.owner = owner;
this.data = data;
this.G__20642 = G__20642;
this.input_checker20640 = input_checker20640;
this.input_schema20639 = input_schema20639;
this.validate__17010__auto__ = validate__17010__auto__;
this.output_checker20641 = output_checker20641;
this.G__20643 = G__20643;
this.app = app;
this.ufv__ = ufv__;
this.output_schema20638 = output_schema20638;
this.meta20649 = meta20649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bridge_commander.dev.t20648.prototype.om$core$IDisplayName$ = true;

bridge_commander.dev.t20648.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

bridge_commander.dev.t20648.prototype.om$core$IRender$ = true;

bridge_commander.dev.t20648.prototype.om$core$IRender$render$arity$1 = ((function (validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs20651 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs20651))?sablono.interpreter.attributes.call(null,attrs20651):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20651))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20651)], null))));
});})(validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

bridge_commander.dev.t20648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function (_20650){
var self__ = this;
var _20650__$1 = this;
return self__.meta20649;
});})(validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

bridge_commander.dev.t20648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function (_20650,meta20649__$1){
var self__ = this;
var _20650__$1 = this;
return (new bridge_commander.dev.t20648(self__.owner,self__.data,self__.G__20642,self__.input_checker20640,self__.input_schema20639,self__.validate__17010__auto__,self__.output_checker20641,self__.G__20643,self__.app,self__.ufv__,self__.output_schema20638,meta20649__$1));
});})(validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

bridge_commander.dev.t20648.cljs$lang$type = true;

bridge_commander.dev.t20648.cljs$lang$ctorStr = "bridge-commander.dev/t20648";

bridge_commander.dev.t20648.cljs$lang$ctorPrWriter = ((function (validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"bridge-commander.dev/t20648");
});})(validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

bridge_commander.dev.__GT_t20648 = ((function (validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656){
return (function __GT_t20648(owner__$1,data__$1,G__20642__$1,input_checker20640__$1,input_schema20639__$1,validate__17010__auto____$1,output_checker20641__$1,G__20643__$1,app__$1,ufv____$1,output_schema20638__$1,meta20649){
return (new bridge_commander.dev.t20648(owner__$1,data__$1,G__20642__$1,input_checker20640__$1,input_schema20639__$1,validate__17010__auto____$1,output_checker20641__$1,G__20643__$1,app__$1,ufv____$1,output_schema20638__$1,meta20649));
});})(validate__17010__auto__,ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

}

return (new bridge_commander.dev.t20648(owner,data,G__20642,input_checker20640_20655,input_schema20639_20654,validate__17010__auto__,output_checker20641_20656,G__20643,app,ufv___20652,output_schema20638_20653,null));
break;
}
})();
if(cljs.core.truth_(validate__17010__auto__)){
var temp__4406__auto___20660 = output_checker20641_20656.call(null,o__17013__auto__);
if(cljs.core.truth_(temp__4406__auto___20660)){
var error__17012__auto___20661 = temp__4406__auto___20660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17012__auto___20661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17012__auto___20661,new cljs.core.Keyword(null,"value","value",305978217),o__17013__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20638_20653,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17013__auto__;
});})(ufv___20652,output_schema20638_20653,input_schema20639_20654,input_checker20640_20655,output_checker20641_20656))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bridge_commander.dev.app),schema.core.make_fn_schema.call(null,output_schema20638_20653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20639_20654], null)));

bridge_commander.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18798__auto__){
return om.core.build.call(null,bridge_commander.dev.app,cursor__18798__auto__);
});
var __GT_app__2 = (function (cursor__18798__auto__,m20637){
return om.core.build.call(null,bridge_commander.dev.app,cursor__18798__auto__,m20637);
});
__GT_app = function(cursor__18798__auto__,m20637){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18798__auto__);
case 2:
return __GT_app__2.call(this,cursor__18798__auto__,m20637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
if(weasel.repl.alive_QMARK_.call(null)){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));
om.core.root.call(null,bridge_commander.dev.app,bridge_commander.dev.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=dev.js.map