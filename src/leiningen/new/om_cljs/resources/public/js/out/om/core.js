// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj28403 = {};
return obj28403;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.display_name[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.display_name["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj28405 = {};
return obj28405;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.init_state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.init_state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj28407 = {};
return obj28407;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.should_update[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.should_update["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj28409 = {};
return obj28409;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.will_mount[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.will_mount["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj28411 = {};
return obj28411;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.did_mount[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.did_mount["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj28413 = {};
return obj28413;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.will_unmount[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.will_unmount["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj28415 = {};
return obj28415;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.will_update[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.will_update["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj28417 = {};
return obj28417;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.did_update[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.did_update["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj28419 = {};
return obj28419;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.will_receive_props[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.will_receive_props["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj28421 = {};
return obj28421;
})();

om.core.render = (function render(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.render[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.render["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj28423 = {};
return obj28423;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.render_props[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.render_props["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj28425 = {};
return obj28425;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core.render_state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core.render_state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj28427 = {};
return obj28427;
})();


om.core.IOmSwap = (function (){var obj28429 = {};
return obj28429;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj28431 = {};
return obj28431;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj28433 = {};
return obj28433;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_render_state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_render_state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_render_state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_render_state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj28435 = {};
return obj28435;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj28437 = {};
return obj28437;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_queue[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_queue["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj28439 = {};
return obj28439;
})();

om.core._value = (function _value(x){
if((function (){var and__14429__auto__ = x;
if(and__14429__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__14429__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__15085__auto__ = (((x == null))?null:x);
return (function (){var or__14441__auto__ = (om.core._value[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._value["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj28441 = {};
return obj28441;
})();

om.core._path = (function _path(cursor){
if((function (){var and__14429__auto__ = cursor;
if(and__14429__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__14429__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__15085__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__14441__auto__ = (om.core._path[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._path["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__14429__auto__ = cursor;
if(and__14429__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__14429__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__15085__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__14441__auto__ = (om.core._state[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._state["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj28443 = {};
return obj28443;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__14429__auto__ = value;
if(and__14429__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__14429__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__15085__auto__ = (((value == null))?null:value);
return (function (){var or__14441__auto__ = (om.core._to_cursor[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._to_cursor["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__14429__auto__ = value;
if(and__14429__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__14429__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__15085__auto__ = (((value == null))?null:value);
return (function (){var or__14441__auto__ = (om.core._to_cursor[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._to_cursor["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj28445 = {};
return obj28445;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__14429__auto__ = cursor;
if(and__14429__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__14429__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__15085__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__14441__auto__ = (om.core._derive[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._derive["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj28447 = {};
return obj28447;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__14429__auto__ = cursor;
if(and__14429__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__14429__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__15085__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__14441__auto__ = (om.core._transact_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj28449 = {};
return obj28449;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__14429__auto__ = x;
if(and__14429__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__14429__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__15085__auto__ = (((x == null))?null:x);
return (function (){var or__14441__auto__ = (om.core._listen_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__14429__auto__ = x;
if(and__14429__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__15085__auto__ = (((x == null))?null:x);
return (function (){var or__14441__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__14429__auto__ = x;
if(and__14429__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__14429__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__15085__auto__ = (((x == null))?null:x);
return (function (){var or__14441__auto__ = (om.core._notify_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj28451 = {};
return obj28451;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_property[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_property["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj28453 = {};
return obj28453;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__14429__auto__ = cursor;
if(and__14429__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__14429__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__15085__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__14441__auto__ = (om.core._root_key[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._root_key["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj28455 = {};
return obj28455;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._adapt[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._adapt["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj28457 = {};
return obj28457;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__14429__auto__ = this$;
if(and__14429__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__14429__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__15085__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14441__auto__ = (om.core._get_deps[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (om.core._get_deps["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__28459 = state;
if(G__28459){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28459.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__28459.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__28459);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__28459);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__28461 = x;
if(G__28461){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28461.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__28461.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__28461);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__28461);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__28463 = (x.props["__om_cursor"]);
var G__28463__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__28463,korks__$1):G__28463);
return G__28463__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4406__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4406__auto__)){
var pending_state = temp__4406__auto__;
var G__28465 = state;
(G__28465["__om_prev_state"] = (state["__om_state"]));

(G__28465["__om_state"] = pending_state);

(G__28465["__om_pending_state"] = null);

return G__28465;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__14441__auto__ = props;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return owner.props;
}
})();
var temp__4406__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4406__auto__)){
var props_state = temp__4406__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__14441__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__28467 = c;
if(G__28467){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28467.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__28467.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__28467);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__28467);
}
})()){
var state_28488 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__14441__auto__ = (state_28488["__om_prev_state"]);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return (state_28488["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__28468 = c;
if(G__28468){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28468.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__28468.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__28468);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__28468);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4406__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4406__auto__){
var refs = temp__4406__auto__;
var seq__28469 = cljs.core.seq.call(null,refs);
var chunk__28470 = null;
var count__28471 = (0);
var i__28472 = (0);
while(true){
if((i__28472 < count__28471)){
var ref = cljs.core._nth.call(null,chunk__28470,i__28472);
om.core.unobserve.call(null,this$,ref);

var G__28489 = seq__28469;
var G__28490 = chunk__28470;
var G__28491 = count__28471;
var G__28492 = (i__28472 + (1));
seq__28469 = G__28489;
chunk__28470 = G__28490;
count__28471 = G__28491;
i__28472 = G__28492;
continue;
} else {
var temp__4406__auto____$1 = cljs.core.seq.call(null,seq__28469);
if(temp__4406__auto____$1){
var seq__28469__$1 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28469__$1)){
var c__15228__auto__ = cljs.core.chunk_first.call(null,seq__28469__$1);
var G__28493 = cljs.core.chunk_rest.call(null,seq__28469__$1);
var G__28494 = c__15228__auto__;
var G__28495 = cljs.core.count.call(null,c__15228__auto__);
var G__28496 = (0);
seq__28469 = G__28493;
chunk__28470 = G__28494;
count__28471 = G__28495;
i__28472 = G__28496;
continue;
} else {
var ref = cljs.core.first.call(null,seq__28469__$1);
om.core.unobserve.call(null,this$,ref);

var G__28497 = cljs.core.next.call(null,seq__28469__$1);
var G__28498 = null;
var G__28499 = (0);
var G__28500 = (0);
seq__28469 = G__28497;
chunk__28470 = G__28498;
count__28471 = G__28499;
i__28472 = G__28500;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__28473 = c;
if(G__28473){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28473.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__28473.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__28473);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__28473);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__28474 = c;
if(G__28474){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28474.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__28474.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__28474);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__28474);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__14429__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__14429__auto__){
return cljs.core.some.call(null,((function (and__14429__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__28466_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__28466_SHARP_);
});})(and__14429__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__14429__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_28475 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_28476 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_28477 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_28478 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_28479 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__28480 = c;
if(G__28480){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28480.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__28480.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__28480);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__28480);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__28481 = c;
if(G__28481){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28481.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__28481.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__28481);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__28481);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__28482 = c;
if(G__28482){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28482.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__28482.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__28482);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__28482);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_28479;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_28478;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_28477;

om.core._STAR_state_STAR_ = _STAR_state_STAR_28476;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_28475;
}}),(function (next_props,next_state){
var this$ = this;
var c_28501 = om.core.children.call(null,this$);
if((function (){var G__28483 = c_28501;
if(G__28483){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28483.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__28483.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__28483);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__28483);
}
})()){
var state_28502 = this$.state;
om.core.will_update.call(null,c_28501,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__14441__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__28484 = c;
if(G__28484){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28484.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__28484.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__28484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__28484);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__14441__auto__ = id;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__28485 = c;
if(G__28485){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28485.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__28485.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__28485);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__28485);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__28486 = c;
if(G__28486){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28486.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__28486.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__28486);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__28486);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_28503 = om.core.children.call(null,this$);
if((function (){var G__28487 = c_28503;
if(G__28487){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28487.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__28487.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__28487);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__28487);
}
})()){
om.core.will_mount.call(null,c_28503);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x28505 = obj;
x28505.om$core$IGetState$ = true;

x28505.om$core$IGetState$_get_state$arity$1 = ((function (x28505){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__14441__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return (state["__om_state"]);
}
});})(x28505))
;

x28505.om$core$IGetState$_get_state$arity$2 = ((function (x28505){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x28505))
;

x28505.om$core$IGetRenderState$ = true;

x28505.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x28505){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x28505))
;

x28505.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x28505){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x28505))
;

x28505.om$core$ISetState$ = true;

x28505.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x28505){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__14429__auto__ = !((app_state == null));
if(and__14429__auto__){
return render;
} else {
return and__14429__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x28505))
;

x28505.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x28505){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__14429__auto__ = !((app_state == null));
if(and__14429__auto__){
return render;
} else {
return and__14429__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x28505))
;

return x28505;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__14441__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__14441__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__28506 = c;
if(G__28506){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28506.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__28506.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__28506);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__28506);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_28515 = om.core.children.call(null,this$);
if((function (){var G__28507 = c_28515;
if(G__28507){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28507.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__28507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__28507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__28507);
}
})()){
om.core.will_mount.call(null,c_28515);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__28508 = c;
if(G__28508){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28508.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__28508.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__28508);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__28508);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4406__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4406__auto__){
var refs = temp__4406__auto__;
var seq__28509 = cljs.core.seq.call(null,refs);
var chunk__28510 = null;
var count__28511 = (0);
var i__28512 = (0);
while(true){
if((i__28512 < count__28511)){
var ref = cljs.core._nth.call(null,chunk__28510,i__28512);
om.core.unobserve.call(null,this$,ref);

var G__28516 = seq__28509;
var G__28517 = chunk__28510;
var G__28518 = count__28511;
var G__28519 = (i__28512 + (1));
seq__28509 = G__28516;
chunk__28510 = G__28517;
count__28511 = G__28518;
i__28512 = G__28519;
continue;
} else {
var temp__4406__auto____$1 = cljs.core.seq.call(null,seq__28509);
if(temp__4406__auto____$1){
var seq__28509__$1 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28509__$1)){
var c__15228__auto__ = cljs.core.chunk_first.call(null,seq__28509__$1);
var G__28520 = cljs.core.chunk_rest.call(null,seq__28509__$1);
var G__28521 = c__15228__auto__;
var G__28522 = cljs.core.count.call(null,c__15228__auto__);
var G__28523 = (0);
seq__28509 = G__28520;
chunk__28510 = G__28521;
count__28511 = G__28522;
i__28512 = G__28523;
continue;
} else {
var ref = cljs.core.first.call(null,seq__28509__$1);
om.core.unobserve.call(null,this$,ref);

var G__28524 = cljs.core.next.call(null,seq__28509__$1);
var G__28525 = null;
var G__28526 = (0);
var G__28527 = (0);
seq__28509 = G__28524;
chunk__28510 = G__28525;
count__28511 = G__28526;
i__28512 = G__28527;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_28528 = this$.props;
var c_28529 = om.core.children.call(null,this$);
if((function (){var G__28513 = c_28529;
if(G__28513){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28513.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__28513.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__28513);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__28513);
}
})()){
var state_28530 = this$.state;
om.core.will_update.call(null,c_28529,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__28514 = c;
if(G__28514){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28514.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__28514.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__28514);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__28514);
}
})()){
var state_28531 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__14441__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x28533 = cljs.core.clj__GT_js.call(null,methods$);
x28533.om$core$IGetState$ = true;

x28533.om$core$IGetState$_get_state$arity$1 = ((function (x28533){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__14441__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x28533))
;

x28533.om$core$IGetState$_get_state$arity$2 = ((function (x28533){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x28533))
;

x28533.om$core$IGetRenderState$ = true;

x28533.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x28533){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x28533))
;

x28533.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x28533){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x28533))
;

x28533.om$core$ISetState$ = true;

x28533.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x28533){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__14429__auto__ = !((gstate == null));
if(and__14429__auto__){
return render;
} else {
return and__14429__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x28533))
;

x28533.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x28533){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x28533))
;

return x28533;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__28535 = x;
if(G__28535){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28535.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__28535.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__28535);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__28535);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__28537){
var vec__28538 = p__28537;
var k = cljs.core.nth.call(null,vec__28538,(0),null);
var v = cljs.core.nth.call(null,vec__28538,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__28539 = null;
var G__28539__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__28539__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__28539 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28539__2.call(this,self__,k);
case 3:
return G__28539__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28539.cljs$core$IFn$_invoke$arity$2 = G__28539__2;
G__28539.cljs$core$IFn$_invoke$arity$3 = G__28539__3;
return G__28539;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args28536){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28536)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__28541 = null;
var G__28541__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__28541__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__28541 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28541__2.call(this,self__,k);
case 3:
return G__28541__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28541.cljs$core$IFn$_invoke$arity$2 = G__28541__2;
G__28541.cljs$core$IFn$_invoke$arity$3 = G__28541__3;
return G__28541;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args28540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28540)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x28543 = cljs.core.clone.call(null,val);
x28543.cljs$core$IEquiv$ = true;

x28543.cljs$core$IEquiv$_equiv$arity$2 = ((function (x28543){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x28543))
;

x28543.om$core$ITransact$ = true;

x28543.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x28543){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x28543))
;

x28543.om$core$ICursor$ = true;

x28543.om$core$ICursor$_path$arity$1 = ((function (x28543){
return (function (_){
var ___$1 = this;
return path;
});})(x28543))
;

x28543.om$core$ICursor$_state$arity$1 = ((function (x28543){
return (function (_){
var ___$1 = this;
return state;
});})(x28543))
;

x28543.cljs$core$IDeref$ = true;

x28543.cljs$core$IDeref$_deref$arity$1 = ((function (x28543){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x28543))
;

return x28543;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__28546 = val;
if(G__28546){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28546.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__28546.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__28546);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__28546);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__28547 = val;
if(G__28547){
var bit__15122__auto__ = (G__28547.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__15122__auto__) || (G__28547.cljs$core$ICloneable$)){
return true;
} else {
if((!G__28547.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__28547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__28547);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__28549 = atom;
if(G__28549){
var bit__15122__auto__ = (G__28549.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__15122__auto__) || (G__28549.cljs$core$IDeref$)){
return true;
} else {
if((!G__28549.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28549);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__28549);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x28551 = cljs.core.clone.call(null,x);
x28551.om$core$ITransact$ = true;

x28551.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x28551){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x28551))
;

x28551.om$core$ICursorDerive$ = true;

x28551.om$core$ICursorDerive$_derive$arity$4 = ((function (x28551){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x28551))
;

x28551.om$core$IAdapt$ = true;

x28551.om$core$IAdapt$_adapt$arity$2 = ((function (x28551){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x28551))
;

x28551.cljs$core$ICloneable$ = true;

x28551.cljs$core$ICloneable$_clone$arity$1 = ((function (x28551){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x28551))
;

return x28551;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__28558 = cursor;
if(G__28558){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28558.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__28558.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__28558);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__28558);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x28559 = cljs.core.clone.call(null,cursor);
x28559.om$core$ITransact$ = true;

x28559.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x28559,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x28559,path,storage))
;

x28559.om$core$IOmRef$ = true;

x28559.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x28559,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x28559,path,storage))
;

x28559.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x28559,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x28559,path,storage))
;

x28559.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x28559,path,storage){
return (function (_){
var ___$1 = this;
var seq__28560 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__28561 = null;
var count__28562 = (0);
var i__28563 = (0);
while(true){
if((i__28563 < count__28562)){
var c = cljs.core._nth.call(null,chunk__28561,i__28563);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__28564 = seq__28560;
var G__28565 = chunk__28561;
var G__28566 = count__28562;
var G__28567 = (i__28563 + (1));
seq__28560 = G__28564;
chunk__28561 = G__28565;
count__28562 = G__28566;
i__28563 = G__28567;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__28560);
if(temp__4406__auto__){
var seq__28560__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28560__$1)){
var c__15228__auto__ = cljs.core.chunk_first.call(null,seq__28560__$1);
var G__28568 = cljs.core.chunk_rest.call(null,seq__28560__$1);
var G__28569 = c__15228__auto__;
var G__28570 = cljs.core.count.call(null,c__15228__auto__);
var G__28571 = (0);
seq__28560 = G__28568;
chunk__28561 = G__28569;
count__28562 = G__28570;
i__28563 = G__28571;
continue;
} else {
var c = cljs.core.first.call(null,seq__28560__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__28572 = cljs.core.next.call(null,seq__28560__$1);
var G__28573 = null;
var G__28574 = (0);
var G__28575 = (0);
seq__28560 = G__28572;
chunk__28561 = G__28573;
count__28562 = G__28574;
i__28563 = G__28575;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28559,path,storage))
;

x28559.om$core$IOmRef$_get_deps$arity$1 = ((function (x28559,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x28559,path,storage))
;

x28559.om$core$ICursorDerive$ = true;

x28559.om$core$ICursorDerive$_derive$arity$4 = ((function (x28559,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x28559,path,storage))
;

return x28559;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__14441__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__14441__auto__ = state.om$render$T;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__28580_28584 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__28581_28585 = null;
var count__28582_28586 = (0);
var i__28583_28587 = (0);
while(true){
if((i__28583_28587 < count__28582_28586)){
var f_28588 = cljs.core._nth.call(null,chunk__28581_28585,i__28583_28587);
f_28588.call(null);

var G__28589 = seq__28580_28584;
var G__28590 = chunk__28581_28585;
var G__28591 = count__28582_28586;
var G__28592 = (i__28583_28587 + (1));
seq__28580_28584 = G__28589;
chunk__28581_28585 = G__28590;
count__28582_28586 = G__28591;
i__28583_28587 = G__28592;
continue;
} else {
var temp__4406__auto___28593 = cljs.core.seq.call(null,seq__28580_28584);
if(temp__4406__auto___28593){
var seq__28580_28594__$1 = temp__4406__auto___28593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28580_28594__$1)){
var c__15228__auto___28595 = cljs.core.chunk_first.call(null,seq__28580_28594__$1);
var G__28596 = cljs.core.chunk_rest.call(null,seq__28580_28594__$1);
var G__28597 = c__15228__auto___28595;
var G__28598 = cljs.core.count.call(null,c__15228__auto___28595);
var G__28599 = (0);
seq__28580_28584 = G__28596;
chunk__28581_28585 = G__28597;
count__28582_28586 = G__28598;
i__28583_28587 = G__28599;
continue;
} else {
var f_28600 = cljs.core.first.call(null,seq__28580_28594__$1);
f_28600.call(null);

var G__28601 = cljs.core.next.call(null,seq__28580_28594__$1);
var G__28602 = null;
var G__28603 = (0);
var G__28604 = (0);
seq__28580_28584 = G__28601;
chunk__28581_28585 = G__28602;
count__28582_28586 = G__28603;
i__28583_28587 = G__28604;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__14441__auto__ = (function (){var G__28611 = x;
if(G__28611){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28611.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__28611.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__28611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__28611);
}
})();
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (function (){var G__28613 = x;
if(G__28613){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto____$1 = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto____$1)){
return or__14441__auto____$1;
} else {
return G__28613.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__28613.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__28613);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__28613);
}
})();
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
var G__28614 = x;
if(G__28614){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto____$2 = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto____$2)){
return or__14441__auto____$2;
} else {
return G__28614.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__28614.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__28614);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__28614);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__14441__auto__ = descriptor;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__14441__auto____$1)){
return or__14441__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__28616 = m;
var map__28616__$1 = ((cljs.core.seq_QMARK_.call(null,map__28616))?cljs.core.apply.call(null,cljs.core.hash_map,map__28616):map__28616);
var opts = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4404__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4404__auto__)){
var i = temp__4404__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__14441__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__28616,map__28616__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__28616,map__28616__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__28616,map__28616__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__28616,map__28616__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__14441__auto__ = rkey;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__28625 = state;
if(G__28625){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28625.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__28625.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__28625);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__28625);
}
})()){
} else {
var properties_28633 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_28634 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_28635 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x28626_28636 = state;
x28626_28636.om$core$IRenderQueue$ = true;

x28626_28636.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_28635);
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_28635),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_28635,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_28635,cljs.core.empty);
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$INotify$ = true;

x28626_28636.om$core$INotify$_listen_BANG_$arity$3 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_28634,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_28634,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$INotify$_notify_BANG_$arity$3 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__28627_28637 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_28634));
var chunk__28628_28638 = null;
var count__28629_28639 = (0);
var i__28630_28640 = (0);
while(true){
if((i__28630_28640 < count__28629_28639)){
var vec__28631_28641 = cljs.core._nth.call(null,chunk__28628_28638,i__28630_28640);
var __28642 = cljs.core.nth.call(null,vec__28631_28641,(0),null);
var f_28643 = cljs.core.nth.call(null,vec__28631_28641,(1),null);
f_28643.call(null,tx_data,root_cursor);

var G__28644 = seq__28627_28637;
var G__28645 = chunk__28628_28638;
var G__28646 = count__28629_28639;
var G__28647 = (i__28630_28640 + (1));
seq__28627_28637 = G__28644;
chunk__28628_28638 = G__28645;
count__28629_28639 = G__28646;
i__28630_28640 = G__28647;
continue;
} else {
var temp__4406__auto___28648 = cljs.core.seq.call(null,seq__28627_28637);
if(temp__4406__auto___28648){
var seq__28627_28649__$1 = temp__4406__auto___28648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28627_28649__$1)){
var c__15228__auto___28650 = cljs.core.chunk_first.call(null,seq__28627_28649__$1);
var G__28651 = cljs.core.chunk_rest.call(null,seq__28627_28649__$1);
var G__28652 = c__15228__auto___28650;
var G__28653 = cljs.core.count.call(null,c__15228__auto___28650);
var G__28654 = (0);
seq__28627_28637 = G__28651;
chunk__28628_28638 = G__28652;
count__28629_28639 = G__28653;
i__28630_28640 = G__28654;
continue;
} else {
var vec__28632_28655 = cljs.core.first.call(null,seq__28627_28649__$1);
var __28656 = cljs.core.nth.call(null,vec__28632_28655,(0),null);
var f_28657 = cljs.core.nth.call(null,vec__28632_28655,(1),null);
f_28657.call(null,tx_data,root_cursor);

var G__28658 = cljs.core.next.call(null,seq__28627_28649__$1);
var G__28659 = null;
var G__28660 = (0);
var G__28661 = (0);
seq__28627_28637 = G__28658;
chunk__28628_28638 = G__28659;
count__28629_28639 = G__28660;
i__28630_28640 = G__28661;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$IRootProperties$ = true;

x28626_28636.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_28633,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_28633,cljs.core.dissoc,id,k);
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_28633,cljs.core.dissoc,id);
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

x28626_28636.om$core$IRootProperties$_get_property$arity$3 = ((function (x28626_28636,properties_28633,listeners_28634,render_queue_28635){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_28633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x28626_28636,properties_28633,listeners_28634,render_queue_28635))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x28663 = cljs.core.clone.call(null,cursor);
x28663.om$core$IRootKey$ = true;

x28663.om$core$IRootKey$_root_key$arity$1 = ((function (x28663){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x28663))
;

x28663.om$core$IAdapt$ = true;

x28663.om$core$IAdapt$_adapt$arity$2 = ((function (x28663){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x28663))
;

x28663.cljs$core$ICloneable$ = true;

x28663.cljs$core$ICloneable$_clone$arity$1 = ((function (x28663){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x28663))
;

return x28663;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__28664){
var map__28727 = p__28664;
var map__28727__$1 = ((cljs.core.seq_QMARK_.call(null,map__28727))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var options = map__28727__$1;
var raf = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__28789 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__28789,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__28789,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__28728 = value;
if(G__28728){
var bit__15122__auto__ = (G__28728.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__15122__auto__) || (G__28728.cljs$core$IAtom$)){
return true;
} else {
if((!G__28728.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__28728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__28728);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__14441__auto__ = adapt;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_28790 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_28759 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_28760 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_28761 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_28762 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_28762;

om.core._STAR_state_STAR_ = _STAR_state_STAR_28761;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_28760;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_28759;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_28790);
} else {
}
}

var queue_28791 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_28791)){
} else {
var seq__28763_28792 = cljs.core.seq.call(null,queue_28791);
var chunk__28764_28793 = null;
var count__28765_28794 = (0);
var i__28766_28795 = (0);
while(true){
if((i__28766_28795 < count__28765_28794)){
var c_28796 = cljs.core._nth.call(null,chunk__28764_28793,i__28766_28795);
if(cljs.core.truth_(c_28796.isMounted())){
var temp__4406__auto___28797 = (c_28796.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4406__auto___28797)){
var next_props_28798 = temp__4406__auto___28797;
(c_28796.props["__om_cursor"] = next_props_28798);

(c_28796.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__14441__auto__ = !((function (){var G__28768 = om.core.children.call(null,c_28796);
if(G__28768){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28768.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__28768.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28768);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28768);
}
})());
if(or__14441__auto__){
return or__14441__auto__;
} else {
return c_28796.shouldComponentUpdate(c_28796.props,c_28796.state);
}
})())){
c_28796.forceUpdate();
} else {
}
} else {
}

var G__28799 = seq__28763_28792;
var G__28800 = chunk__28764_28793;
var G__28801 = count__28765_28794;
var G__28802 = (i__28766_28795 + (1));
seq__28763_28792 = G__28799;
chunk__28764_28793 = G__28800;
count__28765_28794 = G__28801;
i__28766_28795 = G__28802;
continue;
} else {
var temp__4406__auto___28803 = cljs.core.seq.call(null,seq__28763_28792);
if(temp__4406__auto___28803){
var seq__28763_28804__$1 = temp__4406__auto___28803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28763_28804__$1)){
var c__15228__auto___28805 = cljs.core.chunk_first.call(null,seq__28763_28804__$1);
var G__28806 = cljs.core.chunk_rest.call(null,seq__28763_28804__$1);
var G__28807 = c__15228__auto___28805;
var G__28808 = cljs.core.count.call(null,c__15228__auto___28805);
var G__28809 = (0);
seq__28763_28792 = G__28806;
chunk__28764_28793 = G__28807;
count__28765_28794 = G__28808;
i__28766_28795 = G__28809;
continue;
} else {
var c_28810 = cljs.core.first.call(null,seq__28763_28804__$1);
if(cljs.core.truth_(c_28810.isMounted())){
var temp__4406__auto___28811__$1 = (c_28810.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4406__auto___28811__$1)){
var next_props_28812 = temp__4406__auto___28811__$1;
(c_28810.props["__om_cursor"] = next_props_28812);

(c_28810.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__14441__auto__ = !((function (){var G__28770 = om.core.children.call(null,c_28810);
if(G__28770){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28770.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__28770.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28770);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__28770);
}
})());
if(or__14441__auto__){
return or__14441__auto__;
} else {
return c_28810.shouldComponentUpdate(c_28810.props,c_28810.state);
}
})())){
c_28810.forceUpdate();
} else {
}
} else {
}

var G__28813 = cljs.core.next.call(null,seq__28763_28804__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__28763_28792 = G__28813;
chunk__28764_28793 = G__28814;
count__28765_28794 = G__28815;
i__28766_28795 = G__28816;
continue;
}
} else {
}
}
break;
}
}

var _refs_28817 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_28817)){
} else {
var seq__28771_28818 = cljs.core.seq.call(null,_refs_28817);
var chunk__28772_28819 = null;
var count__28773_28820 = (0);
var i__28774_28821 = (0);
while(true){
if((i__28774_28821 < count__28773_28820)){
var vec__28775_28822 = cljs.core._nth.call(null,chunk__28772_28819,i__28774_28821);
var path_28823__$1 = cljs.core.nth.call(null,vec__28775_28822,(0),null);
var cs_28824 = cljs.core.nth.call(null,vec__28775_28822,(1),null);
var cs_28825__$1 = cljs.core.deref.call(null,cs_28824);
var seq__28776_28826 = cljs.core.seq.call(null,cs_28825__$1);
var chunk__28777_28827 = null;
var count__28778_28828 = (0);
var i__28779_28829 = (0);
while(true){
if((i__28779_28829 < count__28778_28828)){
var vec__28780_28830 = cljs.core._nth.call(null,chunk__28777_28827,i__28779_28829);
var id_28831 = cljs.core.nth.call(null,vec__28780_28830,(0),null);
var c_28832 = cljs.core.nth.call(null,vec__28780_28830,(1),null);
if(cljs.core.truth_(c_28832.shouldComponentUpdate(c_28832.props,c_28832.state))){
c_28832.forceUpdate();
} else {
}

var G__28833 = seq__28776_28826;
var G__28834 = chunk__28777_28827;
var G__28835 = count__28778_28828;
var G__28836 = (i__28779_28829 + (1));
seq__28776_28826 = G__28833;
chunk__28777_28827 = G__28834;
count__28778_28828 = G__28835;
i__28779_28829 = G__28836;
continue;
} else {
var temp__4406__auto___28837 = cljs.core.seq.call(null,seq__28776_28826);
if(temp__4406__auto___28837){
var seq__28776_28838__$1 = temp__4406__auto___28837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28776_28838__$1)){
var c__15228__auto___28839 = cljs.core.chunk_first.call(null,seq__28776_28838__$1);
var G__28840 = cljs.core.chunk_rest.call(null,seq__28776_28838__$1);
var G__28841 = c__15228__auto___28839;
var G__28842 = cljs.core.count.call(null,c__15228__auto___28839);
var G__28843 = (0);
seq__28776_28826 = G__28840;
chunk__28777_28827 = G__28841;
count__28778_28828 = G__28842;
i__28779_28829 = G__28843;
continue;
} else {
var vec__28781_28844 = cljs.core.first.call(null,seq__28776_28838__$1);
var id_28845 = cljs.core.nth.call(null,vec__28781_28844,(0),null);
var c_28846 = cljs.core.nth.call(null,vec__28781_28844,(1),null);
if(cljs.core.truth_(c_28846.shouldComponentUpdate(c_28846.props,c_28846.state))){
c_28846.forceUpdate();
} else {
}

var G__28847 = cljs.core.next.call(null,seq__28776_28838__$1);
var G__28848 = null;
var G__28849 = (0);
var G__28850 = (0);
seq__28776_28826 = G__28847;
chunk__28777_28827 = G__28848;
count__28778_28828 = G__28849;
i__28779_28829 = G__28850;
continue;
}
} else {
}
}
break;
}

var G__28851 = seq__28771_28818;
var G__28852 = chunk__28772_28819;
var G__28853 = count__28773_28820;
var G__28854 = (i__28774_28821 + (1));
seq__28771_28818 = G__28851;
chunk__28772_28819 = G__28852;
count__28773_28820 = G__28853;
i__28774_28821 = G__28854;
continue;
} else {
var temp__4406__auto___28855 = cljs.core.seq.call(null,seq__28771_28818);
if(temp__4406__auto___28855){
var seq__28771_28856__$1 = temp__4406__auto___28855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28771_28856__$1)){
var c__15228__auto___28857 = cljs.core.chunk_first.call(null,seq__28771_28856__$1);
var G__28858 = cljs.core.chunk_rest.call(null,seq__28771_28856__$1);
var G__28859 = c__15228__auto___28857;
var G__28860 = cljs.core.count.call(null,c__15228__auto___28857);
var G__28861 = (0);
seq__28771_28818 = G__28858;
chunk__28772_28819 = G__28859;
count__28773_28820 = G__28860;
i__28774_28821 = G__28861;
continue;
} else {
var vec__28782_28862 = cljs.core.first.call(null,seq__28771_28856__$1);
var path_28863__$1 = cljs.core.nth.call(null,vec__28782_28862,(0),null);
var cs_28864 = cljs.core.nth.call(null,vec__28782_28862,(1),null);
var cs_28865__$1 = cljs.core.deref.call(null,cs_28864);
var seq__28783_28866 = cljs.core.seq.call(null,cs_28865__$1);
var chunk__28784_28867 = null;
var count__28785_28868 = (0);
var i__28786_28869 = (0);
while(true){
if((i__28786_28869 < count__28785_28868)){
var vec__28787_28870 = cljs.core._nth.call(null,chunk__28784_28867,i__28786_28869);
var id_28871 = cljs.core.nth.call(null,vec__28787_28870,(0),null);
var c_28872 = cljs.core.nth.call(null,vec__28787_28870,(1),null);
if(cljs.core.truth_(c_28872.shouldComponentUpdate(c_28872.props,c_28872.state))){
c_28872.forceUpdate();
} else {
}

var G__28873 = seq__28783_28866;
var G__28874 = chunk__28784_28867;
var G__28875 = count__28785_28868;
var G__28876 = (i__28786_28869 + (1));
seq__28783_28866 = G__28873;
chunk__28784_28867 = G__28874;
count__28785_28868 = G__28875;
i__28786_28869 = G__28876;
continue;
} else {
var temp__4406__auto___28877__$1 = cljs.core.seq.call(null,seq__28783_28866);
if(temp__4406__auto___28877__$1){
var seq__28783_28878__$1 = temp__4406__auto___28877__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28783_28878__$1)){
var c__15228__auto___28879 = cljs.core.chunk_first.call(null,seq__28783_28878__$1);
var G__28880 = cljs.core.chunk_rest.call(null,seq__28783_28878__$1);
var G__28881 = c__15228__auto___28879;
var G__28882 = cljs.core.count.call(null,c__15228__auto___28879);
var G__28883 = (0);
seq__28783_28866 = G__28880;
chunk__28784_28867 = G__28881;
count__28785_28868 = G__28882;
i__28786_28869 = G__28883;
continue;
} else {
var vec__28788_28884 = cljs.core.first.call(null,seq__28783_28878__$1);
var id_28885 = cljs.core.nth.call(null,vec__28788_28884,(0),null);
var c_28886 = cljs.core.nth.call(null,vec__28788_28884,(1),null);
if(cljs.core.truth_(c_28886.shouldComponentUpdate(c_28886.props,c_28886.state))){
c_28886.forceUpdate();
} else {
}

var G__28887 = cljs.core.next.call(null,seq__28783_28878__$1);
var G__28888 = null;
var G__28889 = (0);
var G__28890 = (0);
seq__28783_28866 = G__28887;
chunk__28784_28867 = G__28888;
count__28785_28868 = G__28889;
i__28786_28869 = G__28890;
continue;
}
} else {
}
}
break;
}

var G__28891 = cljs.core.next.call(null,seq__28771_28856__$1);
var G__28892 = null;
var G__28893 = (0);
var G__28894 = (0);
seq__28771_28818 = G__28891;
chunk__28772_28819 = G__28892;
count__28773_28820 = G__28893;
i__28774_28821 = G__28894;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__28727,map__28727__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4406__auto__)){
var f = temp__4406__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__28896 = x;
if(G__28896){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28896.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__28896.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__28896);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__28896);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__28898 = cursor;
if(G__28898){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__28898.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__28898.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__28898);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__28898);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4406__auto__ = owner.refs;
if(cljs.core.truth_(temp__4406__auto__)){
var refs = temp__4406__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map