// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bridge_commander.main');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('om_tools.core');
goog.require('sablono.core');
goog.require('om.core');
if(typeof bridge_commander.main.app_state !== 'undefined'){
} else {
bridge_commander.main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, production!"], null));
}

var ufv___21194 = schema.utils.use_fn_validation;
var output_schema21180_21195 = schema.core.Any;
var input_schema21181_21196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21182_21197 = schema.core.checker.call(null,input_schema21181_21196);
var output_checker21183_21198 = schema.core.checker.call(null,output_schema21180_21195);
/**
* Inputs: [data owner]
*/
bridge_commander.main.app = ((function (ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function app(G__21184,G__21185){
var validate__16794__auto__ = ufv___21194.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21184,G__21185], null);
var temp__4406__auto___21200 = input_checker21182_21197.call(null,args__16795__auto___21199);
if(cljs.core.truth_(temp__4406__auto___21200)){
var error__16796__auto___21201 = temp__4406__auto___21200;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16796__auto___21201)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21201,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21199,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21181_21196,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var data = G__21184;
var owner = G__21185;
while(true){
if(typeof bridge_commander.main.t21190 !== 'undefined'){
} else {

/**
* @constructor
*/
bridge_commander.main.t21190 = (function (G__21185,output_schema21180,owner,data,input_schema21181,validate__16794__auto__,G__21184,input_checker21182,app,ufv__,output_checker21183,meta21191){
this.G__21185 = G__21185;
this.output_schema21180 = output_schema21180;
this.owner = owner;
this.data = data;
this.input_schema21181 = input_schema21181;
this.validate__16794__auto__ = validate__16794__auto__;
this.G__21184 = G__21184;
this.input_checker21182 = input_checker21182;
this.app = app;
this.ufv__ = ufv__;
this.output_checker21183 = output_checker21183;
this.meta21191 = meta21191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bridge_commander.main.t21190.prototype.om$core$IDisplayName$ = true;

bridge_commander.main.t21190.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

bridge_commander.main.t21190.prototype.om$core$IRender$ = true;

bridge_commander.main.t21190.prototype.om$core$IRender$render$arity$1 = ((function (validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21193 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs21193))?sablono.interpreter.attributes.call(null,attrs21193):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21193))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21193)], null))));
});})(validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

bridge_commander.main.t21190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function (_21192){
var self__ = this;
var _21192__$1 = this;
return self__.meta21191;
});})(validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

bridge_commander.main.t21190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function (_21192,meta21191__$1){
var self__ = this;
var _21192__$1 = this;
return (new bridge_commander.main.t21190(self__.G__21185,self__.output_schema21180,self__.owner,self__.data,self__.input_schema21181,self__.validate__16794__auto__,self__.G__21184,self__.input_checker21182,self__.app,self__.ufv__,self__.output_checker21183,meta21191__$1));
});})(validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

bridge_commander.main.t21190.cljs$lang$type = true;

bridge_commander.main.t21190.cljs$lang$ctorStr = "bridge-commander.main/t21190";

bridge_commander.main.t21190.cljs$lang$ctorPrWriter = ((function (validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"bridge-commander.main/t21190");
});})(validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

bridge_commander.main.__GT_t21190 = ((function (validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198){
return (function __GT_t21190(G__21185__$1,output_schema21180__$1,owner__$1,data__$1,input_schema21181__$1,validate__16794__auto____$1,G__21184__$1,input_checker21182__$1,app__$1,ufv____$1,output_checker21183__$1,meta21191){
return (new bridge_commander.main.t21190(G__21185__$1,output_schema21180__$1,owner__$1,data__$1,input_schema21181__$1,validate__16794__auto____$1,G__21184__$1,input_checker21182__$1,app__$1,ufv____$1,output_checker21183__$1,meta21191));
});})(validate__16794__auto__,ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

}

return (new bridge_commander.main.t21190(G__21185,output_schema21180_21195,owner,data,input_schema21181_21196,validate__16794__auto__,G__21184,input_checker21182_21197,app,ufv___21194,output_checker21183_21198,null));
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21202 = output_checker21183_21198.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21202)){
var error__16796__auto___21203 = temp__4406__auto___21202;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16796__auto___21203)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21203,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21180_21195,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21194,output_schema21180_21195,input_schema21181_21196,input_checker21182_21197,output_checker21183_21198))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bridge_commander.main.app),schema.core.make_fn_schema.call(null,output_schema21180_21195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21181_21196], null)));

bridge_commander.main.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__21124__auto__){
return om.core.build.call(null,bridge_commander.main.app,cursor__21124__auto__);
});
var __GT_app__2 = (function (cursor__21124__auto__,m21179){
return om.core.build.call(null,bridge_commander.main.app,cursor__21124__auto__,m21179);
});
__GT_app = function(cursor__21124__auto__,m21179){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__21124__auto__);
case 2:
return __GT_app__2.call(this,cursor__21124__auto__,m21179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
om.core.root.call(null,bridge_commander.main.app,bridge_commander.main.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=main.js.map