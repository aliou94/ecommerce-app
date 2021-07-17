import React from 'react';
import { Route, Switch} from 'react-router-dom';

import LoginPage from "./Components/authComponents/Login";
import RegistrationPage from "./Components/authComponents/Registartion";
import ForgotPasswordPage from "./Components/authComponents/ResetPassword";
//
// import Dashboard from "./Components/layoutComponents/dashboard";
// import Electronics from "./Components/productsComponent/electronics";
// import Layout from "./Components/layoutComponents/layOut";
// import VerticalBar from "./Components/layoutComponents/sideBar";
import Dashboard from "./Components/layoutComponents/dashboard";
import Electronics from "./Components/electronics";
import Books from "./Components/books";
import Profile from "./Components/layoutComponents/profile";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';





const CreateRoutes =()=>{
 return   (
     // <TransitionGroup>
     //     <CSSTransition key={2}  classNames="page" timeout={35000}>
             <Switch>
                 <Route  exact path="/" component={LoginPage}/>
                 <Route exact path="/e-commerce/login" component={LoginPage}/>
                 <Route exact path="/e-commerce/resetPassword" component={ForgotPasswordPage}/>
                 <Route exact path="/e-commerce/registration" component={RegistrationPage}/>
                 <Route exact path="/e-commerce/dashboard" component={Dashboard}/>
                 <Route exact path="/e-commerce/electronics" component={Electronics}/>
                 <Route exact path="/e-commerce/books" component={Books}/>
                 <Route exact path="/e-commerce/profile" component={Profile}/>
             </Switch>
      //     </CSSTransition>
      // </TransitionGroup>
    )
}



export default CreateRoutes