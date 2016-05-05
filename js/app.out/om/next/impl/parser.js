// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__12403){
var vec__12406 = p__12403;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12406,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12406,(1),null);
var call = vec__12406;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__6540__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__6540__auto__ = args;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__12407 = ast;
if((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12407,cljs.core.cst$kw$type,cljs.core.cst$kw$call);
} else {
return G__12407;
}
}
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__12409 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12409,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var ref_QMARK_ = cljs.core.vector_QMARK_(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.array_seq([cljs.core.cst$kw$query,v], 0));
});
om.next.impl.parser.ref__GT_ast = (function om$next$impl$parser$ref__GT_ast(p__12410){
var vec__12412 = p__12410;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(1),null);
var ref = vec__12412;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ref__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__12414 = expr;
if((expr instanceof cljs.core.Keyword)){
var x__7374__auto__ = G__12414;
return cljs.core._conj(cljs.core.List.EMPTY,x__7374__auto__);
} else {
return G__12414;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_SLASH_root,true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(p__12415){
var map__12422 = p__12415;
var map__12422__$1 = ((((!((map__12422 == null)))?((((map__12422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12422):map__12422);
var ast = map__12422__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,cljs.core.cst$kw$query);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,cljs.core.cst$kw$params);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,cljs.core.cst$kw$query_SLASH_root);
return om.next.impl.parser.wrap_expr(root,((!((params == null)))?((!(cljs.core.empty_QMARK_(params)))?(function (){var x__7374__auto__ = om$next$impl$parser$ast__GT_expr(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params));
return cljs.core._conj((function (){var x__7374__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__7374__auto____$1);
})(),x__7374__auto__);
})():(function (){var x__7374__auto__ = om$next$impl$parser$ast__GT_expr(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params));
return cljs.core._conj(cljs.core.List.EMPTY,x__7374__auto__);
})()):((!((query == null)))?cljs.core.PersistentArrayMap.fromArray([key,query], true, false):key)));
});
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__12435 = x;
var G__12435__$1 = ((cljs.core.map_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__12435){
return (function (p__12436){
var vec__12437 = p__12436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k))], null);
});})(G__12435))
),G__12435):G__12435);
if(cljs.core.vector_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (G__12435,G__12435__$1){
return (function (p1__12425_SHARP_,p2__12424_SHARP_){
return om$next$impl$parser$path_meta(p2__12424_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__12425_SHARP_));
});})(G__12435,G__12435__$1))
),G__12435__$1);
} else {
return G__12435__$1;
}
})();
var G__12438 = x_SINGLEQUOTE_;
if(((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__12438,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__12438;
}
});
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$om$next_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__12440){
var map__12507 = p__12440;
var map__12507__$1 = ((((!((map__12507 == null)))?((((map__12507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12507):map__12507);
var config = map__12507__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12507__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12507__$1,cljs.core.cst$kw$mutate);
return ((function (map__12507,map__12507__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$(cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config));
var map__12541 = (function (){var G__12542 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_SLASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
if(!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12542,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY);
} else {
return G__12542;
}
})();
var map__12541__$1 = ((((!((map__12541 == null)))?((((map__12541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12541):map__12541);
var env__$1 = map__12541__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__12541,map__12541__$1,env__$1,path,map__12507,map__12507__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__12565 = om.next.impl.parser.expr__GT_ast(expr);
var map__12565__$1 = ((((!((map__12565 == null)))?((((map__12565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12565):map__12565);
var ast = map__12565__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12565__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12565__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12565__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12565__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var env__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$ast,ast);
var env__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$2,cljs.core.cst$kw$query,query):(function (){var G__12567 = env__$2;
if(!((query_SINGLEQUOTE_ == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12567,cljs.core.cst$kw$query,query_SINGLEQUOTE_);
} else {
return G__12567;
}
})());
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$3,cljs.core.cst$kw$query_SLASH_root,key);
} else {
return env__$3;
}
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null))?(function (){var G__12568 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12568) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str("mutate")].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str("read")].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})():null);
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__12569 = ret;
var G__12569__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12569,expr):G__12569);
var G__12569__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12569__$1,om.next.impl.parser.ast__GT_expr(ast_SINGLEQUOTE_)):G__12569__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12569__$2,om.next.impl.parser.ast__GT_expr(ast));
} else {
return G__12569__$2;
}
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res).call(null);
}catch (e12570){var e_12574 = e12570;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_12574))){
throw e_12574;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_12574) : cljs.core.reset_BANG_.call(null,error,e_12574));
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var G__12571 = ret;
var G__12571__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12571,key,value):G__12571);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12571__$1,key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)));
} else {
return G__12571__$1;
}
}
}
});})(elide_paths_QMARK_,map__12541,map__12541__$1,env__$1,path,map__12507,map__12507__$1,config,read,mutate))
;
var G__12572 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(!((!((target == null))) || (elide_paths_QMARK_))){
return om.next.impl.parser.path_meta(G__12572,path);
} else {
return G__12572;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__12507,map__12507__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});
