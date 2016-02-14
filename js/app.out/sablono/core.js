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
var G__12951__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__12950 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12950,(0),null);
var body = cljs.core.nthnext(vec__12950,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12952__i = 0, G__12952__a = new Array(arguments.length -  0);
while (G__12952__i < G__12952__a.length) {G__12952__a[G__12952__i] = arguments[G__12952__i + 0]; ++G__12952__i;}
  args = new cljs.core.IndexedSeq(G__12952__a,0);
} 
return G__12951__delegate.call(this,args);};
G__12951.cljs$lang$maxFixedArity = 0;
G__12951.cljs$lang$applyTo = (function (arglist__12953){
var args = cljs.core.seq(arglist__12953);
return G__12951__delegate(args);
});
G__12951.cljs$core$IFn$_invoke$arity$variadic = G__12951__delegate;
return G__12951;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7258__auto__ = (function sablono$core$update_arglists_$_iter__12960(s__12961){
return (new cljs.core.LazySeq(null,(function (){
var s__12961__$1 = s__12961;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12961__$1);
if(temp__4657__auto__){
var s__12961__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12961__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__12961__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__12963 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__12962 = (0);
while(true){
if((i__12962 < size__7257__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__12962);
cljs.core.chunk_append(b__12963,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__12966 = (i__12962 + (1));
i__12962 = G__12966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12963),sablono$core$update_arglists_$_iter__12960(cljs.core.chunk_rest(s__12961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12963),null);
}
} else {
var args = cljs.core.first(s__12961__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__12960(cljs.core.rest(s__12961__$2)));
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
var len__7544__auto___12974 = arguments.length;
var i__7545__auto___12975 = (0);
while(true){
if((i__7545__auto___12975 < len__7544__auto___12974)){
args__7551__auto__.push((arguments[i__7545__auto___12975]));

var G__12976 = (i__7545__auto___12975 + (1));
i__7545__auto___12975 = G__12976;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7258__auto__ = (function sablono$core$iter__12968(s__12969){
return (new cljs.core.LazySeq(null,(function (){
var s__12969__$1 = s__12969;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12969__$1);
if(temp__4657__auto__){
var s__12969__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12969__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__12969__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__12971 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__12970 = (0);
while(true){
if((i__12970 < size__7257__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__12970);
cljs.core.chunk_append(b__12971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__12977 = (i__12970 + (1));
i__12970 = G__12977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12971),sablono$core$iter__12968(cljs.core.chunk_rest(s__12969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12971),null);
}
} else {
var style = cljs.core.first(s__12969__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__12968(cljs.core.rest(s__12969__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq12967){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12967));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__12982 = goog.dom.getDocument().body;
var G__12983 = (function (){var G__12984 = "script";
var G__12985 = {"src": src};
return goog.dom.createDom(G__12984,G__12985);
})();
return goog.dom.appendChild(G__12982,G__12983);
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
sablono.core.link_to12986 = (function sablono$core$link_to12986(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12989 = arguments.length;
var i__7545__auto___12990 = (0);
while(true){
if((i__7545__auto___12990 < len__7544__auto___12989)){
args__7551__auto__.push((arguments[i__7545__auto___12990]));

var G__12991 = (i__7545__auto___12990 + (1));
i__7545__auto___12990 = G__12991;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.link_to12986.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.link_to12986.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to12986.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12986.cljs$lang$applyTo = (function (seq12987){
var G__12988 = cljs.core.first(seq12987);
var seq12987__$1 = cljs.core.next(seq12987);
return sablono.core.link_to12986.cljs$core$IFn$_invoke$arity$variadic(G__12988,seq12987__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to12986);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12992 = (function sablono$core$mail_to12992(var_args){
var args__7551__auto__ = [];
var len__7544__auto___12997 = arguments.length;
var i__7545__auto___12998 = (0);
while(true){
if((i__7545__auto___12998 < len__7544__auto___12997)){
args__7551__auto__.push((arguments[i__7545__auto___12998]));

var G__12999 = (i__7545__auto___12998 + (1));
i__7545__auto___12998 = G__12999;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12992.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.mail_to12992.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__12995){
var vec__12996 = p__12995;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12996,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6486__auto__ = content;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12992.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12992.cljs$lang$applyTo = (function (seq12993){
var G__12994 = cljs.core.first(seq12993);
var seq12993__$1 = cljs.core.next(seq12993);
return sablono.core.mail_to12992.cljs$core$IFn$_invoke$arity$variadic(G__12994,seq12993__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to12992);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13000 = (function sablono$core$unordered_list13000(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7258__auto__ = (function sablono$core$unordered_list13000_$_iter__13007(s__13008){
return (new cljs.core.LazySeq(null,(function (){
var s__13008__$1 = s__13008;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13008__$1);
if(temp__4657__auto__){
var s__13008__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13008__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13008__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13010 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13009 = (0);
while(true){
if((i__13009 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13009);
cljs.core.chunk_append(b__13010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13013 = (i__13009 + (1));
i__13009 = G__13013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13010),sablono$core$unordered_list13000_$_iter__13007(cljs.core.chunk_rest(s__13008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13010),null);
}
} else {
var x = cljs.core.first(s__13008__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13000_$_iter__13007(cljs.core.rest(s__13008__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13000);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13014 = (function sablono$core$ordered_list13014(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7258__auto__ = (function sablono$core$ordered_list13014_$_iter__13021(s__13022){
return (new cljs.core.LazySeq(null,(function (){
var s__13022__$1 = s__13022;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13022__$1);
if(temp__4657__auto__){
var s__13022__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13022__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13022__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13024 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13023 = (0);
while(true){
if((i__13023 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13023);
cljs.core.chunk_append(b__13024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13027 = (i__13023 + (1));
i__13023 = G__13027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13024),sablono$core$ordered_list13014_$_iter__13021(cljs.core.chunk_rest(s__13022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13024),null);
}
} else {
var x = cljs.core.first(s__13022__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13014_$_iter__13021(cljs.core.rest(s__13022__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13014);
/**
 * Create an image element.
 */
sablono.core.image13028 = (function sablono$core$image13028(var_args){
var args13029 = [];
var len__7544__auto___13032 = arguments.length;
var i__7545__auto___13033 = (0);
while(true){
if((i__7545__auto___13033 < len__7544__auto___13032)){
args13029.push((arguments[i__7545__auto___13033]));

var G__13034 = (i__7545__auto___13033 + (1));
i__7545__auto___13033 = G__13034;
continue;
} else {
}
break;
}

var G__13031 = args13029.length;
switch (G__13031) {
case 1:
return sablono.core.image13028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13029.length)].join('')));

}
});

sablono.core.image13028.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13028.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13028.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13028);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13036_SHARP_,p2__13037_SHARP_){
return [cljs.core.str(p1__13036_SHARP_),cljs.core.str("["),cljs.core.str(p2__13037_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13038_SHARP_,p2__13039_SHARP_){
return [cljs.core.str(p1__13038_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13039_SHARP_)].join('');
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
sablono.core.color_field13040 = (function sablono$core$color_field13040(var_args){
var args13041 = [];
var len__7544__auto___13108 = arguments.length;
var i__7545__auto___13109 = (0);
while(true){
if((i__7545__auto___13109 < len__7544__auto___13108)){
args13041.push((arguments[i__7545__auto___13109]));

var G__13110 = (i__7545__auto___13109 + (1));
i__7545__auto___13109 = G__13110;
continue;
} else {
}
break;
}

var G__13043 = args13041.length;
switch (G__13043) {
case 1:
return sablono.core.color_field13040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13041.length)].join('')));

}
});

sablono.core.color_field13040.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.color_field13040.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.color_field13040.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.color_field13040.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13040);

/**
 * Creates a date input field.
 */
sablono.core.date_field13044 = (function sablono$core$date_field13044(var_args){
var args13045 = [];
var len__7544__auto___13112 = arguments.length;
var i__7545__auto___13113 = (0);
while(true){
if((i__7545__auto___13113 < len__7544__auto___13112)){
args13045.push((arguments[i__7545__auto___13113]));

var G__13114 = (i__7545__auto___13113 + (1));
i__7545__auto___13113 = G__13114;
continue;
} else {
}
break;
}

var G__13047 = args13045.length;
switch (G__13047) {
case 1:
return sablono.core.date_field13044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13045.length)].join('')));

}
});

sablono.core.date_field13044.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.date_field13044.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.date_field13044.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.date_field13044.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13044);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13048 = (function sablono$core$datetime_field13048(var_args){
var args13049 = [];
var len__7544__auto___13116 = arguments.length;
var i__7545__auto___13117 = (0);
while(true){
if((i__7545__auto___13117 < len__7544__auto___13116)){
args13049.push((arguments[i__7545__auto___13117]));

var G__13118 = (i__7545__auto___13117 + (1));
i__7545__auto___13117 = G__13118;
continue;
} else {
}
break;
}

var G__13051 = args13049.length;
switch (G__13051) {
case 1:
return sablono.core.datetime_field13048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13049.length)].join('')));

}
});

sablono.core.datetime_field13048.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.datetime_field13048.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.datetime_field13048.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.datetime_field13048.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13048);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13052 = (function sablono$core$datetime_local_field13052(var_args){
var args13053 = [];
var len__7544__auto___13120 = arguments.length;
var i__7545__auto___13121 = (0);
while(true){
if((i__7545__auto___13121 < len__7544__auto___13120)){
args13053.push((arguments[i__7545__auto___13121]));

var G__13122 = (i__7545__auto___13121 + (1));
i__7545__auto___13121 = G__13122;
continue;
} else {
}
break;
}

var G__13055 = args13053.length;
switch (G__13055) {
case 1:
return sablono.core.datetime_local_field13052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13053.length)].join('')));

}
});

sablono.core.datetime_local_field13052.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.datetime_local_field13052.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.datetime_local_field13052.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.datetime_local_field13052.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13052);

/**
 * Creates a email input field.
 */
sablono.core.email_field13056 = (function sablono$core$email_field13056(var_args){
var args13057 = [];
var len__7544__auto___13124 = arguments.length;
var i__7545__auto___13125 = (0);
while(true){
if((i__7545__auto___13125 < len__7544__auto___13124)){
args13057.push((arguments[i__7545__auto___13125]));

var G__13126 = (i__7545__auto___13125 + (1));
i__7545__auto___13125 = G__13126;
continue;
} else {
}
break;
}

var G__13059 = args13057.length;
switch (G__13059) {
case 1:
return sablono.core.email_field13056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13057.length)].join('')));

}
});

sablono.core.email_field13056.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.email_field13056.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.email_field13056.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.email_field13056.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13056);

/**
 * Creates a file input field.
 */
sablono.core.file_field13060 = (function sablono$core$file_field13060(var_args){
var args13061 = [];
var len__7544__auto___13128 = arguments.length;
var i__7545__auto___13129 = (0);
while(true){
if((i__7545__auto___13129 < len__7544__auto___13128)){
args13061.push((arguments[i__7545__auto___13129]));

var G__13130 = (i__7545__auto___13129 + (1));
i__7545__auto___13129 = G__13130;
continue;
} else {
}
break;
}

var G__13063 = args13061.length;
switch (G__13063) {
case 1:
return sablono.core.file_field13060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13061.length)].join('')));

}
});

sablono.core.file_field13060.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.file_field13060.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.file_field13060.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.file_field13060.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13060);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13064 = (function sablono$core$hidden_field13064(var_args){
var args13065 = [];
var len__7544__auto___13132 = arguments.length;
var i__7545__auto___13133 = (0);
while(true){
if((i__7545__auto___13133 < len__7544__auto___13132)){
args13065.push((arguments[i__7545__auto___13133]));

var G__13134 = (i__7545__auto___13133 + (1));
i__7545__auto___13133 = G__13134;
continue;
} else {
}
break;
}

var G__13067 = args13065.length;
switch (G__13067) {
case 1:
return sablono.core.hidden_field13064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13065.length)].join('')));

}
});

sablono.core.hidden_field13064.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.hidden_field13064.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.hidden_field13064.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.hidden_field13064.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13064);

/**
 * Creates a month input field.
 */
sablono.core.month_field13068 = (function sablono$core$month_field13068(var_args){
var args13069 = [];
var len__7544__auto___13136 = arguments.length;
var i__7545__auto___13137 = (0);
while(true){
if((i__7545__auto___13137 < len__7544__auto___13136)){
args13069.push((arguments[i__7545__auto___13137]));

var G__13138 = (i__7545__auto___13137 + (1));
i__7545__auto___13137 = G__13138;
continue;
} else {
}
break;
}

var G__13071 = args13069.length;
switch (G__13071) {
case 1:
return sablono.core.month_field13068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13069.length)].join('')));

}
});

sablono.core.month_field13068.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.month_field13068.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.month_field13068.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.month_field13068.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13068);

/**
 * Creates a number input field.
 */
sablono.core.number_field13072 = (function sablono$core$number_field13072(var_args){
var args13073 = [];
var len__7544__auto___13140 = arguments.length;
var i__7545__auto___13141 = (0);
while(true){
if((i__7545__auto___13141 < len__7544__auto___13140)){
args13073.push((arguments[i__7545__auto___13141]));

var G__13142 = (i__7545__auto___13141 + (1));
i__7545__auto___13141 = G__13142;
continue;
} else {
}
break;
}

var G__13075 = args13073.length;
switch (G__13075) {
case 1:
return sablono.core.number_field13072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13073.length)].join('')));

}
});

sablono.core.number_field13072.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.number_field13072.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.number_field13072.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.number_field13072.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13072);

/**
 * Creates a password input field.
 */
sablono.core.password_field13076 = (function sablono$core$password_field13076(var_args){
var args13077 = [];
var len__7544__auto___13144 = arguments.length;
var i__7545__auto___13145 = (0);
while(true){
if((i__7545__auto___13145 < len__7544__auto___13144)){
args13077.push((arguments[i__7545__auto___13145]));

var G__13146 = (i__7545__auto___13145 + (1));
i__7545__auto___13145 = G__13146;
continue;
} else {
}
break;
}

var G__13079 = args13077.length;
switch (G__13079) {
case 1:
return sablono.core.password_field13076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13077.length)].join('')));

}
});

