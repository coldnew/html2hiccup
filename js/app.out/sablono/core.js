// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
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
var G__14818__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14817 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(0),null);
var body = cljs.core.nthnext(vec__14817,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14819__i = 0, G__14819__a = new Array(arguments.length -  0);
while (G__14819__i < G__14819__a.length) {G__14819__a[G__14819__i] = arguments[G__14819__i + 0]; ++G__14819__i;}
  args = new cljs.core.IndexedSeq(G__14819__a,0);
} 
return G__14818__delegate.call(this,args);};
G__14818.cljs$lang$maxFixedArity = 0;
G__14818.cljs$lang$applyTo = (function (arglist__14820){
var args = cljs.core.seq(arglist__14820);
return G__14818__delegate(args);
});
G__14818.cljs$core$IFn$_invoke$arity$variadic = G__14818__delegate;
return G__14818;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7320__auto__ = (function sablono$core$update_arglists_$_iter__14827(s__14828){
return (new cljs.core.LazySeq(null,(function (){
var s__14828__$1 = s__14828;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14828__$1);
if(temp__4657__auto__){
var s__14828__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14828__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14828__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14830 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14829 = (0);
while(true){
if((i__14829 < size__7319__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14829);
cljs.core.chunk_append(b__14830,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14833 = (i__14829 + (1));
i__14829 = G__14833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14830),sablono$core$update_arglists_$_iter__14827(cljs.core.chunk_rest(s__14828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14830),null);
}
} else {
var args = cljs.core.first(s__14828__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14827(cljs.core.rest(s__14828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7617__auto__ = [];
var len__7610__auto___14841 = arguments.length;
var i__7611__auto___14842 = (0);
while(true){
if((i__7611__auto___14842 < len__7610__auto___14841)){
args__7617__auto__.push((arguments[i__7611__auto___14842]));

var G__14843 = (i__7611__auto___14842 + (1));
i__7611__auto___14842 = G__14843;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7320__auto__ = (function sablono$core$iter__14835(s__14836){
return (new cljs.core.LazySeq(null,(function (){
var s__14836__$1 = s__14836;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14836__$1);
if(temp__4657__auto__){
var s__14836__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14836__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14836__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14838 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14837 = (0);
while(true){
if((i__14837 < size__7319__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14837);
cljs.core.chunk_append(b__14838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14844 = (i__14837 + (1));
i__14837 = G__14844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14838),sablono$core$iter__14835(cljs.core.chunk_rest(s__14836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14838),null);
}
} else {
var style = cljs.core.first(s__14836__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14835(cljs.core.rest(s__14836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14834){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14834));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14849 = goog.dom.getDocument().body;
var G__14850 = (function (){var G__14851 = "script";
var G__14852 = {"src": src};
return goog.dom.createDom(G__14851,G__14852);
})();
return goog.dom.appendChild(G__14849,G__14850);
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
sablono.core.link_to14853 = (function sablono$core$link_to14853(var_args){
var args__7617__auto__ = [];
var len__7610__auto___14856 = arguments.length;
var i__7611__auto___14857 = (0);
while(true){
if((i__7611__auto___14857 < len__7610__auto___14856)){
args__7617__auto__.push((arguments[i__7611__auto___14857]));

var G__14858 = (i__7611__auto___14857 + (1));
i__7611__auto___14857 = G__14858;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((1) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14853.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7618__auto__);
});

sablono.core.link_to14853.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to14853.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14853.cljs$lang$applyTo = (function (seq14854){
var G__14855 = cljs.core.first(seq14854);
var seq14854__$1 = cljs.core.next(seq14854);
return sablono.core.link_to14853.cljs$core$IFn$_invoke$arity$variadic(G__14855,seq14854__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14853);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14859 = (function sablono$core$mail_to14859(var_args){
var args__7617__auto__ = [];
var len__7610__auto___14864 = arguments.length;
var i__7611__auto___14865 = (0);
while(true){
if((i__7611__auto___14865 < len__7610__auto___14864)){
args__7617__auto__.push((arguments[i__7611__auto___14865]));

var G__14866 = (i__7611__auto___14865 + (1));
i__7611__auto___14865 = G__14866;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((1) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14859.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7618__auto__);
});

sablono.core.mail_to14859.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14862){
var vec__14863 = p__14862;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6540__auto__ = content;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14859.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14859.cljs$lang$applyTo = (function (seq14860){
var G__14861 = cljs.core.first(seq14860);
var seq14860__$1 = cljs.core.next(seq14860);
return sablono.core.mail_to14859.cljs$core$IFn$_invoke$arity$variadic(G__14861,seq14860__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14859);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14867 = (function sablono$core$unordered_list14867(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7320__auto__ = (function sablono$core$unordered_list14867_$_iter__14874(s__14875){
return (new cljs.core.LazySeq(null,(function (){
var s__14875__$1 = s__14875;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14875__$1);
if(temp__4657__auto__){
var s__14875__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14875__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14875__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14877 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14876 = (0);
while(true){
if((i__14876 < size__7319__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14876);
cljs.core.chunk_append(b__14877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14880 = (i__14876 + (1));
i__14876 = G__14880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14877),sablono$core$unordered_list14867_$_iter__14874(cljs.core.chunk_rest(s__14875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14877),null);
}
} else {
var x = cljs.core.first(s__14875__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14867_$_iter__14874(cljs.core.rest(s__14875__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14867);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14881 = (function sablono$core$ordered_list14881(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7320__auto__ = (function sablono$core$ordered_list14881_$_iter__14888(s__14889){
return (new cljs.core.LazySeq(null,(function (){
var s__14889__$1 = s__14889;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14889__$1);
if(temp__4657__auto__){
var s__14889__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14889__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14889__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14891 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14890 = (0);
while(true){
if((i__14890 < size__7319__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14890);
cljs.core.chunk_append(b__14891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14894 = (i__14890 + (1));
i__14890 = G__14894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14891),sablono$core$ordered_list14881_$_iter__14888(cljs.core.chunk_rest(s__14889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14891),null);
}
} else {
var x = cljs.core.first(s__14889__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14881_$_iter__14888(cljs.core.rest(s__14889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14881);
/**
 * Create an image element.
 */
sablono.core.image14895 = (function sablono$core$image14895(var_args){
var args14896 = [];
var len__7610__auto___14899 = arguments.length;
var i__7611__auto___14900 = (0);
while(true){
if((i__7611__auto___14900 < len__7610__auto___14899)){
args14896.push((arguments[i__7611__auto___14900]));

var G__14901 = (i__7611__auto___14900 + (1));
i__7611__auto___14900 = G__14901;
continue;
} else {
}
break;
}

var G__14898 = args14896.length;
switch (G__14898) {
case 1:
return sablono.core.image14895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14896.length)].join('')));

}
});

sablono.core.image14895.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image14895.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14895.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14895);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14903_SHARP_,p2__14904_SHARP_){
return [cljs.core.str(p1__14903_SHARP_),cljs.core.str("["),cljs.core.str(p2__14904_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14905_SHARP_,p2__14906_SHARP_){
return [cljs.core.str(p1__14905_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14906_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14907 = (function sablono$core$color_field14907(var_args){
var args14908 = [];
var len__7610__auto___14975 = arguments.length;
var i__7611__auto___14976 = (0);
while(true){
if((i__7611__auto___14976 < len__7610__auto___14975)){
args14908.push((arguments[i__7611__auto___14976]));

var G__14977 = (i__7611__auto___14976 + (1));
i__7611__auto___14976 = G__14977;
continue;
} else {
}
break;
}

var G__14910 = args14908.length;
switch (G__14910) {
case 1:
return sablono.core.color_field14907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14908.length)].join('')));

}
});

sablono.core.color_field14907.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.color_field14907.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.color_field14907.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.color_field14907.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14907);

/**
 * Creates a date input field.
 */
sablono.core.date_field14911 = (function sablono$core$date_field14911(var_args){
var args14912 = [];
var len__7610__auto___14979 = arguments.length;
var i__7611__auto___14980 = (0);
while(true){
if((i__7611__auto___14980 < len__7610__auto___14979)){
args14912.push((arguments[i__7611__auto___14980]));

var G__14981 = (i__7611__auto___14980 + (1));
i__7611__auto___14980 = G__14981;
continue;
} else {
}
break;
}

var G__14914 = args14912.length;
switch (G__14914) {
case 1:
return sablono.core.date_field14911.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14911.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14912.length)].join('')));

}
});

sablono.core.date_field14911.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.date_field14911.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.date_field14911.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.date_field14911.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14911);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14915 = (function sablono$core$datetime_field14915(var_args){
var args14916 = [];
var len__7610__auto___14983 = arguments.length;
var i__7611__auto___14984 = (0);
while(true){
if((i__7611__auto___14984 < len__7610__auto___14983)){
args14916.push((arguments[i__7611__auto___14984]));

var G__14985 = (i__7611__auto___14984 + (1));
i__7611__auto___14984 = G__14985;
continue;
} else {
}
break;
}

var G__14918 = args14916.length;
switch (G__14918) {
case 1:
return sablono.core.datetime_field14915.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14915.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14916.length)].join('')));

}
});

sablono.core.datetime_field14915.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.datetime_field14915.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.datetime_field14915.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.datetime_field14915.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14915);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14919 = (function sablono$core$datetime_local_field14919(var_args){
var args14920 = [];
var len__7610__auto___14987 = arguments.length;
var i__7611__auto___14988 = (0);
while(true){
if((i__7611__auto___14988 < len__7610__auto___14987)){
args14920.push((arguments[i__7611__auto___14988]));

var G__14989 = (i__7611__auto___14988 + (1));
i__7611__auto___14988 = G__14989;
continue;
} else {
}
break;
}

var G__14922 = args14920.length;
switch (G__14922) {
case 1:
return sablono.core.datetime_local_field14919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14920.length)].join('')));

}
});

sablono.core.datetime_local_field14919.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.datetime_local_field14919.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.datetime_local_field14919.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.datetime_local_field14919.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14919);

/**
 * Creates a email input field.
 */
sablono.core.email_field14923 = (function sablono$core$email_field14923(var_args){
var args14924 = [];
var len__7610__auto___14991 = arguments.length;
var i__7611__auto___14992 = (0);
while(true){
if((i__7611__auto___14992 < len__7610__auto___14991)){
args14924.push((arguments[i__7611__auto___14992]));

var G__14993 = (i__7611__auto___14992 + (1));
i__7611__auto___14992 = G__14993;
continue;
} else {
}
break;
}

var G__14926 = args14924.length;
switch (G__14926) {
case 1:
return sablono.core.email_field14923.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14923.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14924.length)].join('')));

}
});

sablono.core.email_field14923.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.email_field14923.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.email_field14923.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.email_field14923.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14923);

/**
 * Creates a file input field.
 */
sablono.core.file_field14927 = (function sablono$core$file_field14927(var_args){
var args14928 = [];
var len__7610__auto___14995 = arguments.length;
var i__7611__auto___14996 = (0);
while(true){
if((i__7611__auto___14996 < len__7610__auto___14995)){
args14928.push((arguments[i__7611__auto___14996]));

var G__14997 = (i__7611__auto___14996 + (1));
i__7611__auto___14996 = G__14997;
continue;
} else {
}
break;
}

var G__14930 = args14928.length;
switch (G__14930) {
case 1:
return sablono.core.file_field14927.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14927.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14928.length)].join('')));

}
});

sablono.core.file_field14927.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.file_field14927.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.file_field14927.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.file_field14927.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14927);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14931 = (function sablono$core$hidden_field14931(var_args){
var args14932 = [];
var len__7610__auto___14999 = arguments.length;
var i__7611__auto___15000 = (0);
while(true){
if((i__7611__auto___15000 < len__7610__auto___14999)){
args14932.push((arguments[i__7611__auto___15000]));

var G__15001 = (i__7611__auto___15000 + (1));
i__7611__auto___15000 = G__15001;
continue;
} else {
}
break;
}

var G__14934 = args14932.length;
switch (G__14934) {
case 1:
return sablono.core.hidden_field14931.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14932.length)].join('')));

}
});

sablono.core.hidden_field14931.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.hidden_field14931.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.hidden_field14931.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.hidden_field14931.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14931);

/**
 * Creates a month input field.
 */
sablono.core.month_field14935 = (function sablono$core$month_field14935(var_args){
var args14936 = [];
var len__7610__auto___15003 = arguments.length;
var i__7611__auto___15004 = (0);
while(true){
if((i__7611__auto___15004 < len__7610__auto___15003)){
args14936.push((arguments[i__7611__auto___15004]));

var G__15005 = (i__7611__auto___15004 + (1));
i__7611__auto___15004 = G__15005;
continue;
} else {
}
break;
}

var G__14938 = args14936.length;
switch (G__14938) {
case 1:
return sablono.core.month_field14935.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14935.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14936.length)].join('')));

}
});

sablono.core.month_field14935.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.month_field14935.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.month_field14935.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.month_field14935.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14935);

/**
 * Creates a number input field.
 */
sablono.core.number_field14939 = (function sablono$core$number_field14939(var_args){
var args14940 = [];
var len__7610__auto___15007 = arguments.length;
var i__7611__auto___15008 = (0);
while(true){
if((i__7611__auto___15008 < len__7610__auto___15007)){
args14940.push((arguments[i__7611__auto___15008]));

var G__15009 = (i__7611__auto___15008 + (1));
i__7611__auto___15008 = G__15009;
continue;
} else {
}
break;
}

var G__14942 = args14940.length;
switch (G__14942) {
case 1:
return sablono.core.number_field14939.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14939.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14940.length)].join('')));

}
});

sablono.core.number_field14939.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.number_field14939.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.number_field14939.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.number_field14939.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14939);

/**
 * Creates a password input field.
 */
sablono.core.password_field14943 = (function sablono$core$password_field14943(var_args){
var args14944 = [];
var len__7610__auto___15011 = arguments.length;
var i__7611__auto___15012 = (0);
while(true){
if((i__7611__auto___15012 < len__7610__auto___15011)){
args14944.push((arguments[i__7611__auto___15012]));

var G__15013 = (i__7611__auto___15012 + (1));
i__7611__auto___15012 = G__15013;
continue;
} else {
}
break;
}

var G__14946 = args14944.length;
switch (G__14946) {
case 1:
return sablono.core.password_field14943.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14943.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14944.length)].join('')));

}
});

