"use strict";(self.webpackChunktarget=self.webpackChunktarget||[]).push([[566],{740:(n,e,t)=>{t.d(e,{Z:()=>a});class o{async auth(n){const e=await fetch("api/user/auth",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)});return e.ok?void e.json().then((e=>{this.#n(n.login,e)})):Promise.reject()}async reg(n){const e=await fetch("api/user/reg",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(n)});return e.ok?void e.json().then((e=>{this.#n(n.login,e)})):Promise.reject()}#n(n,e){localStorage.setItem("login",n),localStorage.setItem("token",e)}getLogin(){return localStorage.getItem("login")}getToken(){return localStorage.getItem("token")}}class a{static _auth=null;static _createInstance(){return new o}static createInstance(){return null===a._auth&&(a._auth=a._createInstance()),a._auth}}},566:(n,e,t)=>{t.r(e);var o=t(778),a=t(740);class s{login;password;email}class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.login=null,this.password=null,this.email=null}connectedCallback(){this._render()}_render(){if(!this.ownerDocument.defaultView)return;this.shadowRoot.innerHTML='\n    <div class="main">  \t\n        <input type="checkbox" id="chk" aria-hidden="true">\n    \n            <div class="signup">\n                <div>\n                    <label for="chk" aria-hidden="true">Sign up</label>\n                    <input type="text" placeholder="Login">\n                    <input type="email" placeholder="Email">\n                    <input type="password" placeholder="Password">\n                    <button>Sign up</button>\n                </div>\n            </div>\n    \n            <div class="login">\n                <div>\n                    <label for="chk" aria-hidden="true">Login</label>\n                    <input type="text" placeholder="Login">\n                    <input type="password" placeholder="Password">\n                    <button>Login</button>\n                </div>\n            </div>\n    </div>\n    <style>\n    .main{\n        width: 350px;\n        height: 500px;\n        background: red;\n        overflow: hidden;\n        background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;\n        border-radius: 10px;\n        box-shadow: 5px 20px 50px #000;\n    }\n    #chk{\n        display: none;\n    }\n    .signup{\n        position: relative;\n        width:100%;\n        height: 100%;\n    }\n    label{\n        color: #fff;\n        font-size: 2.3em;\n        justify-content: center;\n        display: flex;\n        margin: 60px;\n        font-weight: bold;\n        cursor: pointer;\n        transition: .5s ease-in-out;\n    }\n    input{\n        width: 60%;\n        height: 20px;\n        background: #e0dede;\n        justify-content: center;\n        display: flex;\n        margin: 20px auto;\n        padding: 10px;\n        border: none;\n        outline: none;\n        border-radius: 5px;\n    }\n    button{\n        width: 60%;\n        height: 40px;\n        margin: 10px auto;\n        justify-content: center;\n        display: block;\n        color: #fff;\n        background: #573b8a;\n        font-size: 1em;\n        font-weight: bold;\n        margin-top: 20px;\n        outline: none;\n        border: none;\n        border-radius: 5px;\n        transition: .2s ease-in;\n        cursor: pointer;\n    }\n    button:hover{\n        background: #6d44b8;\n    }\n    .login{\n        height: 460px;\n        background: #eee;\n        border-radius: 60% / 10%;\n        transform: translateY(-180px);\n        transition: .8s ease-in-out;\n    }\n    .login label{\n        color: #573b8a;\n        transform: scale(.6);\n    }\n    \n    #chk:checked ~ .login{\n        transform: translateY(-500px);\n    }\n    #chk:checked ~ .login label{\n        transform: scale(1);\t\n    }\n    #chk:checked ~ .signup label{\n        transform: scale(.6);\n    }    \n    </style>\n    ';const n=this.shadowRoot.childNodes[1].childNodes[3].childNodes[1],e=n.childNodes[3],t=n.childNodes[5],i=n.childNodes[7],r=n.childNodes[9];e.addEventListener("change",(n=>{n.stopPropagation(),this.login=n.target.value})),t.addEventListener("change",(n=>{n.stopPropagation(),this.email=n.target.value})),i.addEventListener("change",(n=>{n.stopPropagation(),this.password=n.target.value})),r.addEventListener("click",(n=>{n.stopPropagation();const e=o.RouterFactory.createInstance(),t=a.Z.createInstance(),i=new s;i.login=this.login,i.password=this.password,i.email=this.email,t.reg(i).then((()=>{e.go("main")})).catch((()=>{console.log("error")}))}));const c=this.shadowRoot.childNodes[1].childNodes[5].childNodes[1],d=c.childNodes[3],l=c.childNodes[5],h=c.childNodes[7];d.addEventListener("change",(n=>{n.stopPropagation(),this.login=n.target.value})),l.addEventListener("change",(n=>{n.stopPropagation(),this.password=n.target.value})),h.addEventListener("click",(n=>{n.stopPropagation();const e=o.RouterFactory.createInstance(),t=a.Z.createInstance(),i=new s;i.login=this.login,i.password=this.password,t.auth(i).then((()=>{e.go("main")})).catch((()=>{console.log("error")}))}))}}customElements.define("x-auth",i);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._render()}_render(){this.ownerDocument.defaultView&&(this.shadowRoot.innerHTML="\n        <x-auth></x-auth>\n        <style>\n        :host {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            font-family: 'Jost', sans-serif;\n            background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);\n        }\n        </style>\n    ")}}customElements.define("x-auth-page",r)}}]);