// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__12957__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__12956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12956,(0),null);
var body = cljs.core.nthnext(vec__12956,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12958__i = 0, G__12958__a = new Array(arguments.length -  0);
while (G__12958__i < G__12958__a.length) {G__12958__a[G__12958__i] = arguments[G__12958__i + 0]; ++G__12958__i;}
  args = new cljs.core.IndexedSeq(G__12958__a,0);
} 
return G__12957__delegate.call(this,args);};
G__12957.cljs$lang$maxFixedArity = 0;
G__12957.cljs$lang$applyTo = (function (arglist__12959){
var args = cljs.core.seq(arglist__12959);
return G__12957__delegate(args);
});
G__12957.cljs$core$IFn$_invoke$arity$variadic = G__12957__delegate;
return G__12957;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7258__auto__ = (function sablono$core$update_arglists_$_iter__12966(s__12967){
return (new cljs.core.LazySeq(null,(function (){
var s__12967__$1 = s__12967;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12967__$1);
if(temp__4657__auto__){
var s__12967__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12967__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__12967__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__12969 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__12968 = (0);
while(true){
if((i__12968 < size__7257__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__12968);
cljs.core.chunk_append(b__12969,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__12972 = (i__12968 + (1));
i__12968 = G__12972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12969),sablono$core$update_arglists_$_iter__12966(cljs.core.chunk_rest(s__12967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12969),null);
}
} else {
var args = cljs.core.first(s__12967__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__12966(cljs.core.rest(s__12967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12980 = arguments.length;
var i__7545__auto___12981 = (0);
while(true){
if((i__7545__auto___12981 < len__7544__auto___12980)){
args__7551__auto__.push((arguments[i__7545__auto___12981]));

var G__12982 = (i__7545__auto___12981 + (1));
i__7545__auto___12981 = G__12982;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7258__auto__ = (function sablono$core$iter__12974(s__12975){
return (new cljs.core.LazySeq(null,(function (){
var s__12975__$1 = s__12975;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12975__$1);
if(temp__4657__auto__){
var s__12975__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12975__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__12975__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__12977 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__12976 = (0);
while(true){
if((i__12976 < size__7257__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__12976);
cljs.core.chunk_append(b__12977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__12983 = (i__12976 + (1));
i__12976 = G__12983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12977),sablono$core$iter__12974(cljs.core.chunk_rest(s__12975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12977),null);
}
} else {
var style = cljs.core.first(s__12975__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__12974(cljs.core.rest(s__12975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq12973){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12973));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__12988 = goog.dom.getDocument().body;
var G__12989 = (function (){var G__12990 = "script";
var G__12991 = {"src": src};
return goog.dom.createDom(G__12990,G__12991);
})();
return goog.dom.appendChild(G__12988,G__12989);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to12992 = (function sablono$core$link_to12992(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12995 = arguments.length;
var i__7545__auto___12996 = (0);
while(true){
if((i__7545__auto___12996 < len__7544__auto___12995)){
args__7551__auto__.push((arguments[i__7545__auto___12996]));

var G__12997 = (i__7545__auto___12996 + (1));
i__7545__auto___12996 = G__12997;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.link_to12992.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.link_to12992.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to12992.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12992.cljs$lang$applyTo = (function (seq12993){
var G__12994 = cljs.core.first(seq12993);
var seq12993__$1 = cljs.core.next(seq12993);
return sablono.core.link_to12992.cljs$core$IFn$_invoke$arity$variadic(G__12994,seq12993__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to12992);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12998 = (function sablono$core$mail_to12998(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13003 = arguments.length;
var i__7545__auto___13004 = (0);
while(true){
if((i__7545__auto___13004 < len__7544__auto___13003)){
args__7551__auto__.push((arguments[i__7545__auto___13004]));

var G__13005 = (i__7545__auto___13004 + (1));
i__7545__auto___13004 = G__13005;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12998.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.mail_to12998.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13001){
var vec__13002 = p__13001;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13002,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6486__auto__ = content;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12998.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12998.cljs$lang$applyTo = (function (seq12999){
var G__13000 = cljs.core.first(seq12999);
var seq12999__$1 = cljs.core.next(seq12999);
return sablono.core.mail_to12998.cljs$core$IFn$_invoke$arity$variadic(G__13000,seq12999__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to12998);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13006 = (function sablono$core$unordered_list13006(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7258__auto__ = (function sablono$core$unordered_list13006_$_iter__13013(s__13014){
return (new cljs.core.LazySeq(null,(function (){
var s__13014__$1 = s__13014;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13014__$1);
if(temp__4657__auto__){
var s__13014__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13014__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13014__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13016 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13015 = (0);
while(true){
if((i__13015 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13015);
cljs.core.chunk_append(b__13016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13019 = (i__13015 + (1));
i__13015 = G__13019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13016),sablono$core$unordered_list13006_$_iter__13013(cljs.core.chunk_rest(s__13014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13016),null);
}
} else {
var x = cljs.core.first(s__13014__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13006_$_iter__13013(cljs.core.rest(s__13014__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13006);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13020 = (function sablono$core$ordered_list13020(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7258__auto__ = (function sablono$core$ordered_list13020_$_iter__13027(s__13028){
return (new cljs.core.LazySeq(null,(function (){
var s__13028__$1 = s__13028;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13028__$1);
if(temp__4657__auto__){
var s__13028__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13028__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13028__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13030 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13029 = (0);
while(true){
if((i__13029 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13029);
cljs.core.chunk_append(b__13030,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13033 = (i__13029 + (1));
i__13029 = G__13033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13030),sablono$core$ordered_list13020_$_iter__13027(cljs.core.chunk_rest(s__13028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13030),null);
}
} else {
var x = cljs.core.first(s__13028__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13020_$_iter__13027(cljs.core.rest(s__13028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13020);
/**
 * Create an image element.
 */
sablono.core.image13034 = (function sablono$core$image13034(var_args){
var args13035 = [];
var len__7544__auto___13038 = arguments.length;
var i__7545__auto___13039 = (0);
while(true){
if((i__7545__auto___13039 < len__7544__auto___13038)){
args13035.push((arguments[i__7545__auto___13039]));

var G__13040 = (i__7545__auto___13039 + (1));
i__7545__auto___13039 = G__13040;
continue;
} else {
}
break;
}

var G__13037 = args13035.length;
switch (G__13037) {
case 1:
return sablono.core.image13034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13035.length)].join('')));

}
});

sablono.core.image13034.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13034.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13034.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13034);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13042_SHARP_,p2__13043_SHARP_){
return [cljs.core.str(p1__13042_SHARP_),cljs.core.str("["),cljs.core.str(p2__13043_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13044_SHARP_,p2__13045_SHARP_){
return [cljs.core.str(p1__13044_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13045_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13046 = (function sablono$core$color_field13046(var_args){
var args13047 = [];
var len__7544__auto___13114 = arguments.length;
var i__7545__auto___13115 = (0);
while(true){
if((i__7545__auto___13115 < len__7544__auto___13114)){
args13047.push((arguments[i__7545__auto___13115]));

var G__13116 = (i__7545__auto___13115 + (1));
i__7545__auto___13115 = G__13116;
continue;
} else {
}
break;
}

var G__13049 = args13047.length;
switch (G__13049) {
case 1:
return sablono.core.color_field13046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13047.length)].join('')));

}
});

sablono.core.color_field13046.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.color_field13046.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.color_field13046.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.color_field13046.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13046);

/**
 * Creates a date input field.
 */
sablono.core.date_field13050 = (function sablono$core$date_field13050(var_args){
var args13051 = [];
var len__7544__auto___13118 = arguments.length;
var i__7545__auto___13119 = (0);
while(true){
if((i__7545__auto___13119 < len__7544__auto___13118)){
args13051.push((arguments[i__7545__auto___13119]));

var G__13120 = (i__7545__auto___13119 + (1));
i__7545__auto___13119 = G__13120;
continue;
} else {
}
break;
}

var G__13053 = args13051.length;
switch (G__13053) {
case 1:
return sablono.core.date_field13050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13051.length)].join('')));

}
});

sablono.core.date_field13050.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.date_field13050.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.date_field13050.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.date_field13050.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13050);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13054 = (function sablono$core$datetime_field13054(var_args){
var args13055 = [];
var len__7544__auto___13122 = arguments.length;
var i__7545__auto___13123 = (0);
while(true){
if((i__7545__auto___13123 < len__7544__auto___13122)){
args13055.push((arguments[i__7545__auto___13123]));

var G__13124 = (i__7545__auto___13123 + (1));
i__7545__auto___13123 = G__13124;
continue;
} else {
}
break;
}

var G__13057 = args13055.length;
switch (G__13057) {
case 1:
return sablono.core.datetime_field13054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13055.length)].join('')));

}
});

sablono.core.datetime_field13054.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.datetime_field13054.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.datetime_field13054.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.datetime_field13054.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13054);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13058 = (function sablono$core$datetime_local_field13058(var_args){
var args13059 = [];
var len__7544__auto___13126 = arguments.length;
var i__7545__auto___13127 = (0);
while(true){
if((i__7545__auto___13127 < len__7544__auto___13126)){
args13059.push((arguments[i__7545__auto___13127]));

var G__13128 = (i__7545__auto___13127 + (1));
i__7545__auto___13127 = G__13128;
continue;
} else {
}
break;
}

var G__13061 = args13059.length;
switch (G__13061) {
case 1:
return sablono.core.datetime_local_field13058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13059.length)].join('')));

}
});

sablono.core.datetime_local_field13058.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.datetime_local_field13058.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.datetime_local_field13058.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.datetime_local_field13058.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13058);

/**
 * Creates a email input field.
 */
sablono.core.email_field13062 = (function sablono$core$email_field13062(var_args){
var args13063 = [];
var len__7544__auto___13130 = arguments.length;
var i__7545__auto___13131 = (0);
while(true){
if((i__7545__auto___13131 < len__7544__auto___13130)){
args13063.push((arguments[i__7545__auto___13131]));

var G__13132 = (i__7545__auto___13131 + (1));
i__7545__auto___13131 = G__13132;
continue;
} else {
}
break;
}

var G__13065 = args13063.length;
switch (G__13065) {
case 1:
return sablono.core.email_field13062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13063.length)].join('')));

}
});

sablono.core.email_field13062.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.email_field13062.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.email_field13062.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.email_field13062.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13062);

/**
 * Creates a file input field.
 */
sablono.core.file_field13066 = (function sablono$core$file_field13066(var_args){
var args13067 = [];
var len__7544__auto___13134 = arguments.length;
var i__7545__auto___13135 = (0);
while(true){
if((i__7545__auto___13135 < len__7544__auto___13134)){
args13067.push((arguments[i__7545__auto___13135]));

var G__13136 = (i__7545__auto___13135 + (1));
i__7545__auto___13135 = G__13136;
continue;
} else {
}
break;
}

var G__13069 = args13067.length;
switch (G__13069) {
case 1:
return sablono.core.file_field13066.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13067.length)].join('')));

}
});

sablono.core.file_field13066.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.file_field13066.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.file_field13066.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.file_field13066.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13066);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13070 = (function sablono$core$hidden_field13070(var_args){
var args13071 = [];
var len__7544__auto___13138 = arguments.length;
var i__7545__auto___13139 = (0);
while(true){
if((i__7545__auto___13139 < len__7544__auto___13138)){
args13071.push((arguments[i__7545__auto___13139]));

var G__13140 = (i__7545__auto___13139 + (1));
i__7545__auto___13139 = G__13140;
continue;
} else {
}
break;
}

var G__13073 = args13071.length;
switch (G__13073) {
case 1:
return sablono.core.hidden_field13070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13071.length)].join('')));

}
});

sablono.core.hidden_field13070.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.hidden_field13070.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.hidden_field13070.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.hidden_field13070.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13070);

/**
 * Creates a month input field.
 */
sablono.core.month_field13074 = (function sablono$core$month_field13074(var_args){
var args13075 = [];
var len__7544__auto___13142 = arguments.length;
var i__7545__auto___13143 = (0);
while(true){
if((i__7545__auto___13143 < len__7544__auto___13142)){
args13075.push((arguments[i__7545__auto___13143]));

var G__13144 = (i__7545__auto___13143 + (1));
i__7545__auto___13143 = G__13144;
continue;
} else {
}
break;
}

var G__13077 = args13075.length;
switch (G__13077) {
case 1:
return sablono.core.month_field13074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13075.length)].join('')));

}
});

sablono.core.month_field13074.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.month_field13074.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.month_field13074.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.month_field13074.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13074);

/**
 * Creates a number input field.
 */
sablono.core.number_field13078 = (function sablono$core$number_field13078(var_args){
var args13079 = [];
var len__7544__auto___13146 = arguments.length;
var i__7545__auto___13147 = (0);
while(true){
if((i__7545__auto___13147 < len__7544__auto___13146)){
args13079.push((arguments[i__7545__auto___13147]));

var G__13148 = (i__7545__auto___13147 + (1));
i__7545__auto___13147 = G__13148;
continue;
} else {
}
break;
}

var G__13081 = args13079.length;
switch (G__13081) {
case 1:
return sablono.core.number_field13078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13079.length)].join('')));

}
});

sablono.core.number_field13078.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.number_field13078.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.number_field13078.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.number_field13078.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13078);

/**
 * Creates a password input field.
 */
sablono.core.password_field13082 = (function sablono$core$password_field13082(var_args){
var args13083 = [];
var len__7544__auto___13150 = arguments.length;
var i__7545__auto___13151 = (0);
while(true){
if((i__7545__auto___13151 < len__7544__auto___13150)){
args13083.push((arguments[i__7545__auto___13151]));

var G__13152 = (i__7545__auto___13151 + (1));
i__7545__auto___13151 = G__13152;
continue;
} else {
}
break;
}

var G__13085 = args13083.length;
switch (G__13085) {
case 1:
return sablono.core.password_field13082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13083.length)].join('')));

}
});

sablono.core.password_field13082.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.password_field13082.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.password_field13082.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.password_field13082.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13082);

/**
 * Creates a range input field.
 */
sablono.core.range_field13086 = (function sablono$core$range_field13086(var_args){
var args13087 = [];
var len__7544__auto___13154 = arguments.length;
var i__7545__auto___13155 = (0);
while(true){
if((i__7545__auto___13155 < len__7544__auto___13154)){
args13087.push((arguments[i__7545__auto___13155]));

var G__13156 = (i__7545__auto___13155 + (1));
i__7545__auto___13155 = G__13156;
continue;
} else {
}
break;
}

var G__13089 = args13087.length;
switch (G__13089) {
case 1:
return sablono.core.range_field13086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13087.length)].join('')));

}
});

