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
var G__13122__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(0),null);
var body = cljs.core.nthnext(vec__13121,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13123__i = 0, G__13123__a = new Array(arguments.length -  0);
while (G__13123__i < G__13123__a.length) {G__13123__a[G__13123__i] = arguments[G__13123__i + 0]; ++G__13123__i;}
  args = new cljs.core.IndexedSeq(G__13123__a,0);
} 
return G__13122__delegate.call(this,args);};
G__13122.cljs$lang$maxFixedArity = 0;
G__13122.cljs$lang$applyTo = (function (arglist__13124){
var args = cljs.core.seq(arglist__13124);
return G__13122__delegate(args);
});
G__13122.cljs$core$IFn$_invoke$arity$variadic = G__13122__delegate;
return G__13122;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7258__auto__ = (function sablono$core$update_arglists_$_iter__13131(s__13132){
return (new cljs.core.LazySeq(null,(function (){
var s__13132__$1 = s__13132;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13132__$1);
if(temp__4657__auto__){
var s__13132__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13132__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13132__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13134 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13133 = (0);
while(true){
if((i__13133 < size__7257__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13133);
cljs.core.chunk_append(b__13134,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13137 = (i__13133 + (1));
i__13133 = G__13137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13134),sablono$core$update_arglists_$_iter__13131(cljs.core.chunk_rest(s__13132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13134),null);
}
} else {
var args = cljs.core.first(s__13132__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13131(cljs.core.rest(s__13132__$2)));
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
var len__7544__auto___13145 = arguments.length;
var i__7545__auto___13146 = (0);
while(true){
if((i__7545__auto___13146 < len__7544__auto___13145)){
args__7551__auto__.push((arguments[i__7545__auto___13146]));

var G__13147 = (i__7545__auto___13146 + (1));
i__7545__auto___13146 = G__13147;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((0) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7552__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7258__auto__ = (function sablono$core$iter__13139(s__13140){
return (new cljs.core.LazySeq(null,(function (){
var s__13140__$1 = s__13140;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13140__$1);
if(temp__4657__auto__){
var s__13140__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13140__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13140__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13142 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13141 = (0);
while(true){
if((i__13141 < size__7257__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13141);
cljs.core.chunk_append(b__13142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13148 = (i__13141 + (1));
i__13141 = G__13148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13142),sablono$core$iter__13139(cljs.core.chunk_rest(s__13140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13142),null);
}
} else {
var style = cljs.core.first(s__13140__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13139(cljs.core.rest(s__13140__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq13138){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13138));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13153 = goog.dom.getDocument().body;
var G__13154 = (function (){var G__13155 = "script";
var G__13156 = {"src": src};
return goog.dom.createDom(G__13155,G__13156);
})();
return goog.dom.appendChild(G__13153,G__13154);
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
sablono.core.link_to13157 = (function sablono$core$link_to13157(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13160 = arguments.length;
var i__7545__auto___13161 = (0);
while(true){
if((i__7545__auto___13161 < len__7544__auto___13160)){
args__7551__auto__.push((arguments[i__7545__auto___13161]));

var G__13162 = (i__7545__auto___13161 + (1));
i__7545__auto___13161 = G__13162;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.link_to13157.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.link_to13157.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to13157.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13157.cljs$lang$applyTo = (function (seq13158){
var G__13159 = cljs.core.first(seq13158);
var seq13158__$1 = cljs.core.next(seq13158);
return sablono.core.link_to13157.cljs$core$IFn$_invoke$arity$variadic(G__13159,seq13158__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13157);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13163 = (function sablono$core$mail_to13163(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13168 = arguments.length;
var i__7545__auto___13169 = (0);
while(true){
if((i__7545__auto___13169 < len__7544__auto___13168)){
args__7551__auto__.push((arguments[i__7545__auto___13169]));

var G__13170 = (i__7545__auto___13169 + (1));
i__7545__auto___13169 = G__13170;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.mail_to13163.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.mail_to13163.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13166){
var vec__13167 = p__13166;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6486__auto__ = content;
if(cljs.core.truth_(or__6486__auto__)){
return or__6486__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13163.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13163.cljs$lang$applyTo = (function (seq13164){
var G__13165 = cljs.core.first(seq13164);
var seq13164__$1 = cljs.core.next(seq13164);
return sablono.core.mail_to13163.cljs$core$IFn$_invoke$arity$variadic(G__13165,seq13164__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13163);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13171 = (function sablono$core$unordered_list13171(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7258__auto__ = (function sablono$core$unordered_list13171_$_iter__13178(s__13179){
return (new cljs.core.LazySeq(null,(function (){
var s__13179__$1 = s__13179;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13179__$1);
if(temp__4657__auto__){
var s__13179__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13179__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13179__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13181 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13180 = (0);
while(true){
if((i__13180 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13180);
cljs.core.chunk_append(b__13181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13184 = (i__13180 + (1));
i__13180 = G__13184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13181),sablono$core$unordered_list13171_$_iter__13178(cljs.core.chunk_rest(s__13179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13181),null);
}
} else {
var x = cljs.core.first(s__13179__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13171_$_iter__13178(cljs.core.rest(s__13179__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13171);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13185 = (function sablono$core$ordered_list13185(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7258__auto__ = (function sablono$core$ordered_list13185_$_iter__13192(s__13193){
return (new cljs.core.LazySeq(null,(function (){
var s__13193__$1 = s__13193;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13193__$1);
if(temp__4657__auto__){
var s__13193__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13193__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13193__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13195 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13194 = (0);
while(true){
if((i__13194 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13194);
cljs.core.chunk_append(b__13195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13198 = (i__13194 + (1));
i__13194 = G__13198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13195),sablono$core$ordered_list13185_$_iter__13192(cljs.core.chunk_rest(s__13193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13195),null);
}
} else {
var x = cljs.core.first(s__13193__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13185_$_iter__13192(cljs.core.rest(s__13193__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13185);
/**
 * Create an image element.
 */
sablono.core.image13199 = (function sablono$core$image13199(var_args){
var args13200 = [];
var len__7544__auto___13203 = arguments.length;
var i__7545__auto___13204 = (0);
while(true){
if((i__7545__auto___13204 < len__7544__auto___13203)){
args13200.push((arguments[i__7545__auto___13204]));

var G__13205 = (i__7545__auto___13204 + (1));
i__7545__auto___13204 = G__13205;
continue;
} else {
}
break;
}

var G__13202 = args13200.length;
switch (G__13202) {
case 1:
return sablono.core.image13199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13200.length)].join('')));

}
});

sablono.core.image13199.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13199.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13199.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13199);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13207_SHARP_,p2__13208_SHARP_){
return [cljs.core.str(p1__13207_SHARP_),cljs.core.str("["),cljs.core.str(p2__13208_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13209_SHARP_,p2__13210_SHARP_){
return [cljs.core.str(p1__13209_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13210_SHARP_)].join('');
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
sablono.core.color_field13211 = (function sablono$core$color_field13211(var_args){
var args13212 = [];
var len__7544__auto___13279 = arguments.length;
var i__7545__auto___13280 = (0);
while(true){
if((i__7545__auto___13280 < len__7544__auto___13279)){
args13212.push((arguments[i__7545__auto___13280]));

var G__13281 = (i__7545__auto___13280 + (1));
i__7545__auto___13280 = G__13281;
continue;
} else {
}
break;
}

var G__13214 = args13212.length;
switch (G__13214) {
case 1:
return sablono.core.color_field13211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13212.length)].join('')));

}
});

sablono.core.color_field13211.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.color_field13211.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.color_field13211.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.color_field13211.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13211);

/**
 * Creates a date input field.
 */
sablono.core.date_field13215 = (function sablono$core$date_field13215(var_args){
var args13216 = [];
var len__7544__auto___13283 = arguments.length;
var i__7545__auto___13284 = (0);
while(true){
if((i__7545__auto___13284 < len__7544__auto___13283)){
args13216.push((arguments[i__7545__auto___13284]));

var G__13285 = (i__7545__auto___13284 + (1));
i__7545__auto___13284 = G__13285;
continue;
} else {
}
break;
}

var G__13218 = args13216.length;
switch (G__13218) {
case 1:
return sablono.core.date_field13215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13216.length)].join('')));

}
});

sablono.core.date_field13215.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.date_field13215.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.date_field13215.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.date_field13215.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13215);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13219 = (function sablono$core$datetime_field13219(var_args){
var args13220 = [];
var len__7544__auto___13287 = arguments.length;
var i__7545__auto___13288 = (0);
while(true){
if((i__7545__auto___13288 < len__7544__auto___13287)){
args13220.push((arguments[i__7545__auto___13288]));

var G__13289 = (i__7545__auto___13288 + (1));
i__7545__auto___13288 = G__13289;
continue;
} else {
}
break;
}

var G__13222 = args13220.length;
switch (G__13222) {
case 1:
return sablono.core.datetime_field13219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13220.length)].join('')));

}
});

sablono.core.datetime_field13219.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.datetime_field13219.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.datetime_field13219.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.datetime_field13219.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13219);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13223 = (function sablono$core$datetime_local_field13223(var_args){
var args13224 = [];
var len__7544__auto___13291 = arguments.length;
var i__7545__auto___13292 = (0);
while(true){
if((i__7545__auto___13292 < len__7544__auto___13291)){
args13224.push((arguments[i__7545__auto___13292]));

var G__13293 = (i__7545__auto___13292 + (1));
i__7545__auto___13292 = G__13293;
continue;
} else {
}
break;
}

var G__13226 = args13224.length;
switch (G__13226) {
case 1:
return sablono.core.datetime_local_field13223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13224.length)].join('')));

}
});

sablono.core.datetime_local_field13223.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.datetime_local_field13223.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.datetime_local_field13223.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.datetime_local_field13223.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13223);

/**
 * Creates a email input field.
 */
sablono.core.email_field13227 = (function sablono$core$email_field13227(var_args){
var args13228 = [];
var len__7544__auto___13295 = arguments.length;
var i__7545__auto___13296 = (0);
while(true){
if((i__7545__auto___13296 < len__7544__auto___13295)){
args13228.push((arguments[i__7545__auto___13296]));

var G__13297 = (i__7545__auto___13296 + (1));
i__7545__auto___13296 = G__13297;
continue;
} else {
}
break;
}

var G__13230 = args13228.length;
switch (G__13230) {
case 1:
return sablono.core.email_field13227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13228.length)].join('')));

}
});

sablono.core.email_field13227.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.email_field13227.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.email_field13227.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.email_field13227.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13227);

/**
 * Creates a file input field.
 */
sablono.core.file_field13231 = (function sablono$core$file_field13231(var_args){
var args13232 = [];
var len__7544__auto___13299 = arguments.length;
var i__7545__auto___13300 = (0);
while(true){
if((i__7545__auto___13300 < len__7544__auto___13299)){
args13232.push((arguments[i__7545__auto___13300]));

var G__13301 = (i__7545__auto___13300 + (1));
i__7545__auto___13300 = G__13301;
continue;
} else {
}
break;
}

var G__13234 = args13232.length;
switch (G__13234) {
case 1:
return sablono.core.file_field13231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13232.length)].join('')));

}
});

sablono.core.file_field13231.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.file_field13231.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.file_field13231.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.file_field13231.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13231);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13235 = (function sablono$core$hidden_field13235(var_args){
var args13236 = [];
var len__7544__auto___13303 = arguments.length;
var i__7545__auto___13304 = (0);
while(true){
if((i__7545__auto___13304 < len__7544__auto___13303)){
args13236.push((arguments[i__7545__auto___13304]));

var G__13305 = (i__7545__auto___13304 + (1));
i__7545__auto___13304 = G__13305;
continue;
} else {
}
break;
}

var G__13238 = args13236.length;
switch (G__13238) {
case 1:
return sablono.core.hidden_field13235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13236.length)].join('')));

}
});

sablono.core.hidden_field13235.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.hidden_field13235.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.hidden_field13235.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.hidden_field13235.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13235);

/**
 * Creates a month input field.
 */
sablono.core.month_field13239 = (function sablono$core$month_field13239(var_args){
var args13240 = [];
var len__7544__auto___13307 = arguments.length;
var i__7545__auto___13308 = (0);
while(true){
if((i__7545__auto___13308 < len__7544__auto___13307)){
args13240.push((arguments[i__7545__auto___13308]));

var G__13309 = (i__7545__auto___13308 + (1));
i__7545__auto___13308 = G__13309;
continue;
} else {
}
break;
}

var G__13242 = args13240.length;
switch (G__13242) {
case 1:
return sablono.core.month_field13239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13240.length)].join('')));

}
});

sablono.core.month_field13239.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.month_field13239.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.month_field13239.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.month_field13239.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13239);

/**
 * Creates a number input field.
 */
sablono.core.number_field13243 = (function sablono$core$number_field13243(var_args){
var args13244 = [];
var len__7544__auto___13311 = arguments.length;
var i__7545__auto___13312 = (0);
while(true){
if((i__7545__auto___13312 < len__7544__auto___13311)){
args13244.push((arguments[i__7545__auto___13312]));

var G__13313 = (i__7545__auto___13312 + (1));
i__7545__auto___13312 = G__13313;
continue;
} else {
}
break;
}

var G__13246 = args13244.length;
switch (G__13246) {
case 1:
return sablono.core.number_field13243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13244.length)].join('')));

}
});

sablono.core.number_field13243.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.number_field13243.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.number_field13243.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.number_field13243.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13243);

/**
 * Creates a password input field.
 */
sablono.core.password_field13247 = (function sablono$core$password_field13247(var_args){
var args13248 = [];
var len__7544__auto___13315 = arguments.length;
var i__7545__auto___13316 = (0);
while(true){
if((i__7545__auto___13316 < len__7544__auto___13315)){
args13248.push((arguments[i__7545__auto___13316]));

var G__13317 = (i__7545__auto___13316 + (1));
i__7545__auto___13316 = G__13317;
continue;
} else {
}
break;
}

var G__13250 = args13248.length;
switch (G__13250) {
case 1:
return sablono.core.password_field13247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13248.length)].join('')));

}
});

sablono.core.password_field13247.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.password_field13247.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.password_field13247.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.password_field13247.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13247);

