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
var G__12964__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__12963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12963,(0),null);
var body = cljs.core.nthnext(vec__12963,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12965__i = 0, G__12965__a = new Array(arguments.length -  0);
while (G__12965__i < G__12965__a.length) {G__12965__a[G__12965__i] = arguments[G__12965__i + 0]; ++G__12965__i;}
  args = new cljs.core.IndexedSeq(G__12965__a,0);
} 
return G__12964__delegate.call(this,args);};
G__12964.cljs$lang$maxFixedArity = 0;
G__12964.cljs$lang$applyTo = (function (arglist__12966){
var args = cljs.core.seq(arglist__12966);
return G__12964__delegate(args);
});
G__12964.cljs$core$IFn$_invoke$arity$variadic = G__12964__delegate;
return G__12964;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7258__auto__ = (function sablono$core$update_arglists_$_iter__12973(s__12974){
return (new cljs.core.LazySeq(null,(function (){
var s__12974__$1 = s__12974;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12974__$1);
if(temp__4657__auto__){
var s__12974__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12974__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__12974__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__12976 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__12975 = (0);
while(true){
if((i__12975 < size__7257__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__12975);
cljs.core.chunk_append(b__12976,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__12979 = (i__12975 + (1));
i__12975 = G__12979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12976),sablono$core$update_arglists_$_iter__12973(cljs.core.chunk_rest(s__12974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12976),null);
}
} else {
var args = cljs.core.first(s__12974__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__12973(cljs.core.rest(s__12974__$2)));
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
var len__7544__auto___12987 = arguments.length;
var i__7545__auto___12988 = (0);
while(true){
if((i__7545__auto___12988 < len__7544__auto___12987)){
args__7551__auto__.push((arguments[i__7545__auto___12988]));

var G__12989 = (i__7545__auto___12988 + (1));
i__7545__auto___12988 = G__12989;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7258__auto__ = (function sablono$core$iter__12981(s__12982){
return (new cljs.core.LazySeq(null,(function (){
var s__12982__$1 = s__12982;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12982__$1);
if(temp__4657__auto__){
var s__12982__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12982__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__12982__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__12984 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__12983 = (0);
while(true){
if((i__12983 < size__7257__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__12983);
cljs.core.chunk_append(b__12984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__12990 = (i__12983 + (1));
i__12983 = G__12990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12984),sablono$core$iter__12981(cljs.core.chunk_rest(s__12982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12984),null);
}
} else {
var style = cljs.core.first(s__12982__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__12981(cljs.core.rest(s__12982__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq12980){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12980));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__12995 = goog.dom.getDocument().body;
var G__12996 = (function (){var G__12997 = "script";
var G__12998 = {"src": src};
return goog.dom.createDom(G__12997,G__12998);
})();
return goog.dom.appendChild(G__12995,G__12996);
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
sablono.core.link_to12999 = (function sablono$core$link_to12999(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13002 = arguments.length;
var i__7545__auto___13003 = (0);
while(true){
if((i__7545__auto___13003 < len__7544__auto___13002)){
args__7551__auto__.push((arguments[i__7545__auto___13003]));

var G__13004 = (i__7545__auto___13003 + (1));
i__7545__auto___13003 = G__13004;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.link_to12999.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.link_to12999.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to12999.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12999.cljs$lang$applyTo = (function (seq13000){
var G__13001 = cljs.core.first(seq13000);
var seq13000__$1 = cljs.core.next(seq13000);
return sablono.core.link_to12999.cljs$core$IFn$_invoke$arity$variadic(G__13001,seq13000__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to12999);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13005 = (function sablono$core$mail_to13005(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13010 = arguments.length;
var i__7545__auto___13011 = (0);
while(true){
if((i__7545__auto___13011 < len__7544__auto___13010)){
args__7551__auto__.push((arguments[i__7545__auto___13011]));

var G__13012 = (i__7545__auto___13011 + (1));
i__7545__auto___13011 = G__13012;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.mail_to13005.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.mail_to13005.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13008){
var vec__13009 = p__13008;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6486__auto__ = content;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13005.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13005.cljs$lang$applyTo = (function (seq13006){
var G__13007 = cljs.core.first(seq13006);
var seq13006__$1 = cljs.core.next(seq13006);
return sablono.core.mail_to13005.cljs$core$IFn$_invoke$arity$variadic(G__13007,seq13006__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13005);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13013 = (function sablono$core$unordered_list13013(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7258__auto__ = (function sablono$core$unordered_list13013_$_iter__13020(s__13021){
return (new cljs.core.LazySeq(null,(function (){
var s__13021__$1 = s__13021;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13021__$1);
if(temp__4657__auto__){
var s__13021__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13021__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13021__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13023 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13022 = (0);
while(true){
if((i__13022 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13022);
cljs.core.chunk_append(b__13023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13026 = (i__13022 + (1));
i__13022 = G__13026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13023),sablono$core$unordered_list13013_$_iter__13020(cljs.core.chunk_rest(s__13021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13023),null);
}
} else {
var x = cljs.core.first(s__13021__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13013_$_iter__13020(cljs.core.rest(s__13021__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13013);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13027 = (function sablono$core$ordered_list13027(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7258__auto__ = (function sablono$core$ordered_list13027_$_iter__13034(s__13035){
return (new cljs.core.LazySeq(null,(function (){
var s__13035__$1 = s__13035;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13035__$1);
if(temp__4657__auto__){
var s__13035__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13035__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13035__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13037 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13036 = (0);
while(true){
if((i__13036 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13036);
cljs.core.chunk_append(b__13037,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13040 = (i__13036 + (1));
i__13036 = G__13040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13037),sablono$core$ordered_list13027_$_iter__13034(cljs.core.chunk_rest(s__13035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13037),null);
}
} else {
var x = cljs.core.first(s__13035__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13027_$_iter__13034(cljs.core.rest(s__13035__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13027);
/**
 * Create an image element.
 */
sablono.core.image13041 = (function sablono$core$image13041(var_args){
var args13042 = [];
var len__7544__auto___13045 = arguments.length;
var i__7545__auto___13046 = (0);
while(true){
if((i__7545__auto___13046 < len__7544__auto___13045)){
args13042.push((arguments[i__7545__auto___13046]));

var G__13047 = (i__7545__auto___13046 + (1));
i__7545__auto___13046 = G__13047;
continue;
} else {
}
break;
}

var G__13044 = args13042.length;
switch (G__13044) {
case 1:
return sablono.core.image13041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13042.length)].join('')));

}
});

sablono.core.image13041.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13041.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13041.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13041);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13049_SHARP_,p2__13050_SHARP_){
return [cljs.core.str(p1__13049_SHARP_),cljs.core.str("["),cljs.core.str(p2__13050_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13051_SHARP_,p2__13052_SHARP_){
return [cljs.core.str(p1__13051_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13052_SHARP_)].join('');
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
sablono.core.color_field13053 = (function sablono$core$color_field13053(var_args){
var args13054 = [];
var len__7544__auto___13121 = arguments.length;
var i__7545__auto___13122 = (0);
while(true){
if((i__7545__auto___13122 < len__7544__auto___13121)){
args13054.push((arguments[i__7545__auto___13122]));

var G__13123 = (i__7545__auto___13122 + (1));
i__7545__auto___13122 = G__13123;
continue;
} else {
}
break;
}

var G__13056 = args13054.length;
switch (G__13056) {
case 1:
return sablono.core.color_field13053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13054.length)].join('')));

}
});

sablono.core.color_field13053.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.color_field13053.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.color_field13053.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.color_field13053.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13053);

/**
 * Creates a date input field.
 */
sablono.core.date_field13057 = (function sablono$core$date_field13057(var_args){
var args13058 = [];
var len__7544__auto___13125 = arguments.length;
var i__7545__auto___13126 = (0);
while(true){
if((i__7545__auto___13126 < len__7544__auto___13125)){
args13058.push((arguments[i__7545__auto___13126]));

var G__13127 = (i__7545__auto___13126 + (1));
i__7545__auto___13126 = G__13127;
continue;
} else {
}
break;
}

var G__13060 = args13058.length;
switch (G__13060) {
case 1:
return sablono.core.date_field13057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13058.length)].join('')));

}
});

sablono.core.date_field13057.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.date_field13057.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.date_field13057.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.date_field13057.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13057);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13061 = (function sablono$core$datetime_field13061(var_args){
var args13062 = [];
var len__7544__auto___13129 = arguments.length;
var i__7545__auto___13130 = (0);
while(true){
if((i__7545__auto___13130 < len__7544__auto___13129)){
args13062.push((arguments[i__7545__auto___13130]));

var G__13131 = (i__7545__auto___13130 + (1));
i__7545__auto___13130 = G__13131;
continue;
} else {
}
break;
}

var G__13064 = args13062.length;
switch (G__13064) {
case 1:
return sablono.core.datetime_field13061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13062.length)].join('')));

}
});

sablono.core.datetime_field13061.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.datetime_field13061.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.datetime_field13061.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.datetime_field13061.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13061);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13065 = (function sablono$core$datetime_local_field13065(var_args){
var args13066 = [];
var len__7544__auto___13133 = arguments.length;
var i__7545__auto___13134 = (0);
while(true){
if((i__7545__auto___13134 < len__7544__auto___13133)){
args13066.push((arguments[i__7545__auto___13134]));

var G__13135 = (i__7545__auto___13134 + (1));
i__7545__auto___13134 = G__13135;
continue;
} else {
}
break;
}

var G__13068 = args13066.length;
switch (G__13068) {
case 1:
return sablono.core.datetime_local_field13065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13066.length)].join('')));

}
});

sablono.core.datetime_local_field13065.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.datetime_local_field13065.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.datetime_local_field13065.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.datetime_local_field13065.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13065);

/**
 * Creates a email input field.
 */
sablono.core.email_field13069 = (function sablono$core$email_field13069(var_args){
var args13070 = [];
var len__7544__auto___13137 = arguments.length;
var i__7545__auto___13138 = (0);
while(true){
if((i__7545__auto___13138 < len__7544__auto___13137)){
args13070.push((arguments[i__7545__auto___13138]));

var G__13139 = (i__7545__auto___13138 + (1));
i__7545__auto___13138 = G__13139;
continue;
} else {
}
break;
}

var G__13072 = args13070.length;
switch (G__13072) {
case 1:
return sablono.core.email_field13069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13070.length)].join('')));

}
});

sablono.core.email_field13069.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.email_field13069.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.email_field13069.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.email_field13069.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13069);

/**
 * Creates a file input field.
 */
sablono.core.file_field13073 = (function sablono$core$file_field13073(var_args){
var args13074 = [];
var len__7544__auto___13141 = arguments.length;
var i__7545__auto___13142 = (0);
while(true){
if((i__7545__auto___13142 < len__7544__auto___13141)){
args13074.push((arguments[i__7545__auto___13142]));

var G__13143 = (i__7545__auto___13142 + (1));
i__7545__auto___13142 = G__13143;
continue;
} else {
}
break;
}

var G__13076 = args13074.length;
switch (G__13076) {
case 1:
return sablono.core.file_field13073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13074.length)].join('')));

}
});

sablono.core.file_field13073.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.file_field13073.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.file_field13073.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.file_field13073.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13073);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13077 = (function sablono$core$hidden_field13077(var_args){
var args13078 = [];
var len__7544__auto___13145 = arguments.length;
var i__7545__auto___13146 = (0);
while(true){
if((i__7545__auto___13146 < len__7544__auto___13145)){
args13078.push((arguments[i__7545__auto___13146]));

var G__13147 = (i__7545__auto___13146 + (1));
i__7545__auto___13146 = G__13147;
continue;
} else {
}
break;
}

var G__13080 = args13078.length;
switch (G__13080) {
case 1:
return sablono.core.hidden_field13077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13078.length)].join('')));

}
});

sablono.core.hidden_field13077.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.hidden_field13077.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.hidden_field13077.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.hidden_field13077.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13077);

/**
 * Creates a month input field.
 */
sablono.core.month_field13081 = (function sablono$core$month_field13081(var_args){
var args13082 = [];
var len__7544__auto___13149 = arguments.length;
var i__7545__auto___13150 = (0);
while(true){
if((i__7545__auto___13150 < len__7544__auto___13149)){
args13082.push((arguments[i__7545__auto___13150]));

var G__13151 = (i__7545__auto___13150 + (1));
i__7545__auto___13150 = G__13151;
continue;
} else {
}
break;
}

var G__13084 = args13082.length;
switch (G__13084) {
case 1:
return sablono.core.month_field13081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13082.length)].join('')));

}
});

sablono.core.month_field13081.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.month_field13081.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.month_field13081.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.month_field13081.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13081);

/**
 * Creates a number input field.
 */
sablono.core.number_field13085 = (function sablono$core$number_field13085(var_args){
var args13086 = [];
var len__7544__auto___13153 = arguments.length;
var i__7545__auto___13154 = (0);
while(true){
if((i__7545__auto___13154 < len__7544__auto___13153)){
args13086.push((arguments[i__7545__auto___13154]));

var G__13155 = (i__7545__auto___13154 + (1));
i__7545__auto___13154 = G__13155;
continue;
} else {
}
break;
}

var G__13088 = args13086.length;
switch (G__13088) {
case 1:
return sablono.core.number_field13085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13086.length)].join('')));

}
});

sablono.core.number_field13085.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.number_field13085.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.number_field13085.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.number_field13085.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13085);

/**
 * Creates a password input field.
 */
sablono.core.password_field13089 = (function sablono$core$password_field13089(var_args){
var args13090 = [];
var len__7544__auto___13157 = arguments.length;
var i__7545__auto___13158 = (0);
while(true){
if((i__7545__auto___13158 < len__7544__auto___13157)){
args13090.push((arguments[i__7545__auto___13158]));

var G__13159 = (i__7545__auto___13158 + (1));
i__7545__auto___13158 = G__13159;
continue;
} else {
}
break;
}

var G__13092 = args13090.length;
switch (G__13092) {
case 1:
return sablono.core.password_field13089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13090.length)].join('')));

}
});

