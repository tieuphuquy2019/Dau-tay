import React, {useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import JoditEditor1 from '../RichText';
import API from '../API';

class App_Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            HeaderWFS : [],
            Get_ItemWorkFlow:[],
            CurrentStatus:"",
            NextStatus:"",
            Action:"",
            MyCondition1 : "#AND#",
        }
        this.getAPI_ALl_HeaderWF = this.getAPI_ALl_HeaderWF.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleThemMoi = this.handleThemMoi.bind(this);
        this.Post_API_ItemWorkFlow = this.Post_API_ItemWorkFlow.bind(this);
        this.get_API_ALl_ItemWorkFlow = this.get_API_ALl_ItemWorkFlow.bind(this);
        this.Get_all_axios = this.Get_all_axios.bind(this);
        this.OnSelect = this.OnSelect.bind(this);
        this.OnDelete = this.OnDelete.bind(this);
        
    }

    //--------------------------------------------------------------------
    OnDelete(e)
    {
        e.preventDefault();
        // const Get_ItemWorkFlow = this.state.Get_ItemWorkFlow.filter(item => item.Id == e.target.name);
        
            API.delete('api/Del_ItemWorkFlow/'+e.target.name)
            .then(res => {
            if(res.data !=null)
            {
                this.get_API_ALl_ItemWorkFlow();
                document.getElementById("info1").innerHTML = "Xóa thành công" ;
            }
      
    });
    }

    //---------------------------------------------------------------
OnSelect(e) {
    e.preventDefault();
    const Get_ItemWorkFlow = this.state.Get_ItemWorkFlow.filter(item => item.Id == e.target.name);
    
    
    // document.getElementById('CurrentStatus').value =  Get_ItemWorkFlow[0].CurrentStatus;
    //   document.getElementById('Action').value =  Get_ItemWorkFlow[0].MyAction;

      this.setState({ Action : Get_ItemWorkFlow[0].MyAction });

    //   document.getElementById('NextStatus').value = Get_ItemWorkFlow[0].NextStatus;
     this.setState({ NextStatus : Get_ItemWorkFlow[0].NextStatus });
      document.getElementById('EmailTo').value  = Get_ItemWorkFlow[0].EmailTo;
      document.getElementById('EmailCC').value  = Get_ItemWorkFlow[0].EmailCC;
      document.getElementById('EmailBCC').value  = Get_ItemWorkFlow[0].EmailBCC;
      document.getElementById('EmailSubject').value  = Get_ItemWorkFlow[0].EmailSubject;
    //   document.getElementById('EmailBody').value  = Get_ItemWorkFlow[0].EmailBody;
      this.setState({content: Get_ItemWorkFlow[0].EmailBody});
      document.getElementById('AuthorList').value  = Get_ItemWorkFlow[0].AuthorList;
      document.getElementById('ReaderList').value  = Get_ItemWorkFlow[0].ReaderList;
      document.getElementById('Remind').checked  = Get_ItemWorkFlow[0].Remind;
      this.setState({ CurrentStatus : Get_ItemWorkFlow[0].CurrentStatus });

      this.setState({ MyCondition1 : Get_ItemWorkFlow[0].MyCondition });
      
  }  
    //-----------------------------------------------------------------------
    updateContent = (value) => {
        this.setState({content:value})
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
    jodit;
    setRef = jodit => this.jodit = jodit;
    
    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    //-------------------------------------------------------
    get_API_ALl_ItemWorkFlow()
    {
        API.get('api/Get_ItemWorkFlow').then(res => {
            const Get_ItemWorkFlow = res.data;
           
            this.setState({ Get_ItemWorkFlow });

            // alert(Get_ItemWorkFlow);
          }) 
          .catch((error) => { 
            console.log(error);
            });
    }
    //---------------------------------------------------------
componentDidMount() {
    this.setState({MyCondition1:"#AND#"})
    //  this.Get_all_axios();
    this.getAPI_ALl_HeaderWF();
    //  this.get_API_ALl_ItemWorkFlow();
     
};

//------------------------------------------------------
Get_all_axios()
{
    API.all([this.getAPI_ALl_HeaderWF(), this.get_API_ALl_ItemWorkFlow()]).then(API.spread((...responses) => {
        // alert(responses[0]);
        // const HeaderWFS = responses[0];
        // alert(HeaderWFS[0].Id);
        // this.setState({ HeaderWFS });

        //------------------------------------------
        // const responseOne = responses[0];
        // const responseTwo = responses[1];
        
        // use/access the results 
      })).catch(errors => {
        console.log(errors);
        console.log(errors);
      })
}
//---------------------------------------------------------
getAPI_ALl_HeaderWF(){

    API.get('api/Get_All_HeaderWFS').then(res => {
        const HeaderWFS = res.data;
        this.setState({ HeaderWFS });
        this.get_API_ALl_ItemWorkFlow();
      }) 
      .catch((error) => { 
        console.log(error);
        });
      
}    
  //---------------------------------------------------------  
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    this.setState({
        [id]: value
    });
    this.setState({CurrentStatus:""}) ;
    this.setState({NextStatus:""}) ;
    
    }