/**
 * Creates a range input field.
 */
sablono.core.range_field13251 = (function sablono$core$range_field13251(var_args){
var args13252 = [];
var len__7544__auto___13319 = arguments.length;
var i__7545__auto___13320 = (0);
while(true){
if((i__7545__auto___13320 < len__7544__auto___13319)){
args13252.push((arguments[i__7545__auto___13320]));

var G__13321 = (i__7545__auto___13320 + (1));
i__7545__auto___13320 = G__13321;
continue;
} else {
}
break;
}

var G__13254 = args13252.length;
switch (G__13254) {
case 1:
return sablono.core.range_field13251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13252.length)].join('')));

}
});

sablono.core.range_field13251.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.range_field13251.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.range_field13251.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.range_field13251.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13251);

/**
 * Creates a search input field.
 */
sablono.core.search_field13255 = (function sablono$core$search_field13255(var_args){
var args13256 = [];
var len__7544__auto___13323 = arguments.length;
var i__7545__auto___13324 = (0);
while(true){
if((i__7545__auto___13324 < len__7544__auto___13323)){
args13256.push((arguments[i__7545__auto___13324]));

var G__13325 = (i__7545__auto___13324 + (1));
i__7545__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var G__13258 = args13256.length;
switch (G__13258) {
case 1:
return sablono.core.search_field13255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13256.length)].join('')));

}
});

