// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('html2hiccup.converter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hickory.core');
/**
 * Convert Html syntax to Hiccup syntax, return result in string.
 */
html2hiccup.converter.html__GT_hiccup = (function html2hiccup$converter$html__GT_hiccup(content){
return cljs.core.identity(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace([cljs.core.str(hickory.core.as_hiccup(hickory.core.parse(content)))].join(''),/\((.*)\)/,"$1"),/\"\\n\s*\"/,""),/\"\\n\s*(.*)\\n\s*\"/,"\"$1\""),/\"\\n\s*(.*)/,"\"$1"),/\"(.*)\\n\s*\"/,"\"$1\""),/\[/,"\n["),/\n\[:html/,"[:html"),/ \{\}/,""),/\s*\n/,"\n"),/]\s*]/,"]]"));
});
