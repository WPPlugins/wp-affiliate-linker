var active_tab="",active_child_tab="";jQuery(document).ready(function($){if($(".nav-tab-wrapper.needs-js").length>0){var a=$(".nav-tab-wrapper.needs-js").data("panel"),t=$(".nav-tab-wrapper.needs-js"),e=$(".nav-tab-wrapper.needs-js").data("form"),n=$("form"+e).attr("action");if($(t).fadeIn("fast",function(){$(this).removeClass("needs-js")}),$("div."+a).hide(),active_tab=window.location.hash,0==active_tab.length?active_tab=$("a.nav-tab-active",$(t)).attr("href"):($("a.nav-tab-active",$(t)).removeClass("nav-tab-active"),$('a[href="'+active_tab+'"]',$(t)).addClass("nav-tab-active")),"undefined"==typeof active_tab)return;$(active_tab+"-panel").show(),$(active_tab.replace("#",".")+"-panel").show(),"undefined"!=typeof $("a.nav-tab-active",$(t)).data("documentation")&&$("a.nav-tab.documentation").attr("href",$("a.nav-tab-active",$(t)).data("documentation")),$(t).on("click","a",function(i){return!(location.hostname===this.hostname||!this.hostname.length)||(i.preventDefault(),$("a",$(t)).removeClass("nav-tab-active"),$("div."+a).hide(),$(this).addClass("nav-tab-active"),active_tab=$(this).attr("href"),"undefined"!=typeof $(this).data("documentation")&&$("a.nav-tab.documentation").attr("href",$(this).data("documentation")),$(active_tab+"-panel").each(function(){$(this).show()}),$(active_tab.replace("#",".")+"-panel").each(function(){$(this).show()}),history.pushState?history.pushState(null,null,$(this).attr("href")):location.hash=$(this).attr("href"),void(void 0!==n&&$(e).attr("action",n+active_tab)))})}});