sablono.core.search_field13255.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.search_field13255.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.search_field13255.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.search_field13255.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13255);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13259 = (function sablono$core$tel_field13259(var_args){
var args13260 = [];
var len__7544__auto___13327 = arguments.length;
var i__7545__auto___13328 = (0);
while(true){
if((i__7545__auto___13328 < len__7544__auto___13327)){
args13260.push((arguments[i__7545__auto___13328]));

var G__13329 = (i__7545__auto___13328 + (1));
i__7545__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var G__13262 = args13260.length;
switch (G__13262) {
case 1:
return sablono.core.tel_field13259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13260.length)].join('')));

}
});

sablono.core.tel_field13259.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.tel_field13259.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.tel_field13259.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.tel_field13259.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13259);

/**
 * Creates a text input field.
 */
sablono.core.text_field13263 = (function sablono$core$text_field13263(var_args){
var args13264 = [];
var len__7544__auto___13331 = arguments.length;
var i__7545__auto___13332 = (0);
while(true){
if((i__7545__auto___13332 < len__7544__auto___13331)){
args13264.push((arguments[i__7545__auto___13332]));

var G__13333 = (i__7545__auto___13332 + (1));
i__7545__auto___13332 = G__13333;
continue;
} else {
}
break;
}

var G__13266 = args13264.length;
switch (G__13266) {
case 1:
return sablono.core.text_field13263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13264.length)].join('')));

}
});

