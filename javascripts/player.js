(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};window.Player=function(){function e(e){this.close=t(this.close,this),this.id=e.data("youtube"),this.player=$(e.data("target")),this.overlay=null,this.body=$("body"),this.prepare(),null!=this.overlay&&this.observe()}return e.prototype.prepare=function(){return this.player.length?this.player.empty():(this.player=$('<div id="player">').appendTo(this.body),this.overlay=$('<div id="overlay">').appendTo(this.player)),this.iframe=$("<iframe width='560' height='315' src='http://www.youtube.com/embed/"+this.id+"?rel=0&autoplay=1' frameborder='0' allowfullscreen>").appendTo(this.player)},e.prototype.observe=function(){return this.overlay.on("click",this.close)},e.prototype.close=function(){return this.player.remove()},e}()}).call(this);