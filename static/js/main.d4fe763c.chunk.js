(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),c=a(18),l=a.n(c),s=(a(31),a(1)),o=a(2),r=a(6),d=a(4),m=a(5),u=a(16),b=a(21),p=Object(b.a)({apiKey:"AIzaSyAyeSJlPvE59o7THiEagVi9j8QrOOgFvTI",authDomain:"kidslearning-9d5c2.firebaseapp.com",databaseURL:"https://kidslearning-9d5c2-default-rtdb.firebaseio.com",projectId:"kidslearning-9d5c2",storageBucket:"kidslearning-9d5c2.appspot.com",messagingSenderId:"1071646550626",appId:"1:1071646550626:web:65666d1fc8648759073f3b",measurementId:"G-VV057NL1S6"}),h=Object(u.c)(p);a(33);function v(e){return i.a.createElement("div",{id:"imageDisplayContainer"},i.a.createElement("div",{className:"floatContainer"},i.a.createElement("h1",{className:"title"},e.title),i.a.createElement("h3",{className:"subtitle"},e.subtitle)),i.a.createElement("div",{className:"floatContainer"},i.a.createElement("img",{src:e.imageUrl,width:"100%",height:"auto"})))}var f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={alphabets:[],selectedAlphabet:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(u.d)(h);console.log("componentDidMount"),Object(u.b)(Object(u.a)(t,"1rtwWivo_XjQ5e2N4S2MaxJY2ieYnYrkKmqdUBsFhF-M/Phonics")).then(function(t){if(t.exists()){var a=t.val();e.setState({alphabets:a})}else console.log("no data available")}).catch(function(e){console.log("Error")});var a=!1;document.addEventListener("keydown",function(t){var n=t.key,i=(t.code,t.keyCode);if(i>=65&&i<=90&&!a){var c=i-65,l=e.state.alphabets[c];e.setState({selectedAlphabet:l});var s=l.voiceUrl,o=new Audio(s);o.play(),a=!0,o.addEventListener("ended",function(){a=!1})}"Control"!==n&&t.ctrlKey},!1)}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"imageDisplay"},i.a.createElement(v,{imageUrl:this.state.selectedAlphabet.imageUrl,title:this.state.selectedAlphabet.title,subtitle:this.state.selectedAlphabet.subtitle})))}}]),t}(i.a.Component);l.a.createRoot(document.getElementById("root")).render(i.a.createElement(f,null))}},[[23,2,1]]]);
//# sourceMappingURL=main.d4fe763c.chunk.js.map