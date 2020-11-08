(this.webpackJsonpardoq_proj=this.webpackJsonpardoq_proj||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},57:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),a=s.n(c),i=s(28),r=s.n(i),l=s(8),o=s(2),j=(s(37),s(31)),h=s(11),d=s(12),u=s(14),b=s(13),O=(s(38),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).handleAddNumbers=function(e){e.preventDefault(),n.setState({input:"",list:[].concat(Object(j.a)(n.state.list),[n.state.input])})},n.handleInputChange=function(e){n.setState({input:e.target.value})},n.handleReset=function(){n.setState({list:[],input:"",total:null,error:!1})},n.handleCalculation=function(){var e=n.state.list;if(e.length>=3){var t=e.slice().sort((function(e,t){return e-t})),s=t.slice(Math.max(t.length-3,0)),c=s.reduce((function(e,t){return e*+t}),1);n.setState({total:c,error:!1,highestThree:s})}else n.setState({error:!0})},n.state={list:[],input:"",total:null,error:!1},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.list,s=e.input,c=e.total,a=e.error,i=e.highestThree;return Object(n.jsxs)("article",{className:"white-container calculator",children:[Object(n.jsx)("h2",{children:"Max Product Calculator"}),Object(n.jsxs)("section",{children:[Object(n.jsx)("p",{children:"A function that, given a list of integers, returns the highest product between three of those numbers."}),Object(n.jsxs)("p",{children:["For example, given the list: ",Object(n.jsx)("strong",{children:"[1, 10, 2, 6, 5, 3]"})," ","the highest product would be: ",Object(n.jsx)("strong",{children:"10 * 6 * 5 = 300"})]}),t?Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))}):null,c?Object(n.jsxs)("h4",{children:["The highest product is: ",c,", a product of [",i.join(" * "),"]"]}):null,Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{htmlFor:"list",children:"Create a list of numbers, by entering numbers below"}),Object(n.jsx)("input",{onChange:this.handleInputChange,type:"number",name:"list",id:"list",value:s,placeholder:"10"}),Object(n.jsx)("button",{className:"button",onClick:this.handleAddNumbers,disabled:!s.length,children:"Add to the list"})]}),Object(n.jsx)("p",{children:"Once you've added 3 or more numbers, click the calculate button!"}),Object(n.jsx)("button",{className:"button",onClick:this.handleCalculation,disabled:t.length>=3?"":"disabled",children:"Calculate!"}),a?Object(n.jsx)("p",{children:"Please enter at least 3 numbers before using the calculate button"}):null,Object(n.jsx)("button",{className:"button",disabled:t.length?"":"disabled",onClick:this.handleReset,children:"Reset"})]})]})}}]),s}(a.a.Component)),x=function(e){var t=e.station,s=t&&!t.is_returning?"accepting returns":"",c=t&&!t.is_renting?"renting bicycles":"";return Object(n.jsxs)("section",{className:"panel",children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("i",{className:"fas fa-bicycle"}),"Bike Availability"]}),t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Bikes:"})," ",t.num_bikes_available]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Docks:"})," ",t.num_docks_available]}),c||s?Object(n.jsxs)("p",{className:"warning",children:["Please note: this station is not currently ",c," ",c&&s?"or ":"",s]}):null]}):Object(n.jsx)("p",{className:"warning",children:"We're sorry but there is no bike availability information for this station. Please try again later"})]})},p=(s(39),s(29)),m=s.n(p).a.create({baseURL:"https://gbfs.urbansharing.com/oslobysykkel.no/"}),f=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).getStations=function(){m.get("station_information.json").then((function(e){n.setState({results:e.data.data.stations,searchedResults:e.data.data.stations})})).catch((function(e){return console.log(e),n.setState({results:[],searchedResults:[]}),null}))},n.handleStationDetails=function(){m.get("station_status.json").then((function(e){n.setState({details:e.data.data.stations})})).catch((function(e){return console.log(e),n.setState({message:"We're sorry but something wrong and no stations could be found. Please try again later",details:[]}),null}))},n.handleSearch=function(e){var t=n.state.results.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.address.toLowerCase().includes(e.target.value.toLowerCase())}));n.setState({search:e.target.value,searchedResults:t})},n.state={results:[],searchedResults:[],activeStation:[],search:"",message:"loading"},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getStations(),this.handleStationDetails()}},{key:"render",value:function(){var e=this.state,t=e.details,s=e.search,c=e.searchedResults,a=e.message;return Object(n.jsx)("main",{children:Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Stations"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{children:"Find a station:"}),Object(n.jsx)("input",{type:"search",placeholder:"Type a station name or address...",onChange:this.handleSearch,value:s})]}),Object(n.jsx)("div",{className:"card-container",children:c&&c.length?c.map((function(e,s){var c=t?t.filter((function(t){return t.station_id===e.station_id}))[0]:[];return Object(n.jsxs)("article",{className:"card",children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsx)("hr",{}),Object(n.jsxs)("section",{className:"details",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Address: "}),e.address]}),Object(n.jsx)("p",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/search/?api=1&query=".concat(e.lat,",").concat(e.lon),children:["See on map ",Object(n.jsx)("i",{className:"fas fa-map-marker-alt"})]})})]}),Object(n.jsx)(x,{station:c})]},s)})):Object(n.jsx)("p",{className:"white-container",children:a})})]})})}}]),s}(a.a.Component),g=(s(57),s.p+"static/media/cat.09d6aee1.jpg"),v=function(){return Object(n.jsxs)("section",{className:"white-container fourohfour",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Uh oh!"}),Object(n.jsx)("p",{children:"We're sorry but something went wrong!"}),Object(n.jsxs)("p",{children:["Feel like doing some math to release your frustrations? Head to the"," ",Object(n.jsx)(l.b,{to:"/calculator",children:"max product calculator"})," page."]}),Object(n.jsxs)("p",{children:["Maybe bikes make you smile - click ",Object(n.jsx)(l.b,{to:"/oslobikes",children:"here"})," ","to find out about the ones in Oslo!"]}),Object(n.jsxs)("p",{children:["If you've totally had it, I recommend you click"," ",Object(n.jsx)("a",{href:"https://giphy.com/explore/cat",children:"this."})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{alt:"shower cat",src:g})})]})},y=function(){return Object(n.jsxs)("section",{className:"white-container",children:[Object(n.jsx)("h3",{children:"Thanks for the oppurtunity to work on this task!"}),Object(n.jsx)("p",{children:"A little explanation on what's before you:"}),Object(n.jsxs)("p",{children:["Libraries used:",Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Axios for API requests"}),Object(n.jsx)("li",{children:"ReactRouter for in-app navigation"}),Object(n.jsx)("li",{children:"Font Awesome for some iconisation"}),Object(n.jsx)("li",{children:"Google fonts"})]})]}),Object(n.jsx)("p",{children:"Max product calculator provides some user input error handling on the input form:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Number type enforced on input"}),Object(n.jsx)("li",{children:"Cannot submit an empty input"}),Object(n.jsx)("li",{children:"Minimum of 3 numbers required before calculation can be done"}),Object(n.jsx)("li",{children:"Cannot reset an empty list"})]}),Object(n.jsx)("p",{children:"Oslo Bikes application:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Added a filter search bar due to the high amount of stations"}),Object(n.jsx)("li",{children:"Used the longitude and latitude to create a link to google maps"}),Object(n.jsx)("li",{children:"Warning appears if the stations aren't renting and/or recieving bikes"}),Object(n.jsx)("li",{children:"Error handling on data requests"})]})]})},k=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:Object(n.jsx)(l.b,{to:"/",children:"Ardoq Project"})}),Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"menu",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(l.c,{activeClassName:"active",to:"/calculator",children:[Object(n.jsx)("i",{className:"fas fa-calculator"}),Object(n.jsx)("span",{children:"Max Product Calculator"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(l.c,{activeClassName:"active",to:"/oslobikes",children:[Object(n.jsx)("i",{className:"fas fa-bicycle"}),Object(n.jsx)("span",{children:"Oslo Bikes"})]})})]})})]}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(y,{})}}),Object(n.jsx)(o.a,{path:"/calculator",exact:!0,render:function(){return Object(n.jsx)(O,{})}}),Object(n.jsx)(o.a,{path:"/oslobikes",exact:!0,render:function(){return Object(n.jsx)(f,{})}}),Object(n.jsx)(v,{})]})]})};r.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.79d49205.chunk.js.map