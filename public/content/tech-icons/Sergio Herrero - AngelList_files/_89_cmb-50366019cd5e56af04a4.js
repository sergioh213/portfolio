webpackJsonp([14],{825:function(t,e,a){(function(t){!function(t,e){"use strict";void 0!==t.rails&&t.error("jquery-ujs has already been loaded!");var a,n=t(document);t.rails=a={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return t("meta[name=csrf-token]").attr("content")},csrfParam:function(){return t("meta[name=csrf-param]").attr("content")},CSRFProtection:function(t){var e=a.csrfToken();e&&t.setRequestHeader("X-CSRF-Token",e)},refreshCSRFTokens:function(){t('form input[name="'+a.csrfParam()+'"]').val(a.csrfToken())},fire:function(e,a,n){var i=t.Event(a);return e.trigger(i,n),!1!==i.result},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t[0].href},isRemote:function(t){return void 0!==t.data("remote")&&!1!==t.data("remote")},handleRemote:function(e){var n,i,o,r,l,s;if(a.fire(e,"ajax:before")){if(r=e.data("with-credentials")||null,l=e.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,e.is("form")){n=e.data("ujs:submit-button-formmethod")||e.attr("method"),i=e.data("ujs:submit-button-formaction")||e.attr("action"),o=t(e[0]).serializeArray();var d=e.data("ujs:submit-button");d&&(o.push(d),e.data("ujs:submit-button",null)),e.data("ujs:submit-button-formmethod",null),e.data("ujs:submit-button-formaction",null)}else e.is(a.inputChangeSelector)?(n=e.data("method"),i=e.data("url"),o=e.serialize(),e.data("params")&&(o=o+"&"+e.data("params"))):e.is(a.buttonClickSelector)?(n=e.data("method")||"get",i=e.data("url"),o=e.serialize(),e.data("params")&&(o=o+"&"+e.data("params"))):(n=e.data("method"),i=a.href(e),o=e.data("params")||null);return s={type:n||"GET",data:o,dataType:l,beforeSend:function(t,n){if(void 0===n.dataType&&t.setRequestHeader("accept","*/*;q=0.5, "+n.accepts.script),!a.fire(e,"ajax:beforeSend",[t,n]))return!1;e.trigger("ajax:send",t)},success:function(t,a,n){e.trigger("ajax:success",[t,a,n])},complete:function(t,a){e.trigger("ajax:complete",[t,a])},error:function(t,a,n){e.trigger("ajax:error",[t,a,n])},crossDomain:a.isCrossDomain(i)},r&&(s.xhrFields={withCredentials:r}),i&&(s.url=i),a.ajax(s)}return!1},isCrossDomain:function(t){var e=document.createElement("a");e.href=location.href;var a=document.createElement("a");try{return a.href=t,a.href=a.href,!((!a.protocol||":"===a.protocol)&&!a.host||e.protocol+"//"+e.host==a.protocol+"//"+a.host)}catch(t){return!0}},handleMethod:function(e){var n=a.href(e),i=e.data("method"),o=e.attr("target"),r=a.csrfToken(),l=a.csrfParam(),s=t('<form method="post" action="'+n+'"></form>'),d='<input name="_method" value="'+i+'" type="hidden" />';void 0===l||void 0===r||a.isCrossDomain(n)||(d+='<input name="'+l+'" value="'+r+'" type="hidden" />'),o&&s.attr("target",o),s.hide().append(d).appendTo("body"),s.submit()},formElements:function(e,a){return e.is("form")?t(e[0].elements).filter(a):e.find(a)},disableFormElements:function(e){a.formElements(e,a.disableSelector).each(function(){a.disableFormElement(t(this))})},disableFormElement:function(t){var e,a;e=t.is("button")?"html":"val",void 0!==(a=t.data("disable-with"))&&(t.data("ujs:enable-with",t[e]()),t[e](a)),t.prop("disabled",!0),t.data("ujs:disabled",!0)},enableFormElements:function(e){a.formElements(e,a.enableSelector).each(function(){a.enableFormElement(t(this))})},enableFormElement:function(t){var e=t.is("button")?"html":"val";void 0!==t.data("ujs:enable-with")&&(t[e](t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.prop("disabled",!1),t.removeData("ujs:disabled")},allowAction:function(t){var e,n=t.data("confirm"),i=!1;if(!n)return!0;if(a.fire(t,"confirm")){try{i=a.confirm(n)}catch(t){(console.error||console.log).call(console,t.stack||t)}e=a.fire(t,"confirm:complete",[i])}return i&&e},blankInputs:function(e,a,n){var i,o,r,l,s=t(),d=a||"input,textarea",u={};return e.find(d).each(function(){(i=t(this)).is("input[type=radio]")?(l=i.attr("name"),u[l]||(0===e.find('input[type=radio]:checked[name="'+l+'"]').length&&(r=e.find('input[type=radio][name="'+l+'"]'),s=s.add(r)),u[l]=l)):(o=i.is("input[type=checkbox],input[type=radio]")?i.is(":checked"):!!i.val())===n&&(s=s.add(i))}),!!s.length&&s},nonBlankInputs:function(t,e){return a.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var e=t.data("disable-with");void 0!==e&&(t.data("ujs:enable-with",t.html()),t.html(e)),t.bind("click.railsDisable",function(t){return a.stopEverything(t)}),t.data("ujs:disabled",!0)},enableElement:function(t){void 0!==t.data("ujs:enable-with")&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable"),t.removeData("ujs:disabled")}},a.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){t.crossDomain||a.CSRFProtection(n)}),t(window).on("pageshow.rails",function(){t(t.rails.enableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableFormElement(e)}),t(t.rails.linkDisableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableElement(e)})}),n.on("ajax:complete",a.linkDisableSelector,function(){a.enableElement(t(this))}),n.on("ajax:complete",a.buttonDisableSelector,function(){a.enableFormElement(t(this))}),n.on("click.rails",a.linkClickSelector,function(e){var n=t(this),i=n.data("method"),o=n.data("params"),r=e.metaKey||e.ctrlKey;if(!a.allowAction(n))return a.stopEverything(e);if(!r&&n.is(a.linkDisableSelector)&&a.disableElement(n),a.isRemote(n)){if(r&&(!i||"GET"===i)&&!o)return!0;var l=a.handleRemote(n);return!1===l?a.enableElement(n):l.fail(function(){a.enableElement(n)}),!1}return i?(a.handleMethod(n),!1):void 0}),n.on("click.rails",a.buttonClickSelector,function(e){var n=t(this);if(!a.allowAction(n)||!a.isRemote(n))return a.stopEverything(e);n.is(a.buttonDisableSelector)&&a.disableFormElement(n);var i=a.handleRemote(n);return!1===i?a.enableFormElement(n):i.fail(function(){a.enableFormElement(n)}),!1}),n.on("change.rails",a.inputChangeSelector,function(e){var n=t(this);return a.allowAction(n)&&a.isRemote(n)?(a.handleRemote(n),!1):a.stopEverything(e)}),n.on("submit.rails",a.formSubmitSelector,function(e){var n,i,o=t(this),r=a.isRemote(o);if(!a.allowAction(o))return a.stopEverything(e);if(void 0===o.attr("novalidate"))if(void 0===o.data("ujs:formnovalidate-button")){if((n=a.blankInputs(o,a.requiredInputSelector,!1))&&a.fire(o,"ajax:aborted:required",[n]))return a.stopEverything(e)}else o.data("ujs:formnovalidate-button",void 0);if(r){if(i=a.nonBlankInputs(o,a.fileInputSelector)){setTimeout(function(){a.disableFormElements(o)},13);var l=a.fire(o,"ajax:aborted:file",[i]);return l||setTimeout(function(){a.enableFormElements(o)},13),l}return a.handleRemote(o),!1}setTimeout(function(){a.disableFormElements(o)},13)}),n.on("click.rails",a.formInputClickSelector,function(e){var n=t(this);if(!a.allowAction(n))return a.stopEverything(e);var i=n.attr("name"),o=i?{name:i,value:n.val()}:null,r=n.closest("form");0===r.length&&(r=t("#"+n.attr("form"))),r.data("ujs:submit-button",o),r.data("ujs:formnovalidate-button",n.attr("formnovalidate")),r.data("ujs:submit-button-formaction",n.attr("formaction")),r.data("ujs:submit-button-formmethod",n.attr("formmethod"))}),n.on("ajax:send.rails",a.formSubmitSelector,function(e){this===e.target&&a.disableFormElements(t(this))}),n.on("ajax:complete.rails",a.formSubmitSelector,function(e){this===e.target&&a.enableFormElements(t(this))}),t(function(){a.refreshCSRFTokens()}))}(t)}).call(e,a(2))}});