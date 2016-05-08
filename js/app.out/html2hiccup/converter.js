// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('html2hiccup.converter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hickory.core');
goog.require('clojure.walk');
/**
 * Is this a string, and does it consist of only whitespace?
 */
html2hiccup.converter.whitespace_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/\s*/));
/**
 * Fixup hiccup tree generate by hickory, this function do:
 *   1. remove wired \n\s* in string.
 *   2. remove all pure whitespace.
 */
html2hiccup.converter.fixup_hiccup = (function html2hiccup$converter$fixup_hiccup(row){
return clojure.walk.prewalk((function (form){
if(typeof form === 'string'){
return clojure.string.replace(clojure.string.trim(clojure.string.trim_newline(form)),/\n\s*/,"\n");
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(html2hiccup.converter.whitespace_QMARK_,form));
} else {
return form;

}
}
}),row);
});
/**
 * Convert Html syntax to Hiccup syntax, return result in string.
 */
html2hiccup.converter.html__GT_hiccup = (function html2hiccup$converter$html__GT_hiccup(content){
return cljs.core.identity(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace([cljs.core.str(html2hiccup.converter.fixup_hiccup(hickory.core.as_hiccup(hickory.core.parse(content))))].join(''),/\((.*)\)/,"$1"),/\[/,"\n["),/\n\[:html/,"[:html"),/ \{\}/,""),/]\s*]/,"]]"),/}\s*\"/,"}\n\""),/]]/,"]\n]"));
});