sablono.core.password_field14943.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.password_field14943.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.password_field14943.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.password_field14943.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14943);

/**
 * Creates a range input field.
 */
sablono.core.range_field14947 = (function sablono$core$range_field14947(var_args){
var args14948 = [];
var len__7610__auto___15015 = arguments.length;
var i__7611__auto___15016 = (0);
while(true){
if((i__7611__auto___15016 < len__7610__auto___15015)){
args14948.push((arguments[i__7611__auto___15016]));

var G__15017 = (i__7611__auto___15016 + (1));
i__7611__auto___15016 = G__15017;
continue;
} else {
}
break;
}

var G__14950 = args14948.length;
switch (G__14950) {
case 1:
return sablono.core.range_field14947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14948.length)].join('')));

}
});

sablono.core.range_field14947.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.range_field14947.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.range_field14947.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.range_field14947.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14947);

/**
 * Creates a search input field.
 */
sablono.core.search_field14951 = (function sablono$core$search_field14951(var_args){
var args14952 = [];
var len__7610__auto___15019 = arguments.length;
var i__7611__auto___15020 = (0);
while(true){
if((i__7611__auto___15020 < len__7610__auto___15019)){
args14952.push((arguments[i__7611__auto___15020]));

var G__15021 = (i__7611__auto___15020 + (1));
i__7611__auto___15020 = G__15021;
continue;
} else {
}
break;
}

var G__14954 = args14952.length;
switch (G__14954) {
case 1:
return sablono.core.search_field14951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14952.length)].join('')));

}
});

