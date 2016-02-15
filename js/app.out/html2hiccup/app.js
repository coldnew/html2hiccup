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
var this__13548__auto__ = this;
React.Component.apply(this__13548__auto__,arguments);

if(!((this__13548__auto__.initLocalState == null))){
this__13548__auto__.state = this__13548__auto__.initLocalState();
} else {
this__13548__auto__.state = {};
}

return this__13548__auto__;
});

html2hiccup.app.MainWindow.prototype = goog.object.clone(React.Component.prototype);

var x14379_14417 = html2hiccup.app.MainWindow.prototype;
x14379_14417.componentWillUpdate = ((function (x14379_14417){
return (function (next_props__13489__auto__,next_state__13490__auto__){
var this__13488__auto__ = this;
om.next.merge_pending_props_BANG_(this__13488__auto__);

return om.next.merge_pending_state_BANG_(this__13488__auto__);
});})(x14379_14417))
;

x14379_14417.shouldComponentUpdate = ((function (x14379_14417){
return (function (next_props__13489__auto__,next_state__13490__auto__){
var this__13488__auto__ = this;
var or__6486__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__13488__auto__),goog.object.get(next_props__13489__auto__,"omcljs$value"));
if(or__6486__auto__){
return or__6486__auto__;
} else {
var and__6474__auto__ = this__13488__auto__.state;
if(cljs.core.truth_(and__6474__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14382 = this__13488__auto__.state;
var G__14383 = "omcljs$state";
return goog.object.get(G__14382,G__14383);
})(),goog.object.get(next_state__13490__auto__,"omcljs$state"));
} else {
return and__6474__auto__;
}
}
});})(x14379_14417))
;

x14379_14417.componentWillUnmount = ((function (x14379_14417){
return (function (){
var this__13488__auto__ = this;
var r__13494__auto__ = om.next.get_reconciler(this__13488__auto__);
var cfg__13495__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__13494__auto__);
var st__13496__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__13495__auto__);
var indexer__13493__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__13495__auto__);
if((st__13496__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__13496__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__13488__auto__], 0));
}

if((indexer__13493__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__13493__auto__,this__13488__auto__);
}
});})(x14379_14417))
;

x14379_14417.componentDidUpdate = ((function (x14379_14417){
return (function (prev_props__13491__auto__,prev_state__13492__auto__){
var this__13488__auto__ = this;
return om.next.clear_prev_props_BANG_(this__13488__auto__);
});})(x14379_14417))
;

x14379_14417.isMounted = ((function (x14379_14417){
return (function (){
var this__13488__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__13488__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14379_14417))
;

x14379_14417.componentWillMount = ((function (x14379_14417){
return (function (){
var this__13488__auto__ = this;
var indexer__13493__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__13488__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__13493__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__13493__auto__,this__13488__auto__);
}
});})(x14379_14417))
;

x14379_14417.componentDidMount = ((function (x14379_14417){
return (function (){
var this$ = this;
var htmlEdit = html2hiccup.app.create_editor("htmlEdit",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$mode,"text/html",cljs.core.cst$kw$autoCloseTags,true,cljs.core.cst$kw$autoCloseBrackets,true], null));
var hiccupEdit = html2hiccup.app.create_editor("hiccupEdit",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$autofocus,false,cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$readOnly,true], null));
var G__14384 = htmlEdit;
G__14384.on("change",((function (G__14384,htmlEdit,hiccupEdit,this$,x14379_14417){
return (function (){
hiccupEdit.setValue(html2hiccup.app.html__GT_hiccup(htmlEdit.getValue()));

var i = (0);
while(true){
if((i < hiccupEdit.lineCount())){
hiccupEdit.indentLine(i);

var G__14418 = (i + (1));
i = G__14418;
continue;
} else {
return null;
}
break;
}
});})(G__14384,htmlEdit,hiccupEdit,this$,x14379_14417))
);

G__14384.setValue(html2hiccup.app.default_content);

return G__14384;
});})(x14379_14417))
;

x14379_14417.render = ((function (x14379_14417){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_14385 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14386 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14387 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14388 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14389 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var G__14392 = "div";
var G__14393 = {"className": "container"};
var G__14394 = (function (){var G__14396 = "div";
var G__14397 = {"className": "row"};
var G__14398 = (function (){var G__14399 = "div";
var G__14400 = {"className": "col-md-12"};
var G__14401 = React.createElement("h2",null,"Html to Hiccup");
return React.createElement(G__14399,G__14400,G__14401);
})();
return React.createElement(G__14396,G__14397,G__14398);
})();
var G__14395 = (function (){var G__14402 = "div";
var G__14403 = {"className": "row"};
var G__14404 = (function (){var G__14407 = "div";
var G__14408 = {"className": "col-md-6"};
var G__14409 = React.createElement("h3",null,"HTML");
var G__14410 = sablono.interpreter.create_element("textarea",{"id": "htmlEdit", "className": "form-control col-md-6"});
return React.createElement(G__14407,G__14408,G__14409,G__14410);
})();
var G__14405 = (function (){var G__14411 = "div";
var G__14412 = {"className": "col-md-6"};
var G__14413 = React.createElement("h3",null,"Hiccup");
var G__14414 = sablono.interpreter.create_element("textarea",{"id": "hiccupEdit", "className": "form-control col-md-6"});
return React.createElement(G__14411,G__14412,G__14413,G__14414);
})();
var G__14406 = React.createElement("p",null,"\u00A9 2016 Yen-Chin, Lee <coldnew>");
return React.createElement(G__14402,G__14403,G__14404,G__14405,G__14406);
})();
return React.createElement(G__14392,G__14393,G__14394,G__14395);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14389;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14388;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14387;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14386;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14385;
}});})(x14379_14417))
;


html2hiccup.app.MainWindow.prototype.constructor = html2hiccup.app.MainWindow;

html2hiccup.app.MainWindow.prototype.om$isComponent = true;

var x14415_14419 = html2hiccup.app.MainWindow;


var x14416_14420 = html2hiccup.app.MainWindow.prototype;


html2hiccup.app.MainWindow.cljs$lang$type = true;

html2hiccup.app.MainWindow.cljs$lang$ctorStr = "html2hiccup.app/MainWindow";

html2hiccup.app.MainWindow.cljs$lang$ctorPrWriter = (function (this__13550__auto__,writer__13551__auto__,opt__13552__auto__){
return cljs.core._write(writer__13551__auto__,"html2hiccup.app/MainWindow");
});
html2hiccup.app.mainwin = om.next.factory.cljs$core$IFn$_invoke$arity$1(html2hiccup.app.MainWindow);
html2hiccup.app.init = (function html2hiccup$app$init(){
var G__14426 = (function (){var G__14428 = cljs.core.PersistentArrayMap.EMPTY;
return (html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1 ? html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1(G__14428) : html2hiccup.app.mainwin.call(null,G__14428));
})();
var G__14427 = goog.dom.getElement("app");
return ReactDOM.render(G__14426,G__14427);
});