sablono.core.password_field13089.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.password_field13089.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.password_field13089.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.password_field13089.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13089);

/**
 * Creates a range input field.
 */
sablono.core.range_field13093 = (function sablono$core$range_field13093(var_args){
var args13094 = [];
var len__7544__auto___13161 = arguments.length;
var i__7545__auto___13162 = (0);
while(true){
if((i__7545__auto___13162 < len__7544__auto___13161)){
args13094.push((arguments[i__7545__auto___13162]));

var G__13163 = (i__7545__auto___13162 + (1));
i__7545__auto___13162 = G__13163;
continue;
} else {
}
break;
}

var G__13096 = args13094.length;
switch (G__13096) {
case 1:
return sablono.core.range_field13093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13094.length)].join('')));

}
});

sablono.core.range_field13093.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.range_field13093.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.range_field13093.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.range_field13093.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13093);

/**
 * Creates a search input field.
 */
sablono.core.search_field13097 = (function sablono$core$search_field13097(var_args){
var args13098 = [];
var len__7544__auto___13165 = arguments.length;
var i__7545__auto___13166 = (0);
while(true){
if((i__7545__auto___13166 < len__7544__auto___13165)){
args13098.push((arguments[i__7545__auto___13166]));

var G__13167 = (i__7545__auto___13166 + (1));
i__7545__auto___13166 = G__13167;
continue;
} else {
}
break;
}

var G__13100 = args13098.length;
switch (G__13100) {
case 1:
return sablono.core.search_field13097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13098.length)].join('')));

}
});

