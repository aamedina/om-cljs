// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35241_35249 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35242_35250 = null;
var count__35243_35251 = (0);
var i__35244_35252 = (0);
while(true){
if((i__35244_35252 < count__35243_35251)){
var k_35253 = cljs.core._nth.call(null,chunk__35242_35250,i__35244_35252);
e.setAttribute(cljs.core.name.call(null,k_35253),cljs.core.get.call(null,attrs,k_35253));

var G__35254 = seq__35241_35249;
var G__35255 = chunk__35242_35250;
var G__35256 = count__35243_35251;
var G__35257 = (i__35244_35252 + (1));
seq__35241_35249 = G__35254;
chunk__35242_35250 = G__35255;
count__35243_35251 = G__35256;
i__35244_35252 = G__35257;
continue;
} else {
var temp__4406__auto___35258 = cljs.core.seq.call(null,seq__35241_35249);
if(temp__4406__auto___35258){
var seq__35241_35259__$1 = temp__4406__auto___35258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35241_35259__$1)){
var c__15228__auto___35260 = cljs.core.chunk_first.call(null,seq__35241_35259__$1);
var G__35261 = cljs.core.chunk_rest.call(null,seq__35241_35259__$1);
var G__35262 = c__15228__auto___35260;
var G__35263 = cljs.core.count.call(null,c__15228__auto___35260);
var G__35264 = (0);
seq__35241_35249 = G__35261;
chunk__35242_35250 = G__35262;
count__35243_35251 = G__35263;
i__35244_35252 = G__35264;
continue;
} else {
var k_35265 = cljs.core.first.call(null,seq__35241_35259__$1);
e.setAttribute(cljs.core.name.call(null,k_35265),cljs.core.get.call(null,attrs,k_35265));

var G__35266 = cljs.core.next.call(null,seq__35241_35259__$1);
var G__35267 = null;
var G__35268 = (0);
var G__35269 = (0);
seq__35241_35249 = G__35266;
chunk__35242_35250 = G__35267;
count__35243_35251 = G__35268;
i__35244_35252 = G__35269;
continue;
}
} else {
}
}
break;
}

