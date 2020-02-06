System.register("chunks:///Base/BaseModel.js",["../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var t,a,s,n,i,r;return{setters:[function(e){t=e.inherits,a=e.createClass,s=e.classCallCheck,n=e.possibleConstructorReturn,i=e.getPrototypeOf},function(e){r=e.cclegacy}],execute:function(){r._RF.push({},"edd1cmjR5FEn7cLbUOgNTIX","BaseModel",void 0);e("default",function(e){function r(){var e;return s(this,r),(e=n(this,i(r).call(this))).suspendTimestamp=-1,e.disableTimestamp=-1,e}return t(r,e),a(r,[{key:"getSavedKeys",value:function(){return["disableTimestamp","suspendTimestamp"]}},{key:"loadData",value:function(e){if(!e)return!1;this.savedKeyName=e;var t=cc.sys.localStorage.getItem(this.savedKeyName);return this.parse2Data(t)}},{key:"saveData",value:function(){try{var e=this.getSavingData();this.savedKeyName&&e&&cc.sys.localStorage.setItem(this.savedKeyName,e)}catch(e){console.error("saveData error: ",e)}}},{key:"parse2Data",value:function(e){if(e&&"string"==typeof e)try{var t=this.getSavedKeys();if(!t||!t.length)return!1;for(var a=JSON.parse(e),s="",n=0;n<t.length;n++)null!=a[s=t[n]]&&(this[s]=a[s]);return!0}catch(e){return console.log("loadData error = ",e),!1}return!1}},{key:"getSavingData",value:function(){var e=this.getSavedKeys();if(!e||!e.length)return null;for(var t={},a="",s=0;s<e.length;s++)"function"!=typeof this[a=e[s]]&&null!=this[a]&&(t[a]=this[a]);return t&&Object.keys(t).length>0?JSON.stringify(t):null}},{key:"getSavedKeyName",value:function(){return this.savedKeyName}},{key:"suspend",value:function(){this.suspendTimestamp=(new Date).getTime(),this.saveData()}},{key:"resume",value:function(){if(this.suspendTimestamp>0){(new Date).getTime(),this.suspendTimestamp;this.suspendTimestamp=-1}}},{key:"enable",value:function(){if(this.disableTimestamp>0){var e=(new Date).getTime()-this.disableTimestamp;return this.disableTimestamp=-1,this.calculateDissable(e)}return this.resume(),null}},{key:"disable",value:function(){this.disableTimestamp=(new Date).getTime()}},{key:"calculateDissable",value:function(e){return null}},{key:"resetData",value:function(){}},{key:"isUndefind",value:function(e){return void 0===e}}]),r}(cc.EventTarget));r._RF.pop()}}}));

System.register("chunks:///GameModel.js",["./_virtual/_rollupPluginBabelHelpers.js","cc","./Base/BaseModel.js"],(function(e){"use strict";var t,l,n,s,r,a,i,u,c;return{setters:[function(e){t=e.inherits,l=e.createClass,n=e.classCallCheck,s=e.possibleConstructorReturn,r=e.getPrototypeOf,a=e.get},function(e){i=e.cclegacy,u=e._decorator},function(e){c=e.default}],execute:function(){var o,h,f;i._RF.push({},"61e21TAWnpBR7NY9SmGo3B8","GameModel",void 0);var v=u.ccclass;u.property,e("default",v((f=h=function(e){function i(){var e;return n(this,i),(e=s(this,r(i).call(this))).ballArr={},e.setSelectAim=null,e.loadData("GameModel"),e}return t(i,e),l(i,null,[{key:"getInstance",value:function(){return this.inst||(this.inst=new i),this.inst}}]),l(i,[{key:"getSavedKeys",value:function(){return a(r(i.prototype),"getSavedKeys",this).call(this).concat(["ballArr"])}},{key:"saveBallArr",value:function(e,t){this.ballArr[e+""]=t,this.saveData()}},{key:"getBallArr",value:function(){return this.ballArr}},{key:"selectAim",value:function(e){this.setSelectAim=e}},{key:"getSelectAim",value:function(){return this.setSelectAim}}]),i}(c),h.inst=null,o=f))||o);i._RF.pop()}}}));

System.register("chunks:///Initial.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,i,o,a,l,b,u,s,c,f,p,h,x,y,P,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inherits,n=e.classCallCheck,i=e.possibleConstructorReturn,o=e.getPrototypeOf,a=e.initializerDefineProperty,l=e.assertThisInitialized,b=e.createClass},function(e){u=e.cclegacy,s=e._decorator,c=e.Vec3,f=e.Quat,p=e.Prefab,h=e.CameraComponent,x=e.instantiate,y=e.LabelComponent,P=e.convertUtils,m=e.Component}],execute:function(){var d,g,v,z,w,C,I,A,_,k,D,J,U,j,F,N,R,W,B,H,L,T;u._RF.push({},"78251UFtupB8o2IN4/x46EH","Initial",void 0);var E=s.ccclass,O=s.property,Q=new c;new f,e("Instantiate",(d=E("Instantiate"),g=O({type:p}),v=O({type:p}),z=O({type:p}),w=O({type:p}),C=O({type:p}),I=O({type:p}),A=O({type:p}),_=O({type:cc.JsonAsset}),k=O({type:h}),d((U=t((J=function(e){function t(){var e,r;n(this,t);for(var b=arguments.length,u=new Array(b),s=0;s<b;s++)u[s]=arguments[s];return r=i(this,(e=o(t)).call.apply(e,[this].concat(u))),a(r,"boxPrefab1",U,l(r)),a(r,"boxPrefab2",j,l(r)),a(r,"boxPrefab3",F,l(r)),a(r,"boxPrefab4",N,l(r)),a(r,"boxPrefab5",R,l(r)),a(r,"boxPrefab6",W,l(r)),a(r,"boxPrefab7",B,l(r)),a(r,"levelJson",H,l(r)),a(r,"mainCamera",L,l(r)),a(r,"boxAmount",T,l(r)),r}return r(t,e),b(t,[{key:"start",value:function(){for(var e=[this.boxPrefab1,this.boxPrefab2,this.boxPrefab3,this.boxPrefab4,this.boxPrefab5,this.boxPrefab6,this.boxPrefab7],t=this.levelJson.json.data[7],r=1;r<t.length;r++){t[r][2]>7&&(t[r][2]=7);var n=x(e[t[r][2]-1]);n.setParent(this.node),n.active=!0,Q.x=6-1.2*t[r][0],Q.y=.3,Q.z=1.2*t[r][1]-6,n.setWorldPosition(Q),n.children[0].getComponent(y).string=t[r][3].num||"50"}}},{key:"lateUpdate",value:function(e){if(this.boxAmount+=e,!(this.boxAmount>2))for(var t=0;t<this.node.children.length;t++){this.node.children[t].active=!0;var r=new c;this.node.children[t].getWorldPosition(r),r.z+=.2+.02*r.z,r.x+=.02*r.x;var n=this.node.children[t].children[0];P.WorldNode3DToLocalNodeUI(this.mainCamera,r,n,r),n.setPosition(r)}}}]),t}(m)).prototype,"boxPrefab1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(J.prototype,"boxPrefab2",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(J.prototype,"boxPrefab3",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=t(J.prototype,"boxPrefab4",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(J.prototype,"boxPrefab5",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=t(J.prototype,"boxPrefab6",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(J.prototype,"boxPrefab7",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(J.prototype,"levelJson",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(J.prototype,"mainCamera",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(J.prototype,"boxAmount",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),D=J))||D));u._RF.pop()}}}));

System.register("chunks:///PhysicsEnvCheck.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var n,t,s,i,o,C,a,c,h,r,N;return{setters:[function(e){n=e.inherits,t=e.classCallCheck,s=e.possibleConstructorReturn,i=e.getPrototypeOf,o=e.createClass},function(e){C=e.cclegacy,a=e._decorator,c=e.Enum,h=e.LabelComponent,r=e.SpriteComponent,N=e.Component}],execute:function(){var l;C._RF.push({},"52af2tIYtdPnJprkYKzdQnD","PhysicsEnvCheck",void 0);var m,d=a.ccclass,p=(a.property,a.menu);!function(e){e[e.BUILTIN=1]="BUILTIN",e[e.CANNON=2]="CANNON",e[e.AMMO=4]="AMMO",e[e.CANNON_AMMO=e.CANNON+e.AMMO]="CANNON_AMMO",e[e.ALL=-1]="ALL"}(m||(m={})),c(m);e("PhysicsEnvCheck",d("PhysicsEnvCheck")(l=p("physics/PhysicsEnvCheck")(l=function(e){function C(){var e,n;t(this,C);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=s(this,(e=i(C)).call.apply(e,[this].concat(a)))).physics=m.CANNON_AMMO,n}return n(C,e),o(C,[{key:"onLoad",value:function(){if(CC_PHYSICS_BUILTIN)this.node.getChildByName("desc").getComponent(h).string="当前物理：builtin";else if(CC_PHYSICS_CANNON){this.node.getChildByName("desc").getComponent(h).string="当前物理：cannon.js"}else if(CC_PHYSICS_AMMO){this.node.getChildByName("desc").getComponent(h).string="当前物理：ammo.js"}else{this.node.getChildByName("desc").getComponent(h).string="当前物理：none"}var e=this.node.name;switch("cannon-ammo"==e?this.physics=m.CANNON_AMMO:"builtin"==e?this.physics=m.BUILTIN:"cannon"==e?this.physics=m.CANNON:"ammo"==e?this.physics=m.AMMO:"builtin-cannon-ammo"==e&&(this.physics=m.ALL),this.physics){case m.ALL:break;case m.CANNON_AMMO:if(CC_PHYSICS_CANNON||CC_PHYSICS_AMMO)break;var n=this.node.getChildByName("lb").getComponent(h);n.enabled=!0,n.string="测试此场景需要将物理模块设置为 cannon.js 或 ammo.js",this.getComponentInChildren(r).enabled=!0;break;case m.CANNON:if(!CC_PHYSICS_CANNON){var t=this.node.getChildByName("lb").getComponent(h);t.enabled=!0,t.string="测试此场景需要将物理模块设置为 cannon.js",this.getComponentInChildren(r).enabled=!0}break;case m.AMMO:if(!CC_PHYSICS_AMMO){var s=this.node.getChildByName("lb").getComponent(h);s.enabled=!0,s.string="测试此场景需要将物理模块设置为 ammo.js",this.getComponentInChildren(r).enabled=!0}break;case m.BUILTIN:if(!CC_PHYSICS_BUILTIN){var i=this.node.getChildByName("lb").getComponent(h);i.enabled=!0,i.string="测试此场景需要将物理模块设置为 builtin",this.getComponentInChildren(r).enabled=!0}}}}]),C}(N))||l)||l);C._RF.pop()}}}));

System.register("chunks:///aim.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var t,i,o,s,n,y,h,a,r,c,u,l,k,_,f,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inherits,o=e.classCallCheck,s=e.possibleConstructorReturn,n=e.getPrototypeOf,y=e.initializerDefineProperty,h=e.assertThisInitialized,a=e.createClass},function(e){r=e.cclegacy,c=e._decorator,u=e.math,l=e.RigidBodyComponent,k=e.systemEvent,_=e.SystemEventType,f=e.macro,d=e.Component}],execute:function(){var p,E,C,K,v;r._RF.push({},"851aasVUFBGKpCJP5ydJRVx","aim",void 0);var D,S=c.ccclass,T=c.property,m=new u.Vec3,Y=new u.Vec2;!function(e){e[e.NONE=0]="NONE",e[e.W=1]="W",e[e.A=2]="A",e[e.S=4]="S",e[e.D=8]="D",e[e.SHIFT=16]="SHIFT"}(D||(D={}));e("aim",(p=S("aim"),E=T({slide:!0,range:[1,3,.01]}),p((v=t((K=function(e){function t(){var e,i;o(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return i=s(this,(e=n(t)).call.apply(e,[this].concat(r))),y(i,"shiftScale",v,h(i)),i._rigidBody=null,i._key=D.NONE,i}return i(t,e),a(t,[{key:"start",value:function(){this._rigidBody=this.getComponent(l)}},{key:"update",value:function(e){this._key&D.W&&(m.z=1),this._key&D.S&&(m.z=-1),this._key&D.A&&(m.x=1),this._key&D.D&&(m.x=-1),this._key&D.SHIFT&&m.multiplyScalar(this.shiftScale),0==m.z&&0==m.x||(this._rigidBody.applyImpulse(m),m.set(0,0,0))}},{key:"onEnable",value:function(){k.on(_.KEY_DOWN,this.onKeyDown,this),k.on(_.KEY_UP,this.onKeyUp,this),k.on(_.TOUCH_MOVE,this.onTouchMove,this),k.on(_.TOUCH_END,this.onTouchEnd,this)}},{key:"onDisable",value:function(){k.off(_.KEY_DOWN,this.onKeyDown,this),k.off(_.KEY_UP,this.onKeyUp,this),k.off(_.TOUCH_MOVE,this.onTouchMove,this),k.off(_.TOUCH_END,this.onTouchEnd,this)}},{key:"onKeyDown",value:function(e){e.keyCode==f.KEY.w?this._key|=D.W:e.keyCode===f.KEY.s?this._key|=D.S:e.keyCode===f.KEY.a?this._key|=D.A:e.keyCode===f.KEY.d?this._key|=D.D:e.keyCode===f.KEY.shift&&(this._key|=D.SHIFT)}},{key:"onKeyUp",value:function(e){e.keyCode==f.KEY.w?this._key&=~D.W:e.keyCode===f.KEY.s?this._key&=~D.S:e.keyCode===f.KEY.a?this._key&=~D.A:e.keyCode===f.KEY.d?this._key&=~D.D:e.keyCode===f.KEY.shift&&(this._key&=~D.SHIFT)}},{key:"onTouchMove",value:function(e,t){e.getDelta(Y),Y.x>2?(this._key|=D.D,this._key&=~D.A):Y.x<-2&&(this._key|=D.A,this._key&=~D.D),Y.y>2?(this._key|=D.W,this._key&=~D.S):Y.y<-2&&(this._key|=D.S,this._key&=~D.W)}},{key:"onTouchEnd",value:function(e,t){this._key=D.NONE}}]),t}(d)).prototype,"shiftScale",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),C=K))||C));r._RF.pop()}}}));

System.register("chunks:///ball.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var t,i,o,n,s,y,h,a,l,r,c,u,k,_,f,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inherits,o=e.classCallCheck,n=e.possibleConstructorReturn,s=e.getPrototypeOf,y=e.initializerDefineProperty,h=e.assertThisInitialized,a=e.createClass},function(e){l=e.cclegacy,r=e._decorator,c=e.math,u=e.RigidBodyComponent,k=e.systemEvent,_=e.SystemEventType,f=e.macro,d=e.Component}],execute:function(){var p,E,C,K,v;l._RF.push({},"1a544BKHyBGxrV5wUaiuwZo","ball",void 0);var D,S=r.ccclass,T=r.property,Y=new c.Vec3,g=new c.Vec2;!function(e){e[e.NONE=0]="NONE",e[e.W=1]="W",e[e.A=2]="A",e[e.S=4]="S",e[e.D=8]="D",e[e.SHIFT=16]="SHIFT"}(D||(D={}));e("ball",(p=S("ball"),E=T({slide:!0,range:[1,3,.01]}),p((v=t((K=function(e){function t(){var e,i;o(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return i=n(this,(e=s(t)).call.apply(e,[this].concat(l))),y(i,"shiftScale",v,h(i)),i._rigidBody=null,i._key=D.NONE,i}return i(t,e),a(t,[{key:"start",value:function(){this._rigidBody=this.getComponent(u)}},{key:"update",value:function(e){this._key&D.W&&(Y.z=1),this._key&D.S&&(Y.z=-1),this._key&D.A&&(Y.x=1),this._key&D.D&&(Y.x=-1),this._key&D.SHIFT&&Y.multiplyScalar(this.shiftScale),0==Y.z&&0==Y.x||(this._rigidBody.applyImpulse(Y),Y.set(0,0,0))}},{key:"onEnable",value:function(){k.on(_.KEY_DOWN,this.onKeyDown,this),k.on(_.KEY_UP,this.onKeyUp,this),k.on(_.TOUCH_MOVE,this.onTouchMove,this),k.on(_.TOUCH_END,this.onTouchEnd,this)}},{key:"onDisable",value:function(){k.off(_.KEY_DOWN,this.onKeyDown,this),k.off(_.KEY_UP,this.onKeyUp,this),k.off(_.TOUCH_MOVE,this.onTouchMove,this),k.off(_.TOUCH_END,this.onTouchEnd,this)}},{key:"onKeyDown",value:function(e){e.keyCode==f.KEY.w?this._key|=D.W:e.keyCode===f.KEY.s?this._key|=D.S:e.keyCode===f.KEY.a?this._key|=D.A:e.keyCode===f.KEY.d?this._key|=D.D:e.keyCode===f.KEY.shift&&(this._key|=D.SHIFT)}},{key:"onKeyUp",value:function(e){e.keyCode==f.KEY.w?this._key&=~D.W:e.keyCode===f.KEY.s?this._key&=~D.S:e.keyCode===f.KEY.a?this._key&=~D.A:e.keyCode===f.KEY.d?this._key&=~D.D:e.keyCode===f.KEY.shift&&(this._key&=~D.SHIFT)}},{key:"onTouchMove",value:function(e,t){e.getDelta(g),g.x>2?(this._key|=D.D,this._key&=~D.A):g.x<-2&&(this._key|=D.A,this._key&=~D.D),g.y>2?(this._key|=D.W,this._key&=~D.S):g.y<-2&&(this._key|=D.S,this._key&=~D.W)}},{key:"onTouchEnd",value:function(e,t){this._key=D.NONE}}]),t}(d)).prototype,"shiftScale",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),C=K))||C));l._RF.pop()}}}));

System.register("chunks:///coordinate.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,n,o,a,l,c,u,s,p,d,f,y,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inherits,i=e.classCallCheck,n=e.possibleConstructorReturn,o=e.getPrototypeOf,a=e.initializerDefineProperty,l=e.assertThisInitialized,c=e.createClass},function(e){u=e.cclegacy,s=e._decorator,p=e.Vec3,d=e.Node,f=e.CameraComponent,y=e.convertUtils,m=e.Component}],execute:function(){var h,b,C,N,g,v,D,U,I;u._RF.push({},"02ed7cn+2NAF7MpI5E0DT6/","coordinate",void 0);var w=s.ccclass,z=s.property,P=(s.menu,new p);e("CoordinateUi3D",(h=w("coordinate-ui-3d"),b=z({type:d}),C=z({type:d}),N=z({type:f}),h((D=t((v=function(e){function t(){var e,r;i(this,t);for(var c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];return r=n(this,(e=o(t)).call.apply(e,[this].concat(u))),a(r,"D3Node",D,l(r)),a(r,"UINode",U,l(r)),a(r,"mainCamera",I,l(r)),r}return r(t,e),c(t,[{key:"lateUpdate",value:function(e){this.D3Node.getWorldPosition(P),P.y+=1.5,y.WorldNode3DToLocalNodeUI(this.mainCamera,P,this.UINode,P),this.UINode.setPosition(P)}}]),t}(m)).prototype,"D3Node",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(v.prototype,"UINode",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(v.prototype,"mainCamera",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=v))||g));u._RF.pop()}}}));

System.register("chunks:///Constant/GameConst.js",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"16bd0bveh1CjqY+RtFFdVgK","GameConst",void 0);t("GameConst",{idx:1,oriRow:21,oriCol:21,setCheckW:15});e._RF.pop()}}}));

System.register("chunks:///Constant/events.js",["cc"],(function(E){"use strict";var _;return{setters:[function(E){_=E.cclegacy}],execute:function(){_._RF.push({},"654c45h5nVBiY98j+Ka8Zru","events",void 0);E("events",{ProcessEvent:{PROCESS_START:"process_start",PROCESS_END:"process_end"},ConfigEvent:{REGET_FILE_LIST:"REGET_FILE_LIST",REGET_PROGRESS:"REGET_PROGRESS",REGET_DONE:"REGET_DONE"},BaseModelEvent:{OFFLINE_REWARD:"OFFLINE_REWARD"},GameModelEvent:{DIAMOUND_UPDATE:"DIAMOUND_UPDATE",NO_DIAMOUND:"NO_DIAMOUND",GEM_UPDATE:"GEM_UPDATE",NO_GEM:"NO_GEM",DIAMOUND_ADD:"DIAMOUND_ADD",GEM_ADD:"GEM_ADD",OPEN_AIM:"OPEN_AIM",CLOSE_AIM:"CLOSE_AIM"},AudioManagerEvent:{CHANGE_SOUND:"CHANGE_SOUND",CHANGE_MUSIC:"CHANGE_MUSIC"},SdkManagerEvents:{REWARD_VIDEO:"REWARD_VIDEO",REWARD_VIDEO_COMPLETE:"REWARD_VIDEO_COMPLETE"},HomeViewEvent:{QUESTION_SELECT:"QUESTION_SELECT",SIGN_EVENT:"SIGN_EVENT"},MapModelEvent:{INIT_MAP:"INIT_MAP",RUNING:"RUNING",PROP:"PROP",ADDPROP:"ADDPROP",LOSE_A_life:"LOSE_A_life",GAME_OVER:"GAME_OVER",PAUSE:"PAUSE",RESUME:"RESUME",INIT_BOARD:"INIT_BOARD",CHANGE_STAR:"CHANGE_STAR",change_ball:"change_ball"},ChangeBallEvent:{CHANGE_BALL_SHOW:"CHANGE_BALL_SHOW"}});_._RF.pop()}}}));

System.register("chunks:///MotionCtr.js",["./_virtual/_rollupPluginBabelHelpers.js","cc","./GameModel.js"],(function(e){"use strict";var o,t,n,r,c,i,l,s,a,d,h,p,u,C;return{setters:[function(e){o=e.inherits,t=e.classCallCheck,n=e.possibleConstructorReturn,r=e.getPrototypeOf,c=e.createClass},function(e){i=e.cclegacy,l=e._decorator,s=e.math,a=e.macro,d=e.LabelComponent,h=e.convertUtils,p=e.CameraComponent,u=e.Component},function(e){C=e.default}],execute:function(){var f;i._RF.push({},"ecb52VZ1jhAVZdpiMM067Pc","MotionCtr",void 0);var m=l.ccclass;l.property,new s.Vec2,new s.Vec2,new s.Vec3,"W".charCodeAt(0),"S".charCodeAt(0),"A".charCodeAt(0),"D".charCodeAt(0),"Q".charCodeAt(0),"E".charCodeAt(0),a.KEY.shift,e("MotionCtr",m("MotionCtr")(f=function(e){function i(){var e,o;t(this,i);for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];return(o=n(this,(e=r(i)).call.apply(e,[this].concat(l)))).oldposition=new s.Vec3,o}return o(i,e),c(i,[{key:"onBtnDelect",value:function(){C.getInstance().selectAim(this.node),this.node.children[0].getComponent(d).color=cc.color(0,0,0);for(var e=0;e<this.node.parent.children.length;e++)this.node.parent.children[e].children[0].getComponent(d).color=cc.color(0,0,0);this.node.children[0].getComponent(d).color=cc.color(255,0,0)}},{key:"onEnable",value:function(){this.node.setWorldPosition(0,.3,-4)}},{key:"lateUpdate",value:function(e){var o=this.node.children[0];h.WorldNode3DToLocalNodeUI(this.node.parent.parent.children[1].getComponent(p),this.node.getWorldPosition(),o,this.oldposition),o.setPosition(this.oldposition)}}]),i}(u))||f);i._RF.pop()}}}));

