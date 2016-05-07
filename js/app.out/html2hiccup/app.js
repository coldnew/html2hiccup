// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('html2hiccup.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljs_react_material_ui.icons');
goog.require('html2hiccup.converter');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
cljs.core.enable_console_print_BANG_();
html2hiccup.app.default_content = "<html>\n  <head></head>\n  <body>\n    <div class=\"container\">\n      <div class=\"row\">\n        <h2>Html to Hiccup</h2>\n        <a href=\"https://github.com/coldnew/html2hiccup\">\n          Fork me from GitHub\n        </a>\n        <p>\n          Edit HTML here and see the generated Hiccup syntax :)\n        </p>\n      </div>\n    </div>\n  </body>\n</html>\n";
html2hiccup.app.create_editor = (function html2hiccup$app$create_editor(id,cfg){
return CodeMirror.fromTextArea(goog.dom.getElement(id),cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$indentWithTabs,false,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$indentAuto,true], null),cfg], 0))));
});
/**
 * @constructor
 */
html2hiccup.app.MainWindow = (function html2hiccup$app$MainWindow(){
var this__14356__auto__ = this;
React.Component.apply(this__14356__auto__,arguments);

if(!((this__14356__auto__.initLocalState == null))){
this__14356__auto__.state = this__14356__auto__.initLocalState();
} else {
this__14356__auto__.state = {};
}

return this__14356__auto__;
});

html2hiccup.app.MainWindow.prototype = goog.object.clone(React.Component.prototype);

var x19356_19383 = html2hiccup.app.MainWindow.prototype;
x19356_19383.componentWillUpdate = ((function (x19356_19383){
return (function (next_props__14297__auto__,next_state__14298__auto__){
var this__14296__auto__ = this;
om.next.merge_pending_props_BANG_(this__14296__auto__);

return om.next.merge_pending_state_BANG_(this__14296__auto__);
});})(x19356_19383))
;

x19356_19383.shouldComponentUpdate = ((function (x19356_19383){
return (function (next_props__14297__auto__,next_state__14298__auto__){
var this__14296__auto__ = this;
var or__6540__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__14296__auto__),goog.object.get(next_props__14297__auto__,"omcljs$value"));
if(or__6540__auto__){
return or__6540__auto__;
} else {
var and__6528__auto__ = this__14296__auto__.state;
if(cljs.core.truth_(and__6528__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19359 = this__14296__auto__.state;
var G__19360 = "omcljs$state";
return goog.object.get(G__19359,G__19360);
})(),goog.object.get(next_state__14298__auto__,"omcljs$state"));
} else {
return and__6528__auto__;
}
}
});})(x19356_19383))
;

x19356_19383.componentWillUnmount = ((function (x19356_19383){
return (function (){
var this__14296__auto__ = this;
var r__14302__auto__ = om.next.get_reconciler(this__14296__auto__);
var cfg__14303__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__14302__auto__);
var st__14304__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__14303__auto__);
var indexer__14301__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__14303__auto__);
if((st__14304__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__14304__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__14296__auto__], 0));
}

if((indexer__14301__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__14301__auto__,this__14296__auto__);
}
});})(x19356_19383))
;

x19356_19383.componentDidUpdate = ((function (x19356_19383){
return (function (prev_props__14299__auto__,prev_state__14300__auto__){
var this__14296__auto__ = this;
return om.next.clear_prev_props_BANG_(this__14296__auto__);
});})(x19356_19383))
;

x19356_19383.isMounted = ((function (x19356_19383){
return (function (){
var this__14296__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__14296__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19356_19383))
;

x19356_19383.componentWillMount = ((function (x19356_19383){
return (function (){
var this__14296__auto__ = this;
var indexer__14301__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__14296__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__14301__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__14301__auto__,this__14296__auto__);
}
});})(x19356_19383))
;

x19356_19383.componentDidMount = ((function (x19356_19383){
return (function (){
var this$ = this;
var htmlEdit = html2hiccup.app.create_editor("htmlEdit",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$mode,"text/html",cljs.core.cst$kw$autoCloseTags,true,cljs.core.cst$kw$autoCloseBrackets,true], null));
var hiccupEdit = html2hiccup.app.create_editor("hiccupEdit",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$autofocus,false,cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$readOnly,true], null));
var G__19361 = htmlEdit;
G__19361.on("change",((function (G__19361,htmlEdit,hiccupEdit,this$,x19356_19383){
return (function (){
hiccupEdit.setValue(html2hiccup.converter.html__GT_hiccup(htmlEdit.getValue()));

var i = (0);
while(true){
if((i < hiccupEdit.lineCount())){
hiccupEdit.indentLine(i);

var G__19384 = (i + (1));
i = G__19384;
continue;
} else {
return null;
}
break;
}
});})(G__19361,htmlEdit,hiccupEdit,this$,x19356_19383))
);

G__19361.setValue(html2hiccup.app.default_content);

return G__19361;
});})(x19356_19383))
;