sablono.core.password_field13076.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.password_field13076.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.password_field13076.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.password_field13076.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13076);

/**
 * Creates a range input field.
 */
sablono.core.range_field13080 = (function sablono$core$range_field13080(var_args){
var args13081 = [];
var len__7544__auto___13148 = arguments.length;
var i__7545__auto___13149 = (0);
while(true){
if((i__7545__auto___13149 < len__7544__auto___13148)){
args13081.push((arguments[i__7545__auto___13149]));

var G__13150 = (i__7545__auto___13149 + (1));
i__7545__auto___13149 = G__13150;
continue;
} else {
}
break;
}

var G__13083 = args13081.length;
switch (G__13083) {
case 1:
return sablono.core.range_field13080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13081.length)].join('')));

}
});

sablono.core.range_field13080.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.range_field13080.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.range_field13080.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.range_field13080.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13080);

/**
 * Creates a search input field.
 */
sablono.core.search_field13084 = (function sablono$core$search_field13084(var_args){
var args13085 = [];
var len__7544__auto___13152 = arguments.length;
var i__7545__auto___13153 = (0);
while(true){
if((i__7545__auto___13153 < len__7544__auto___13152)){
args13085.push((arguments[i__7545__auto___13153]));

var G__13154 = (i__7545__auto___13153 + (1));
i__7545__auto___13153 = G__13154;
continue;
} else {
}
break;
}

var G__13087 = args13085.length;
switch (G__13087) {
case 1:
return sablono.core.search_field13084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13085.length)].join('')));

}
});

