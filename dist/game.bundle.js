(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1496:function(e,t,a){e.exports=a.p+"images/tileset.png"},1497:function(e,t,a){e.exports=a.p+"images/ficha_1.png"},1498:function(e,t,a){e.exports=a.p+"images/ficha_2.png"},1499:function(e,t,a){e.exports=a.p+"images/ficha_3.png"},1500:function(e,t,a){e.exports=a.p+"images/ficha_4.png"},1501:function(e,t,a){e.exports=a.p+"images/flip.png"},1502:function(e,t,a){e.exports=a.p+"images/overlay.png"},1503:function(e,t,a){e.exports=a.p+"images/overlay2.png"},1504:function(e,t,a){e.exports=a.p+"images/fondo_titulo.png"},1505:function(e,t,a){e.exports=a.p+"images/b_jugar.png"},1506:function(e,t,a){e.exports=a.p+"images/over_dau.png"},1507:function(e,t,a){e.exports=a.p+"images/game_over.png"},1508:function(e,t,a){"use strict";a.r(t);var n,i,o,r=a(197),s=a.n(r),l=a(558),c=a(559),g=a(574),f=a(572),h=a(575),u=a(1496),p=a.n(u),d=a(1497),v=a.n(d),m=a(1498),y=a.n(m),x=a(1499),O=a.n(x),_=a(1500),b=a.n(_),S=a(1501),w=a.n(S),A=a(1502),j=a.n(A),k=a(1503),M=a.n(k),T=a(1504),D=a.n(T),E=a(1505),R=a.n(E),U=a(1506),I=a.n(U),F=a(1507),G=a.n(F),L=function(e){function t(){return Object(l.a)(this,t),Object(g.a)(this,Object(f.a)(t).call(this,{key:"BootScene"}))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"preload",value:function(){this.load.image("tile_set",p.a),this.load.image("fitxa_y",v.a),this.load.image("fitxa_b",y.a),this.load.image("fitxa_r",O.a),this.load.image("fitxa_g",b.a),this.load.image("flip",w.a),this.load.image("overlay",j.a),this.load.image("overlay2",M.a),this.load.image("fondo",D.a),this.load.image("boton_jugar",R.a),this.load.image("over_dau",I.a),this.load.image("game_over",G.a)}},{key:"create",value:function(){this.add.image(0,0,"fondo").setOrigin(0);var e=this.add.sprite(480,288,"boton_jugar").setInteractive();e.setScale(.5);var t=this;e.on("pointerdown",function(e){t.scene.start("PlayScene")}),e.on("pointerout",function(e){this.clearTint()}),e.on("pointerover",function(e){this.setTint(16742520)})}}]),t}(r.Scene),P=576,z=960,B=["GROC","BLAU","VERMELL","VERD"],J=[[0,5,-5,1],[-5,0,1,5],[5,1,0,-5],[1,-5,5,0]],C=["TERRA","AIGUA","AIRE","FOC"],V=4,H=[],N=[],W=15,q=9,K=[],Q=[],X=[],Y=[],Z=64,$=0,ee=[],te=!1,ae=[];function ne(e,t){this.x=e,this.y=t}var ie=function(e){function t(){return Object(l.a)(this,t),Object(g.a)(this,Object(f.a)(t).call(this,{key:"PlayScene"}))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"create",value:function(){var e,t;for(console.log("Starting PlayScene ..."),n=this,e=0;e<q;e++){var a=void 0;for(K[e]=[],a=0;a<W;a++)K[e].push(Phaser.Math.Between(0,3)),0!=e&&e!=q-1||(K[e][a]=5)}for(e=0;e<=W;e++){Q[e]=[];var r=void 0;for(r=0;r<W;r++)Q[e].push(!0),1!=r&&r!=q||(Q[e][r]=!1)}for(K[0][0]=4,K[0][W-1]=4,K[q-1][0]=4,K[q-1][W-1]=4,N.push(new ne(0,0)),N.push(new ne(0,W-1)),N.push(new ne(q-1,0)),N.push(new ne(q-1,W-1)),o=this.make.tilemap({data:K,tileWidth:Z,tileHeight:Z}),i=o.addTilesetImage("tile_set"),o.createStaticLayer(0,i),e=0;e<V;e++){switch(e){case 0:oe(Z,Z,"fitxa_g");break;case 1:oe(W*Z,Z,"fitxa_b");break;case 2:oe(Z,q*Z,"fitxa_y");break;case 3:oe(W*Z,q*Z,"fitxa_r")}}le(),this.input.on("pointerdown",function(e){var a,i,o,r,s,l;te?function(e,t,a,n,i){var o=Math.floor(a/Z)+1,r=Math.floor(n/Z)+1,s=Math.floor(e/Z),l=Math.floor(t/Z),c=!1;s+i==o&&l==r&&(c=!0);s-i==o&&l==r&&(c=!0);s==o&&l+i==r&&(c=!0);s==o&&l-i==r&&(c=!0);return c}(H[$].x,H[$].y,e.x,e.y,t)&&(a=e,i=H[$],o=Math.floor(a.x/Z)+1,r=Math.floor(a.y/Z)+1,Q[o][r]&&(Q[o][r]=!1,s=o*Z,l=r*Z,n.add.image(s-Z/2,l-Z/2,"flip").setDepth(0),function(e,t){console.log(t),console.log(e);var a=K[t-1][e-1];console.log(C[a]),ee[$]+=J[$][a],console.log(ee[$])}(o,r),i.x=o*Z,i.y=r*Z,i.setDepth(1),re(),le())):t=ce()},this)}},{key:"update",value:function(){}}]),t}(r.Scene);function oe(e,t,a){var i=n.add.image(e,t,a);i.setScale(.25),i.setOrigin(1),H.push(i),ee.push(0),Y.push(!0)}function re(){for($+=1;$>=V||!Y[$];)($+=1)>=V&&($=0);console.log("JUGADRO ACTUAL "+C[$])}function se(e,t,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=n.add.image(e,t,"overlay");r.setScale(a,i),r.setOrigin(1),X.push(r),o?X.push(n.add.image(e,t,"overlay2").setOrigin(1)):X.push(n.add.image(e-Z*(a-1),t-Z*(i-1),"overlay2").setOrigin(1))}function le(){for(var e=0;e<ae.length;e++)ae[e].destroy();te=!1,ae.push(n.add.image(0,0,"over_dau").setOrigin(0).setDepth(2));var t="Turn del jugador "+C[$];ae.push(n.add.text(z/2,100,t,{fontFamily:"Arial",fontSize:64,color:"#ffffff"}).setOrigin(.5).setDepth(3))}function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Phaser.Math.Between(1,6);e&&(t=e);for(var a=0;a<ae.length;a++)ae[a].destroy();var i="Et pots moure "+String(t)+" caselles";if(ae.push(n.add.text(z/2,Z/2,i,{fontFamily:"Arial",fontSize:20,color:"#000000"}).setOrigin(.5)),te=!0,7!=e)return function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=!1,r=Math.floor(e/Z),s=Math.floor(t/Z),l=0;l<X.length;l++)X[l].destroy();var c=n.add.image(e,t,"overlay");c.setOrigin(1),c.setScale(1),X.push(c),s-a>1&&Q[r][s-a]&&(se(e,t-Z,1,a,!1),o=!0),s+a<q&&Q[r][s+a]&&(se(e,t+a*Z,1,a),o=!0),r-a>0&&Q[r-a][s]&&(se(e-Z,t,a,1,!1),o=!0),r+a<=W&&Q[r+a][s]&&(se(e+Z*a,t,a),o=!0),o||ce(i+1)}(H[$].x,H[$].y,t,e),t;!function(){ae.push(n.add.text(z/2,P/2,"TAS MUERTO Jugador "+B[$],{fontFamily:"Arial",fontSize:50,color:"#000000"}).setOrigin(.5)),Y[$]=!1,te=!1;var e,t=0;console.log("SIGUEN VISU");for(var a=0;a<Y.length;a++)Y[a]&&(console.log(B[a]),e=a,t+=1);t<2?(i=e,o=[],(r=n.add.image(0,0,"game_over").setOrigin(0)).setDepth(2),o.push(r),o.push(n.add.text(z/2,243,"Ha guanyat "+B[i],{fontFamily:"Arial",fontSize:20,color:"#000000"}).setOrigin(.5)),o[1].setDepth(3)):re();var i,o,r}()}function ge(){new s.a.Game({type:s.a.AUTO,width:960,height:576,pixelArt:!0,parent:"game-container",scene:[L,ie]})}a.d(t,"launch",function(){return ge});t.default=ge}}]);
//# sourceMappingURL=game.bundle.js.map