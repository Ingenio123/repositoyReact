import gravatar from 'gravatar'
let user = window.localStorage.getItem('user')

const image = (email)=>{
    
    let profile = '';

    if(user!==null ){
        const {picture} = JSON.parse(user) 
        return profile =  `${picture}`;
    }else{
        return profile = gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true);
    }

}
export default image;