sablono.core.text_field13263.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.text_field13263.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.text_field13263.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.text_field13263.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13263);

/**
 * Creates a time input field.
 */
sablono.core.time_field13267 = (function sablono$core$time_field13267(var_args){
var args13268 = [];
var len__7544__auto___13335 = arguments.length;
var i__7545__auto___13336 = (0);
while(true){
if((i__7545__auto___13336 < len__7544__auto___13335)){
args13268.push((arguments[i__7545__auto___13336]));

var G__13337 = (i__7545__auto___13336 + (1));
i__7545__auto___13336 = G__13337;
continue;
} else {
}
break;
}

var G__13270 = args13268.length;
switch (G__13270) {
case 1:
return sablono.core.time_field13267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13268.length)].join('')));

}
});

sablono.core.time_field13267.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.time_field13267.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.time_field13267.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.time_field13267.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13267);

/**
 * Creates a url input field.
 */
sablono.core.url_field13271 = (function sablono$core$url_field13271(var_args){
var args13272 = [];
var len__7544__auto___13339 = arguments.length;
var i__7545__auto___13340 = (0);
while(true){
if((i__7545__auto___13340 < len__7544__auto___13339)){
args13272.push((arguments[i__7545__auto___13340]));

var G__13341 = (i__7545__auto___13340 + (1));
i__7545__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var G__13274 = args13272.length;
switch (G__13274) {
case 1:
return sablono.core.url_field13271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13272.length)].join('')));

}
});

