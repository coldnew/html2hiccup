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
var G__14849__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14848 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(0),null);
var body = cljs.core.nthnext(vec__14848,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14850__i = 0, G__14850__a = new Array(arguments.length -  0);
while (G__14850__i < G__14850__a.length) {G__14850__a[G__14850__i] = arguments[G__14850__i + 0]; ++G__14850__i;}
  args = new cljs.core.IndexedSeq(G__14850__a,0);
} 
return G__14849__delegate.call(this,args);};
G__14849.cljs$lang$maxFixedArity = 0;
G__14849.cljs$lang$applyTo = (function (arglist__14851){
var args = cljs.core.seq(arglist__14851);
return G__14849__delegate(args);
});
G__14849.cljs$core$IFn$_invoke$arity$variadic = G__14849__delegate;
return G__14849;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7320__auto__ = (function sablono$core$update_arglists_$_iter__14858(s__14859){
return (new cljs.core.LazySeq(null,(function (){
var s__14859__$1 = s__14859;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14859__$1);
if(temp__4657__auto__){
var s__14859__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14859__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14859__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14861 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14860 = (0);
while(true){
if((i__14860 < size__7319__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14860);
cljs.core.chunk_append(b__14861,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14864 = (i__14860 + (1));
i__14860 = G__14864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14861),sablono$core$update_arglists_$_iter__14858(cljs.core.chunk_rest(s__14859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14861),null);
}
} else {
var args = cljs.core.first(s__14859__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14858(cljs.core.rest(s__14859__$2)));
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
var len__7610__auto___14872 = arguments.length;
var i__7611__auto___14873 = (0);
while(true){
if((i__7611__auto___14873 < len__7610__auto___14872)){
args__7617__auto__.push((arguments[i__7611__auto___14873]));

var G__14874 = (i__7611__auto___14873 + (1));
i__7611__auto___14873 = G__14874;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7320__auto__ = (function sablono$core$iter__14866(s__14867){
return (new cljs.core.LazySeq(null,(function (){
var s__14867__$1 = s__14867;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14867__$1);
if(temp__4657__auto__){
var s__14867__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14867__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14867__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14869 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14868 = (0);
while(true){
if((i__14868 < size__7319__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14868);
cljs.core.chunk_append(b__14869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14875 = (i__14868 + (1));
i__14868 = G__14875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14869),sablono$core$iter__14866(cljs.core.chunk_rest(s__14867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14869),null);
}
} else {
var style = cljs.core.first(s__14867__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14866(cljs.core.rest(s__14867__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq14865){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14865));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14880 = goog.dom.getDocument().body;
var G__14881 = (function (){var G__14882 = "script";
var G__14883 = {"src": src};
return goog.dom.createDom(G__14882,G__14883);
})();
return goog.dom.appendChild(G__14880,G__14881);
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
sablono.core.link_to14884 = (function sablono$core$link_to14884(var_args){
var args__7617__auto__ = [];
var len__7610__auto___14887 = arguments.length;
var i__7611__auto___14888 = (0);
while(true){
if((i__7611__auto___14888 < len__7610__auto___14887)){
args__7617__auto__.push((arguments[i__7611__auto___14888]));

var G__14889 = (i__7611__auto___14888 + (1));
i__7611__auto___14888 = G__14889;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((1) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14884.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7618__auto__);
});

sablono.core.link_to14884.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to14884.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14884.cljs$lang$applyTo = (function (seq14885){
var G__14886 = cljs.core.first(seq14885);
var seq14885__$1 = cljs.core.next(seq14885);
return sablono.core.link_to14884.cljs$core$IFn$_invoke$arity$variadic(G__14886,seq14885__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14884);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14890 = (function sablono$core$mail_to14890(var_args){
var args__7617__auto__ = [];
var len__7610__auto___14895 = arguments.length;
var i__7611__auto___14896 = (0);
while(true){
if((i__7611__auto___14896 < len__7610__auto___14895)){
args__7617__auto__.push((arguments[i__7611__auto___14896]));

var G__14897 = (i__7611__auto___14896 + (1));
i__7611__auto___14896 = G__14897;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((1) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14890.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7618__auto__);
});

sablono.core.mail_to14890.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14893){
var vec__14894 = p__14893;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6540__auto__ = content;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14890.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14890.cljs$lang$applyTo = (function (seq14891){
var G__14892 = cljs.core.first(seq14891);
var seq14891__$1 = cljs.core.next(seq14891);
return sablono.core.mail_to14890.cljs$core$IFn$_invoke$arity$variadic(G__14892,seq14891__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14890);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14898 = (function sablono$core$unordered_list14898(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7320__auto__ = (function sablono$core$unordered_list14898_$_iter__14905(s__14906){
return (new cljs.core.LazySeq(null,(function (){
var s__14906__$1 = s__14906;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14906__$1);
if(temp__4657__auto__){
var s__14906__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14906__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14906__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14908 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14907 = (0);
while(true){
if((i__14907 < size__7319__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14907);
cljs.core.chunk_append(b__14908,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14911 = (i__14907 + (1));
i__14907 = G__14911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14908),sablono$core$unordered_list14898_$_iter__14905(cljs.core.chunk_rest(s__14906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14908),null);
}
} else {
var x = cljs.core.first(s__14906__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14898_$_iter__14905(cljs.core.rest(s__14906__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14898);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14912 = (function sablono$core$ordered_list14912(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7320__auto__ = (function sablono$core$ordered_list14912_$_iter__14919(s__14920){
return (new cljs.core.LazySeq(null,(function (){
var s__14920__$1 = s__14920;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14920__$1);
if(temp__4657__auto__){
var s__14920__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14920__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__14920__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__14922 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__14921 = (0);
while(true){
if((i__14921 < size__7319__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__14921);
cljs.core.chunk_append(b__14922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14925 = (i__14921 + (1));
i__14921 = G__14925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14922),sablono$core$ordered_list14912_$_iter__14919(cljs.core.chunk_rest(s__14920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14922),null);
}
} else {
var x = cljs.core.first(s__14920__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14912_$_iter__14919(cljs.core.rest(s__14920__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14912);
/**
 * Create an image element.
 */
sablono.core.image14926 = (function sablono$core$image14926(var_args){
var args14927 = [];
var len__7610__auto___14930 = arguments.length;
var i__7611__auto___14931 = (0);
while(true){
if((i__7611__auto___14931 < len__7610__auto___14930)){
args14927.push((arguments[i__7611__auto___14931]));

var G__14932 = (i__7611__auto___14931 + (1));
i__7611__auto___14931 = G__14932;
continue;
} else {
}
break;
}

var G__14929 = args14927.length;
switch (G__14929) {
case 1:
return sablono.core.image14926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14927.length)].join('')));

}
});

sablono.core.image14926.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image14926.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14926.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14926);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14934_SHARP_,p2__14935_SHARP_){
return [cljs.core.str(p1__14934_SHARP_),cljs.core.str("["),cljs.core.str(p2__14935_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14936_SHARP_,p2__14937_SHARP_){
return [cljs.core.str(p1__14936_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14937_SHARP_)].join('');
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
sablono.core.color_field14938 = (function sablono$core$color_field14938(var_args){
var args14939 = [];
var len__7610__auto___15006 = arguments.length;
var i__7611__auto___15007 = (0);
while(true){
if((i__7611__auto___15007 < len__7610__auto___15006)){
args14939.push((arguments[i__7611__auto___15007]));

var G__15008 = (i__7611__auto___15007 + (1));
i__7611__auto___15007 = G__15008;
continue;
} else {
}
break;
}

var G__14941 = args14939.length;
switch (G__14941) {
case 1:
return sablono.core.color_field14938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14939.length)].join('')));

}
});

sablono.core.color_field14938.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.color_field14938.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.color_field14938.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.color_field14938.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14938);

/**
 * Creates a date input field.
 */
sablono.core.date_field14942 = (function sablono$core$date_field14942(var_args){
var args14943 = [];
var len__7610__auto___15010 = arguments.length;
var i__7611__auto___15011 = (0);
while(true){
if((i__7611__auto___15011 < len__7610__auto___15010)){
args14943.push((arguments[i__7611__auto___15011]));

var G__15012 = (i__7611__auto___15011 + (1));
i__7611__auto___15011 = G__15012;
continue;
} else {
}
break;
}

var G__14945 = args14943.length;
switch (G__14945) {
case 1:
return sablono.core.date_field14942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14943.length)].join('')));

}
});

sablono.core.date_field14942.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.date_field14942.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.date_field14942.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.date_field14942.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14942);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14946 = (function sablono$core$datetime_field14946(var_args){
var args14947 = [];
var len__7610__auto___15014 = arguments.length;
var i__7611__auto___15015 = (0);
while(true){
if((i__7611__auto___15015 < len__7610__auto___15014)){
args14947.push((arguments[i__7611__auto___15015]));

var G__15016 = (i__7611__auto___15015 + (1));
i__7611__auto___15015 = G__15016;
continue;
} else {
}
break;
}

var G__14949 = args14947.length;
switch (G__14949) {
case 1:
return sablono.core.datetime_field14946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14947.length)].join('')));

}
});

sablono.core.datetime_field14946.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.datetime_field14946.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.datetime_field14946.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.datetime_field14946.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14946);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14950 = (function sablono$core$datetime_local_field14950(var_args){
var args14951 = [];
var len__7610__auto___15018 = arguments.length;
var i__7611__auto___15019 = (0);
while(true){
if((i__7611__auto___15019 < len__7610__auto___15018)){
args14951.push((arguments[i__7611__auto___15019]));

var G__15020 = (i__7611__auto___15019 + (1));
i__7611__auto___15019 = G__15020;
continue;
} else {
}
break;
}

var G__14953 = args14951.length;
switch (G__14953) {
case 1:
return sablono.core.datetime_local_field14950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14951.length)].join('')));

}
});

sablono.core.datetime_local_field14950.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.datetime_local_field14950.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.datetime_local_field14950.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.datetime_local_field14950.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14950);

/**
 * Creates a email input field.
 */
sablono.core.email_field14954 = (function sablono$core$email_field14954(var_args){
var args14955 = [];
var len__7610__auto___15022 = arguments.length;
var i__7611__auto___15023 = (0);
while(true){
if((i__7611__auto___15023 < len__7610__auto___15022)){
args14955.push((arguments[i__7611__auto___15023]));

var G__15024 = (i__7611__auto___15023 + (1));
i__7611__auto___15023 = G__15024;
continue;
} else {
}
break;
}

var G__14957 = args14955.length;
switch (G__14957) {
case 1:
return sablono.core.email_field14954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14955.length)].join('')));

}
});

sablono.core.email_field14954.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.email_field14954.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.email_field14954.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.email_field14954.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14954);

/**
 * Creates a file input field.
 */
sablono.core.file_field14958 = (function sablono$core$file_field14958(var_args){
var args14959 = [];
var len__7610__auto___15026 = arguments.length;
var i__7611__auto___15027 = (0);
while(true){
if((i__7611__auto___15027 < len__7610__auto___15026)){
args14959.push((arguments[i__7611__auto___15027]));

var G__15028 = (i__7611__auto___15027 + (1));
i__7611__auto___15027 = G__15028;
continue;
} else {
}
break;
}

var G__14961 = args14959.length;
switch (G__14961) {
case 1:
return sablono.core.file_field14958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14959.length)].join('')));

}
});

sablono.core.file_field14958.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.file_field14958.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.file_field14958.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.file_field14958.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14958);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14962 = (function sablono$core$hidden_field14962(var_args){
var args14963 = [];
var len__7610__auto___15030 = arguments.length;
var i__7611__auto___15031 = (0);
while(true){
if((i__7611__auto___15031 < len__7610__auto___15030)){
args14963.push((arguments[i__7611__auto___15031]));

var G__15032 = (i__7611__auto___15031 + (1));
i__7611__auto___15031 = G__15032;
continue;
} else {
}
break;
}

var G__14965 = args14963.length;
switch (G__14965) {
case 1:
return sablono.core.hidden_field14962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14963.length)].join('')));

}
});

sablono.core.hidden_field14962.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.hidden_field14962.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.hidden_field14962.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.hidden_field14962.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14962);

/**
 * Creates a month input field.
 */
sablono.core.month_field14966 = (function sablono$core$month_field14966(var_args){
var args14967 = [];
var len__7610__auto___15034 = arguments.length;
var i__7611__auto___15035 = (0);
while(true){
if((i__7611__auto___15035 < len__7610__auto___15034)){
args14967.push((arguments[i__7611__auto___15035]));

var G__15036 = (i__7611__auto___15035 + (1));
i__7611__auto___15035 = G__15036;
continue;
} else {
}
break;
}

var G__14969 = args14967.length;
switch (G__14969) {
case 1:
return sablono.core.month_field14966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14967.length)].join('')));

}
});

sablono.core.month_field14966.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.month_field14966.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.month_field14966.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.month_field14966.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14966);

/**
 * Creates a number input field.
 */
sablono.core.number_field14970 = (function sablono$core$number_field14970(var_args){
var args14971 = [];
var len__7610__auto___15038 = arguments.length;
var i__7611__auto___15039 = (0);
while(true){
if((i__7611__auto___15039 < len__7610__auto___15038)){
args14971.push((arguments[i__7611__auto___15039]));

var G__15040 = (i__7611__auto___15039 + (1));
i__7611__auto___15039 = G__15040;
continue;
} else {
}
break;
}

var G__14973 = args14971.length;
switch (G__14973) {
case 1:
return sablono.core.number_field14970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14971.length)].join('')));

}
});