//---------------------------------------------------------  
//--------------------------------------------------------------------
handleThemMoi(e) {
    e.preventDefault();
     this.Post_API_ItemWorkFlow();
    //------------------------------------------------------------------
    }      
//------------------------------------------
Post_API_ItemWorkFlow()
{
    var Datas = [];
    var  Item  = {};
    var Temp =[];
    // Item.IdWorkFlow = document.getElementById('Step1').value;
    
    //------------------------------------------------------
    var myconditon = document.getElementById('CurrentStatus').value;
    
    if (myconditon != "")
    {
        
        Temp = this.state.HeaderWFS.filter(item => item.Id == myconditon);
      
        Item.IdWorkFlow = Temp[0].Id;
     
        Item.CurrentStatus = Temp[0].Des0;
        Item.CurrentStep = Temp[0].Id;
    }
    
    //--------------------------------------------------------------
       Item.Action = document.getElementById('Action').value;
       //-------------------------------------------
       myconditon = document.getElementById('NextStatus').value;
       if (myconditon != "")
       {
           Temp  = [];
           Temp = this.state.HeaderWFS.filter(item => item.Id == myconditon);
           Item.NextStep = Temp[0].Id;
           Item.NextStatus = Temp[0].Des0;
       }
       //----------------------------------------------
   
    
    Item.EmailTo = document.getElementById('EmailTo').value;
    Item.EmailCC = document.getElementById('EmailCC').value;
    Item.EmailBCC = document.getElementById('EmailBCC').value;
    Item.EmailSubject = document.getElementById('EmailSubject').value;
    Item.EmailBody = this.state.content;
    Item.AuthorList = document.getElementById('AuthorList').value;
    Item.ReaderList = document.getElementById('ReaderList').value;
    Item.Remind = document.getElementById('Remind').checked;
    
    Item.MyCondition1 = document.getElementById('MyCondition').value;
    
    
    Datas.push(Item);
  
   
    API.post('api/Post_ItemWorkFlow', {Datas}).then((res)=> {
        // if (res.data == 'Thành công')
        {
            this.get_API_ALl_ItemWorkFlow();
            document.getElementById('EmailTo').value ="";
            document.getElementById('EmailCC').value="";
            document.getElementById('EmailBCC').value="";
            document.getElementById('EmailSubject').value="";
            this.setState({content:""});
            document.getElementById('AuthorList').value ="";
            document.getElementById('ReaderList').value ="";
            // Item.Remind = document.getElementById('Remind').checked;
            document.getElementById("info1").innerHTML = "Thêm mới thành công" ;
            // this.setState({CurrentStatus :""});
            document.getElementById('CurrentStatus').value ="";
            document.getElementById('NextStatus').value ="";
            // this.setState({NextStatus :""});
        }
      })
      .catch((error) =>{
        console.log(error);
      });
}