sablono.core.search_field13097.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.search_field13097.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.search_field13097.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.search_field13097.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13097);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13101 = (function sablono$core$tel_field13101(var_args){
var args13102 = [];
var len__7544__auto___13169 = arguments.length;
var i__7545__auto___13170 = (0);
while(true){
if((i__7545__auto___13170 < len__7544__auto___13169)){
args13102.push((arguments[i__7545__auto___13170]));

var G__13171 = (i__7545__auto___13170 + (1));
i__7545__auto___13170 = G__13171;
continue;
} else {
}
break;
}

var G__13104 = args13102.length;
switch (G__13104) {
case 1:
return sablono.core.tel_field13101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13102.length)].join('')));

}
});

sablono.core.tel_field13101.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.tel_field13101.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.tel_field13101.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.tel_field13101.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13101);

/**
 * Creates a text input field.
 */
sablono.core.text_field13105 = (function sablono$core$text_field13105(var_args){
var args13106 = [];
var len__7544__auto___13173 = arguments.length;
var i__7545__auto___13174 = (0);
while(true){
if((i__7545__auto___13174 < len__7544__auto___13173)){
args13106.push((arguments[i__7545__auto___13174]));

var G__13175 = (i__7545__auto___13174 + (1));
i__7545__auto___13174 = G__13175;
continue;
} else {
}
break;
}

var G__13108 = args13106.length;
switch (G__13108) {
case 1:
return sablono.core.text_field13105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13106.length)].join('')));

}
});

