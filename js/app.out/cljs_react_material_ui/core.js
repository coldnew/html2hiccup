// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
cljs_react_material_ui.core.kebab__GT_camel = (function cljs_react_material_ui$core$kebab__GT_camel(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(kw),/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second)));
});
cljs_react_material_ui.core.map_entry_QMARK_ = (function cljs_react_material_ui$core$map_entry_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});
cljs_react_material_ui.core.walk_map_keys = (function cljs_react_material_ui$core$walk_map_keys(f,props){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_(cljs_react_material_ui.core.map_entry_QMARK_(x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16115 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16115) : f.call(null,G__16115));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),props);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_react_material_ui.core.walk_map_keys,cljs_react_material_ui.core.kebab__GT_camel));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(root_obj,type,args){
var first_arg = cljs.core.first(args);
var args__$1 = (((cljs.core.map_QMARK_(first_arg)) || ((first_arg == null)))?args:cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,(root_obj[type]),(function (){var G__16117 = cljs.core.first(args__$1);
return (cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1(G__16117) : cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,G__16117));
})(),cljs.core.rest(args__$1));
});
cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args16118 = [];
var len__7610__auto___16122 = arguments.length;
var i__7611__auto___16123 = (0);
while(true){
if((i__7611__auto___16123 < len__7610__auto___16122)){
args16118.push((arguments[i__7611__auto___16123]));

var G__16124 = (i__7611__auto___16123 + (1));
i__7611__auto___16123 = G__16124;
continue;
} else {
}
break;
}