sablono.core.range_field13086.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.range_field13086.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.range_field13086.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.range_field13086.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13086);

/**
 * Creates a search input field.
 */
sablono.core.search_field13090 = (function sablono$core$search_field13090(var_args){
var args13091 = [];
var len__7544__auto___13158 = arguments.length;
var i__7545__auto___13159 = (0);
while(true){
if((i__7545__auto___13159 < len__7544__auto___13158)){
args13091.push((arguments[i__7545__auto___13159]));

var G__13160 = (i__7545__auto___13159 + (1));
i__7545__auto___13159 = G__13160;
continue;
} else {
}
break;
}

var G__13093 = args13091.length;
switch (G__13093) {
case 1:
return sablono.core.search_field13090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13091.length)].join('')));

}
});

sablono.core.search_field13090.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.search_field13090.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.search_field13090.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.search_field13090.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13090);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13094 = (function sablono$core$tel_field13094(var_args){
var args13095 = [];
var len__7544__auto___13162 = arguments.length;
var i__7545__auto___13163 = (0);
while(true){
if((i__7545__auto___13163 < len__7544__auto___13162)){
args13095.push((arguments[i__7545__auto___13163]));

var G__13164 = (i__7545__auto___13163 + (1));
i__7545__auto___13163 = G__13164;
continue;
} else {
}
break;
}

var G__13097 = args13095.length;
switch (G__13097) {
case 1:
return sablono.core.tel_field13094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13095.length)].join('')));

}
});