sablono.core.number_field14970.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.number_field14970.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.number_field14970.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.number_field14970.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14970);

/**
 * Creates a password input field.
 */
sablono.core.password_field14974 = (function sablono$core$password_field14974(var_args){
var args14975 = [];
var len__7610__auto___15042 = arguments.length;
var i__7611__auto___15043 = (0);
while(true){
if((i__7611__auto___15043 < len__7610__auto___15042)){
args14975.push((arguments[i__7611__auto___15043]));

var G__15044 = (i__7611__auto___15043 + (1));
i__7611__auto___15043 = G__15044;
continue;
} else {
}
break;
}

var G__14977 = args14975.length;
switch (G__14977) {
case 1:
return sablono.core.password_field14974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14975.length)].join('')));

}
});

sablono.core.password_field14974.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.password_field14974.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.password_field14974.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.password_field14974.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14974);

/**
 * Creates a range input field.
 */
sablono.core.range_field14978 = (function sablono$core$range_field14978(var_args){
var args14979 = [];
var len__7610__auto___15046 = arguments.length;
var i__7611__auto___15047 = (0);
while(true){
if((i__7611__auto___15047 < len__7610__auto___15046)){
args14979.push((arguments[i__7611__auto___15047]));

var G__15048 = (i__7611__auto___15047 + (1));
i__7611__auto___15047 = G__15048;
continue;
} else {
}
break;
}

var G__14981 = args14979.length;
switch (G__14981) {
case 1:
return sablono.core.range_field14978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14979.length)].join('')));

}
});

