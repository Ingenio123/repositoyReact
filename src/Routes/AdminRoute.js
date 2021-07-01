import  {Route,Redirect} from 'react-router-dom';
import {isAuth} from '../helpers/Auth';

let auth = true;
export const AdminRoute = ({component:Component,...rest}) => (
    <Route 
        {...rest}
        render={  props => isAuth() && isAuth().rol === 'admin' ? (
            <Component {...props} />
        ):(
            <Redirect to={{pathname: '/SignIn',state:{from: props.location }}} />
        )
        
        } >
     </Route>    
)