//-----------------------------------------------------
   render() {
    
    return (
       
        <div>
        <div className="container-fluid mt-3 myfont">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">SETUP HEADER WORKFLOW</h1>
              <h1 className="h3 mb-0 text-gray-800"><div id="info"><span id="info1"><p className="text-left myfontHeader "></p></span></div></h1>
              <div className="pull-right">
              <a href="#" className="btn btn-outline-primary btn-sm shadow-sm pl-3 pr-3 " onClick={this.handleThemMoi}><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Thêm mới</span></a>
              
              </div>
            
            </div>

           
            <hr/>
            <form className="myfont">
                <div className="form-group">
                    <label htmlFor="email"  className="myfont">Current status</label>
                                        <div className="input-group mb-3">
                            <select className="custom-select" id="CurrentStatus" name="CurrentStatus"  onChange={this.handleChange} placeholder="Select..">
                            <option selected onChange={this.handleChange}  >{this.state.CurrentStatus}</option>
                            { this.state.HeaderWFS.map((HeaderWF, index) => (
                                  <option onChange={this.handleChange} value={HeaderWF.Id} >{HeaderWF.Des0}</option>
                           ))}
                            </select>
                            <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Action</label>
                        <input type="text" className="form-control" id= "Action" name="Action" value={this.state.Action}   onChange={this.handleChange}  placeholder="Action.."/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="pwd">Next Status:</label>
                            <div className="input-group mb-3">
                            <select className="custom-select" id="NextStatus" onChange={this.handleChange} name="NextStatus"  placeholder="Select..">
                            <option selected onChange={this.handleChange}>{this.state.NextStatus}</option>
                            { this.state.HeaderWFS.map((HeaderWF, index) => (
                                  <option  onChange={this.handleChange} value={HeaderWF.Id}>{HeaderWF.Des0}</option>
                           ))}
                            </select>
                                    <div className="input-group-append">
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                                    </div>
                                </div>
                    </div>
                
                    <div className="form-group">
                    <label htmlFor="email">Email to</label>
                        <input type="Email" className="form-control" id= "EmailTo" name="EmailTo" value={this.EmailTo}   onChange={this.handleChange}  placeholder="Email to.."/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email CC</label>
                        <input type="Email" className="form-control" id= "EmailCC" name="EmailCC" value={this.EmailCC}   onChange={this.handleChange}  placeholder="Email CC.."/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email BCC</label>
                        <input type="Email" className="form-control"  id= "EmailBCC" name="EmailBCC" value={this.EmailBCC}   placeholder="Email BCC.."/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email Subject</label>
                        <input type="text" className="form-control"  id= "EmailSubject" name="EmailSubject" value={this.EmailSubject}  placeholder="Email Subject.."/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email Body</label>
                        
                        <JoditEditor id= "EmailBody" name="EmailBody" value={this.EmailBody}
                            editorRef={this.setRef}
                            value={this.state.content}
                            config={this.config}
                            onChange={this.updateContent}
                        />

                        {/* <JoditEditor1    />   */}
                        
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Author List</label>
                        <input type="text" className="form-control"  id= "AuthorList" name="AuthorList" value={this.AuthorList}  placeholder="Format: a@gmail.com;b@gmail.com.."/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Reader List</label>
                        <input type="text" className="form-control"  id= "ReaderList" name="ReaderList" value={this.ReaderList}   placeholder="Format: a@gmail.com;b@gmail.com.."/>
                    </div>
                    
                    <div className="input-group mb-3">
                            <select className="custom-select" id="MyCondition" name="MyCondition"  onChange={this.handleChange} placeholder="Select..">
                            <option selected onChange={this.handleChange} >{this.state.MyCondition1}</option>
                             <option onChange={this.handleChange} value="#AND#"  >#AND#</option>
                             <option onChange={this.handleChange}  value="#OR#" >#OR#</option>
                            </select>
                            <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                            </div>
                    </div>
                
                     <br/>
                    
                    <div className="form-check">
              
                    <input type="checkbox" className="form-check-input"  id="Remind" name="Remind" value={this.Remind} defaultChecked onChange={this.handleChange} placeholder="Step.."/>
                    <label className="form-check-label" htmlFor="Remind">Remind ?</label>
                    </div>

                
           
          </form>
        </div>

       
        <hr/>
        <div className="container-fluid mt-3 myfont overflow-auto">
          {/* <h2>Filterable Table</h2>
          <p>Type something in the input field to search the table for first names, last names or emails:</p> */}
          {/* <input className="form-control" id="myInput" type="text" placeholder="Search.." /> */}
          <br />
          <table className="table table-bordered overflow-auto">
            <thead>
              <tr>
              <th className="text-center">Detete</th>
              <th className="text-center">Select</th>
                <th className="text-center">Current Status</th>
                <th className="text-center">Next Status</th>
                <th className="text-center">Action</th>
                
                <th className="text-center">Email To</th>
                <th className="text-center">Email CC</th>
                <th className="text-center">Email BCC</th>
                <th className="text-center">Email Subject</th>
                {/* <th className="text-center">Author List</th> */}
                {/* <th className="text-center">Reader List</th> */}
                <th className="text-center">Remind</th>
                
              </tr>
              { this.state.Get_ItemWorkFlow.map((ItemWorkFlow, index) => (
              <tr>
              <td className="text-center"><a href="#"id={ItemWorkFlow.Id} name={ItemWorkFlow.Id} onClick={this.OnDelete} >Delete</a></td>
              <td className="text-center"><a href="#" id={ItemWorkFlow.Id} name={ItemWorkFlow.Id} onClick={this.OnSelect} >Select</a></td>
               <td className="text-left" >{ItemWorkFlow.CurrentStatus }</td>
               <td className="text-left" >{ItemWorkFlow.NextStatus }</td>
               <td className="text-center" >{ItemWorkFlow.MyAction }</td>
               
               <td className="text-center" >{ItemWorkFlow.EmailTo }</td>
               <td className="text-center" >{ItemWorkFlow.EmailCC }</td>
               <td className="text-center" >{ItemWorkFlow.EmailBCC }</td>
               <td className="text-center" >{ItemWorkFlow.EmailSubject }</td>
               {/* <td className="text-center" >{ItemWorkFlow.AuthorList }</td> */}
               {/* <td className="text-center" >{ItemWorkFlow.ReaderList }</td> */}
               <td className="text-center" >
               {(() => {
                                            if (ItemWorkFlow.Remind == 1) {
                                                return <input type="checkbox" className="form-check-input" id={ItemWorkFlow.Id} name={ItemWorkFlow.Id} value={ItemWorkFlow.Id}  checked  onChange={this.handleChange} />
                                           
                                            }
                                            else{
                                              return  <input type="checkbox" className="form-check-input" id={ItemWorkFlow.Id} name={ItemWorkFlow.Id} value={ItemWorkFlow.Id}  disabled  onChange={this.handleChange} />  
                                            }
              })()}  
               </td>
               
                            </tr>
              ))}
             
            </thead>
            <tbody id="myTable">
           
           
         
            </tbody>
          </table>
        </div>
      </div>
      
    );
  }
}
export default App_Main;


