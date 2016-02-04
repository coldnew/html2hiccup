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
var G__13109__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13108,(0),null);
var body = cljs.core.nthnext(vec__13108,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13110__i = 0, G__13110__a = new Array(arguments.length -  0);
while (G__13110__i < G__13110__a.length) {G__13110__a[G__13110__i] = arguments[G__13110__i + 0]; ++G__13110__i;}
  args = new cljs.core.IndexedSeq(G__13110__a,0);
} 
return G__13109__delegate.call(this,args);};
G__13109.cljs$lang$maxFixedArity = 0;
G__13109.cljs$lang$applyTo = (function (arglist__13111){
var args = cljs.core.seq(arglist__13111);
return G__13109__delegate(args);
});
G__13109.cljs$core$IFn$_invoke$arity$variadic = G__13109__delegate;
return G__13109;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7262__auto__ = (function sablono$core$update_arglists_$_iter__13118(s__13119){
return (new cljs.core.LazySeq(null,(function (){
var s__13119__$1 = s__13119;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13119__$1);
if(temp__4657__auto__){
var s__13119__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13119__$2)){
var c__7260__auto__ = cljs.core.chunk_first(s__13119__$2);
var size__7261__auto__ = cljs.core.count(c__7260__auto__);
var b__13121 = cljs.core.chunk_buffer(size__7261__auto__);
if((function (){var i__13120 = (0);
while(true){
if((i__13120 < size__7261__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7260__auto__,i__13120);
cljs.core.chunk_append(b__13121,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13124 = (i__13120 + (1));
i__13120 = G__13124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13121),sablono$core$update_arglists_$_iter__13118(cljs.core.chunk_rest(s__13119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13121),null);
}
} else {
var args = cljs.core.first(s__13119__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13118(cljs.core.rest(s__13119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7262__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7555__auto__ = [];
var len__7548__auto___13132 = arguments.length;
var i__7549__auto___13133 = (0);
while(true){
if((i__7549__auto___13133 < len__7548__auto___13132)){
args__7555__auto__.push((arguments[i__7549__auto___13133]));

var G__13134 = (i__7549__auto___13133 + (1));
i__7549__auto___13133 = G__13134;
continue;
} else {
}
break;
}

var argseq__7556__auto__ = ((((0) < args__7555__auto__.length))?(new cljs.core.IndexedSeq(args__7555__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7556__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7262__auto__ = (function sablono$core$iter__13126(s__13127){
return (new cljs.core.LazySeq(null,(function (){
var s__13127__$1 = s__13127;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13127__$1);
if(temp__4657__auto__){
var s__13127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13127__$2)){
var c__7260__auto__ = cljs.core.chunk_first(s__13127__$2);
var size__7261__auto__ = cljs.core.count(c__7260__auto__);
var b__13129 = cljs.core.chunk_buffer(size__7261__auto__);
if((function (){var i__13128 = (0);
while(true){
if((i__13128 < size__7261__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7260__auto__,i__13128);
cljs.core.chunk_append(b__13129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13135 = (i__13128 + (1));
i__13128 = G__13135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13129),sablono$core$iter__13126(cljs.core.chunk_rest(s__13127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13129),null);
}
} else {
var style = cljs.core.first(s__13127__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13126(cljs.core.rest(s__13127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7262__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq13125){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13125));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13140 = goog.dom.getDocument().body;
var G__13141 = (function (){var G__13142 = "script";
var G__13143 = {"src": src};
return goog.dom.createDom(G__13142,G__13143);
})();
return goog.dom.appendChild(G__13140,G__13141);
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
sablono.core.link_to13144 = (function sablono$core$link_to13144(var_args){
var args__7555__auto__ = [];
var len__7548__auto___13147 = arguments.length;
var i__7549__auto___13148 = (0);
while(true){
if((i__7549__auto___13148 < len__7548__auto___13147)){
args__7555__auto__.push((arguments[i__7549__auto___13148]));

var G__13149 = (i__7549__auto___13148 + (1));
i__7549__auto___13148 = G__13149;
continue;
} else {
}
break;
}

var argseq__7556__auto__ = ((((1) < args__7555__auto__.length))?(new cljs.core.IndexedSeq(args__7555__auto__.slice((1)),(0))):null);
return sablono.core.link_to13144.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7556__auto__);
});

sablono.core.link_to13144.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to13144.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13144.cljs$lang$applyTo = (function (seq13145){
var G__13146 = cljs.core.first(seq13145);
var seq13145__$1 = cljs.core.next(seq13145);
return sablono.core.link_to13144.cljs$core$IFn$_invoke$arity$variadic(G__13146,seq13145__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13144);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13150 = (function sablono$core$mail_to13150(var_args){
var args__7555__auto__ = [];
var len__7548__auto___13155 = arguments.length;
var i__7549__auto___13156 = (0);
while(true){
if((i__7549__auto___13156 < len__7548__auto___13155)){
args__7555__auto__.push((arguments[i__7549__auto___13156]));

var G__13157 = (i__7549__auto___13156 + (1));
i__7549__auto___13156 = G__13157;
continue;
} else {
}
break;
}

var argseq__7556__auto__ = ((((1) < args__7555__auto__.length))?(new cljs.core.IndexedSeq(args__7555__auto__.slice((1)),(0))):null);
return sablono.core.mail_to13150.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7556__auto__);
});

sablono.core.mail_to13150.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13153){
var vec__13154 = p__13153;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13154,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6490__auto__ = content;
if(cljs.core.truth_(or__6490__auto__)){
return or__6490__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13150.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13150.cljs$lang$applyTo = (function (seq13151){
var G__13152 = cljs.core.first(seq13151);
var seq13151__$1 = cljs.core.next(seq13151);
return sablono.core.mail_to13150.cljs$core$IFn$_invoke$arity$variadic(G__13152,seq13151__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13150);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13158 = (function sablono$core$unordered_list13158(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7262__auto__ = (function sablono$core$unordered_list13158_$_iter__13165(s__13166){
return (new cljs.core.LazySeq(null,(function (){
var s__13166__$1 = s__13166;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13166__$1);
if(temp__4657__auto__){
var s__13166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13166__$2)){
var c__7260__auto__ = cljs.core.chunk_first(s__13166__$2);
var size__7261__auto__ = cljs.core.count(c__7260__auto__);
var b__13168 = cljs.core.chunk_buffer(size__7261__auto__);
if((function (){var i__13167 = (0);
while(true){
if((i__13167 < size__7261__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7260__auto__,i__13167);
cljs.core.chunk_append(b__13168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13171 = (i__13167 + (1));
i__13167 = G__13171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13168),sablono$core$unordered_list13158_$_iter__13165(cljs.core.chunk_rest(s__13166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13168),null);
}
} else {
var x = cljs.core.first(s__13166__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13158_$_iter__13165(cljs.core.rest(s__13166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7262__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13158);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13172 = (function sablono$core$ordered_list13172(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7262__auto__ = (function sablono$core$ordered_list13172_$_iter__13179(s__13180){
return (new cljs.core.LazySeq(null,(function (){
var s__13180__$1 = s__13180;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13180__$1);
if(temp__4657__auto__){
var s__13180__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13180__$2)){
var c__7260__auto__ = cljs.core.chunk_first(s__13180__$2);
var size__7261__auto__ = cljs.core.count(c__7260__auto__);
var b__13182 = cljs.core.chunk_buffer(size__7261__auto__);
if((function (){var i__13181 = (0);
while(true){
if((i__13181 < size__7261__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7260__auto__,i__13181);
cljs.core.chunk_append(b__13182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13185 = (i__13181 + (1));
i__13181 = G__13185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13182),sablono$core$ordered_list13172_$_iter__13179(cljs.core.chunk_rest(s__13180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13182),null);
}
} else {
var x = cljs.core.first(s__13180__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13172_$_iter__13179(cljs.core.rest(s__13180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7262__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13172);
/**
 * Create an image element.
 */
sablono.core.image13186 = (function sablono$core$image13186(var_args){
var args13187 = [];
var len__7548__auto___13190 = arguments.length;
var i__7549__auto___13191 = (0);
while(true){
if((i__7549__auto___13191 < len__7548__auto___13190)){
args13187.push((arguments[i__7549__auto___13191]));

var G__13192 = (i__7549__auto___13191 + (1));
i__7549__auto___13191 = G__13192;
continue;
} else {
}
break;
}

var G__13189 = args13187.length;
switch (G__13189) {
case 1:
return sablono.core.image13186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13187.length)].join('')));

}
});

sablono.core.image13186.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image13186.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13186.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13186);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13194_SHARP_,p2__13195_SHARP_){
return [cljs.core.str(p1__13194_SHARP_),cljs.core.str("["),cljs.core.str(p2__13195_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13196_SHARP_,p2__13197_SHARP_){
return [cljs.core.str(p1__13196_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13197_SHARP_)].join('');
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
sablono.core.color_field13198 = (function sablono$core$color_field13198(var_args){
var args13199 = [];
var len__7548__auto___13266 = arguments.length;
var i__7549__auto___13267 = (0);
while(true){
if((i__7549__auto___13267 < len__7548__auto___13266)){
args13199.push((arguments[i__7549__auto___13267]));

var G__13268 = (i__7549__auto___13267 + (1));
i__7549__auto___13267 = G__13268;
continue;
} else {
}
break;
}

var G__13201 = args13199.length;
switch (G__13201) {
case 1:
return sablono.core.color_field13198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13199.length)].join('')));

}
});

sablono.core.color_field13198.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.color_field13198.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.color_field13198.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.color_field13198.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13198);

/**
 * Creates a date input field.
 */
sablono.core.date_field13202 = (function sablono$core$date_field13202(var_args){
var args13203 = [];
var len__7548__auto___13270 = arguments.length;
var i__7549__auto___13271 = (0);
while(true){
if((i__7549__auto___13271 < len__7548__auto___13270)){
args13203.push((arguments[i__7549__auto___13271]));

var G__13272 = (i__7549__auto___13271 + (1));
i__7549__auto___13271 = G__13272;
continue;
} else {
}
break;
}

var G__13205 = args13203.length;
switch (G__13205) {
case 1:
return sablono.core.date_field13202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13203.length)].join('')));

}
});

sablono.core.date_field13202.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.date_field13202.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.date_field13202.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.date_field13202.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13202);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13206 = (function sablono$core$datetime_field13206(var_args){
var args13207 = [];
var len__7548__auto___13274 = arguments.length;
var i__7549__auto___13275 = (0);
while(true){
if((i__7549__auto___13275 < len__7548__auto___13274)){
args13207.push((arguments[i__7549__auto___13275]));

var G__13276 = (i__7549__auto___13275 + (1));
i__7549__auto___13275 = G__13276;
continue;
} else {
}
break;
}

var G__13209 = args13207.length;
switch (G__13209) {
case 1:
return sablono.core.datetime_field13206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13207.length)].join('')));

}
});

sablono.core.datetime_field13206.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.datetime_field13206.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.datetime_field13206.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.datetime_field13206.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13206);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13210 = (function sablono$core$datetime_local_field13210(var_args){
var args13211 = [];
var len__7548__auto___13278 = arguments.length;
var i__7549__auto___13279 = (0);
while(true){
if((i__7549__auto___13279 < len__7548__auto___13278)){
args13211.push((arguments[i__7549__auto___13279]));

var G__13280 = (i__7549__auto___13279 + (1));
i__7549__auto___13279 = G__13280;
continue;
} else {
}
break;
}

var G__13213 = args13211.length;
switch (G__13213) {
case 1:
return sablono.core.datetime_local_field13210.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13210.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13211.length)].join('')));

}
});

sablono.core.datetime_local_field13210.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.datetime_local_field13210.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.datetime_local_field13210.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.datetime_local_field13210.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13210);

/**
 * Creates a email input field.
 */
sablono.core.email_field13214 = (function sablono$core$email_field13214(var_args){
var args13215 = [];
var len__7548__auto___13282 = arguments.length;
var i__7549__auto___13283 = (0);
while(true){
if((i__7549__auto___13283 < len__7548__auto___13282)){
args13215.push((arguments[i__7549__auto___13283]));

var G__13284 = (i__7549__auto___13283 + (1));
i__7549__auto___13283 = G__13284;
continue;
} else {
}
break;
}

var G__13217 = args13215.length;
switch (G__13217) {
case 1:
return sablono.core.email_field13214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13215.length)].join('')));

}
});

sablono.core.email_field13214.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.email_field13214.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.email_field13214.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.email_field13214.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13214);

/**
 * Creates a file input field.
 */
sablono.core.file_field13218 = (function sablono$core$file_field13218(var_args){
var args13219 = [];
var len__7548__auto___13286 = arguments.length;
var i__7549__auto___13287 = (0);
while(true){
if((i__7549__auto___13287 < len__7548__auto___13286)){
args13219.push((arguments[i__7549__auto___13287]));

var G__13288 = (i__7549__auto___13287 + (1));
i__7549__auto___13287 = G__13288;
continue;
} else {
}
break;
}

var G__13221 = args13219.length;
switch (G__13221) {
case 1:
return sablono.core.file_field13218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13219.length)].join('')));

}
});

sablono.core.file_field13218.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.file_field13218.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.file_field13218.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.file_field13218.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13218);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13222 = (function sablono$core$hidden_field13222(var_args){
var args13223 = [];
var len__7548__auto___13290 = arguments.length;
var i__7549__auto___13291 = (0);
while(true){
if((i__7549__auto___13291 < len__7548__auto___13290)){
args13223.push((arguments[i__7549__auto___13291]));

var G__13292 = (i__7549__auto___13291 + (1));
i__7549__auto___13291 = G__13292;
continue;
} else {
}
break;
}

var G__13225 = args13223.length;
switch (G__13225) {
case 1:
return sablono.core.hidden_field13222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13223.length)].join('')));

}
});

sablono.core.hidden_field13222.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.hidden_field13222.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.hidden_field13222.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.hidden_field13222.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13222);

/**
 * Creates a month input field.
 */
sablono.core.month_field13226 = (function sablono$core$month_field13226(var_args){
var args13227 = [];
var len__7548__auto___13294 = arguments.length;
var i__7549__auto___13295 = (0);
while(true){
if((i__7549__auto___13295 < len__7548__auto___13294)){
args13227.push((arguments[i__7549__auto___13295]));

var G__13296 = (i__7549__auto___13295 + (1));
i__7549__auto___13295 = G__13296;
continue;
} else {
}
break;
}

var G__13229 = args13227.length;
switch (G__13229) {
case 1:
return sablono.core.month_field13226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13227.length)].join('')));

}
});

sablono.core.month_field13226.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.month_field13226.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.month_field13226.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.month_field13226.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13226);

/**
 * Creates a number input field.
 */
sablono.core.number_field13230 = (function sablono$core$number_field13230(var_args){
var args13231 = [];
var len__7548__auto___13298 = arguments.length;
var i__7549__auto___13299 = (0);
while(true){
if((i__7549__auto___13299 < len__7548__auto___13298)){
args13231.push((arguments[i__7549__auto___13299]));

var G__13300 = (i__7549__auto___13299 + (1));
i__7549__auto___13299 = G__13300;
continue;
} else {
}
break;
}

var G__13233 = args13231.length;
switch (G__13233) {
case 1:
return sablono.core.number_field13230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13231.length)].join('')));

}
});

sablono.core.number_field13230.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.number_field13230.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.number_field13230.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.number_field13230.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13230);

/**
 * Creates a password input field.
 */
sablono.core.password_field13234 = (function sablono$core$password_field13234(var_args){
var args13235 = [];
var len__7548__auto___13302 = arguments.length;
var i__7549__auto___13303 = (0);
while(true){
if((i__7549__auto___13303 < len__7548__auto___13302)){
args13235.push((arguments[i__7549__auto___13303]));

var G__13304 = (i__7549__auto___13303 + (1));
i__7549__auto___13303 = G__13304;
continue;
} else {
}
break;
}

var G__13237 = args13235.length;
switch (G__13237) {
case 1:
return sablono.core.password_field13234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13235.length)].join('')));

}
});

sablono.core.password_field13234.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.password_field13234.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.password_field13234.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.password_field13234.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13234);

/**
 * Creates a range input field.
 */
sablono.core.range_field13238 = (function sablono$core$range_field13238(var_args){
var args13239 = [];
var len__7548__auto___13306 = arguments.length;
var i__7549__auto___13307 = (0);
while(true){
if((i__7549__auto___13307 < len__7548__auto___13306)){
args13239.push((arguments[i__7549__auto___13307]));

var G__13308 = (i__7549__auto___13307 + (1));
i__7549__auto___13307 = G__13308;
continue;
} else {
}
break;
}

var G__13241 = args13239.length;
switch (G__13241) {
case 1:
return sablono.core.range_field13238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13239.length)].join('')));

}
});

