import React from 'react';
import Header from '../Header/header';
import Conten_Header from '../Content/content_Header';
import Bottom from '../Bottom/bottom';
import Input_list from '../Input_list/input_list';
import Input from '../Input_list/input';
import { Route,Router} from 'react-router-dom';
import Main_View from '../View/Main_View';
import WorkFlowHeader from '../WorkFlow/WorkFlowHeader';
import WorkFlowItem from '../WorkFlow/WorkFlowItem';
import AboutUs1 from '../Authentication/TestAu';


import PrivateRoute from '../Authentication/PrivateRoute';
import fakeAuth from '../Authentication/fakeAuth';
import AuthButton from '../Authentication/AuthButton';
import PublicPage from '../Authentication/PublicPage';
import ProtectedPage from '../Authentication/ProtectedPage';
import LoginPage from '../Authentication/LoginPage';
import Login from '../Login/login';
import ExtraTime from '../Extra_Time/khaitest'

class Home extends React.Component {

  render() {
    return (
            <div>
                <Header />
                 
                    <switch>
                   
                        <Route path="/login">
                            <Login />
                          </Route>
                         <Route exact path="/" component={Conten_Header} />
                         <Route exact path="/main_view/input_list" component={Input_list} />
                         <Route exact path="/main_view/input_list/input" component={Input} />

                         <Route exact path="/extra_time" component={ExtraTime} />

                          <PrivateRoute exact path="/main_view">
                              <Main_View />
                         </PrivateRoute>

                          <PrivateRoute path="/workflowitem">
                              <WorkFlowItem />
                         </PrivateRoute>

                          <PrivateRoute path="/workflowheader">
                              <WorkFlowHeader />
                         </PrivateRoute>
                          <Route  path="/about_us" component={AboutUs1}  />  
                     
                </switch>
                 
                <Bottom />
             </div>
    );
  }
}
export default Home;
