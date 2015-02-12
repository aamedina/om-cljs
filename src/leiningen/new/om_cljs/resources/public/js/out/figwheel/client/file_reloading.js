// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35516_SHARP_,p2__35517_SHARP_){
var and__14429__auto__ = p1__35516_SHARP_;
if(cljs.core.truth_(and__14429__auto__)){
return p2__35517_SHARP_;
} else {
return and__14429__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__14441__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__14441__auto__){
return or__14441__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35519_SHARP_,p2__35518_SHARP_){
return [cljs.core.str(p2__35518_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__14441__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__14441__auto__){
return or__14441__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__14441__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__15338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15342__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15342__auto__,method_table__15338__auto__,prefer_table__15339__auto__,method_cache__15340__auto__,cached_hierarchy__15341__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35520){
var map__35521 = p__35520;
var map__35521__$1 = ((cljs.core.seq_QMARK_.call(null,map__35521))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521):map__35521);
var file = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35522){
var map__35523 = p__35522;
var map__35523__$1 = ((cljs.core.seq_QMARK_.call(null,map__35523))?cljs.core.apply.call(null,cljs.core.hash_map,map__35523):map__35523);
var namespace = cljs.core.get.call(null,map__35523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__15338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15342__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15342__auto__,method_table__15338__auto__,prefer_table__15339__auto__,method_cache__15340__auto__,cached_hierarchy__15341__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35524){if((e35524 instanceof Error)){
var e = e35524;
return false;
} else {
throw e35524;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__35525,callback){
var map__35527 = p__35525;
var map__35527__$1 = ((cljs.core.seq_QMARK_.call(null,map__35527))?cljs.core.apply.call(null,cljs.core.hash_map,map__35527):map__35527);
var file_msg = map__35527__$1;
var request_url = cljs.core.get.call(null,map__35527__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35527,map__35527__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35527,map__35527__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__35528){
var map__35530 = p__35528;
var map__35530__$1 = ((cljs.core.seq_QMARK_.call(null,map__35530))?cljs.core.apply.call(null,cljs.core.hash_map,map__35530):map__35530);
var file_msg = map__35530__$1;
var meta_data = cljs.core.get.call(null,map__35530__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__35530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__14441__auto__ = meta_data;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__14429__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__14429__auto__){
var or__14441__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__14441__auto____$1)){
return or__14441__auto____$1;
} else {
var and__14429__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__14429__auto____$1){
var or__14441__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__14441__auto____$2){
return or__14441__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__14429__auto____$1;
}
}
}
} else {
return and__14429__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__35531,callback){
var map__35533 = p__35531;
var map__35533__$1 = ((cljs.core.seq_QMARK_.call(null,map__35533))?cljs.core.apply.call(null,cljs.core.hash_map,map__35533):map__35533);
var file_msg = map__35533__$1;
var namespace = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31040__auto___35620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___35620,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___35620,out){
return (function (state_35602){
var state_val_35603 = (state_35602[(1)]);
if((state_val_35603 === (7))){
var inst_35586 = (state_35602[(7)]);
var inst_35592 = (state_35602[(2)]);
var inst_35593 = cljs.core.async.put_BANG_.call(null,out,inst_35592);
var inst_35582 = inst_35586;
var state_35602__$1 = (function (){var statearr_35604 = state_35602;
(statearr_35604[(8)] = inst_35582);

(statearr_35604[(9)] = inst_35593);

return statearr_35604;
})();
var statearr_35605_35621 = state_35602__$1;
(statearr_35605_35621[(2)] = null);

(statearr_35605_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (6))){
var inst_35598 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
var statearr_35606_35622 = state_35602__$1;
(statearr_35606_35622[(2)] = inst_35598);

(statearr_35606_35622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (5))){
var inst_35596 = cljs.core.async.close_BANG_.call(null,out);
var state_35602__$1 = state_35602;
var statearr_35607_35623 = state_35602__$1;
(statearr_35607_35623[(2)] = inst_35596);

(statearr_35607_35623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (4))){
var inst_35585 = (state_35602[(10)]);
var inst_35590 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35585);
var state_35602__$1 = state_35602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35602__$1,(7),inst_35590);
} else {
if((state_val_35603 === (3))){
var inst_35600 = (state_35602[(2)]);
var state_35602__$1 = state_35602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35602__$1,inst_35600);
} else {
if((state_val_35603 === (2))){
var inst_35582 = (state_35602[(8)]);
var inst_35585 = (state_35602[(10)]);
var inst_35585__$1 = cljs.core.nth.call(null,inst_35582,(0),null);
var inst_35586 = cljs.core.nthnext.call(null,inst_35582,(1));
var inst_35587 = (inst_35585__$1 == null);
var inst_35588 = cljs.core.not.call(null,inst_35587);
var state_35602__$1 = (function (){var statearr_35608 = state_35602;
(statearr_35608[(7)] = inst_35586);

(statearr_35608[(10)] = inst_35585__$1);

return statearr_35608;
})();
if(inst_35588){
var statearr_35609_35624 = state_35602__$1;
(statearr_35609_35624[(1)] = (4));

} else {
var statearr_35610_35625 = state_35602__$1;
(statearr_35610_35625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35603 === (1))){
var inst_35580 = cljs.core.nth.call(null,files,(0),null);
var inst_35581 = cljs.core.nthnext.call(null,files,(1));
var inst_35582 = files;
var state_35602__$1 = (function (){var statearr_35611 = state_35602;
(statearr_35611[(11)] = inst_35580);

(statearr_35611[(12)] = inst_35581);

(statearr_35611[(8)] = inst_35582);

return statearr_35611;
})();
var statearr_35612_35626 = state_35602__$1;
(statearr_35612_35626[(2)] = null);

(statearr_35612_35626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31040__auto___35620,out))
;
return ((function (switch__30984__auto__,c__31040__auto___35620,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_35616 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35616[(0)] = state_machine__30985__auto__);

(statearr_35616[(1)] = (1));

return statearr_35616;
});
var state_machine__30985__auto____1 = (function (state_35602){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35617){if((e35617 instanceof Object)){
var ex__30988__auto__ = e35617;
var statearr_35618_35627 = state_35602;
(statearr_35618_35627[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35628 = state_35602;
state_35602 = G__35628;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35602){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___35620,out))
})();
var state__31042__auto__ = (function (){var statearr_35619 = f__31041__auto__.call(null);
(statearr_35619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___35620);

return statearr_35619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___35620,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__35629,p__35630){
var map__35633 = p__35629;
var map__35633__$1 = ((cljs.core.seq_QMARK_.call(null,map__35633))?cljs.core.apply.call(null,cljs.core.hash_map,map__35633):map__35633);
var opts = map__35633__$1;
var url_rewriter = cljs.core.get.call(null,map__35633__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35634 = p__35630;
var map__35634__$1 = ((cljs.core.seq_QMARK_.call(null,map__35634))?cljs.core.apply.call(null,cljs.core.hash_map,map__35634):map__35634);
var file_msg = map__35634__$1;
var file = cljs.core.get.call(null,map__35634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__35635){
var map__35638 = p__35635;
var map__35638__$1 = ((cljs.core.seq_QMARK_.call(null,map__35638))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var file = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__14429__auto__ = eval_body__$1;
if(cljs.core.truth_(and__14429__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__14429__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35639){var e = e35639;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__35644,p__35645){
var map__35846 = p__35644;
var map__35846__$1 = ((cljs.core.seq_QMARK_.call(null,map__35846))?cljs.core.apply.call(null,cljs.core.hash_map,map__35846):map__35846);
var opts = map__35846__$1;
var load_unchanged_files = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__35847 = p__35645;
var map__35847__$1 = ((cljs.core.seq_QMARK_.call(null,map__35847))?cljs.core.apply.call(null,cljs.core.hash_map,map__35847):map__35847);
var msg = map__35847__$1;
var files = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (state_35971){
var state_val_35972 = (state_35971[(1)]);
if((state_val_35972 === (7))){
var inst_35861 = (state_35971[(7)]);
var inst_35860 = (state_35971[(8)]);
var inst_35858 = (state_35971[(9)]);
var inst_35859 = (state_35971[(10)]);
var inst_35866 = cljs.core._nth.call(null,inst_35859,inst_35861);
var inst_35867 = figwheel.client.file_reloading.eval_body.call(null,inst_35866);
var inst_35868 = (inst_35861 + (1));
var tmp35973 = inst_35860;
var tmp35974 = inst_35858;
var tmp35975 = inst_35859;
var inst_35858__$1 = tmp35974;
var inst_35859__$1 = tmp35975;
var inst_35860__$1 = tmp35973;
var inst_35861__$1 = inst_35868;
var state_35971__$1 = (function (){var statearr_35976 = state_35971;
(statearr_35976[(7)] = inst_35861__$1);

(statearr_35976[(11)] = inst_35867);

(statearr_35976[(8)] = inst_35860__$1);

(statearr_35976[(9)] = inst_35858__$1);

(statearr_35976[(10)] = inst_35859__$1);

return statearr_35976;
})();
var statearr_35977_36046 = state_35971__$1;
(statearr_35977_36046[(2)] = null);

(statearr_35977_36046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (20))){
var inst_35908 = (state_35971[(12)]);
var inst_35903 = (state_35971[(13)]);
var inst_35907 = (state_35971[(14)]);
var inst_35910 = (state_35971[(15)]);
var inst_35904 = (state_35971[(16)]);
var inst_35913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35915 = (function (){var files_not_loaded = inst_35910;
var res = inst_35908;
var res_SINGLEQUOTE_ = inst_35907;
var files_SINGLEQUOTE_ = inst_35904;
var all_files = inst_35903;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35910,inst_35904,inst_35913,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (p__35914){
var map__35978 = p__35914;
var map__35978__$1 = ((cljs.core.seq_QMARK_.call(null,map__35978))?cljs.core.apply.call(null,cljs.core.hash_map,map__35978):map__35978);
var file = cljs.core.get.call(null,map__35978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35910,inst_35904,inst_35913,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35916 = cljs.core.map.call(null,inst_35915,inst_35908);
var inst_35917 = cljs.core.pr_str.call(null,inst_35916);
var inst_35918 = figwheel.client.utils.log.call(null,inst_35917);
var inst_35919 = (function (){var files_not_loaded = inst_35910;
var res = inst_35908;
var res_SINGLEQUOTE_ = inst_35907;
var files_SINGLEQUOTE_ = inst_35904;
var all_files = inst_35903;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35910,inst_35904,inst_35913,inst_35915,inst_35916,inst_35917,inst_35918,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35910,inst_35904,inst_35913,inst_35915,inst_35916,inst_35917,inst_35918,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35920 = setTimeout(inst_35919,(10));
var state_35971__$1 = (function (){var statearr_35979 = state_35971;
(statearr_35979[(17)] = inst_35918);

(statearr_35979[(18)] = inst_35913);

return statearr_35979;
})();
var statearr_35980_36047 = state_35971__$1;
(statearr_35980_36047[(2)] = inst_35920);

(statearr_35980_36047[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (27))){
var inst_35930 = (state_35971[(19)]);
var state_35971__$1 = state_35971;
var statearr_35981_36048 = state_35971__$1;
(statearr_35981_36048[(2)] = inst_35930);

(statearr_35981_36048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (1))){
var inst_35850 = (state_35971[(20)]);
var inst_35848 = before_jsload.call(null,files);
var inst_35849 = (function (){return ((function (inst_35850,inst_35848,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (p1__35640_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35640_SHARP_);
});
;})(inst_35850,inst_35848,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35850__$1 = cljs.core.filter.call(null,inst_35849,files);
var inst_35851 = cljs.core.not_empty.call(null,inst_35850__$1);
var state_35971__$1 = (function (){var statearr_35982 = state_35971;
(statearr_35982[(21)] = inst_35848);

(statearr_35982[(20)] = inst_35850__$1);

return statearr_35982;
})();
if(cljs.core.truth_(inst_35851)){
var statearr_35983_36049 = state_35971__$1;
(statearr_35983_36049[(1)] = (2));

} else {
var statearr_35984_36050 = state_35971__$1;
(statearr_35984_36050[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (24))){
var state_35971__$1 = state_35971;
var statearr_35985_36051 = state_35971__$1;
(statearr_35985_36051[(2)] = null);

(statearr_35985_36051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (4))){
var inst_35895 = (state_35971[(2)]);
var inst_35896 = (function (){return ((function (inst_35895,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (p1__35641_SHARP_){
var and__14429__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35641_SHARP_);
if(cljs.core.truth_(and__14429__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35641_SHARP_));
} else {
return and__14429__auto__;
}
});
;})(inst_35895,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35897 = cljs.core.filter.call(null,inst_35896,files);
var state_35971__$1 = (function (){var statearr_35986 = state_35971;
(statearr_35986[(22)] = inst_35895);

(statearr_35986[(23)] = inst_35897);

return statearr_35986;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35987_36052 = state_35971__$1;
(statearr_35987_36052[(1)] = (16));

} else {
var statearr_35988_36053 = state_35971__$1;
(statearr_35988_36053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (15))){
var inst_35885 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_35989_36054 = state_35971__$1;
(statearr_35989_36054[(2)] = inst_35885);

(statearr_35989_36054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (21))){
var state_35971__$1 = state_35971;
var statearr_35990_36055 = state_35971__$1;
(statearr_35990_36055[(2)] = null);

(statearr_35990_36055[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (31))){
var inst_35938 = (state_35971[(24)]);
var inst_35948 = (state_35971[(2)]);
var inst_35949 = cljs.core.not_empty.call(null,inst_35938);
var state_35971__$1 = (function (){var statearr_35991 = state_35971;
(statearr_35991[(25)] = inst_35948);

return statearr_35991;
})();
if(cljs.core.truth_(inst_35949)){
var statearr_35992_36056 = state_35971__$1;
(statearr_35992_36056[(1)] = (32));

} else {
var statearr_35993_36057 = state_35971__$1;
(statearr_35993_36057[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (32))){
var inst_35938 = (state_35971[(24)]);
var inst_35951 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35938);
var inst_35952 = cljs.core.pr_str.call(null,inst_35951);
var inst_35953 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35952)].join('');
var inst_35954 = figwheel.client.utils.log.call(null,inst_35953);
var state_35971__$1 = state_35971;
var statearr_35994_36058 = state_35971__$1;
(statearr_35994_36058[(2)] = inst_35954);

(statearr_35994_36058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (33))){
var state_35971__$1 = state_35971;
var statearr_35995_36059 = state_35971__$1;
(statearr_35995_36059[(2)] = null);

(statearr_35995_36059[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (13))){
var inst_35871 = (state_35971[(26)]);
var inst_35875 = cljs.core.chunk_first.call(null,inst_35871);
var inst_35876 = cljs.core.chunk_rest.call(null,inst_35871);
var inst_35877 = cljs.core.count.call(null,inst_35875);
var inst_35858 = inst_35876;
var inst_35859 = inst_35875;
var inst_35860 = inst_35877;
var inst_35861 = (0);
var state_35971__$1 = (function (){var statearr_35996 = state_35971;
(statearr_35996[(7)] = inst_35861);

(statearr_35996[(8)] = inst_35860);

(statearr_35996[(9)] = inst_35858);

(statearr_35996[(10)] = inst_35859);

return statearr_35996;
})();
var statearr_35997_36060 = state_35971__$1;
(statearr_35997_36060[(2)] = null);

(statearr_35997_36060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (22))){
var inst_35910 = (state_35971[(15)]);
var inst_35923 = (state_35971[(2)]);
var inst_35924 = cljs.core.not_empty.call(null,inst_35910);
var state_35971__$1 = (function (){var statearr_35998 = state_35971;
(statearr_35998[(27)] = inst_35923);

return statearr_35998;
})();
if(cljs.core.truth_(inst_35924)){
var statearr_35999_36061 = state_35971__$1;
(statearr_35999_36061[(1)] = (23));

} else {
var statearr_36000_36062 = state_35971__$1;
(statearr_36000_36062[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (36))){
var state_35971__$1 = state_35971;
var statearr_36001_36063 = state_35971__$1;
(statearr_36001_36063[(2)] = null);

(statearr_36001_36063[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (29))){
var inst_35939 = (state_35971[(28)]);
var inst_35942 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35939);
var inst_35943 = cljs.core.pr_str.call(null,inst_35942);
var inst_35944 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35943)].join('');
var inst_35945 = figwheel.client.utils.log.call(null,inst_35944);
var state_35971__$1 = state_35971;
var statearr_36002_36064 = state_35971__$1;
(statearr_36002_36064[(2)] = inst_35945);

(statearr_36002_36064[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (6))){
var inst_35892 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_36003_36065 = state_35971__$1;
(statearr_36003_36065[(2)] = inst_35892);

(statearr_36003_36065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (28))){
var inst_35939 = (state_35971[(28)]);
var inst_35936 = (state_35971[(2)]);
var inst_35937 = cljs.core.get.call(null,inst_35936,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35938 = cljs.core.get.call(null,inst_35936,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35939__$1 = cljs.core.get.call(null,inst_35936,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35940 = cljs.core.not_empty.call(null,inst_35939__$1);
var state_35971__$1 = (function (){var statearr_36004 = state_35971;
(statearr_36004[(24)] = inst_35938);

(statearr_36004[(29)] = inst_35937);

(statearr_36004[(28)] = inst_35939__$1);

return statearr_36004;
})();
if(cljs.core.truth_(inst_35940)){
var statearr_36005_36066 = state_35971__$1;
(statearr_36005_36066[(1)] = (29));

} else {
var statearr_36006_36067 = state_35971__$1;
(statearr_36006_36067[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (25))){
var inst_35969 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35971__$1,inst_35969);
} else {
if((state_val_35972 === (34))){
var inst_35937 = (state_35971[(29)]);
var inst_35957 = (state_35971[(2)]);
var inst_35958 = cljs.core.not_empty.call(null,inst_35937);
var state_35971__$1 = (function (){var statearr_36007 = state_35971;
(statearr_36007[(30)] = inst_35957);

return statearr_36007;
})();
if(cljs.core.truth_(inst_35958)){
var statearr_36008_36068 = state_35971__$1;
(statearr_36008_36068[(1)] = (35));

} else {
var statearr_36009_36069 = state_35971__$1;
(statearr_36009_36069[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (17))){
var inst_35897 = (state_35971[(23)]);
var state_35971__$1 = state_35971;
var statearr_36010_36070 = state_35971__$1;
(statearr_36010_36070[(2)] = inst_35897);

(statearr_36010_36070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (3))){
var state_35971__$1 = state_35971;
var statearr_36011_36071 = state_35971__$1;
(statearr_36011_36071[(2)] = null);

(statearr_36011_36071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (12))){
var inst_35888 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_36012_36072 = state_35971__$1;
(statearr_36012_36072[(2)] = inst_35888);

(statearr_36012_36072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (2))){
var inst_35850 = (state_35971[(20)]);
var inst_35857 = cljs.core.seq.call(null,inst_35850);
var inst_35858 = inst_35857;
var inst_35859 = null;
var inst_35860 = (0);
var inst_35861 = (0);
var state_35971__$1 = (function (){var statearr_36013 = state_35971;
(statearr_36013[(7)] = inst_35861);

(statearr_36013[(8)] = inst_35860);

(statearr_36013[(9)] = inst_35858);

(statearr_36013[(10)] = inst_35859);

return statearr_36013;
})();
var statearr_36014_36073 = state_35971__$1;
(statearr_36014_36073[(2)] = null);

(statearr_36014_36073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (23))){
var inst_35908 = (state_35971[(12)]);
var inst_35903 = (state_35971[(13)]);
var inst_35907 = (state_35971[(14)]);
var inst_35910 = (state_35971[(15)]);
var inst_35904 = (state_35971[(16)]);
var inst_35930 = (state_35971[(19)]);
var inst_35926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35929 = (function (){var files_not_loaded = inst_35910;
var res = inst_35908;
var res_SINGLEQUOTE_ = inst_35907;
var files_SINGLEQUOTE_ = inst_35904;
var all_files = inst_35903;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35910,inst_35904,inst_35930,inst_35926,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (p__35928){
var map__36015 = p__35928;
var map__36015__$1 = ((cljs.core.seq_QMARK_.call(null,map__36015))?cljs.core.apply.call(null,cljs.core.hash_map,map__36015):map__36015);
var meta_data = cljs.core.get.call(null,map__36015__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35910,inst_35904,inst_35930,inst_35926,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35930__$1 = cljs.core.group_by.call(null,inst_35929,inst_35910);
var inst_35931 = cljs.core.seq_QMARK_.call(null,inst_35930__$1);
var state_35971__$1 = (function (){var statearr_36016 = state_35971;
(statearr_36016[(31)] = inst_35926);

(statearr_36016[(19)] = inst_35930__$1);

return statearr_36016;
})();
if(inst_35931){
var statearr_36017_36074 = state_35971__$1;
(statearr_36017_36074[(1)] = (26));

} else {
var statearr_36018_36075 = state_35971__$1;
(statearr_36018_36075[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (35))){
var inst_35937 = (state_35971[(29)]);
var inst_35960 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35937);
var inst_35961 = cljs.core.pr_str.call(null,inst_35960);
var inst_35962 = [cljs.core.str("not required: "),cljs.core.str(inst_35961)].join('');
var inst_35963 = figwheel.client.utils.log.call(null,inst_35962);
var state_35971__$1 = state_35971;
var statearr_36019_36076 = state_35971__$1;
(statearr_36019_36076[(2)] = inst_35963);

(statearr_36019_36076[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (19))){
var inst_35908 = (state_35971[(12)]);
var inst_35903 = (state_35971[(13)]);
var inst_35907 = (state_35971[(14)]);
var inst_35904 = (state_35971[(16)]);
var inst_35907__$1 = (state_35971[(2)]);
var inst_35908__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35907__$1);
var inst_35909 = (function (){var res = inst_35908__$1;
var res_SINGLEQUOTE_ = inst_35907__$1;
var files_SINGLEQUOTE_ = inst_35904;
var all_files = inst_35903;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35904,inst_35907__$1,inst_35908__$1,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (p1__35643_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35643_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35908,inst_35903,inst_35907,inst_35904,inst_35907__$1,inst_35908__$1,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35910 = cljs.core.filter.call(null,inst_35909,inst_35907__$1);
var inst_35911 = cljs.core.not_empty.call(null,inst_35908__$1);
var state_35971__$1 = (function (){var statearr_36020 = state_35971;
(statearr_36020[(12)] = inst_35908__$1);

(statearr_36020[(14)] = inst_35907__$1);

(statearr_36020[(15)] = inst_35910);

return statearr_36020;
})();
if(cljs.core.truth_(inst_35911)){
var statearr_36021_36077 = state_35971__$1;
(statearr_36021_36077[(1)] = (20));

} else {
var statearr_36022_36078 = state_35971__$1;
(statearr_36022_36078[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (11))){
var state_35971__$1 = state_35971;
var statearr_36023_36079 = state_35971__$1;
(statearr_36023_36079[(2)] = null);

(statearr_36023_36079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (9))){
var inst_35890 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_36024_36080 = state_35971__$1;
(statearr_36024_36080[(2)] = inst_35890);

(statearr_36024_36080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (5))){
var inst_35861 = (state_35971[(7)]);
var inst_35860 = (state_35971[(8)]);
var inst_35863 = (inst_35861 < inst_35860);
var inst_35864 = inst_35863;
var state_35971__$1 = state_35971;
if(cljs.core.truth_(inst_35864)){
var statearr_36025_36081 = state_35971__$1;
(statearr_36025_36081[(1)] = (7));

} else {
var statearr_36026_36082 = state_35971__$1;
(statearr_36026_36082[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (14))){
var inst_35871 = (state_35971[(26)]);
var inst_35880 = cljs.core.first.call(null,inst_35871);
var inst_35881 = figwheel.client.file_reloading.eval_body.call(null,inst_35880);
var inst_35882 = cljs.core.next.call(null,inst_35871);
var inst_35858 = inst_35882;
var inst_35859 = null;
var inst_35860 = (0);
var inst_35861 = (0);
var state_35971__$1 = (function (){var statearr_36027 = state_35971;
(statearr_36027[(7)] = inst_35861);

(statearr_36027[(32)] = inst_35881);

(statearr_36027[(8)] = inst_35860);

(statearr_36027[(9)] = inst_35858);

(statearr_36027[(10)] = inst_35859);

return statearr_36027;
})();
var statearr_36028_36083 = state_35971__$1;
(statearr_36028_36083[(2)] = null);

(statearr_36028_36083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (26))){
var inst_35930 = (state_35971[(19)]);
var inst_35933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35930);
var state_35971__$1 = state_35971;
var statearr_36029_36084 = state_35971__$1;
(statearr_36029_36084[(2)] = inst_35933);

(statearr_36029_36084[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (16))){
var inst_35897 = (state_35971[(23)]);
var inst_35899 = (function (){var all_files = inst_35897;
return ((function (all_files,inst_35897,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function (p1__35642_SHARP_){
return cljs.core.update_in.call(null,p1__35642_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35897,state_val_35972,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var inst_35900 = cljs.core.map.call(null,inst_35899,inst_35897);
var state_35971__$1 = state_35971;
var statearr_36030_36085 = state_35971__$1;
(statearr_36030_36085[(2)] = inst_35900);

(statearr_36030_36085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (30))){
var state_35971__$1 = state_35971;
var statearr_36031_36086 = state_35971__$1;
(statearr_36031_36086[(2)] = null);

(statearr_36031_36086[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (10))){
var inst_35871 = (state_35971[(26)]);
var inst_35873 = cljs.core.chunked_seq_QMARK_.call(null,inst_35871);
var state_35971__$1 = state_35971;
if(inst_35873){
var statearr_36032_36087 = state_35971__$1;
(statearr_36032_36087[(1)] = (13));

} else {
var statearr_36033_36088 = state_35971__$1;
(statearr_36033_36088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (18))){
var inst_35903 = (state_35971[(13)]);
var inst_35904 = (state_35971[(16)]);
var inst_35903__$1 = (state_35971[(2)]);
var inst_35904__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35903__$1);
var inst_35905 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35904__$1);
var state_35971__$1 = (function (){var statearr_36034 = state_35971;
(statearr_36034[(13)] = inst_35903__$1);

(statearr_36034[(16)] = inst_35904__$1);

return statearr_36034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35971__$1,(19),inst_35905);
} else {
if((state_val_35972 === (37))){
var inst_35966 = (state_35971[(2)]);
var state_35971__$1 = state_35971;
var statearr_36035_36089 = state_35971__$1;
(statearr_36035_36089[(2)] = inst_35966);

(statearr_36035_36089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35972 === (8))){
var inst_35858 = (state_35971[(9)]);
var inst_35871 = (state_35971[(26)]);
var inst_35871__$1 = cljs.core.seq.call(null,inst_35858);
var state_35971__$1 = (function (){var statearr_36036 = state_35971;
(statearr_36036[(26)] = inst_35871__$1);

return statearr_36036;
})();
if(inst_35871__$1){
var statearr_36037_36090 = state_35971__$1;
(statearr_36037_36090[(1)] = (10));

} else {
var statearr_36038_36091 = state_35971__$1;
(statearr_36038_36091[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
;
return ((function (switch__30984__auto__,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36042[(0)] = state_machine__30985__auto__);

(statearr_36042[(1)] = (1));

return statearr_36042;
});
var state_machine__30985__auto____1 = (function (state_35971){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36043){if((e36043 instanceof Object)){
var ex__30988__auto__ = e36043;
var statearr_36044_36092 = state_35971;
(statearr_36044_36092[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36093 = state_35971;
state_35971 = G__36093;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35971){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
})();
var state__31042__auto__ = (function (){var statearr_36045 = f__31041__auto__.call(null);
(statearr_36045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_36045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__,map__35846,map__35846__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35847,map__35847__$1,msg,files))
);

return c__31040__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__36096,link){
var map__36098 = p__36096;
var map__36098__$1 = ((cljs.core.seq_QMARK_.call(null,map__36098))?cljs.core.apply.call(null,cljs.core.hash_map,map__36098):map__36098);
var file = cljs.core.get.call(null,map__36098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4406__auto__ = link.href;
if(cljs.core.truth_(temp__4406__auto__)){
var link_href = temp__4406__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4406__auto__,map__36098,map__36098__$1,file){
return (function (p1__36094_SHARP_,p2__36095_SHARP_){
if(cljs.core._EQ_.call(null,p1__36094_SHARP_,p2__36095_SHARP_)){
return p1__36094_SHARP_;
} else {
return false;
}
});})(link_href,temp__4406__auto__,map__36098,map__36098__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4406__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36102){
var map__36103 = p__36102;
var map__36103__$1 = ((cljs.core.seq_QMARK_.call(null,map__36103))?cljs.core.apply.call(null,cljs.core.hash_map,map__36103):map__36103);
var current_url_length = cljs.core.get.call(null,map__36103__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__36103__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36099_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36099_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4406__auto__)){
var res = temp__4406__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__36104){
var map__36106 = p__36104;
var map__36106__$1 = ((cljs.core.seq_QMARK_.call(null,map__36106))?cljs.core.apply.call(null,cljs.core.hash_map,map__36106):map__36106);
var f_data = map__36106__$1;
var request_url = cljs.core.get.call(null,map__36106__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__36106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4404__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4404__auto__)){
var link = temp__4404__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__14441__auto__ = request_url;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__36107,files_msg){
var map__36129 = p__36107;
var map__36129__$1 = ((cljs.core.seq_QMARK_.call(null,map__36129))?cljs.core.apply.call(null,cljs.core.hash_map,map__36129):map__36129);
var opts = map__36129__$1;
var on_cssload = cljs.core.get.call(null,map__36129__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36130_36150 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36131_36151 = null;
var count__36132_36152 = (0);
var i__36133_36153 = (0);
while(true){
if((i__36133_36153 < count__36132_36152)){
var f_36154 = cljs.core._nth.call(null,chunk__36131_36151,i__36133_36153);
figwheel.client.file_reloading.reload_css_file.call(null,f_36154);

var G__36155 = seq__36130_36150;
var G__36156 = chunk__36131_36151;
var G__36157 = count__36132_36152;
var G__36158 = (i__36133_36153 + (1));
seq__36130_36150 = G__36155;
chunk__36131_36151 = G__36156;
count__36132_36152 = G__36157;
i__36133_36153 = G__36158;
continue;
} else {
var temp__4406__auto___36159 = cljs.core.seq.call(null,seq__36130_36150);
if(temp__4406__auto___36159){
var seq__36130_36160__$1 = temp__4406__auto___36159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36130_36160__$1)){
var c__15228__auto___36161 = cljs.core.chunk_first.call(null,seq__36130_36160__$1);
var G__36162 = cljs.core.chunk_rest.call(null,seq__36130_36160__$1);
var G__36163 = c__15228__auto___36161;
var G__36164 = cljs.core.count.call(null,c__15228__auto___36161);
var G__36165 = (0);
seq__36130_36150 = G__36162;
chunk__36131_36151 = G__36163;
count__36132_36152 = G__36164;
i__36133_36153 = G__36165;
continue;
} else {
var f_36166 = cljs.core.first.call(null,seq__36130_36160__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36166);

var G__36167 = cljs.core.next.call(null,seq__36130_36160__$1);
var G__36168 = null;
var G__36169 = (0);
var G__36170 = (0);
seq__36130_36150 = G__36167;
chunk__36131_36151 = G__36168;
count__36132_36152 = G__36169;
i__36133_36153 = G__36170;
continue;
}
} else {
}
}
break;
}

var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__,map__36129,map__36129__$1,opts,on_cssload){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__,map__36129,map__36129__$1,opts,on_cssload){
return (function (state_36140){
var state_val_36141 = (state_36140[(1)]);
if((state_val_36141 === (2))){
var inst_36136 = (state_36140[(2)]);
var inst_36137 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36138 = on_cssload.call(null,inst_36137);
var state_36140__$1 = (function (){var statearr_36142 = state_36140;
(statearr_36142[(7)] = inst_36136);

return statearr_36142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36140__$1,inst_36138);
} else {
if((state_val_36141 === (1))){
var inst_36134 = cljs.core.async.timeout.call(null,(100));
var state_36140__$1 = state_36140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36140__$1,(2),inst_36134);
} else {
return null;
}
}
});})(c__31040__auto__,map__36129,map__36129__$1,opts,on_cssload))
;
return ((function (switch__30984__auto__,c__31040__auto__,map__36129,map__36129__$1,opts,on_cssload){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36146 = [null,null,null,null,null,null,null,null];
(statearr_36146[(0)] = state_machine__30985__auto__);

(statearr_36146[(1)] = (1));

return statearr_36146;
});
var state_machine__30985__auto____1 = (function (state_36140){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36147){if((e36147 instanceof Object)){
var ex__30988__auto__ = e36147;
var statearr_36148_36171 = state_36140;
(statearr_36148_36171[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36172 = state_36140;
state_36140 = G__36172;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36140){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__,map__36129,map__36129__$1,opts,on_cssload))
})();
var state__31042__auto__ = (function (){var statearr_36149 = f__31041__auto__.call(null);
(statearr_36149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_36149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__,map__36129,map__36129__$1,opts,on_cssload))
);

return c__31040__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map