var G__16120 = args16118.length;
switch (G__16120) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16118.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
var G__16121 = (cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1(raw_theme) : cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
return MaterialUIStyles.getMuiTheme(G__16121);
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;
cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name(cljs_react_material_ui.core.kebab__GT_camel(color_key))]);
});
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16127 = arguments.length;
var i__7611__auto___16128 = (0);
while(true){
if((i__7611__auto___16128 < len__7610__auto___16127)){
args__7617__auto__.push((arguments[i__7611__auto___16128]));

var G__16129 = (i__7611__auto___16128 + (1));
i__7611__auto___16128 = G__16129;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp(MaterialUIStyles,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq16126){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16126));
});
cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16131 = arguments.length;
var i__7611__auto___16132 = (0);
while(true){
if((i__7611__auto___16132 < len__7610__auto___16131)){
args__7617__auto__.push((arguments[i__7611__auto___16132]));

var G__16133 = (i__7611__auto___16132 + (1));
i__7611__auto___16132 = G__16133;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AppBar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args));
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq16130){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16130));
});
cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16135 = arguments.length;
var i__7611__auto___16136 = (0);
while(true){
if((i__7611__auto___16136 < len__7610__auto___16135)){
args__7617__auto__.push((arguments[i__7611__auto___16136]));

var G__16137 = (i__7611__auto___16136 + (1));
i__7611__auto___16136 = G__16137;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AutoComplete",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args));
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq16134){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16134));
});
cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16139 = arguments.length;
var i__7611__auto___16140 = (0);
while(true){
if((i__7611__auto___16140 < len__7610__auto___16139)){
args__7617__auto__.push((arguments[i__7611__auto___16140]));

var G__16141 = (i__7611__auto___16140 + (1));
i__7611__auto___16140 = G__16141;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Avatar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args));
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq16138){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16138));
});
cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16143 = arguments.length;
var i__7611__auto___16144 = (0);
while(true){
if((i__7611__auto___16144 < len__7610__auto___16143)){
args__7617__auto__.push((arguments[i__7611__auto___16144]));

var G__16145 = (i__7611__auto___16144 + (1));
i__7611__auto___16144 = G__16145;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Badge",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args));
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq16142){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16142));
});
cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16147 = arguments.length;
var i__7611__auto___16148 = (0);
while(true){
if((i__7611__auto___16148 < len__7610__auto___16147)){
args__7617__auto__.push((arguments[i__7611__auto___16148]));

var G__16149 = (i__7611__auto___16148 + (1));
i__7611__auto___16148 = G__16149;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Card",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Card",args));
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq16146){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16146));
});
cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16151 = arguments.length;
var i__7611__auto___16152 = (0);
while(true){
if((i__7611__auto___16152 < len__7610__auto___16151)){
args__7617__auto__.push((arguments[i__7611__auto___16152]));

var G__16153 = (i__7611__auto___16152 + (1));
i__7611__auto___16152 = G__16153;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args));
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq16150){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16150));
});
cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16155 = arguments.length;
var i__7611__auto___16156 = (0);
while(true){
if((i__7611__auto___16156 < len__7610__auto___16155)){
args__7617__auto__.push((arguments[i__7611__auto___16156]));

var G__16157 = (i__7611__auto___16156 + (1));
i__7611__auto___16156 = G__16157;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args));
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq16154){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16154));
});
cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16159 = arguments.length;
var i__7611__auto___16160 = (0);
while(true){
if((i__7611__auto___16160 < len__7610__auto___16159)){
args__7617__auto__.push((arguments[i__7611__auto___16160]));

var G__16161 = (i__7611__auto___16160 + (1));
i__7611__auto___16160 = G__16161;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardMedia",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args));
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq16158){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16158));
});
cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16163 = arguments.length;
var i__7611__auto___16164 = (0);
while(true){
if((i__7611__auto___16164 < len__7610__auto___16163)){
args__7617__auto__.push((arguments[i__7611__auto___16164]));

var G__16165 = (i__7611__auto___16164 + (1));
i__7611__auto___16164 = G__16165;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args));
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq16162){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16162));
});
cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16167 = arguments.length;
var i__7611__auto___16168 = (0);
while(true){
if((i__7611__auto___16168 < len__7610__auto___16167)){
args__7617__auto__.push((arguments[i__7611__auto___16168]));

var G__16169 = (i__7611__auto___16168 + (1));
i__7611__auto___16168 = G__16169;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args));
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq16166){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16166));
});
cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16171 = arguments.length;
var i__7611__auto___16172 = (0);
while(true){
if((i__7611__auto___16172 < len__7610__auto___16171)){
args__7617__auto__.push((arguments[i__7611__auto___16172]));

var G__16173 = (i__7611__auto___16172 + (1));
i__7611__auto___16172 = G__16173;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Checkbox",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args));
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq16170){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16170));
});
cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16175 = arguments.length;
var i__7611__auto___16176 = (0);
while(true){
if((i__7611__auto___16176 < len__7610__auto___16175)){
args__7617__auto__.push((arguments[i__7611__auto___16176]));

var G__16177 = (i__7611__auto___16176 + (1));
i__7611__auto___16176 = G__16177;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CircularProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args));
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq16174){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16174));
});
cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16179 = arguments.length;
var i__7611__auto___16180 = (0);
while(true){
if((i__7611__auto___16180 < len__7610__auto___16179)){
args__7617__auto__.push((arguments[i__7611__auto___16180]));

var G__16181 = (i__7611__auto___16180 + (1));
i__7611__auto___16180 = G__16181;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DatePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args));
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq16178){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16178));
});
cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16183 = arguments.length;
var i__7611__auto___16184 = (0);
while(true){
if((i__7611__auto___16184 < len__7610__auto___16183)){
args__7617__auto__.push((arguments[i__7611__auto___16184]));

var G__16185 = (i__7611__auto___16184 + (1));
i__7611__auto___16184 = G__16185;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Dialog",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args));
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq16182){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16182));
});
cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16187 = arguments.length;
var i__7611__auto___16188 = (0);
while(true){
if((i__7611__auto___16188 < len__7610__auto___16187)){
args__7617__auto__.push((arguments[i__7611__auto___16188]));

var G__16189 = (i__7611__auto___16188 + (1));
i__7611__auto___16188 = G__16189;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Divider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args));
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq16186){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16186));
});
cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16191 = arguments.length;
var i__7611__auto___16192 = (0);
while(true){
if((i__7611__auto___16192 < len__7610__auto___16191)){
args__7617__auto__.push((arguments[i__7611__auto___16192]));

var G__16193 = (i__7611__auto___16192 + (1));
i__7611__auto___16192 = G__16193;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Drawer",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args));
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq16190){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16190));
});
cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16195 = arguments.length;
var i__7611__auto___16196 = (0);
while(true){
if((i__7611__auto___16196 < len__7610__auto___16195)){
args__7617__auto__.push((arguments[i__7611__auto___16196]));

var G__16197 = (i__7611__auto___16196 + (1));
i__7611__auto___16196 = G__16197;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DropDownMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args));
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq16194){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16194));
});
cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16199 = arguments.length;
var i__7611__auto___16200 = (0);
while(true){
if((i__7611__auto___16200 < len__7610__auto___16199)){
args__7617__auto__.push((arguments[i__7611__auto___16200]));

var G__16201 = (i__7611__auto___16200 + (1));
i__7611__auto___16200 = G__16201;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FlatButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args));
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq16198){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16198));
});
cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16203 = arguments.length;
var i__7611__auto___16204 = (0);
while(true){
if((i__7611__auto___16204 < len__7610__auto___16203)){
args__7617__auto__.push((arguments[i__7611__auto___16204]));

var G__16205 = (i__7611__auto___16204 + (1));
i__7611__auto___16204 = G__16205;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FloatingActionButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args));
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq16202){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16202));
});
cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16207 = arguments.length;
var i__7611__auto___16208 = (0);
while(true){
if((i__7611__auto___16208 < len__7610__auto___16207)){
args__7617__auto__.push((arguments[i__7611__auto___16208]));

var G__16209 = (i__7611__auto___16208 + (1));
i__7611__auto___16208 = G__16209;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FontIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args));
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq16206){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16206));
});
cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16211 = arguments.length;
var i__7611__auto___16212 = (0);
while(true){
if((i__7611__auto___16212 < len__7610__auto___16211)){
args__7617__auto__.push((arguments[i__7611__auto___16212]));

var G__16213 = (i__7611__auto___16212 + (1));
i__7611__auto___16212 = G__16213;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args));
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq16210){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16210));
});
cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16215 = arguments.length;
var i__7611__auto___16216 = (0);
while(true){
if((i__7611__auto___16216 < len__7610__auto___16215)){
args__7617__auto__.push((arguments[i__7611__auto___16216]));

var G__16217 = (i__7611__auto___16216 + (1));
i__7611__auto___16216 = G__16217;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridTile",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args));
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq16214){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16214));
});
cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16219 = arguments.length;
var i__7611__auto___16220 = (0);
while(true){
if((i__7611__auto___16220 < len__7610__auto___16219)){
args__7617__auto__.push((arguments[i__7611__auto___16220]));

var G__16221 = (i__7611__auto___16220 + (1));
i__7611__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args));
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq16218){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16218));
});
cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16223 = arguments.length;
var i__7611__auto___16224 = (0);
while(true){
if((i__7611__auto___16224 < len__7610__auto___16223)){
args__7617__auto__.push((arguments[i__7611__auto___16224]));

var G__16225 = (i__7611__auto___16224 + (1));
i__7611__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args));
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq16222){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16222));
});
cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16227 = arguments.length;
var i__7611__auto___16228 = (0);
while(true){
if((i__7611__auto___16228 < len__7610__auto___16227)){
args__7617__auto__.push((arguments[i__7611__auto___16228]));

var G__16229 = (i__7611__auto___16228 + (1));
i__7611__auto___16228 = G__16229;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("LinearProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args));
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq16226){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16226));
});
cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16231 = arguments.length;
var i__7611__auto___16232 = (0);
while(true){
if((i__7611__auto___16232 < len__7610__auto___16231)){
args__7617__auto__.push((arguments[i__7611__auto___16232]));

var G__16233 = (i__7611__auto___16232 + (1));
i__7611__auto___16232 = G__16233;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("List",args) : cljs_react_material_ui.core.create_mui_el.call(null,"List",args));
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq16230){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16230));
});
cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16235 = arguments.length;
var i__7611__auto___16236 = (0);
while(true){
if((i__7611__auto___16236 < len__7610__auto___16235)){
args__7617__auto__.push((arguments[i__7611__auto___16236]));

var G__16237 = (i__7611__auto___16236 + (1));
i__7611__auto___16236 = G__16237;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args));
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq16234){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16234));
});
cljs_react_material_ui.core.make_selectable = (function cljs_react_material_ui$core$make_selectable(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16239 = arguments.length;
var i__7611__auto___16240 = (0);
while(true){
if((i__7611__auto___16240 < len__7610__auto___16239)){
args__7617__auto__.push((arguments[i__7611__auto___16240]));

var G__16241 = (i__7611__auto___16240 + (1));
i__7611__auto___16240 = G__16241;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MakeSelectable",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MakeSelectable",args));
});