sablono.core.tel_field13094.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.tel_field13094.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.tel_field13094.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.tel_field13094.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13094);

/**
 * Creates a text input field.
 */
sablono.core.text_field13098 = (function sablono$core$text_field13098(var_args){
var args13099 = [];
var len__7544__auto___13166 = arguments.length;
var i__7545__auto___13167 = (0);
while(true){
if((i__7545__auto___13167 < len__7544__auto___13166)){
args13099.push((arguments[i__7545__auto___13167]));

var G__13168 = (i__7545__auto___13167 + (1));
i__7545__auto___13167 = G__13168;
continue;
} else {
}
break;
}

var G__13101 = args13099.length;
switch (G__13101) {
case 1:
return sablono.core.text_field13098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13099.length)].join('')));

}
});

sablono.core.text_field13098.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.text_field13098.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.text_field13098.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.text_field13098.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13098);

/**
 * Creates a time input field.
 */
sablono.core.time_field13102 = (function sablono$core$time_field13102(var_args){
var args13103 = [];
var len__7544__auto___13170 = arguments.length;
var i__7545__auto___13171 = (0);
while(true){
if((i__7545__auto___13171 < len__7544__auto___13170)){
args13103.push((arguments[i__7545__auto___13171]));

var G__13172 = (i__7545__auto___13171 + (1));
i__7545__auto___13171 = G__13172;
continue;
} else {
}
break;
}

var G__13105 = args13103.length;
switch (G__13105) {
case 1:
return sablono.core.time_field13102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13103.length)].join('')));

}
});

