// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__21833__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__21833 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__21834__i = 0, G__21834__a = new Array(arguments.length -  5);
while (G__21834__i < G__21834__a.length) {G__21834__a[G__21834__i] = arguments[G__21834__i + 5]; ++G__21834__i;}
  xs = new cljs.core.IndexedSeq(G__21834__a,0);
} 
return G__21833__delegate.call(this,m,k,f,x1,x2,xs);};
G__21833.cljs$lang$maxFixedArity = 5;
G__21833.cljs$lang$applyTo = (function (arglist__21835){
var m = cljs.core.first(arglist__21835);
arglist__21835 = cljs.core.next(arglist__21835);
var k = cljs.core.first(arglist__21835);
arglist__21835 = cljs.core.next(arglist__21835);
var f = cljs.core.first(arglist__21835);
arglist__21835 = cljs.core.next(arglist__21835);
var x1 = cljs.core.first(arglist__21835);
arglist__21835 = cljs.core.next(arglist__21835);
var x2 = cljs.core.first(arglist__21835);
var xs = cljs.core.rest(arglist__21835);
return G__21833__delegate(m,k,f,x1,x2,xs);
});
G__21833.cljs$core$IFn$_invoke$arity$variadic = G__21833__delegate;
return G__21833;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
var G__21836 = null;
if (arguments.length > 5) {
var G__21837__i = 0, G__21837__a = new Array(arguments.length -  5);
while (G__21837__i < G__21837__a.length) {G__21837__a[G__21837__i] = arguments[G__21837__i + 5]; ++G__21837__i;}
G__21836 = new cljs.core.IndexedSeq(G__21837__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__21836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__18728__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21846_21852 = cljs.core.seq.call(null,m);
var chunk__21847_21853 = null;
var count__21848_21854 = (0);
var i__21849_21855 = (0);
while(true){
if((i__21849_21855 < count__21848_21854)){
var vec__21850_21856 = cljs.core._nth.call(null,chunk__21847_21853,i__21849_21855);
var k_21857 = cljs.core.nth.call(null,vec__21850_21856,(0),null);
var v_21858 = cljs.core.nth.call(null,vec__21850_21856,(1),null);
var m21845_21859 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21845_21859,k_21857,f.call(null,v_21858)));

var G__21860 = seq__21846_21852;
var G__21861 = chunk__21847_21853;
var G__21862 = count__21848_21854;
var G__21863 = (i__21849_21855 + (1));
seq__21846_21852 = G__21860;
chunk__21847_21853 = G__21861;
count__21848_21854 = G__21862;
i__21849_21855 = G__21863;
continue;
} else {
var temp__4406__auto___21864 = cljs.core.seq.call(null,seq__21846_21852);
if(temp__4406__auto___21864){
var seq__21846_21865__$1 = temp__4406__auto___21864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21846_21865__$1)){
var c__15228__auto___21866 = cljs.core.chunk_first.call(null,seq__21846_21865__$1);
var G__21867 = cljs.core.chunk_rest.call(null,seq__21846_21865__$1);
var G__21868 = c__15228__auto___21866;
var G__21869 = cljs.core.count.call(null,c__15228__auto___21866);
var G__21870 = (0);
seq__21846_21852 = G__21867;
chunk__21847_21853 = G__21868;
count__21848_21854 = G__21869;
i__21849_21855 = G__21870;
continue;
} else {
var vec__21851_21871 = cljs.core.first.call(null,seq__21846_21865__$1);
var k_21872 = cljs.core.nth.call(null,vec__21851_21871,(0),null);
var v_21873 = cljs.core.nth.call(null,vec__21851_21871,(1),null);
var m21845_21874 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21845_21874,k_21872,f.call(null,v_21873)));

var G__21875 = cljs.core.next.call(null,seq__21846_21865__$1);
var G__21876 = null;
var G__21877 = (0);
var G__21878 = (0);
seq__21846_21852 = G__21875;
chunk__21847_21853 = G__21876;
count__21848_21854 = G__21877;
i__21849_21855 = G__21878;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18728__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__18728__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21887_21893 = cljs.core.seq.call(null,m);
var chunk__21888_21894 = null;
var count__21889_21895 = (0);
var i__21890_21896 = (0);
while(true){
if((i__21890_21896 < count__21889_21895)){
var vec__21891_21897 = cljs.core._nth.call(null,chunk__21888_21894,i__21890_21896);
var k_21898 = cljs.core.nth.call(null,vec__21891_21897,(0),null);
var v_21899 = cljs.core.nth.call(null,vec__21891_21897,(1),null);
var m21886_21900 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21886_21900,f.call(null,k_21898),v_21899));

