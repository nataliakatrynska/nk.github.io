function embedNotebook(Notebook,scope){embedHashPersistencePlugin(Notebook,scope),new Notebook(document.body,{inject:["plugins/custom-location-persistence.js","plugins/filter-properties.js","plugins/raml-client-generator.js","plugins/chai.js","plugins/function-property-filter.js","plugins/jquery.js","plugins/loadFile.js"],exec:["App.middleware.register(customLocationPersistencePlugin);","App.middleware.register(filterPropertiesPlugin);","App.middleware.register(ramlClientGeneratorPlugin);","App.middleware.register(chaiPlugin);","App.middleware.register(functionPropertyFilterPlugin);","App.middleware.register(jqueryPlugin);","App.middleware.register(loadFilePlugin);"].join("\n"),className:"application__main-window"})}function inIframe(){try{return window.self!==window.top}catch(e){return!0}}function setButtonUrl(){var additionalUrl=window.location.href.split("#")[1];if(additionalUrl)var url="/#"+additionalUrl;else var url="/";$("#btnSwitchView").attr("href",url)}function resizeFrame(){var applicationHeight=getHeight(),quickStartHeight=getQuickStartHeight(),navigationButtonsHeight=getNavigationButtonsHeight();CHILD_EMBED_FRAME.height=applicationHeight,CURRENT_FRAME.css({height:applicationHeight+quickStartHeight+navigationButtonsHeight})}function getHeight(){CHILD_EMBED_FRAME||(CHILD_EMBED_FRAME=document.getElementById("iframeNotebook"));var tutorialContent=CHILD_EMBED_FRAME.contentWindow.document.getElementsByClassName("application__main-window")[0];return tutorialContent?tutorialContent.clientHeight:0}function getQuickStartHeight(){return $("#setupOptions").outerHeight(!0)}function getNavigationButtonsHeight(){return $("#navigationButtons").outerHeight(!0)}function dispatchResizeEvent(){var RESIZE_EVENT=new CustomEvent("resizeNeeded");window.dispatchEvent(RESIZE_EVENT)}var host=document.location.hostname;if("127.0.0.1"===host)tokenValidatorPlugin($),chooseAppPlugin($),setScriptTag("plugins/embed-hash-persistence.js",function(){embedNotebook(Notebook,window)});else{var lscache=window.parent.lscache,KJUR=window.parent.KJUR,b64utos=window.parent.b64utos,embedHashPersistencePlugin=window.parent.embedHashPersistencePlugin;tokenValidatorPlugin($),chooseAppPlugin($),embedNotebook(Notebook,window)}inIframe()||($("#btnSwitchViewContainer").removeClass("hidden"),$(document).ready(function(){setButtonUrl(),window.onhashchange=setButtonUrl}));var CURRENT_FRAME=$(parent.document).find('iframe[src="'+document.location.href+'"]'),CHILD_EMBED_FRAME;window.addEventListener("message",function(event){function hideSpinner(){CURRENT_FRAME.removeClass("u-hidden"),CURRENT_FRAME.slideDown(300),CURRENT_FRAME.siblings(".js-notebook-loader").removeClass("u-opacity-100").addClass("u-opacity-0")}var eventData=event.data;"string"==typeof eventData&&eventData.indexOf("height")!==-1&&setTimeout(resizeFrame,1e3),"string"==typeof eventData&&eventData.indexOf("renderFinished")!==-1&&(resizeFrame(),hideSpinner())},!1),window.addEventListener("resizeNeeded",function(){resizeFrame()},!1);