sablono.core.range_field13238.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.range_field13238.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.range_field13238.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.range_field13238.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13238);

/**
 * Creates a search input field.
 */
sablono.core.search_field13242 = (function sablono$core$search_field13242(var_args){
var args13243 = [];
var len__7548__auto___13310 = arguments.length;
var i__7549__auto___13311 = (0);
while(true){
if((i__7549__auto___13311 < len__7548__auto___13310)){
args13243.push((arguments[i__7549__auto___13311]));

var G__13312 = (i__7549__auto___13311 + (1));
i__7549__auto___13311 = G__13312;
continue;
} else {
}
break;
}

var G__13245 = args13243.length;
switch (G__13245) {
case 1:
return sablono.core.search_field13242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13243.length)].join('')));

}
});

sablono.core.search_field13242.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.search_field13242.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.search_field13242.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.search_field13242.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13242);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13246 = (function sablono$core$tel_field13246(var_args){
var args13247 = [];
var len__7548__auto___13314 = arguments.length;
var i__7549__auto___13315 = (0);
while(true){
if((i__7549__auto___13315 < len__7548__auto___13314)){
args13247.push((arguments[i__7549__auto___13315]));

var G__13316 = (i__7549__auto___13315 + (1));
i__7549__auto___13315 = G__13316;
continue;
} else {
}
break;
}

var G__13249 = args13247.length;
switch (G__13249) {
case 1:
return sablono.core.tel_field13246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13247.length)].join('')));

}
});

