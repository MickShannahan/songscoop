(function(t){function e(e){for(var o,n,c=e[0],r=e[1],l=e[2],u=0,h=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,c=1;c<s.length;c++){var r=s[c];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},a={app:0},i=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0a4e":function(t,e,s){},1:function(t,e){},"369b":function(t,e,s){"use strict";var o=s("a698"),a=s.n(o);a.a},4565:function(t,e,s){"use strict";var o=s("c02c"),a=s.n(o);a.a},4600:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=s("335d");window.onSpotifyWebPlaybackSDKReady=()=>{};var c={name:"App",mounted(){window.onSpotifyWebPlaybackSDKReady=()=>{}},async beforeCreate(){try{this.$store.dispatch("initializeSocket")}catch(t){console.log("the problem is in app"),this.$router.push({name:"home"})}},components:{}},r=c,l=(s("5c0b"),s("2877")),d=Object(l["a"])(r,a,i,!1,null,null,null),u=d.exports,h=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),s("div",{staticClass:"row vanilla min-height align-items-center"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row px-5 py-3"},[s("button",{staticClass:"btn btn-block btn-outline-danger p-3 rounded-pill",on:{click:function(e){t.hostTrigger()}}},[s("h2",[t._v("Host a Session")])])]),t._v(" "),s("div",{staticClass:"row px-5 py-3"},[s("button",{staticClass:"btn btn-block btn-outline-danger p-3 rounded-pill",on:{click:function(e){t.movePage("SessionJoin")}}},[s("h2",[t._v("Join a Session")])])])])]),t._v(" "),s("div",{staticClass:"row strawberry min-height2"})])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row chocolate min-height2 align-items-center justify-content-center"},[s("div",{},[s("div",{staticClass:"justify-content-center mt-2"},[s("h1",{staticClass:"font-fancy"},[t._v("Song Sundae")])]),t._v(" "),s("div",{staticClass:"justify-content-center mt-4 mx-5"},[s("p",[t._v("You don't need to steal your friend's phone to put on decent music.")])])])])}],v={name:"Home",data(){return{search:{}}},computed:{trackResults(){return this.$store.state.trackSearchResults},profileExists(){return!!this.$store.state.profile&&this.$store.state.profile.email},url(){return location.origin.includes("localhost")?"//localhost:3000/login":"/login"}},components:{},mounted(){this.$store.dispatch("getSpotifyVisitorAuth")},methods:{async hostTrigger(){location.replace(this.url)},selectSong(t){this.$store.dispatch("addToQueue",{album:t.album.name,songTitle:t.name,artist:t.artists[0].name,explicit:t.explicit,albumCover:t.album.images[0],trackLength:t.duration_ms,popularity:t.popularity,uri:t.uri,sessionCode:this.$route.params.code})},movePage(t){this.$router.push({name:t})},async startSession(){let t=await fetch("http://localhost:3000/login"),{url:e}=await t.json()},searchByArtist(){this.$store.dispatch("searchByArtist",{data:this.search.data})},searchByAlbum(){this.$store.dispatch("searchByAlbum",{data:this.search.data})},searchBySong(){this.$store.dispatch("searchBySong",{data:this.search.data})}}},g=v,f=(s("cccb"),Object(l["a"])(g,p,m,!1,null,null,null)),y=f.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},b=[],C={name:"Session",data(){return{}},mounted(){},methods:{},components:{}},_=C,w=Object(l["a"])(_,S,b,!1,null,"411f5984",null),k=w.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Dashboard container-fluid"},[s("router-view")],1)},D=[],j={name:"Dashboard",async mounted(){let t={accessToken:this.$route.query.accessToken,refreshToken:this.$route.query.refreshToken,expiresIn:this.$route.query.expiresIn};await Object(n["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile",this.$auth.user),this.getTokens(t)},methods:{getTokens(t){this.$store.dispatch("setSpotifyHostTokens",t),this.$store.dispatch("saveSpotifyHostTokens",t),this.$router.push({name:"SessionCreate"})}}},L=j,x=Object(l["a"])(L,T,D,!1,null,"6f071c6c",null),R=x.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SessionCreate container-fluid"},[t._m(0),t._v(" "),s("div",{staticClass:"row vanilla min-height align-items-center"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row px-5 py-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newSessionName,expression:"newSessionName"}],staticClass:"form-control text-center rounded-pill",attrs:{type:"text",placeholder:"Please Enter a Session Name"},domProps:{value:t.newSessionName},on:{input:function(e){e.target.composing||(t.newSessionName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"row px-5 py-3"},[s("button",{staticClass:"btn btn-block btn-outline-danger p-3 rounded-pill",on:{click:t.createSession}},[s("h2",[t._v("Create Session")])])])])])]),t._v(" "),s("div",{staticClass:"row min-height2 strawberry"})])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row chocolate min-height2 align-items-center justify-content-center"},[s("div",{},[s("div",{staticClass:"justify-content-center mt-2"},[s("h1",{staticClass:"font-fancy"},[t._v("Song Sundae")])]),t._v(" "),s("div",{staticClass:"justify-content-center mt-4 mx-5"},[s("p",[t._v("You don't need to steal your friend's phone to put on decent music.")])])])])}],E={randomCode(){let t=[],e="ABCDEFGHJIKLMNPQRSTUVWXYZ1234567890";for(let s=1;s<=4;s++){let s=Math.floor(Math.random()*e.length);t.push(e[s])}return t.join("")}},P={name:"SessionCreate",data(){return{newSessionName:""}},async beforeMount(){},computed:{},methods:{createSession(){this.$store.dispatch("createSession",{sessionName:this.newSessionName,sessionCode:E.randomCode(),userEmail:this.$store.state.user.email}),this.newSessionName=""}},components:{}},q=P,I=(s("6cf4"),Object(l["a"])(q,A,V,!1,null,"5b69da43",null)),O=I.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SessionJoin mt-5 container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sessionCode,expression:"sessionCode"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.sessionCode},on:{keyup:function(e){return!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.joinSessionVisitor(e)},input:function(e){e.target.composing||(t.sessionCode=e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted",attrs:{id:"helpId"}},[t._v("Enter Session Code:")]),t._v(" "),s("button",{staticClass:"btn rounded-pill btn-outline-danger",on:{click:t.joinSessionVisitor}},[t._v("Join")])])])])])},F=[],H={name:"SessionJoin",data(){return{sessionCode:""}},mounted(){},computed:{},methods:{joinSessionVisitor(){this.$store.dispatch("joinSessionVisitor",this.sessionCode)}},components:{}},N=H,B=Object(l["a"])(N,U,F,!1,null,"7623d316",null),K=B.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SessionUniqueHost container-fluid full-height"},[s("div",{staticClass:"row chocolate top-height"}),t._v(" "),s("div",{staticClass:"row mid-height"},[s("queue")],1),t._v(" "),s("div",{staticClass:"row bot-height strawberry align-items-center"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row px-5 py-3"},[s("div",{staticClass:"modal fade",attrs:{id:"songModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-scrollable h-75",attrs:{role:"document"}},[s("div",{staticClass:"modal-content bg-success"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title mr-5"},[t._v("Search")]),t._v(" "),s("form",{staticClass:"form-inline mr-5",on:{submit:function(e){e.preventDefault(),t.searchBySong()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-danger rounded-pill my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.clearTrackResults}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[t._l(t.trackResults,(function(e){return s("div",{key:e.id,staticClass:"bg-primary m-2 p-2 row justify-content-between rounded-pill"},[s("div",{staticClass:"col-2"},[s("img",{staticClass:"ml-5 rounded img-fluid",attrs:{src:e.album.images[0].url,alt:""}})]),t._v("\n                  "+t._s(e.artists[0].name)+"- "+t._s(e.name)+"\n                  "),s("button",{staticClass:"btn btn-outline-secondary mr-5 rounded-pill col-2",on:{click:function(s){s.preventDefault(),t.selectSong(e)}}},[t._v("+")])])})),t._v(" "),!t.noLoadForYou&&t.infiniteWait?s("InfiniteLoading",{attrs:{spinner:"waveDots",identifier:t.infiniteId},on:{infinite:t.infiniteHandler}}):t._e(),t._v(" "),t.noLoadForYou?s("div",[s("div",{staticClass:"row bg-primary justify-content-center"},[t._v("End of results!")])]):t._e()],2),t._v(" "),s("div",{staticClass:"modal-footer"})])])]),t._v(" "),s("button",{staticClass:"btn btn-block btn-outline-danger p-3 rounded-pill",attrs:{type:"button","data-toggle":"modal","data-target":"#songModal"},on:{click:t.yesLoadForYou}},[t._v("Add a Song")])])])])])},W=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Queue col"},[s("div",{staticClass:"row chocolate"},[this.activeSession.queue&&this.activeSession.queue.length>0||this.activeSong.trackLength?s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("img",{staticClass:"rounded my-auto img-thumbnail img-fluid",attrs:{src:t.activeSong.albumCover.url,alt:""}})]),t._v(" "),s("div",{staticClass:"col-9"},[t._m(0),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._v("Title: "+t._s(t.activeSong.songTitle))]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._v("Album: "+t._s(t.activeSong.album))]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._v("Track Length: "+t._s(t.activeSong.trackLength))])])]),t._v(" "),""!==t.$store.state.hostTokens.accessToken?s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-1"}),t._v(" "),s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-outline-secondary rounded-pill",on:{click:t.playpause}},[t._v("Play/Pause")])]),t._v(" "),s("div",{staticClass:"col-2"}),t._v(" "),s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-outline-secondary rounded-pill",on:{click:t.skipSong}},[t._v("Skip")])]),t._v(" "),s("div",{staticClass:"col-1"})]):t._e()]):s("div",[t._m(1),t._v(" "),""!==t.$store.state.hostTokens.accessToken?s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-1"}),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"col-2"}),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"col-1"})]):t._e()])]),t._v(" "),s("div",{staticClass:"row vanilla queue-height overflowy"},[s("div",{staticClass:"col-12 overflowy"},t._l(t.songsQueue,(function(t){return s("songs",{key:t.uri,attrs:{songData:t}})})))])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("h3",[t._v("Playing")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"}),t._v(" "),s("div",{staticClass:"col-3 align-self-center"},[s("img",{staticClass:"rounded img-thumbnail img-fluid",attrs:{src:"https://images.squarespace-cdn.com/content/5d2e2c5ef24531000113c2a4/1564770252898-1KLCZDE9BJRSWDSMIM7L/image-asset.png",alt:""}})]),t._v(" "),s("div",{staticClass:"col-7"},[s("div",{staticClass:"row justify-content-center"},[s("h3",[t._v("Playing")])]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._v("Title:")]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._v("Album:")]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._v("Track Length:")])]),t._v(" "),s("div",{staticClass:"col-1"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-outline-secondary rounded-pill"},[t._v("Play/Pause")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-outline-secondary rounded-pill"},[t._v("Skip")])])}],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"songs bg-secondary row mb-2"},[s("div",{staticClass:"col-2 py-2"},[s("button",{staticClass:"btn btn-sm",class:t.upVoteToggle?"btn-success":"btn-outline-success",on:{click:function(e){e.preventDefault(),t.vote("up")}}},[t._v("Upvote")])]),t._v(" "),s("div",{staticClass:"col-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 justify-content-center"},[t._v("\n        "+t._s(t.songData.songTitle)+" -\n        "+t._s(t.songData.artist)+"\n      ")]),t._v(" "),s("div",{staticClass:"col-4 justify-content-center"},[t._v("Vote Count: "+t._s(t.songData.score))])])]),t._v(" "),s("div",{staticClass:"col-2 py-2"},[s("button",{staticClass:"btn btn-sm",class:t.downVoteToggle?"btn-danger":"btn-outline-danger",on:{click:function(e){e.preventDefault(),t.vote("down")}}},[t._v("Downvote")])])])},z=[],G={name:"songs",data(){return{upVoteToggle:!0,downVoteToggle:!0,voteDisabled:!1}},computed:{},methods:{delay(){this.timeout=setTimeout(()=>{this.voteDisabled=!1},2e3)},vote(t){this.voteDisabled||(this.voteDisabled=!0,"up"==t?this.upVoteToggle=!this.upVoteToggle:"down"==t&&(this.downVoteToggle=!this.downVoteToggle),"up"==t?this.upVoteToggle?this.songData.score--:this.songData.score++:"down"==t&&(this.downVoteToggle?this.songData.score++:this.songData.score--),this.$store.dispatch("updateSongScore",{songData:this.songData,uri:this.songData.uri.split(":")[2],direction:t}),this.delay())}},props:["songData"],components:{}},X=G,Z=(s("b430"),Object(l["a"])(X,J,z,!1,null,"4e629d46",null)),tt=Z.exports,et={name:"Queue",data(){return{queueExist:!1}},mounted(){},computed:{activeSession(){return this.$store.state.activeSession},songsQueue(){if(this.$store.state.activeSession.queue.length>=1){this.queueExist=!0;let t=this.$store.state.activeSession.queue.sort((t,e)=>e.score-t.score);return t}return[]},activeSong(){return this.$store.state.activeSong}},methods:{playpause(){this.$store.commit("playpause")},startSong(){this.songsQueue.length>0&&this.$store.dispatch("getActiveSong",this.songsQueue[0])},skipSong(){this.$store.dispatch("changeSong",this.songsQueue[0])}},components:{songs:tt}},st=et,ot=(s("e795"),Object(l["a"])(st,M,Q,!1,null,"5bb7e73b",null)),at=ot.exports,it=s("e166"),nt=s.n(it),ct={name:"SessionUniqueHost",data(){return{search:"",oldSearchLength:0,noLoadForYou:!1,infiniteWait:!1,oldSearchTerm:0,isLoading:!1,infiniteId:""}},mounted(){this.joinSessionVisitor(),this.$store.dispatch("getSpotifyVisitorAuth"),this.$store.dispatch("joinRoom","session-"+this.$route.params.code),this.$store.dispatch("findActiveSong",this.$route.params.code)},computed:{activeSession(){return this.$store.state.activeSession},trackResults(){return this.$store.state.trackSearchResults}},methods:{yesLoadForYou(){this.noLoadForYou=!1},async infiniteHandler(t){!this.isLoading&&this.trackResults.length<=50?(this.isLoading=!0,await this.searchBySong(),t.loaded(),console.log("load more")):this.trackResults.length>0&&(console.log("no load"),t.complete(),this.noLoadForYou=!0)},clearTrackResults(){this.$store.commit("clearTrackSearchResults"),this.noLoadForYou=!1,this.infiniteWait=!1},beforeDestory(){this.$store.dispatch("leaveRoom","session")},selectSong(t){this.$store.dispatch("addToQueue",{album:t.album.name,songTitle:t.name,artist:t.artists[0].name,explicit:t.explicit,albumCover:t.album.images[0],trackLength:t.duration_ms,popularity:t.popularity,uri:t.uri,score:0,sessionCode:this.$route.params.code})},async searchBySong(){this.oldSearchTerm!=this.search&&(this.clearTrackResults(),this.noLoadForYou=!1,this.infiniteId=this.search),this.oldSearchLength=this.trackResults.length,this.oldSearchTerm=this.search,console.log(this.trackResults.length),await this.$store.dispatch("searchBySong",{data:this.search,page:this.trackResults.length}),this.isLoading=!1,this.infiniteWaited()},infiniteWaited(){this.infiniteWait=!0},async joinSessionVisitor(){this.$route.params.code?await this.$store.dispatch("joinSessionVisitor",this.$route.params.code):console.log("no route params code found")}},components:{queue:at,InfiniteLoading:nt.a}},rt=ct,lt=(s("4565"),Object(l["a"])(rt,Y,W,!1,null,"80a1c386",null)),dt=lt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SessionUniqueHost container-fluid full-height"},[s("div",{staticClass:"row chocolate top-height"},[s("hostComponent")],1),t._v(" "),s("div",{staticClass:"row mid-height"},[s("queue")],1),t._v(" "),s("div",{staticClass:"row bot-height strawberry align-items-center"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row px-5 py-3"},[s("div",{staticClass:"modal fade",attrs:{id:"songModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-scrollable h-75",attrs:{role:"document"}},[s("div",{staticClass:"modal-content bg-success"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title mr-5"},[t._v("Search")]),t._v(" "),s("form",{staticClass:"form-inline mr-5",on:{submit:function(e){e.preventDefault(),t.searchBySong()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-danger rounded-pill my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){t.clearTrackResults(),t.clearSearch()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[t._l(t.trackResults,(function(e){return s("div",{key:e.id,staticClass:"bg-primary m-2 p-2 row justify-content-between rounded-pill"},[s("div",{staticClass:"col-2"},[s("img",{staticClass:"ml-5 rounded img-fluid",attrs:{src:e.album.images[0].url,alt:""}})]),t._v("\n                  "+t._s(e.artists[0].name)+"- "+t._s(e.name)+"\n                  "),s("button",{staticClass:"btn btn-outline-secondary mr-5 rounded-pill col-2",on:{click:function(s){s.preventDefault(),t.selectSong(e)}}},[t._v("+")])])})),t._v(" "),!t.noLoadForYou&&t.infiniteWait?s("InfiniteLoading",{attrs:{spinner:"waveDots",identifier:t.infiniteId},on:{infinite:t.infiniteHandler}}):t._e(),t._v(" "),t.noLoadForYou?s("div",[s("div",{staticClass:"row bg-primary justify-content-center"},[t._v("End of results!")])]):t._e()],2),t._v(" "),s("div",{staticClass:"modal-footer"})])])]),t._v(" "),s("button",{staticClass:"btn btn-block btn-outline-danger p-3 rounded-pill",attrs:{type:"button","data-toggle":"modal","data-target":"#songModal"},on:{click:t.yesLoadForYou}},[t._v("Add a Song")])])])])])},ht=[],pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"host-component col-12"},[s("div",{staticClass:"row align-items-center my-4"},[s("div",{staticClass:"col-8"},[s("h5",{staticClass:"rm-my"},[t._v("Session Code: "+t._s(t.activeSession.sessionCode))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("i",{staticClass:"far fa-share-square"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("i",{staticClass:"fas fa-cog"})])}],vt={name:"FileName",data(){return{deviceId:this.$store.state.hostDeviceId,changingTrack:!1,currentState:{},spotifySDK:{}}},watch:{playing:function(){this.playpause()}},mounted(){window.onSpotifyWebPlaybackSDKReady=()=>{},this.checkForActiveSong()},computed:{accessToken(){return this.$store.state.hostTokens.accessToken},activeSession(){return this.$store.state.activeSession},playing(){return this.$store.state.playing}},async mounted(){await this.initiatePlayer()},methods:{waitForSpotifyWebPlaybackSDKToLoad:async function(){return new Promise(t=>{window.Spotify?t(window.Spotify):window.onSpotifyWebPlaybackSDKReady=()=>{t(window.Spotify)}})},initiatePlayer:async function(){await this.accessToken;const{Player:t}=await this.waitForSpotifyWebPlaybackSDKToLoad();this.spotifySDK=new t({name:"Song Scoop",volume:1,getOAuthToken:t=>{t(this.accessToken)}}),console.log(JSON.stringify(this.spotifySDK)),this.spotifySDK.addListener("initialization_error",({message:t})=>{console.log("Initialization_error: "+t)}),this.spotifySDK.addListener("authentication_error",({message:t})=>{console.log("Authentication_error: "+t)}),this.spotifySDK.addListener("account_error",({message:t})=>{console.log("Account_error: "+t)}),this.spotifySDK.addListener("playback_error",({message:t})=>{console.log("Playback_error: "+t)}),this.spotifySDK.addListener("player_state_changed",t=>{console.log("state Changed",t),this.changeSong(t)}),this.spotifySDK.addListener("ready",({device_id:t})=>{console.log("Ready with Device Id: ",t),this.$store.dispatch("getDeviceId",t)}),this.spotifySDK.addListener("not_ready",({device_id:t})=>{console.log("Not ready with device Id: ",t)}),this.spotifySDK.connect()},play(){this.$store.dispatch("playCurrentSong")},playpause(){this.spotifySDK.togglePlay().then(()=>{console.log("Toggled playback!")})},changeSong(t){console.log(t),t&&t!=this.currentState&&t.paused&&0==this.changingTrack&&0===t.position?(console.log("Track ended"),this.changingTrack=!0,this.currentState=t,this.$store.dispatch("changeSong")):0==t.paused&&t.position>1e3&&(this.changingTrack=!1)}}},gt=vt,ft=(s("369b"),Object(l["a"])(gt,pt,mt,!1,null,"0ad43398",null)),yt=ft.exports,St={name:"SessionUniqueHost",data(){return{search:"",oldSearchLength:0,noLoadForYou:!1,infiniteWait:!1,oldSearchTerm:0,isLoading:!1,infiniteId:""}},async beforeMount(){await this.hostCheck()},mounted(){this.joinSessionHost(),this.$store.dispatch("getSpotifyVisitorAuth"),this.$store.dispatch("joinRoom","session-"+this.$route.params.code),$("#songModal").on("hidden.bs.modal",()=>{this.clearSearch(),this.clearTrackResults()})},computed:{activeSession(){return this.$store.state.activeSession},trackResults(){return this.$store.state.trackSearchResults}},methods:{yesLoadForYou(){this.noLoadForYou=!1},async infiniteHandler(t){!this.isLoading&&this.trackResults.length<=50?(this.isLoading=!0,await this.searchBySong(),t.loaded()):this.trackResults.length>0&&(t.complete(),this.noLoadForYou=!0)},clearSearch(){this.search=""},clearTrackResults(){this.$store.commit("clearTrackSearchResults"),this.noLoadForYou=!1,this.infiniteWait=!1},async hostCheck(){await Object(n["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile",this.$auth.user);let t=await this.$store.dispatch("getSessionEmail",this.$route.params.code);t==this.$auth.user.email&&await this.callTokens()},beforeDestory(){this.$store.dispatch("leaveRoom","session")},selectSong(t){this.$store.dispatch("addToQueue",{album:t.album.name,songTitle:t.name,artist:t.artists[0].name,explicit:t.explicit,albumCover:t.album.images[0],trackLength:t.duration_ms,popularity:t.popularity,uri:t.uri,score:0,sessionCode:this.$route.params.code})},async searchBySong(){this.oldSearchTerm!=this.search&&(this.clearTrackResults(),this.noLoadForYou=!1,this.infiniteId=this.search),this.oldSearchLength=this.trackResults.length,this.oldSearchTerm=this.search,await this.$store.dispatch("searchBySong",{data:this.search,page:this.trackResults.length}),this.isLoading=!1,this.infiniteWaited()},infiniteWaited(){this.infiniteWait=!0},async callTokens(){0==this.$store.state.hostTokens.accessToken&&this.activeSession.creatorEmail==this.$auth.user.email&&await this.$store.dispatch("callDownTokens")},async joinSessionHost(){this.$route.params.code&&await this.$store.dispatch("joinSessionHost",this.$route.params.code)}},components:{hostComponent:yt,queue:at,InfiniteLoading:nt.a}},bt=St,Ct=(s("9b79"),Object(l["a"])(bt,ut,ht,!1,null,"2b45ac9c",null)),_t=Ct.exports;o["a"].use(h["a"]);const wt=[{path:"/",name:"Home",component:y},{path:"/dashboard",name:"Dashboard",component:R,beforeEnter:n["b"],children:[{path:"/session",name:"Session",component:k},{path:"/session/create",name:"SessionCreate",component:O}]},{path:"/session/join",name:"SessionJoin",component:K},{path:"/session/:code",name:"SessionUniqueVisitor",component:dt},{path:"/session/:code/host",name:"SessionUniqueHost",component:_t}],kt=new h["a"]({routes:wt});var Tt=kt,$t=s("2f62"),Dt=s("bc3a"),jt=s.n(Dt);let Lt=window.location.host.includes("localhost")?"//localhost:3000/":"/";jt.a.create({baseURL:Lt+"login/",timeout:3e3,withCredentials:!0});const xt=jt.a.create({baseURL:Lt+"api/",timeout:3e3,withCredentials:!0}),Rt=jt.a.create({baseURL:Lt+"auth/",timeout:3e3,withCredentials:!0}),At=jt.a.create({baseURL:"https://accounts.spotify.com/api/",timeout:3e3,withCredentials:!0}),Vt=(jt.a.create({baseURL:"https://accounts.spotify.com/",timeout:3e3,headers:{"Access-Control-Allow-Origin":"*"}}),jt.a.create({baseURL:"https://api.spotify.com/v1/",timeout:3e3})),Et=jt.a.create({baseURL:"https://api.spotify.com/v1/me/player/",timeout:3e3});var Pt=s("4328"),qt=s.n(Pt);const It="dev-xx4s5j83.us.auth0.com",Ot="https://capstoneapi.com",Ut="TiKxVNLwU9qB8XKGOtG43vPohIRp31t2",Ft="2ebc954dcb5646a0abec246b8d12df41",Ht="fc20d8e348bd48a19a8809a1551dece8";o["a"].use($t["a"]);var Nt={actions:{async getSpotifyVisitorAuth({commit:t,dispatch:e}){const s={headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},auth:{username:Ft,password:Ht}},o={grant_type:"client_credentials"};try{const e=await At.post("token",qt.a.stringify(o),s);let a=e.data.access_token;t("setSpotifyVisitorAuth",a)}catch(a){console.log(a,"Failed")}},async searchBySong({commit:t,dispatch:e,state:s},o){try{const e=await Vt.get("search?q="+o.data+"&type=track&limit=10&offset="+o.page,{headers:{Authorization:"Bearer "+Gt.state.spotifyAuthToken}});return t("setTrackSearchResults",e.data.tracks),t("updateTrackPage",!0),e.data}catch(a){console.error(a),t("updateTrackPage",!1)}}}},Bt=s("3d20"),Kt=s.n(Bt);o["a"].use($t["a"]);var Yt={actions:{async createSession({commit:t},e){try{await xt.post("session/post",e),t("setActiveSession",e),Tt.push({name:"SessionUniqueHost",params:{code:e.sessionCode}})}catch(s){console.error(s)}},async joinSessionHost({commit:t,dispatch:e},s){try{let o=await xt.get("session/"+s);t("setActiveSession",o.data[0]),o.data[0].queue[0]&&t("setActiveSong",o.data[0].queue[0]),Tt.push({name:"SessionUniqueHost",params:{code:s}}),e("loadFromSave")}catch(o){console.error(o),Kt.a.fire({icon:"error",title:"Oops...",text:"The Session Does Not Exist!"})}},async joinSessionVisitor({commit:t,dispatch:e},s){try{let e=await xt.get("session/"+s);t("setActiveSession",e.data[0]),e.data[0].queue[0]&&t("setActiveSong",e.data[0].queue[0]),Tt.push({name:"SessionUniqueVisitor",params:{code:s}})}catch(o){console.error(o),Kt.a.fire({icon:"error",title:"Oops...",text:"The Session Does Not Exist!"})}}}};o["a"].use($t["a"]);var Wt={actions:{async playCurrentSong({commit:t},e){console.log(Gt.state.activeSong.uri);try{await Et.put("play?device_id="+Gt.state.hostDeviceId,{uris:[Gt.state.activeSong.uri]},{headers:{Authorization:"Bearer "+Gt.state.hostTokens.accessToken}})}catch(s){console.error(s)}},async addToQueue({commit:t,dispatch:e},s){try{await xt.put("session/"+s.sessionCode,s);e("getActiveSong",s)}catch(o){console.error(o)}},async getQueue({commit:t,dispatch:e},s){try{let e=await xt.get("session/"+s.sessionCode);t("setQueue",e.data[0].queue)}catch(o){console.error(o)}},getActiveSong({commit:t,dispatch:e},s){"no active song"==Gt.state.activeSong&&(t("setActiveSong",s),e("playCurrentSong"),xt.delete("session/"+Gt.state.activeSession.sessionCode+"/"+s.uri),Gt.state.activeSession.queue.sort((t,e)=>e.score-t.score).splice(0,1),e("updateActiveSong",s))},changeSong({commit:t,dispatch:e}){Gt.state.activeSong="no active song",e("getActiveSong",Gt.state.activeSession.queue.sort((t,e)=>e.score-t.score)[0])},updateSongScore({commit:t,dispatch:e,state:s},o){xt.put("session/"+o.songData.sessionCode+"/"+o.uri,o.songData),"up"==o.direction?t("songUpVoted",o.uri):"down"==o.direction&&t("songDownVoted",o.uri),e("saveToLocal")},async updateActiveSong({commit:t,dispatch:e,state:s},o){try{let t=await xt.put("session/"+o.sessionCode+"/"+o.uri+"/active",o);console.log("updatedActiveSong worked?",t.data)}catch(a){console.error(a)}},async findActiveSong({commit:t,dispatch:e,state:s},o){try{let e=await xt.get("session/"+o+"/find");t("setActiveSong",e.data.data[0].activeSong[0])}catch(a){console.error(a)}}}},Mt=s("4bea"),Qt=s.n(Mt);let Jt={};const zt={actions:{initializeSocket({commit:t,dispatch:e}){Jt=Qt()(window.location.host.includes("localhost")?"//localhost:3000/":"/"),Jt.on("CONNECTED",t=>{console.log(t.message+" Let the villany commence")}),Jt.on("updateQueue",t=>{e("getQueue",t)}),Jt.on("songScoreUpdated",t=>{e("getQueue",t)}),Jt.on("activeSongUpdated",e=>{t("setActiveSong",e.data.activeSong[0])})},joinRoom({commit:t,dispatch:e},s){Jt.emit("dispatch",{action:"joinRoom",data:s})},leaveRoom({commit:t,dispatch:e},s){Jt.emit("disconnect",{action:"leaveRoom",data:s})}}};o["a"].use($t["a"]);var Gt=new $t["a"].Store({state:{spotifyAuthToken:"",trackSearchResults:[],user:{},hostDeviceId:"",hostTokens:{accessToken:"",refreshToken:"",expiresIn:""},activeSession:{queue:[],page:!0},activeSong:"no active song",vistorActive:{},nextSong:{},playing:!0,songsUpVoted:[],songsDownVoted:[]},mutations:{setUser(t,e){t.user=e},setSpotifyVisitorAuth(t,e){t.spotifyAuthToken=e},setTrackSearchResults(t,e){e.items.forEach(e=>t.trackSearchResults.push(e))},updateTrackPage(t,e){t.activeSession.page=e},clearTrackSearchResults(t){t.trackSearchResults=[]},setHostTokens(t,e){t.hostTokens.accessToken=e.accessToken,t.hostTokens.refreshToken=e.refreshToken,t.hostTokens.expiresIn=e.expiresIn},setActiveSession(t,e){t.activeSession=e},setActiveSong(t,e){t.activeSong=e},setVisitorActive(t,e){t.vistorActive=e},setQueue(t,e){t.activeSession.queue=e},setNextSong(t,e){t.nextSong=e},setDeviceId(t,e){t.hostDeviceId=e},songUpVoted(t,e){t.songsUpVoted.push(e)},songDownVoted(t,e){t.songsDownVoted.push(e)},playpause(t){t.playing=!t.playing}},actions:{setBearer({},t){xt.defaults.headers.authorization=t,Rt.defaults.headers.authorization=t},resetBearer(){xt.defaults.headers.authorization="",Rt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await xt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},async getSessionEmail({dispatch:t},e){try{let t=await xt.get("session/"+e);return t.data[0].creatorEmail}catch(s){console.error(s)}},setSpotifyHostTokens({commit:t,dispatch:e,state:s},o){t("setHostTokens",o)},async saveSpotifyHostTokens({commit:t,dispatch:e},s){try{let t={accessToken:s.accessToken,refreshToken:s.refreshToken,expiresIn:s.expiresIn};await Rt.post("tokensave",t)}catch(o){console.error(o)}},async callDownTokens({commit:t,dispatch:e,state:s}){try{let e=await Rt.get("tokenget");t("setHostTokens",e.data)}catch(o){}},getDeviceId({commit:t},e){t("setDeviceId",e)},saveToLocal(t){window.localStorage.setItem("Session"+t.state.activeSession.sessionCode,JSON.stringify({SessionCode:t.state.activeSession.sessionCode,songsUpVoted:t.state.songsUpVoted,songsDownVoted:t.state.songsDownVoted})),console.log("Session saved")},loadFromSave(t){let e=JSON.parse(window.localStorage.getItem("Session"+t.state.activeSession.sessionCode));e&&(t.state.songsUpVoted=e.songsUpVoted,t.state.songsDownVoted=e.songsDownVoted)}},modules:{SessionModule:Yt,VisitorModule:Nt,SongModule:Wt,socketStore:zt}});s("5886"),s("4413");o["a"].use(n["a"],{domain:It,clientId:Ut,audience:Ot,onRedirectCallback:t=>{Tt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new o["a"]({router:Tt,store:Gt,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var o=s("9c0c"),a=s.n(o);a.a},"5ced":function(t,e,s){},"6cf4":function(t,e,s){"use strict";var o=s("740b"),a=s.n(o);a.a},"740b":function(t,e,s){},"9b79":function(t,e,s){"use strict";var o=s("d2fc"),a=s.n(o);a.a},"9c0c":function(t,e,s){},a698:function(t,e,s){},b430:function(t,e,s){"use strict";var o=s("0a4e"),a=s.n(o);a.a},c02c:function(t,e,s){},cccb:function(t,e,s){"use strict";var o=s("5ced"),a=s.n(o);a.a},d2fc:function(t,e,s){},e795:function(t,e,s){"use strict";var o=s("4600"),a=s.n(o);a.a}});
//# sourceMappingURL=app.72bc73d5.js.map