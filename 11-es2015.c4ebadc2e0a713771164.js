(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wIKL:function(t,e,r){"use strict";r.r(e),r.d(e,"HomeModule",(function(){return A}));var i=r("ofXK"),n=r("tyNb"),o=r("KDCH"),c=r("fXoL"),s=r("YAec"),b=r("l7P3"),l=r("P0Yp"),a=r("npAJ"),u=r("Uk2f"),p=r("5IrW"),h=r("tk/3");function d(t,e){if(1&t&&(c.Pb(0,"ul",11),c.Pb(1,"li",12),c.Ac(2),c.bc(3,"async"),c.Ob(),c.Pb(4,"li",12),c.Ac(5),c.bc(6,"async"),c.Ob(),c.Pb(7,"li",12),c.Ac(8),c.bc(9,"async"),c.Ob(),c.Pb(10,"li",12),c.Ac(11),c.bc(12,"async"),c.Ob(),c.Ob()),2&t){const t=c.ac();c.xb(2),c.Cc("Email: ",c.cc(3,4,t.Auth).User.Email,""),c.xb(3),c.Cc("Token: ",c.cc(6,6,t.Auth).User.Token,""),c.xb(3),c.Cc("Id: ",c.cc(9,8,t.Auth).User.Id,""),c.xb(3),c.Cc("ExpirationDate: ",c.cc(12,10,t.Auth).User.ExpirationDate,"")}}const f=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,e,r,i,n,o,c){this.notifyService=t,this.store=e,this.webStorage=r,this.authService=i,this.dialogService=n,this.spinnerService=o,this.httpClient=c}ngOnInit(){this.Auth=this.store.select("Auth")}Notify(){const t="My message default";this.notifyService.None(t,5e3),this.notifyService.Success(t,2e4),this.notifyService.Error(t,9e3),this.notifyService.Info(t,2e3),this.notifyService.Warning(t,800)}onLogin(){this.store.dispatch(o.d({Username:"test@test.com",Password:"admin"}));const t=this.spinnerService.Show({Overlay:!1,Message:"Test"});setTimeout(()=>{this.spinnerService.Hide(t)},2e3)}onLogout(){this.store.dispatch(o.e()),this.dialogService.Show({Title:"Customer logout",Body:"whyyy!"}).then()}onOverlay(){const t=this.spinnerService.Show({Overlay:!0});this.authService.getAll(),setTimeout(()=>{this.spinnerService.Hide(t)},3e3)}GoToCart(){this.dialogService.Show({Title:"Product in the cart",Body:'<div class="row">\n      <div class="col-3">\n        <p></p>\n        <p class="text-center"><i class="fas fa-4x fa-shopping-cart fa-spin"></i></p>\n      </div>\n      <div class="col-9">\n        <p>Do you need more time to make a purchase decision?</p>\n        <p>No pressure, your product will be waiting for you in the cart.</p>\n      </div>\n    </div>',Footer:{Redirect:{Text:"Go to cart",Url:"/Sale/Cart"}}}).then()}FireClientError(){throw new Error("Client Error. Shit happens :)")}FireServerError(){this.httpClient.get("https://jsonplaceholder.typicode.com/1").subscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(s.c),c.Jb(b.h),c.Jb(l.c),c.Jb(a.a),c.Jb(u.b),c.Jb(p.b),c.Jb(h.b))},t.\u0275cmp=c.Db({type:t,selectors:[["app-home"]],decls:39,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-12","mb-2"],[1,"card"],[1,"card-body"],[1,"btn","btn-outline-success","mr-1",3,"click"],[1,"btn","btn-outline-warning","mr-1",3,"click"],["class","list-group list-group-flush",4,"ngIf"],[1,"btn","btn-outline-danger","mr-1",3,"click"],[1,"btn","btn-outline-secondary","m-1",3,"click"],[1,"btn","btn-outline-secondary","mr-1",3,"click"],[1,"list-group","list-group-flush"],[1,"list-group-item","list-group-item-action"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"div",4),c.Pb(5,"button",5),c.Wb("click",(function(){return e.onLogin()})),c.Ac(6,"Login"),c.Ob(),c.Pb(7,"button",6),c.Wb("click",(function(){return e.onLogout()})),c.Ac(8,"Logout"),c.Ob(),c.yc(9,d,13,12,"ul",7),c.bc(10,"async"),c.Kb(11,"hr"),c.Pb(12,"button",8),c.Wb("click",(function(){return e.FireClientError()})),c.Ac(13," Client Error"),c.Ob(),c.Pb(14,"button",8),c.Wb("click",(function(){return e.FireServerError()})),c.Ac(15," Server Error"),c.Ob(),c.Pb(16,"div"),c.Ac(17," ErrorModule [ErrorsService, GlobalErrorHandler, ErrorInterceptor] "),c.Kb(18,"br"),c.Ac(19,"ServiceHelper (PipeNotification) "),c.Ob(),c.Kb(20,"hr"),c.Pb(21,"button",9),c.Wb("click",(function(){return e.Notify()})),c.Ac(22,"Toaster Base"),c.Ob(),c.Pb(23,"button",10),c.Wb("click",(function(){return e.onOverlay()})),c.Ac(24,"Overlay"),c.Ob(),c.Pb(25,"button",10),c.Wb("click",(function(){return e.GoToCart()})),c.Ac(26,"modalService GoToCart"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(27,"div",2),c.Pb(28,"div",3),c.Pb(29,"div",4),c.Pb(30,"ul",11),c.Pb(31,"li",12),c.Ac(32,"Flight: /api/1.0/Flight"),c.Ob(),c.Pb(33,"li",12),c.Ac(34,"Hotel: /api/1.0/Hotel/*"),c.Ob(),c.Pb(35,"li",12),c.Ac(36,"Tour: /api/1.0/Tour/*"),c.Ob(),c.Pb(37,"li",12),c.Ac(38,"Sale: /api/1.0/Sale/*"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.xb(9),c.hc("ngIf",c.cc(10,1,e.Auth).User))},directives:[i.l],pipes:[i.b],styles:[""]}),t})(),children:[]}]}];let v=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(f)],n.i]}),t})();var y=r("b54G"),m=r("RzjR"),S=r("0a6T");let O=(()=>{let t=class{};return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();var g=r("pNS7");let P=(()=>{let t=class{};return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.c,g.b]]}),t})(),w=(()=>{let t=class{};return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),A=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.c,v,y.a,S.a,m.c,u.a,O,s.b,P,w]]}),t})()}}]);