sablono.core.text_field13105.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.text_field13105.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.text_field13105.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.text_field13105.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13105);

/**
 * Creates a time input field.
 */
sablono.core.time_field13109 = (function sablono$core$time_field13109(var_args){
var args13110 = [];
var len__7544__auto___13177 = arguments.length;
var i__7545__auto___13178 = (0);
while(true){
if((i__7545__auto___13178 < len__7544__auto___13177)){
args13110.push((arguments[i__7545__auto___13178]));

var G__13179 = (i__7545__auto___13178 + (1));
i__7545__auto___13178 = G__13179;
continue;
} else {
}
break;
}

var G__13112 = args13110.length;
switch (G__13112) {
case 1:
return sablono.core.time_field13109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13110.length)].join('')));

}
});

sablono.core.time_field13109.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.time_field13109.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.time_field13109.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.time_field13109.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13109);

/**
 * Creates a url input field.
 */
sablono.core.url_field13113 = (function sablono$core$url_field13113(var_args){
var args13114 = [];
var len__7544__auto___13181 = arguments.length;
var i__7545__auto___13182 = (0);
while(true){
if((i__7545__auto___13182 < len__7544__auto___13181)){
args13114.push((arguments[i__7545__auto___13182]));

var G__13183 = (i__7545__auto___13182 + (1));
i__7545__auto___13182 = G__13183;
continue;
} else {
}
break;
}

var G__13116 = args13114.length;
switch (G__13116) {
case 1:
return sablono.core.url_field13113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13114.length)].join('')));

}
});

