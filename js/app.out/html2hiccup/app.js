// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('html2hiccup.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.core');
goog.require('hickory.core');
goog.require('om.next');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
html2hiccup.app.default_content = "<div class=\"container\">\n  <div class=\"row\">\n    <h2>Html to Hiccup</h2>\n    <a href=\"https://github.com/coldnew/html2hiccup\">\n      Fork me from GitHub\n    </a>\n    <p>\n      Edit Html here and see the generated Hiccup syntax :)\n    </p>\n  </div>\n</div>";
/**
 * Convert Html syntax to Hiccup syntax, return result in string.
 */
html2hiccup.app.html__GT_hiccup = (function html2hiccup$app$html__GT_hiccup(content){
return cljs.core.identity(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace([cljs.core.str(hickory.core.as_hiccup(hickory.core.parse(content)))].join(''),/\((.*)\)/,"$1"),/\"\\n\s*\"/,""),/\"\\n\s*(.*)\\n\s*\"/,"\"$1\""),/\"\\n\s*(.*)/,"\"$1"),/\"(.*)\\n\s*\"/,"\"$1\""),/\[/,"\n["),/\n\[:html/,"[:html"),/ \{\}/,""),/\s*\n/,"\n"),/]\s*]/,"]]"));
});
html2hiccup.app.create_editor = (function html2hiccup$app$create_editor(id,cfg){
return CodeMirror.fromTextArea(goog.dom.getElement(id),cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$indentWithTabs,false,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$indentAuto,true], null),cfg], 0))));
});
/**
 * @constructor
 */
html2hiccup.app.MainWindow = (function html2hiccup$app$MainWindow(){
var this__13542__auto__ = this;
React.Component.apply(this__13542__auto__,arguments);

if(!((this__13542__auto__.initLocalState == null))){
this__13542__auto__.state = this__13542__auto__.initLocalState();
} else {
this__13542__auto__.state = {};
}

return this__13542__auto__;
});

html2hiccup.app.MainWindow.prototype = goog.object.clone(React.Component.prototype);

var x14373_14411 = html2hiccup.app.MainWindow.prototype;
x14373_14411.componentWillUpdate = ((function (x14373_14411){
return (function (next_props__13483__auto__,next_state__13484__auto__){
var this__13482__auto__ = this;
om.next.merge_pending_props_BANG_(this__13482__auto__);

return om.next.merge_pending_state_BANG_(this__13482__auto__);
});})(x14373_14411))
;

x14373_14411.shouldComponentUpdate = ((function (x14373_14411){
return (function (next_props__13483__auto__,next_state__13484__auto__){
var this__13482__auto__ = this;
var or__6490__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__13482__auto__),goog.object.get(next_props__13483__auto__,"omcljs$value"));
if(or__6490__auto__){
return or__6490__auto__;
} else {
var and__6478__auto__ = this__13482__auto__.state;
if(cljs.core.truth_(and__6478__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14376 = this__13482__auto__.state;
var G__14377 = "omcljs$state";
return goog.object.get(G__14376,G__14377);
})(),goog.object.get(next_state__13484__auto__,"omcljs$state"));
} else {
return and__6478__auto__;
}
}
});})(x14373_14411))
;

x14373_14411.componentWillUnmount = ((function (x14373_14411){
return (function (){
var this__13482__auto__ = this;
var r__13488__auto__ = om.next.get_reconciler(this__13482__auto__);
var cfg__13489__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__13488__auto__);
var st__13490__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__13489__auto__);
var indexer__13487__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__13489__auto__);
if((st__13490__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__13490__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__13482__auto__], 0));
}

if((indexer__13487__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__13487__auto__,this__13482__auto__);
}
});})(x14373_14411))
;

x14373_14411.componentDidUpdate = ((function (x14373_14411){
return (function (prev_props__13485__auto__,prev_state__13486__auto__){
var this__13482__auto__ = this;
return om.next.clear_prev_props_BANG_(this__13482__auto__);
});})(x14373_14411))
;

