// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('om.tempid');

/**
* @constructor
 * @implements {om.transit.Object}
*/
om.transit.TempIdHandler = (function (){
})
om.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "om/id";
});

om.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
});

om.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

om.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

om.transit.TempIdHandler.cljs$lang$type = true;

om.transit.TempIdHandler.cljs$lang$ctorStr = "om.transit/TempIdHandler";

om.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__7084__auto__,writer__7085__auto__,opt__7086__auto__){
return cljs.core._write(writer__7085__auto__,"om.transit/TempIdHandler");
});

om.transit.__GT_TempIdHandler = (function om$transit$__GT_TempIdHandler(){
return (new om.transit.TempIdHandler());
});

om.transit.writer = (function om$transit$writer(var_args){
var args13435 = [];
var len__7544__auto___13438 = arguments.length;
var i__7545__auto___13439 = (0);
while(true){
if((i__7545__auto___13439 < len__7544__auto___13438)){
args13435.push((arguments[i__7545__auto___13439]));

var G__13440 = (i__7545__auto___13439 + (1));
i__7545__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var G__13437 = args13435.length;
switch (G__13437) {
case 0:
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13435.length)].join('')));

}
});

om.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handlers,om.tempid.TempId], null),(new om.transit.TempIdHandler())));
});

om.transit.writer.cljs$lang$maxFixedArity = 1;
om.transit.reader = (function om$transit$reader(var_args){
var args13442 = [];
var len__7544__auto___13445 = arguments.length;
var i__7545__auto___13446 = (0);
while(true){
if((i__7545__auto___13446 < len__7544__auto___13445)){
args13442.push((arguments[i__7545__auto___13446]));

var G__13447 = (i__7545__auto___13446 + (1));
i__7545__auto___13446 = G__13447;
continue;
} else {
}
break;
}

var G__13444 = args13442.length;
switch (G__13444) {
case 0:
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13442.length)].join('')));

}
});

om.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handlers,"om/id"], null),(function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
})));
});

om.transit.reader.cljs$lang$maxFixedArity = 1;