sablono.core.tel_field13246.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.tel_field13246.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.tel_field13246.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.tel_field13246.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13246);

/**
 * Creates a text input field.
 */
sablono.core.text_field13250 = (function sablono$core$text_field13250(var_args){
var args13251 = [];
var len__7548__auto___13318 = arguments.length;
var i__7549__auto___13319 = (0);
while(true){
if((i__7549__auto___13319 < len__7548__auto___13318)){
args13251.push((arguments[i__7549__auto___13319]));

var G__13320 = (i__7549__auto___13319 + (1));
i__7549__auto___13319 = G__13320;
continue;
} else {
}
break;
}

var G__13253 = args13251.length;
switch (G__13253) {
case 1:
return sablono.core.text_field13250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13251.length)].join('')));

}
});

sablono.core.text_field13250.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.text_field13250.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.text_field13250.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.text_field13250.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13250);

/**
 * Creates a time input field.
 */
sablono.core.time_field13254 = (function sablono$core$time_field13254(var_args){
var args13255 = [];
var len__7548__auto___13322 = arguments.length;
var i__7549__auto___13323 = (0);
while(true){
if((i__7549__auto___13323 < len__7548__auto___13322)){
args13255.push((arguments[i__7549__auto___13323]));

var G__13324 = (i__7549__auto___13323 + (1));
i__7549__auto___13323 = G__13324;
continue;
} else {
}
break;
}

var G__13257 = args13255.length;
switch (G__13257) {
case 1:
return sablono.core.time_field13254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13255.length)].join('')));

}
});