sablono.core.search_field14951.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.search_field14951.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.search_field14951.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.search_field14951.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14951);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14955 = (function sablono$core$tel_field14955(var_args){
var args14956 = [];
var len__7610__auto___15023 = arguments.length;
var i__7611__auto___15024 = (0);
while(true){
if((i__7611__auto___15024 < len__7610__auto___15023)){
args14956.push((arguments[i__7611__auto___15024]));

var G__15025 = (i__7611__auto___15024 + (1));
i__7611__auto___15024 = G__15025;
continue;
} else {
}
break;
}

var G__14958 = args14956.length;
switch (G__14958) {
case 1:
return sablono.core.tel_field14955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14956.length)].join('')));

}
});

sablono.core.tel_field14955.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.tel_field14955.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.tel_field14955.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.tel_field14955.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14955);

/**
 * Creates a text input field.
 */
sablono.core.text_field14959 = (function sablono$core$text_field14959(var_args){
var args14960 = [];
var len__7610__auto___15027 = arguments.length;
var i__7611__auto___15028 = (0);
while(true){
if((i__7611__auto___15028 < len__7610__auto___15027)){
args14960.push((arguments[i__7611__auto___15028]));

var G__15029 = (i__7611__auto___15028 + (1));
i__7611__auto___15028 = G__15029;
continue;
} else {
}
break;
}

var G__14962 = args14960.length;
switch (G__14962) {
case 1:
return sablono.core.text_field14959.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14960.length)].join('')));

}
});

