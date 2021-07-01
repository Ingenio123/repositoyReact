import  {Route,Redirect} from 'react-router-dom';
import {isAuth} from '../helpers/Auth';


export const TeacherRoutes = ({component:Component,...rest}) => (
    <Route {...rest} > { isAuth() && isAuth().rol === 'teacher' ? <Component />  : <Redirect to="SignIn" /> 
    }
    </Route>
)