x19356_19383.render = ((function (x19356_19383){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_19362 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19363 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19364 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19365 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19366 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mui_DASH_theme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primary1_DASH_color,cljs_react_material_ui.core.color(cljs.core.cst$kw$deep_DASH_orange_DASH_500)], null)], null))], null),(function (){var G__19367 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,"container"], null);
var G__19368 = om.util.force_children(cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"HTML to Hiccup",cljs.core.cst$kw$show_DASH_menu_DASH_icon_DASH_button,false,cljs.core.cst$kw$icon_DASH_element_DASH_right,cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$icon_DASH_class_DASH_name,"muidocs-icon-custom-github",cljs.core.cst$kw$touch,true,cljs.core.cst$kw$link_DASH_button,true,cljs.core.cst$kw$href,"https://github.com/coldnew/html2hiccup",cljs.core.cst$kw$target,cljs.core.cst$kw$_blank], null)], 0))], null)], 0)));
var G__19369 = om.util.force_children(cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_name,"row mar-top-20",cljs.core.cst$kw$id,"wrapper"], null),(function (){var G__19371 = {"className": "col-md-6"};
var G__19372 = om.util.force_children((function (){var G__19373 = {"id": "htmlEdit"};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__19373) : om.dom.textarea.call(null,G__19373));
})());
return React.DOM.div(G__19371,G__19372);
})(),(function (){var G__19374 = {"class-name": "col-md-6"};
var G__19375 = om.util.force_children((function (){var G__19376 = {"id": "hiccupEdit"};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__19376) : om.dom.textarea.call(null,G__19376));
})());
return React.DOM.div(G__19374,G__19375);
})()], 0)));
var G__19370 = om.util.force_children((function (){var G__19377 = {"className": "footer"};
var G__19378 = om.util.force_children((function (){var G__19379 = {"className": "container"};
var G__19380 = om.util.force_children("\u00A9 2016 Yen-Chin, Lee <coldnew>");
return React.DOM.div(G__19379,G__19380);
})());
return React.DOM.div(G__19377,G__19378);
})());
return React.DOM.div(G__19367,G__19368,G__19369,G__19370);
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19366;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19365;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19364;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19363;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19362;
}});})(x19356_19383))
;


html2hiccup.app.MainWindow.prototype.constructor = html2hiccup.app.MainWindow;

html2hiccup.app.MainWindow.prototype.om$isComponent = true;

var x19381_19385 = html2hiccup.app.MainWindow;


var x19382_19386 = html2hiccup.app.MainWindow.prototype;


html2hiccup.app.MainWindow.cljs$lang$type = true;

html2hiccup.app.MainWindow.cljs$lang$ctorStr = "html2hiccup.app/MainWindow";

html2hiccup.app.MainWindow.cljs$lang$ctorPrWriter = (function (this__14358__auto__,writer__14359__auto__,opt__14360__auto__){
return cljs.core._write(writer__14359__auto__,"html2hiccup.app/MainWindow");
});
html2hiccup.app.mainwin = om.next.factory.cljs$core$IFn$_invoke$arity$1(html2hiccup.app.MainWindow);
html2hiccup.app.init = (function html2hiccup$app$init(){
var G__19392 = (function (){var G__19394 = cljs.core.PersistentArrayMap.EMPTY;
return (html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1 ? html2hiccup.app.mainwin.cljs$core$IFn$_invoke$arity$1(G__19394) : html2hiccup.app.mainwin.call(null,G__19394));
})();
var G__19393 = goog.dom.getElement("app");
return ReactDOM.render(G__19392,G__19393);
});