sablono.core.text_field14959.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.text_field14959.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.text_field14959.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.text_field14959.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14959);

/**
 * Creates a time input field.
 */
sablono.core.time_field14963 = (function sablono$core$time_field14963(var_args){
var args14964 = [];
var len__7610__auto___15031 = arguments.length;
var i__7611__auto___15032 = (0);
while(true){
if((i__7611__auto___15032 < len__7610__auto___15031)){
args14964.push((arguments[i__7611__auto___15032]));

var G__15033 = (i__7611__auto___15032 + (1));
i__7611__auto___15032 = G__15033;
continue;
} else {
}
break;
}

var G__14966 = args14964.length;
switch (G__14966) {
case 1:
return sablono.core.time_field14963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14964.length)].join('')));

}
});

sablono.core.time_field14963.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.time_field14963.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.time_field14963.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.time_field14963.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14963);

/**
 * Creates a url input field.
 */
sablono.core.url_field14967 = (function sablono$core$url_field14967(var_args){
var args14968 = [];
var len__7610__auto___15035 = arguments.length;
var i__7611__auto___15036 = (0);
while(true){
if((i__7611__auto___15036 < len__7610__auto___15035)){
args14968.push((arguments[i__7611__auto___15036]));

var G__15037 = (i__7611__auto___15036 + (1));
i__7611__auto___15036 = G__15037;
continue;
} else {
}
break;
}

var G__14970 = args14968.length;
switch (G__14970) {
case 1:
return sablono.core.url_field14967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14968.length)].join('')));

}
});

