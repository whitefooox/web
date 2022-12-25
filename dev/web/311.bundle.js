"use strict";(self.webpackChunktarget=self.webpackChunktarget||[]).push([[311],{740:(e,t,n)=>{n.d(t,{Z:()=>a});class s{async auth(e){const t=await fetch("api/user/auth",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(e)});return t.ok?void t.json().then((t=>{this.#e(e.login,t)})):Promise.reject()}async reg(e){const t=await fetch("api/user/reg",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(e)});return t.ok?void t.json().then((t=>{this.#e(e.login,t)})):Promise.reject()}#e(e,t){localStorage.setItem("login",e),localStorage.setItem("token",t)}getLogin(){return localStorage.getItem("login")}getToken(){return localStorage.getItem("token")}}class a{static _auth=null;static _createInstance(){return new s}static createInstance(){return null===a._auth&&(a._auth=a._createInstance()),a._auth}}},311:(e,t,n)=>{n.r(t);var s=n(740);class a{constructor(){this._callbacks=[]}_emit(e){this._callbacks.forEach((t=>t(e)))}subscribe(e){this._callbacks.push(e)}}class o extends a{constructor(){super(),this.auth=s.Z.createInstance()}async search(e){const t=await fetch("api/anime/search/"+e,{method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8",login:this.auth.getLogin(),token:this.auth.getToken()}});t.ok?t.json().then((e=>{this._emit(e)})):console.log("ошибка при получении данных",t.status)}async getSource(e){const t=await fetch("api/anime/source/",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8",login:this.auth.getLogin(),token:this.auth.getToken(),userAgent:window.navigator.userAgent},body:JSON.stringify(e)});return t.ok?t.json():Promise.reject()}}class r{static _anime=null;static _createInstance(){return new o}static createInstance(){return null===r._anime&&(r._anime=r._createInstance()),r._anime}}class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.query=null,this.anime=r.createInstance()}connectedCallback(){this._render()}_render(){this.ownerDocument.defaultView&&(this.shadowRoot.innerHTML='\n        <form class="search">\n            <input placeholder="Введите название аниме..." type="text">\n            <input type=\'button\' value=\'Поиск\'>\n        </form>\n        <style>\n        /* Style the search field */\n        form.search input[type=text] {\n            padding: 10px;\n            font-size: 17px;\n            border: 1px solid grey;\n            /*float: left;*/\n            width: 40%;\n            background: #f1f1f1;\n          }\n          \n          /* Style the submit button */\n          form.search input[type=button] {\n            /*float: left;*/\n            width: 10%;\n            padding: 10px;\n            background: #2196F3;\n            color: white;\n            font-size: 17px;\n            border: 1px solid grey;\n            border-left: none; /* Prevent double borders */\n            cursor: pointer;\n          }\n          \n          form.search input[type=button]:hover {\n            background: #0b7dda;\n          }\n          \n          /* Clear floats */\n          form.search::after {\n            content: "";\n            clear: both;\n            display: table;\n          }\n        </style>\n    ',this.shadowRoot.childNodes[1].childNodes[1].addEventListener("change",(e=>{this._search(e)})))}_search(e){e.stopPropagation(),this.query=e.target.value,this.anime.search(this.query)}}customElements.define("x-search",i);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r.createInstance().subscribe((e=>{this._update(e)}))}connectedCallback(){this._render()}_render(){this.ownerDocument.defaultView&&(this.shadowRoot.innerHTML="\n        <div>\n            <h2></h2>\n            <br>\n            <img>\n        </div>\n    ")}_update(e){const t=this.shadowRoot.childNodes[1],n=t.childNodes[1],s=t.childNodes[5];if(null==e)return n.textContent="Ничего не найдено",void(s.src="");n.textContent=e.name,s.src=e.image}}customElements.define("x-info",c);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.Anime=r.createInstance(),this.Anime.subscribe((e=>{this._update(e)}))}connectedCallback(){this._render()}_render(){}_update(e){if(null==e)return void(this.shadowRoot.innerHTML="");if(!this.ownerDocument.defaultView)return;function t(e,t){t.replaceChildren();for(const n in e){const e=document.createElement("option");e.value=n,e.text=n,t.appendChild(e)}}this.shadowRoot.innerHTML='\n        <div>\n            <select></select>\n            <select></select>\n            <button>Смотреть</button>\n            <br>\n            <iframe allowfullscreen width="720" height="405"></iframe>\n        </div>\n    ';const n=this.shadowRoot.childNodes[1],s=n.childNodes[1],a=n.childNodes[3],o=n.childNodes[5],r=n.childNodes[9];!function(e,t){t.replaceChildren();for(const n in e){const e=document.createElement("option");e.value=n,e.text=n,t.appendChild(e)}}(e.data,s),t(e.data[s.value],a),s.addEventListener("change",(()=>{const n=s.value;t(e.data[n],a)})),o.addEventListener("click",(()=>{const t=e.data[s.value][a.value];this.Anime.getSource(t).then((e=>{r.src=e}))}))}}customElements.define("x-player",h);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._render()}_render(){this.ownerDocument.defaultView&&(this.shadowRoot.innerHTML="\n        <div align='center'>\n            <x-search></x-search>\n            <x-info></x-info>\n            <x-player></x-player>\n        </div>\n    ")}}customElements.define("x-main-page",l)}}]);