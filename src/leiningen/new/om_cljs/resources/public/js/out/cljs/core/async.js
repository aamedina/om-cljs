// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t36178 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36178 = (function (f,fn_handler,meta36179){
this.f = f;
this.fn_handler = fn_handler;
this.meta36179 = meta36179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36178.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36180){
var self__ = this;
var _36180__$1 = this;
return self__.meta36179;
});

cljs.core.async.t36178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36180,meta36179__$1){
var self__ = this;
var _36180__$1 = this;
return (new cljs.core.async.t36178(self__.f,self__.fn_handler,meta36179__$1));
});

cljs.core.async.t36178.cljs$lang$type = true;

cljs.core.async.t36178.cljs$lang$ctorStr = "cljs.core.async/t36178";

cljs.core.async.t36178.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t36178");
});

cljs.core.async.__GT_t36178 = (function __GT_t36178(f__$1,fn_handler__$1,meta36179){
return (new cljs.core.async.t36178(f__$1,fn_handler__$1,meta36179));
});

}

return (new cljs.core.async.t36178(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__36182 = buff;
if(G__36182){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__36182.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36182.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36182);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36182);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36183 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36183);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36183,ret){
return (function (){
return fn1.call(null,val_36183);
});})(val_36183,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4404__auto__)){
var ret = temp__4404__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4404__auto__)){
var retb = temp__4404__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__15328__auto___36184 = n;
var x_36185 = (0);
while(true){
if((x_36185 < n__15328__auto___36184)){
(a[x_36185] = (0));

var G__36186 = (x_36185 + (1));
x_36185 = G__36186;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36187 = (i + (1));
i = G__36187;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36191 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36191 = (function (flag,alt_flag,meta36192){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36192 = meta36192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36191.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36193){
var self__ = this;
var _36193__$1 = this;
return self__.meta36192;
});})(flag))
;

cljs.core.async.t36191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36193,meta36192__$1){
var self__ = this;
var _36193__$1 = this;
return (new cljs.core.async.t36191(self__.flag,self__.alt_flag,meta36192__$1));
});})(flag))
;

cljs.core.async.t36191.cljs$lang$type = true;

cljs.core.async.t36191.cljs$lang$ctorStr = "cljs.core.async/t36191";

cljs.core.async.t36191.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t36191");
});})(flag))
;

cljs.core.async.__GT_t36191 = ((function (flag){
return (function __GT_t36191(flag__$1,alt_flag__$1,meta36192){
return (new cljs.core.async.t36191(flag__$1,alt_flag__$1,meta36192));
});})(flag))
;

}

return (new cljs.core.async.t36191(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t36197 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36197 = (function (cb,flag,alt_handler,meta36198){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36198 = meta36198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36197.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36199){
var self__ = this;
var _36199__$1 = this;
return self__.meta36198;
});

cljs.core.async.t36197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36199,meta36198__$1){
var self__ = this;
var _36199__$1 = this;
return (new cljs.core.async.t36197(self__.cb,self__.flag,self__.alt_handler,meta36198__$1));
});

cljs.core.async.t36197.cljs$lang$type = true;

cljs.core.async.t36197.cljs$lang$ctorStr = "cljs.core.async/t36197";

cljs.core.async.t36197.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t36197");
});

cljs.core.async.__GT_t36197 = (function __GT_t36197(cb__$1,flag__$1,alt_handler__$1,meta36198){
return (new cljs.core.async.t36197(cb__$1,flag__$1,alt_handler__$1,meta36198));
});

}

