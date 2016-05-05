// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('html2hiccup.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('cljs_react_material_ui.icons');
goog.require('html2hiccup.converter');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
cljs.core.enable_console_print_BANG_();
html2hiccup.app.default_content = "<div class=\"container\">\n  <div class=\"row\">\n    <h2>Html to Hiccup</h2>\n    <a href=\"https://github.com/coldnew/html2hiccup\">\n      Fork me from GitHub\n    </a>\n    <p>\n      Edit Html here and see the generated Hiccup syntax :)\n    </p>\n  </div>\n</div>";
html2hiccup.app.create_editor = (function html2hiccup$app$create_editor(id,cfg){
return CodeMirror.fromTextArea(goog.dom.getElement(id),cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$indentWithTabs,false,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$indentAuto,true], null),cfg], 0))));
});
/**
 * @constructor
 */
html2hiccup.app.MainWindow = (function html2hiccup$app$MainWindow(){
var this__15260__auto__ = this;
React.Component.apply(this__15260__auto__,arguments);

if(!((this__15260__auto__.initLocalState == null))){
this__15260__auto__.state = this__15260__auto__.initLocalState();
} else {
this__15260__auto__.state = {};
}

return this__15260__auto__;
});

html2hiccup.app.MainWindow.prototype = goog.object.clone(React.Component.prototype);

var x20245_20272 = html2hiccup.app.MainWindow.prototype;
x20245_20272.componentWillUpdate = ((function (x20245_20272){
return (function (next_props__15201__auto__,next_state__15202__auto__){
var this__15200__auto__ = this;
om.next.merge_pending_props_BANG_(this__15200__auto__);

return om.next.merge_pending_state_BANG_(this__15200__auto__);
});})(x20245_20272))
;

x20245_20272.shouldComponentUpdate = ((function (x20245_20272){
return (function (next_props__15201__auto__,next_state__15202__auto__){
var this__15200__auto__ = this;
var or__6540__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15200__auto__),goog.object.get(next_props__15201__auto__,"omcljs$value"));
if(or__6540__auto__){
return or__6540__auto__;
} else {
var and__6528__auto__ = this__15200__auto__.state;
if(cljs.core.truth_(and__6528__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__20248 = this__15200__auto__.state;
var G__20249 = "omcljs$state";
return goog.object.get(G__20248,G__20249);
})(),goog.object.get(next_state__15202__auto__,"omcljs$state"));
} else {
return and__6528__auto__;
}
}
});})(x20245_20272))
;

x20245_20272.componentWillUnmount = ((function (x20245_20272){
return (function (){
var this__15200__auto__ = this;
var r__15206__auto__ = om.next.get_reconciler(this__15200__auto__);
var cfg__15207__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__15206__auto__);
var st__15208__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__15207__auto__);
var indexer__15205__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__15207__auto__);
if((st__15208__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__15208__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__15200__auto__], 0));
}

if((indexer__15205__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__15205__auto__,this__15200__auto__);
}
});})(x20245_20272))
;

x20245_20272.componentDidUpdate = ((function (x20245_20272){
return (function (prev_props__15203__auto__,prev_state__15204__auto__){
var this__15200__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15200__auto__);
});})(x20245_20272))
;

x20245_20272.isMounted = ((function (x20245_20272){
return (function (){
var this__15200__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15200__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20245_20272))
;

x20245_20272.componentWillMount = ((function (x20245_20272){
return (function (){
var this__15200__auto__ = this;
var indexer__15205__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15200__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15205__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15205__auto__,this__15200__auto__);
}
});})(x20245_20272))
;

x20245_20272.componentDidMount = ((function (x20245_20272){
return (function (){
var this$ = this;
var htmlEdit = html2hiccup.app.create_editor("htmlEdit",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$mode,"text/html",cljs.core.cst$kw$autoCloseTags,true,cljs.core.cst$kw$autoCloseBrackets,true], null));
var hiccupEdit = html2hiccup.app.create_editor("hiccupEdit",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$autofocus,false,cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$readOnly,true], null));
var G__20250 = htmlEdit;
G__20250.on("change",((function (G__20250,htmlEdit,hiccupEdit,this$,x20245_20272){
return (function (){
hiccupEdit.setValue(html2hiccup.converter.html__GT_hiccup(htmlEdit.getValue()));

var i = (0);
while(true){
if((i < hiccupEdit.lineCount())){
hiccupEdit.indentLine(i);

var G__20273 = (i + (1));
i = G__20273;
continue;
} else {
return null;
}
break;
}
});})(G__20250,htmlEdit,hiccupEdit,this$,x20245_20272))
);

G__20250.setValue(html2hiccup.app.default_content);

return G__20250;
});})(x20245_20272))
;