sablono.core.url_field14967.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.url_field14967.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.url_field14967.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.url_field14967.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14967);

/**
 * Creates a week input field.
 */
sablono.core.week_field14971 = (function sablono$core$week_field14971(var_args){
var args14972 = [];
var len__7610__auto___15039 = arguments.length;
var i__7611__auto___15040 = (0);
while(true){
if((i__7611__auto___15040 < len__7610__auto___15039)){
args14972.push((arguments[i__7611__auto___15040]));

var G__15041 = (i__7611__auto___15040 + (1));
i__7611__auto___15040 = G__15041;
continue;
} else {
}
break;
}

var G__14974 = args14972.length;
switch (G__14974) {
case 1:
return sablono.core.week_field14971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14972.length)].join('')));

}
});

sablono.core.week_field14971.cljs$core$IFn$_invoke$arity$1 = (function (name__14806__auto__){
return sablono.core.week_field14971.cljs$core$IFn$_invoke$arity$2(name__14806__auto__,null);
});

sablono.core.week_field14971.cljs$core$IFn$_invoke$arity$2 = (function (name__14806__auto__,value__14807__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__14806__auto__,value__14807__auto__);
});

sablono.core.week_field14971.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14971);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15043 = (function sablono$core$check_box15043(var_args){
var args15044 = [];
var len__7610__auto___15047 = arguments.length;
var i__7611__auto___15048 = (0);
while(true){
if((i__7611__auto___15048 < len__7610__auto___15047)){
args15044.push((arguments[i__7611__auto___15048]));

var G__15049 = (i__7611__auto___15048 + (1));
i__7611__auto___15048 = G__15049;
continue;
} else {
}
break;
}

var G__15046 = args15044.length;
switch (G__15046) {
case 1:
return sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15044.length)].join('')));

}
});

sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box15043.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box15043.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15043);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15051 = (function sablono$core$radio_button15051(var_args){
var args15052 = [];
var len__7610__auto___15055 = arguments.length;
var i__7611__auto___15056 = (0);
while(true){
if((i__7611__auto___15056 < len__7610__auto___15055)){
args15052.push((arguments[i__7611__auto___15056]));

var G__15057 = (i__7611__auto___15056 + (1));
i__7611__auto___15056 = G__15057;
continue;
} else {
}
break;
}

var G__15054 = args15052.length;
switch (G__15054) {
case 1:
return sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15052.length)].join('')));

}
});

sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button15051.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button15051.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15051);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__15060 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__15060);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15061 = (function sablono$core$select_options15061(coll){
var iter__7320__auto__ = (function sablono$core$select_options15061_$_iter__15072(s__15073){
return (new cljs.core.LazySeq(null,(function (){
var s__15073__$1 = s__15073;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15073__$1);
if(temp__4657__auto__){
var s__15073__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15073__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__15073__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__15075 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__15074 = (0);
while(true){
if((i__15074 < size__7319__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__15074);
cljs.core.chunk_append(b__15075,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15080 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options15061(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__15082 = (i__15074 + (1));
i__15074 = G__15082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15075),sablono$core$select_options15061_$_iter__15072(cljs.core.chunk_rest(s__15073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15075),null);
}
} else {
var x = cljs.core.first(s__15073__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15081 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options15061(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options15061_$_iter__15072(cljs.core.rest(s__15073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15061);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15083 = (function sablono$core$drop_down15083(var_args){
var args15084 = [];
var len__7610__auto___15087 = arguments.length;
var i__7611__auto___15088 = (0);
while(true){
if((i__7611__auto___15088 < len__7610__auto___15087)){
args15084.push((arguments[i__7611__auto___15088]));

var G__15089 = (i__7611__auto___15088 + (1));
i__7611__auto___15088 = G__15089;
continue;
} else {
}
break;
}

var G__15086 = args15084.length;
switch (G__15086) {
case 2:
return sablono.core.drop_down15083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15083.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15084.length)].join('')));

}
});

sablono.core.drop_down15083.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15083.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down15083.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down15083.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15083);
/**
 * Creates a text area element.
 */
sablono.core.text_area15091 = (function sablono$core$text_area15091(var_args){
var args15092 = [];
var len__7610__auto___15095 = arguments.length;
var i__7611__auto___15096 = (0);
while(true){
if((i__7611__auto___15096 < len__7610__auto___15095)){
args15092.push((arguments[i__7611__auto___15096]));

var G__15097 = (i__7611__auto___15096 + (1));
i__7611__auto___15096 = G__15097;
continue;
} else {
}
break;
}

var G__15094 = args15092.length;
switch (G__15094) {
case 1:
return sablono.core.text_area15091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15092.length)].join('')));

}
});

sablono.core.text_area15091.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15091.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area15091.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area15091.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15091);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15099 = (function sablono$core$label15099(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15099);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15100 = (function sablono$core$submit_button15100(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15100);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15101 = (function sablono$core$reset_button15101(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15101);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15102 = (function sablono$core$form_to15102(var_args){
var args__7617__auto__ = [];
var len__7610__auto___15110 = arguments.length;
var i__7611__auto___15111 = (0);
while(true){
if((i__7611__auto___15111 < len__7610__auto___15110)){
args__7617__auto__.push((arguments[i__7611__auto___15111]));

var G__15112 = (i__7611__auto___15111 + (1));
i__7611__auto___15111 = G__15112;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((1) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15102.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7618__auto__);
});

sablono.core.form_to15102.cljs$core$IFn$_invoke$arity$variadic = (function (p__15105,body){
var vec__15106 = p__15105;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__15107 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__15108 = "_method";
var G__15109 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__15107,G__15108,G__15109) : sablono.core.hidden_field.call(null,G__15107,G__15108,G__15109));
})()], null)),body));
});

sablono.core.form_to15102.cljs$lang$maxFixedArity = (1);

sablono.core.form_to15102.cljs$lang$applyTo = (function (seq15103){
var G__15104 = cljs.core.first(seq15103);
var seq15103__$1 = cljs.core.next(seq15103);
return sablono.core.form_to15102.cljs$core$IFn$_invoke$arity$variadic(G__15104,seq15103__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15102);