sablono.core.time_field13102.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.time_field13102.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.time_field13102.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.time_field13102.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13102);

/**
 * Creates a url input field.
 */
sablono.core.url_field13106 = (function sablono$core$url_field13106(var_args){
var args13107 = [];
var len__7544__auto___13174 = arguments.length;
var i__7545__auto___13175 = (0);
while(true){
if((i__7545__auto___13175 < len__7544__auto___13174)){
args13107.push((arguments[i__7545__auto___13175]));

var G__13176 = (i__7545__auto___13175 + (1));
i__7545__auto___13175 = G__13176;
continue;
} else {
}
break;
}

var G__13109 = args13107.length;
switch (G__13109) {
case 1:
return sablono.core.url_field13106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13107.length)].join('')));

}
});

sablono.core.url_field13106.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.url_field13106.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.url_field13106.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.url_field13106.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13106);

/**
 * Creates a week input field.
 */
sablono.core.week_field13110 = (function sablono$core$week_field13110(var_args){
var args13111 = [];
var len__7544__auto___13178 = arguments.length;
var i__7545__auto___13179 = (0);
while(true){
if((i__7545__auto___13179 < len__7544__auto___13178)){
args13111.push((arguments[i__7545__auto___13179]));

var G__13180 = (i__7545__auto___13179 + (1));
i__7545__auto___13179 = G__13180;
continue;
} else {
}
break;
}

var G__13113 = args13111.length;
switch (G__13113) {
case 1:
return sablono.core.week_field13110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13111.length)].join('')));

}
});