x14373_14411.isMounted = ((function (x14373_14411){
return (function (){
var this__13482__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__13482__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14373_14411))
;

x14373_14411.componentWillMount = ((function (x14373_14411){
return (function (){
var this__13482__auto__ = this;
var indexer__13487__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__13482__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__13487__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__13487__auto__,this__13482__auto__);
}
});})(x14373_14411))
;

x14373_14411.componentDidMount = ((function (x14373_14411){
return (function (){
var this$ = this;
var htmlEdit = html2hiccup.app.create_editor("htmlEdit",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$mode,"text/html",cljs.core.cst$kw$autoCloseTags,true,cljs.core.cst$kw$autoCloseBrackets,true], null));
var hiccupEdit = html2hiccup.app.create_editor("hiccupEdit",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$autofocus,false,cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$readOnly,true], null));
var G__14378 = htmlEdit;
G__14378.on("change",((function (G__14378,htmlEdit,hiccupEdit,this$,x14373_14411){
return (function (){
hiccupEdit.setValue(html2hiccup.app.html__GT_hiccup(htmlEdit.getValue()));

var i = (0);
while(true){
if((i < hiccupEdit.lineCount())){
hiccupEdit.indentLine(i);

var G__14412 = (i + (1));
i = G__14412;
continue;
} else {
return null;
}
break;
}
});})(G__14378,htmlEdit,hiccupEdit,this$,x14373_14411))
);

G__14378.setValue(html2hiccup.app.default_content);

return G__14378;
});})(x14373_14411))
;

x14373_14411.render = ((function (x14373_14411){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_14379 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14380 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14381 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14382 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14383 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var G__14386 = "div";
var G__14387 = {"className": "container"};
var G__14388 = (function (){var G__14390 = "div";
var G__14391 = {"className": "row"};
var G__14392 = (function (){var G__14393 = "div";
var G__14394 = {"className": "col-md-12"};
var G__14395 = React.createElement("h2",null,"Html to Hiccup");
return React.createElement(G__14393,G__14394,G__14395);
})();
return React.createElement(G__14390,G__14391,G__14392);
})();
var G__14389 = (function (){var G__14396 = "div";
var G__14397 = {"className": "row"};
var G__14398 = (function (){var G__14401 = "div";
var G__14402 = {"className": "col-md-6"};
var G__14403 = React.createElement("h3",null,"HTML");
var G__14404 = sablono.interpreter.create_element("textarea",{"id": "htmlEdit", "className": "form-control col-md-6"});
return React.createElement(G__14401,G__14402,G__14403,G__14404);
})();
var G__14399 = (function (){var G__14405 = "div";
var G__14406 = {"className": "col-md-6"};
var G__14407 = React.createElement("h3",null,"Hiccup");
var G__14408 = sablono.interpreter.create_element("textarea",{"id": "hiccupEdit", "className": "form-control col-md-6"});
return React.createElement(G__14405,G__14406,G__14407,G__14408);
})();
var G__14400 = React.createElement("p",null,"\u00A9 2016 Yen-Chin, Lee <coldnew>");
return React.createElement(G__14396,G__14397,G__14398,G__14399,G__14400);
})();
return React.createElement(G__14386,G__14387,G__14388,G__14389);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14383;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14382;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14381;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14380;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14379;
}});})(x14373_14411))
;


html2hiccup.app.MainWindow.prototype.constructor = html2hiccup.app.MainWindow;

html2hiccup.app.MainWindow.prototype.om$isComponent = true;

var x14409_14413 = html2hiccup.app.MainWindow;


var x14410_14414 = html2hiccup.app.MainWindow.prototype;


html2hiccup.app.MainWindow.cljs$lang$type = true;

html2hiccup.app.MainWindow.cljs$lang$ctorStr = "html2hiccup.app/MainWindow";

html2hiccup.app.MainWindow.cljs$lang$ctorPrWriter = (function (this__13544__auto__,writer__13545__auto__,opt__13546__auto__){
return cljs.core._write(writer__13545__auto__,"html2hiccup.app/MainWindow");
});
html2hiccup.app.mainwin = om.next.factory.cljs$core$IFn$_invoke$arity$1(html2hiccup.app.MainWindow);
html2hiccup.app.init = (function html2hiccup$app$init(){
var G__14420 = (function (){var G__14422 = cljs.core.PersistentArrayMap.EMPTY;
return (html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1 ? html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1(G__14422) : html2hiccup.app.mainwin.call(null,G__14422));
})();
var G__14421 = goog.dom.getElement("app");
return ReactDOM.render(G__14420,G__14421);
});