sablono.core.range_field14978.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.range_field14978.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.range_field14978.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.range_field14978.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14978);

/**
 * Creates a search input field.
 */
sablono.core.search_field14982 = (function sablono$core$search_field14982(var_args){
var args14983 = [];
var len__7610__auto___15050 = arguments.length;
var i__7611__auto___15051 = (0);
while(true){
if((i__7611__auto___15051 < len__7610__auto___15050)){
args14983.push((arguments[i__7611__auto___15051]));

var G__15052 = (i__7611__auto___15051 + (1));
i__7611__auto___15051 = G__15052;
continue;
} else {
}
break;
}

var G__14985 = args14983.length;
switch (G__14985) {
case 1:
return sablono.core.search_field14982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14983.length)].join('')));

}
});

sablono.core.search_field14982.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.search_field14982.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.search_field14982.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.search_field14982.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14982);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14986 = (function sablono$core$tel_field14986(var_args){
var args14987 = [];
var len__7610__auto___15054 = arguments.length;
var i__7611__auto___15055 = (0);
while(true){
if((i__7611__auto___15055 < len__7610__auto___15054)){
args14987.push((arguments[i__7611__auto___15055]));

var G__15056 = (i__7611__auto___15055 + (1));
i__7611__auto___15055 = G__15056;
continue;
} else {
}
break;
}

var G__14989 = args14987.length;
switch (G__14989) {
case 1:
return sablono.core.tel_field14986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14987.length)].join('')));

}
});