sablono.core.search_field13084.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.search_field13084.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.search_field13084.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.search_field13084.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13084);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13088 = (function sablono$core$tel_field13088(var_args){
var args13089 = [];
var len__7544__auto___13156 = arguments.length;
var i__7545__auto___13157 = (0);
while(true){
if((i__7545__auto___13157 < len__7544__auto___13156)){
args13089.push((arguments[i__7545__auto___13157]));

var G__13158 = (i__7545__auto___13157 + (1));
i__7545__auto___13157 = G__13158;
continue;
} else {
}
break;
}

var G__13091 = args13089.length;
switch (G__13091) {
case 1:
return sablono.core.tel_field13088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13089.length)].join('')));

}
});

sablono.core.tel_field13088.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.tel_field13088.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.tel_field13088.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.tel_field13088.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13088);

/**
 * Creates a text input field.
 */
sablono.core.text_field13092 = (function sablono$core$text_field13092(var_args){
var args13093 = [];
var len__7544__auto___13160 = arguments.length;
var i__7545__auto___13161 = (0);
while(true){
if((i__7545__auto___13161 < len__7544__auto___13160)){
args13093.push((arguments[i__7545__auto___13161]));

var G__13162 = (i__7545__auto___13161 + (1));
i__7545__auto___13161 = G__13162;
continue;
} else {
}
break;
}

var G__13095 = args13093.length;
switch (G__13095) {
case 1:
return sablono.core.text_field13092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13093.length)].join('')));

}
});

