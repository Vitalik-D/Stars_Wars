(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){},20:function(e,a,t){e.exports=t.p+"static/media/character.33022f18.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/films.03a9a1af.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/planets.d28c9986.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/species.469d9d37.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/starships.19706559.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/vehicles.788b92b8.jpg"},26:function(e,a,t){e.exports=t.p+"static/media/Lazer Sword.cacad29a.png"},29:function(e,a,t){e.exports=t(40)},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),s=(t(18),t(3)),m=t(4),o=t(6),i=t(5),u=t(7),p=t(41),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement("p",null,"Star Wars")),l.a.createElement("div",null,l.a.createElement("p",null,this.props.category)))}}]),a}(l.a.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:this.props.src,alt:"card"}),l.a.createElement("span",{className:"category_text"},this.props.name))}}]),a}(l.a.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("img",{src:"http://www.antonsetiawan.com/images/github10-inverse.png",alt:"qwe",className:"github"}),l.a.createElement("a",{href:"https://github.com/"}," ",l.a.createElement("p",null,"GitHub")),l.a.createElement("p",{className:"dev_name"}," Developed by Vitalik Diadychko"))}}]),a}(l.a.Component),g=t(20),v=t.n(g),f=t(21),b=t.n(f),j=t(22),O=t.n(j),y=t(23),N=t.n(y),w=t(24),k=t.n(w),P=t(25),F=t.n(P),L=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{category:"A VISUAL GUIDE"}),l.a.createElement("div",null,l.a.createElement("div",{className:"app"},l.a.createElement(p.a,{to:"/people"},l.a.createElement(E,{name:"Character",src:v.a})),l.a.createElement(p.a,{to:"/films"},l.a.createElement(E,{name:"Films",src:b.a})),l.a.createElement(p.a,{to:"/species"},l.a.createElement(E,{name:"Species",src:N.a})),l.a.createElement(p.a,{to:"/starships"},l.a.createElement(E,{name:"Starships",src:k.a})),l.a.createElement(p.a,{to:"/vehicles"},l.a.createElement(E,{name:"Vehicles",src:F.a})),l.a.createElement(p.a,{to:"/planets"},l.a.createElement(E,{name:"Planets",src:O.a})))),l.a.createElement(h,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(2),S=t.n(x),C=t(8),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return fetch("https://swapi.co/api/"+e).then(function(e){return e.json()})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.log(e),fetch("https://swapi.co/api"+e).then(function(e){return e.json()})},U=function(){var e=Object(C.a)(S.a.mark(function e(a){var t,n,l;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.pathName,n=a.page,(l=new URLSearchParams).set("page",n),e.abrupt("return",_("".concat(t,"?").concat(l.toString())));case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(S.a.mark(function e(a){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.pathName,t=window.location.pathname,e.abrupt("return",D("".concat(t,"/")));case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),A=t(26),R=t.n(A),G=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("div",{className:"loading"},l.a.createElement("img",{src:R.a,className:"logo-load-spin",alt:"Lazer-Sword"})))}}]),a}(l.a.Component),W=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"pagination"},l.a.createElement(p.a,{to:"/"},l.a.createElement("p",null,"Home")),l.a.createElement("span",null,"/"),l.a.createElement("p",null,this.props.page))}}]),a}(l.a.Component),H=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"films",isLoaded:!1,page:0,films:[]},t.loadData=Object(C.a)(S.a.mark(function e(){var a,n,l,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,n=t.state.page,e.next=4,U({pathName:a,page:n});case 4:l=e.sent,r=l.results,t.setState({films:r,isLoaded:!0});case 7:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePageFromUrl()}},{key:"updatePageFromUrl",value:function(){this.setState({page:1},this.loadData)}},{key:"render",value:function(){var e=this.state,a=e.films,t=e.isLoaded;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(W,{page:"Films"}),l.a.createElement("div",{className:"dataList"},a.map(function(e){return l.a.createElement("div",{key:e.title,className:"films"},l.a.createElement(p.a,{to:"/films/".concat(e.episode_id)},l.a.createElement("img",{src:"./img/films/".concat(e.episode_id,".jpg"),alt:e.title})),l.a.createElement("p",null,"Name: ",e.title),l.a.createElement("p",null,"Episode: ",e.episode_id),l.a.createElement("p",null,"Name: ",e.director),l.a.createElement("p",null,"Name: ",e.release_date))})),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),B=t(46),V=Object(B.a)(function(e){for(var a=e.location,t=e.count,n=(e.page,e.perPage),r=void 0===n?10:n,c=Math.ceil(t/r),s=[],m=0;m<c;m++)s.push(m+1);var o=function(e){var t=new URLSearchParams(a.search);return t.set("page",e),t.toString()};return l.a.createElement("div",{className:"apiPagination"},s.map(function(e){return l.a.createElement(p.a,{key:e,to:{pathname:a.pathname,search:o(e)}},e)}))}),I=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"planets",isLoaded:!1,page:0,count:0,planets:[]},t.loadData=Object(C.a)(S.a.mark(function e(){var a,n,l,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,n=t.state.page,e.next=4,U({pathName:a,page:n});case 4:l=e.sent,r=l.count,c=l.results,t.setState({planets:c,count:r,isLoaded:!0});case 8:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePageFromUrl()}},{key:"componentDidUpdate",value:function(){this.updatePageFromUrl()}},{key:"updatePageFromUrl",value:function(){var e=this.props.location,a=+new URLSearchParams(e.search).get("page")||1;a!==this.state.page&&this.setState({page:a},this.loadData)}},{key:"render",value:function(){var e=this.state,a=e.planets,t=e.isLoaded,n=e.count,r=e.page;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{category:"Planets"}),l.a.createElement("div",{className:"nav"},l.a.createElement(W,{page:"Planets"}),l.a.createElement(V,{count:n,page:r})),l.a.createElement("div",{className:"dataList"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"planets"},l.a.createElement(p.a,{to:"/planets/".concat(e.url.match(/\d+/))},l.a.createElement("img",{src:"./img/planets/".concat(e.url.match(/\d+/),".jpg"),alt:e.name})),l.a.createElement("p",null,"Name: ",e.name),l.a.createElement("p",null,"Diameter: ",e.diameter),l.a.createElement("p",null,"Climate: ",e.climate),l.a.createElement("p",null,"Gravity: ",e.gravity),l.a.createElement("p",null,"Terrain: ",e.terrain),l.a.createElement("p",null,"Surface water: ",e.surface_water),l.a.createElement("p",null,"Population: ",e.population))})),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),z=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"people",isLoaded:!1,page:0,count:0,people:[]},t.loadData=Object(C.a)(S.a.mark(function e(){var a,n,l,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,n=t.state.page,e.next=4,U({pathName:a,page:n});case 4:l=e.sent,r=l.count,c=l.results,t.setState({people:c,count:r,isLoaded:!0});case 8:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePageFromUrl()}},{key:"componentDidUpdate",value:function(){this.updatePageFromUrl()}},{key:"updatePageFromUrl",value:function(){var e=this.props.location,a=+new URLSearchParams(e.search).get("page")||1;a!==this.state.page&&this.setState({page:a},this.loadData)}},{key:"render",value:function(){var e=this.state,a=e.people,t=e.isLoaded,n=e.count,r=e.page;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{category:"Character"}),l.a.createElement("div",{className:"nav"},l.a.createElement(W,{page:"Character"}),l.a.createElement(V,{count:n,page:r})),l.a.createElement("div",{className:"dataList"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"people"},l.a.createElement(p.a,{to:"/people/".concat(e.url.match(/\d+/))},l.a.createElement("img",{src:"./img/people/".concat(e.url.match(/\d+/),".jpg"),alt:e.name})),l.a.createElement("p",null,"Name: ",e.name),l.a.createElement("p",null,"Birth Year: ",e.birth_year),l.a.createElement("p",null,"Gender: ",e.gender),l.a.createElement("p",null,"Height: ",e.height),l.a.createElement("p",null,"Weight: ",e.mass))})),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),J=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"species",isLoaded:!1,page:0,count:0,species:[]},t.loadData=Object(C.a)(S.a.mark(function e(){var a,n,l,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,n=t.state.page,e.next=4,U({pathName:a,page:n});case 4:l=e.sent,r=l.count,c=l.results,t.setState({species:c,count:r,isLoaded:!0});case 8:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePageFromUrl()}},{key:"componentDidUpdate",value:function(){this.updatePageFromUrl()}},{key:"updatePageFromUrl",value:function(){var e=this.props.location,a=+new URLSearchParams(e.search).get("page")||1;a!==this.state.page&&this.setState({page:a},this.loadData)}},{key:"render",value:function(){var e=this.state,a=e.species,t=e.isLoaded,n=e.count,r=e.page;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{category:"Species"}),l.a.createElement("div",{className:"nav"},l.a.createElement(W,{page:"Species"}),l.a.createElement(V,{count:n,page:r})),l.a.createElement("div",{className:"dataList"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"species"},l.a.createElement(p.a,{to:"/species/".concat(e.url.match(/\d+/))},l.a.createElement("img",{src:"./img/species/".concat(e.url.match(/\d+/),".jpg"),alt:e.name})),l.a.createElement("p",null,"Name: ",e.name),l.a.createElement("p",null,"Classification: ",e.classification),l.a.createElement("p",null,"Average height: ",e.average_height),l.a.createElement("p",null,"Average lifespan: ",e.average_lifespan),l.a.createElement("p",null,"Language: ",e.language))})),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),T=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"vehicles",isLoaded:!1,page:0,count:0,vehicles:[]},t.loadData=Object(C.a)(S.a.mark(function e(){var a,n,l,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,n=t.state.page,e.next=4,U({pathName:a,page:n});case 4:l=e.sent,r=l.count,c=l.results,t.setState({vehicles:c,count:r,isLoaded:!0});case 8:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePageFromUrl()}},{key:"componentDidUpdate",value:function(){this.updatePageFromUrl()}},{key:"updatePageFromUrl",value:function(){var e=this.props.location,a=+new URLSearchParams(e.search).get("page")||1;a!==this.state.page&&this.setState({page:a},this.loadData)}},{key:"render",value:function(){var e=this.state,a=e.vehicles,t=e.isLoaded,n=e.count,r=e.page;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{category:"Species"}),l.a.createElement("div",{className:"nav"},l.a.createElement(W,{page:"Species"}),l.a.createElement(V,{count:n,page:r})),l.a.createElement("div",{className:"dataList"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"starships"},l.a.createElement(p.a,{to:"/vehicles/".concat(e.url.match(/\d+/))},l.a.createElement("img",{src:"./img/vehicles/".concat(e.url.match(/\d+/),".jpg"),alt:e.name})),l.a.createElement("p",null,"Name: ",e.name),l.a.createElement("p",null,"Model: ",e.model),l.a.createElement("p",null,"Manufacturer: ",e.manufacturer),l.a.createElement("p",null,"Length: ",e.length),l.a.createElement("p",null,"Crew: ",e.crew),l.a.createElement("p",null,"Vehicle class: ",e.vehicle_class))})),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),Y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"starships",isLoaded:!1,page:0,count:0,starships:[]},t.loadData=Object(C.a)(S.a.mark(function e(){var a,n,l,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,n=t.state.page,e.next=4,U({pathName:a,page:n});case 4:l=e.sent,r=l.count,c=l.results,t.setState({starships:c,count:r,isLoaded:!0});case 8:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updatePageFromUrl()}},{key:"componentDidUpdate",value:function(){this.updatePageFromUrl()}},{key:"updatePageFromUrl",value:function(){var e=this.props.location,a=+new URLSearchParams(e.search).get("page")||1;a!==this.state.page&&this.setState({page:a},this.loadData)}},{key:"render",value:function(){var e=this.state,a=e.starships,t=e.isLoaded,n=e.count,r=e.page;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{category:"Starships "}),l.a.createElement("div",{className:"nav"},l.a.createElement(W,{page:"Starships "}),l.a.createElement(V,{count:n,page:r})),l.a.createElement("div",{className:"dataList"},a.map(function(e){return l.a.createElement("div",{key:e.name,className:"starships"},l.a.createElement(p.a,{to:"/starships/".concat(e.url.match(/\d+/))},l.a.createElement("img",{src:"./img/starships/".concat(e.url.match(/\d+/),".jpg"),alt:e.name})),l.a.createElement("p",null,"Name: ",e.name),l.a.createElement("p",null,"Model: ",e.model),l.a.createElement("p",null,"Manufacturer: ",e.manufacturer),l.a.createElement("p",null,"Length: ",e.length),l.a.createElement("p",null,"Crew: ",e.crew))})),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pageNotFound"},l.a.createElement(p.a,{to:"/"},l.a.createElement("p",null,"Come back home")),l.a.createElement("p",null,"404")))},$=t(42),K=t(45),Q=t(43),X=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=window.location.pathname,a=new RegExp(/\/\d+/g),t=e.replace(a,""),n=t.replace(/\//g,"");return l.a.createElement("div",{className:"pagination"},l.a.createElement(p.a,{to:"/"},l.a.createElement("p",null,"Home")),l.a.createElement("span",null,"/"),l.a.createElement(p.a,{to:t},l.a.createElement("p",null,n)),l.a.createElement("span",null,"/"),l.a.createElement("p",null,this.props.name))}}]),a}(l.a.Component),Z=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"films",data:[],isLoaded:!1},t.loadPeople=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,e.next=3,M({pathName:a});case 3:n=e.sent,t.setState({data:n,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadPeople()}},{key:"render",value:function(){var e=window.location.pathname.match(/\d+/),a=this.state,t=a.data,n=a.isLoaded;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(X,{name:t.title}),l.a.createElement("div",{className:"onePage"},l.a.createElement("div",{className:"onePage_logo"},l.a.createElement("img",{src:"../img/films/".concat(e,".jpg"),alt:t.title})),l.a.createElement("div",{className:"onePage_text"},l.a.createElement("p",null,"Name: ",l.a.createElement("span",null,t.title)),l.a.createElement("p",null,"Episode: ",l.a.createElement("span",null,t.episode_id)),l.a.createElement("p",null,"Opening crawl: ",l.a.createElement("span",null,t.opening_crawl)),l.a.createElement("p",null,"Director: ",l.a.createElement("span",null,t.director)),l.a.createElement("p",null,"Producer: ",l.a.createElement("span",null,t.producer)),l.a.createElement("p",null,"Release date: ",l.a.createElement("span",null,t.release_date)))),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),ee=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"people",data:[],isLoaded:!1},t.loadPeople=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,e.next=3,M({pathName:a});case 3:n=e.sent,t.setState({data:n,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadPeople()}},{key:"render",value:function(){var e=window.location.pathname.match(/\d+/),a=this.state,t=a.data,n=a.isLoaded;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(X,{name:t.name}),l.a.createElement("div",{className:"onePage"},l.a.createElement("div",{className:"onePage_logo"},l.a.createElement("img",{src:"../img/people/".concat(e,".jpg"),alt:t.name})),l.a.createElement("div",{className:"onePage_text"},l.a.createElement("p",null,"Name: ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,"Height: ",l.a.createElement("span",null,t.height)),l.a.createElement("p",null,"Mass: ",l.a.createElement("span",null,t.mass)),l.a.createElement("p",null,"Birth Year: ",l.a.createElement("span",null,t.birth_year)),l.a.createElement("p",null,"Gende: ",l.a.createElement("span",null,t.gende)))),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),ae=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"species",data:[],isLoaded:!1},t.loadPeople=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,e.next=3,M({pathName:a});case 3:n=e.sent,t.setState({data:n,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadPeople()}},{key:"render",value:function(){var e=window.location.pathname.match(/\d+/),a=this.state,t=a.data,n=a.isLoaded;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(X,{name:t.name}),l.a.createElement("div",{className:"onePage"},l.a.createElement("div",{className:"onePage_logo"},l.a.createElement("img",{src:"../img/species/".concat(e,".jpg"),alt:t.name})),l.a.createElement("div",{className:"onePage_text"},l.a.createElement("p",null,"Name: ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,"Classification: ",l.a.createElement("span",null,t.classification)),l.a.createElement("p",null,"Designation: ",l.a.createElement("span",null,t.designation)),l.a.createElement("p",null,"Average height: ",l.a.createElement("span",null,t.average_height)),l.a.createElement("p",null,"Language: ",l.a.createElement("span",null,t.language)))),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),te=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"vehicles",data:[],isLoaded:!1},t.loadPeople=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,e.next=3,M({pathName:a});case 3:n=e.sent,t.setState({data:n,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadPeople()}},{key:"render",value:function(){var e=window.location.pathname.match(/\d+/),a=this.state,t=a.data,n=a.isLoaded;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(X,{name:t.name}),l.a.createElement("div",{className:"onePage"},l.a.createElement("div",{className:"onePage_logo"},l.a.createElement("img",{src:"../img/vehicles/".concat(e,".jpg"),alt:t.name})),l.a.createElement("div",{className:"onePage_text"},l.a.createElement("p",null,"Name: ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,"Model: ",l.a.createElement("span",null,t.model)),l.a.createElement("p",null,"Manufacturer: ",l.a.createElement("span",null,t.manufacturer)),l.a.createElement("p",null,"Cost in credits: ",l.a.createElement("span",null,t.cost_in_credits)),l.a.createElement("p",null,"Length: ",l.a.createElement("span",null,t.length)),l.a.createElement("p",null,"Crew water: ",l.a.createElement("span",null,t.crew)),l.a.createElement("p",null,"Passengers : ",l.a.createElement("span",null,t.passengers)),l.a.createElement("p",null,"Cargo Capacity: ",l.a.createElement("span",null,t.cargo_capacity)),l.a.createElement("p",null,"Consumables: ",l.a.createElement("span",null,t.consumables)))),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),ne=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"starships",data:[],isLoaded:!1},t.loadPeople=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,e.next=3,M({pathName:a});case 3:n=e.sent,t.setState({data:n,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadPeople()}},{key:"render",value:function(){var e=window.location.pathname.match(/\d+/),a=this.state,t=a.data,n=a.isLoaded;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(X,{name:t.name}),l.a.createElement("div",{className:"onePage"},l.a.createElement("div",{className:"onePage_logo"},l.a.createElement("img",{src:"../img/starships/".concat(e,".jpg"),alt:t.name})),l.a.createElement("div",{className:"onePage_text"},l.a.createElement("p",null,"Name: ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,"Model: ",l.a.createElement("span",null,t.model)),l.a.createElement("p",null,"Manufacturer: ",l.a.createElement("span",null,t.manufacturer)),l.a.createElement("p",null,"Cost in credits: ",l.a.createElement("span",null,t.cost_in_credits)),l.a.createElement("p",null,"Length: ",l.a.createElement("span",null,t.length)),l.a.createElement("p",null,"Crew water: ",l.a.createElement("span",null,t.crew)),l.a.createElement("p",null,"Passengers : ",l.a.createElement("span",null,t.passengers)),l.a.createElement("p",null,"Cargo Capacity: ",l.a.createElement("span",null,t.cargo_capacity)),l.a.createElement("p",null,"Consumables: ",l.a.createElement("span",null,t.consumables)))),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),le=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={pathName:"planets",data:[],isLoaded:!1},t.loadPeople=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.pathName,e.next=3,M({pathName:a});case 3:n=e.sent,t.setState({data:n,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadPeople()}},{key:"render",value:function(){var e=window.location.pathname.match(/\d+/),a=this.state,t=a.data,n=a.isLoaded;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(X,{name:t.name}),l.a.createElement("div",{className:"onePage"},l.a.createElement("div",{className:"onePage_logo"},l.a.createElement("img",{src:"../img/planets/".concat(e,".jpg"),alt:t.name})),l.a.createElement("div",{className:"onePage_text"},l.a.createElement("p",null,"Name: ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,"Diameter: ",l.a.createElement("span",null,t.diameter)),l.a.createElement("p",null,"Climate: ",l.a.createElement("span",null,t.climate)),l.a.createElement("p",null,"Gravity: ",l.a.createElement("span",null,t.gravity)),l.a.createElement("p",null,"Terrain: ",l.a.createElement("span",null,t.terrain)),l.a.createElement("p",null,"Surface water: ",l.a.createElement("span",null,t.surface_water)),l.a.createElement("p",null,"Rotation Period: ",l.a.createElement("span",null,t.rotation_period)),l.a.createElement("p",null,"Orbital Period: ",l.a.createElement("span",null,t.orbital_period)))),l.a.createElement(h,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null)))}}]),a}(l.a.Component),re=t(44);c.a.render(l.a.createElement(re.a,{basename:"/Stars_Wars"},l.a.createElement(function(){return l.a.createElement($.a,{basename:"/Stars_Wars"},l.a.createElement(K.a,null,l.a.createElement(Q.a,{exact:!0,path:"/",component:L}),l.a.createElement(Q.a,{exact:!0,path:"/films",component:H}),l.a.createElement(Q.a,{path:"/films/",component:Z}),l.a.createElement(Q.a,{exact:!0,path:"/planets",component:I}),l.a.createElement(Q.a,{path:"/planets/",component:le}),l.a.createElement(Q.a,{exact:!0,path:"/people",component:z}),l.a.createElement(Q.a,{path:"/people/",component:ee}),l.a.createElement(Q.a,{exact:!0,path:"/species",component:J}),l.a.createElement(Q.a,{path:"/species/",component:ae}),l.a.createElement(Q.a,{exact:!0,path:"/vehicles",component:T}),l.a.createElement(Q.a,{path:"/vehicles/",component:te}),l.a.createElement(Q.a,{exact:!0,path:"/starships",component:Y}),l.a.createElement(Q.a,{path:"/starships/",component:ne}),l.a.createElement(Q.a,{render:q})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.089cb447.chunk.js.map