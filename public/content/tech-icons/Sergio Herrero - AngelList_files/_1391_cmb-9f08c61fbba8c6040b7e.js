webpackJsonp([168],{1363:function(n,t,e){n.exports=Promise.all([new Promise(function(n){n()}).then(e.bind(null,33))]).then(function(){return function(n){return{componentDidMount:function(){return this._backboneReactivityBind()},componentWillUnmount:function(){return this._backboneReactivityUnbind()},componentWillReceiveProps:function(){return this._backboneReactivityHadNewProps=!0,this._backboneReactivityUnbind()},componentDidUpdate:function(){if(this._backboneReactivityHadNewProps)return this._backboneReactivityHadNewProps=!1,this._backboneReactivityBind()},_backboneReactivityBind:function(){return this._backboneReactivityModels=this.reactToBackboneModels(),n.each(this._backboneReactivityModels,function(n){return function(t){if(t)return t.on("all",function(){return n._forceUpdateFromBackbone()},n)}}(this))},_backboneReactivityUnbind:function(){if(null!=this._backboneReactivityModels&&this._backboneReactivityModels.length>0)return n.each(this._backboneReactivityModels,function(n){return function(t){if(t)return t.off("all",function(){return n._forceUpdateFromBackbone()},n)}}(this)),this._backboneReactivityModels=null},_forceUpdateFromBackbone:function(){return(window.setImmediate||function(n){return setTimeout(n,1)})(function(n){return function(){if(n.isMounted())return n.forceUpdate()}}(this))}}}.apply(void 0,arguments[0])}.bind(this))}});