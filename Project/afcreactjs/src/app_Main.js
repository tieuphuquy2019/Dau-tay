import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Menuleft/home';
import Dashboard from './Menuleft/dashBoard';
import AboutUs from './Menuleft/aboutUs';
import Main_View from './View/Main_View';
import WorkFlowHeader from './WorkFlow/WorkFlowHeader';
import WorkFlowItem from './WorkFlow/WorkFlowItem';
import AboutUs1 from './Authentication/TestAu';


class App_Main extends React.Component {

   render() {
    return (
       
        <div>
            <main>
                <Switch>
                       
                        <Switch>
                             <Route exact path="/" component={Home}  /> 
                             <Route  path="/:input_list" component={Home}  />
                             <Route  path="/input_list/:input" component={Home}  />
                        </Switch>  
                </Switch>
            </main>
        </div>
      
    );
  }
}
export default App_Main;
