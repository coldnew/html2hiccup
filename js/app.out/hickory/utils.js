// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('hickory.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
/**
 * Elements that don't have a meaningful <tag></tag> form.
 */
hickory.utils.void_element = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.cst$kw$hr,null,cljs.core.cst$kw$meta,null,cljs.core.cst$kw$wbr,null,cljs.core.cst$kw$command,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$param,null,cljs.core.cst$kw$link,null,cljs.core.cst$kw$col,null,cljs.core.cst$kw$area,null,cljs.core.cst$kw$br,null,cljs.core.cst$kw$input,null,cljs.core.cst$kw$base,null,cljs.core.cst$kw$embed,null,cljs.core.cst$kw$keygen,null,cljs.core.cst$kw$img,null,cljs.core.cst$kw$track,null], null), null);
/**
 * Elements whose content should never have html-escape codes.
 */
hickory.utils.unescapable_content = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$script,null,cljs.core.cst$kw$style,null], null), null);
hickory.utils.html_escape = (function hickory$utils$html_escape(s){
return goog.string.htmlEscape(s);
});
hickory.utils.starts_with = (function hickory$utils$starts_with(s,prefix){
return goog.string.startsWith(s,prefix);
});
/**
 * Converts its string argument into a lowercase keyword.
 */
hickory.utils.lower_case_keyword = (function hickory$utils$lower_case_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(s));
});
/**
 * Returns a string containing the HTML source for the doctype with given args.
 * The second and third arguments can be nil or empty strings.
 */
hickory.utils.render_doctype = (function hickory$utils$render_doctype(name,publicid,systemid){
return [cljs.core.str("<!DOCTYPE "),cljs.core.str(name),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(publicid))?[cljs.core.str(" PUBLIC \""),cljs.core.str(publicid),cljs.core.str("\"")].join(''):null)),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(systemid))?[cljs.core.str(" \""),cljs.core.str(systemid),cljs.core.str("\"")].join(''):null)),cljs.core.str(">")].join('');
});
