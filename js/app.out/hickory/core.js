// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('hickory.utils');
goog.require('clojure.zip');
goog.require('goog.string');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if((!((this$ == null))) && (!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null)))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
var x__7203__auto__ = (((this$ == null))?null:this$);
var m__7204__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7204__auto__.call(null,this$));
} else {
var m__7204__auto____$1 = (hickory.core.as_hiccup["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7204__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if((!((this$ == null))) && (!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null)))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
var x__7203__auto__ = (((this$ == null))?null:this$);
var m__7204__auto__ = (hickory.core.as_hickory[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7204__auto__.call(null,this$));
} else {
var m__7204__auto____$1 = (hickory.core.as_hickory["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7204__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (Node[[cljs.core.str(type),cljs.core.str("_NODE")].join('')]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.extend_type_with_seqable = (function hickory$core$extend_type_with_seqable(t){
t.prototype.cljs$core$ISeqable$ = true;

return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(array__$1);
});
});
hickory.core.extend_type_with_seqable(NodeList);
if(typeof NamedNodeMap !== 'undefined'){
hickory.core.extend_type_with_seqable(NamedNodeMap);
} else {
}
if(typeof MozNamedAttrMap !== 'undefined'){
hickory.core.extend_type_with_seqable(MozNamedAttrMap);
} else {
}
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if(!(cljs.core.empty_QMARK_(publicId))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return [cljs.core.str("<!DOCTYPE "),cljs.core.str(name),cljs.core.str(">")].join('');
}
});
(hickory.core.HiccupRepresentable["object"] = true);

(hickory.core.as_hiccup["object"] = (function (this$){
var pred__15127 = cljs.core._EQ_;
var expr__15128 = (this$["nodeType"]);
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__15128) : pred__15127.call(null,hickory.core.Attribute,expr__15128)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__15128) : pred__15127.call(null,hickory.core.Comment,expr__15128)))){
return [cljs.core.str("<!--"),cljs.core.str((this$["data"])),cljs.core.str("-->")].join('');
} else {
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__15128) : pred__15127.call(null,hickory.core.Document,expr__15128)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"]));
} else {
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__15128) : pred__15127.call(null,hickory.core.DocumentType,expr__15128)))){
return hickory.core.format_doctype(this$);
} else {
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__15128) : pred__15127.call(null,hickory.core.Element,expr__15128)))){
var tag = hickory.utils.lower_case_keyword((this$["tagName"]));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_((hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.unescapable_content.call(null,tag)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tag,pred__15127,expr__15128){
return (function (p1__15126_SHARP_){
return (p1__15126_SHARP_["wholeText"]);
});})(tag,pred__15127,expr__15128))
,(this$["childNodes"])):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"])))));
} else {
if(cljs.core.truth_((pred__15127.cljs$core$IFn$_invoke$arity$2 ? pred__15127.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__15128) : pred__15127.call(null,hickory.core.Text,expr__15128)))){
return hickory.utils.html_escape((this$["wholeText"]));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15128)].join('')));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);

(hickory.core.as_hickory["object"] = (function (this$){
var pred__15130 = cljs.core._EQ_;
var expr__15131 = (this$["nodeType"]);
if(cljs.core.truth_((pred__15130.cljs$core$IFn$_invoke$arity$2 ? pred__15130.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__15131) : pred__15130.call(null,hickory.core.Attribute,expr__15131)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__15130.cljs$core$IFn$_invoke$arity$2 ? pred__15130.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__15131) : pred__15130.call(null,hickory.core.Comment,expr__15131)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$comment,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_((pred__15130.cljs$core$IFn$_invoke$arity$2 ? pred__15130.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__15131) : pred__15130.call(null,hickory.core.Document,expr__15131)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$document,cljs.core.cst$kw$content,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__15130.cljs$core$IFn$_invoke$arity$2 ? pred__15130.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__15131) : pred__15130.call(null,hickory.core.DocumentType,expr__15131)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$document_DASH_type,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,(this$["name"]),cljs.core.cst$kw$publicid,(this$["publicId"]),cljs.core.cst$kw$systemid,(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_((pred__15130.cljs$core$IFn$_invoke$arity$2 ? pred__15130.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__15131) : pred__15130.call(null,hickory.core.Element,expr__15131)))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["attributes"])))),cljs.core.cst$kw$tag,hickory.utils.lower_case_keyword((this$["tagName"])),cljs.core.cst$kw$content,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__15130.cljs$core$IFn$_invoke$arity$2 ? pred__15130.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__15131) : pred__15130.call(null,hickory.core.Text,expr__15131)))){
return (this$["wholeText"]);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15131)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__4657__auto__ = cljs.core.second((function (){var or__6540__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__4657__auto__)){
var doctype = temp__4657__auto__;
return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if(typeof DOMParser !== 'undefined'){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype(s))){
} else {
hickory.core.remove_el(doctype_el);
}

var temp__4657__auto___15133 = cljs.core.first((doc["head"]["childNodes"]));
if(cljs.core.truth_(temp__4657__auto___15133)){
var title_el_15134 = temp__4657__auto___15133;
if(cljs.core.empty_QMARK_((title_el_15134["text"]))){
hickory.core.remove_el(title_el_15134);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__6540__auto__ = hickory.core.parse_dom_with_domparser(s);
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return hickory.core.parse_dom_with_write(s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return (hickory.core.parse(s)["body"]["childNodes"]);
});
