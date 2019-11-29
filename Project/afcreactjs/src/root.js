import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

import App from './App';



function Root(props) {
 return (
        <div className="container-fluid  pl-1 pr-1">
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          {/* <div id="menuleft"></div> */}
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <div id="menuleft">
              {/* Topbar */}
                <App />
              </div>  
              <div id="header_all">
                {/* <Header /> */}
              </div>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/*-------------------------------------------------------------*/}
             
                {/* Page Heading */}
                {/* <input id="tugio" /> */}
                {/*-------------------------------------------------------------*/}
                {/* <App /> */}

              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <div id="bottom" />
            {/* End of Footer */}
                {/* <Bottom /> */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <idv id="logout_all" />
        {/* Bootstrap core JavaScript*/}
      </div>
           
          );
}

export default Root;