sablono.core.url_field13113.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.url_field13113.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.url_field13113.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.url_field13113.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13113);

/**
 * Creates a week input field.
 */
sablono.core.week_field13117 = (function sablono$core$week_field13117(var_args){
var args13118 = [];
var len__7544__auto___13185 = arguments.length;
var i__7545__auto___13186 = (0);
while(true){
if((i__7545__auto___13186 < len__7544__auto___13185)){
args13118.push((arguments[i__7545__auto___13186]));

var G__13187 = (i__7545__auto___13186 + (1));
i__7545__auto___13186 = G__13187;
continue;
} else {
}
break;
}

var G__13120 = args13118.length;
switch (G__13120) {
case 1:
return sablono.core.week_field13117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13118.length)].join('')));

}
});

sablono.core.week_field13117.cljs$core$IFn$_invoke$arity$1 = (function (name__12952__auto__){
return sablono.core.week_field13117.cljs$core$IFn$_invoke$arity$2(name__12952__auto__,null);
});

sablono.core.week_field13117.cljs$core$IFn$_invoke$arity$2 = (function (name__12952__auto__,value__12953__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__12952__auto__,value__12953__auto__);
});

sablono.core.week_field13117.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13117);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13189 = (function sablono$core$check_box13189(var_args){
var args13190 = [];
var len__7544__auto___13193 = arguments.length;
var i__7545__auto___13194 = (0);
while(true){
if((i__7545__auto___13194 < len__7544__auto___13193)){
args13190.push((arguments[i__7545__auto___13194]));

var G__13195 = (i__7545__auto___13194 + (1));
i__7545__auto___13194 = G__13195;
continue;
} else {
}
break;
}

var G__13192 = args13190.length;
switch (G__13192) {
case 1:
return sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13190.length)].join('')));

}
});

sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13189.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13189.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13189);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13197 = (function sablono$core$radio_button13197(var_args){
var args13198 = [];
var len__7544__auto___13201 = arguments.length;
var i__7545__auto___13202 = (0);
while(true){
if((i__7545__auto___13202 < len__7544__auto___13201)){
args13198.push((arguments[i__7545__auto___13202]));

var G__13203 = (i__7545__auto___13202 + (1));
i__7545__auto___13202 = G__13203;
continue;
} else {
}
break;
}

var G__13200 = args13198.length;
switch (G__13200) {
case 1:
return sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13198.length)].join('')));

}
});

sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13197.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13197.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13197);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13206 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13206);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13207 = (function sablono$core$select_options13207(coll){
var iter__7258__auto__ = (function sablono$core$select_options13207_$_iter__13218(s__13219){
return (new cljs.core.LazySeq(null,(function (){
var s__13219__$1 = s__13219;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13219__$1);
if(temp__4657__auto__){
var s__13219__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13219__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13219__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13221 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13220 = (0);
while(true){
if((i__13220 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13220);
cljs.core.chunk_append(b__13221,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13226 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13226,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13226,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13226,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13207(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13228 = (i__13220 + (1));
i__13220 = G__13228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13221),sablono$core$select_options13207_$_iter__13218(cljs.core.chunk_rest(s__13219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13221),null);
}
} else {
var x = cljs.core.first(s__13219__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13227 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13207(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13207_$_iter__13218(cljs.core.rest(s__13219__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13207);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13229 = (function sablono$core$drop_down13229(var_args){
var args13230 = [];
var len__7544__auto___13233 = arguments.length;
var i__7545__auto___13234 = (0);
while(true){
if((i__7545__auto___13234 < len__7544__auto___13233)){
args13230.push((arguments[i__7545__auto___13234]));

var G__13235 = (i__7545__auto___13234 + (1));
i__7545__auto___13234 = G__13235;
continue;
} else {
}
break;
}

var G__13232 = args13230.length;
switch (G__13232) {
case 2:
return sablono.core.drop_down13229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13229.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13230.length)].join('')));

}
});

sablono.core.drop_down13229.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13229.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13229.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13229.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13229);
/**
 * Creates a text area element.
 */
sablono.core.text_area13237 = (function sablono$core$text_area13237(var_args){
var args13238 = [];
var len__7544__auto___13241 = arguments.length;
var i__7545__auto___13242 = (0);
while(true){
if((i__7545__auto___13242 < len__7544__auto___13241)){
args13238.push((arguments[i__7545__auto___13242]));

var G__13243 = (i__7545__auto___13242 + (1));
i__7545__auto___13242 = G__13243;
continue;
} else {
}
break;
}

var G__13240 = args13238.length;
switch (G__13240) {
case 1:
return sablono.core.text_area13237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13238.length)].join('')));

}
});

sablono.core.text_area13237.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13237.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13237.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area13237.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13237);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13245 = (function sablono$core$label13245(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13245);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13246 = (function sablono$core$submit_button13246(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13246);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13247 = (function sablono$core$reset_button13247(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13247);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13248 = (function sablono$core$form_to13248(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13256 = arguments.length;
var i__7545__auto___13257 = (0);
while(true){
if((i__7545__auto___13257 < len__7544__auto___13256)){
args__7551__auto__.push((arguments[i__7545__auto___13257]));

var G__13258 = (i__7545__auto___13257 + (1));
i__7545__auto___13257 = G__13258;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.form_to13248.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.form_to13248.cljs$core$IFn$_invoke$arity$variadic = (function (p__13251,body){
var vec__13252 = p__13251;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13252,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13252,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13253 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13254 = "_method";
var G__13255 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13253,G__13254,G__13255) : sablono.core.hidden_field.call(null,G__13253,G__13254,G__13255));
})()], null)),body));
});

sablono.core.form_to13248.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13248.cljs$lang$applyTo = (function (seq13249){
var G__13250 = cljs.core.first(seq13249);
var seq13249__$1 = cljs.core.next(seq13249);
return sablono.core.form_to13248.cljs$core$IFn$_invoke$arity$variadic(G__13250,seq13249__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13248);