sablono.core.tel_field14986.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.tel_field14986.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.tel_field14986.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.tel_field14986.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14986);

/**
 * Creates a text input field.
 */
sablono.core.text_field14990 = (function sablono$core$text_field14990(var_args){
var args14991 = [];
var len__7610__auto___15058 = arguments.length;
var i__7611__auto___15059 = (0);
while(true){
if((i__7611__auto___15059 < len__7610__auto___15058)){
args14991.push((arguments[i__7611__auto___15059]));

var G__15060 = (i__7611__auto___15059 + (1));
i__7611__auto___15059 = G__15060;
continue;
} else {
}
break;
}

var G__14993 = args14991.length;
switch (G__14993) {
case 1:
return sablono.core.text_field14990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14991.length)].join('')));

}
});

sablono.core.text_field14990.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.text_field14990.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.text_field14990.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.text_field14990.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14990);

/**
 * Creates a time input field.
 */
sablono.core.time_field14994 = (function sablono$core$time_field14994(var_args){
var args14995 = [];
var len__7610__auto___15062 = arguments.length;
var i__7611__auto___15063 = (0);
while(true){
if((i__7611__auto___15063 < len__7610__auto___15062)){
args14995.push((arguments[i__7611__auto___15063]));

var G__15064 = (i__7611__auto___15063 + (1));
i__7611__auto___15063 = G__15064;
continue;
} else {
}
break;
}

var G__14997 = args14995.length;
switch (G__14997) {
case 1:
return sablono.core.time_field14994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14995.length)].join('')));

}
});

