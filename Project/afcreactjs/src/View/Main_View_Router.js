import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Dashboard from './Menuleft/dashBoard';
import AboutUs from './Menuleft/aboutUs';
import Input_list from '../Input_list/input_list';

class App_Main extends React.Component {

   render() {
    return (
       
        <div>
            <main>
                <Switch>
                       
                        <Switch>
                             <Route  path="/main_view/input_list" component={Input_list}  />  
                             
                        </Switch>  
                       
                       
                        <Route  path="/dashboard" component={Dashboard}  /> 
                        <Route  path="/about-us" component={AboutUs}  />  
                </Switch>
            </main>
        </div>
      
    );
  }
}
export default App_Main;
