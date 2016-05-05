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
 * Walk a given Hiccup form and remove all pure whitespace.
 */
html2hiccup.converter.remove_whitespace = (function html2hiccup$converter$remove_whitespace(row){
return clojure.walk.prewalk((function (form){
if(cljs.core.vector_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(html2hiccup.converter.whitespace_QMARK_,form));
} else {
return form;
}
}),row);
});
/**
 * Convert Html syntax to Hiccup syntax, return result in string.
 */
html2hiccup.converter.html__GT_hiccup = (function html2hiccup$converter$html__GT_hiccup(content){
return cljs.core.identity(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace([cljs.core.str(html2hiccup.converter.remove_whitespace(hickory.core.as_hiccup(hickory.core.parse(content))))].join(''),/\((.*)\)/,"$1"),/\"\\n\s*\"/,""),/\\n      /,""),/\\n    /,""),/\[/,"\n["),/\n\[:html/,"[:html"),/ \{\}/,""),/\s*\n/,"\n"),/]\s*]/,"]]"));
});