sablono.core.text_field13092.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.text_field13092.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.text_field13092.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.text_field13092.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13092);

/**
 * Creates a time input field.
 */
sablono.core.time_field13096 = (function sablono$core$time_field13096(var_args){
var args13097 = [];
var len__7544__auto___13164 = arguments.length;
var i__7545__auto___13165 = (0);
while(true){
if((i__7545__auto___13165 < len__7544__auto___13164)){
args13097.push((arguments[i__7545__auto___13165]));

var G__13166 = (i__7545__auto___13165 + (1));
i__7545__auto___13165 = G__13166;
continue;
} else {
}
break;
}

var G__13099 = args13097.length;
switch (G__13099) {
case 1:
return sablono.core.time_field13096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13097.length)].join('')));

}
});

sablono.core.time_field13096.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.time_field13096.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.time_field13096.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.time_field13096.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13096);

/**
 * Creates a url input field.
 */
sablono.core.url_field13100 = (function sablono$core$url_field13100(var_args){
var args13101 = [];
var len__7544__auto___13168 = arguments.length;
var i__7545__auto___13169 = (0);
while(true){
if((i__7545__auto___13169 < len__7544__auto___13168)){
args13101.push((arguments[i__7545__auto___13169]));

var G__13170 = (i__7545__auto___13169 + (1));
i__7545__auto___13169 = G__13170;
continue;
} else {
}
break;
}

var G__13103 = args13101.length;
switch (G__13103) {
case 1:
return sablono.core.url_field13100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13101.length)].join('')));

}
});

