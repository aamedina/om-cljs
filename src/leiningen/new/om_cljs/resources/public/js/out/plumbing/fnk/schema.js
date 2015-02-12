// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__16824__16825__auto__){
var G__21214 = p1__16824__16825__auto__;
if(G__21214){
var bit__15122__auto__ = null;
if(cljs.core.truth_((function (){var or__14441__auto__ = bit__15122__auto__;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return G__21214.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__21214.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21214);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21215_SHARP_){
return (cljs.core.val.call(null,p1__21215_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__21217 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__21217,(0),null);
var v = cljs.core.nth.call(null,vec__21217,(1),null);
var p = vec__21217;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___21223 = schema.utils.use_fn_validation;
var output_schema21218_21224 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema21219_21225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker21220_21226 = schema.core.checker.call(null,input_schema21219_21225);
var output_checker21221_21227 = schema.core.checker.call(null,output_schema21218_21224);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21223,output_schema21218_21224,input_schema21219_21225,input_checker21220_21226,output_checker21221_21227){
return (function unwrap_schema_form_key(G__21222){
var validate__16794__auto__ = ufv___21223.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21222], null);
var temp__4406__auto___21229 = input_checker21220_21226.call(null,args__16795__auto___21228);
if(cljs.core.truth_(temp__4406__auto___21229)){
var error__16796__auto___21230 = temp__4406__auto___21229;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16796__auto___21230)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21230,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21228,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21219_21225,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var k = G__21222;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21231 = output_checker21221_21227.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21231)){
var error__16796__auto___21232 = temp__4406__auto___21231;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16796__auto___21232)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21232,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21218_21224,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21223,output_schema21218_21224,input_schema21219_21225,input_checker21220_21226,output_checker21221_21227))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21218_21224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21219_21225], null)));
var ufv___21238 = schema.utils.use_fn_validation;
var output_schema21233_21239 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema21234_21240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21235_21241 = schema.core.checker.call(null,input_schema21234_21240);
var output_checker21236_21242 = schema.core.checker.call(null,output_schema21233_21239);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21238,output_schema21233_21239,input_schema21234_21240,input_checker21235_21241,output_checker21236_21242){
return (function explicit_schema_key_map(G__21237){
var validate__16794__auto__ = ufv___21238.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21237], null);
var temp__4406__auto___21244 = input_checker21235_21241.call(null,args__16795__auto___21243);
if(cljs.core.truth_(temp__4406__auto___21244)){
var error__16796__auto___21245 = temp__4406__auto___21244;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16796__auto___21245)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21245,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21243,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21234_21240,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var s = G__21237;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21246 = output_checker21236_21242.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21246)){
var error__16796__auto___21247 = temp__4406__auto___21246;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16796__auto___21247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21247,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21233_21239,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21238,output_schema21233_21239,input_schema21234_21240,input_checker21235_21241,output_checker21236_21242))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21233_21239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21234_21240], null)));
var ufv___21253 = schema.utils.use_fn_validation;
var output_schema21248_21254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema21249_21255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21250_21256 = schema.core.checker.call(null,input_schema21249_21255);
var output_checker21251_21257 = schema.core.checker.call(null,output_schema21248_21254);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21253,output_schema21248_21254,input_schema21249_21255,input_checker21250_21256,output_checker21251_21257){
return (function split_schema_keys(G__21252){
var validate__16794__auto__ = ufv___21253.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21252], null);
var temp__4406__auto___21259 = input_checker21250_21256.call(null,args__16795__auto___21258);
if(cljs.core.truth_(temp__4406__auto___21259)){
var error__16796__auto___21260 = temp__4406__auto___21259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16796__auto___21260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21260,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21258,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21249_21255,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var s = G__21252;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21261 = output_checker21251_21257.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21261)){
var error__16796__auto___21262 = temp__4406__auto___21261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16796__auto___21262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21262,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21248_21254,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21253,output_schema21248_21254,input_schema21249_21255,input_checker21250_21256,output_checker21251_21257))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21248_21254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21249_21255], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21266){
var vec__21267 = p__21266;
var k = cljs.core.nth.call(null,vec__21267,(0),null);
var v = cljs.core.nth.call(null,vec__21267,(1),null);
var pk = key_project.call(null,k);
var temp__4404__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__21268 = temp__4404__auto__;
var ok = cljs.core.nth.call(null,vec__21268,(0),null);
var ov = cljs.core.nth.call(null,vec__21268,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__21269__i = 0, G__21269__a = new Array(arguments.length -  3);
while (G__21269__i < G__21269__a.length) {G__21269__a[G__21269__i] = arguments[G__21269__i + 3]; ++G__21269__i;}
  maps = new cljs.core.IndexedSeq(G__21269__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21270){
var key_project = cljs.core.first(arglist__21270);
arglist__21270 = cljs.core.next(arglist__21270);
var key_combine = cljs.core.first(arglist__21270);
arglist__21270 = cljs.core.next(arglist__21270);
var val_combine = cljs.core.first(arglist__21270);
var maps = cljs.core.rest(arglist__21270);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21278 = schema.utils.use_fn_validation;
var output_schema21272_21279 = plumbing.fnk.schema.InputSchema;
var input_schema21273_21280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker21274_21281 = schema.core.checker.call(null,input_schema21273_21280);
var output_checker21275_21282 = schema.core.checker.call(null,output_schema21272_21279);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282){
return (function union_input_schemata(G__21276,G__21277){
var validate__16794__auto__ = ufv___21278.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21276,G__21277], null);
var temp__4406__auto___21284 = input_checker21274_21281.call(null,args__16795__auto___21283);
if(cljs.core.truth_(temp__4406__auto___21284)){
var error__16796__auto___21285 = temp__4406__auto___21284;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16796__auto___21285)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21285,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21283,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21273_21280,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var i1 = G__21276;
var i2 = G__21277;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__16794__auto__,ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282){
return (function (p1__21271_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__21271_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__21271_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__16794__auto__,ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282))
,((function (validate__16794__auto__,ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__16794__auto__,ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282))
,((function (validate__16794__auto__,ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__16794__auto__,ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21286 = output_checker21275_21282.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21286)){
var error__16796__auto___21287 = temp__4406__auto___21286;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16796__auto___21287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21287,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21272_21279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21278,output_schema21272_21279,input_schema21273_21280,input_checker21274_21281,output_checker21275_21282))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21272_21279,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21273_21280], null)));
var ufv___21293 = schema.utils.use_fn_validation;
var output_schema21288_21294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema21289_21295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker21290_21296 = schema.core.checker.call(null,input_schema21289_21295);
var output_checker21291_21297 = schema.core.checker.call(null,output_schema21288_21294);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21293,output_schema21288_21294,input_schema21289_21295,input_checker21290_21296,output_checker21291_21297){
return (function required_toplevel_keys(G__21292){
var validate__16794__auto__ = ufv___21293.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21292], null);
var temp__4406__auto___21299 = input_checker21290_21296.call(null,args__16795__auto___21298);
if(cljs.core.truth_(temp__4406__auto___21299)){
var error__16796__auto___21300 = temp__4406__auto___21299;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16796__auto___21300)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21300,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21298,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21289_21295,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var input_schema = G__21292;
while(true){
return cljs.core.keep.call(null,((function (validate__16794__auto__,ufv___21293,output_schema21288_21294,input_schema21289_21295,input_checker21290_21296,output_checker21291_21297){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__16794__auto__,ufv___21293,output_schema21288_21294,input_schema21289_21295,input_checker21290_21296,output_checker21291_21297))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21301 = output_checker21291_21297.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21301)){
var error__16796__auto___21302 = temp__4406__auto___21301;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16796__auto___21302)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21302,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21288_21294,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21293,output_schema21288_21294,input_schema21289_21295,input_checker21290_21296,output_checker21291_21297))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21288_21294,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21289_21295], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15197__auto__ = (function iter__21311(s__21312){
return (new cljs.core.LazySeq(null,(function (){
var s__21312__$1 = s__21312;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__21312__$1);
if(temp__4406__auto__){
var s__21312__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21312__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__21312__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__21314 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__21313 = (0);
while(true){
if((i__21313 < size__15196__auto__)){
var vec__21317 = cljs.core._nth.call(null,c__15195__auto__,i__21313);
var k = cljs.core.nth.call(null,vec__21317,(0),null);
var v = cljs.core.nth.call(null,vec__21317,(1),null);
cljs.core.chunk_append.call(null,b__21314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__21319 = (i__21313 + (1));
i__21313 = G__21319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21314),iter__21311.call(null,cljs.core.chunk_rest.call(null,s__21312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21314),null);
}
} else {
var vec__21318 = cljs.core.first.call(null,s__21312__$2);
var k = cljs.core.nth.call(null,vec__21318,(0),null);
var v = cljs.core.nth.call(null,vec__21318,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21311.call(null,cljs.core.rest.call(null,s__21312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15197__auto__ = (function iter__21328(s__21329){
return (new cljs.core.LazySeq(null,(function (){
var s__21329__$1 = s__21329;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__21329__$1);
if(temp__4406__auto__){
var s__21329__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21329__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__21329__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__21331 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__21330 = (0);
while(true){
if((i__21330 < size__15196__auto__)){
var vec__21334 = cljs.core._nth.call(null,c__15195__auto__,i__21330);
var k = cljs.core.nth.call(null,vec__21334,(0),null);
var v = cljs.core.nth.call(null,vec__21334,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__21331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__21336 = (i__21330 + (1));
i__21330 = G__21336;
continue;
} else {
var G__21337 = (i__21330 + (1));
i__21330 = G__21337;
continue;
}
} else {
var G__21338 = (i__21330 + (1));
i__21330 = G__21338;
continue;
}
} else {
var G__21339 = (i__21330 + (1));
i__21330 = G__21339;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21331),iter__21328.call(null,cljs.core.chunk_rest.call(null,s__21329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21331),null);
}
} else {
var vec__21335 = cljs.core.first.call(null,s__21329__$2);
var k = cljs.core.nth.call(null,vec__21335,(0),null);
var v = cljs.core.nth.call(null,vec__21335,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21328.call(null,cljs.core.rest.call(null,s__21329__$2)));
} else {
var G__21340 = cljs.core.rest.call(null,s__21329__$2);
s__21329__$1 = G__21340;
continue;
}
} else {
var G__21341 = cljs.core.rest.call(null,s__21329__$2);
s__21329__$1 = G__21341;
continue;
}
} else {
var G__21342 = cljs.core.rest.call(null,s__21329__$2);
s__21329__$1 = G__21342;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15197__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___21365 = schema.utils.use_fn_validation;
var output_schema21343_21366 = schema.core.Any;
var input_schema21344_21367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21345_21368 = schema.core.checker.call(null,input_schema21344_21367);
var output_checker21346_21369 = schema.core.checker.call(null,output_schema21343_21366);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21365,output_schema21343_21366,input_schema21344_21367,input_checker21345_21368,output_checker21346_21369){
return (function compose_schemata(G__21347,G__21348){
var validate__16794__auto__ = true;
if(validate__16794__auto__){
var args__16795__auto___21370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21347,G__21348], null);
var temp__4406__auto___21371 = input_checker21345_21368.call(null,args__16795__auto___21370);
if(cljs.core.truth_(temp__4406__auto___21371)){
var error__16796__auto___21372 = temp__4406__auto___21371;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16796__auto___21372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21372,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21370,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21344_21367,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var G__21359 = G__21347;
var vec__21361 = G__21359;
var i2 = cljs.core.nth.call(null,vec__21361,(0),null);
var o2 = cljs.core.nth.call(null,vec__21361,(1),null);
var G__21360 = G__21348;
var vec__21362 = G__21360;
var i1 = cljs.core.nth.call(null,vec__21362,(0),null);
var o1 = cljs.core.nth.call(null,vec__21362,(1),null);
var G__21359__$1 = G__21359;
var G__21360__$1 = G__21360;
while(true){
var vec__21363 = G__21359__$1;
var i2__$1 = cljs.core.nth.call(null,vec__21363,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__21363,(1),null);
var vec__21364 = G__21360__$1;
var i1__$1 = cljs.core.nth.call(null,vec__21364,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__21364,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__16794__auto__){
var temp__4406__auto___21373 = output_checker21346_21369.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21373)){
var error__16796__auto___21374 = temp__4406__auto___21373;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16796__auto___21374)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21374,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21343_21366,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21365,output_schema21343_21366,input_schema21344_21367,input_checker21345_21368,output_checker21346_21369))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21343_21366,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21344_21367], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___21453 = schema.utils.use_fn_validation;
var output_schema21375_21454 = schema.core.Any;
var input_schema21376_21455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker21377_21456 = schema.core.checker.call(null,input_schema21376_21455);
var output_checker21378_21457 = schema.core.checker.call(null,output_schema21375_21454);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function split_schema(G__21379,G__21380){
var validate__16794__auto__ = ufv___21453.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21379,G__21380], null);
var temp__4406__auto___21459 = input_checker21377_21456.call(null,args__16795__auto___21458);
if(cljs.core.truth_(temp__4406__auto___21459)){
var error__16796__auto___21460 = temp__4406__auto___21459;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16796__auto___21460)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21460,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21458,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21376_21455,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var s = G__21379;
var ks = G__21380;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__15197__auto__ = ((function (ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function iter__21417(s__21418){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function (){
var s__21418__$1 = s__21418;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__21418__$1);
if(temp__4406__auto__){
var s__21418__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21418__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__21418__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__21420 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__21419 = (0);
while(true){
if((i__21419 < size__15196__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__15195__auto__,i__21419);
cljs.core.chunk_append.call(null,b__21420,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15197__auto__ = ((function (i__21419,in_QMARK_,c__15195__auto__,size__15196__auto__,b__21420,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function iter__21437(s__21438){
return (new cljs.core.LazySeq(null,((function (i__21419,in_QMARK_,c__15195__auto__,size__15196__auto__,b__21420,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function (){
var s__21438__$1 = s__21438;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__21438__$1);
if(temp__4406__auto____$1){
var s__21438__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21438__$2)){
var c__15195__auto____$1 = cljs.core.chunk_first.call(null,s__21438__$2);
var size__15196__auto____$1 = cljs.core.count.call(null,c__15195__auto____$1);
var b__21440 = cljs.core.chunk_buffer.call(null,size__15196__auto____$1);
if((function (){var i__21439 = (0);
while(true){
if((i__21439 < size__15196__auto____$1)){
var vec__21443 = cljs.core._nth.call(null,c__15195__auto____$1,i__21439);
var k = cljs.core.nth.call(null,vec__21443,(0),null);
var v = cljs.core.nth.call(null,vec__21443,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__21440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21461 = (i__21439 + (1));
i__21439 = G__21461;
continue;
} else {
var G__21462 = (i__21439 + (1));
i__21439 = G__21462;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21440),iter__21437.call(null,cljs.core.chunk_rest.call(null,s__21438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21440),null);
}
} else {
var vec__21444 = cljs.core.first.call(null,s__21438__$2);
var k = cljs.core.nth.call(null,vec__21444,(0),null);
var v = cljs.core.nth.call(null,vec__21444,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21437.call(null,cljs.core.rest.call(null,s__21438__$2)));
} else {
var G__21463 = cljs.core.rest.call(null,s__21438__$2);
s__21438__$1 = G__21463;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__21419,in_QMARK_,c__15195__auto__,size__15196__auto__,b__21420,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
,null,null));
});})(i__21419,in_QMARK_,c__15195__auto__,size__15196__auto__,b__21420,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
;
return iter__15197__auto__.call(null,s);
})()));

var G__21464 = (i__21419 + (1));
i__21419 = G__21464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21420),iter__21417.call(null,cljs.core.chunk_rest.call(null,s__21418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21420),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__21418__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15197__auto__ = ((function (in_QMARK_,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function iter__21445(s__21446){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457){
return (function (){
var s__21446__$1 = s__21446;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__21446__$1);
if(temp__4406__auto____$1){
var s__21446__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21446__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__21446__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__21448 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__21447 = (0);
while(true){
if((i__21447 < size__15196__auto__)){
var vec__21451 = cljs.core._nth.call(null,c__15195__auto__,i__21447);
var k = cljs.core.nth.call(null,vec__21451,(0),null);
var v = cljs.core.nth.call(null,vec__21451,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__21448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21465 = (i__21447 + (1));
i__21447 = G__21465;
continue;
} else {
var G__21466 = (i__21447 + (1));
i__21447 = G__21466;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21448),iter__21445.call(null,cljs.core.chunk_rest.call(null,s__21446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21448),null);
}
} else {
var vec__21452 = cljs.core.first.call(null,s__21446__$2);
var k = cljs.core.nth.call(null,vec__21452,(0),null);
var v = cljs.core.nth.call(null,vec__21452,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21445.call(null,cljs.core.rest.call(null,s__21446__$2)));
} else {
var G__21467 = cljs.core.rest.call(null,s__21446__$2);
s__21446__$1 = G__21467;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
,null,null));
});})(in_QMARK_,s__21418__$2,temp__4406__auto__,ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
;
return iter__15197__auto__.call(null,s);
})()),iter__21417.call(null,cljs.core.rest.call(null,s__21418__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
,null,null));
});})(ks__$1,validate__16794__auto__,ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
;
return iter__15197__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21468 = output_checker21378_21457.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21468)){
var error__16796__auto___21469 = temp__4406__auto___21468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16796__auto___21469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21469,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21375_21454,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21453,output_schema21375_21454,input_schema21376_21455,input_checker21377_21456,output_checker21378_21457))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21375_21454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21376_21455], null)));
var ufv___21500 = schema.utils.use_fn_validation;
var output_schema21470_21501 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema21471_21502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21472_21503 = schema.core.checker.call(null,input_schema21471_21502);
var output_checker21473_21504 = schema.core.checker.call(null,output_schema21470_21501);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21500,output_schema21470_21501,input_schema21471_21502,input_checker21472_21503,output_checker21473_21504){
return (function sequence_schemata(G__21474,G__21475){
var validate__16794__auto__ = ufv___21500.get_cell();
if(cljs.core.truth_(validate__16794__auto__)){
var args__16795__auto___21505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21474,G__21475], null);
var temp__4406__auto___21506 = input_checker21472_21503.call(null,args__16795__auto___21505);
if(cljs.core.truth_(temp__4406__auto___21506)){
var error__16796__auto___21507 = temp__4406__auto___21506;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16796__auto___21507)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21507,new cljs.core.Keyword(null,"value","value",305978217),args__16795__auto___21505,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21471_21502,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16797__auto__ = (function (){var G__21491 = G__21474;
var vec__21493 = G__21491;
var i1 = cljs.core.nth.call(null,vec__21493,(0),null);
var o1 = cljs.core.nth.call(null,vec__21493,(1),null);
var G__21492 = G__21475;
var vec__21494 = G__21492;
var k = cljs.core.nth.call(null,vec__21494,(0),null);
var vec__21495 = cljs.core.nth.call(null,vec__21494,(1),null);
var i2 = cljs.core.nth.call(null,vec__21495,(0),null);
var o2 = cljs.core.nth.call(null,vec__21495,(1),null);
var G__21491__$1 = G__21491;
var G__21492__$1 = G__21492;
while(true){
var vec__21496 = G__21491__$1;
var i1__$1 = cljs.core.nth.call(null,vec__21496,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__21496,(1),null);
var vec__21497 = G__21492__$1;
var k__$1 = cljs.core.nth.call(null,vec__21497,(0),null);
var vec__21498 = cljs.core.nth.call(null,vec__21497,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__21498,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__21498,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__21499 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__21499,(0),null);
var unused = cljs.core.nth.call(null,vec__21499,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__16794__auto__)){
var temp__4406__auto___21508 = output_checker21473_21504.call(null,o__16797__auto__);
if(cljs.core.truth_(temp__4406__auto___21508)){
var error__16796__auto___21509 = temp__4406__auto___21508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16796__auto___21509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16796__auto___21509,new cljs.core.Keyword(null,"value","value",305978217),o__16797__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21470_21501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16797__auto__;
});})(ufv___21500,output_schema21470_21501,input_schema21471_21502,input_checker21472_21503,output_checker21473_21504))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21470_21501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21471_21502], null)));

//# sourceMappingURL=schema.js.map