sablono.core.time_field14994.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.time_field14994.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.time_field14994.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.time_field14994.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14994);

/**
 * Creates a url input field.
 */
sablono.core.url_field14998 = (function sablono$core$url_field14998(var_args){
var args14999 = [];
var len__7610__auto___15066 = arguments.length;
var i__7611__auto___15067 = (0);
while(true){
if((i__7611__auto___15067 < len__7610__auto___15066)){
args14999.push((arguments[i__7611__auto___15067]));

var G__15068 = (i__7611__auto___15067 + (1));
i__7611__auto___15067 = G__15068;
continue;
} else {
}
break;
}

var G__15001 = args14999.length;
switch (G__15001) {
case 1:
return sablono.core.url_field14998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14999.length)].join('')));

}
});

sablono.core.url_field14998.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.url_field14998.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.url_field14998.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.url_field14998.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14998);

/**
 * Creates a week input field.
 */
sablono.core.week_field15002 = (function sablono$core$week_field15002(var_args){
var args15003 = [];
var len__7610__auto___15070 = arguments.length;
var i__7611__auto___15071 = (0);
while(true){
if((i__7611__auto___15071 < len__7610__auto___15070)){
args15003.push((arguments[i__7611__auto___15071]));

var G__15072 = (i__7611__auto___15071 + (1));
i__7611__auto___15071 = G__15072;
continue;
} else {
}
break;
}

var G__15005 = args15003.length;
switch (G__15005) {
case 1:
return sablono.core.week_field15002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15003.length)].join('')));

}
});

sablono.core.week_field15002.cljs$core$IFn$_invoke$arity$1 = (function (name__14837__auto__){
return sablono.core.week_field15002.cljs$core$IFn$_invoke$arity$2(name__14837__auto__,null);
});

sablono.core.week_field15002.cljs$core$IFn$_invoke$arity$2 = (function (name__14837__auto__,value__14838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__14837__auto__,value__14838__auto__);
});

sablono.core.week_field15002.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field15002);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15074 = (function sablono$core$check_box15074(var_args){
var args15075 = [];
var len__7610__auto___15078 = arguments.length;
var i__7611__auto___15079 = (0);
while(true){
if((i__7611__auto___15079 < len__7610__auto___15078)){
args15075.push((arguments[i__7611__auto___15079]));

var G__15080 = (i__7611__auto___15079 + (1));
i__7611__auto___15079 = G__15080;
continue;
} else {
}
break;
}

var G__15077 = args15075.length;
switch (G__15077) {
case 1:
return sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15075.length)].join('')));

}
});

sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box15074.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box15074.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15074);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15082 = (function sablono$core$radio_button15082(var_args){
var args15083 = [];
var len__7610__auto___15086 = arguments.length;
var i__7611__auto___15087 = (0);
while(true){
if((i__7611__auto___15087 < len__7610__auto___15086)){
args15083.push((arguments[i__7611__auto___15087]));

var G__15088 = (i__7611__auto___15087 + (1));
i__7611__auto___15087 = G__15088;
continue;
} else {
}
break;
}

var G__15085 = args15083.length;
switch (G__15085) {
case 1:
return sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15083.length)].join('')));

}
});

sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button15082.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button15082.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15082);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__15091 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__15091);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15092 = (function sablono$core$select_options15092(coll){
var iter__7320__auto__ = (function sablono$core$select_options15092_$_iter__15103(s__15104){
return (new cljs.core.LazySeq(null,(function (){
var s__15104__$1 = s__15104;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15104__$1);
if(temp__4657__auto__){
var s__15104__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15104__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__15104__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__15106 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__15105 = (0);
while(true){
if((i__15105 < size__7319__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__15105);
cljs.core.chunk_append(b__15106,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15111 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15111,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15111,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15111,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options15092(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__15113 = (i__15105 + (1));
i__15105 = G__15113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15106),sablono$core$select_options15092_$_iter__15103(cljs.core.chunk_rest(s__15104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15106),null);
}
} else {
var x = cljs.core.first(s__15104__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15112 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options15092(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options15092_$_iter__15103(cljs.core.rest(s__15104__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15092);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15114 = (function sablono$core$drop_down15114(var_args){
var args15115 = [];
var len__7610__auto___15118 = arguments.length;
var i__7611__auto___15119 = (0);
while(true){
if((i__7611__auto___15119 < len__7610__auto___15118)){
args15115.push((arguments[i__7611__auto___15119]));

var G__15120 = (i__7611__auto___15119 + (1));
i__7611__auto___15119 = G__15120;
continue;
} else {
}
break;
}

var G__15117 = args15115.length;
switch (G__15117) {
case 2:
return sablono.core.drop_down15114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15114.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15115.length)].join('')));

}
});

sablono.core.drop_down15114.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15114.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down15114.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down15114.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15114);
/**
 * Creates a text area element.
 */
sablono.core.text_area15122 = (function sablono$core$text_area15122(var_args){
var args15123 = [];
var len__7610__auto___15126 = arguments.length;
var i__7611__auto___15127 = (0);
while(true){
if((i__7611__auto___15127 < len__7610__auto___15126)){
args15123.push((arguments[i__7611__auto___15127]));

var G__15128 = (i__7611__auto___15127 + (1));
i__7611__auto___15127 = G__15128;
continue;
} else {
}
break;
}

var G__15125 = args15123.length;
switch (G__15125) {
case 1:
return sablono.core.text_area15122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15123.length)].join('')));

}
});

sablono.core.text_area15122.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15122.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area15122.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__6540__auto__ = value;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area15122.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15122);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15130 = (function sablono$core$label15130(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15130);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15131 = (function sablono$core$submit_button15131(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15131);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15132 = (function sablono$core$reset_button15132(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15132);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15133 = (function sablono$core$form_to15133(var_args){
var args__7617__auto__ = [];
var len__7610__auto___15141 = arguments.length;
var i__7611__auto___15142 = (0);
while(true){
if((i__7611__auto___15142 < len__7610__auto___15141)){
args__7617__auto__.push((arguments[i__7611__auto___15142]));

var G__15143 = (i__7611__auto___15142 + (1));
i__7611__auto___15142 = G__15143;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((1) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15133.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7618__auto__);
});

sablono.core.form_to15133.cljs$core$IFn$_invoke$arity$variadic = (function (p__15136,body){
var vec__15137 = p__15136;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__15138 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__15139 = "_method";
var G__15140 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__15138,G__15139,G__15140) : sablono.core.hidden_field.call(null,G__15138,G__15139,G__15140));
})()], null)),body));
});

sablono.core.form_to15133.cljs$lang$maxFixedArity = (1);

sablono.core.form_to15133.cljs$lang$applyTo = (function (seq15134){
var G__15135 = cljs.core.first(seq15134);
var seq15134__$1 = cljs.core.next(seq15134);
return sablono.core.form_to15133.cljs$core$IFn$_invoke$arity$variadic(G__15135,seq15134__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15133);