cljs_react_material_ui.core.make_selectable.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.make_selectable.cljs$lang$applyTo = (function (seq16238){
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16238));
});
cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16243 = arguments.length;
var i__7611__auto___16244 = (0);
while(true){
if((i__7611__auto___16244 < len__7610__auto___16243)){
args__7617__auto__.push((arguments[i__7611__auto___16244]));

var G__16245 = (i__7611__auto___16244 + (1));
i__7611__auto___16244 = G__16245;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Menu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args));
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq16242){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16242));
});
cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16247 = arguments.length;
var i__7611__auto___16248 = (0);
while(true){
if((i__7611__auto___16248 < len__7610__auto___16247)){
args__7617__auto__.push((arguments[i__7611__auto___16248]));

var G__16249 = (i__7611__auto___16248 + (1));
i__7611__auto___16248 = G__16249;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MenuItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args));
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq16246){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16246));
});
cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16251 = arguments.length;
var i__7611__auto___16252 = (0);
while(true){
if((i__7611__auto___16252 < len__7610__auto___16251)){
args__7617__auto__.push((arguments[i__7611__auto___16252]));

var G__16253 = (i__7611__auto___16252 + (1));
i__7611__auto___16252 = G__16253;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Paper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args));
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq16250){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16250));
});
cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16255 = arguments.length;
var i__7611__auto___16256 = (0);
while(true){
if((i__7611__auto___16256 < len__7610__auto___16255)){
args__7617__auto__.push((arguments[i__7611__auto___16256]));

var G__16257 = (i__7611__auto___16256 + (1));
i__7611__auto___16256 = G__16257;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Popover",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args));
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq16254){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16254));
});
cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16259 = arguments.length;
var i__7611__auto___16260 = (0);
while(true){
if((i__7611__auto___16260 < len__7610__auto___16259)){
args__7617__auto__.push((arguments[i__7611__auto___16260]));

var G__16261 = (i__7611__auto___16260 + (1));
i__7611__auto___16260 = G__16261;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args));
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq16258){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16258));
});
cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16263 = arguments.length;
var i__7611__auto___16264 = (0);
while(true){
if((i__7611__auto___16264 < len__7610__auto___16263)){
args__7617__auto__.push((arguments[i__7611__auto___16264]));

var G__16265 = (i__7611__auto___16264 + (1));
i__7611__auto___16264 = G__16265;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButtonGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args));
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq16262){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16262));
});
cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16267 = arguments.length;
var i__7611__auto___16268 = (0);
while(true){
if((i__7611__auto___16268 < len__7610__auto___16267)){
args__7617__auto__.push((arguments[i__7611__auto___16268]));

var G__16269 = (i__7611__auto___16268 + (1));
i__7611__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RaisedButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args));
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq16266){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16266));
});
cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16271 = arguments.length;
var i__7611__auto___16272 = (0);
while(true){
if((i__7611__auto___16272 < len__7610__auto___16271)){
args__7617__auto__.push((arguments[i__7611__auto___16272]));

var G__16273 = (i__7611__auto___16272 + (1));
i__7611__auto___16272 = G__16273;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RefreshIndicator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args));
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq16270){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16270));
});
cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16275 = arguments.length;
var i__7611__auto___16276 = (0);
while(true){
if((i__7611__auto___16276 < len__7610__auto___16275)){
args__7617__auto__.push((arguments[i__7611__auto___16276]));

var G__16277 = (i__7611__auto___16276 + (1));
i__7611__auto___16276 = G__16277;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SelectField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args));
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq16274){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16274));
});
cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16279 = arguments.length;
var i__7611__auto___16280 = (0);
while(true){
if((i__7611__auto___16280 < len__7610__auto___16279)){
args__7617__auto__.push((arguments[i__7611__auto___16280]));

var G__16281 = (i__7611__auto___16280 + (1));
i__7611__auto___16280 = G__16281;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Slider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args));
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq16278){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16278));
});
cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16283 = arguments.length;
var i__7611__auto___16284 = (0);
while(true){
if((i__7611__auto___16284 < len__7610__auto___16283)){
args__7617__auto__.push((arguments[i__7611__auto___16284]));

var G__16285 = (i__7611__auto___16284 + (1));
i__7611__auto___16284 = G__16285;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Subheader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args));
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq16282){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16282));
});
cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16287 = arguments.length;
var i__7611__auto___16288 = (0);
while(true){
if((i__7611__auto___16288 < len__7610__auto___16287)){
args__7617__auto__.push((arguments[i__7611__auto___16288]));

var G__16289 = (i__7611__auto___16288 + (1));
i__7611__auto___16288 = G__16289;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SvgIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args));
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq16286){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16286));
});
cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16291 = arguments.length;
var i__7611__auto___16292 = (0);
while(true){
if((i__7611__auto___16292 < len__7610__auto___16291)){
args__7617__auto__.push((arguments[i__7611__auto___16292]));

var G__16293 = (i__7611__auto___16292 + (1));
i__7611__auto___16292 = G__16293;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Step",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Step",args));
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq16290){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16290));
});
cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16295 = arguments.length;
var i__7611__auto___16296 = (0);
while(true){
if((i__7611__auto___16296 < len__7610__auto___16295)){
args__7617__auto__.push((arguments[i__7611__auto___16296]));

var G__16297 = (i__7611__auto___16296 + (1));
i__7611__auto___16296 = G__16297;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args));
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq16294){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16294));
});
cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16299 = arguments.length;
var i__7611__auto___16300 = (0);
while(true){
if((i__7611__auto___16300 < len__7610__auto___16299)){
args__7617__auto__.push((arguments[i__7611__auto___16300]));

var G__16301 = (i__7611__auto___16300 + (1));
i__7611__auto___16300 = G__16301;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args));
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq16298){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16298));
});
cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16303 = arguments.length;
var i__7611__auto___16304 = (0);
while(true){
if((i__7611__auto___16304 < len__7610__auto___16303)){
args__7617__auto__.push((arguments[i__7611__auto___16304]));

var G__16305 = (i__7611__auto___16304 + (1));
i__7611__auto___16304 = G__16305;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args));
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq16302){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16302));
});
cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16307 = arguments.length;
var i__7611__auto___16308 = (0);
while(true){
if((i__7611__auto___16308 < len__7610__auto___16307)){
args__7617__auto__.push((arguments[i__7611__auto___16308]));

var G__16309 = (i__7611__auto___16308 + (1));
i__7611__auto___16308 = G__16309;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Stepper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args));
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq16306){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16306));
});
cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16311 = arguments.length;
var i__7611__auto___16312 = (0);
while(true){
if((i__7611__auto___16312 < len__7610__auto___16311)){
args__7617__auto__.push((arguments[i__7611__auto___16312]));

var G__16313 = (i__7611__auto___16312 + (1));
i__7611__auto___16312 = G__16313;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Snackbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args));
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq16310){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16310));
});
cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16315 = arguments.length;
var i__7611__auto___16316 = (0);
while(true){
if((i__7611__auto___16316 < len__7610__auto___16315)){
args__7617__auto__.push((arguments[i__7611__auto___16316]));

var G__16317 = (i__7611__auto___16316 + (1));
i__7611__auto___16316 = G__16317;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tabs",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args));
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq16314){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16314));
});
cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16319 = arguments.length;
var i__7611__auto___16320 = (0);
while(true){
if((i__7611__auto___16320 < len__7610__auto___16319)){
args__7617__auto__.push((arguments[i__7611__auto___16320]));

var G__16321 = (i__7611__auto___16320 + (1));
i__7611__auto___16320 = G__16321;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tab",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args));
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq16318){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16318));
});
cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16323 = arguments.length;
var i__7611__auto___16324 = (0);
while(true){
if((i__7611__auto___16324 < len__7610__auto___16323)){
args__7617__auto__.push((arguments[i__7611__auto___16324]));

var G__16325 = (i__7611__auto___16324 + (1));
i__7611__auto___16324 = G__16325;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Table",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Table",args));
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq16322){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16322));
});
cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16327 = arguments.length;
var i__7611__auto___16328 = (0);
while(true){
if((i__7611__auto___16328 < len__7610__auto___16327)){
args__7617__auto__.push((arguments[i__7611__auto___16328]));

var G__16329 = (i__7611__auto___16328 + (1));
i__7611__auto___16328 = G__16329;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableBody",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args));
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq16326){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16326));
});
cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16331 = arguments.length;
var i__7611__auto___16332 = (0);
while(true){
if((i__7611__auto___16332 < len__7610__auto___16331)){
args__7617__auto__.push((arguments[i__7611__auto___16332]));

var G__16333 = (i__7611__auto___16332 + (1));
i__7611__auto___16332 = G__16333;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableFooter",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args));
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq16330){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16330));
});
cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16335 = arguments.length;
var i__7611__auto___16336 = (0);
while(true){
if((i__7611__auto___16336 < len__7610__auto___16335)){
args__7617__auto__.push((arguments[i__7611__auto___16336]));

var G__16337 = (i__7611__auto___16336 + (1));
i__7611__auto___16336 = G__16337;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args));
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq16334){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16334));
});
cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16339 = arguments.length;
var i__7611__auto___16340 = (0);
while(true){
if((i__7611__auto___16340 < len__7610__auto___16339)){
args__7617__auto__.push((arguments[i__7611__auto___16340]));

var G__16341 = (i__7611__auto___16340 + (1));
i__7611__auto___16340 = G__16341;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeaderColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args));
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq16338){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16338));
});
cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16343 = arguments.length;
var i__7611__auto___16344 = (0);
while(true){
if((i__7611__auto___16344 < len__7610__auto___16343)){
args__7617__auto__.push((arguments[i__7611__auto___16344]));

var G__16345 = (i__7611__auto___16344 + (1));
i__7611__auto___16344 = G__16345;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRow",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args));
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq16342){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16342));
});
cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16347 = arguments.length;
var i__7611__auto___16348 = (0);
while(true){
if((i__7611__auto___16348 < len__7610__auto___16347)){
args__7617__auto__.push((arguments[i__7611__auto___16348]));

var G__16349 = (i__7611__auto___16348 + (1));
i__7611__auto___16348 = G__16349;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRowColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args));
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq16346){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16346));
});
cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16351 = arguments.length;
var i__7611__auto___16352 = (0);
while(true){
if((i__7611__auto___16352 < len__7610__auto___16351)){
args__7617__auto__.push((arguments[i__7611__auto___16352]));

var G__16353 = (i__7611__auto___16352 + (1));
i__7611__auto___16352 = G__16353;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TextField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args));
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq16350){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16350));
});
cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16355 = arguments.length;
var i__7611__auto___16356 = (0);
while(true){
if((i__7611__auto___16356 < len__7610__auto___16355)){
args__7617__auto__.push((arguments[i__7611__auto___16356]));

var G__16357 = (i__7611__auto___16356 + (1));
i__7611__auto___16356 = G__16357;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TimePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args));
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq16354){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16354));
});
cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16359 = arguments.length;
var i__7611__auto___16360 = (0);
while(true){
if((i__7611__auto___16360 < len__7610__auto___16359)){
args__7617__auto__.push((arguments[i__7611__auto___16360]));

var G__16361 = (i__7611__auto___16360 + (1));
i__7611__auto___16360 = G__16361;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toggle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args));
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq16358){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16358));
});
cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16363 = arguments.length;
var i__7611__auto___16364 = (0);
while(true){
if((i__7611__auto___16364 < len__7610__auto___16363)){
args__7617__auto__.push((arguments[i__7611__auto___16364]));

var G__16365 = (i__7611__auto___16364 + (1));
i__7611__auto___16364 = G__16365;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toolbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args));
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq16362){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16362));
});
cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16367 = arguments.length;
var i__7611__auto___16368 = (0);
while(true){
if((i__7611__auto___16368 < len__7610__auto___16367)){
args__7617__auto__.push((arguments[i__7611__auto___16368]));

var G__16369 = (i__7611__auto___16368 + (1));
i__7611__auto___16368 = G__16369;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args));
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq16366){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16366));
});
cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16371 = arguments.length;
var i__7611__auto___16372 = (0);
while(true){
if((i__7611__auto___16372 < len__7610__auto___16371)){
args__7617__auto__.push((arguments[i__7611__auto___16372]));

var G__16373 = (i__7611__auto___16372 + (1));
i__7611__auto___16372 = G__16373;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarSeparator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args));
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq16370){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16370));
});
cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__7617__auto__ = [];
var len__7610__auto___16375 = arguments.length;
var i__7611__auto___16376 = (0);
while(true){
if((i__7611__auto___16376 < len__7610__auto___16375)){
args__7617__auto__.push((arguments[i__7611__auto___16376]));

var G__16377 = (i__7611__auto___16376 + (1));
i__7611__auto___16376 = G__16377;
continue;
} else {
}
break;
}

var argseq__7618__auto__ = ((((0) < args__7617__auto__.length))?(new cljs.core.IndexedSeq(args__7617__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__7618__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args));
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq16374){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16374));
});