System.register("chunks:///collider-disabled.js",["./_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,o,i,l,s,c,a,d;return{setters:[function(e){t=e.inherits,r=e.createClass,n=e.classCallCheck,o=e.possibleConstructorReturn,i=e.getPrototypeOf},function(e){l=e.cclegacy,s=e._decorator,c=e.ColliderComponent,a=e.LabelComponent,d=e.Component}],execute:function(){var u;l._RF.push({},"7eebes3AdlAC7JWThiihIXQ","collider-disabled",void 0);var p=s.ccclass;s.property,e("colliderdisabled",p("colliderdisabled")(u=function(e){function l(){return n(this,l),o(this,i(l).apply(this,arguments))}return t(l,e),r(l,[{key:"start",value:function(){this.getComponent(c).on("onTriggerStay",this.onTrigger,this)}},{key:"onTrigger",value:function(e){if("Bonus"==e.otherCollider.node.name){var t=e.otherCollider.node,r=parseInt(t.children[0].getComponent(a).string);if(r<=0)return void t.destroy();t.children[0].getComponent(a).string=r-1+""}}}]),l}(d))||u);l._RF.pop()}}}));

System.register("chunks:///ball-control.js",["./_virtual/_rollupPluginBabelHelpers.js","cc","./GameModel.js"],(function(t){"use strict";var e,n,i,o,a,r,l,s,c,u,h,f,p,y,m,d,b,g,v,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inherits,i=t.classCallCheck,o=t.possibleConstructorReturn,a=t.getPrototypeOf,r=t.initializerDefineProperty,l=t.assertThisInitialized,s=t.createClass},function(t){c=t.cclegacy,u=t._decorator,h=t.math,f=t.Prefab,p=t.CameraComponent,y=t.LabelComponent,m=t.systemEvent,d=t.SystemEventType,b=t.macro,g=t.tween,v=t.Component},function(t){C=t.default}],execute:function(){var P,S,T,w,k,E,A,D,z,_,O,B,I,N,K,U,F,x,H,W,M;c._RF.push({},"5c1ab3nl3JP65UZCjDnwRVw","ball-control",void 0);var V,R=u.ccclass,Y=u.property;new h.Vec3,new h.Vec2;!function(t){t[t.NONE=0]="NONE",t[t.W=1]="W",t[t.A=2]="A",t[t.S=4]="S",t[t.D=8]="D",t[t.SHIFT=16]="SHIFT"}(V||(V={}));t("ballcontrol",(P=R("ballcontrol"),S=Y({type:f}),T=Y({type:f}),w=Y({type:cc.Node}),k=Y({type:cc.EditBoxComponent}),E=Y({type:cc.Node}),A=Y({type:cc.Node}),D=Y({type:p}),z=Y({type:cc.Integerber,displayName:"球的速度"}),_=Y({type:cc.Integer,displayName:"球的频率"}),P((I=e((B=function(t){function e(){var t,n;i(this,e);for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=o(this,(t=a(e)).call.apply(t,[this].concat(c))),r(n,"ballPrefab",I,l(n)),r(n,"aimPrefab",N,l(n)),r(n,"aimContent",K,l(n)),r(n,"saveid",U,l(n)),r(n,"layoutList",F,l(n)),r(n,"aimFirst",x,l(n)),r(n,"mainCamera",H,l(n)),n.addposition=new cc.Vec3(0,0,0),n.touchpos=new cc.Vec3(0,0,0),r(n,"ballSpeed",W,l(n)),r(n,"ballaimSpeed",M,l(n)),n}return n(e,t),s(e,[{key:"createAim",value:function(t){var e=cc.instantiate(this.aimPrefab);e.setParent(this.aimContent),e.setPosition(t),e.children[0].getComponent(y).string=""+(this.aimContent.children.length-1)}},{key:"createball",value:function(){var t=cc.instantiate(this.ballPrefab);return t.setParent(this.node),t.setWorldPosition(0,.3,-4),t}},{key:"onEnable",value:function(){m.on(d.KEY_DOWN,this.onKeyDown,this),m.on(d.KEY_UP,this.onKeyUp,this),m.on(d.TOUCH_START,this.onTouchStart,this),m.on(d.TOUCH_MOVE,this.onTouchMove,this),m.on(d.TOUCH_END,this.onTouchEnd,this)}},{key:"onTouchEnd",value:function(t){}},{key:"onDisable",value:function(){m.off(d.KEY_DOWN,this.onKeyDown,this),m.off(d.KEY_UP,this.onKeyUp,this),m.off(d.TOUCH_START,this.onTouchStart,this),m.off(d.TOUCH_MOVE,this.onTouchMove,this),m.off(d.TOUCH_END,this.onTouchEnd,this)}},{key:"onTouchStart",value:function(t){}},{key:"onTouchMove",value:function(t){var e=C.getInstance().getSelectAim();e&&e.setWorldPosition(e.getWorldPosition().x-.01*t.getDelta().x,.1,e.getWorldPosition().z+.01*t.getDelta().y)}},{key:"onKeyDown",value:function(t){if(t.keyCode==b.KEY.w)this.createAim(this.aimFirst.getPosition());else if(t.keyCode===b.KEY.a){if(!this.saveid.string)return;var e=cc.instantiate(this.aimPrefab);e.setParent(this.aimContent),e.setPosition(this.aimFirst.getPosition()),e.children[0].getComponent(y).string=this.saveid.string,e.setSiblingIndex(parseInt(this.saveid.string))}}},{key:"createAddSpAim",value:function(){}},{key:"onKeyUp",value:function(t){}},{key:"saveBallArrPos",value:function(t){if((this.saveid.string||t)&&this.aimContent.children.length>0){for(var e=[],n=1;n<this.aimContent.children.length;n++)e.push(this.aimContent.children[n].getPosition());C.getInstance().saveBallArr(this.saveid.string,e)}}},{key:"runBallArrPos",value:function(){var t=this;this.layoutList.active=!1;for(var e=[],n=1;n<this.aimContent.children.length;n++)e.push(this.aimContent.children[n].getPosition()),this.aimContent.children[n].destroy();this.aimContent.active=!1,this.schedule((function(){var n=t.createball();t.runBallCallFun(0,e,n)}),this.ballaimSpeed,50)}},{key:"runBallCallFun",value:function(t,e,n){var i=this;if(t<e.length){var o=Math.sqrt((n.getPosition().x-e[t].x)*(n.getPosition().x-e[t].x)+(n.getPosition().z-e[t].z)*(n.getPosition().z-e[t].z))/this.ballSpeed,a=g().to(o,{position:e[t]});g(n).then(a).call((function(){t++,i.runBallCallFun(t,e,n)})).start()}}},{key:"onShowBallPos",value:function(t,e){var n=this;this.onBtnClean(),this.scheduleOnce((function(){var t=C.getInstance().getBallArr()[e];if(t&&t.length>0)for(var i=0;i<t.length;i++)n.createAim(t[i])}),0)}},{key:"onBtnClean",value:function(){this.aimContent.active=!0,this.node.destroyAllChildren();for(var t=1;t<this.aimContent.children.length;t++)this.aimContent.children[t].destroy();this.layoutList.active=!0}},{key:"onBtnDelect",value:function(){var t=C.getInstance().getSelectAim();t&&0!=t.getSiblingIndex()&&(t.destroy(),C.getInstance().selectAim(null))}}]),e}(v)).prototype,"ballPrefab",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(B.prototype,"aimPrefab",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=e(B.prototype,"aimContent",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=e(B.prototype,"saveid",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(B.prototype,"layoutList",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(B.prototype,"aimFirst",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(B.prototype,"mainCamera",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(B.prototype,"ballSpeed",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),M=e(B.prototype,"ballaimSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),O=B))||O));c._RF.pop()}}}));

System.register("chunks:///_virtual/_rollupPluginBabelHelpers.js",[],(function(e){"use strict";return{execute:function(){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(t){return(r=e("getPrototypeOf",Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)}))(t)}function n(t,r){return(n=e("setPrototypeOf",Object.setPrototypeOf||function(e,t){return e.__proto__=t,e}))(t,r)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}function u(t,r,n){return(u="undefined"!=typeof Reflect&&Reflect.get?e("get",Reflect.get):e("get",(function(e,t,r){var n=o(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})))(t,r,n||t)}e({applyDecoratedDescriptor:function(e,t,r,n,i){var o={};Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null);return o},assertThisInitialized:i,classCallCheck:function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass:function(e,r,n){r&&t(e.prototype,r);n&&t(e,n);return e},get:u,getPrototypeOf:r,inherits:function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},initializerDefineProperty:function(e,t,r,n){if(!r)return;Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})},possibleConstructorReturn:function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;return i(e)},setPrototypeOf:n,superPropBase:o})}}}));

(function () {
    var aliasChunk = function(chunkId, moduleId) {
        System.register(moduleId, [chunkId], function (_export, _context) {
            var _m;
            return {
                setters: [function(m) {
                    _m = m;
                }],
                execute: function () {
                    _export(_m);
                }
            };
        });
    };
	aliasChunk('chunks:///Base/BaseModel.js', 'project:///assets/TypeScript/Base/BaseModel.js');
	aliasChunk('chunks:///GameModel.js', 'project:///assets/TypeScript/GameModel.js');
	aliasChunk('chunks:///Initial.js', 'project:///assets/TypeScript/Initial.js');
	aliasChunk('chunks:///PhysicsEnvCheck.js', 'project:///assets/TypeScript/PhysicsEnvCheck.js');
	aliasChunk('chunks:///aim.js', 'project:///assets/TypeScript/aim.js');
	aliasChunk('chunks:///ball.js', 'project:///assets/TypeScript/ball.js');
	aliasChunk('chunks:///coordinate.js', 'project:///assets/TypeScript/coordinate.js');
	aliasChunk('chunks:///Constant/GameConst.js', 'project:///assets/TypeScript/Constant/GameConst.js');
	aliasChunk('chunks:///Constant/events.js', 'project:///assets/TypeScript/Constant/events.js');
	aliasChunk('chunks:///MotionCtr.js', 'project:///assets/TypeScript/MotionCtr.js');
	aliasChunk('chunks:///collider-disabled.js', 'project:///assets/TypeScript/collider-disabled.js');
	aliasChunk('chunks:///ball-control.js', 'project:///assets/TypeScript/ball-control.js');
})();