sablono.core.time_field13254.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.time_field13254.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.time_field13254.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.time_field13254.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13254);

/**
 * Creates a url input field.
 */
sablono.core.url_field13258 = (function sablono$core$url_field13258(var_args){
var args13259 = [];
var len__7548__auto___13326 = arguments.length;
var i__7549__auto___13327 = (0);
while(true){
if((i__7549__auto___13327 < len__7548__auto___13326)){
args13259.push((arguments[i__7549__auto___13327]));

var G__13328 = (i__7549__auto___13327 + (1));
i__7549__auto___13327 = G__13328;
continue;
} else {
}
break;
}

var G__13261 = args13259.length;
switch (G__13261) {
case 1:
return sablono.core.url_field13258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13259.length)].join('')));

}
});

sablono.core.url_field13258.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.url_field13258.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.url_field13258.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.url_field13258.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13258);

/**
 * Creates a week input field.
 */
sablono.core.week_field13262 = (function sablono$core$week_field13262(var_args){
var args13263 = [];
var len__7548__auto___13330 = arguments.length;
var i__7549__auto___13331 = (0);
while(true){
if((i__7549__auto___13331 < len__7548__auto___13330)){
args13263.push((arguments[i__7549__auto___13331]));

var G__13332 = (i__7549__auto___13331 + (1));
i__7549__auto___13331 = G__13332;
continue;
} else {
}
break;
}

var G__13265 = args13263.length;
switch (G__13265) {
case 1:
return sablono.core.week_field13262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13263.length)].join('')));

}
});

