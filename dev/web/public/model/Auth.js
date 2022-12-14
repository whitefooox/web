class Auth {

    async auth(user){
        const response = await fetch("api/user/auth", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(user)
        });
        if(response.ok){
            response.json().then((token) => {
                this.#save(user.login, token);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    async reg(user){
        const response = await fetch("api/user/reg", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(user)
        });
        if(response.ok){
            response.json().then((token) => {
                this.#save(user.login, token);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    #save(login, token){
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
    }

    getLogin(){
        return localStorage.getItem('login');
    }

    getToken(){
        return localStorage.getItem('token');
    }
}

export class AuthFactory {
   
    static _auth = null;
    
    static _createInstance() {
        return new Auth();      
    }
       
    static createInstance() {
        if (AuthFactory._auth === null) {
            AuthFactory._auth = AuthFactory._createInstance();  
        }      
        return AuthFactory._auth;
    }
 }