sablono.core.week_field13110.cljs$core$IFn$_invoke$arity$1 = (function (name__12945__auto__){
return sablono.core.week_field13110.cljs$core$IFn$_invoke$arity$2(name__12945__auto__,null);
});

sablono.core.week_field13110.cljs$core$IFn$_invoke$arity$2 = (function (name__12945__auto__,value__12946__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__12945__auto__,value__12946__auto__);
});

sablono.core.week_field13110.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13110);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13182 = (function sablono$core$check_box13182(var_args){
var args13183 = [];
var len__7544__auto___13186 = arguments.length;
var i__7545__auto___13187 = (0);
while(true){
if((i__7545__auto___13187 < len__7544__auto___13186)){
args13183.push((arguments[i__7545__auto___13187]));

var G__13188 = (i__7545__auto___13187 + (1));
i__7545__auto___13187 = G__13188;
continue;
} else {
}
break;
}

var G__13185 = args13183.length;
switch (G__13185) {
case 1:
return sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13183.length)].join('')));

}
});

sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13182.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13182.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13182);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13190 = (function sablono$core$radio_button13190(var_args){
var args13191 = [];
var len__7544__auto___13194 = arguments.length;
var i__7545__auto___13195 = (0);
while(true){
if((i__7545__auto___13195 < len__7544__auto___13194)){
args13191.push((arguments[i__7545__auto___13195]));

var G__13196 = (i__7545__auto___13195 + (1));
i__7545__auto___13195 = G__13196;
continue;
} else {
}
break;
}

var G__13193 = args13191.length;
switch (G__13193) {
case 1:
return sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13191.length)].join('')));

}
});

sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13190.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13190.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13190);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13199 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13199);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13200 = (function sablono$core$select_options13200(coll){
var iter__7258__auto__ = (function sablono$core$select_options13200_$_iter__13211(s__13212){
return (new cljs.core.LazySeq(null,(function (){
var s__13212__$1 = s__13212;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13212__$1);
if(temp__4657__auto__){
var s__13212__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13212__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13212__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13214 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13213 = (0);
while(true){
if((i__13213 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13213);
cljs.core.chunk_append(b__13214,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13219 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13219,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13200(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13221 = (i__13213 + (1));
i__13213 = G__13221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13214),sablono$core$select_options13200_$_iter__13211(cljs.core.chunk_rest(s__13212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13214),null);
}
} else {
var x = cljs.core.first(s__13212__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13220 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13220,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13220,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13220,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13200(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13200_$_iter__13211(cljs.core.rest(s__13212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7258__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13200);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13222 = (function sablono$core$drop_down13222(var_args){
var args13223 = [];
var len__7544__auto___13226 = arguments.length;
var i__7545__auto___13227 = (0);
while(true){
if((i__7545__auto___13227 < len__7544__auto___13226)){
args13223.push((arguments[i__7545__auto___13227]));

var G__13228 = (i__7545__auto___13227 + (1));
i__7545__auto___13227 = G__13228;
continue;
} else {
}
break;
}

var G__13225 = args13223.length;
switch (G__13225) {
case 2:
return sablono.core.drop_down13222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13222.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13223.length)].join('')));

}
});

sablono.core.drop_down13222.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13222.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13222.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13222.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13222);
/**
 * Creates a text area element.
 */
sablono.core.text_area13230 = (function sablono$core$text_area13230(var_args){
var args13231 = [];
var len__7544__auto___13234 = arguments.length;
var i__7545__auto___13235 = (0);
while(true){
if((i__7545__auto___13235 < len__7544__auto___13234)){
args13231.push((arguments[i__7545__auto___13235]));

var G__13236 = (i__7545__auto___13235 + (1));
i__7545__auto___13235 = G__13236;
continue;
} else {
}
break;
}

var G__13233 = args13231.length;
switch (G__13233) {
case 1:
return sablono.core.text_area13230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13231.length)].join('')));

}
});

sablono.core.text_area13230.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13230.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13230.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area13230.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13230);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13238 = (function sablono$core$label13238(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13238);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13239 = (function sablono$core$submit_button13239(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13239);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13240 = (function sablono$core$reset_button13240(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13240);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13241 = (function sablono$core$form_to13241(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13249 = arguments.length;
var i__7545__auto___13250 = (0);
while(true){
if((i__7545__auto___13250 < len__7544__auto___13249)){
args__7551__auto__.push((arguments[i__7545__auto___13250]));

var G__13251 = (i__7545__auto___13250 + (1));
i__7545__auto___13250 = G__13251;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.form_to13241.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.form_to13241.cljs$core$IFn$_invoke$arity$variadic = (function (p__13244,body){
var vec__13245 = p__13244;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13245,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13245,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13246 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13247 = "_method";
var G__13248 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13246,G__13247,G__13248) : sablono.core.hidden_field.call(null,G__13246,G__13247,G__13248));
})()], null)),body));
});

sablono.core.form_to13241.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13241.cljs$lang$applyTo = (function (seq13242){
var G__13243 = cljs.core.first(seq13242);
var seq13242__$1 = cljs.core.next(seq13242);
return sablono.core.form_to13241.cljs$core$IFn$_invoke$arity$variadic(G__13243,seq13242__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13241);
