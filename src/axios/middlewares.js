import axios from 'axios';

function getToken(){
    return localStorage.getItem('token');
}

export function initAxiosInterceptors(){
    axios.interceptors.request.use((config)=>{
        const token =  getToken();
        
        if(token){
            config.headers.Authorization = `Bearer ${token} `
            return config;
        }
       
    })
}