return (new cljs.core.async.t36197(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36200_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36200_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36201_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36201_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14441__auto__ = wport;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36202 = (i + (1));
i = G__36202;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14441__auto__ = ret;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__14429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__14429__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__14429__auto__;
}
})();
if(cljs.core.truth_(temp__4406__auto__)){
var got = temp__4406__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__36203){
var map__36205 = p__36203;
var map__36205__$1 = ((cljs.core.seq_QMARK_.call(null,map__36205))?cljs.core.apply.call(null,cljs.core.hash_map,map__36205):map__36205);
var opts = map__36205__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__36203 = null;
if (arguments.length > 1) {
var G__36206__i = 0, G__36206__a = new Array(arguments.length -  1);
while (G__36206__i < G__36206__a.length) {G__36206__a[G__36206__i] = arguments[G__36206__i + 1]; ++G__36206__i;}
  p__36203 = new cljs.core.IndexedSeq(G__36206__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__36203);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36207){
var ports = cljs.core.first(arglist__36207);
var p__36203 = cljs.core.rest(arglist__36207);
return alts_BANG___delegate(ports,p__36203);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__31040__auto___36302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___36302){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___36302){
return (function (state_36278){
var state_val_36279 = (state_36278[(1)]);
if((state_val_36279 === (7))){
var inst_36274 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36280_36303 = state_36278__$1;
(statearr_36280_36303[(2)] = inst_36274);

(statearr_36280_36303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (1))){
var state_36278__$1 = state_36278;
var statearr_36281_36304 = state_36278__$1;
(statearr_36281_36304[(2)] = null);

(statearr_36281_36304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (4))){
var inst_36257 = (state_36278[(7)]);
var inst_36257__$1 = (state_36278[(2)]);
var inst_36258 = (inst_36257__$1 == null);
var state_36278__$1 = (function (){var statearr_36282 = state_36278;
(statearr_36282[(7)] = inst_36257__$1);

return statearr_36282;
})();
if(cljs.core.truth_(inst_36258)){
var statearr_36283_36305 = state_36278__$1;
(statearr_36283_36305[(1)] = (5));

} else {
var statearr_36284_36306 = state_36278__$1;
(statearr_36284_36306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (13))){
var state_36278__$1 = state_36278;
var statearr_36285_36307 = state_36278__$1;
(statearr_36285_36307[(2)] = null);

(statearr_36285_36307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (6))){
var inst_36257 = (state_36278[(7)]);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36278__$1,(11),to,inst_36257);
} else {
if((state_val_36279 === (3))){
var inst_36276 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36278__$1,inst_36276);
} else {
if((state_val_36279 === (12))){
var state_36278__$1 = state_36278;
var statearr_36286_36308 = state_36278__$1;
(statearr_36286_36308[(2)] = null);

(statearr_36286_36308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (2))){
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(4),from);
} else {
if((state_val_36279 === (11))){
var inst_36267 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
if(cljs.core.truth_(inst_36267)){
var statearr_36287_36309 = state_36278__$1;
(statearr_36287_36309[(1)] = (12));

} else {
var statearr_36288_36310 = state_36278__$1;
(statearr_36288_36310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (9))){
var state_36278__$1 = state_36278;
var statearr_36289_36311 = state_36278__$1;
(statearr_36289_36311[(2)] = null);

(statearr_36289_36311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (5))){
var state_36278__$1 = state_36278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36290_36312 = state_36278__$1;
(statearr_36290_36312[(1)] = (8));

} else {
var statearr_36291_36313 = state_36278__$1;
(statearr_36291_36313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (14))){
var inst_36272 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36292_36314 = state_36278__$1;
(statearr_36292_36314[(2)] = inst_36272);

(statearr_36292_36314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (10))){
var inst_36264 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36293_36315 = state_36278__$1;
(statearr_36293_36315[(2)] = inst_36264);

(statearr_36293_36315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (8))){
var inst_36261 = cljs.core.async.close_BANG_.call(null,to);
var state_36278__$1 = state_36278;
var statearr_36294_36316 = state_36278__$1;
(statearr_36294_36316[(2)] = inst_36261);

(statearr_36294_36316[(1)] = (10));


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
});})(c__31040__auto___36302))
;
return ((function (switch__30984__auto__,c__31040__auto___36302){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36298 = [null,null,null,null,null,null,null,null];
(statearr_36298[(0)] = state_machine__30985__auto__);

(statearr_36298[(1)] = (1));

return statearr_36298;
});
var state_machine__30985__auto____1 = (function (state_36278){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36299){if((e36299 instanceof Object)){
var ex__30988__auto__ = e36299;
var statearr_36300_36317 = state_36278;
(statearr_36300_36317[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36318 = state_36278;
state_36278 = G__36318;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36278){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___36302))
})();
var state__31042__auto__ = (function (){var statearr_36301 = f__31041__auto__.call(null);
(statearr_36301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___36302);

return statearr_36301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___36302))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36502){
var vec__36503 = p__36502;
var v = cljs.core.nth.call(null,vec__36503,(0),null);
var p = cljs.core.nth.call(null,vec__36503,(1),null);
var job = vec__36503;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31040__auto___36685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___36685,res,vec__36503,v,p,job,jobs,results){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___36685,res,vec__36503,v,p,job,jobs,results){
return (function (state_36508){
var state_val_36509 = (state_36508[(1)]);
if((state_val_36509 === (2))){
var inst_36505 = (state_36508[(2)]);
var inst_36506 = cljs.core.async.close_BANG_.call(null,res);
var state_36508__$1 = (function (){var statearr_36510 = state_36508;
(statearr_36510[(7)] = inst_36505);

return statearr_36510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36508__$1,inst_36506);
} else {
if((state_val_36509 === (1))){
var state_36508__$1 = state_36508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36508__$1,(2),res,v);
} else {
return null;
}
}
});})(c__31040__auto___36685,res,vec__36503,v,p,job,jobs,results))
;
return ((function (switch__30984__auto__,c__31040__auto___36685,res,vec__36503,v,p,job,jobs,results){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36514 = [null,null,null,null,null,null,null,null];
(statearr_36514[(0)] = state_machine__30985__auto__);

(statearr_36514[(1)] = (1));

return statearr_36514;
});
var state_machine__30985__auto____1 = (function (state_36508){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36515){if((e36515 instanceof Object)){
var ex__30988__auto__ = e36515;
var statearr_36516_36686 = state_36508;
(statearr_36516_36686[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36687 = state_36508;
state_36508 = G__36687;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36508){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___36685,res,vec__36503,v,p,job,jobs,results))
})();
var state__31042__auto__ = (function (){var statearr_36517 = f__31041__auto__.call(null);
(statearr_36517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___36685);

return statearr_36517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___36685,res,vec__36503,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36518){
var vec__36519 = p__36518;
var v = cljs.core.nth.call(null,vec__36519,(0),null);
var p = cljs.core.nth.call(null,vec__36519,(1),null);
var job = vec__36519;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__15328__auto___36688 = n;
var __36689 = (0);
while(true){
if((__36689 < n__15328__auto___36688)){
var G__36520_36690 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36520_36690) {
case "async":
var c__31040__auto___36692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36689,c__31040__auto___36692,G__36520_36690,n__15328__auto___36688,jobs,results,process,async){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (__36689,c__31040__auto___36692,G__36520_36690,n__15328__auto___36688,jobs,results,process,async){
return (function (state_36533){
var state_val_36534 = (state_36533[(1)]);
if((state_val_36534 === (7))){
var inst_36529 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36535_36693 = state_36533__$1;
(statearr_36535_36693[(2)] = inst_36529);

(statearr_36535_36693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (6))){
var state_36533__$1 = state_36533;
var statearr_36536_36694 = state_36533__$1;
(statearr_36536_36694[(2)] = null);

(statearr_36536_36694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (5))){
var state_36533__$1 = state_36533;
var statearr_36537_36695 = state_36533__$1;
(statearr_36537_36695[(2)] = null);

(statearr_36537_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (4))){
var inst_36523 = (state_36533[(2)]);
var inst_36524 = async.call(null,inst_36523);
var state_36533__$1 = state_36533;
if(cljs.core.truth_(inst_36524)){
var statearr_36538_36696 = state_36533__$1;
(statearr_36538_36696[(1)] = (5));

} else {
var statearr_36539_36697 = state_36533__$1;
(statearr_36539_36697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (3))){
var inst_36531 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36533__$1,inst_36531);
} else {
if((state_val_36534 === (2))){
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36533__$1,(4),jobs);
} else {
if((state_val_36534 === (1))){
var state_36533__$1 = state_36533;
var statearr_36540_36698 = state_36533__$1;
(statearr_36540_36698[(2)] = null);

(statearr_36540_36698[(1)] = (2));


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
});})(__36689,c__31040__auto___36692,G__36520_36690,n__15328__auto___36688,jobs,results,process,async))
;
return ((function (__36689,switch__30984__auto__,c__31040__auto___36692,G__36520_36690,n__15328__auto___36688,jobs,results,process,async){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36544 = [null,null,null,null,null,null,null];
(statearr_36544[(0)] = state_machine__30985__auto__);

(statearr_36544[(1)] = (1));

return statearr_36544;
});
var state_machine__30985__auto____1 = (function (state_36533){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36545){if((e36545 instanceof Object)){
var ex__30988__auto__ = e36545;
var statearr_36546_36699 = state_36533;
(statearr_36546_36699[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36700 = state_36533;
state_36533 = G__36700;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36533){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(__36689,switch__30984__auto__,c__31040__auto___36692,G__36520_36690,n__15328__auto___36688,jobs,results,process,async))
})();
var state__31042__auto__ = (function (){var statearr_36547 = f__31041__auto__.call(null);
(statearr_36547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___36692);

return statearr_36547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(__36689,c__31040__auto___36692,G__36520_36690,n__15328__auto___36688,jobs,results,process,async))
);


break;
case "compute":
var c__31040__auto___36701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36689,c__31040__auto___36701,G__36520_36690,n__15328__auto___36688,jobs,results,process,async){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (__36689,c__31040__auto___36701,G__36520_36690,n__15328__auto___36688,jobs,results,process,async){
return (function (state_36560){
var state_val_36561 = (state_36560[(1)]);
if((state_val_36561 === (7))){
var inst_36556 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36562_36702 = state_36560__$1;
(statearr_36562_36702[(2)] = inst_36556);

(statearr_36562_36702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (6))){
var state_36560__$1 = state_36560;
var statearr_36563_36703 = state_36560__$1;
(statearr_36563_36703[(2)] = null);

(statearr_36563_36703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (5))){
var state_36560__$1 = state_36560;
var statearr_36564_36704 = state_36560__$1;
(statearr_36564_36704[(2)] = null);

(statearr_36564_36704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (4))){
var inst_36550 = (state_36560[(2)]);
var inst_36551 = process.call(null,inst_36550);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36551)){
var statearr_36565_36705 = state_36560__$1;
(statearr_36565_36705[(1)] = (5));

} else {
var statearr_36566_36706 = state_36560__$1;
(statearr_36566_36706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (3))){
var inst_36558 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36560__$1,inst_36558);
} else {
if((state_val_36561 === (2))){
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(4),jobs);
} else {
if((state_val_36561 === (1))){
var state_36560__$1 = state_36560;
var statearr_36567_36707 = state_36560__$1;
(statearr_36567_36707[(2)] = null);

(statearr_36567_36707[(1)] = (2));


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
});})(__36689,c__31040__auto___36701,G__36520_36690,n__15328__auto___36688,jobs,results,process,async))
;
return ((function (__36689,switch__30984__auto__,c__31040__auto___36701,G__36520_36690,n__15328__auto___36688,jobs,results,process,async){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36571 = [null,null,null,null,null,null,null];
(statearr_36571[(0)] = state_machine__30985__auto__);

(statearr_36571[(1)] = (1));

return statearr_36571;
});
var state_machine__30985__auto____1 = (function (state_36560){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36572){if((e36572 instanceof Object)){
var ex__30988__auto__ = e36572;
var statearr_36573_36708 = state_36560;
(statearr_36573_36708[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36709 = state_36560;
state_36560 = G__36709;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36560){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(__36689,switch__30984__auto__,c__31040__auto___36701,G__36520_36690,n__15328__auto___36688,jobs,results,process,async))
})();
var state__31042__auto__ = (function (){var statearr_36574 = f__31041__auto__.call(null);
(statearr_36574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___36701);

return statearr_36574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(__36689,c__31040__auto___36701,G__36520_36690,n__15328__auto___36688,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36710 = (__36689 + (1));
__36689 = G__36710;
continue;
} else {
}
break;
}

var c__31040__auto___36711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___36711,jobs,results,process,async){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___36711,jobs,results,process,async){
return (function (state_36596){
var state_val_36597 = (state_36596[(1)]);
if((state_val_36597 === (9))){
var inst_36589 = (state_36596[(2)]);
var state_36596__$1 = (function (){var statearr_36598 = state_36596;
(statearr_36598[(7)] = inst_36589);

return statearr_36598;
})();
var statearr_36599_36712 = state_36596__$1;
(statearr_36599_36712[(2)] = null);

(statearr_36599_36712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36597 === (8))){
var inst_36582 = (state_36596[(8)]);
var inst_36587 = (state_36596[(2)]);
var state_36596__$1 = (function (){var statearr_36600 = state_36596;
(statearr_36600[(9)] = inst_36587);

return statearr_36600;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36596__$1,(9),results,inst_36582);
} else {
if((state_val_36597 === (7))){
var inst_36592 = (state_36596[(2)]);
var state_36596__$1 = state_36596;
var statearr_36601_36713 = state_36596__$1;
(statearr_36601_36713[(2)] = inst_36592);

(statearr_36601_36713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36597 === (6))){
var inst_36577 = (state_36596[(10)]);
var inst_36582 = (state_36596[(8)]);
var inst_36582__$1 = cljs.core.async.chan.call(null,(1));
var inst_36583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36584 = [inst_36577,inst_36582__$1];
var inst_36585 = (new cljs.core.PersistentVector(null,2,(5),inst_36583,inst_36584,null));
var state_36596__$1 = (function (){var statearr_36602 = state_36596;
(statearr_36602[(8)] = inst_36582__$1);

return statearr_36602;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36596__$1,(8),jobs,inst_36585);
} else {
if((state_val_36597 === (5))){
var inst_36580 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36596__$1 = state_36596;
var statearr_36603_36714 = state_36596__$1;
(statearr_36603_36714[(2)] = inst_36580);

(statearr_36603_36714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36597 === (4))){
var inst_36577 = (state_36596[(10)]);
var inst_36577__$1 = (state_36596[(2)]);
var inst_36578 = (inst_36577__$1 == null);
var state_36596__$1 = (function (){var statearr_36604 = state_36596;
(statearr_36604[(10)] = inst_36577__$1);

return statearr_36604;
})();
if(cljs.core.truth_(inst_36578)){
var statearr_36605_36715 = state_36596__$1;
(statearr_36605_36715[(1)] = (5));

} else {
var statearr_36606_36716 = state_36596__$1;
(statearr_36606_36716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36597 === (3))){
var inst_36594 = (state_36596[(2)]);
var state_36596__$1 = state_36596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36596__$1,inst_36594);
} else {
if((state_val_36597 === (2))){
var state_36596__$1 = state_36596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36596__$1,(4),from);
} else {
if((state_val_36597 === (1))){
var state_36596__$1 = state_36596;
var statearr_36607_36717 = state_36596__$1;
(statearr_36607_36717[(2)] = null);

(statearr_36607_36717[(1)] = (2));


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
});})(c__31040__auto___36711,jobs,results,process,async))
;
return ((function (switch__30984__auto__,c__31040__auto___36711,jobs,results,process,async){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36611[(0)] = state_machine__30985__auto__);

(statearr_36611[(1)] = (1));

return statearr_36611;
});
var state_machine__30985__auto____1 = (function (state_36596){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36612){if((e36612 instanceof Object)){
var ex__30988__auto__ = e36612;
var statearr_36613_36718 = state_36596;
(statearr_36613_36718[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36719 = state_36596;
state_36596 = G__36719;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36596){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___36711,jobs,results,process,async))
})();
var state__31042__auto__ = (function (){var statearr_36614 = f__31041__auto__.call(null);
(statearr_36614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___36711);

return statearr_36614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___36711,jobs,results,process,async))
);


var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__,jobs,results,process,async){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__,jobs,results,process,async){
return (function (state_36652){
var state_val_36653 = (state_36652[(1)]);
if((state_val_36653 === (7))){
var inst_36648 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36654_36720 = state_36652__$1;
(statearr_36654_36720[(2)] = inst_36648);

(statearr_36654_36720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (20))){
var state_36652__$1 = state_36652;
var statearr_36655_36721 = state_36652__$1;
(statearr_36655_36721[(2)] = null);

(statearr_36655_36721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (1))){
var state_36652__$1 = state_36652;
var statearr_36656_36722 = state_36652__$1;
(statearr_36656_36722[(2)] = null);

(statearr_36656_36722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (4))){
var inst_36617 = (state_36652[(7)]);
var inst_36617__$1 = (state_36652[(2)]);
var inst_36618 = (inst_36617__$1 == null);
var state_36652__$1 = (function (){var statearr_36657 = state_36652;
(statearr_36657[(7)] = inst_36617__$1);

return statearr_36657;
})();
if(cljs.core.truth_(inst_36618)){
var statearr_36658_36723 = state_36652__$1;
(statearr_36658_36723[(1)] = (5));

} else {
var statearr_36659_36724 = state_36652__$1;
(statearr_36659_36724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (15))){
var inst_36630 = (state_36652[(8)]);
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36652__$1,(18),to,inst_36630);
} else {
if((state_val_36653 === (21))){
var inst_36643 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36660_36725 = state_36652__$1;
(statearr_36660_36725[(2)] = inst_36643);

(statearr_36660_36725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (13))){
var inst_36645 = (state_36652[(2)]);
var state_36652__$1 = (function (){var statearr_36661 = state_36652;
(statearr_36661[(9)] = inst_36645);

return statearr_36661;
})();
var statearr_36662_36726 = state_36652__$1;
(statearr_36662_36726[(2)] = null);

(statearr_36662_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (6))){
var inst_36617 = (state_36652[(7)]);
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36652__$1,(11),inst_36617);
} else {
if((state_val_36653 === (17))){
var inst_36638 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
if(cljs.core.truth_(inst_36638)){
var statearr_36663_36727 = state_36652__$1;
(statearr_36663_36727[(1)] = (19));

} else {
var statearr_36664_36728 = state_36652__$1;
(statearr_36664_36728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (3))){
var inst_36650 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36652__$1,inst_36650);
} else {
if((state_val_36653 === (12))){
var inst_36627 = (state_36652[(10)]);
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36652__$1,(14),inst_36627);
} else {
if((state_val_36653 === (2))){
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36652__$1,(4),results);
} else {
if((state_val_36653 === (19))){
var state_36652__$1 = state_36652;
var statearr_36665_36729 = state_36652__$1;
(statearr_36665_36729[(2)] = null);

(statearr_36665_36729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (11))){
var inst_36627 = (state_36652[(2)]);
var state_36652__$1 = (function (){var statearr_36666 = state_36652;
(statearr_36666[(10)] = inst_36627);

return statearr_36666;
})();
var statearr_36667_36730 = state_36652__$1;
(statearr_36667_36730[(2)] = null);

(statearr_36667_36730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (9))){
var state_36652__$1 = state_36652;
var statearr_36668_36731 = state_36652__$1;
(statearr_36668_36731[(2)] = null);

(statearr_36668_36731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (5))){
var state_36652__$1 = state_36652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36669_36732 = state_36652__$1;
(statearr_36669_36732[(1)] = (8));

} else {
var statearr_36670_36733 = state_36652__$1;
(statearr_36670_36733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (14))){
var inst_36632 = (state_36652[(11)]);
var inst_36630 = (state_36652[(8)]);
var inst_36630__$1 = (state_36652[(2)]);
var inst_36631 = (inst_36630__$1 == null);
var inst_36632__$1 = cljs.core.not.call(null,inst_36631);
var state_36652__$1 = (function (){var statearr_36671 = state_36652;
(statearr_36671[(11)] = inst_36632__$1);

(statearr_36671[(8)] = inst_36630__$1);

return statearr_36671;
})();
if(inst_36632__$1){
var statearr_36672_36734 = state_36652__$1;
(statearr_36672_36734[(1)] = (15));

} else {
var statearr_36673_36735 = state_36652__$1;
(statearr_36673_36735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (16))){
var inst_36632 = (state_36652[(11)]);
var state_36652__$1 = state_36652;
var statearr_36674_36736 = state_36652__$1;
(statearr_36674_36736[(2)] = inst_36632);

(statearr_36674_36736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (10))){
var inst_36624 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36675_36737 = state_36652__$1;
(statearr_36675_36737[(2)] = inst_36624);

(statearr_36675_36737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (18))){
var inst_36635 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36676_36738 = state_36652__$1;
(statearr_36676_36738[(2)] = inst_36635);

(statearr_36676_36738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (8))){
var inst_36621 = cljs.core.async.close_BANG_.call(null,to);
var state_36652__$1 = state_36652;
var statearr_36677_36739 = state_36652__$1;
(statearr_36677_36739[(2)] = inst_36621);

(statearr_36677_36739[(1)] = (10));


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
});})(c__31040__auto__,jobs,results,process,async))
;
return ((function (switch__30984__auto__,c__31040__auto__,jobs,results,process,async){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36681 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36681[(0)] = state_machine__30985__auto__);

(statearr_36681[(1)] = (1));

return statearr_36681;
});
var state_machine__30985__auto____1 = (function (state_36652){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36682){if((e36682 instanceof Object)){
var ex__30988__auto__ = e36682;
var statearr_36683_36740 = state_36652;
(statearr_36683_36740[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36741 = state_36652;
state_36652 = G__36741;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36652){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__,jobs,results,process,async))
})();
var state__31042__auto__ = (function (){var statearr_36684 = f__31041__auto__.call(null);
(statearr_36684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_36684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__,jobs,results,process,async))
);

return c__31040__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31040__auto___36842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___36842,tc,fc){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___36842,tc,fc){
return (function (state_36817){
var state_val_36818 = (state_36817[(1)]);
if((state_val_36818 === (7))){
var inst_36813 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
var statearr_36819_36843 = state_36817__$1;
(statearr_36819_36843[(2)] = inst_36813);

(statearr_36819_36843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (1))){
var state_36817__$1 = state_36817;
var statearr_36820_36844 = state_36817__$1;
(statearr_36820_36844[(2)] = null);

(statearr_36820_36844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (4))){
var inst_36794 = (state_36817[(7)]);
var inst_36794__$1 = (state_36817[(2)]);
var inst_36795 = (inst_36794__$1 == null);
var state_36817__$1 = (function (){var statearr_36821 = state_36817;
(statearr_36821[(7)] = inst_36794__$1);

return statearr_36821;
})();
if(cljs.core.truth_(inst_36795)){
var statearr_36822_36845 = state_36817__$1;
(statearr_36822_36845[(1)] = (5));

} else {
var statearr_36823_36846 = state_36817__$1;
(statearr_36823_36846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (13))){
var state_36817__$1 = state_36817;
var statearr_36824_36847 = state_36817__$1;
(statearr_36824_36847[(2)] = null);

(statearr_36824_36847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (6))){
var inst_36794 = (state_36817[(7)]);
var inst_36800 = p.call(null,inst_36794);
var state_36817__$1 = state_36817;
if(cljs.core.truth_(inst_36800)){
var statearr_36825_36848 = state_36817__$1;
(statearr_36825_36848[(1)] = (9));

} else {
var statearr_36826_36849 = state_36817__$1;
(statearr_36826_36849[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (3))){
var inst_36815 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36817__$1,inst_36815);
} else {
if((state_val_36818 === (12))){
var state_36817__$1 = state_36817;
var statearr_36827_36850 = state_36817__$1;
(statearr_36827_36850[(2)] = null);

(statearr_36827_36850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (2))){
var state_36817__$1 = state_36817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36817__$1,(4),ch);
} else {
if((state_val_36818 === (11))){
var inst_36794 = (state_36817[(7)]);
var inst_36804 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36817__$1,(8),inst_36804,inst_36794);
} else {
if((state_val_36818 === (9))){
var state_36817__$1 = state_36817;
var statearr_36828_36851 = state_36817__$1;
(statearr_36828_36851[(2)] = tc);

(statearr_36828_36851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (5))){
var inst_36797 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36798 = cljs.core.async.close_BANG_.call(null,fc);
var state_36817__$1 = (function (){var statearr_36829 = state_36817;
(statearr_36829[(8)] = inst_36797);

return statearr_36829;
})();
var statearr_36830_36852 = state_36817__$1;
(statearr_36830_36852[(2)] = inst_36798);

(statearr_36830_36852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (14))){
var inst_36811 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
var statearr_36831_36853 = state_36817__$1;
(statearr_36831_36853[(2)] = inst_36811);

(statearr_36831_36853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (10))){
var state_36817__$1 = state_36817;
var statearr_36832_36854 = state_36817__$1;
(statearr_36832_36854[(2)] = fc);

(statearr_36832_36854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36818 === (8))){
var inst_36806 = (state_36817[(2)]);
var state_36817__$1 = state_36817;
if(cljs.core.truth_(inst_36806)){
var statearr_36833_36855 = state_36817__$1;
(statearr_36833_36855[(1)] = (12));

} else {
var statearr_36834_36856 = state_36817__$1;
(statearr_36834_36856[(1)] = (13));

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
});})(c__31040__auto___36842,tc,fc))
;
return ((function (switch__30984__auto__,c__31040__auto___36842,tc,fc){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36838 = [null,null,null,null,null,null,null,null,null];
(statearr_36838[(0)] = state_machine__30985__auto__);

(statearr_36838[(1)] = (1));

return statearr_36838;
});
var state_machine__30985__auto____1 = (function (state_36817){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36839){if((e36839 instanceof Object)){
var ex__30988__auto__ = e36839;
var statearr_36840_36857 = state_36817;
(statearr_36840_36857[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36858 = state_36817;
state_36817 = G__36858;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36817){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___36842,tc,fc))
})();
var state__31042__auto__ = (function (){var statearr_36841 = f__31041__auto__.call(null);
(statearr_36841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___36842);

return statearr_36841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___36842,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_36905){
var state_val_36906 = (state_36905[(1)]);
if((state_val_36906 === (7))){
var inst_36901 = (state_36905[(2)]);
var state_36905__$1 = state_36905;
var statearr_36907_36923 = state_36905__$1;
(statearr_36907_36923[(2)] = inst_36901);

(statearr_36907_36923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36906 === (6))){
var inst_36894 = (state_36905[(7)]);
var inst_36891 = (state_36905[(8)]);
var inst_36898 = f.call(null,inst_36891,inst_36894);
var inst_36891__$1 = inst_36898;
var state_36905__$1 = (function (){var statearr_36908 = state_36905;
(statearr_36908[(8)] = inst_36891__$1);

return statearr_36908;
})();
var statearr_36909_36924 = state_36905__$1;
(statearr_36909_36924[(2)] = null);

(statearr_36909_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36906 === (5))){
var inst_36891 = (state_36905[(8)]);
var state_36905__$1 = state_36905;
var statearr_36910_36925 = state_36905__$1;
(statearr_36910_36925[(2)] = inst_36891);

(statearr_36910_36925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36906 === (4))){
var inst_36894 = (state_36905[(7)]);
var inst_36894__$1 = (state_36905[(2)]);
var inst_36895 = (inst_36894__$1 == null);
var state_36905__$1 = (function (){var statearr_36911 = state_36905;
(statearr_36911[(7)] = inst_36894__$1);

return statearr_36911;
})();
if(cljs.core.truth_(inst_36895)){
var statearr_36912_36926 = state_36905__$1;
(statearr_36912_36926[(1)] = (5));

} else {
var statearr_36913_36927 = state_36905__$1;
(statearr_36913_36927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36906 === (3))){
var inst_36903 = (state_36905[(2)]);
var state_36905__$1 = state_36905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36905__$1,inst_36903);
} else {
if((state_val_36906 === (2))){
var state_36905__$1 = state_36905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36905__$1,(4),ch);
} else {
if((state_val_36906 === (1))){
var inst_36891 = init;
var state_36905__$1 = (function (){var statearr_36914 = state_36905;
(statearr_36914[(8)] = inst_36891);

return statearr_36914;
})();
var statearr_36915_36928 = state_36905__$1;
(statearr_36915_36928[(2)] = null);

(statearr_36915_36928[(1)] = (2));


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
});})(c__31040__auto__))
;
return ((function (switch__30984__auto__,c__31040__auto__){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_36919 = [null,null,null,null,null,null,null,null,null];
(statearr_36919[(0)] = state_machine__30985__auto__);

(statearr_36919[(1)] = (1));

return statearr_36919;
});
var state_machine__30985__auto____1 = (function (state_36905){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_36905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e36920){if((e36920 instanceof Object)){
var ex__30988__auto__ = e36920;
var statearr_36921_36929 = state_36905;
(statearr_36921_36929[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_36905;
state_36905 = G__36930;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_36905){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_36905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_36922 = f__31041__auto__.call(null);
(statearr_36922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_36922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_37004){
var state_val_37005 = (state_37004[(1)]);
if((state_val_37005 === (7))){
var inst_36986 = (state_37004[(2)]);
var state_37004__$1 = state_37004;
var statearr_37006_37029 = state_37004__$1;
(statearr_37006_37029[(2)] = inst_36986);

(statearr_37006_37029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (1))){
var inst_36980 = cljs.core.seq.call(null,coll);
var inst_36981 = inst_36980;
var state_37004__$1 = (function (){var statearr_37007 = state_37004;
(statearr_37007[(7)] = inst_36981);

return statearr_37007;
})();
var statearr_37008_37030 = state_37004__$1;
(statearr_37008_37030[(2)] = null);

(statearr_37008_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (4))){
var inst_36981 = (state_37004[(7)]);
var inst_36984 = cljs.core.first.call(null,inst_36981);
var state_37004__$1 = state_37004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37004__$1,(7),ch,inst_36984);
} else {
if((state_val_37005 === (13))){
var inst_36998 = (state_37004[(2)]);
var state_37004__$1 = state_37004;
var statearr_37009_37031 = state_37004__$1;
(statearr_37009_37031[(2)] = inst_36998);

(statearr_37009_37031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (6))){
var inst_36989 = (state_37004[(2)]);
var state_37004__$1 = state_37004;
if(cljs.core.truth_(inst_36989)){
var statearr_37010_37032 = state_37004__$1;
(statearr_37010_37032[(1)] = (8));

} else {
var statearr_37011_37033 = state_37004__$1;
(statearr_37011_37033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (3))){
var inst_37002 = (state_37004[(2)]);
var state_37004__$1 = state_37004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37004__$1,inst_37002);
} else {
if((state_val_37005 === (12))){
var state_37004__$1 = state_37004;
var statearr_37012_37034 = state_37004__$1;
(statearr_37012_37034[(2)] = null);

(statearr_37012_37034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (2))){
var inst_36981 = (state_37004[(7)]);
var state_37004__$1 = state_37004;
if(cljs.core.truth_(inst_36981)){
var statearr_37013_37035 = state_37004__$1;
(statearr_37013_37035[(1)] = (4));

} else {
var statearr_37014_37036 = state_37004__$1;
(statearr_37014_37036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (11))){
var inst_36995 = cljs.core.async.close_BANG_.call(null,ch);
var state_37004__$1 = state_37004;
var statearr_37015_37037 = state_37004__$1;
(statearr_37015_37037[(2)] = inst_36995);

(statearr_37015_37037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (9))){
var state_37004__$1 = state_37004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37016_37038 = state_37004__$1;
(statearr_37016_37038[(1)] = (11));

} else {
var statearr_37017_37039 = state_37004__$1;
(statearr_37017_37039[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (5))){
var inst_36981 = (state_37004[(7)]);
var state_37004__$1 = state_37004;
var statearr_37018_37040 = state_37004__$1;
(statearr_37018_37040[(2)] = inst_36981);

(statearr_37018_37040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (10))){
var inst_37000 = (state_37004[(2)]);
var state_37004__$1 = state_37004;
var statearr_37019_37041 = state_37004__$1;
(statearr_37019_37041[(2)] = inst_37000);

(statearr_37019_37041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37005 === (8))){
var inst_36981 = (state_37004[(7)]);
var inst_36991 = cljs.core.next.call(null,inst_36981);
var inst_36981__$1 = inst_36991;
var state_37004__$1 = (function (){var statearr_37020 = state_37004;
(statearr_37020[(7)] = inst_36981__$1);

return statearr_37020;
})();
var statearr_37021_37042 = state_37004__$1;
(statearr_37021_37042[(2)] = null);

(statearr_37021_37042[(1)] = (2));


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
});})(c__31040__auto__))
;
return ((function (switch__30984__auto__,c__31040__auto__){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_37025 = [null,null,null,null,null,null,null,null];
(statearr_37025[(0)] = state_machine__30985__auto__);

(statearr_37025[(1)] = (1));

return statearr_37025;
});
var state_machine__30985__auto____1 = (function (state_37004){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_37004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e37026){if((e37026 instanceof Object)){
var ex__30988__auto__ = e37026;
var statearr_37027_37043 = state_37004;
(statearr_37027_37043[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37044 = state_37004;
state_37004 = G__37044;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_37004){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_37004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_37028 = f__31041__auto__.call(null);
(statearr_37028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_37028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj37046 = {};
return obj37046;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__14429__auto__ = _;
if(and__14429__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__14429__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15085__auto__ = (((_ == null))?null:_);
return (function (){var or__14441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj37048 = {};
return obj37048;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t37270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37270 = (function (cs,ch,mult,meta37271){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37271 = meta37271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37270.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37270.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37270.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37270.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t37270.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37272){
var self__ = this;
var _37272__$1 = this;
return self__.meta37271;
});})(cs))
;

cljs.core.async.t37270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37272,meta37271__$1){
var self__ = this;
var _37272__$1 = this;
return (new cljs.core.async.t37270(self__.cs,self__.ch,self__.mult,meta37271__$1));
});})(cs))
;

cljs.core.async.t37270.cljs$lang$type = true;

cljs.core.async.t37270.cljs$lang$ctorStr = "cljs.core.async/t37270";

cljs.core.async.t37270.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t37270");
});})(cs))
;

cljs.core.async.__GT_t37270 = ((function (cs){
return (function __GT_t37270(cs__$1,ch__$1,mult__$1,meta37271){
return (new cljs.core.async.t37270(cs__$1,ch__$1,mult__$1,meta37271));
});})(cs))
;

}

return (new cljs.core.async.t37270(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31040__auto___37491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___37491,cs,m,dchan,dctr,done){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___37491,cs,m,dchan,dctr,done){
return (function (state_37403){
var state_val_37404 = (state_37403[(1)]);
if((state_val_37404 === (7))){
var inst_37399 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37405_37492 = state_37403__$1;
(statearr_37405_37492[(2)] = inst_37399);

(statearr_37405_37492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (20))){
var inst_37304 = (state_37403[(7)]);
var inst_37314 = cljs.core.first.call(null,inst_37304);
var inst_37315 = cljs.core.nth.call(null,inst_37314,(0),null);
var inst_37316 = cljs.core.nth.call(null,inst_37314,(1),null);
var state_37403__$1 = (function (){var statearr_37406 = state_37403;
(statearr_37406[(8)] = inst_37315);

return statearr_37406;
})();
if(cljs.core.truth_(inst_37316)){
var statearr_37407_37493 = state_37403__$1;
(statearr_37407_37493[(1)] = (22));

} else {
var statearr_37408_37494 = state_37403__$1;
(statearr_37408_37494[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (27))){
var inst_37275 = (state_37403[(9)]);
var inst_37346 = (state_37403[(10)]);
var inst_37351 = (state_37403[(11)]);
var inst_37344 = (state_37403[(12)]);
var inst_37351__$1 = cljs.core._nth.call(null,inst_37344,inst_37346);
var inst_37352 = cljs.core.async.put_BANG_.call(null,inst_37351__$1,inst_37275,done);
var state_37403__$1 = (function (){var statearr_37409 = state_37403;
(statearr_37409[(11)] = inst_37351__$1);

return statearr_37409;
})();
if(cljs.core.truth_(inst_37352)){
var statearr_37410_37495 = state_37403__$1;
(statearr_37410_37495[(1)] = (30));

} else {
var statearr_37411_37496 = state_37403__$1;
(statearr_37411_37496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (1))){
var state_37403__$1 = state_37403;
var statearr_37412_37497 = state_37403__$1;
(statearr_37412_37497[(2)] = null);

(statearr_37412_37497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (24))){
var inst_37304 = (state_37403[(7)]);
var inst_37321 = (state_37403[(2)]);
var inst_37322 = cljs.core.next.call(null,inst_37304);
var inst_37284 = inst_37322;
var inst_37285 = null;
var inst_37286 = (0);
var inst_37287 = (0);
var state_37403__$1 = (function (){var statearr_37413 = state_37403;
(statearr_37413[(13)] = inst_37321);

(statearr_37413[(14)] = inst_37287);

(statearr_37413[(15)] = inst_37285);

(statearr_37413[(16)] = inst_37286);

(statearr_37413[(17)] = inst_37284);

return statearr_37413;
})();
var statearr_37414_37498 = state_37403__$1;
(statearr_37414_37498[(2)] = null);

(statearr_37414_37498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (39))){
var state_37403__$1 = state_37403;
var statearr_37418_37499 = state_37403__$1;
(statearr_37418_37499[(2)] = null);

(statearr_37418_37499[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (4))){
var inst_37275 = (state_37403[(9)]);
var inst_37275__$1 = (state_37403[(2)]);
var inst_37276 = (inst_37275__$1 == null);
var state_37403__$1 = (function (){var statearr_37419 = state_37403;
(statearr_37419[(9)] = inst_37275__$1);

return statearr_37419;
})();
if(cljs.core.truth_(inst_37276)){
var statearr_37420_37500 = state_37403__$1;
(statearr_37420_37500[(1)] = (5));

} else {
var statearr_37421_37501 = state_37403__$1;
(statearr_37421_37501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (15))){
var inst_37287 = (state_37403[(14)]);
var inst_37285 = (state_37403[(15)]);
var inst_37286 = (state_37403[(16)]);
var inst_37284 = (state_37403[(17)]);
var inst_37300 = (state_37403[(2)]);
var inst_37301 = (inst_37287 + (1));
var tmp37415 = inst_37285;
var tmp37416 = inst_37286;
var tmp37417 = inst_37284;
var inst_37284__$1 = tmp37417;
var inst_37285__$1 = tmp37415;
var inst_37286__$1 = tmp37416;
var inst_37287__$1 = inst_37301;
var state_37403__$1 = (function (){var statearr_37422 = state_37403;
(statearr_37422[(18)] = inst_37300);

(statearr_37422[(14)] = inst_37287__$1);

(statearr_37422[(15)] = inst_37285__$1);

(statearr_37422[(16)] = inst_37286__$1);

(statearr_37422[(17)] = inst_37284__$1);

return statearr_37422;
})();
var statearr_37423_37502 = state_37403__$1;
(statearr_37423_37502[(2)] = null);

(statearr_37423_37502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (21))){
var inst_37325 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37427_37503 = state_37403__$1;
(statearr_37427_37503[(2)] = inst_37325);

(statearr_37427_37503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (31))){
var inst_37351 = (state_37403[(11)]);
var inst_37355 = done.call(null,null);
var inst_37356 = cljs.core.async.untap_STAR_.call(null,m,inst_37351);
var state_37403__$1 = (function (){var statearr_37428 = state_37403;
(statearr_37428[(19)] = inst_37355);

return statearr_37428;
})();
var statearr_37429_37504 = state_37403__$1;
(statearr_37429_37504[(2)] = inst_37356);

(statearr_37429_37504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (32))){
var inst_37346 = (state_37403[(10)]);
var inst_37345 = (state_37403[(20)]);
var inst_37344 = (state_37403[(12)]);
var inst_37343 = (state_37403[(21)]);
var inst_37358 = (state_37403[(2)]);
var inst_37359 = (inst_37346 + (1));
var tmp37424 = inst_37345;
var tmp37425 = inst_37344;
var tmp37426 = inst_37343;
var inst_37343__$1 = tmp37426;
var inst_37344__$1 = tmp37425;
var inst_37345__$1 = tmp37424;
var inst_37346__$1 = inst_37359;
var state_37403__$1 = (function (){var statearr_37430 = state_37403;
(statearr_37430[(10)] = inst_37346__$1);

(statearr_37430[(20)] = inst_37345__$1);

(statearr_37430[(22)] = inst_37358);

(statearr_37430[(12)] = inst_37344__$1);

(statearr_37430[(21)] = inst_37343__$1);

return statearr_37430;
})();
var statearr_37431_37505 = state_37403__$1;
(statearr_37431_37505[(2)] = null);

(statearr_37431_37505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (40))){
var inst_37371 = (state_37403[(23)]);
var inst_37375 = done.call(null,null);
var inst_37376 = cljs.core.async.untap_STAR_.call(null,m,inst_37371);
var state_37403__$1 = (function (){var statearr_37432 = state_37403;
(statearr_37432[(24)] = inst_37375);

return statearr_37432;
})();
var statearr_37433_37506 = state_37403__$1;
(statearr_37433_37506[(2)] = inst_37376);

(statearr_37433_37506[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (33))){
var inst_37362 = (state_37403[(25)]);
var inst_37364 = cljs.core.chunked_seq_QMARK_.call(null,inst_37362);
var state_37403__$1 = state_37403;
if(inst_37364){
var statearr_37434_37507 = state_37403__$1;
(statearr_37434_37507[(1)] = (36));

} else {
var statearr_37435_37508 = state_37403__$1;
(statearr_37435_37508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (13))){
var inst_37294 = (state_37403[(26)]);
var inst_37297 = cljs.core.async.close_BANG_.call(null,inst_37294);
var state_37403__$1 = state_37403;
var statearr_37436_37509 = state_37403__$1;
(statearr_37436_37509[(2)] = inst_37297);

(statearr_37436_37509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (22))){
var inst_37315 = (state_37403[(8)]);
var inst_37318 = cljs.core.async.close_BANG_.call(null,inst_37315);
var state_37403__$1 = state_37403;
var statearr_37437_37510 = state_37403__$1;
(statearr_37437_37510[(2)] = inst_37318);

(statearr_37437_37510[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (36))){
var inst_37362 = (state_37403[(25)]);
var inst_37366 = cljs.core.chunk_first.call(null,inst_37362);
var inst_37367 = cljs.core.chunk_rest.call(null,inst_37362);
var inst_37368 = cljs.core.count.call(null,inst_37366);
var inst_37343 = inst_37367;
var inst_37344 = inst_37366;
var inst_37345 = inst_37368;
var inst_37346 = (0);
var state_37403__$1 = (function (){var statearr_37438 = state_37403;
(statearr_37438[(10)] = inst_37346);

(statearr_37438[(20)] = inst_37345);

(statearr_37438[(12)] = inst_37344);

(statearr_37438[(21)] = inst_37343);

return statearr_37438;
})();
var statearr_37439_37511 = state_37403__$1;
(statearr_37439_37511[(2)] = null);

(statearr_37439_37511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (41))){
var inst_37362 = (state_37403[(25)]);
var inst_37378 = (state_37403[(2)]);
var inst_37379 = cljs.core.next.call(null,inst_37362);
var inst_37343 = inst_37379;
var inst_37344 = null;
var inst_37345 = (0);
var inst_37346 = (0);
var state_37403__$1 = (function (){var statearr_37440 = state_37403;
(statearr_37440[(27)] = inst_37378);

(statearr_37440[(10)] = inst_37346);

(statearr_37440[(20)] = inst_37345);

(statearr_37440[(12)] = inst_37344);

(statearr_37440[(21)] = inst_37343);

return statearr_37440;
})();
var statearr_37441_37512 = state_37403__$1;
(statearr_37441_37512[(2)] = null);

(statearr_37441_37512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (43))){
var state_37403__$1 = state_37403;
var statearr_37442_37513 = state_37403__$1;
(statearr_37442_37513[(2)] = null);

(statearr_37442_37513[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (29))){
var inst_37387 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37443_37514 = state_37403__$1;
(statearr_37443_37514[(2)] = inst_37387);

(statearr_37443_37514[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (44))){
var inst_37396 = (state_37403[(2)]);
var state_37403__$1 = (function (){var statearr_37444 = state_37403;
(statearr_37444[(28)] = inst_37396);

return statearr_37444;
})();
var statearr_37445_37515 = state_37403__$1;
(statearr_37445_37515[(2)] = null);

(statearr_37445_37515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (6))){
var inst_37335 = (state_37403[(29)]);
var inst_37334 = cljs.core.deref.call(null,cs);
var inst_37335__$1 = cljs.core.keys.call(null,inst_37334);
var inst_37336 = cljs.core.count.call(null,inst_37335__$1);
var inst_37337 = cljs.core.reset_BANG_.call(null,dctr,inst_37336);
var inst_37342 = cljs.core.seq.call(null,inst_37335__$1);
var inst_37343 = inst_37342;
var inst_37344 = null;
var inst_37345 = (0);
var inst_37346 = (0);
var state_37403__$1 = (function (){var statearr_37446 = state_37403;
(statearr_37446[(30)] = inst_37337);

(statearr_37446[(10)] = inst_37346);

(statearr_37446[(20)] = inst_37345);

(statearr_37446[(12)] = inst_37344);

(statearr_37446[(29)] = inst_37335__$1);

(statearr_37446[(21)] = inst_37343);

return statearr_37446;
})();
var statearr_37447_37516 = state_37403__$1;
(statearr_37447_37516[(2)] = null);

(statearr_37447_37516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (28))){
var inst_37362 = (state_37403[(25)]);
var inst_37343 = (state_37403[(21)]);
var inst_37362__$1 = cljs.core.seq.call(null,inst_37343);
var state_37403__$1 = (function (){var statearr_37448 = state_37403;
(statearr_37448[(25)] = inst_37362__$1);

return statearr_37448;
})();
if(inst_37362__$1){
var statearr_37449_37517 = state_37403__$1;
(statearr_37449_37517[(1)] = (33));

} else {
var statearr_37450_37518 = state_37403__$1;
(statearr_37450_37518[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (25))){
var inst_37346 = (state_37403[(10)]);
var inst_37345 = (state_37403[(20)]);
var inst_37348 = (inst_37346 < inst_37345);
var inst_37349 = inst_37348;
var state_37403__$1 = state_37403;
if(cljs.core.truth_(inst_37349)){
var statearr_37451_37519 = state_37403__$1;
(statearr_37451_37519[(1)] = (27));

} else {
var statearr_37452_37520 = state_37403__$1;
(statearr_37452_37520[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (34))){
var state_37403__$1 = state_37403;
var statearr_37453_37521 = state_37403__$1;
(statearr_37453_37521[(2)] = null);

(statearr_37453_37521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (17))){
var state_37403__$1 = state_37403;
var statearr_37454_37522 = state_37403__$1;
(statearr_37454_37522[(2)] = null);

(statearr_37454_37522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (3))){
var inst_37401 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37403__$1,inst_37401);
} else {
if((state_val_37404 === (12))){
var inst_37330 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37455_37523 = state_37403__$1;
(statearr_37455_37523[(2)] = inst_37330);

(statearr_37455_37523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (2))){
var state_37403__$1 = state_37403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37403__$1,(4),ch);
} else {
if((state_val_37404 === (23))){
var state_37403__$1 = state_37403;
var statearr_37456_37524 = state_37403__$1;
(statearr_37456_37524[(2)] = null);

(statearr_37456_37524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (35))){
var inst_37385 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37457_37525 = state_37403__$1;
(statearr_37457_37525[(2)] = inst_37385);

(statearr_37457_37525[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (19))){
var inst_37304 = (state_37403[(7)]);
var inst_37308 = cljs.core.chunk_first.call(null,inst_37304);
var inst_37309 = cljs.core.chunk_rest.call(null,inst_37304);
var inst_37310 = cljs.core.count.call(null,inst_37308);
var inst_37284 = inst_37309;
var inst_37285 = inst_37308;
var inst_37286 = inst_37310;
var inst_37287 = (0);
var state_37403__$1 = (function (){var statearr_37458 = state_37403;
(statearr_37458[(14)] = inst_37287);

(statearr_37458[(15)] = inst_37285);

(statearr_37458[(16)] = inst_37286);

(statearr_37458[(17)] = inst_37284);

return statearr_37458;
})();
var statearr_37459_37526 = state_37403__$1;
(statearr_37459_37526[(2)] = null);

(statearr_37459_37526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (11))){
var inst_37304 = (state_37403[(7)]);
var inst_37284 = (state_37403[(17)]);
var inst_37304__$1 = cljs.core.seq.call(null,inst_37284);
var state_37403__$1 = (function (){var statearr_37460 = state_37403;
(statearr_37460[(7)] = inst_37304__$1);

return statearr_37460;
})();
if(inst_37304__$1){
var statearr_37461_37527 = state_37403__$1;
(statearr_37461_37527[(1)] = (16));

} else {
var statearr_37462_37528 = state_37403__$1;
(statearr_37462_37528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (9))){
var inst_37332 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37463_37529 = state_37403__$1;
(statearr_37463_37529[(2)] = inst_37332);

(statearr_37463_37529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (5))){
var inst_37282 = cljs.core.deref.call(null,cs);
var inst_37283 = cljs.core.seq.call(null,inst_37282);
var inst_37284 = inst_37283;
var inst_37285 = null;
var inst_37286 = (0);
var inst_37287 = (0);
var state_37403__$1 = (function (){var statearr_37464 = state_37403;
(statearr_37464[(14)] = inst_37287);

(statearr_37464[(15)] = inst_37285);

(statearr_37464[(16)] = inst_37286);

(statearr_37464[(17)] = inst_37284);

return statearr_37464;
})();
var statearr_37465_37530 = state_37403__$1;
(statearr_37465_37530[(2)] = null);

(statearr_37465_37530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (14))){
var state_37403__$1 = state_37403;
var statearr_37466_37531 = state_37403__$1;
(statearr_37466_37531[(2)] = null);

(statearr_37466_37531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (45))){
var inst_37393 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37467_37532 = state_37403__$1;
(statearr_37467_37532[(2)] = inst_37393);

(statearr_37467_37532[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (26))){
var inst_37335 = (state_37403[(29)]);
var inst_37389 = (state_37403[(2)]);
var inst_37390 = cljs.core.seq.call(null,inst_37335);
var state_37403__$1 = (function (){var statearr_37468 = state_37403;
(statearr_37468[(31)] = inst_37389);

return statearr_37468;
})();
if(inst_37390){
var statearr_37469_37533 = state_37403__$1;
(statearr_37469_37533[(1)] = (42));

} else {
var statearr_37470_37534 = state_37403__$1;
(statearr_37470_37534[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (16))){
var inst_37304 = (state_37403[(7)]);
var inst_37306 = cljs.core.chunked_seq_QMARK_.call(null,inst_37304);
var state_37403__$1 = state_37403;
if(inst_37306){
var statearr_37471_37535 = state_37403__$1;
(statearr_37471_37535[(1)] = (19));

} else {
var statearr_37472_37536 = state_37403__$1;
(statearr_37472_37536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (38))){
var inst_37382 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37473_37537 = state_37403__$1;
(statearr_37473_37537[(2)] = inst_37382);

(statearr_37473_37537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (30))){
var state_37403__$1 = state_37403;
var statearr_37474_37538 = state_37403__$1;
(statearr_37474_37538[(2)] = null);

(statearr_37474_37538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (10))){
var inst_37287 = (state_37403[(14)]);
var inst_37285 = (state_37403[(15)]);
var inst_37293 = cljs.core._nth.call(null,inst_37285,inst_37287);
var inst_37294 = cljs.core.nth.call(null,inst_37293,(0),null);
var inst_37295 = cljs.core.nth.call(null,inst_37293,(1),null);
var state_37403__$1 = (function (){var statearr_37475 = state_37403;
(statearr_37475[(26)] = inst_37294);

return statearr_37475;
})();
if(cljs.core.truth_(inst_37295)){
var statearr_37476_37539 = state_37403__$1;
(statearr_37476_37539[(1)] = (13));

} else {
var statearr_37477_37540 = state_37403__$1;
(statearr_37477_37540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (18))){
var inst_37328 = (state_37403[(2)]);
var state_37403__$1 = state_37403;
var statearr_37478_37541 = state_37403__$1;
(statearr_37478_37541[(2)] = inst_37328);

(statearr_37478_37541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (42))){
var state_37403__$1 = state_37403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37403__$1,(45),dchan);
} else {
if((state_val_37404 === (37))){
var inst_37362 = (state_37403[(25)]);
var inst_37275 = (state_37403[(9)]);
var inst_37371 = (state_37403[(23)]);
var inst_37371__$1 = cljs.core.first.call(null,inst_37362);
var inst_37372 = cljs.core.async.put_BANG_.call(null,inst_37371__$1,inst_37275,done);
var state_37403__$1 = (function (){var statearr_37479 = state_37403;
(statearr_37479[(23)] = inst_37371__$1);

return statearr_37479;
})();
if(cljs.core.truth_(inst_37372)){
var statearr_37480_37542 = state_37403__$1;
(statearr_37480_37542[(1)] = (39));

} else {
var statearr_37481_37543 = state_37403__$1;
(statearr_37481_37543[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37404 === (8))){
var inst_37287 = (state_37403[(14)]);
var inst_37286 = (state_37403[(16)]);
var inst_37289 = (inst_37287 < inst_37286);
var inst_37290 = inst_37289;
var state_37403__$1 = state_37403;
if(cljs.core.truth_(inst_37290)){
var statearr_37482_37544 = state_37403__$1;
(statearr_37482_37544[(1)] = (10));

} else {
var statearr_37483_37545 = state_37403__$1;
(statearr_37483_37545[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__31040__auto___37491,cs,m,dchan,dctr,done))
;
return ((function (switch__30984__auto__,c__31040__auto___37491,cs,m,dchan,dctr,done){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_37487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37487[(0)] = state_machine__30985__auto__);

(statearr_37487[(1)] = (1));

return statearr_37487;
});
var state_machine__30985__auto____1 = (function (state_37403){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_37403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e37488){if((e37488 instanceof Object)){
var ex__30988__auto__ = e37488;
var statearr_37489_37546 = state_37403;
(statearr_37489_37546[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37547 = state_37403;
state_37403 = G__37547;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_37403){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_37403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___37491,cs,m,dchan,dctr,done))
})();
var state__31042__auto__ = (function (){var statearr_37490 = f__31041__auto__.call(null);
(statearr_37490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___37491);

return statearr_37490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___37491,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj37549 = {};
return obj37549;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__14429__auto__ = m;
if(and__14429__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15085__auto__ = (((m == null))?null:m);
return (function (){var or__14441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__37550){
var map__37555 = p__37550;
var map__37555__$1 = ((cljs.core.seq_QMARK_.call(null,map__37555))?cljs.core.apply.call(null,cljs.core.hash_map,map__37555):map__37555);
var opts = map__37555__$1;
var statearr_37556_37559 = state;
(statearr_37556_37559[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__37555,map__37555__$1,opts){
return (function (val){
var statearr_37557_37560 = state;
(statearr_37557_37560[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37555,map__37555__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_37558_37561 = state;
(statearr_37558_37561[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__37550 = null;
if (arguments.length > 3) {
var G__37562__i = 0, G__37562__a = new Array(arguments.length -  3);
while (G__37562__i < G__37562__a.length) {G__37562__a[G__37562__i] = arguments[G__37562__i + 3]; ++G__37562__i;}
  p__37550 = new cljs.core.IndexedSeq(G__37562__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__37550);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__37563){
var state = cljs.core.first(arglist__37563);
arglist__37563 = cljs.core.next(arglist__37563);
var cont_block = cljs.core.first(arglist__37563);
arglist__37563 = cljs.core.next(arglist__37563);
var ports = cljs.core.first(arglist__37563);
var p__37550 = cljs.core.rest(arglist__37563);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__37550);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t37683 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37683 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37684){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37684 = meta37684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37683.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37683.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37685){
var self__ = this;
var _37685__$1 = this;
return self__.meta37684;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37685,meta37684__$1){
var self__ = this;
var _37685__$1 = this;
return (new cljs.core.async.t37683(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37684__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37683.cljs$lang$type = true;

cljs.core.async.t37683.cljs$lang$ctorStr = "cljs.core.async/t37683";

cljs.core.async.t37683.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t37683");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37683 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t37683(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37684){
return (new cljs.core.async.t37683(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37684));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37683(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31040__auto___37802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___37802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___37802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37755){
var state_val_37756 = (state_37755[(1)]);
if((state_val_37756 === (7))){
var inst_37699 = (state_37755[(7)]);
var inst_37704 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37699);
var state_37755__$1 = state_37755;
var statearr_37757_37803 = state_37755__$1;
(statearr_37757_37803[(2)] = inst_37704);

(statearr_37757_37803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (20))){
var inst_37714 = (state_37755[(8)]);
var state_37755__$1 = state_37755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37755__$1,(23),out,inst_37714);
} else {
if((state_val_37756 === (1))){
var inst_37689 = (state_37755[(9)]);
var inst_37689__$1 = calc_state.call(null);
var inst_37690 = cljs.core.seq_QMARK_.call(null,inst_37689__$1);
var state_37755__$1 = (function (){var statearr_37758 = state_37755;
(statearr_37758[(9)] = inst_37689__$1);

return statearr_37758;
})();
if(inst_37690){
var statearr_37759_37804 = state_37755__$1;
(statearr_37759_37804[(1)] = (2));

} else {
var statearr_37760_37805 = state_37755__$1;
(statearr_37760_37805[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (24))){
var inst_37707 = (state_37755[(10)]);
var inst_37699 = inst_37707;
var state_37755__$1 = (function (){var statearr_37761 = state_37755;
(statearr_37761[(7)] = inst_37699);

return statearr_37761;
})();
var statearr_37762_37806 = state_37755__$1;
(statearr_37762_37806[(2)] = null);

(statearr_37762_37806[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (4))){
var inst_37689 = (state_37755[(9)]);
var inst_37695 = (state_37755[(2)]);
var inst_37696 = cljs.core.get.call(null,inst_37695,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37697 = cljs.core.get.call(null,inst_37695,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37698 = cljs.core.get.call(null,inst_37695,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37699 = inst_37689;
var state_37755__$1 = (function (){var statearr_37763 = state_37755;
(statearr_37763[(11)] = inst_37696);

(statearr_37763[(7)] = inst_37699);

(statearr_37763[(12)] = inst_37698);

(statearr_37763[(13)] = inst_37697);

return statearr_37763;
})();
var statearr_37764_37807 = state_37755__$1;
(statearr_37764_37807[(2)] = null);

(statearr_37764_37807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (15))){
var state_37755__$1 = state_37755;
var statearr_37765_37808 = state_37755__$1;
(statearr_37765_37808[(2)] = null);

(statearr_37765_37808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (21))){
var inst_37707 = (state_37755[(10)]);
var inst_37699 = inst_37707;
var state_37755__$1 = (function (){var statearr_37766 = state_37755;
(statearr_37766[(7)] = inst_37699);

return statearr_37766;
})();
var statearr_37767_37809 = state_37755__$1;
(statearr_37767_37809[(2)] = null);

(statearr_37767_37809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (13))){
var inst_37751 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
var statearr_37768_37810 = state_37755__$1;
(statearr_37768_37810[(2)] = inst_37751);

(statearr_37768_37810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (22))){
var inst_37749 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
var statearr_37769_37811 = state_37755__$1;
(statearr_37769_37811[(2)] = inst_37749);

(statearr_37769_37811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (6))){
var inst_37753 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37755__$1,inst_37753);
} else {
if((state_val_37756 === (25))){
var state_37755__$1 = state_37755;
var statearr_37770_37812 = state_37755__$1;
(statearr_37770_37812[(2)] = null);

(statearr_37770_37812[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (17))){
var inst_37729 = (state_37755[(14)]);
var state_37755__$1 = state_37755;
var statearr_37771_37813 = state_37755__$1;
(statearr_37771_37813[(2)] = inst_37729);

(statearr_37771_37813[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (3))){
var inst_37689 = (state_37755[(9)]);
var state_37755__$1 = state_37755;
var statearr_37772_37814 = state_37755__$1;
(statearr_37772_37814[(2)] = inst_37689);

(statearr_37772_37814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (12))){
var inst_37729 = (state_37755[(14)]);
var inst_37710 = (state_37755[(15)]);
var inst_37715 = (state_37755[(16)]);
var inst_37729__$1 = inst_37710.call(null,inst_37715);
var state_37755__$1 = (function (){var statearr_37773 = state_37755;
(statearr_37773[(14)] = inst_37729__$1);

return statearr_37773;
})();
if(cljs.core.truth_(inst_37729__$1)){
var statearr_37774_37815 = state_37755__$1;
(statearr_37774_37815[(1)] = (17));

} else {
var statearr_37775_37816 = state_37755__$1;
(statearr_37775_37816[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (2))){
var inst_37689 = (state_37755[(9)]);
var inst_37692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37689);
var state_37755__$1 = state_37755;
var statearr_37776_37817 = state_37755__$1;
(statearr_37776_37817[(2)] = inst_37692);

(statearr_37776_37817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (23))){
var inst_37740 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
if(cljs.core.truth_(inst_37740)){
var statearr_37777_37818 = state_37755__$1;
(statearr_37777_37818[(1)] = (24));

} else {
var statearr_37778_37819 = state_37755__$1;
(statearr_37778_37819[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (19))){
var inst_37737 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
if(cljs.core.truth_(inst_37737)){
var statearr_37779_37820 = state_37755__$1;
(statearr_37779_37820[(1)] = (20));

} else {
var statearr_37780_37821 = state_37755__$1;
(statearr_37780_37821[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (11))){
var inst_37714 = (state_37755[(8)]);
var inst_37720 = (inst_37714 == null);
var state_37755__$1 = state_37755;
if(cljs.core.truth_(inst_37720)){
var statearr_37781_37822 = state_37755__$1;
(statearr_37781_37822[(1)] = (14));

} else {
var statearr_37782_37823 = state_37755__$1;
(statearr_37782_37823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (9))){
var inst_37707 = (state_37755[(10)]);
var inst_37707__$1 = (state_37755[(2)]);
var inst_37708 = cljs.core.get.call(null,inst_37707__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37709 = cljs.core.get.call(null,inst_37707__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37710 = cljs.core.get.call(null,inst_37707__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_37755__$1 = (function (){var statearr_37783 = state_37755;
(statearr_37783[(15)] = inst_37710);

(statearr_37783[(10)] = inst_37707__$1);

(statearr_37783[(17)] = inst_37709);

return statearr_37783;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37755__$1,(10),inst_37708);
} else {
if((state_val_37756 === (5))){
var inst_37699 = (state_37755[(7)]);
var inst_37702 = cljs.core.seq_QMARK_.call(null,inst_37699);
var state_37755__$1 = state_37755;
if(inst_37702){
var statearr_37784_37824 = state_37755__$1;
(statearr_37784_37824[(1)] = (7));

} else {
var statearr_37785_37825 = state_37755__$1;
(statearr_37785_37825[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (14))){
var inst_37715 = (state_37755[(16)]);
var inst_37722 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37715);
var state_37755__$1 = state_37755;
var statearr_37786_37826 = state_37755__$1;
(statearr_37786_37826[(2)] = inst_37722);

(statearr_37786_37826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (26))){
var inst_37745 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
var statearr_37787_37827 = state_37755__$1;
(statearr_37787_37827[(2)] = inst_37745);

(statearr_37787_37827[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (16))){
var inst_37725 = (state_37755[(2)]);
var inst_37726 = calc_state.call(null);
var inst_37699 = inst_37726;
var state_37755__$1 = (function (){var statearr_37788 = state_37755;
(statearr_37788[(7)] = inst_37699);

(statearr_37788[(18)] = inst_37725);

return statearr_37788;
})();
var statearr_37789_37828 = state_37755__$1;
(statearr_37789_37828[(2)] = null);

(statearr_37789_37828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (10))){
var inst_37714 = (state_37755[(8)]);
var inst_37715 = (state_37755[(16)]);
var inst_37713 = (state_37755[(2)]);
var inst_37714__$1 = cljs.core.nth.call(null,inst_37713,(0),null);
var inst_37715__$1 = cljs.core.nth.call(null,inst_37713,(1),null);
var inst_37716 = (inst_37714__$1 == null);
var inst_37717 = cljs.core._EQ_.call(null,inst_37715__$1,change);
var inst_37718 = (inst_37716) || (inst_37717);
var state_37755__$1 = (function (){var statearr_37790 = state_37755;
(statearr_37790[(8)] = inst_37714__$1);

(statearr_37790[(16)] = inst_37715__$1);

return statearr_37790;
})();
if(cljs.core.truth_(inst_37718)){
var statearr_37791_37829 = state_37755__$1;
(statearr_37791_37829[(1)] = (11));

} else {
var statearr_37792_37830 = state_37755__$1;
(statearr_37792_37830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (18))){
var inst_37710 = (state_37755[(15)]);
var inst_37709 = (state_37755[(17)]);
var inst_37715 = (state_37755[(16)]);
var inst_37732 = cljs.core.empty_QMARK_.call(null,inst_37710);
var inst_37733 = inst_37709.call(null,inst_37715);
var inst_37734 = cljs.core.not.call(null,inst_37733);
var inst_37735 = (inst_37732) && (inst_37734);
var state_37755__$1 = state_37755;
var statearr_37793_37831 = state_37755__$1;
(statearr_37793_37831[(2)] = inst_37735);

(statearr_37793_37831[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (8))){
var inst_37699 = (state_37755[(7)]);
var state_37755__$1 = state_37755;
var statearr_37794_37832 = state_37755__$1;
(statearr_37794_37832[(2)] = inst_37699);

(statearr_37794_37832[(1)] = (9));


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
});})(c__31040__auto___37802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30984__auto__,c__31040__auto___37802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_37798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37798[(0)] = state_machine__30985__auto__);

(statearr_37798[(1)] = (1));

return statearr_37798;
});
var state_machine__30985__auto____1 = (function (state_37755){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_37755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e37799){if((e37799 instanceof Object)){
var ex__30988__auto__ = e37799;
var statearr_37800_37833 = state_37755;
(statearr_37800_37833[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37834 = state_37755;
state_37755 = G__37834;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_37755){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_37755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___37802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31042__auto__ = (function (){var statearr_37801 = f__31041__auto__.call(null);
(statearr_37801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___37802);

return statearr_37801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___37802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj37836 = {};
return obj37836;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__14429__auto__ = p;
if(and__14429__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__14429__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15085__auto__ = (((p == null))?null:p);
return (function (){var or__14441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__14429__auto__ = p;
if(and__14429__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__14429__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15085__auto__ = (((p == null))?null:p);
return (function (){var or__14441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__14429__auto__ = p;
if(and__14429__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__14429__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15085__auto__ = (((p == null))?null:p);
return (function (){var or__14441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__14429__auto__ = p;
if(and__14429__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__14429__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15085__auto__ = (((p == null))?null:p);
return (function (){var or__14441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15085__auto__)]);
if(or__14441__auto__){
return or__14441__auto__;
} else {
var or__14441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__14441__auto____$1){
return or__14441__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__14441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14441__auto__,mults){
return (function (p1__37837_SHARP_){
if(cljs.core.truth_(p1__37837_SHARP_.call(null,topic))){
return p1__37837_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37837_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14441__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37960 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37960 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta37961){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta37961 = meta37961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37960.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4406__auto__)){
var m = temp__4406__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t37960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37960.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37962){
var self__ = this;
var _37962__$1 = this;
return self__.meta37961;
});})(mults,ensure_mult))
;

cljs.core.async.t37960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37962,meta37961__$1){
var self__ = this;
var _37962__$1 = this;
return (new cljs.core.async.t37960(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta37961__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37960.cljs$lang$type = true;

cljs.core.async.t37960.cljs$lang$ctorStr = "cljs.core.async/t37960";

cljs.core.async.t37960.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t37960");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37960 = ((function (mults,ensure_mult){
return (function __GT_t37960(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37961){
return (new cljs.core.async.t37960(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta37961));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37960(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31040__auto___38082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___38082,mults,ensure_mult,p){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___38082,mults,ensure_mult,p){
return (function (state_38034){
var state_val_38035 = (state_38034[(1)]);
if((state_val_38035 === (7))){
var inst_38030 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38036_38083 = state_38034__$1;
(statearr_38036_38083[(2)] = inst_38030);

(statearr_38036_38083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (20))){
var state_38034__$1 = state_38034;
var statearr_38037_38084 = state_38034__$1;
(statearr_38037_38084[(2)] = null);

(statearr_38037_38084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (1))){
var state_38034__$1 = state_38034;
var statearr_38038_38085 = state_38034__$1;
(statearr_38038_38085[(2)] = null);

(statearr_38038_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (24))){
var inst_38013 = (state_38034[(7)]);
var inst_38022 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38013);
var state_38034__$1 = state_38034;
var statearr_38039_38086 = state_38034__$1;
(statearr_38039_38086[(2)] = inst_38022);

(statearr_38039_38086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (4))){
var inst_37965 = (state_38034[(8)]);
var inst_37965__$1 = (state_38034[(2)]);
var inst_37966 = (inst_37965__$1 == null);
var state_38034__$1 = (function (){var statearr_38040 = state_38034;
(statearr_38040[(8)] = inst_37965__$1);

return statearr_38040;
})();
if(cljs.core.truth_(inst_37966)){
var statearr_38041_38087 = state_38034__$1;
(statearr_38041_38087[(1)] = (5));

} else {
var statearr_38042_38088 = state_38034__$1;
(statearr_38042_38088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (15))){
var inst_38007 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38043_38089 = state_38034__$1;
(statearr_38043_38089[(2)] = inst_38007);

(statearr_38043_38089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (21))){
var inst_38027 = (state_38034[(2)]);
var state_38034__$1 = (function (){var statearr_38044 = state_38034;
(statearr_38044[(9)] = inst_38027);

return statearr_38044;
})();
var statearr_38045_38090 = state_38034__$1;
(statearr_38045_38090[(2)] = null);

(statearr_38045_38090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (13))){
var inst_37989 = (state_38034[(10)]);
var inst_37991 = cljs.core.chunked_seq_QMARK_.call(null,inst_37989);
var state_38034__$1 = state_38034;
if(inst_37991){
var statearr_38046_38091 = state_38034__$1;
(statearr_38046_38091[(1)] = (16));

} else {
var statearr_38047_38092 = state_38034__$1;
(statearr_38047_38092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (22))){
var inst_38019 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
if(cljs.core.truth_(inst_38019)){
var statearr_38048_38093 = state_38034__$1;
(statearr_38048_38093[(1)] = (23));

} else {
var statearr_38049_38094 = state_38034__$1;
(statearr_38049_38094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (6))){
var inst_38013 = (state_38034[(7)]);
var inst_37965 = (state_38034[(8)]);
var inst_38015 = (state_38034[(11)]);
var inst_38013__$1 = topic_fn.call(null,inst_37965);
var inst_38014 = cljs.core.deref.call(null,mults);
var inst_38015__$1 = cljs.core.get.call(null,inst_38014,inst_38013__$1);
var state_38034__$1 = (function (){var statearr_38050 = state_38034;
(statearr_38050[(7)] = inst_38013__$1);

(statearr_38050[(11)] = inst_38015__$1);

return statearr_38050;
})();
if(cljs.core.truth_(inst_38015__$1)){
var statearr_38051_38095 = state_38034__$1;
(statearr_38051_38095[(1)] = (19));

} else {
var statearr_38052_38096 = state_38034__$1;
(statearr_38052_38096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (25))){
var inst_38024 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38053_38097 = state_38034__$1;
(statearr_38053_38097[(2)] = inst_38024);

(statearr_38053_38097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (17))){
var inst_37989 = (state_38034[(10)]);
var inst_37998 = cljs.core.first.call(null,inst_37989);
var inst_37999 = cljs.core.async.muxch_STAR_.call(null,inst_37998);
var inst_38000 = cljs.core.async.close_BANG_.call(null,inst_37999);
var inst_38001 = cljs.core.next.call(null,inst_37989);
var inst_37975 = inst_38001;
var inst_37976 = null;
var inst_37977 = (0);
var inst_37978 = (0);
var state_38034__$1 = (function (){var statearr_38054 = state_38034;
(statearr_38054[(12)] = inst_37975);

(statearr_38054[(13)] = inst_37977);

(statearr_38054[(14)] = inst_38000);

(statearr_38054[(15)] = inst_37978);

(statearr_38054[(16)] = inst_37976);

return statearr_38054;
})();
var statearr_38055_38098 = state_38034__$1;
(statearr_38055_38098[(2)] = null);

(statearr_38055_38098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (3))){
var inst_38032 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38034__$1,inst_38032);
} else {
if((state_val_38035 === (12))){
var inst_38009 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38056_38099 = state_38034__$1;
(statearr_38056_38099[(2)] = inst_38009);

(statearr_38056_38099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (2))){
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38034__$1,(4),ch);
} else {
if((state_val_38035 === (23))){
var state_38034__$1 = state_38034;
var statearr_38057_38100 = state_38034__$1;
(statearr_38057_38100[(2)] = null);

(statearr_38057_38100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (19))){
var inst_37965 = (state_38034[(8)]);
var inst_38015 = (state_38034[(11)]);
var inst_38017 = cljs.core.async.muxch_STAR_.call(null,inst_38015);
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38034__$1,(22),inst_38017,inst_37965);
} else {
if((state_val_38035 === (11))){
var inst_37975 = (state_38034[(12)]);
var inst_37989 = (state_38034[(10)]);
var inst_37989__$1 = cljs.core.seq.call(null,inst_37975);
var state_38034__$1 = (function (){var statearr_38058 = state_38034;
(statearr_38058[(10)] = inst_37989__$1);

return statearr_38058;
})();
if(inst_37989__$1){
var statearr_38059_38101 = state_38034__$1;
(statearr_38059_38101[(1)] = (13));

} else {
var statearr_38060_38102 = state_38034__$1;
(statearr_38060_38102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (9))){
var inst_38011 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38061_38103 = state_38034__$1;
(statearr_38061_38103[(2)] = inst_38011);

(statearr_38061_38103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (5))){
var inst_37972 = cljs.core.deref.call(null,mults);
var inst_37973 = cljs.core.vals.call(null,inst_37972);
var inst_37974 = cljs.core.seq.call(null,inst_37973);
var inst_37975 = inst_37974;
var inst_37976 = null;
var inst_37977 = (0);
var inst_37978 = (0);
var state_38034__$1 = (function (){var statearr_38062 = state_38034;
(statearr_38062[(12)] = inst_37975);

(statearr_38062[(13)] = inst_37977);

(statearr_38062[(15)] = inst_37978);

(statearr_38062[(16)] = inst_37976);

return statearr_38062;
})();
var statearr_38063_38104 = state_38034__$1;
(statearr_38063_38104[(2)] = null);

(statearr_38063_38104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (14))){
var state_38034__$1 = state_38034;
var statearr_38067_38105 = state_38034__$1;
(statearr_38067_38105[(2)] = null);

(statearr_38067_38105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (16))){
var inst_37989 = (state_38034[(10)]);
var inst_37993 = cljs.core.chunk_first.call(null,inst_37989);
var inst_37994 = cljs.core.chunk_rest.call(null,inst_37989);
var inst_37995 = cljs.core.count.call(null,inst_37993);
var inst_37975 = inst_37994;
var inst_37976 = inst_37993;
var inst_37977 = inst_37995;
var inst_37978 = (0);
var state_38034__$1 = (function (){var statearr_38068 = state_38034;
(statearr_38068[(12)] = inst_37975);

(statearr_38068[(13)] = inst_37977);

(statearr_38068[(15)] = inst_37978);

(statearr_38068[(16)] = inst_37976);

return statearr_38068;
})();
var statearr_38069_38106 = state_38034__$1;
(statearr_38069_38106[(2)] = null);

(statearr_38069_38106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (10))){
var inst_37975 = (state_38034[(12)]);
var inst_37977 = (state_38034[(13)]);
var inst_37978 = (state_38034[(15)]);
var inst_37976 = (state_38034[(16)]);
var inst_37983 = cljs.core._nth.call(null,inst_37976,inst_37978);
var inst_37984 = cljs.core.async.muxch_STAR_.call(null,inst_37983);
var inst_37985 = cljs.core.async.close_BANG_.call(null,inst_37984);
var inst_37986 = (inst_37978 + (1));
var tmp38064 = inst_37975;
var tmp38065 = inst_37977;
var tmp38066 = inst_37976;
var inst_37975__$1 = tmp38064;
var inst_37976__$1 = tmp38066;
var inst_37977__$1 = tmp38065;
var inst_37978__$1 = inst_37986;
var state_38034__$1 = (function (){var statearr_38070 = state_38034;
(statearr_38070[(12)] = inst_37975__$1);

(statearr_38070[(13)] = inst_37977__$1);

(statearr_38070[(15)] = inst_37978__$1);

(statearr_38070[(16)] = inst_37976__$1);

(statearr_38070[(17)] = inst_37985);

return statearr_38070;
})();
var statearr_38071_38107 = state_38034__$1;
(statearr_38071_38107[(2)] = null);

(statearr_38071_38107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (18))){
var inst_38004 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38072_38108 = state_38034__$1;
(statearr_38072_38108[(2)] = inst_38004);

(statearr_38072_38108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (8))){
var inst_37977 = (state_38034[(13)]);
var inst_37978 = (state_38034[(15)]);
var inst_37980 = (inst_37978 < inst_37977);
var inst_37981 = inst_37980;
var state_38034__$1 = state_38034;
if(cljs.core.truth_(inst_37981)){
var statearr_38073_38109 = state_38034__$1;
(statearr_38073_38109[(1)] = (10));

} else {
var statearr_38074_38110 = state_38034__$1;
(statearr_38074_38110[(1)] = (11));

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
});})(c__31040__auto___38082,mults,ensure_mult,p))
;
return ((function (switch__30984__auto__,c__31040__auto___38082,mults,ensure_mult,p){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38078[(0)] = state_machine__30985__auto__);

(statearr_38078[(1)] = (1));

return statearr_38078;
});
var state_machine__30985__auto____1 = (function (state_38034){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38079){if((e38079 instanceof Object)){
var ex__30988__auto__ = e38079;
var statearr_38080_38111 = state_38034;
(statearr_38080_38111[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38112 = state_38034;
state_38034 = G__38112;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38034){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___38082,mults,ensure_mult,p))
})();
var state__31042__auto__ = (function (){var statearr_38081 = f__31041__auto__.call(null);
(statearr_38081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___38082);

return statearr_38081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___38082,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31040__auto___38249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___38249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___38249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38219){
var state_val_38220 = (state_38219[(1)]);
if((state_val_38220 === (7))){
var state_38219__$1 = state_38219;
var statearr_38221_38250 = state_38219__$1;
(statearr_38221_38250[(2)] = null);

(statearr_38221_38250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (1))){
var state_38219__$1 = state_38219;
var statearr_38222_38251 = state_38219__$1;
(statearr_38222_38251[(2)] = null);

(statearr_38222_38251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (4))){
var inst_38183 = (state_38219[(7)]);
var inst_38185 = (inst_38183 < cnt);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38185)){
var statearr_38223_38252 = state_38219__$1;
(statearr_38223_38252[(1)] = (6));

} else {
var statearr_38224_38253 = state_38219__$1;
(statearr_38224_38253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (15))){
var inst_38215 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38225_38254 = state_38219__$1;
(statearr_38225_38254[(2)] = inst_38215);

(statearr_38225_38254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (13))){
var inst_38208 = cljs.core.async.close_BANG_.call(null,out);
var state_38219__$1 = state_38219;
var statearr_38226_38255 = state_38219__$1;
(statearr_38226_38255[(2)] = inst_38208);

(statearr_38226_38255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (6))){
var state_38219__$1 = state_38219;
var statearr_38227_38256 = state_38219__$1;
(statearr_38227_38256[(2)] = null);

(statearr_38227_38256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (3))){
var inst_38217 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38219__$1,inst_38217);
} else {
if((state_val_38220 === (12))){
var inst_38205 = (state_38219[(8)]);
var inst_38205__$1 = (state_38219[(2)]);
var inst_38206 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38205__$1);
var state_38219__$1 = (function (){var statearr_38228 = state_38219;
(statearr_38228[(8)] = inst_38205__$1);

return statearr_38228;
})();
if(cljs.core.truth_(inst_38206)){
var statearr_38229_38257 = state_38219__$1;
(statearr_38229_38257[(1)] = (13));

} else {
var statearr_38230_38258 = state_38219__$1;
(statearr_38230_38258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (2))){
var inst_38182 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38183 = (0);
var state_38219__$1 = (function (){var statearr_38231 = state_38219;
(statearr_38231[(7)] = inst_38183);

(statearr_38231[(9)] = inst_38182);

return statearr_38231;
})();
var statearr_38232_38259 = state_38219__$1;
(statearr_38232_38259[(2)] = null);

(statearr_38232_38259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (11))){
var inst_38183 = (state_38219[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38219,(10),Object,null,(9));
var inst_38192 = chs__$1.call(null,inst_38183);
var inst_38193 = done.call(null,inst_38183);
var inst_38194 = cljs.core.async.take_BANG_.call(null,inst_38192,inst_38193);
var state_38219__$1 = state_38219;
var statearr_38233_38260 = state_38219__$1;
(statearr_38233_38260[(2)] = inst_38194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (9))){
var inst_38183 = (state_38219[(7)]);
var inst_38196 = (state_38219[(2)]);
var inst_38197 = (inst_38183 + (1));
var inst_38183__$1 = inst_38197;
var state_38219__$1 = (function (){var statearr_38234 = state_38219;
(statearr_38234[(10)] = inst_38196);

(statearr_38234[(7)] = inst_38183__$1);

return statearr_38234;
})();
var statearr_38235_38261 = state_38219__$1;
(statearr_38235_38261[(2)] = null);

(statearr_38235_38261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (5))){
var inst_38203 = (state_38219[(2)]);
var state_38219__$1 = (function (){var statearr_38236 = state_38219;
(statearr_38236[(11)] = inst_38203);

return statearr_38236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(12),dchan);
} else {
if((state_val_38220 === (14))){
var inst_38205 = (state_38219[(8)]);
var inst_38210 = cljs.core.apply.call(null,f,inst_38205);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38219__$1,(16),out,inst_38210);
} else {
if((state_val_38220 === (16))){
var inst_38212 = (state_38219[(2)]);
var state_38219__$1 = (function (){var statearr_38237 = state_38219;
(statearr_38237[(12)] = inst_38212);

return statearr_38237;
})();
var statearr_38238_38262 = state_38219__$1;
(statearr_38238_38262[(2)] = null);

(statearr_38238_38262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (10))){
var inst_38187 = (state_38219[(2)]);
var inst_38188 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38219__$1 = (function (){var statearr_38239 = state_38219;
(statearr_38239[(13)] = inst_38187);

return statearr_38239;
})();
var statearr_38240_38263 = state_38219__$1;
(statearr_38240_38263[(2)] = inst_38188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (8))){
var inst_38201 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38241_38264 = state_38219__$1;
(statearr_38241_38264[(2)] = inst_38201);

(statearr_38241_38264[(1)] = (5));


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
});})(c__31040__auto___38249,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30984__auto__,c__31040__auto___38249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38245[(0)] = state_machine__30985__auto__);

(statearr_38245[(1)] = (1));

return statearr_38245;
});
var state_machine__30985__auto____1 = (function (state_38219){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38246){if((e38246 instanceof Object)){
var ex__30988__auto__ = e38246;
var statearr_38247_38265 = state_38219;
(statearr_38247_38265[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38266 = state_38219;
state_38219 = G__38266;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38219){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___38249,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31042__auto__ = (function (){var statearr_38248 = f__31041__auto__.call(null);
(statearr_38248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___38249);

return statearr_38248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___38249,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31040__auto___38374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___38374,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___38374,out){
return (function (state_38350){
var state_val_38351 = (state_38350[(1)]);
if((state_val_38351 === (7))){
var inst_38329 = (state_38350[(7)]);
var inst_38330 = (state_38350[(8)]);
var inst_38329__$1 = (state_38350[(2)]);
var inst_38330__$1 = cljs.core.nth.call(null,inst_38329__$1,(0),null);
var inst_38331 = cljs.core.nth.call(null,inst_38329__$1,(1),null);
var inst_38332 = (inst_38330__$1 == null);
var state_38350__$1 = (function (){var statearr_38352 = state_38350;
(statearr_38352[(7)] = inst_38329__$1);

(statearr_38352[(9)] = inst_38331);

(statearr_38352[(8)] = inst_38330__$1);

return statearr_38352;
})();
if(cljs.core.truth_(inst_38332)){
var statearr_38353_38375 = state_38350__$1;
(statearr_38353_38375[(1)] = (8));

} else {
var statearr_38354_38376 = state_38350__$1;
(statearr_38354_38376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (1))){
var inst_38321 = cljs.core.vec.call(null,chs);
var inst_38322 = inst_38321;
var state_38350__$1 = (function (){var statearr_38355 = state_38350;
(statearr_38355[(10)] = inst_38322);

return statearr_38355;
})();
var statearr_38356_38377 = state_38350__$1;
(statearr_38356_38377[(2)] = null);

(statearr_38356_38377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (4))){
var inst_38322 = (state_38350[(10)]);
var state_38350__$1 = state_38350;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38350__$1,(7),inst_38322);
} else {
if((state_val_38351 === (6))){
var inst_38346 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
var statearr_38357_38378 = state_38350__$1;
(statearr_38357_38378[(2)] = inst_38346);

(statearr_38357_38378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (3))){
var inst_38348 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38350__$1,inst_38348);
} else {
if((state_val_38351 === (2))){
var inst_38322 = (state_38350[(10)]);
var inst_38324 = cljs.core.count.call(null,inst_38322);
var inst_38325 = (inst_38324 > (0));
var state_38350__$1 = state_38350;
if(cljs.core.truth_(inst_38325)){
var statearr_38359_38379 = state_38350__$1;
(statearr_38359_38379[(1)] = (4));

} else {
var statearr_38360_38380 = state_38350__$1;
(statearr_38360_38380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (11))){
var inst_38322 = (state_38350[(10)]);
var inst_38339 = (state_38350[(2)]);
var tmp38358 = inst_38322;
var inst_38322__$1 = tmp38358;
var state_38350__$1 = (function (){var statearr_38361 = state_38350;
(statearr_38361[(11)] = inst_38339);

(statearr_38361[(10)] = inst_38322__$1);

return statearr_38361;
})();
var statearr_38362_38381 = state_38350__$1;
(statearr_38362_38381[(2)] = null);

(statearr_38362_38381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (9))){
var inst_38330 = (state_38350[(8)]);
var state_38350__$1 = state_38350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38350__$1,(11),out,inst_38330);
} else {
if((state_val_38351 === (5))){
var inst_38344 = cljs.core.async.close_BANG_.call(null,out);
var state_38350__$1 = state_38350;
var statearr_38363_38382 = state_38350__$1;
(statearr_38363_38382[(2)] = inst_38344);

(statearr_38363_38382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (10))){
var inst_38342 = (state_38350[(2)]);
var state_38350__$1 = state_38350;
var statearr_38364_38383 = state_38350__$1;
(statearr_38364_38383[(2)] = inst_38342);

(statearr_38364_38383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38351 === (8))){
var inst_38329 = (state_38350[(7)]);
var inst_38331 = (state_38350[(9)]);
var inst_38322 = (state_38350[(10)]);
var inst_38330 = (state_38350[(8)]);
var inst_38334 = (function (){var c = inst_38331;
var v = inst_38330;
var vec__38327 = inst_38329;
var cs = inst_38322;
return ((function (c,v,vec__38327,cs,inst_38329,inst_38331,inst_38322,inst_38330,state_val_38351,c__31040__auto___38374,out){
return (function (p1__38267_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38267_SHARP_);
});
;})(c,v,vec__38327,cs,inst_38329,inst_38331,inst_38322,inst_38330,state_val_38351,c__31040__auto___38374,out))
})();
var inst_38335 = cljs.core.filterv.call(null,inst_38334,inst_38322);
var inst_38322__$1 = inst_38335;
var state_38350__$1 = (function (){var statearr_38365 = state_38350;
(statearr_38365[(10)] = inst_38322__$1);

return statearr_38365;
})();
var statearr_38366_38384 = state_38350__$1;
(statearr_38366_38384[(2)] = null);

(statearr_38366_38384[(1)] = (2));


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
});})(c__31040__auto___38374,out))
;
return ((function (switch__30984__auto__,c__31040__auto___38374,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38370[(0)] = state_machine__30985__auto__);

(statearr_38370[(1)] = (1));

return statearr_38370;
});
var state_machine__30985__auto____1 = (function (state_38350){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38371){if((e38371 instanceof Object)){
var ex__30988__auto__ = e38371;
var statearr_38372_38385 = state_38350;
(statearr_38372_38385[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38386 = state_38350;
state_38350 = G__38386;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38350){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___38374,out))
})();
var state__31042__auto__ = (function (){var statearr_38373 = f__31041__auto__.call(null);
(statearr_38373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___38374);

return statearr_38373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___38374,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31040__auto___38479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___38479,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___38479,out){
return (function (state_38456){
var state_val_38457 = (state_38456[(1)]);
if((state_val_38457 === (7))){
var inst_38438 = (state_38456[(7)]);
var inst_38438__$1 = (state_38456[(2)]);
var inst_38439 = (inst_38438__$1 == null);
var inst_38440 = cljs.core.not.call(null,inst_38439);
var state_38456__$1 = (function (){var statearr_38458 = state_38456;
(statearr_38458[(7)] = inst_38438__$1);

return statearr_38458;
})();
if(inst_38440){
var statearr_38459_38480 = state_38456__$1;
(statearr_38459_38480[(1)] = (8));

} else {
var statearr_38460_38481 = state_38456__$1;
(statearr_38460_38481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (1))){
var inst_38433 = (0);
var state_38456__$1 = (function (){var statearr_38461 = state_38456;
(statearr_38461[(8)] = inst_38433);

return statearr_38461;
})();
var statearr_38462_38482 = state_38456__$1;
(statearr_38462_38482[(2)] = null);

(statearr_38462_38482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (4))){
var state_38456__$1 = state_38456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38456__$1,(7),ch);
} else {
if((state_val_38457 === (6))){
var inst_38451 = (state_38456[(2)]);
var state_38456__$1 = state_38456;
var statearr_38463_38483 = state_38456__$1;
(statearr_38463_38483[(2)] = inst_38451);

(statearr_38463_38483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (3))){
var inst_38453 = (state_38456[(2)]);
var inst_38454 = cljs.core.async.close_BANG_.call(null,out);
var state_38456__$1 = (function (){var statearr_38464 = state_38456;
(statearr_38464[(9)] = inst_38453);

return statearr_38464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38456__$1,inst_38454);
} else {
if((state_val_38457 === (2))){
var inst_38433 = (state_38456[(8)]);
var inst_38435 = (inst_38433 < n);
var state_38456__$1 = state_38456;
if(cljs.core.truth_(inst_38435)){
var statearr_38465_38484 = state_38456__$1;
(statearr_38465_38484[(1)] = (4));

} else {
var statearr_38466_38485 = state_38456__$1;
(statearr_38466_38485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (11))){
var inst_38433 = (state_38456[(8)]);
var inst_38443 = (state_38456[(2)]);
var inst_38444 = (inst_38433 + (1));
var inst_38433__$1 = inst_38444;
var state_38456__$1 = (function (){var statearr_38467 = state_38456;
(statearr_38467[(8)] = inst_38433__$1);

(statearr_38467[(10)] = inst_38443);

return statearr_38467;
})();
var statearr_38468_38486 = state_38456__$1;
(statearr_38468_38486[(2)] = null);

(statearr_38468_38486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (9))){
var state_38456__$1 = state_38456;
var statearr_38469_38487 = state_38456__$1;
(statearr_38469_38487[(2)] = null);

(statearr_38469_38487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (5))){
var state_38456__$1 = state_38456;
var statearr_38470_38488 = state_38456__$1;
(statearr_38470_38488[(2)] = null);

(statearr_38470_38488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (10))){
var inst_38448 = (state_38456[(2)]);
var state_38456__$1 = state_38456;
var statearr_38471_38489 = state_38456__$1;
(statearr_38471_38489[(2)] = inst_38448);

(statearr_38471_38489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38457 === (8))){
var inst_38438 = (state_38456[(7)]);
var state_38456__$1 = state_38456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38456__$1,(11),out,inst_38438);
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
});})(c__31040__auto___38479,out))
;
return ((function (switch__30984__auto__,c__31040__auto___38479,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38475[(0)] = state_machine__30985__auto__);

(statearr_38475[(1)] = (1));

return statearr_38475;
});
var state_machine__30985__auto____1 = (function (state_38456){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38476){if((e38476 instanceof Object)){
var ex__30988__auto__ = e38476;
var statearr_38477_38490 = state_38456;
(statearr_38477_38490[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38491 = state_38456;
state_38456 = G__38491;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38456){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___38479,out))
})();
var state__31042__auto__ = (function (){var statearr_38478 = f__31041__auto__.call(null);
(statearr_38478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___38479);

return statearr_38478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___38479,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t38499 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38499 = (function (ch,f,map_LT_,meta38500){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38500 = meta38500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38502 = (function (fn1,_,meta38500,map_LT_,f,ch,meta38503){
this.fn1 = fn1;
this._ = _;
this.meta38500 = meta38500;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38503 = meta38503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38492_SHARP_){
return f1.call(null,(((p1__38492_SHARP_ == null))?null:self__.f.call(null,p1__38492_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38504){
var self__ = this;
var _38504__$1 = this;
return self__.meta38503;
});})(___$1))
;

cljs.core.async.t38502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38504,meta38503__$1){
var self__ = this;
var _38504__$1 = this;
return (new cljs.core.async.t38502(self__.fn1,self__._,self__.meta38500,self__.map_LT_,self__.f,self__.ch,meta38503__$1));
});})(___$1))
;

cljs.core.async.t38502.cljs$lang$type = true;

cljs.core.async.t38502.cljs$lang$ctorStr = "cljs.core.async/t38502";

cljs.core.async.t38502.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t38502");
});})(___$1))
;

cljs.core.async.__GT_t38502 = ((function (___$1){
return (function __GT_t38502(fn1__$1,___$2,meta38500__$1,map_LT___$1,f__$1,ch__$1,meta38503){
return (new cljs.core.async.t38502(fn1__$1,___$2,meta38500__$1,map_LT___$1,f__$1,ch__$1,meta38503));
});})(___$1))
;

}

return (new cljs.core.async.t38502(fn1,___$1,self__.meta38500,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14429__auto__ = ret;
if(cljs.core.truth_(and__14429__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__14429__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38499.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38501){
var self__ = this;
var _38501__$1 = this;
return self__.meta38500;
});

cljs.core.async.t38499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38501,meta38500__$1){
var self__ = this;
var _38501__$1 = this;
return (new cljs.core.async.t38499(self__.ch,self__.f,self__.map_LT_,meta38500__$1));
});

cljs.core.async.t38499.cljs$lang$type = true;

cljs.core.async.t38499.cljs$lang$ctorStr = "cljs.core.async/t38499";

cljs.core.async.t38499.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t38499");
});

cljs.core.async.__GT_t38499 = (function __GT_t38499(ch__$1,f__$1,map_LT___$1,meta38500){
return (new cljs.core.async.t38499(ch__$1,f__$1,map_LT___$1,meta38500));
});

}

return (new cljs.core.async.t38499(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t38508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38508 = (function (ch,f,map_GT_,meta38509){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38509 = meta38509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38508.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38508.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38508.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38510){
var self__ = this;
var _38510__$1 = this;
return self__.meta38509;
});

cljs.core.async.t38508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38510,meta38509__$1){
var self__ = this;
var _38510__$1 = this;
return (new cljs.core.async.t38508(self__.ch,self__.f,self__.map_GT_,meta38509__$1));
});

cljs.core.async.t38508.cljs$lang$type = true;

cljs.core.async.t38508.cljs$lang$ctorStr = "cljs.core.async/t38508";

cljs.core.async.t38508.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t38508");
});

cljs.core.async.__GT_t38508 = (function __GT_t38508(ch__$1,f__$1,map_GT___$1,meta38509){
return (new cljs.core.async.t38508(ch__$1,f__$1,map_GT___$1,meta38509));
});

}

return (new cljs.core.async.t38508(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t38514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38514 = (function (ch,p,filter_GT_,meta38515){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38515 = meta38515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38516){
var self__ = this;
var _38516__$1 = this;
return self__.meta38515;
});

cljs.core.async.t38514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38516,meta38515__$1){
var self__ = this;
var _38516__$1 = this;
return (new cljs.core.async.t38514(self__.ch,self__.p,self__.filter_GT_,meta38515__$1));
});

cljs.core.async.t38514.cljs$lang$type = true;

cljs.core.async.t38514.cljs$lang$ctorStr = "cljs.core.async/t38514";

cljs.core.async.t38514.cljs$lang$ctorPrWriter = (function (this__15028__auto__,writer__15029__auto__,opt__15030__auto__){
return cljs.core._write.call(null,writer__15029__auto__,"cljs.core.async/t38514");
});

cljs.core.async.__GT_t38514 = (function __GT_t38514(ch__$1,p__$1,filter_GT___$1,meta38515){
return (new cljs.core.async.t38514(ch__$1,p__$1,filter_GT___$1,meta38515));
});

}

return (new cljs.core.async.t38514(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31040__auto___38599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___38599,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___38599,out){
return (function (state_38578){
var state_val_38579 = (state_38578[(1)]);
if((state_val_38579 === (7))){
var inst_38574 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38580_38600 = state_38578__$1;
(statearr_38580_38600[(2)] = inst_38574);

(statearr_38580_38600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (1))){
var state_38578__$1 = state_38578;
var statearr_38581_38601 = state_38578__$1;
(statearr_38581_38601[(2)] = null);

(statearr_38581_38601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (4))){
var inst_38560 = (state_38578[(7)]);
var inst_38560__$1 = (state_38578[(2)]);
var inst_38561 = (inst_38560__$1 == null);
var state_38578__$1 = (function (){var statearr_38582 = state_38578;
(statearr_38582[(7)] = inst_38560__$1);

return statearr_38582;
})();
if(cljs.core.truth_(inst_38561)){
var statearr_38583_38602 = state_38578__$1;
(statearr_38583_38602[(1)] = (5));

} else {
var statearr_38584_38603 = state_38578__$1;
(statearr_38584_38603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (6))){
var inst_38560 = (state_38578[(7)]);
var inst_38565 = p.call(null,inst_38560);
var state_38578__$1 = state_38578;
if(cljs.core.truth_(inst_38565)){
var statearr_38585_38604 = state_38578__$1;
(statearr_38585_38604[(1)] = (8));

} else {
var statearr_38586_38605 = state_38578__$1;
(statearr_38586_38605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (3))){
var inst_38576 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38578__$1,inst_38576);
} else {
if((state_val_38579 === (2))){
var state_38578__$1 = state_38578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38578__$1,(4),ch);
} else {
if((state_val_38579 === (11))){
var inst_38568 = (state_38578[(2)]);
var state_38578__$1 = state_38578;
var statearr_38587_38606 = state_38578__$1;
(statearr_38587_38606[(2)] = inst_38568);

(statearr_38587_38606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (9))){
var state_38578__$1 = state_38578;
var statearr_38588_38607 = state_38578__$1;
(statearr_38588_38607[(2)] = null);

(statearr_38588_38607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (5))){
var inst_38563 = cljs.core.async.close_BANG_.call(null,out);
var state_38578__$1 = state_38578;
var statearr_38589_38608 = state_38578__$1;
(statearr_38589_38608[(2)] = inst_38563);

(statearr_38589_38608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (10))){
var inst_38571 = (state_38578[(2)]);
var state_38578__$1 = (function (){var statearr_38590 = state_38578;
(statearr_38590[(8)] = inst_38571);

return statearr_38590;
})();
var statearr_38591_38609 = state_38578__$1;
(statearr_38591_38609[(2)] = null);

(statearr_38591_38609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38579 === (8))){
var inst_38560 = (state_38578[(7)]);
var state_38578__$1 = state_38578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38578__$1,(11),out,inst_38560);
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
});})(c__31040__auto___38599,out))
;
return ((function (switch__30984__auto__,c__31040__auto___38599,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38595 = [null,null,null,null,null,null,null,null,null];
(statearr_38595[(0)] = state_machine__30985__auto__);

(statearr_38595[(1)] = (1));

return statearr_38595;
});
var state_machine__30985__auto____1 = (function (state_38578){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38596){if((e38596 instanceof Object)){
var ex__30988__auto__ = e38596;
var statearr_38597_38610 = state_38578;
(statearr_38597_38610[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38611 = state_38578;
state_38578 = G__38611;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38578){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___38599,out))
})();
var state__31042__auto__ = (function (){var statearr_38598 = f__31041__auto__.call(null);
(statearr_38598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___38599);

return statearr_38598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___38599,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__31040__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto__){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto__){
return (function (state_38777){
var state_val_38778 = (state_38777[(1)]);
if((state_val_38778 === (7))){
var inst_38773 = (state_38777[(2)]);
var state_38777__$1 = state_38777;
var statearr_38779_38820 = state_38777__$1;
(statearr_38779_38820[(2)] = inst_38773);

(statearr_38779_38820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (20))){
var inst_38743 = (state_38777[(7)]);
var inst_38754 = (state_38777[(2)]);
var inst_38755 = cljs.core.next.call(null,inst_38743);
var inst_38729 = inst_38755;
var inst_38730 = null;
var inst_38731 = (0);
var inst_38732 = (0);
var state_38777__$1 = (function (){var statearr_38780 = state_38777;
(statearr_38780[(8)] = inst_38754);

(statearr_38780[(9)] = inst_38731);

(statearr_38780[(10)] = inst_38729);

(statearr_38780[(11)] = inst_38732);

(statearr_38780[(12)] = inst_38730);

return statearr_38780;
})();
var statearr_38781_38821 = state_38777__$1;
(statearr_38781_38821[(2)] = null);

(statearr_38781_38821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (1))){
var state_38777__$1 = state_38777;
var statearr_38782_38822 = state_38777__$1;
(statearr_38782_38822[(2)] = null);

(statearr_38782_38822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (4))){
var inst_38718 = (state_38777[(13)]);
var inst_38718__$1 = (state_38777[(2)]);
var inst_38719 = (inst_38718__$1 == null);
var state_38777__$1 = (function (){var statearr_38783 = state_38777;
(statearr_38783[(13)] = inst_38718__$1);

return statearr_38783;
})();
if(cljs.core.truth_(inst_38719)){
var statearr_38784_38823 = state_38777__$1;
(statearr_38784_38823[(1)] = (5));

} else {
var statearr_38785_38824 = state_38777__$1;
(statearr_38785_38824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (15))){
var state_38777__$1 = state_38777;
var statearr_38789_38825 = state_38777__$1;
(statearr_38789_38825[(2)] = null);

(statearr_38789_38825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (21))){
var state_38777__$1 = state_38777;
var statearr_38790_38826 = state_38777__$1;
(statearr_38790_38826[(2)] = null);

(statearr_38790_38826[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (13))){
var inst_38731 = (state_38777[(9)]);
var inst_38729 = (state_38777[(10)]);
var inst_38732 = (state_38777[(11)]);
var inst_38730 = (state_38777[(12)]);
var inst_38739 = (state_38777[(2)]);
var inst_38740 = (inst_38732 + (1));
var tmp38786 = inst_38731;
var tmp38787 = inst_38729;
var tmp38788 = inst_38730;
var inst_38729__$1 = tmp38787;
var inst_38730__$1 = tmp38788;
var inst_38731__$1 = tmp38786;
var inst_38732__$1 = inst_38740;
var state_38777__$1 = (function (){var statearr_38791 = state_38777;
(statearr_38791[(14)] = inst_38739);

(statearr_38791[(9)] = inst_38731__$1);

(statearr_38791[(10)] = inst_38729__$1);

(statearr_38791[(11)] = inst_38732__$1);

(statearr_38791[(12)] = inst_38730__$1);

return statearr_38791;
})();
var statearr_38792_38827 = state_38777__$1;
(statearr_38792_38827[(2)] = null);

(statearr_38792_38827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (22))){
var state_38777__$1 = state_38777;
var statearr_38793_38828 = state_38777__$1;
(statearr_38793_38828[(2)] = null);

(statearr_38793_38828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (6))){
var inst_38718 = (state_38777[(13)]);
var inst_38727 = f.call(null,inst_38718);
var inst_38728 = cljs.core.seq.call(null,inst_38727);
var inst_38729 = inst_38728;
var inst_38730 = null;
var inst_38731 = (0);
var inst_38732 = (0);
var state_38777__$1 = (function (){var statearr_38794 = state_38777;
(statearr_38794[(9)] = inst_38731);

(statearr_38794[(10)] = inst_38729);

(statearr_38794[(11)] = inst_38732);

(statearr_38794[(12)] = inst_38730);

return statearr_38794;
})();
var statearr_38795_38829 = state_38777__$1;
(statearr_38795_38829[(2)] = null);

(statearr_38795_38829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (17))){
var inst_38743 = (state_38777[(7)]);
var inst_38747 = cljs.core.chunk_first.call(null,inst_38743);
var inst_38748 = cljs.core.chunk_rest.call(null,inst_38743);
var inst_38749 = cljs.core.count.call(null,inst_38747);
var inst_38729 = inst_38748;
var inst_38730 = inst_38747;
var inst_38731 = inst_38749;
var inst_38732 = (0);
var state_38777__$1 = (function (){var statearr_38796 = state_38777;
(statearr_38796[(9)] = inst_38731);

(statearr_38796[(10)] = inst_38729);

(statearr_38796[(11)] = inst_38732);

(statearr_38796[(12)] = inst_38730);

return statearr_38796;
})();
var statearr_38797_38830 = state_38777__$1;
(statearr_38797_38830[(2)] = null);

(statearr_38797_38830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (3))){
var inst_38775 = (state_38777[(2)]);
var state_38777__$1 = state_38777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38777__$1,inst_38775);
} else {
if((state_val_38778 === (12))){
var inst_38763 = (state_38777[(2)]);
var state_38777__$1 = state_38777;
var statearr_38798_38831 = state_38777__$1;
(statearr_38798_38831[(2)] = inst_38763);

(statearr_38798_38831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (2))){
var state_38777__$1 = state_38777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38777__$1,(4),in$);
} else {
if((state_val_38778 === (23))){
var inst_38771 = (state_38777[(2)]);
var state_38777__$1 = state_38777;
var statearr_38799_38832 = state_38777__$1;
(statearr_38799_38832[(2)] = inst_38771);

(statearr_38799_38832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (19))){
var inst_38758 = (state_38777[(2)]);
var state_38777__$1 = state_38777;
var statearr_38800_38833 = state_38777__$1;
(statearr_38800_38833[(2)] = inst_38758);

(statearr_38800_38833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (11))){
var inst_38729 = (state_38777[(10)]);
var inst_38743 = (state_38777[(7)]);
var inst_38743__$1 = cljs.core.seq.call(null,inst_38729);
var state_38777__$1 = (function (){var statearr_38801 = state_38777;
(statearr_38801[(7)] = inst_38743__$1);

return statearr_38801;
})();
if(inst_38743__$1){
var statearr_38802_38834 = state_38777__$1;
(statearr_38802_38834[(1)] = (14));

} else {
var statearr_38803_38835 = state_38777__$1;
(statearr_38803_38835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (9))){
var inst_38765 = (state_38777[(2)]);
var inst_38766 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38777__$1 = (function (){var statearr_38804 = state_38777;
(statearr_38804[(15)] = inst_38765);

return statearr_38804;
})();
if(cljs.core.truth_(inst_38766)){
var statearr_38805_38836 = state_38777__$1;
(statearr_38805_38836[(1)] = (21));

} else {
var statearr_38806_38837 = state_38777__$1;
(statearr_38806_38837[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (5))){
var inst_38721 = cljs.core.async.close_BANG_.call(null,out);
var state_38777__$1 = state_38777;
var statearr_38807_38838 = state_38777__$1;
(statearr_38807_38838[(2)] = inst_38721);

(statearr_38807_38838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (14))){
var inst_38743 = (state_38777[(7)]);
var inst_38745 = cljs.core.chunked_seq_QMARK_.call(null,inst_38743);
var state_38777__$1 = state_38777;
if(inst_38745){
var statearr_38808_38839 = state_38777__$1;
(statearr_38808_38839[(1)] = (17));

} else {
var statearr_38809_38840 = state_38777__$1;
(statearr_38809_38840[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (16))){
var inst_38761 = (state_38777[(2)]);
var state_38777__$1 = state_38777;
var statearr_38810_38841 = state_38777__$1;
(statearr_38810_38841[(2)] = inst_38761);

(statearr_38810_38841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38778 === (10))){
var inst_38732 = (state_38777[(11)]);
var inst_38730 = (state_38777[(12)]);
var inst_38737 = cljs.core._nth.call(null,inst_38730,inst_38732);
var state_38777__$1 = state_38777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38777__$1,(13),out,inst_38737);
} else {
if((state_val_38778 === (18))){
var inst_38743 = (state_38777[(7)]);
var inst_38752 = cljs.core.first.call(null,inst_38743);
var state_38777__$1 = state_38777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38777__$1,(20),out,inst_38752);
} else {
if((state_val_38778 === (8))){
var inst_38731 = (state_38777[(9)]);
var inst_38732 = (state_38777[(11)]);
var inst_38734 = (inst_38732 < inst_38731);
var inst_38735 = inst_38734;
var state_38777__$1 = state_38777;
if(cljs.core.truth_(inst_38735)){
var statearr_38811_38842 = state_38777__$1;
(statearr_38811_38842[(1)] = (10));

} else {
var statearr_38812_38843 = state_38777__$1;
(statearr_38812_38843[(1)] = (11));

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
});})(c__31040__auto__))
;
return ((function (switch__30984__auto__,c__31040__auto__){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38816[(0)] = state_machine__30985__auto__);

(statearr_38816[(1)] = (1));

return statearr_38816;
});
var state_machine__30985__auto____1 = (function (state_38777){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38817){if((e38817 instanceof Object)){
var ex__30988__auto__ = e38817;
var statearr_38818_38844 = state_38777;
(statearr_38818_38844[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38845 = state_38777;
state_38777 = G__38845;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38777){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto__))
})();
var state__31042__auto__ = (function (){var statearr_38819 = f__31041__auto__.call(null);
(statearr_38819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto__);

return statearr_38819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto__))
);

return c__31040__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31040__auto___38942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___38942,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___38942,out){
return (function (state_38917){
var state_val_38918 = (state_38917[(1)]);
if((state_val_38918 === (7))){
var inst_38912 = (state_38917[(2)]);
var state_38917__$1 = state_38917;
var statearr_38919_38943 = state_38917__$1;
(statearr_38919_38943[(2)] = inst_38912);

(statearr_38919_38943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (1))){
var inst_38894 = null;
var state_38917__$1 = (function (){var statearr_38920 = state_38917;
(statearr_38920[(7)] = inst_38894);

return statearr_38920;
})();
var statearr_38921_38944 = state_38917__$1;
(statearr_38921_38944[(2)] = null);

(statearr_38921_38944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (4))){
var inst_38897 = (state_38917[(8)]);
var inst_38897__$1 = (state_38917[(2)]);
var inst_38898 = (inst_38897__$1 == null);
var inst_38899 = cljs.core.not.call(null,inst_38898);
var state_38917__$1 = (function (){var statearr_38922 = state_38917;
(statearr_38922[(8)] = inst_38897__$1);

return statearr_38922;
})();
if(inst_38899){
var statearr_38923_38945 = state_38917__$1;
(statearr_38923_38945[(1)] = (5));

} else {
var statearr_38924_38946 = state_38917__$1;
(statearr_38924_38946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (6))){
var state_38917__$1 = state_38917;
var statearr_38925_38947 = state_38917__$1;
(statearr_38925_38947[(2)] = null);

(statearr_38925_38947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (3))){
var inst_38914 = (state_38917[(2)]);
var inst_38915 = cljs.core.async.close_BANG_.call(null,out);
var state_38917__$1 = (function (){var statearr_38926 = state_38917;
(statearr_38926[(9)] = inst_38914);

return statearr_38926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38917__$1,inst_38915);
} else {
if((state_val_38918 === (2))){
var state_38917__$1 = state_38917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38917__$1,(4),ch);
} else {
if((state_val_38918 === (11))){
var inst_38897 = (state_38917[(8)]);
var inst_38906 = (state_38917[(2)]);
var inst_38894 = inst_38897;
var state_38917__$1 = (function (){var statearr_38927 = state_38917;
(statearr_38927[(7)] = inst_38894);

(statearr_38927[(10)] = inst_38906);

return statearr_38927;
})();
var statearr_38928_38948 = state_38917__$1;
(statearr_38928_38948[(2)] = null);

(statearr_38928_38948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (9))){
var inst_38897 = (state_38917[(8)]);
var state_38917__$1 = state_38917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38917__$1,(11),out,inst_38897);
} else {
if((state_val_38918 === (5))){
var inst_38897 = (state_38917[(8)]);
var inst_38894 = (state_38917[(7)]);
var inst_38901 = cljs.core._EQ_.call(null,inst_38897,inst_38894);
var state_38917__$1 = state_38917;
if(inst_38901){
var statearr_38930_38949 = state_38917__$1;
(statearr_38930_38949[(1)] = (8));

} else {
var statearr_38931_38950 = state_38917__$1;
(statearr_38931_38950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (10))){
var inst_38909 = (state_38917[(2)]);
var state_38917__$1 = state_38917;
var statearr_38932_38951 = state_38917__$1;
(statearr_38932_38951[(2)] = inst_38909);

(statearr_38932_38951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (8))){
var inst_38894 = (state_38917[(7)]);
var tmp38929 = inst_38894;
var inst_38894__$1 = tmp38929;
var state_38917__$1 = (function (){var statearr_38933 = state_38917;
(statearr_38933[(7)] = inst_38894__$1);

return statearr_38933;
})();
var statearr_38934_38952 = state_38917__$1;
(statearr_38934_38952[(2)] = null);

(statearr_38934_38952[(1)] = (2));


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
});})(c__31040__auto___38942,out))
;
return ((function (switch__30984__auto__,c__31040__auto___38942,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_38938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38938[(0)] = state_machine__30985__auto__);

(statearr_38938[(1)] = (1));

return statearr_38938;
});
var state_machine__30985__auto____1 = (function (state_38917){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_38917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e38939){if((e38939 instanceof Object)){
var ex__30988__auto__ = e38939;
var statearr_38940_38953 = state_38917;
(statearr_38940_38953[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38954 = state_38917;
state_38917 = G__38954;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_38917){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_38917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___38942,out))
})();
var state__31042__auto__ = (function (){var statearr_38941 = f__31041__auto__.call(null);
(statearr_38941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___38942);

return statearr_38941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___38942,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31040__auto___39089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___39089,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___39089,out){
return (function (state_39059){
var state_val_39060 = (state_39059[(1)]);
if((state_val_39060 === (7))){
var inst_39055 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39061_39090 = state_39059__$1;
(statearr_39061_39090[(2)] = inst_39055);

(statearr_39061_39090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (1))){
var inst_39022 = (new Array(n));
var inst_39023 = inst_39022;
var inst_39024 = (0);
var state_39059__$1 = (function (){var statearr_39062 = state_39059;
(statearr_39062[(7)] = inst_39023);

(statearr_39062[(8)] = inst_39024);

return statearr_39062;
})();
var statearr_39063_39091 = state_39059__$1;
(statearr_39063_39091[(2)] = null);

(statearr_39063_39091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (4))){
var inst_39027 = (state_39059[(9)]);
var inst_39027__$1 = (state_39059[(2)]);
var inst_39028 = (inst_39027__$1 == null);
var inst_39029 = cljs.core.not.call(null,inst_39028);
var state_39059__$1 = (function (){var statearr_39064 = state_39059;
(statearr_39064[(9)] = inst_39027__$1);

return statearr_39064;
})();
if(inst_39029){
var statearr_39065_39092 = state_39059__$1;
(statearr_39065_39092[(1)] = (5));

} else {
var statearr_39066_39093 = state_39059__$1;
(statearr_39066_39093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (15))){
var inst_39049 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39067_39094 = state_39059__$1;
(statearr_39067_39094[(2)] = inst_39049);

(statearr_39067_39094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (13))){
var state_39059__$1 = state_39059;
var statearr_39068_39095 = state_39059__$1;
(statearr_39068_39095[(2)] = null);

(statearr_39068_39095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (6))){
var inst_39024 = (state_39059[(8)]);
var inst_39045 = (inst_39024 > (0));
var state_39059__$1 = state_39059;
if(cljs.core.truth_(inst_39045)){
var statearr_39069_39096 = state_39059__$1;
(statearr_39069_39096[(1)] = (12));

} else {
var statearr_39070_39097 = state_39059__$1;
(statearr_39070_39097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (3))){
var inst_39057 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39059__$1,inst_39057);
} else {
if((state_val_39060 === (12))){
var inst_39023 = (state_39059[(7)]);
var inst_39047 = cljs.core.vec.call(null,inst_39023);
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39059__$1,(15),out,inst_39047);
} else {
if((state_val_39060 === (2))){
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39059__$1,(4),ch);
} else {
if((state_val_39060 === (11))){
var inst_39039 = (state_39059[(2)]);
var inst_39040 = (new Array(n));
var inst_39023 = inst_39040;
var inst_39024 = (0);
var state_39059__$1 = (function (){var statearr_39071 = state_39059;
(statearr_39071[(7)] = inst_39023);

(statearr_39071[(8)] = inst_39024);

(statearr_39071[(10)] = inst_39039);

return statearr_39071;
})();
var statearr_39072_39098 = state_39059__$1;
(statearr_39072_39098[(2)] = null);

(statearr_39072_39098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (9))){
var inst_39023 = (state_39059[(7)]);
var inst_39037 = cljs.core.vec.call(null,inst_39023);
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39059__$1,(11),out,inst_39037);
} else {
if((state_val_39060 === (5))){
var inst_39027 = (state_39059[(9)]);
var inst_39032 = (state_39059[(11)]);
var inst_39023 = (state_39059[(7)]);
var inst_39024 = (state_39059[(8)]);
var inst_39031 = (inst_39023[inst_39024] = inst_39027);
var inst_39032__$1 = (inst_39024 + (1));
var inst_39033 = (inst_39032__$1 < n);
var state_39059__$1 = (function (){var statearr_39073 = state_39059;
(statearr_39073[(12)] = inst_39031);

(statearr_39073[(11)] = inst_39032__$1);

return statearr_39073;
})();
if(cljs.core.truth_(inst_39033)){
var statearr_39074_39099 = state_39059__$1;
(statearr_39074_39099[(1)] = (8));

} else {
var statearr_39075_39100 = state_39059__$1;
(statearr_39075_39100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (14))){
var inst_39052 = (state_39059[(2)]);
var inst_39053 = cljs.core.async.close_BANG_.call(null,out);
var state_39059__$1 = (function (){var statearr_39077 = state_39059;
(statearr_39077[(13)] = inst_39052);

return statearr_39077;
})();
var statearr_39078_39101 = state_39059__$1;
(statearr_39078_39101[(2)] = inst_39053);

(statearr_39078_39101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (10))){
var inst_39043 = (state_39059[(2)]);
var state_39059__$1 = state_39059;
var statearr_39079_39102 = state_39059__$1;
(statearr_39079_39102[(2)] = inst_39043);

(statearr_39079_39102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39060 === (8))){
var inst_39032 = (state_39059[(11)]);
var inst_39023 = (state_39059[(7)]);
var tmp39076 = inst_39023;
var inst_39023__$1 = tmp39076;
var inst_39024 = inst_39032;
var state_39059__$1 = (function (){var statearr_39080 = state_39059;
(statearr_39080[(7)] = inst_39023__$1);

(statearr_39080[(8)] = inst_39024);

return statearr_39080;
})();
var statearr_39081_39103 = state_39059__$1;
(statearr_39081_39103[(2)] = null);

(statearr_39081_39103[(1)] = (2));


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
});})(c__31040__auto___39089,out))
;
return ((function (switch__30984__auto__,c__31040__auto___39089,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_39085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39085[(0)] = state_machine__30985__auto__);

(statearr_39085[(1)] = (1));

return statearr_39085;
});
var state_machine__30985__auto____1 = (function (state_39059){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_39059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e39086){if((e39086 instanceof Object)){
var ex__30988__auto__ = e39086;
var statearr_39087_39104 = state_39059;
(statearr_39087_39104[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39105 = state_39059;
state_39059 = G__39105;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_39059){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_39059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___39089,out))
})();
var state__31042__auto__ = (function (){var statearr_39088 = f__31041__auto__.call(null);
(statearr_39088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___39089);

return statearr_39088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___39089,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31040__auto___39248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31040__auto___39248,out){
return (function (){
var f__31041__auto__ = (function (){var switch__30984__auto__ = ((function (c__31040__auto___39248,out){
return (function (state_39218){
var state_val_39219 = (state_39218[(1)]);
if((state_val_39219 === (7))){
var inst_39214 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39220_39249 = state_39218__$1;
(statearr_39220_39249[(2)] = inst_39214);

(statearr_39220_39249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (1))){
var inst_39177 = [];
var inst_39178 = inst_39177;
var inst_39179 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39218__$1 = (function (){var statearr_39221 = state_39218;
(statearr_39221[(7)] = inst_39179);

(statearr_39221[(8)] = inst_39178);

return statearr_39221;
})();
var statearr_39222_39250 = state_39218__$1;
(statearr_39222_39250[(2)] = null);

(statearr_39222_39250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (4))){
var inst_39182 = (state_39218[(9)]);
var inst_39182__$1 = (state_39218[(2)]);
var inst_39183 = (inst_39182__$1 == null);
var inst_39184 = cljs.core.not.call(null,inst_39183);
var state_39218__$1 = (function (){var statearr_39223 = state_39218;
(statearr_39223[(9)] = inst_39182__$1);

return statearr_39223;
})();
if(inst_39184){
var statearr_39224_39251 = state_39218__$1;
(statearr_39224_39251[(1)] = (5));

} else {
var statearr_39225_39252 = state_39218__$1;
(statearr_39225_39252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (15))){
var inst_39208 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39226_39253 = state_39218__$1;
(statearr_39226_39253[(2)] = inst_39208);

(statearr_39226_39253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (13))){
var state_39218__$1 = state_39218;
var statearr_39227_39254 = state_39218__$1;
(statearr_39227_39254[(2)] = null);

(statearr_39227_39254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (6))){
var inst_39178 = (state_39218[(8)]);
var inst_39203 = inst_39178.length;
var inst_39204 = (inst_39203 > (0));
var state_39218__$1 = state_39218;
if(cljs.core.truth_(inst_39204)){
var statearr_39228_39255 = state_39218__$1;
(statearr_39228_39255[(1)] = (12));

} else {
var statearr_39229_39256 = state_39218__$1;
(statearr_39229_39256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (3))){
var inst_39216 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39218__$1,inst_39216);
} else {
if((state_val_39219 === (12))){
var inst_39178 = (state_39218[(8)]);
var inst_39206 = cljs.core.vec.call(null,inst_39178);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39218__$1,(15),out,inst_39206);
} else {
if((state_val_39219 === (2))){
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39218__$1,(4),ch);
} else {
if((state_val_39219 === (11))){
var inst_39186 = (state_39218[(10)]);
var inst_39182 = (state_39218[(9)]);
var inst_39196 = (state_39218[(2)]);
var inst_39197 = [];
var inst_39198 = inst_39197.push(inst_39182);
var inst_39178 = inst_39197;
var inst_39179 = inst_39186;
var state_39218__$1 = (function (){var statearr_39230 = state_39218;
(statearr_39230[(11)] = inst_39198);

(statearr_39230[(7)] = inst_39179);

(statearr_39230[(12)] = inst_39196);

(statearr_39230[(8)] = inst_39178);

return statearr_39230;
})();
var statearr_39231_39257 = state_39218__$1;
(statearr_39231_39257[(2)] = null);

(statearr_39231_39257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (9))){
var inst_39178 = (state_39218[(8)]);
var inst_39194 = cljs.core.vec.call(null,inst_39178);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39218__$1,(11),out,inst_39194);
} else {
if((state_val_39219 === (5))){
var inst_39179 = (state_39218[(7)]);
var inst_39186 = (state_39218[(10)]);
var inst_39182 = (state_39218[(9)]);
var inst_39186__$1 = f.call(null,inst_39182);
var inst_39187 = cljs.core._EQ_.call(null,inst_39186__$1,inst_39179);
var inst_39188 = cljs.core.keyword_identical_QMARK_.call(null,inst_39179,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39189 = (inst_39187) || (inst_39188);
var state_39218__$1 = (function (){var statearr_39232 = state_39218;
(statearr_39232[(10)] = inst_39186__$1);

return statearr_39232;
})();
if(cljs.core.truth_(inst_39189)){
var statearr_39233_39258 = state_39218__$1;
(statearr_39233_39258[(1)] = (8));

} else {
var statearr_39234_39259 = state_39218__$1;
(statearr_39234_39259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (14))){
var inst_39211 = (state_39218[(2)]);
var inst_39212 = cljs.core.async.close_BANG_.call(null,out);
var state_39218__$1 = (function (){var statearr_39236 = state_39218;
(statearr_39236[(13)] = inst_39211);

return statearr_39236;
})();
var statearr_39237_39260 = state_39218__$1;
(statearr_39237_39260[(2)] = inst_39212);

(statearr_39237_39260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (10))){
var inst_39201 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39238_39261 = state_39218__$1;
(statearr_39238_39261[(2)] = inst_39201);

(statearr_39238_39261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (8))){
var inst_39186 = (state_39218[(10)]);
var inst_39182 = (state_39218[(9)]);
var inst_39178 = (state_39218[(8)]);
var inst_39191 = inst_39178.push(inst_39182);
var tmp39235 = inst_39178;
var inst_39178__$1 = tmp39235;
var inst_39179 = inst_39186;
var state_39218__$1 = (function (){var statearr_39239 = state_39218;
(statearr_39239[(7)] = inst_39179);

(statearr_39239[(14)] = inst_39191);

(statearr_39239[(8)] = inst_39178__$1);

return statearr_39239;
})();
var statearr_39240_39262 = state_39218__$1;
(statearr_39240_39262[(2)] = null);

(statearr_39240_39262[(1)] = (2));


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
});})(c__31040__auto___39248,out))
;
return ((function (switch__30984__auto__,c__31040__auto___39248,out){
return (function() {
var state_machine__30985__auto__ = null;
var state_machine__30985__auto____0 = (function (){
var statearr_39244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39244[(0)] = state_machine__30985__auto__);

(statearr_39244[(1)] = (1));

return statearr_39244;
});
var state_machine__30985__auto____1 = (function (state_39218){
while(true){
var ret_value__30986__auto__ = (function (){try{while(true){
var result__30987__auto__ = switch__30984__auto__.call(null,state_39218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30987__auto__;
}
break;
}
}catch (e39245){if((e39245 instanceof Object)){
var ex__30988__auto__ = e39245;
var statearr_39246_39263 = state_39218;
(statearr_39246_39263[(5)] = ex__30988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39264 = state_39218;
state_39218 = G__39264;
continue;
} else {
return ret_value__30986__auto__;
}
break;
}
});
state_machine__30985__auto__ = function(state_39218){
switch(arguments.length){
case 0:
return state_machine__30985__auto____0.call(this);
case 1:
return state_machine__30985__auto____1.call(this,state_39218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30985__auto____0;
state_machine__30985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30985__auto____1;
return state_machine__30985__auto__;
})()
;})(switch__30984__auto__,c__31040__auto___39248,out))
})();
var state__31042__auto__ = (function (){var statearr_39247 = f__31041__auto__.call(null);
(statearr_39247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31040__auto___39248);

return statearr_39247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31042__auto__);
});})(c__31040__auto___39248,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map