(window["webpackJsonpexo-tictactrip-react"]=window["webpackJsonpexo-tictactrip-react"]||[]).push([[0],{25:function(e,t,r){e.exports=r(57)},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(9),c=r.n(i),u=r(5),s=(r(35),r(36),r(23)),o=(r(37),r(38),function(e){var t=e.onChange,r=e.type,n=e.value,i=e.autoComplete,c=e.placeholder,u=e.onFocus,s=e.className;return a.a.createElement("input",{onChange:t,type:r,value:n,autoComplete:i,placeholder:c,onFocus:u,className:s})}),l=(r(39),r(24)),p=function(e){var t=e.updateInputStartValue,r=e.localName,n=e.uniqueName,i=e.className,c=e.cityId;return a.a.createElement("li",{className:i,onClick:function(e,r){return function(n){t(n.currentTarget.textContent,e,r)}}(n,c)},a.a.createElement(l.a,{className:"search__marker"})," ",r)},d="UPDATE_INPUT_START_VALUE",f="ON_CHANGE_INPUT_START",v="RECEIVED_DATA_ON_CHANGE_INPUT_START",h="ON_CHANGE_INPUT_ARRIVED",g="RECEIVED_DATA_ON_CHANGE_INPUT_ARRIVED",m="FOCUS_INPUT_START",y="FOCUS_INPUT_ARRIVED",_="GET_POPULAR_CITIES",O="RECEIVED_DATA_POPULAR_CITIES",A=function(e){return{type:v,data:e}},I=function(e){return{type:g,data:e}},S=function(e){return{type:O,data:e}},E=function(e,t,r){return{type:d,city:e,uniqueName:t,cityId:r}},C=function(e){return{type:f,value:e}},b=function(e){return{type:h,value:e}},N=function(e){return{type:m,heightArrow:e}},w=function(e){return{type:y,heightArrow:e}},j=function(){return{type:_}},P=Object(u.b)(null,(function(e){return{updateInputStartValue:function(t,r,n){e(E(t,r,n))}}}))(p),T=function(e){var t=e.inputStartValue,r=e.inputArrivedValue,i=e.suggestionsCities,c=e.onChangeInputStart,u=e.onChangeInputArrived,l=e.focusInputStart,p=e.focusInputArrived,d=e.heightArrow,f=e.inputStartIsFocus,v=e.searchIsActive,h=e.getPopularCities;Object(n.useEffect)((function(){h()}),[h]);var g=function(e){e.currentTarget.parentNode.parentNode.childNodes.forEach((function(e){var t=e.children[0];""===t.value&&t.classList.remove("search__input--active")})),e.currentTarget.classList.add("search__input--active")},m=Object(s.useMediaQuery)({query:"(min-width: 992px)"});return a.a.createElement("div",{className:"search"},a.a.createElement("div",{className:"search__container"},a.a.createElement("div",{className:"search__title"}," Quel est votre itin\xe9raire ? "),a.a.createElement("form",null,a.a.createElement("div",{className:"search__section"},a.a.createElement(o,{onChange:function(e){var t=e.currentTarget.value;c(t)},type:"text",value:t,autoComplete:"off",placeholder:"Saississez une ville de d\xe9part",onFocus:function(e){g(e),l(e.currentTarget.offsetTop)},className:"search__input"})),a.a.createElement("div",{className:"search__section"},a.a.createElement(o,{onChange:function(e){var t=e.currentTarget.value;u(t)},type:"text",value:r,autoComplete:"off",placeholder:"Saississez une ville d'arriv\xe9",onFocus:function(e){g(e),p(e.currentTarget.offsetTop)},className:"search__input"})))),a.a.createElement("div",{className:"search__suggestion"},0===i.length&&v&&a.a.createElement("div",null," Aucune ville trouv\xe9e "),i.length>0&&a.a.createElement(a.a.Fragment,null,m&&a.a.createElement("div",{className:"search__arrow",style:{top:d}}),a.a.createElement("div",{className:"search__title"}," Choisissez une gare ",f?"de d\xe9part":"d'arriv\xe9e"," ? "),a.a.createElement("ul",{className:"search__list"},i.map((function(e,t){var r=e.unique_name,n=e.local_name,i=e.city_id,c=e.selected;return a.a.createElement(P,{key:"".concat(i,"-index:").concat(t),localName:n,uniqueName:r,cityId:i,className:c?"search__city search__city--selected":"search__city"})}))))))},V=Object(u.b)((function(e){return{inputStartValue:e.inputStartValue,inputArrivedValue:e.inputArrivedValue,suggestionsCities:e.suggestionsCities,suggestionPopularCities:e.suggestionPopularCities,heightArrow:e.heightArrow,inputStartIsFocus:e.inputStartIsFocus,searchIsActive:e.searchIsActive}}),(function(e){return{onChangeInputStart:function(t){e(C(t))},onChangeInputArrived:function(t){e(b(t))},focusInputStart:function(t){e(N(t))},focusInputArrived:function(t){e(w(t))},getPopularCities:function(){e(j())}}}))(T),D=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=r(6),R=r(7),U=r(4);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(r,!0).forEach((function(t){Object(U.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e){return e.map((function(e,t){return k({},e,0===t?{selected:!0}:{selected:!1})}))},L=function(e,t){return e.map((function(e){return e.city_id===t.cityStartId?k({},e,{selected:!0}):k({},e,{selected:!1})}))},G=function(e,t){return e.map((function(e){return e.city_id===t.cityArrivedId?k({},e,{selected:!0}):k({},e,{selected:!1})}))};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach((function(t){Object(U.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={suggestionsCities:[],popularCites:[],resultSearchCitiesStart:[],resultSearchCitiesArrived:[],inputStartValue:"",inputArrivedValue:"",inputStartIsFocus:!1,inputArrivedIsFocus:!1,uniqueName:"",cityStartId:"",cityArrivedId:"",heightArrow:0,searchIsActive:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return X({},e,{popularCites:Object(R.a)(t.data)});case d:return X({},e,{inputStartValue:e.inputStartIsFocus?t.city:e.inputStartValue,inputArrivedValue:e.inputArrivedIsFocus?t.city:e.inputArrivedValue,resultSearchCitiesStart:e.inputStartIsFocus?e.suggestionsCities:e.resultSearchCitiesStart,resultSearchCitiesArrived:e.inputArrivedIsFocus?e.suggestionsCities:e.resultSearchCitiesArrived,uniqueName:e.inputStartIsFocus?t.uniqueName:"",suggestionsCities:e.suggestionsCities.map((function(e){return e.city_id===t.cityId?X({},e,{selected:!0}):X({},e,{selected:!1})})),cityStartId:e.inputStartIsFocus?t.cityId:e.cityStartId,cityArrivedId:e.inputArrivedIsFocus?t.cityId:e.cityArrivedId});case f:return X({},e,{inputStartValue:t.value,uniqueName:"",cityStartId:""});case v:return X({},e,{suggestionsCities:Object(R.a)(t.data),resultSearchCitiesStart:Object(R.a)(t.data)});case h:return X({},e,{inputArrivedValue:t.value,cityArrivedId:""});case g:return X({},e,{suggestionsCities:Object(R.a)(t.data),resultSearchCitiesArrived:Object(R.a)(t.data)});case m:return X({},e,{inputStartIsFocus:!0,inputArrivedIsFocus:!1,suggestionsCities:""!==e.inputStartValue?L(e.resultSearchCitiesStart,e):e.popularCites,heightArrow:t.heightArrow,searchIsActive:!0});case y:return X({},e,{inputArrivedIsFocus:!0,inputStartIsFocus:!1,suggestionsCities:""!==e.inputStartValue&""===e.inputArrivedValue?t.updateData:""!==e.inputArrivedValue?G(e.resultSearchCitiesArrived,e):e.popularCites,heightArrow:t.heightArrow,searchIsActive:!0});default:return e}},J=r(8),Q=r.n(J);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var M=function(e){return function(t){return function(r){switch(r.type){case _:return t(r),Q.a.get("https://api.tictactrip.eu/cities/popular/5").then((function(t){var r=t.data,n=x(r);e.dispatch(S(n))}));case f:return t(r),Q.a.get("https://api.tictactrip.eu/cities/autocomplete/?q=".concat(r.value)).then((function(t){var r=t.data,n=x(r);e.dispatch(A(n))}));case h:return t(r),Q.a.get("https://api.tictactrip.eu/cities/autocomplete/?q=".concat(r.value)).then((function(t){var r=t.data,n=x(r);e.dispatch(I(n))}));case y:var n=e.getState(),a=n.inputStartValue,i=n.inputArrivedValue,c=n.uniqueName,u=""!==c?c:a;return""===a&&""===i||""!==i&&""!==a||""===u?void t(r):Q.a.get("https://api.tictactrip.eu/cities/popular/from/".concat(u.toLowerCase(),"/5")).then((function(e){var n=e.data,a=x(n);t(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(r,!0).forEach((function(t){Object(U.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{updateData:a}))}));default:return t(r)}}}},$=Object(F.a)(M),K=(Object(F.c)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Object(F.d)(B,$)),Y=a.a.createElement(u.a,{store:K},a.a.createElement(D,null));c.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.16e3d27b.chunk.js.map