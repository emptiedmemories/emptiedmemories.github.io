(function(){var t=function(t,i){return function(){return t.apply(i,arguments)}};(function(){return window.Home=function(){function i(){this.leave=t(this.leave,this),this.slideGo=t(this.slideGo,this),this.introGo=t(this.introGo,this),this.setting(),this.prepare(),this.init()}return i.prototype.setting=function(){return this.cutDuration=[0,0,1500,500,1800,3500,3e3,3e3,3e3,3e3],this.cut=0,this.slideDuration=5e3},i.prototype.prepare=function(){return this.html=site.html,this.body=site.body,this.slides=this.body.find(".slide"),this.length=this.slides.length},i.prototype.observe=function(){},i.prototype.init=function(){return site.introViewed?this.introPassed():this.introGo()},i.prototype.introGo=function(){return site.introViewed?this.introPassed():(this.html.addClass("cut"+this.cut+"-active"),this.cut>1&&this.html.changeClass("cut"+(this.cut-1)+"-active","cut"+(this.cut-1)+"-actived"),5===this.cut&&this.slideInit(0),this.cut++,this.cut===this.cutDuration.length?(site.introViewed=!0,this.slideTrigger(),void 0):setTimeout(this.introGo,this.cutDuration[this.cut]))},i.prototype.introPassed=function(){var t,i,s,e,n;for(i=e=0,n=this.cutDuration.length;n>=0?n>e:e>n;i=n>=0?++e:--e)s="cut"+i+"-active",t="cut"+i+"-actived",this.html.changeClass(s,t);return this.html.addClass("intro-passed"),this.slideInit(this.getRandomSlide()),this.slideTrigger()},i.prototype.getRandomSlide=function(){return Math.floor(Random(0,this.length-1,!1))},i.prototype.slideInit=function(t){return this.slide=t,this.slides.eq(this.slide).addClass("active")},i.prototype.slideGo=function(){return site.is_home||clearTimeout(this.slideGoing),this.slides.eq(this.slide).removeClass("active"),this.slide<this.length-1?this.slide++:this.slide=0,this.slides.eq(this.slide).addClass("active")},i.prototype.slideTrigger=function(){return clearTimeout(this.slideGoing),this.slideGoing=setInterval(this.slideGo,this.slideDuration)},i.prototype.leave=function(){return site.introViewed=!0},i}()})(jQuery)}).call(this);