sablono.core.url_field13271.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.url_field13271.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.url_field13271.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.url_field13271.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13271);

/**
 * Creates a week input field.
 */
sablono.core.week_field13275 = (function sablono$core$week_field13275(var_args){
var args13276 = [];
var len__7544__auto___13343 = arguments.length;
var i__7545__auto___13344 = (0);
while(true){
if((i__7545__auto___13344 < len__7544__auto___13343)){
args13276.push((arguments[i__7545__auto___13344]));

var G__13345 = (i__7545__auto___13344 + (1));
i__7545__auto___13344 = G__13345;
continue;
} else {
}
break;
}

var G__13278 = args13276.length;
switch (G__13278) {
case 1:
return sablono.core.week_field13275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13276.length)].join('')));

}
});

sablono.core.week_field13275.cljs$core$IFn$_invoke$arity$1 = (function (name__13110__auto__){
return sablono.core.week_field13275.cljs$core$IFn$_invoke$arity$2(name__13110__auto__,null);
});

sablono.core.week_field13275.cljs$core$IFn$_invoke$arity$2 = (function (name__13110__auto__,value__13111__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__13110__auto__,value__13111__auto__);
});

sablono.core.week_field13275.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13275);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13347 = (function sablono$core$check_box13347(var_args){
var args13348 = [];
var len__7544__auto___13351 = arguments.length;
var i__7545__auto___13352 = (0);
while(true){
if((i__7545__auto___13352 < len__7544__auto___13351)){
args13348.push((arguments[i__7545__auto___13352]));

var G__13353 = (i__7545__auto___13352 + (1));
i__7545__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var G__13350 = args13348.length;
switch (G__13350) {
case 1:
return sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13348.length)].join('')));

}
});

sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13347.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13347.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13347);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13355 = (function sablono$core$radio_button13355(var_args){
var args13356 = [];
var len__7544__auto___13359 = arguments.length;
var i__7545__auto___13360 = (0);
while(true){
if((i__7545__auto___13360 < len__7544__auto___13359)){
args13356.push((arguments[i__7545__auto___13360]));

var G__13361 = (i__7545__auto___13360 + (1));
i__7545__auto___13360 = G__13361;
continue;
} else {
}
break;
}

var G__13358 = args13356.length;
switch (G__13358) {
case 1:
return sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13356.length)].join('')));

}
});

sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13355.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13355.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13355);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13364 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13364);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13365 = (function sablono$core$select_options13365(coll){
var iter__7258__auto__ = (function sablono$core$select_options13365_$_iter__13376(s__13377){
return (new cljs.core.LazySeq(null,(function (){
var s__13377__$1 = s__13377;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13377__$1);
if(temp__4657__auto__){
var s__13377__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13377__$2)){
var c__7256__auto__ = cljs.core.chunk_first(s__13377__$2);
var size__7257__auto__ = cljs.core.count(c__7256__auto__);
var b__13379 = cljs.core.chunk_buffer(size__7257__auto__);
if((function (){var i__13378 = (0);
while(true){
if((i__13378 < size__7257__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7256__auto__,i__13378);
cljs.core.chunk_append(b__13379,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13384 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13384,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13384,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13384,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13365(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13386 = (i__13378 + (1));
i__13378 = G__13386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13379),sablono$core$select_options13365_$_iter__13376(cljs.core.chunk_rest(s__13377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13379),null);
}
} else {
var x = cljs.core.first(s__13377__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13385 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13365(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13365_$_iter__13376(cljs.core.rest(s__13377__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13365);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13387 = (function sablono$core$drop_down13387(var_args){
var args13388 = [];
var len__7544__auto___13391 = arguments.length;
var i__7545__auto___13392 = (0);
while(true){
if((i__7545__auto___13392 < len__7544__auto___13391)){
args13388.push((arguments[i__7545__auto___13392]));

var G__13393 = (i__7545__auto___13392 + (1));
i__7545__auto___13392 = G__13393;
continue;
} else {
}
break;
}

var G__13390 = args13388.length;
switch (G__13390) {
case 2:
return sablono.core.drop_down13387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13387.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13388.length)].join('')));

}
});

sablono.core.drop_down13387.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13387.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13387.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13387.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13387);
/**
 * Creates a text area element.
 */
sablono.core.text_area13395 = (function sablono$core$text_area13395(var_args){
var args13396 = [];
var len__7544__auto___13399 = arguments.length;
var i__7545__auto___13400 = (0);
while(true){
if((i__7545__auto___13400 < len__7544__auto___13399)){
args13396.push((arguments[i__7545__auto___13400]));

var G__13401 = (i__7545__auto___13400 + (1));
i__7545__auto___13400 = G__13401;
continue;
} else {
}
break;
}

var G__13398 = args13396.length;
switch (G__13398) {
case 1:
return sablono.core.text_area13395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13396.length)].join('')));

}
});

sablono.core.text_area13395.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13395.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13395.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area13395.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13395);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13403 = (function sablono$core$label13403(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13403);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13404 = (function sablono$core$submit_button13404(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13404);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13405 = (function sablono$core$reset_button13405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13405);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13406 = (function sablono$core$form_to13406(var_args){
var args__7551__auto__ = [];
var len__7544__auto___13414 = arguments.length;
var i__7545__auto___13415 = (0);
while(true){
if((i__7545__auto___13415 < len__7544__auto___13414)){
args__7551__auto__.push((arguments[i__7545__auto___13415]));

var G__13416 = (i__7545__auto___13415 + (1));
i__7545__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var argseq__7552__auto__ = ((((1) < args__7551__auto__.length))?(new cljs.core.IndexedSeq(args__7551__auto__.slice((1)),(0))):null);
return sablono.core.form_to13406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7552__auto__);
});

sablono.core.form_to13406.cljs$core$IFn$_invoke$arity$variadic = (function (p__13409,body){
var vec__13410 = p__13409;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13411 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13412 = "_method";
var G__13413 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13411,G__13412,G__13413) : sablono.core.hidden_field.call(null,G__13411,G__13412,G__13413));
})()], null)),body));
});

sablono.core.form_to13406.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13406.cljs$lang$applyTo = (function (seq13407){
var G__13408 = cljs.core.first(seq13407);
var seq13407__$1 = cljs.core.next(seq13407);
return sablono.core.form_to13406.cljs$core$IFn$_invoke$arity$variadic(G__13408,seq13407__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13406);