var G__21901 = seq__21887_21893;
var G__21902 = chunk__21888_21894;
var G__21903 = count__21889_21895;
var G__21904 = (i__21890_21896 + (1));
seq__21887_21893 = G__21901;
chunk__21888_21894 = G__21902;
count__21889_21895 = G__21903;
i__21890_21896 = G__21904;
continue;
} else {
var temp__4406__auto___21905 = cljs.core.seq.call(null,seq__21887_21893);
if(temp__4406__auto___21905){
var seq__21887_21906__$1 = temp__4406__auto___21905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21887_21906__$1)){
var c__15228__auto___21907 = cljs.core.chunk_first.call(null,seq__21887_21906__$1);
var G__21908 = cljs.core.chunk_rest.call(null,seq__21887_21906__$1);
var G__21909 = c__15228__auto___21907;
var G__21910 = cljs.core.count.call(null,c__15228__auto___21907);
var G__21911 = (0);
seq__21887_21893 = G__21908;
chunk__21888_21894 = G__21909;
count__21889_21895 = G__21910;
i__21890_21896 = G__21911;
continue;
} else {
var vec__21892_21912 = cljs.core.first.call(null,seq__21887_21906__$1);
var k_21913 = cljs.core.nth.call(null,vec__21892_21912,(0),null);
var v_21914 = cljs.core.nth.call(null,vec__21892_21912,(1),null);
var m21886_21915 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21886_21915,f.call(null,k_21913),v_21914));

var G__21916 = cljs.core.next.call(null,seq__21887_21906__$1);
var G__21917 = null;
var G__21918 = (0);
var G__21919 = (0);
seq__21887_21893 = G__21916;
chunk__21888_21894 = G__21917;
count__21889_21895 = G__21918;
i__21890_21896 = G__21919;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18728__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__18728__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21926_21930 = cljs.core.seq.call(null,ks);
var chunk__21927_21931 = null;
var count__21928_21932 = (0);
var i__21929_21933 = (0);
while(true){
if((i__21929_21933 < count__21928_21932)){
var k_21934 = cljs.core._nth.call(null,chunk__21927_21931,i__21929_21933);
var m21925_21935 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21925_21935,k_21934,f.call(null,k_21934)));

var G__21936 = seq__21926_21930;
var G__21937 = chunk__21927_21931;
var G__21938 = count__21928_21932;
var G__21939 = (i__21929_21933 + (1));
seq__21926_21930 = G__21936;
chunk__21927_21931 = G__21937;
count__21928_21932 = G__21938;
i__21929_21933 = G__21939;
continue;
} else {
var temp__4406__auto___21940 = cljs.core.seq.call(null,seq__21926_21930);
if(temp__4406__auto___21940){
var seq__21926_21941__$1 = temp__4406__auto___21940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21926_21941__$1)){
var c__15228__auto___21942 = cljs.core.chunk_first.call(null,seq__21926_21941__$1);
var G__21943 = cljs.core.chunk_rest.call(null,seq__21926_21941__$1);
var G__21944 = c__15228__auto___21942;
var G__21945 = cljs.core.count.call(null,c__15228__auto___21942);
var G__21946 = (0);
seq__21926_21930 = G__21943;
chunk__21927_21931 = G__21944;
count__21928_21932 = G__21945;
i__21929_21933 = G__21946;
continue;
} else {
var k_21947 = cljs.core.first.call(null,seq__21926_21941__$1);
var m21925_21948 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21925_21948,k_21947,f.call(null,k_21947)));

var G__21949 = cljs.core.next.call(null,seq__21926_21941__$1);
var G__21950 = null;
var G__21951 = (0);
var G__21952 = (0);
seq__21926_21930 = G__21949;
chunk__21927_21931 = G__21950;
count__21928_21932 = G__21951;
i__21929_21933 = G__21952;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18728__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__18728__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21959_21963 = cljs.core.seq.call(null,vs);
var chunk__21960_21964 = null;
var count__21961_21965 = (0);
var i__21962_21966 = (0);
while(true){
if((i__21962_21966 < count__21961_21965)){
var v_21967 = cljs.core._nth.call(null,chunk__21960_21964,i__21962_21966);
var m21958_21968 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21958_21968,f.call(null,v_21967),v_21967));