x20245_20272.render = ((function (x20245_20272){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20251 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20252 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20253 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20254 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20255 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mui_DASH_theme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primary1_DASH_color,cljs_react_material_ui.core.color(cljs.core.cst$kw$deep_DASH_orange_DASH_500)], null)], null))], null),(function (){var G__20256 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,"container"], null);
var G__20257 = om.util.force_children(cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Html to Hiccup",cljs.core.cst$kw$show_DASH_menu_DASH_icon_DASH_button,false,cljs.core.cst$kw$icon_DASH_element_DASH_right,cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$icon_DASH_class_DASH_name,"muidocs-icon-custom-github",cljs.core.cst$kw$touch,true,cljs.core.cst$kw$link_DASH_button,true,cljs.core.cst$kw$href,"https://github.com/coldnew/html2hiccup",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null)], 0))], null)], 0)));
var G__20258 = om.util.force_children(cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_name,"row mar-top-20",cljs.core.cst$kw$id,"wrapper"], null),(function (){var G__20260 = {"className": "col-md-6"};
var G__20261 = om.util.force_children((function (){var G__20262 = {"id": "htmlEdit"};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__20262) : om.dom.textarea.call(null,G__20262));
})());
return React.DOM.div(G__20260,G__20261);
})(),(function (){var G__20263 = {"class-name": "col-md-6"};
var G__20264 = om.util.force_children((function (){var G__20265 = {"id": "hiccupEdit"};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__20265) : om.dom.textarea.call(null,G__20265));
})());
return React.DOM.div(G__20263,G__20264);
})()], 0)));
var G__20259 = om.util.force_children((function (){var G__20266 = {"className": "footer"};
var G__20267 = om.util.force_children((function (){var G__20268 = {"className": "container"};
var G__20269 = om.util.force_children("\u00A9 2016 Yen-Chin, Lee <coldnew>");
return React.DOM.div(G__20268,G__20269);
})());
return React.DOM.div(G__20266,G__20267);
})());
return React.DOM.div(G__20256,G__20257,G__20258,G__20259);
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20255;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20254;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20253;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20252;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20251;
}});})(x20245_20272))
;


html2hiccup.app.MainWindow.prototype.constructor = html2hiccup.app.MainWindow;

html2hiccup.app.MainWindow.prototype.om$isComponent = true;

var x20270_20274 = html2hiccup.app.MainWindow;


var x20271_20275 = html2hiccup.app.MainWindow.prototype;


html2hiccup.app.MainWindow.cljs$lang$type = true;

html2hiccup.app.MainWindow.cljs$lang$ctorStr = "html2hiccup.app/MainWindow";

html2hiccup.app.MainWindow.cljs$lang$ctorPrWriter = (function (this__15262__auto__,writer__15263__auto__,opt__15264__auto__){
return cljs.core._write(writer__15263__auto__,"html2hiccup.app/MainWindow");
});
html2hiccup.app.mainwin = om.next.factory.cljs$core$IFn$_invoke$arity$1(html2hiccup.app.MainWindow);
html2hiccup.app.init = (function html2hiccup$app$init(){
var G__20281 = (function (){var G__20283 = cljs.core.PersistentArrayMap.EMPTY;
return (html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1 ? html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1(G__20283) : html2hiccup.app.mainwin.call(null,G__20283));
})();
var G__20282 = goog.dom.getElement("app");
return ReactDOM.render(G__20281,G__20282);
});
