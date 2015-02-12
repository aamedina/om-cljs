// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34616__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34617__i = 0, G__34617__a = new Array(arguments.length -  0);
while (G__34617__i < G__34617__a.length) {G__34617__a[G__34617__i] = arguments[G__34617__i + 0]; ++G__34617__i;}
  args = new cljs.core.IndexedSeq(G__34617__a,0);
} 
return G__34616__delegate.call(this,args);};
G__34616.cljs$lang$maxFixedArity = 0;
G__34616.cljs$lang$applyTo = (function (arglist__34618){
var args = cljs.core.seq(arglist__34618);
return G__34616__delegate(args);
});
G__34616.cljs$core$IFn$_invoke$arity$variadic = G__34616__delegate;
return G__34616;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__34619){
var map__34621 = p__34619;
var map__34621__$1 = ((cljs.core.seq_QMARK_.call(null,map__34621))?cljs.core.apply.call(null,cljs.core.hash_map,map__34621):map__34621);
var class$ = cljs.core.get.call(null,map__34621__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__34621__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__14441__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__14429__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__14429__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__14429__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31040__auto___34750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___34750,ch){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___34750,ch){
return (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (7))){
var inst_34720 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34726_34751 = state_34724__$1;
(statearr_34726_34751[(2)] = inst_34720);

(statearr_34726_34751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (1))){
var state_34724__$1 = state_34724;
var statearr_34727_34752 = state_34724__$1;
(statearr_34727_34752[(2)] = null);

(statearr_34727_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (4))){
var inst_34688 = (state_34724[(7)]);
var inst_34688__$1 = (state_34724[(2)]);
var state_34724__$1 = (function (){var statearr_34728 = state_34724;
(statearr_34728[(7)] = inst_34688__$1);

return statearr_34728;
})();
if(cljs.core.truth_(inst_34688__$1)){
var statearr_34729_34753 = state_34724__$1;
(statearr_34729_34753[(1)] = (5));

} else {
var statearr_34730_34754 = state_34724__$1;
(statearr_34730_34754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (13))){
var state_34724__$1 = state_34724;
var statearr_34731_34755 = state_34724__$1;
(statearr_34731_34755[(2)] = null);

(statearr_34731_34755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var state_34724__$1 = state_34724;
var statearr_34732_34756 = state_34724__$1;
(statearr_34732_34756[(2)] = null);

(statearr_34732_34756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var inst_34722 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34724__$1,inst_34722);
} else {
if((state_val_34725 === (12))){
var inst_34695 = (state_34724[(8)]);
var inst_34708 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34695);
var inst_34709 = cljs.core.first.call(null,inst_34708);
var inst_34710 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34709);
var inst_34711 = console.warn("Figwheel: Not loading code with warnings - ",inst_34710);
var state_34724__$1 = state_34724;
var statearr_34733_34757 = state_34724__$1;
(statearr_34733_34757[(2)] = inst_34711);

(statearr_34733_34757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (2))){
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34724__$1,(4),ch);
} else {
if((state_val_34725 === (11))){
var inst_34704 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34734_34758 = state_34724__$1;
(statearr_34734_34758[(2)] = inst_34704);

(statearr_34734_34758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (9))){
var inst_34694 = (state_34724[(9)]);
var inst_34706 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34694,opts);
var state_34724__$1 = state_34724;
if(inst_34706){
var statearr_34735_34759 = state_34724__$1;
(statearr_34735_34759[(1)] = (12));

} else {
var statearr_34736_34760 = state_34724__$1;
(statearr_34736_34760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (5))){
var inst_34694 = (state_34724[(9)]);
var inst_34688 = (state_34724[(7)]);
var inst_34690 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34691 = (new cljs.core.PersistentArrayMap(null,2,inst_34690,null));
var inst_34692 = (new cljs.core.PersistentHashSet(null,inst_34691,null));
var inst_34693 = figwheel.client.focus_msgs.call(null,inst_34692,inst_34688);
var inst_34694__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34693);
var inst_34695 = cljs.core.first.call(null,inst_34693);
var inst_34696 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34694__$1,opts);
var state_34724__$1 = (function (){var statearr_34737 = state_34724;
(statearr_34737[(9)] = inst_34694__$1);

(statearr_34737[(8)] = inst_34695);

return statearr_34737;
})();
if(cljs.core.truth_(inst_34696)){
var statearr_34738_34761 = state_34724__$1;
(statearr_34738_34761[(1)] = (8));

} else {
var statearr_34739_34762 = state_34724__$1;
(statearr_34739_34762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (14))){
var inst_34714 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34740_34763 = state_34724__$1;
(statearr_34740_34763[(2)] = inst_34714);

(statearr_34740_34763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (10))){
var inst_34716 = (state_34724[(2)]);
var state_34724__$1 = (function (){var statearr_34741 = state_34724;
(statearr_34741[(10)] = inst_34716);

return statearr_34741;
})();
var statearr_34742_34764 = state_34724__$1;
(statearr_34742_34764[(2)] = null);

(statearr_34742_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (8))){
var inst_34695 = (state_34724[(8)]);
var inst_34698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34699 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34695);
var inst_34700 = cljs.core.async.timeout.call(null,(1000));
var inst_34701 = [inst_34699,inst_34700];
var inst_34702 = (new cljs.core.PersistentVector(null,2,(5),inst_34698,inst_34701,null));
var state_34724__$1 = state_34724;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34724__$1,(11),inst_34702);
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
});})(c__31040__auto___34750,ch))
;
return ((function (switch__30984__auto__,c__31040__auto___34750,ch){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_34746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34746[(0)] = state_machine__30985__auto__);

(statearr_34746[(1)] = (1));

return statearr_34746;
});
var state_machine__30985__auto____1 = (function (state_34724){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_34724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__30988__auto__ = e34747;
var statearr_34748_34765 = state_34724;
(statearr_34748_34765[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_34724;
state_34724 = G__34766;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___34750,ch))
})();
var state__31042__auto__ = (function (){var statearr_34749 = f__31041__auto__.call(null);
(statearr_34749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___34750);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___34750,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__34767_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34767_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34772 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34773 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34772,_STAR_print_newline_STAR_34773){
return (function() { 
var G__34774__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34775__i = 0, G__34775__a = new Array(arguments.length -  0);
while (G__34775__i < G__34775__a.length) {G__34775__a[G__34775__i] = arguments[G__34775__i + 0]; ++G__34775__i;}
  args = new cljs.core.IndexedSeq(G__34775__a,0);
} 
return G__34774__delegate.call(this,args);};
G__34774.cljs$lang$maxFixedArity = 0;
G__34774.cljs$lang$applyTo = (function (arglist__34776){
var args = cljs.core.seq(arglist__34776);
return G__34774__delegate(args);
});
G__34774.cljs$core$IFn$_invoke$arity$variadic = G__34774__delegate;
return G__34774;
})()
;})(_STAR_print_fn_STAR_34772,_STAR_print_newline_STAR_34773))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34773;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34772;
}}catch (e34771){if((e34771 instanceof Error)){
var e = e34771;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e34771;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__34777){
var map__34782 = p__34777;
var map__34782__$1 = ((cljs.core.seq_QMARK_.call(null,map__34782))?cljs.core.apply.call(null,cljs.core.hash_map,map__34782):map__34782);
var opts = map__34782__$1;
var build_id = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34782,map__34782__$1,opts,build_id){
return (function (p__34783){
var vec__34784 = p__34783;
var map__34785 = cljs.core.nth.call(null,vec__34784,(0),null);
var map__34785__$1 = ((cljs.core.seq_QMARK_.call(null,map__34785))?cljs.core.apply.call(null,cljs.core.hash_map,map__34785):map__34785);
var msg = map__34785__$1;
var msg_name = cljs.core.get.call(null,map__34785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34784,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34784,map__34785,map__34785__$1,msg,msg_name,_,map__34782,map__34782__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34784,map__34785,map__34785__$1,msg,msg_name,_,map__34782,map__34782__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34782,map__34782__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__34789){
var vec__34790 = p__34789;
var map__34791 = cljs.core.nth.call(null,vec__34790,(0),null);
var map__34791__$1 = ((cljs.core.seq_QMARK_.call(null,map__34791))?cljs.core.apply.call(null,cljs.core.hash_map,map__34791):map__34791);
var msg = map__34791__$1;
var msg_name = cljs.core.get.call(null,map__34791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34790,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__34792){
var map__34800 = p__34792;
var map__34800__$1 = ((cljs.core.seq_QMARK_.call(null,map__34800))?cljs.core.apply.call(null,cljs.core.hash_map,map__34800):map__34800);
var on_compile_fail = cljs.core.get.call(null,map__34800__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__34800__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__34800,map__34800__$1,on_compile_fail,on_compile_warning){
return (function (p__34801){
var vec__34802 = p__34801;
var map__34803 = cljs.core.nth.call(null,vec__34802,(0),null);
var map__34803__$1 = ((cljs.core.seq_QMARK_.call(null,map__34803))?cljs.core.apply.call(null,cljs.core.hash_map,map__34803):map__34803);
var msg = map__34803__$1;
var msg_name = cljs.core.get.call(null,map__34803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34802,(1));
var pred__34804 = cljs.core._EQ_;
var expr__34805 = msg_name;
if(cljs.core.truth_(pred__34804.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34805))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34804.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34805))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34800,map__34800__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__,msg_hist,msg_names,msg){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34931 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34982__$1 = state_34982;
if(inst_34931){
var statearr_34984_35021 = state_34982__$1;
(statearr_34984_35021[(1)] = (11));

} else {
var statearr_34985_35022 = state_34982__$1;
(statearr_34985_35022[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (20))){
var inst_34972 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34986_35023 = state_34982__$1;
(statearr_34986_35023[(2)] = inst_34972);

(statearr_34986_35023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (27))){
var inst_34963 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(30),inst_34963);
} else {
if((state_val_34983 === (1))){
var inst_34914 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34914)){
var statearr_34987_35024 = state_34982__$1;
(statearr_34987_35024[(1)] = (2));

} else {
var statearr_34988_35025 = state_34982__$1;
(statearr_34988_35025[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (24))){
var inst_34961 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34982__$1 = state_34982;
if(inst_34961){
var statearr_34989_35026 = state_34982__$1;
(statearr_34989_35026[(1)] = (27));

} else {
var statearr_34990_35027 = state_34982__$1;
(statearr_34990_35027[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34980 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (15))){
var inst_34941 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34942 = figwheel.client.heads_up.append_message.call(null,inst_34941);
var state_34982__$1 = state_34982;
var statearr_34991_35028 = state_34982__$1;
(statearr_34991_35028[(2)] = inst_34942);

(statearr_34991_35028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (21))){
var inst_34948 = (state_34982[(2)]);
var inst_34949 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34950 = figwheel.client.heads_up.display_warning.call(null,inst_34949);
var state_34982__$1 = (function (){var statearr_34992 = state_34982;
(statearr_34992[(7)] = inst_34948);

return statearr_34992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(22),inst_34950);
} else {
if((state_val_34983 === (13))){
var inst_34976 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34993_35029 = state_34982__$1;
(statearr_34993_35029[(2)] = inst_34976);

(statearr_34993_35029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (22))){
var inst_34952 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34994_35030 = state_34982__$1;
(statearr_34994_35030[(2)] = inst_34952);

(statearr_34994_35030[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (29))){
var inst_34968 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34995_35031 = state_34982__$1;
(statearr_34995_35031[(2)] = inst_34968);

(statearr_34995_35031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
var inst_34922 = figwheel.client.heads_up.clear.call(null);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(9),inst_34922);
} else {
if((state_val_34983 === (28))){
var state_34982__$1 = state_34982;
var statearr_34996_35032 = state_34982__$1;
(statearr_34996_35032[(2)] = null);

(statearr_34996_35032[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (25))){
var inst_34970 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34997_35033 = state_34982__$1;
(statearr_34997_35033[(2)] = inst_34970);

(statearr_34997_35033[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (17))){
var inst_34974 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34998_35034 = state_34982__$1;
(statearr_34998_35034[(2)] = inst_34974);

(statearr_34998_35034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34920 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34982__$1 = state_34982;
if(inst_34920){
var statearr_34999_35035 = state_34982__$1;
(statearr_34999_35035[(1)] = (6));

} else {
var statearr_35000_35036 = state_34982__$1;
(statearr_35000_35036[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (12))){
var inst_34939 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34982__$1 = state_34982;
if(inst_34939){
var statearr_35001_35037 = state_34982__$1;
(statearr_35001_35037[(1)] = (15));

} else {
var statearr_35002_35038 = state_34982__$1;
(statearr_35002_35038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (2))){
var inst_34916 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(5),inst_34916);
} else {
if((state_val_34983 === (23))){
var inst_34956 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34957 = figwheel.client.heads_up.display_warning.call(null,inst_34956);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(26),inst_34957);
} else {
if((state_val_34983 === (19))){
var inst_34954 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34982__$1 = state_34982;
if(inst_34954){
var statearr_35003_35039 = state_34982__$1;
(statearr_35003_35039[(1)] = (23));

} else {
var statearr_35004_35040 = state_34982__$1;
(statearr_35004_35040[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34933 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34934 = figwheel.client.format_messages.call(null,inst_34933);
var inst_34935 = figwheel.client.heads_up.display_error.call(null,inst_34934);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(14),inst_34935);
} else {
if((state_val_34983 === (9))){
var inst_34924 = (state_34982[(2)]);
var inst_34925 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34926 = figwheel.client.format_messages.call(null,inst_34925);
var inst_34927 = figwheel.client.heads_up.display_error.call(null,inst_34926);
var state_34982__$1 = (function (){var statearr_35005 = state_34982;
(statearr_35005[(8)] = inst_34924);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(10),inst_34927);
} else {
if((state_val_34983 === (5))){
var inst_34918 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35006_35041 = state_34982__$1;
(statearr_35006_35041[(2)] = inst_34918);

(statearr_35006_35041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (14))){
var inst_34937 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35007_35042 = state_34982__$1;
(statearr_35007_35042[(2)] = inst_34937);

(statearr_35007_35042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (26))){
var inst_34959 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35008_35043 = state_34982__$1;
(statearr_35008_35043[(2)] = inst_34959);

(statearr_35008_35043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (16))){
var inst_34944 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34982__$1 = state_34982;
if(inst_34944){
var statearr_35009_35044 = state_34982__$1;
(statearr_35009_35044[(1)] = (18));

} else {
var statearr_35010_35045 = state_34982__$1;
(statearr_35010_35045[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (30))){
var inst_34965 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35011_35046 = state_34982__$1;
(statearr_35011_35046[(2)] = inst_34965);

(statearr_35011_35046[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34929 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35012_35047 = state_34982__$1;
(statearr_35012_35047[(2)] = inst_34929);

(statearr_35012_35047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (18))){
var inst_34946 = figwheel.client.heads_up.clear.call(null);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(21),inst_34946);
} else {
if((state_val_34983 === (8))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35013_35048 = state_34982__$1;
(statearr_35013_35048[(2)] = inst_34978);

(statearr_35013_35048[(1)] = (4));


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
});})(c__31040__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30984__auto__,c__31040__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_35017 = [null,null,null,null,null,null,null,null,null];
(statearr_35017[(0)] = state_machine__30985__auto__);

(statearr_35017[(1)] = (1));

return statearr_35017;
});
var state_machine__30985__auto____1 = (function (state_34982){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_34982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35018){if((e35018 instanceof Object)){
var ex__30988__auto__ = e35018;
var statearr_35019_35049 = state_34982;
(statearr_35019_35049[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35050 = state_34982;
state_34982 = G__35050;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__,msg_hist,msg_names,msg))
})();
var state__31042__auto__ = (function (){var statearr_35020 = f__31041__auto__.call(null);
(statearr_35020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_35020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__,msg_hist,msg_names,msg))
);

return c__31040__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31040__auto___35113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___35113,ch){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___35113,ch){
return (function (state_35096){
var state_val_35097 = (state_35096[(1)]);
if((state_val_35097 === (8))){
var inst_35088 = (state_35096[(2)]);
var state_35096__$1 = (function (){var statearr_35098 = state_35096;
(statearr_35098[(7)] = inst_35088);

return statearr_35098;
})();
var statearr_35099_35114 = state_35096__$1;
(statearr_35099_35114[(2)] = null);

(statearr_35099_35114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (7))){
var inst_35092 = (state_35096[(2)]);
var state_35096__$1 = state_35096;
var statearr_35100_35115 = state_35096__$1;
(statearr_35100_35115[(2)] = inst_35092);

(statearr_35100_35115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (6))){
var state_35096__$1 = state_35096;
var statearr_35101_35116 = state_35096__$1;
(statearr_35101_35116[(2)] = null);

(statearr_35101_35116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (5))){
var inst_35084 = (state_35096[(8)]);
var inst_35086 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35084);
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35096__$1,(8),inst_35086);
} else {
if((state_val_35097 === (4))){
var inst_35084 = (state_35096[(8)]);
var inst_35084__$1 = (state_35096[(2)]);
var state_35096__$1 = (function (){var statearr_35102 = state_35096;
(statearr_35102[(8)] = inst_35084__$1);

return statearr_35102;
})();
if(cljs.core.truth_(inst_35084__$1)){
var statearr_35103_35117 = state_35096__$1;
(statearr_35103_35117[(1)] = (5));

} else {
var statearr_35104_35118 = state_35096__$1;
(statearr_35104_35118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35097 === (3))){
var inst_35094 = (state_35096[(2)]);
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35096__$1,inst_35094);
} else {
if((state_val_35097 === (2))){
var state_35096__$1 = state_35096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35096__$1,(4),ch);
} else {
if((state_val_35097 === (1))){
var state_35096__$1 = state_35096;
var statearr_35105_35119 = state_35096__$1;
(statearr_35105_35119[(2)] = null);

(statearr_35105_35119[(1)] = (2));


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
});})(c__31040__auto___35113,ch))
;
return ((function (switch__30984__auto__,c__31040__auto___35113,ch){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_35109 = [null,null,null,null,null,null,null,null,null];
(statearr_35109[(0)] = state_machine__30985__auto__);

(statearr_35109[(1)] = (1));

return statearr_35109;
});
var state_machine__30985__auto____1 = (function (state_35096){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35110){if((e35110 instanceof Object)){
var ex__30988__auto__ = e35110;
var statearr_35111_35120 = state_35096;
(statearr_35111_35120[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35121 = state_35096;
state_35096 = G__35121;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35096){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___35113,ch))
})();
var state__31042__auto__ = (function (){var statearr_35112 = f__31041__auto__.call(null);
(statearr_35112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___35113);

return statearr_35112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___35113,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_35142){
var state_val_35143 = (state_35142[(1)]);
if((state_val_35143 === (2))){
var inst_35139 = (state_35142[(2)]);
var inst_35140 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35142__$1 = (function (){var statearr_35144 = state_35142;
(statearr_35144[(7)] = inst_35139);

return statearr_35144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35142__$1,inst_35140);
} else {
if((state_val_35143 === (1))){
var inst_35137 = cljs.core.async.timeout.call(null,(3000));
var state_35142__$1 = state_35142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35142__$1,(2),inst_35137);
} else {
return null;
}
}
});})(c__31040__auto__))
;
return ((function (switch__30984__auto__,c__31040__auto__){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_35148 = [null,null,null,null,null,null,null,null];
(statearr_35148[(0)] = state_machine__30985__auto__);

(statearr_35148[(1)] = (1));

return statearr_35148;
});
var state_machine__30985__auto____1 = (function (state_35142){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35149){if((e35149 instanceof Object)){
var ex__30988__auto__ = e35149;
var statearr_35150_35152 = state_35142;
(statearr_35150_35152[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35153 = state_35142;
state_35142 = G__35153;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35142){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_35151 = f__31041__auto__.call(null);
(statearr_35151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_35151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__14429__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__14429__auto__)){
return ("CustomEvent" in window);
} else {
return and__14429__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj35157 = {"detail":url};
return obj35157;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__35158){
var map__35164 = p__35158;
var map__35164__$1 = ((cljs.core.seq_QMARK_.call(null,map__35164))?cljs.core.apply.call(null,cljs.core.hash_map,map__35164):map__35164);
var ed = map__35164__$1;
var exception_data = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35165_35169 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35166_35170 = null;
var count__35167_35171 = (0);
var i__35168_35172 = (0);
while(true){
if((i__35168_35172 < count__35167_35171)){
var msg_35173 = cljs.core._nth.call(null,chunk__35166_35170,i__35168_35172);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35173);

var G__35174 = seq__35165_35169;
var G__35175 = chunk__35166_35170;
var G__35176 = count__35167_35171;
var G__35177 = (i__35168_35172 + (1));
seq__35165_35169 = G__35174;
chunk__35166_35170 = G__35175;
count__35167_35171 = G__35176;
i__35168_35172 = G__35177;
continue;
} else {
var temp__4406__auto___35178 = cljs.core.seq.call(null,seq__35165_35169);
if(temp__4406__auto___35178){
var seq__35165_35179__$1 = temp__4406__auto___35178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35165_35179__$1)){
var c__15228__auto___35180 = cljs.core.chunk_first.call(null,seq__35165_35179__$1);
var G__35181 = cljs.core.chunk_rest.call(null,seq__35165_35179__$1);
var G__35182 = c__15228__auto___35180;
var G__35183 = cljs.core.count.call(null,c__15228__auto___35180);
var G__35184 = (0);
seq__35165_35169 = G__35181;
chunk__35166_35170 = G__35182;
count__35167_35171 = G__35183;
i__35168_35172 = G__35184;
continue;
} else {
var msg_35185 = cljs.core.first.call(null,seq__35165_35179__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35185);

var G__35186 = cljs.core.next.call(null,seq__35165_35179__$1);
var G__35187 = null;
var G__35188 = (0);
var G__35189 = (0);
seq__35165_35169 = G__35186;
chunk__35166_35170 = G__35187;
count__35167_35171 = G__35188;
i__35168_35172 = G__35189;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__35190){
var map__35192 = p__35190;
var map__35192__$1 = ((cljs.core.seq_QMARK_.call(null,map__35192))?cljs.core.apply.call(null,cljs.core.hash_map,map__35192):map__35192);
var w = map__35192__$1;
var message = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__14429__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__14429__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__14429__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__35199 = cljs.core.seq.call(null,plugins);
var chunk__35200 = null;
var count__35201 = (0);
var i__35202 = (0);
while(true){
if((i__35202 < count__35201)){
var vec__35203 = cljs.core._nth.call(null,chunk__35200,i__35202);
var k = cljs.core.nth.call(null,vec__35203,(0),null);
var plugin = cljs.core.nth.call(null,vec__35203,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35205 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35199,chunk__35200,count__35201,i__35202,pl_35205,vec__35203,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35205.call(null,msg_hist);
});})(seq__35199,chunk__35200,count__35201,i__35202,pl_35205,vec__35203,k,plugin))
);
} else {
}

var G__35206 = seq__35199;
var G__35207 = chunk__35200;
var G__35208 = count__35201;
var G__35209 = (i__35202 + (1));
seq__35199 = G__35206;
chunk__35200 = G__35207;
count__35201 = G__35208;
i__35202 = G__35209;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__35199);
if(temp__4406__auto__){
var seq__35199__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35199__$1)){
var c__15228__auto__ = cljs.core.chunk_first.call(null,seq__35199__$1);
var G__35210 = cljs.core.chunk_rest.call(null,seq__35199__$1);
var G__35211 = c__15228__auto__;
var G__35212 = cljs.core.count.call(null,c__15228__auto__);
var G__35213 = (0);
seq__35199 = G__35210;
chunk__35200 = G__35211;
count__35201 = G__35212;
i__35202 = G__35213;
continue;
} else {
var vec__35204 = cljs.core.first.call(null,seq__35199__$1);
var k = cljs.core.nth.call(null,vec__35204,(0),null);
var plugin = cljs.core.nth.call(null,vec__35204,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35214 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35199,chunk__35200,count__35201,i__35202,pl_35214,vec__35204,k,plugin,seq__35199__$1,temp__4406__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35214.call(null,msg_hist);
});})(seq__35199,chunk__35200,count__35201,i__35202,pl_35214,vec__35204,k,plugin,seq__35199__$1,temp__4406__auto__))
);
} else {
}

var G__35215 = cljs.core.next.call(null,seq__35199__$1);
var G__35216 = null;
var G__35217 = (0);
var G__35218 = (0);
seq__35199 = G__35215;
chunk__35200 = G__35216;
count__35201 = G__35217;
i__35202 = G__35218;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__35219){
var map__35221 = p__35219;
var map__35221__$1 = ((cljs.core.seq_QMARK_.call(null,map__35221))?cljs.core.apply.call(null,cljs.core.hash_map,map__35221):map__35221);
var opts = map__35221__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__35219 = null;
if (arguments.length > 0) {
var G__35222__i = 0, G__35222__a = new Array(arguments.length -  0);
while (G__35222__i < G__35222__a.length) {G__35222__a[G__35222__i] = arguments[G__35222__i + 0]; ++G__35222__i;}
  p__35219 = new cljs.core.IndexedSeq(G__35222__a,0);
} 
return watch_and_reload__delegate.call(this,p__35219);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__35223){
var p__35219 = cljs.core.seq(arglist__35223);
return watch_and_reload__delegate(p__35219);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map