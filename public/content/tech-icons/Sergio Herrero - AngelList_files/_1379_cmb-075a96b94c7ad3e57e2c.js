webpackJsonp([141],{1277:function(e,t,n){var i=function(e,t){return function(){return e.apply(t,arguments)}},r=function(e,t){function n(){this.constructor=e}for(var i in t)a.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},a={}.hasOwnProperty;e.exports=Promise.all([new Promise(function(e){e()}).then(n.bind(null,2)),new Promise(function(e){e()}).then(n.bind(null,106)),new Promise(function(e){e()}).then(n.bind(null,33)),new Promise(function(e){e()}).then(n.bind(null,52)),n.e(57).then(n.bind(null,926)),n.e(34).then(n.bind(null,857)),n.e(27).then(n.bind(null,853)),n.e(710).then(n.bind(null,1847)),n.e(821).then(n.bind(null,2599)),n.e(2).then(n.bind(null,811)),n.e(1241).then(n.bind(null,2602)),n.e(1227).then(n.bind(null,2603))]).then(function(){return function(e,t,n,a,s,o,l,h){var u,d,p,c,g,_,f;return c=n.uniqueId("lib_mentions"),d=n.template("<span\nclass='"+a.classNames("coffeescripts/lib/mentions").join(" ")+" autocomplete_mention'>@<%- displayName || slug %></span>"),f=n.template('<a class="at_mention_link" data-type="<%- sluggable_type %>" data-id="<%- sluggable_id %>" href="<%- name %>">\n  <span class="at_mention_symbol">@</span><span class="at_mention_slug"><%- sluggable_to_s %></span>\n</a>'),u={},p=function(t){return u[t]||(u[t]=e.get("/mentions/search",{mention:t},null,"json"),n.delay(function(){return u[t]=null},6e4)),u[t]},_="\\s<>&\\(\\)\\?!,.:;'\"",g=function(e,t,i){var r;return r=new RegExp("(?=["+_+"\\"+t+"])","g"),n.map(e.split(r),function(e){return e[0]===t&&e.length>1?i(e.slice(1)):e}).join("")},{Autocomplete:function(t){function s(){return this._search=i(this._search,this),this._transformTokens=i(this._transformTokens,this),this.updateTarget=i(this.updateTarget,this),this.render=i(this.render,this),s.__super__.constructor.apply(this,arguments)}return r(s,t),s.prototype.results=function(t){return 0===t.length?[]:e.when(p(t))},s.prototype.renderMention=function(e){var t,n;if(n=e.get("name"),null==(t=e.get("sluggable_to_s")))throw new Error("No display name loaded for slug");return d({slug:n,displayName:t})},s.prototype.renderSelect=function(e){return o.render_item({image:e.pic,main_text:e.highlighed_name,detail_text:e.desc})},s.prototype.resultToSlug=function(e){return(this.collection.findWhere({name:e.slug})||new h).set({name:e.slug,sluggable_to_s:n.unescape(e.name),sluggable_id:e.id,sluggable_type:e.type})},s.prototype.initialize=function(t){if(this.collection||(this.collection=l.get(h)),this.$el.is(":input"))throw new Error("Must be applied to a container element, not to an input directly");if(this.$target=e(t.target),!this.$target.is(":input"))throw new Error("Must provide a target input (generally hidden) to contain the value to submit to the server");return this._initializeElement(),this.$editable=this._initializeEditable(),this.$highlighter=this._initializeHighlighter(),this._$intermediary=e('<input type="hidden" value=""/>'),this.render()},s.prototype.render=function(){if(!this._nestedRender)return this._nestedRender=!0,this._$intermediary.val(this.$target.val().replace(new RegExp("\\"+this._at+"(?=[^\\s])","g"),this._atReplacement)),this._renderEditable(),this._renderHighlighter(),this._nestedRender=!1},s.prototype.updateTarget=function(){if(!this._nestedUpdateTarget)return this._nestedUpdateTarget=!0,this._$intermediary.val(this.$editable.val().replace(new RegExp("\\"+this._marker+"[^\\"+this._marker+"]+(?=\\"+this._marker+"(["+_+"]|$))","g"),function(e){return function(t){var n,i;return n=t.slice(1),null!=(i=(e._slugNamesByRenderedText||{})[n])?""+e._atReplacement+i:t}}(this)).replace(new RegExp("\\"+this._marker,"g"),"")),this.$target.val(this._$intermediary.val().replace(new RegExp("\\"+this._atReplacement,"g"),this._at)).trigger("change"),this._renderEditable(),this._renderHighlighter(),this._nestedUpdateTarget=!1},s.prototype.events={change:"updateTarget",input:"updateTarget",keyup:"updateTarget"},s.prototype.delegateEvents=function(){var t,n;return s.__super__.delegateEvents.apply(this,arguments),this.$target.on("change",function(e){return function(){if(!e._nestedUpdateTarget)return e.render()}}(this)),this.$editable.atwho({at:this._at,alias:"mentions",displayTpl:function(t){return function(n){var i;return i=t.resultToSlug(n),e(t._renderMentionWithMetadata(i)).text(),e(t.renderSelect(n)).wrap("<li>").parent().attr("data-"+c+"_slug",JSON.stringify(i.toJSON())).wrap("<p>").parent().html()}}(this),insertTpl:function(t){return function(n){var i;return i=t.resultToSlug(n),e(t._renderMentionWithMetadata(i)).text()}}(this),callbacks:{highlighter:function(e,t){return e},remoteFilter:this._search,tplEval:function(e,t){return e(t)},sorter:function(e,t,n){return t},matcher:function(e,t,n){var i,r;return e=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),n&&(e="(?:^|\\s)"+e),r=new RegExp(e+"([ A-Za-z0-9_+-]*)$|"+e+"([^\\x00-\\xff]*)$","gi"),(i=r.exec(t))?i[2]||i[1]:null}}}),t=this.$editable.data("atwho").controllers["@"],n=t.insert,t.insert=function(e){return function(i,r){var a;if(null==(a=r.data(c+"_slug")).name)throw new Error("Slug name expected in attributes");return e.collection.findWhere({name:a.name})||e.collection.add(a),n.call(t,""+e._marker+i+e._marker,r)}}(this)},s.prototype.undelegateEvents=function(){return s.__super__.undelegateEvents.apply(this,arguments),this.$target.off("change",this.render),this.$editable.atwho("destroy")},s.prototype._at="@",s.prototype._marker=String.fromCharCode(8203),s.prototype._atReplacement=String.fromCharCode(8205),s.prototype._initializeElement=function(){if(this.$el.css({position:"relative"}),"auto"===this.$el.css("z-index"))return this.$el.css("z-index",0)},s.prototype._initializeEditable=function(){var t;return(t=this.$("textarea")[0])||(t=e("<textarea />")).appendTo(this.$el),(t=e(t)).autosize(),t.css("background-color","transparent"),t},s.prototype._initializeHighlighter=function(){var t,n,i,r,s,o,l,h,u;for(n=e("<div class='"+a.classNames("coffeescripts/lib/mentions").join(" ")+" highlighter' />").insertBefore(this.$editable),u=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","lineHeight","minHeight","borderRadius"],i=0,s=(l=["Left","Right","Top","Bottom"]).length;i<s;i++)t=l[i],u.push("padding"+t),u.push("margin"+t),u.push("border"+t+"Width");for(r=0,o=u.length;r<o;r++)h=u[r],n.css(h,this.$editable.css(h));return n},s.prototype._renderEditable=function(){var t,n,i,r,a,s,o;if(o=this._transformTokens(!1,function(t){return function(n){var i;return i=t._renderMentionWithMetadata(n),t._marker+e(i).text()+t._marker}}(this)),(t=this.$editable.val())!==o){if(n=this.$editable.is(":focus"),s=0,n)for(s=0,i=r=0,a=this.$editable.caret("pos")-1;0<=a?r<=a:r>=a;i=0<=a?++r:--r)o[s]===t[i]&&s++;if(this.$editable.val(o),this.$editable.trigger("autosize.resize"),n)return this.$editable.caret("pos",s)}},s.prototype._renderHighlighter=function(){return this.$highlighter.html(this._transformTokens(!0,function(e){return function(t){return e._renderMentionWithMetadata(t)}}(this)))},s.prototype._transformTokens=function(e,t){var i;return i=this._$intermediary.val(),e&&(i=n.escape(i)),g(i,this._atReplacement,function(e){return function(n){var i;return null!=(i=e.collection.findWhere({name:n}))?t(i):(e._loadData(),""+e._at+n)}}(this))},s.prototype._renderMentionWithMetadata=function(t){var n,i;if(!t.has("name"))throw new Error("Slug name expected in model");if(this._renderedMentions||(this._renderedMentions={}),this._slugNamesByRenderedText||(this._slugNamesByRenderedText={}),!this._renderedMentions[t.get("name")]){for(i=e(this.renderMention(t)).attr("data-marker",this._marker),n=!0;null!=this._slugNamesByRenderedText[i.text()];)i.html(i.html()+(n?"&nbsp;":" ")),n=!n;this._renderedMentions[t.get("name")]=i.wrap("<p>").parent().html(),this._slugNamesByRenderedText[i.text()]=t.get("name")}return this._renderedMentions[t.get("name")]},s.prototype._search=function(t,n){var i;return this._searchId||(this._searchId=0),this._searchId++,i=this._searchId,e.when(this.results(t)).done(function(e){return function(t){if(e._searchId===i)return n(t)}}(this))},s.prototype._loadData=n.once(function(){return e.get("/mentions/init_mentions",{text:this.$target.val()},function(e){return function(t){var n,i,r,a,s;a=t.active_mentions||{};for(i in a)r=(n=a[i]).slug.replace(/^@/,""),(s=e.collection.findWhere({name:r})||new h).set({name:r,sluggable_to_s:i.replace(/^@/,""),sluggable_type:n.type,sluggable_id:n.id}),e.collection.add(s);return e.render()}}(this),"json")}),s}(t.View),UpdatingField:function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return r(n,t),n.prototype.initialize=function(e){if(this.collection||(this.collection=l.get(h)),this.field=e.field,null==this.field)throw new Error("Must provide a field to listen to");return this.listenTo(this.model,"change:"+this.field,this.render)},n.prototype.render=function(){var t,n,i;return n=this._preprocessText(),i=this,t=function(){var n;return e(this).contents().length>0?e(this).contents().each(t):(n=g(e(this).text(),"@",function(e){var t;return null!=(t=i.collection.findWhere({name:e}))?i.renderMention(t):"@"+e}),null!=e(this).html()?e(this).html(n):e(this).replaceWith(n))},this.$el.empty().append(e(n).each(t)),this},n.prototype.renderMention=function(e){return f(e.toJSON())},n.prototype._preprocessText=function(){return s.link_and_format(this.model.escape(this.field))},n}(t.View)}}.apply(void 0,arguments[0])}.bind(this))}});