var G__21969 = seq__21959_21963;
var G__21970 = chunk__21960_21964;
var G__21971 = count__21961_21965;
var G__21972 = (i__21962_21966 + (1));
seq__21959_21963 = G__21969;
chunk__21960_21964 = G__21970;
count__21961_21965 = G__21971;
i__21962_21966 = G__21972;
continue;
} else {
var temp__4406__auto___21973 = cljs.core.seq.call(null,seq__21959_21963);
if(temp__4406__auto___21973){
var seq__21959_21974__$1 = temp__4406__auto___21973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21959_21974__$1)){
var c__15228__auto___21975 = cljs.core.chunk_first.call(null,seq__21959_21974__$1);
var G__21976 = cljs.core.chunk_rest.call(null,seq__21959_21974__$1);
var G__21977 = c__15228__auto___21975;
var G__21978 = cljs.core.count.call(null,c__15228__auto___21975);
var G__21979 = (0);
seq__21959_21963 = G__21976;
chunk__21960_21964 = G__21977;
count__21961_21965 = G__21978;
i__21962_21966 = G__21979;
continue;
} else {
var v_21980 = cljs.core.first.call(null,seq__21959_21974__$1);
var m21958_21981 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21958_21981,f.call(null,v_21980),v_21980));

var G__21982 = cljs.core.next.call(null,seq__21959_21974__$1);
var G__21983 = null;
var G__21984 = (0);
var G__21985 = (0);
seq__21959_21963 = G__21982;
chunk__21960_21964 = G__21983;
count__21961_21965 = G__21984;
i__21962_21966 = G__21985;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18728__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__21986){
var vec__21988 = p__21986;
var k = cljs.core.nth.call(null,vec__21988,(0),null);
var ks = cljs.core.nthnext.call(null,vec__21988,(1));
if(cljs.core.truth_(m)){
var temp__4404__auto__ = (function (){var and__14429__auto__ = ks;
if(and__14429__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__14429__auto__;
}
})();
if(cljs.core.truth_(temp__4404__auto__)){
var res = temp__4404__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__18728__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__21997_22003 = cljs.core.seq.call(null,x);
var chunk__21998_22004 = null;
var count__21999_22005 = (0);
var i__22000_22006 = (0);
while(true){
if((i__22000_22006 < count__21999_22005)){
var vec__22001_22007 = cljs.core._nth.call(null,chunk__21998_22004,i__22000_22006);
var k_22008 = cljs.core.nth.call(null,vec__22001_22007,(0),null);
var v_22009 = cljs.core.nth.call(null,vec__22001_22007,(1),null);
var m21996_22010 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21996_22010,((typeof k_22008 === 'string')?cljs.core.keyword.call(null,k_22008):k_22008),keywordize_map.call(null,v_22009)));

var G__22011 = seq__21997_22003;
var G__22012 = chunk__21998_22004;
var G__22013 = count__21999_22005;
var G__22014 = (i__22000_22006 + (1));
seq__21997_22003 = G__22011;
chunk__21998_22004 = G__22012;
count__21999_22005 = G__22013;
i__22000_22006 = G__22014;
continue;
} else {
var temp__4406__auto___22015 = cljs.core.seq.call(null,seq__21997_22003);
if(temp__4406__auto___22015){
var seq__21997_22016__$1 = temp__4406__auto___22015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21997_22016__$1)){
var c__15228__auto___22017 = cljs.core.chunk_first.call(null,seq__21997_22016__$1);
var G__22018 = cljs.core.chunk_rest.call(null,seq__21997_22016__$1);
var G__22019 = c__15228__auto___22017;
var G__22020 = cljs.core.count.call(null,c__15228__auto___22017);
var G__22021 = (0);
seq__21997_22003 = G__22018;
chunk__21998_22004 = G__22019;
count__21999_22005 = G__22020;
i__22000_22006 = G__22021;
continue;
} else {
var vec__22002_22022 = cljs.core.first.call(null,seq__21997_22016__$1);
var k_22023 = cljs.core.nth.call(null,vec__22002_22022,(0),null);
var v_22024 = cljs.core.nth.call(null,vec__22002_22022,(1),null);
var m21996_22025 = cljs.core.deref.call(null,m_atom__18728__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18728__auto__,cljs.core.assoc_BANG_.call(null,m21996_22025,((typeof k_22023 === 'string')?cljs.core.keyword.call(null,k_22023):k_22023),keywordize_map.call(null,v_22024)));

var G__22026 = cljs.core.next.call(null,seq__21997_22016__$1);
var G__22027 = null;
var G__22028 = (0);
var G__22029 = (0);
seq__21997_22003 = G__22026;
chunk__21998_22004 = G__22027;
count__21999_22005 = G__22028;
i__22000_22006 = G__22029;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18728__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4404__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4404__auto__)){
var pair__18797__auto__ = temp__4404__auto__;
return cljs.core.val.call(null,pair__18797__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__22030 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22031 = cljs.core.next.call(null,ks);
m = G__22030;
ks = G__22031;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__14441__auto__ = m;
if(cljs.core.truth_(or__14441__auto__)){
return or__14441__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__15197__auto__ = (function iter__22040(s__22041){
return (new cljs.core.LazySeq(null,(function (){
var s__22041__$1 = s__22041;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__22041__$1);
if(temp__4406__auto__){
var s__22041__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22041__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__22041__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__22043 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__22042 = (0);
while(true){
if((i__22042 < size__15196__auto__)){
var vec__22046 = cljs.core._nth.call(null,c__15195__auto__,i__22042);
var k = cljs.core.nth.call(null,vec__22046,(0),null);
var v = cljs.core.nth.call(null,vec__22046,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__22043,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22048 = (i__22042 + (1));
i__22042 = G__22048;
continue;
} else {
var G__22049 = (i__22042 + (1));
i__22042 = G__22049;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22043),iter__22040.call(null,cljs.core.chunk_rest.call(null,s__22041__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22043),null);
}
} else {
var vec__22047 = cljs.core.first.call(null,s__22041__$2);
var k = cljs.core.nth.call(null,vec__22047,(0),null);
var v = cljs.core.nth.call(null,vec__22047,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22040.call(null,cljs.core.rest.call(null,s__22041__$2)));
} else {
var G__22050 = cljs.core.rest.call(null,s__22041__$2);
s__22041__$1 = G__22050;
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
return iter__15197__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__22051__i = 0, G__22051__a = new Array(arguments.length -  1);
while (G__22051__i < G__22051__a.length) {G__22051__a[G__22051__i] = arguments[G__22051__i + 1]; ++G__22051__i;}
  kvs = new cljs.core.IndexedSeq(G__22051__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22052){
var m = cljs.core.first(arglist__22052);
var kvs = cljs.core.rest(arglist__22052);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__22053__i = 0, G__22053__a = new Array(arguments.length -  3);
while (G__22053__i < G__22053__a.length) {G__22053__a[G__22053__i] = arguments[G__22053__i + 3]; ++G__22053__i;}
  args = new cljs.core.IndexedSeq(G__22053__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22054){
var m = cljs.core.first(arglist__22054);
arglist__22054 = cljs.core.next(arglist__22054);
var key_seq = cljs.core.first(arglist__22054);
arglist__22054 = cljs.core.next(arglist__22054);
var f = cljs.core.first(arglist__22054);
var args = cljs.core.rest(arglist__22054);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4406__auto__ = cljs.core.next.call(null,s);
if(temp__4406__auto__){
var n = temp__4406__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4406__auto__ = cljs.core.seq.call(null,xs);
if(temp__4406__auto__){
var xs__$1 = temp__4406__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__15197__auto__ = ((function (s){
return (function iter__22059(s__22060){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__22060__$1 = s__22060;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__22060__$1);
if(temp__4406__auto__){
var s__22060__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22060__$2)){
var c__15195__auto__ = cljs.core.chunk_first.call(null,s__22060__$2);
var size__15196__auto__ = cljs.core.count.call(null,c__15195__auto__);
var b__22062 = cljs.core.chunk_buffer.call(null,size__15196__auto__);
if((function (){var i__22061 = (0);
while(true){
if((i__22061 < size__15196__auto__)){
var x = cljs.core._nth.call(null,c__15195__auto__,i__22061);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__22062,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__22063 = (i__22061 + (1));
i__22061 = G__22063;
continue;
} else {
var G__22064 = (i__22061 + (1));
i__22061 = G__22064;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22062),iter__22059.call(null,cljs.core.chunk_rest.call(null,s__22060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22062),null);
}
} else {
var x = cljs.core.first.call(null,s__22060__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__22059.call(null,cljs.core.rest.call(null,s__22060__$2)));
} else {
var G__22065 = cljs.core.rest.call(null,s__22060__$2);
s__22060__$1 = G__22065;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__15197__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__22066__i = 0, G__22066__a = new Array(arguments.length -  0);
while (G__22066__i < G__22066__a.length) {G__22066__a[G__22066__i] = arguments[G__22066__i + 0]; ++G__22066__i;}
  colls = new cljs.core.IndexedSeq(G__22066__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22067){
var colls = cljs.core.seq(arglist__22067);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__22068__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__22069 = conj_when.call(null,coll,x);
var G__22070 = cljs.core.first.call(null,xs);
var G__22071 = cljs.core.next.call(null,xs);
coll = G__22069;
x = G__22070;
xs = G__22071;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__22068 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__22072__i = 0, G__22072__a = new Array(arguments.length -  2);
while (G__22072__i < G__22072__a.length) {G__22072__a[G__22072__i] = arguments[G__22072__i + 2]; ++G__22072__i;}
  xs = new cljs.core.IndexedSeq(G__22072__a,0);
} 
return G__22068__delegate.call(this,coll,x,xs);};
G__22068.cljs$lang$maxFixedArity = 2;
G__22068.cljs$lang$applyTo = (function (arglist__22073){
var coll = cljs.core.first(arglist__22073);
arglist__22073 = cljs.core.next(arglist__22073);
var x = cljs.core.first(arglist__22073);
var xs = cljs.core.rest(arglist__22073);
return G__22068__delegate(coll,x,xs);
});
G__22068.cljs$core$IFn$_invoke$arity$variadic = G__22068__delegate;
return G__22068;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__22074 = null;
if (arguments.length > 2) {
var G__22075__i = 0, G__22075__a = new Array(arguments.length -  2);
while (G__22075__i < G__22075__a.length) {G__22075__a[G__22075__i] = arguments[G__22075__i + 2]; ++G__22075__i;}
G__22074 = new cljs.core.IndexedSeq(G__22075__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__22074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__22077__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__22076_SHARP_){
return cljs.core.apply.call(null,f,p1__22076_SHARP_,args);
}));
};
var G__22077 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22078__i = 0, G__22078__a = new Array(arguments.length -  2);
while (G__22078__i < G__22078__a.length) {G__22078__a[G__22078__i] = arguments[G__22078__i + 2]; ++G__22078__i;}
  args = new cljs.core.IndexedSeq(G__22078__a,0);
} 
return G__22077__delegate.call(this,a,f,args);};
G__22077.cljs$lang$maxFixedArity = 2;
G__22077.cljs$lang$applyTo = (function (arglist__22079){
var a = cljs.core.first(arglist__22079);
arglist__22079 = cljs.core.next(arglist__22079);
var f = cljs.core.first(arglist__22079);
var args = cljs.core.rest(arglist__22079);
return G__22077__delegate(a,f,args);
});
G__22077.cljs$core$IFn$_invoke$arity$variadic = G__22077__delegate;
return G__22077;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__22080 = null;
if (arguments.length > 2) {
var G__22081__i = 0, G__22081__a = new Array(arguments.length -  2);
while (G__22081__i < G__22081__a.length) {G__22081__a[G__22081__i] = arguments[G__22081__i + 2]; ++G__22081__i;}
G__22080 = new cljs.core.IndexedSeq(G__22081__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__22080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__22082__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22082 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__22083__i = 0, G__22083__a = new Array(arguments.length -  2);
while (G__22083__i < G__22083__a.length) {G__22083__a[G__22083__i] = arguments[G__22083__i + 2]; ++G__22083__i;}
  args = new cljs.core.IndexedSeq(G__22083__a,0);
} 
return G__22082__delegate.call(this,f,arg,args);};
G__22082.cljs$lang$maxFixedArity = 2;
G__22082.cljs$lang$applyTo = (function (arglist__22084){
var f = cljs.core.first(arglist__22084);
arglist__22084 = cljs.core.next(arglist__22084);
var arg = cljs.core.first(arglist__22084);
var args = cljs.core.rest(arglist__22084);
return G__22082__delegate(f,arg,args);
});
G__22082.cljs$core$IFn$_invoke$arity$variadic = G__22082__delegate;
return G__22082;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__22085 = null;
if (arguments.length > 2) {
var G__22086__i = 0, G__22086__a = new Array(arguments.length -  2);
while (G__22086__i < G__22086__a.length) {G__22086__a[G__22086__i] = arguments[G__22086__i + 2]; ++G__22086__i;}
G__22085 = new cljs.core.IndexedSeq(G__22086__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__22085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map