sablono.core.url_field13100.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.url_field13100.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.url_field13100.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.url_field13100.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13100);

/**
 * Creates a week input field.
 */
sablono.core.week_field13104 = (function sablono$core$week_field13104(var_args){
var args13105 = [];
var len__7544__auto___13172 = arguments.length;
var i__7545__auto___13173 = (0);
while(true){
if((i__7545__auto___13173 < len__7544__auto___13172)){
args13105.push((arguments[i__7545__auto___13173]));

var G__13174 = (i__7545__auto___13173 + (1));
i__7545__auto___13173 = G__13174;
continue;
} else {
}
break;
}

var G__13107 = args13105.length;
switch (G__13107) {
case 1:
return sablono.core.week_field13104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13105.length)].join('')));

}
});

sablono.core.week_field13104.cljs$core$IFn$_invoke$arity$1 = (function (name__12939__auto__){
return sablono.core.week_field13104.cljs$core$IFn$_invoke$arity$2(name__12939__auto__,null);
});

sablono.core.week_field13104.cljs$core$IFn$_invoke$arity$2 = (function (name__12939__auto__,value__12940__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__12939__auto__,value__12940__auto__);
});

sablono.core.week_field13104.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13104);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13176 = (function sablono$core$check_box13176(var_args){
var args13177 = [];
var len__7544__auto___13180 = arguments.length;
var i__7545__auto___13181 = (0);
while(true){
if((i__7545__auto___13181 < len__7544__auto___13180)){
args13177.push((arguments[i__7545__auto___13181]));

var G__13182 = (i__7545__auto___13181 + (1));
i__7545__auto___13181 = G__13182;
continue;
} else {
}
break;
}

var G__13179 = args13177.length;
switch (G__13179) {
case 1:
return sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13177.length)].join('')));

}
});

sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13176.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13176.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13176);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13184 = (function sablono$core$radio_button13184(var_args){
var args13185 = [];
var len__7544__auto___13188 = arguments.length;
var i__7545__auto___13189 = (0);
while(true){
if((i__7545__auto___13189 < len__7544__auto___13188)){
args13185.push((arguments[i__7545__auto___13189]));

var G__13190 = (i__7545__auto___13189 + (1));
i__7545__auto___13189 = G__13190;
continue;
} else {
}
break;
}

var G__13187 = args13185.length;
switch (G__13187) {
case 1:
return sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13185.length)].join('')));

}
});

sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13184.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13184.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13184);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13193 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13193);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13194 = (function sablono$core$select_options13194(coll){
var iter__7258__auto__ = (function sablono$core$select_options13194_$_iter__13205(s__13206){
return (new cljs.core.LazySeq(null,(function (){
var s__13206__$1 = s__13206;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13206__$1);
if(temp__4657__auto__){
var s__13206__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13206__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13206__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13208 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13207 = (0);
while(true){
if((i__13207 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13207);
cljs.core.chunk_append(b__13208,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13213 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13194(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13215 = (i__13207 + (1));
i__13207 = G__13215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13208),sablono$core$select_options13194_$_iter__13205(cljs.core.chunk_rest(s__13206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13208),null);
}
} else {
var x = cljs.core.first(s__13206__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13214 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13194(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13194_$_iter__13205(cljs.core.rest(s__13206__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13194);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13216 = (function sablono$core$drop_down13216(var_args){
var args13217 = [];
var len__7544__auto___13220 = arguments.length;
var i__7545__auto___13221 = (0);
while(true){
if((i__7545__auto___13221 < len__7544__auto___13220)){
args13217.push((arguments[i__7545__auto___13221]));

var G__13222 = (i__7545__auto___13221 + (1));
i__7545__auto___13221 = G__13222;
continue;
} else {
}
break;
}

var G__13219 = args13217.length;
switch (G__13219) {
case 2:
return sablono.core.drop_down13216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13216.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13217.length)].join('')));

}
});

sablono.core.drop_down13216.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13216.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13216.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13216.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13216);
/**
 * Creates a text area element.
 */
sablono.core.text_area13224 = (function sablono$core$text_area13224(var_args){
var args13225 = [];
var len__7544__auto___13228 = arguments.length;
var i__7545__auto___13229 = (0);
while(true){
if((i__7545__auto___13229 < len__7544__auto___13228)){
args13225.push((arguments[i__7545__auto___13229]));

var G__13230 = (i__7545__auto___13229 + (1));
i__7545__auto___13229 = G__13230;
continue;
} else {
}
break;
}

var G__13227 = args13225.length;
switch (G__13227) {
case 1:
return sablono.core.text_area13224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13225.length)].join('')));

}
});

sablono.core.text_area13224.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13224.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13224.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area13224.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13224);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13232 = (function sablono$core$label13232(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13232);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13233 = (function sablono$core$submit_button13233(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13233);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13234 = (function sablono$core$reset_button13234(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13234);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13235 = (function sablono$core$form_to13235(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13243 = arguments.length;
var i__7545__auto___13244 = (0);
while(true){
if((i__7545__auto___13244 < len__7544__auto___13243)){
args__7551__auto__.push((arguments[i__7545__auto___13244]));

var G__13245 = (i__7545__auto___13244 + (1));
i__7545__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.form_to13235.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.form_to13235.cljs$core$IFn$_invoke$arity$variadic = (function (p__13238,body){
var vec__13239 = p__13238;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13239,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13239,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13240 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13241 = "_method";
var G__13242 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13240,G__13241,G__13242) : sablono.core.hidden_field.call(null,G__13240,G__13241,G__13242));
})()], null)),body));
});

sablono.core.form_to13235.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13235.cljs$lang$applyTo = (function (seq13236){
var G__13237 = cljs.core.first(seq13236);
var seq13236__$1 = cljs.core.next(seq13236);
return sablono.core.form_to13235.cljs$core$IFn$_invoke$arity$variadic(G__13237,seq13236__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13235);
