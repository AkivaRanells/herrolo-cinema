(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},31:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(12),l=a(4),o=a(5),c=a(7),s=a(6),u=a(8),m=a(9),d=function(e){return function(t){e.forEach(function(e,a){t(function(e,t){return function(a){return a(function(e,t){return{type:"REQUEST_MOVIE",movieTitle:e,index:t}}(e,t)),fetch("https://www.omdbapi.com/?t=".concat(e,"&apikey=").concat("19f0c11f")).then(function(e){return e.json()}).then(function(n){return a(function(e,t,a){return{type:"RECEIVE_MOVIE",movieTitle:e,movie:a,index:t}}(e,t,n))})}}(e,a))})}},v=function(e,t){return{type:"EDIT_MOVIE",index:t,movie:e}},h=function(e){return{type:"DELETE_MOVIE",index:e}},p=function(e,t){return{type:"ADD_MOVIE",movie:e,index:t}},g=a(2),f=a(27),E=a(13),b=a.n(E),O=a(14),x=a(15),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(){var e=Object(x.a)(b.a.mark(function e(t){var n,i,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,i=n.value,r=n.name,e.next=5,a.setState(Object(O.a)({},r,i));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.submitForm=function(e){if(e.preventDefault(),a.areAllInputsValidated()){var t=a.state,n=t.title,i=t.director,r=t.runtime,l=t.genre,o=t.date,c={Director:i,Genre:l,Image:a.props.movie.Image,Runtime:r,Title:n,Year:o,id:a.props.movie.id,status:!0},s=a.props,u=s.dispatch,m=s.movies.findIndex(function(e){return e.id===c.id});u(v(c,m)),a.toggle()}},a.areAllInputsValidated=function(){var e=a.state.validate;for(var t in e)if("has-success"!==e[t]&&""!==e[t])return!1;return!0},a.resetProperties=function(){a.setState(a.initialState)},a.toggle=function(){a.setState({modal:!a.state.modal})},a.initialState={modal:!1,title:a.props.movie.Title,director:a.props.movie.Director,runtime:a.props.movie.Runtime,date:"01-01-".concat(a.props.movie.Year),genre:a.props.movie.Genre,validate:{titleState:"",runtimeState:"",genreState:"",directorState:"",dateState:""}},a.state=Object(f.a)({},a.initialState),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validateInputs",value:function(e,t,a){var n=this.state.validate;t.test(e.target.value)?n[a]="has-success":n[a]="has-danger",this.setState({validate:n})}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.director,r=t.runtime,l=t.genre,o=t.date,c=/^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;return i.a.createElement("div",null,i.a.createElement(g.a,{outline:!0,color:"danger",onClick:this.toggle},"Edit Movie"),i.a.createElement(g.u,{isOpen:this.state.modal,toggle:this.toggle},i.a.createElement(g.x,{toggle:this.toggle},"Edit Movie"),i.a.createElement(g.p,{className:"form",onSubmit:function(t){return e.submitForm(t)}},i.a.createElement(g.v,null,i.a.createElement(g.y,{form:!0},i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieTitle"},"Title"),i.a.createElement(g.s,{type:"text",name:"title",id:"movieTitle",value:a,valid:"has-success"===this.state.validate.titleState,invalid:"has-danger"===this.state.validate.titleState,onChange:function(t){e.validateInputs(t,/[A-Za-z]/g,"titleState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your title is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your title contains no letters and is therefore invalid."))),i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieRuntime"},"Runtime"),i.a.createElement(g.s,{type:"text",name:"runtime",id:"movieRuntime",value:r,valid:"has-success"===this.state.validate.runtimeState,invalid:"has-danger"===this.state.validate.runtimeState,onChange:function(t){e.validateInputs(t,/^\d{1,3}\smin$/,"runtimeState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your runtime is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your runtime must be a number followed by a space and the letters 'min'.")))),i.a.createElement(g.y,{form:!0},i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieDirector"},"Director"),i.a.createElement(g.s,{type:"text",name:"director",id:"movieDirector",value:n,valid:"has-success"===this.state.validate.directorState,invalid:"has-danger"===this.state.validate.directorState,onChange:function(t){e.validateInputs(t,/[A-Za-z]/g,"directorState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your director is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your director contains no letters and is therefore invalid."))),i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieGenre"},"Genre"),i.a.createElement(g.s,{type:"text",name:"genre",id:"movieGenre",value:l,valid:"has-success"===this.state.validate.genreState,invalid:"has-danger"===this.state.validate.genreState,onChange:function(t){e.validateInputs(t,/[A-Za-z]/g,"genreState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your genre is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your genre contains no letters and is therefore invalid.")))),i.a.createElement(g.y,{form:!0},i.a.createElement(g.n,{md:12},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieDate"},"Released"),i.a.createElement(g.s,{type:"text",name:"date",id:"movieDate",defaultValue:o,valid:"has-success"===this.state.validate.movieState,invalid:"has-danger"===this.state.validate.movieState,onChange:function(t){e.validateInputs(t,c,"movieState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your date is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your date needs to be a valid date between 01-01-1900 and 12-12-2099 formatted like dd-mm-yyyy."))))),i.a.createElement(g.w,null,i.a.createElement(g.a,{outline:!0,color:"danger",type:"submitForm",onClick:this.submitForm},"Save Changes")," ",i.a.createElement(g.a,{outline:!0,color:"danger",onClick:this.resetProperties},"Cancel")))))}}]),t}(n.Component),y=Object(m.b)(function(e){return{movies:e.movies}})(S),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).deleteThisMovie=function(){var e=a.props,t=e.dispatch,n=e.movies.findIndex(function(e){return e.id===a.props.id});t(h(n)),a.toggle()},a.toggle=function(){a.setState({modal:!a.state.modal})},a.state={modal:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,{outline:!0,color:"danger",onClick:this.toggle},"Delete Movie"),i.a.createElement(g.u,{isOpen:this.state.modal,toggle:this.toggle},i.a.createElement(g.x,{toggle:this.toggle,className:"delete-modal"},"Delete Movie"),i.a.createElement(g.v,{className:"delete-modal"},"Are you sure you would like to delete this movie? This action cannot be undone unless you are good friends with the site admin!"),i.a.createElement(g.w,null,i.a.createElement(g.a,{outline:!0,color:"danger",onClick:this.toggle},"Cancel This Action")," ",i.a.createElement(g.a,{outline:!0,color:"danger",onClick:this.deleteThisMovie},"Proceed Anyway And Delete Movie"))))}}]),t}(n.Component),C=Object(m.b)(function(e){return{movies:e.movies}})(j),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).displayTitle=function(e){return e.toLowerCase().replace(/(^|[^a-z])[a-z]/g,a.upperCase).replace(/([^\sa-zA-Z])/g,"")},a.upperCase=function(e){return e.toUpperCase()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movies.find(function(t){return t.id===e.props.id});return i.a.createElement(g.b,null,i.a.createElement(g.e,{top:!0,width:"100%",src:t.Image||"https://i.imgur.com/coUQtBy.jpg",alt:"Card image cap"}),i.a.createElement(g.c,null,i.a.createElement(g.h,null,i.a.createElement("span",null,"Title:")," ",this.displayTitle(t.Title)),i.a.createElement(g.f,null,i.a.createElement("span",null,"Released:")," ",t.Year),i.a.createElement(g.g,null," ",i.a.createElement("span",null," Genre:")," ",t.Genre,i.a.createElement("br",null),"  ",i.a.createElement("span",null," Runtime:")," ",t.Runtime,i.a.createElement("br",null)," ",i.a.createElement("span",null," Director:")," ",t.Director),i.a.createElement(y,{movie:t,key:t.id}),i.a.createElement(C,{id:t.id})))}}]),t}(n.Component),T=Object(m.b)(function(e){return{movies:e.movies}})(I),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){var e=a.props,t=e.dispatch,n=e.movies;t(d(n))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(g.o,null,i.a.createElement(g.d,null,this.props.movies.filter(function(e){return e.status}).map(function(e){return i.a.createElement(T,{key:e.id,id:e.id})})))}}]),t}(n.Component),D=Object(m.b)(function(e){return{movies:e.movies}})(k),w=(a(24),[{src:"https://i.imgur.com/coUQtBy.jpg",altText:""},{src:"https://throughthepanes.files.wordpress.com/2012/10/netflix-movie-info.png",altText:""},{src:"https://i.imgur.com/JrSiM.jpg",altText:""}]),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).onExiting=function(){a.animating=!0},a.onExited=function(){a.animating=!1},a.next=function(){if(!a.animating){var e=a.state.activeIndex===w.length-1?0:a.state.activeIndex+1;a.setState({activeIndex:e})}},a.previous=function(){if(!a.animating){var e=0===a.state.activeIndex?w.length-1:a.state.activeIndex-1;a.setState({activeIndex:e})}},a.goToIndex=function(e){a.animating||a.setState({activeIndex:e})},a.state={activeIndex:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=w.map(function(t){return i.a.createElement(g.m,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},i.a.createElement("img",{className:"d-block w-100",src:t.src,alt:t.altText}),i.a.createElement(g.j,{captionText:"",captionHeader:t.caption}))});return i.a.createElement(g.i,{activeIndex:t,next:this.next,previous:this.previous},i.a.createElement(g.l,{items:w,activeIndex:t,onClickHandler:this.goToIndex}),a,i.a.createElement(g.k,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(g.k,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).validateInputs=function(e,t,n){var i=a.state.validate;t.test(e.target.value)?i[n]="has-success":i[n]="has-danger",a.setState({validate:i})},a.validateTitle=function(e,t,n){if(a.noDuplicateTitle(e.target.value))a.validateInputs(e,t,n);else{var i=a.state.validate;i[n]="has-danger",a.setState({validate:i})}},a.handleChange=function(){var e=Object(x.a)(b.a.mark(function e(t){var n,i,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,i=n.value,r=n.name,e.next=5,a.setState(Object(O.a)({},r,i));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.submitForm=function(e){if(e.preventDefault(),a.areAllInputsValidated()){var t=a.state,n=t.title,i=t.director,r=t.runtime,l={Director:i,Genre:t.genre,Poster:"https://i.imgur.com/coUQtBy.jpg",Runtime:r,Title:n,Year:t.date,status:!1},o=a.props,c=o.dispatch,s=o.movies.length;c(p(l,s)),a.resetProperties(),a.toggle()}},a.noDuplicateTitle=function(e){return-1===a.props.movies.findIndex(function(t){return t.Title===e})},a.areAllInputsValidated=function(){var e=a.state.validate;for(var t in e)if("has-success"!==e[t])return!1;return!0},a.toggle=function(){a.setState({modal:!a.state.modal})},a.resetProperties=Object(x.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState(JSON.parse(JSON.stringify(a.initialState)));case 2:case"end":return e.stop()}},e,this)})),a.initialState={modal:!1,title:"",director:"",runtime:"",date:"",genre:"",validate:{titleState:"",runtimeState:"",genreState:"",directorState:"",dateState:""}},a.state=JSON.parse(JSON.stringify(a.initialState)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.director,r=t.runtime,l=t.genre,o=t.date,c=/^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;return i.a.createElement("div",null,i.a.createElement(g.a,{outline:!0,color:"danger",size:"lg",block:!0,onClick:this.toggle},"Add Movie"),i.a.createElement(g.u,{isOpen:this.state.modal,toggle:this.toggle},i.a.createElement(g.x,{toggle:this.toggle},"Add Movie"),i.a.createElement(g.p,{className:"form",onSubmit:function(t){return e.submitForm(t)}},i.a.createElement(g.v,null,i.a.createElement(g.y,{form:!0},i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieTitle"},"Title"),i.a.createElement(g.s,{type:"text",name:"title",id:"movieTitle",value:a,valid:"has-success"===this.state.validate.titleState,invalid:"has-danger"===this.state.validate.titleState,onChange:function(t){e.validateTitle(t,/[A-Za-z]/g,"titleState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your title is in the correct format."),i.a.createElement(g.q,{invalid:!0},"A valid title must: (1) Not be the exact same letters as an already existing title. (2) Only letters or numbers."))),i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieRuntime"},"Runtime"),i.a.createElement(g.s,{type:"text",name:"runtime",id:"movieRuntime",value:r,valid:"has-success"===this.state.validate.runtimeState,invalid:"has-danger"===this.state.validate.runtimeState,onChange:function(t){e.validateInputs(t,/^\d{1,3}\smin$/,"runtimeState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your runtime is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your runtime must be a number followed by a space and the letters 'min'.")))),i.a.createElement(g.y,{form:!0},i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieDirector"},"Director"),i.a.createElement(g.s,{type:"text",name:"director",id:"movieDirector",value:n,valid:"has-success"===this.state.validate.directorState,invalid:"has-danger"===this.state.validate.directorState,onChange:function(t){e.validateInputs(t,/[A-Za-z]/g,"directorState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your director is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your director contains no letters and is therefore invalid."))),i.a.createElement(g.n,{md:6},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieGenre"},"Genre"),i.a.createElement(g.s,{type:"text",name:"genre",id:"movieGenre",value:l,valid:"has-success"===this.state.validate.genreState,invalid:"has-danger"===this.state.validate.genreState,onChange:function(t){e.validateInputs(t,/[A-Za-z]/g,"genreState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your genre is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your genre contains no letters and is therefore invalid.")))),i.a.createElement(g.y,{form:!0},i.a.createElement(g.n,{md:12},i.a.createElement(g.r,null,i.a.createElement(g.t,{for:"movieDate"},"Released"),i.a.createElement(g.s,{type:"text",name:"date",id:"movieDate",value:o,valid:"has-success"===this.state.validate.dateState,invalid:"has-danger"===this.state.validate.dateState,onChange:function(t){e.validateInputs(t,c,"dateState"),e.handleChange(t)}}),i.a.createElement(g.q,{valid:!0},"Your date is in the correct format."),i.a.createElement(g.q,{invalid:!0},"Your date needs to be a valid date between 01-01-1900 and 12-12-2099 formatted like dd-mm-yyyy."))))),i.a.createElement(g.w,null,i.a.createElement(g.a,{outline:!0,color:"danger",type:"submitForm",onClick:this.submitForm},"Save Changes")," ",i.a.createElement(g.a,{outline:!0,color:"danger",onClick:this.resetProperties},"Cancel")))))}}]),t}(n.Component),A=Object(m.b)(function(e){return{movies:e.movies}})(R),M=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Y,null),i.a.createElement(A,null),i.a.createElement(D,null))}}]),t}(n.Component),q=a(11),V=a(29),G=(a(43),a(10)),N=0,z={movies:["a","b","c"]},P=Object(q.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z.movies,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z.action;switch(t.type){case"RECEIVE_MOVIE":var a=t.movie,n=a.Title,i=a.Year,r=a.Runtime,l=a.Genre,o=a.Director,c=a.Poster,s={Title:n,Year:i,Runtime:r,Genre:l,Director:o,id:N++,Image:c,status:!0};return Object(G.a)(e.slice(0,t.index)).concat([s],Object(G.a)(e.slice(t.index+1)));case"REQUEST_MOVIE":var u={Title:t.movieTitle,index:t.index,status:!1};return Object(G.a)(e.slice(0,t.index)).concat([u],Object(G.a)(e.slice(t.index+1)));case"EDIT_MOVIE":return Object(G.a)(e.slice(0,t.index)).concat([t.movie],Object(G.a)(e.slice(t.index+1)));case"DELETE_MOVIE":return Object(G.a)(e.slice(0,t.index)).concat(Object(G.a)(e.slice(t.index+1)));case"ADD_MOVIE":var m=t.movie,d={Title:m.Title,Year:m.Year,Runtime:m.Runtime,Genre:m.Genre,Director:m.Director,id:N++,Image:m.Poster,status:!0};return Object(G.a)(e).concat([d]);default:return e}}}),_=a(30),F=(a(44),[V.a]);var J=Object(q.createStore)(P,Object(_.composeWithDevTools)(q.applyMiddleware.apply(void 0,F)));Object(r.render)(i.a.createElement(m.a,{store:J},i.a.createElement(M,null)),document.getElementById("root"))}},[[31,2,1]]]);
//# sourceMappingURL=main.f22b17f9.chunk.js.map