sablono.core.week_field13262.cljs$core$IFn$_invoke$arity$1 = (function (name__13097__auto__){
return sablono.core.week_field13262.cljs$core$IFn$_invoke$arity$2(name__13097__auto__,null);
});

sablono.core.week_field13262.cljs$core$IFn$_invoke$arity$2 = (function (name__13097__auto__,value__13098__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__13097__auto__,value__13098__auto__);
});

sablono.core.week_field13262.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13262);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13334 = (function sablono$core$check_box13334(var_args){
var args13335 = [];
var len__7548__auto___13338 = arguments.length;
var i__7549__auto___13339 = (0);
while(true){
if((i__7549__auto___13339 < len__7548__auto___13338)){
args13335.push((arguments[i__7549__auto___13339]));

var G__13340 = (i__7549__auto___13339 + (1));
i__7549__auto___13339 = G__13340;
continue;
} else {
}
break;
}

var G__13337 = args13335.length;
switch (G__13337) {
case 1:
return sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13335.length)].join('')));

}
});

sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13334.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13334.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13334);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13342 = (function sablono$core$radio_button13342(var_args){
var args13343 = [];
var len__7548__auto___13346 = arguments.length;
var i__7549__auto___13347 = (0);
while(true){
if((i__7549__auto___13347 < len__7548__auto___13346)){
args13343.push((arguments[i__7549__auto___13347]));

var G__13348 = (i__7549__auto___13347 + (1));
i__7549__auto___13347 = G__13348;
continue;
} else {
}
break;
}

var G__13345 = args13343.length;
switch (G__13345) {
case 1:
return sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13343.length)].join('')));

}
});

sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13342.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13342.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13342);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13351 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__13351);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13352 = (function sablono$core$select_options13352(coll){
var iter__7262__auto__ = (function sablono$core$select_options13352_$_iter__13363(s__13364){
return (new cljs.core.LazySeq(null,(function (){
var s__13364__$1 = s__13364;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13364__$1);
if(temp__4657__auto__){
var s__13364__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13364__$2)){
var c__7260__auto__ = cljs.core.chunk_first(s__13364__$2);
var size__7261__auto__ = cljs.core.count(c__7260__auto__);
var b__13366 = cljs.core.chunk_buffer(size__7261__auto__);
if((function (){var i__13365 = (0);
while(true){
if((i__13365 < size__7261__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7260__auto__,i__13365);
cljs.core.chunk_append(b__13366,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13371 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13352(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13373 = (i__13365 + (1));
i__13365 = G__13373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13366),sablono$core$select_options13352_$_iter__13363(cljs.core.chunk_rest(s__13364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13366),null);
}
} else {
var x = cljs.core.first(s__13364__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13372 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13372,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13372,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13372,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options13352(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13352_$_iter__13363(cljs.core.rest(s__13364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7262__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13352);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13374 = (function sablono$core$drop_down13374(var_args){
var args13375 = [];
var len__7548__auto___13378 = arguments.length;
var i__7549__auto___13379 = (0);
while(true){
if((i__7549__auto___13379 < len__7548__auto___13378)){
args13375.push((arguments[i__7549__auto___13379]));

var G__13380 = (i__7549__auto___13379 + (1));
i__7549__auto___13379 = G__13380;
continue;
} else {
}
break;
}

var G__13377 = args13375.length;
switch (G__13377) {
case 2:
return sablono.core.drop_down13374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13374.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13375.length)].join('')));

}
});

sablono.core.drop_down13374.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13374.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13374.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13374.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13374);
/**
 * Creates a text area element.
 */
sablono.core.text_area13382 = (function sablono$core$text_area13382(var_args){
var args13383 = [];
var len__7548__auto___13386 = arguments.length;
var i__7549__auto___13387 = (0);
while(true){
if((i__7549__auto___13387 < len__7548__auto___13386)){
args13383.push((arguments[i__7549__auto___13387]));

var G__13388 = (i__7549__auto___13387 + (1));
i__7549__auto___13387 = G__13388;
continue;
} else {
}
break;
}

var G__13385 = args13383.length;
switch (G__13385) {
case 1:
return sablono.core.text_area13382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13383.length)].join('')));

}
});

sablono.core.text_area13382.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13382.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13382.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area13382.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13382);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13390 = (function sablono$core$label13390(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13390);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13391 = (function sablono$core$submit_button13391(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13391);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13392 = (function sablono$core$reset_button13392(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13392);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13393 = (function sablono$core$form_to13393(var_args){
var args__7555__auto__ = [];
var len__7548__auto___13401 = arguments.length;
var i__7549__auto___13402 = (0);
while(true){
if((i__7549__auto___13402 < len__7548__auto___13401)){
args__7555__auto__.push((arguments[i__7549__auto___13402]));

var G__13403 = (i__7549__auto___13402 + (1));
i__7549__auto___13402 = G__13403;
continue;
} else {
}
break;
}

var argseq__7556__auto__ = ((((1) < args__7555__auto__.length))?(new cljs.core.IndexedSeq(args__7555__auto__.slice((1)),(0))):null);
return sablono.core.form_to13393.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7556__auto__);
});

sablono.core.form_to13393.cljs$core$IFn$_invoke$arity$variadic = (function (p__13396,body){
var vec__13397 = p__13396;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13397,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13397,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13398 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13399 = "_method";
var G__13400 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13398,G__13399,G__13400) : sablono.core.hidden_field.call(null,G__13398,G__13399,G__13400));
})()], null)),body));
});

sablono.core.form_to13393.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13393.cljs$lang$applyTo = (function (seq13394){
var G__13395 = cljs.core.first(seq13394);
var seq13394__$1 = cljs.core.next(seq13394);
return sablono.core.form_to13393.cljs$core$IFn$_invoke$arity$variadic(G__13395,seq13394__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13393);