var seq__35245_35270 = cljs.core.seq.call(null,children);
var chunk__35246_35271 = null;
var count__35247_35272 = (0);
var i__35248_35273 = (0);
while(true){
if((i__35248_35273 < count__35247_35272)){
var ch_35274 = cljs.core._nth.call(null,chunk__35246_35271,i__35248_35273);
e.appendChild(ch_35274);

var G__35275 = seq__35245_35270;
var G__35276 = chunk__35246_35271;
var G__35277 = count__35247_35272;
var G__35278 = (i__35248_35273 + (1));
seq__35245_35270 = G__35275;
chunk__35246_35271 = G__35276;
count__35247_35272 = G__35277;
i__35248_35273 = G__35278;
continue;
} else {
var temp__4406__auto___35279 = cljs.core.seq.call(null,seq__35245_35270);
if(temp__4406__auto___35279){
var seq__35245_35280__$1 = temp__4406__auto___35279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35245_35280__$1)){
var c__15228__auto___35281 = cljs.core.chunk_first.call(null,seq__35245_35280__$1);
var G__35282 = cljs.core.chunk_rest.call(null,seq__35245_35280__$1);
var G__35283 = c__15228__auto___35281;
var G__35284 = cljs.core.count.call(null,c__15228__auto___35281);
var G__35285 = (0);
seq__35245_35270 = G__35282;
chunk__35246_35271 = G__35283;
count__35247_35272 = G__35284;
i__35248_35273 = G__35285;
continue;
} else {
var ch_35286 = cljs.core.first.call(null,seq__35245_35280__$1);
e.appendChild(ch_35286);

var G__35287 = cljs.core.next.call(null,seq__35245_35280__$1);
var G__35288 = null;
var G__35289 = (0);
var G__35290 = (0);
seq__35245_35270 = G__35287;
chunk__35246_35271 = G__35288;
count__35247_35272 = G__35289;
i__35248_35273 = G__35290;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__35291__i = 0, G__35291__a = new Array(arguments.length -  2);
while (G__35291__i < G__35291__a.length) {G__35291__a[G__35291__i] = arguments[G__35291__i + 2]; ++G__35291__i;}
  children = new cljs.core.IndexedSeq(G__35291__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__35292){
var t = cljs.core.first(arglist__35292);
arglist__35292 = cljs.core.next(arglist__35292);
var attrs = cljs.core.first(arglist__35292);
var children = cljs.core.rest(arglist__35292);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__15338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15342__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__15338__auto__,prefer_table__15339__auto__,method_cache__15340__auto__,cached_hierarchy__15341__auto__,hierarchy__15342__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__15338__auto__,prefer_table__15339__auto__,method_cache__15340__auto__,cached_hierarchy__15341__auto__,hierarchy__15342__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15342__auto__,method_table__15338__auto__,prefer_table__15339__auto__,method_cache__15340__auto__,cached_hierarchy__15341__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__35293,st_map){
var map__35297 = p__35293;
var map__35297__$1 = ((cljs.core.seq_QMARK_.call(null,map__35297))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var container_el = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35297,map__35297__$1,container_el){
return (function (p__35298){
var vec__35299 = p__35298;
var k = cljs.core.nth.call(null,vec__35299,(0),null);
var v = cljs.core.nth.call(null,vec__35299,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35297,map__35297__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__35300,dom_str){
var map__35302 = p__35300;
var map__35302__$1 = ((cljs.core.seq_QMARK_.call(null,map__35302))?cljs.core.apply.call(null,cljs.core.hash_map,map__35302):map__35302);
var c = map__35302__$1;
var content_area_el = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__35303){
var map__35305 = p__35303;
var map__35305__$1 = ((cljs.core.seq_QMARK_.call(null,map__35305))?cljs.core.apply.call(null,cljs.core.hash_map,map__35305):map__35305);
var content_area_el = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_35347){
var state_val_35348 = (state_35347[(1)]);
if((state_val_35348 === (2))){
var inst_35332 = (state_35347[(7)]);
var inst_35341 = (state_35347[(2)]);
var inst_35342 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35343 = ["auto"];
var inst_35344 = cljs.core.PersistentHashMap.fromArrays(inst_35342,inst_35343);
var inst_35345 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35332,inst_35344);
var state_35347__$1 = (function (){var statearr_35349 = state_35347;
(statearr_35349[(8)] = inst_35341);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35347__$1,inst_35345);
} else {
if((state_val_35348 === (1))){
var inst_35332 = (state_35347[(7)]);
var inst_35332__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35333 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35334 = ["10px","10px","100%","68px","1.0"];
var inst_35335 = cljs.core.PersistentHashMap.fromArrays(inst_35333,inst_35334);
var inst_35336 = cljs.core.merge.call(null,inst_35335,style);
var inst_35337 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35332__$1,inst_35336);
var inst_35338 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35332__$1,msg);
var inst_35339 = cljs.core.async.timeout.call(null,(300));
var state_35347__$1 = (function (){var statearr_35350 = state_35347;
(statearr_35350[(9)] = inst_35337);

(statearr_35350[(7)] = inst_35332__$1);

(statearr_35350[(10)] = inst_35338);

return statearr_35350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35347__$1,(2),inst_35339);
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
var statearr_35354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35354[(0)] = state_machine__30985__auto__);

(statearr_35354[(1)] = (1));

return statearr_35354;
});
var state_machine__30985__auto____1 = (function (state_35347){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35355){if((e35355 instanceof Object)){
var ex__30988__auto__ = e35355;
var statearr_35356_35358 = state_35347;
(statearr_35356_35358[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35359 = state_35347;
state_35347 = G__35359;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35347){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_35357 = f__31041__auto__.call(null);
(statearr_35357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_35357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4404__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__35361 = temp__4404__auto__;
var f = cljs.core.nth.call(null,vec__35361,(0),null);
var ln = cljs.core.nth.call(null,vec__35361,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__35364 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__35364,(0),null);
var file_line = cljs.core.nth.call(null,vec__35364,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35364,file_name,file_line){
return (function (p1__35362_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35362_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35364,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__35366 = figwheel.client.heads_up.ensure_container.call(null);
var map__35366__$1 = ((cljs.core.seq_QMARK_.call(null,map__35366))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var content_area_el = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_35413){
var state_val_35414 = (state_35413[(1)]);
if((state_val_35414 === (3))){
var inst_35396 = (state_35413[(7)]);
var inst_35410 = (state_35413[(2)]);
var inst_35411 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35396,"");
var state_35413__$1 = (function (){var statearr_35415 = state_35413;
(statearr_35415[(8)] = inst_35410);

return statearr_35415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35413__$1,inst_35411);
} else {
if((state_val_35414 === (2))){
var inst_35396 = (state_35413[(7)]);
var inst_35403 = (state_35413[(2)]);
var inst_35404 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35405 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35406 = cljs.core.PersistentHashMap.fromArrays(inst_35404,inst_35405);
var inst_35407 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35396,inst_35406);
var inst_35408 = cljs.core.async.timeout.call(null,(200));
var state_35413__$1 = (function (){var statearr_35416 = state_35413;
(statearr_35416[(9)] = inst_35403);

(statearr_35416[(10)] = inst_35407);

return statearr_35416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(3),inst_35408);
} else {
if((state_val_35414 === (1))){
var inst_35396 = (state_35413[(7)]);
var inst_35396__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35397 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35398 = ["0.0"];
var inst_35399 = cljs.core.PersistentHashMap.fromArrays(inst_35397,inst_35398);
var inst_35400 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35396__$1,inst_35399);
var inst_35401 = cljs.core.async.timeout.call(null,(300));
var state_35413__$1 = (function (){var statearr_35417 = state_35413;
(statearr_35417[(7)] = inst_35396__$1);

(statearr_35417[(11)] = inst_35400);

return statearr_35417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35413__$1,(2),inst_35401);
} else {
return null;
}
}
}
});})(c__31040__auto__))
;
return ((function (switch__30984__auto__,c__31040__auto__){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_35421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35421[(0)] = state_machine__30985__auto__);

(statearr_35421[(1)] = (1));

return statearr_35421;
});
var state_machine__30985__auto____1 = (function (state_35413){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35422){if((e35422 instanceof Object)){
var ex__30988__auto__ = e35422;
var statearr_35423_35425 = state_35413;
(statearr_35423_35425[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35426 = state_35413;
state_35413 = G__35426;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35413){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_35424 = f__31041__auto__.call(null);
(statearr_35424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_35424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_35458){
var state_val_35459 = (state_35458[(1)]);
if((state_val_35459 === (4))){
var inst_35456 = (state_35458[(2)]);
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35458__$1,inst_35456);
} else {
if((state_val_35459 === (3))){
var inst_35453 = (state_35458[(2)]);
var inst_35454 = figwheel.client.heads_up.clear.call(null);
var state_35458__$1 = (function (){var statearr_35460 = state_35458;
(statearr_35460[(7)] = inst_35453);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35458__$1,(4),inst_35454);
} else {
if((state_val_35459 === (2))){
var inst_35450 = (state_35458[(2)]);
var inst_35451 = cljs.core.async.timeout.call(null,(400));
var state_35458__$1 = (function (){var statearr_35461 = state_35458;
(statearr_35461[(8)] = inst_35450);

return statearr_35461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35458__$1,(3),inst_35451);
} else {
if((state_val_35459 === (1))){
var inst_35448 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35458__$1,(2),inst_35448);
} else {
return null;
}
}
}
}
});})(c__31040__auto__))
;
return ((function (switch__30984__auto__,c__31040__auto__){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_35465 = [null,null,null,null,null,null,null,null,null];
(statearr_35465[(0)] = state_machine__30985__auto__);

(statearr_35465[(1)] = (1));

return statearr_35465;
});
var state_machine__30985__auto____1 = (function (state_35458){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_35458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e35466){if((e35466 instanceof Object)){
var ex__30988__auto__ = e35466;
var statearr_35467_35469 = state_35458;
(statearr_35467_35469[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35470 = state_35458;
state_35458 = G__35470;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_35458){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_35458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_35468 = f__31041__auto__.call(null);
(statearr_35468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map