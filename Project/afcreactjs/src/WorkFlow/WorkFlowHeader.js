import React from 'react';
import { Route, Switch} from 'react-router-dom';
import API from '../API';

class App_Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            HeaderWFS:[],
            PostHeaderWFS:[],
            PutHeaderWFS:[],
            IdCheck:[],
           
        };
        // This binding is necessary to make `this` work in the callback
     
        this.handleChange = this.handleChange.bind(this);
        this.getAPI_ALl_HeaderWF = this.getAPI_ALl_HeaderWF.bind(this);
        this.handleThemMoi = this.handleThemMoi.bind(this);
        this.Post_API__HeaderWF = this.Post_API__HeaderWF.bind(this);
        this.SelectUpdate = this.SelectUpdate.bind(this);
        this.OnUpdate = this.OnUpdate.bind(this);
        this.OnDelete = this.OnDelete.bind(this);
        this.Del_API__HeaderWF = this.Del_API__HeaderWF.bind(this);
        
      }


//---------------------------------------------------------------------
Post_API__HeaderWF(){

    var PostHeaderWFS = [];
    var  myitemList  = {};
    myitemList.Step1 = document.getElementById('Step1').checked;
    myitemList.Des0 = document.getElementById('Des0').value;
    myitemList.Active = document.getElementById('ckActive1').checked;
    
    
    PostHeaderWFS.push(myitemList);
  
   
    API.post('api/Post_HeaderWF', {PostHeaderWFS}).then((res)=> {
        if (res.data !=null)
        {
            this.getAPI_ALl_HeaderWF();
            document.getElementById('Step1').checked = false;
            document.getElementById('Des0').value ="";
            document.getElementById("info1").innerHTML = "Thêm mới thành công" ;
        }
      })
      .catch((error) =>{
        console.log(error);
      });
      
}    
 //--------------------------------------------------------------------
 handleThemMoi(e) {
    e.preventDefault();
     this.Post_API__HeaderWF();
    //------------------------------------------------------------------
    }      
//-----------------------------------------------------
getAPI_ALl_HeaderWF(){

    API.get('api/Get_All_HeaderWFS').then(res => {
        const HeaderWFS = res.data;
        this.setState({ HeaderWFS });
      }) 
      .catch((error) => { 
        alert(error);
        });
      
}    
//---------------------------------------------------------
componentDidMount() {
     this.getAPI_ALl_HeaderWF();
     
    };

    //---------------------------------------------------------  
    handleChange(e) {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const id = target.id;
      this.setState({
          [id]: value
      });
       
      }

//------------------------------------------------------------------
Del_API__HeaderWF(e){
  
    API.delete('api/Del_HeaderWFS/'+e.target.name)
      .then(res => {
        if(res.data !=null)
        {
          this.getAPI_ALl_HeaderWF();
          document.getElementById("info1").innerHTML = "Xóa thành công" ;
        }
        
      });
}
//----------------------------------------------------------------------
      
OnDelete(e) {
          e.preventDefault();
          this.Del_API__HeaderWF(e);
     
      }

//---------------------------------------------------------------
SelectUpdate(e) {
  e.preventDefault();
  const HeaderSelect = this.state.HeaderWFS.filter(item => item.Id == e.target.name);
  document.getElementById('IdHeader').value =  HeaderSelect[0].Id;
    document.getElementById('Step1').checked =  HeaderSelect[0].Step1;
     document.getElementById('Des0').value = HeaderSelect[0].Des0;
    document.getElementById('ckActive1').checked  = HeaderSelect[0].Active;

}     

//---------------------------------------------------------------
OnUpdate(e) {
  var PutHeaderWFS = [];
  e.preventDefault();
  if (document.getElementById('IdHeader').value != "" )
    {
    
          var  myitemList  = {};
          myitemList.Id = document.getElementById('IdHeader').value 
          myitemList.Step1 = document.getElementById('Step1').checked;
          myitemList.Des0 = document.getElementById('Des0').value;
          myitemList.Active = document.getElementById('ckActive1').checked;
          
          
        PutHeaderWFS.push(myitemList);
        
        
        //  this.Up_API__HeaderWF(e);
        API.put('api/Put_HeaderWFS/'+document.getElementById('IdHeader').value ,{PutHeaderWFS})
        .then(res => {
          if(res.data !=null)
          {
            this.getAPI_ALl_HeaderWF();
            document.getElementById("info1").innerHTML = "Cập nhật thành công" ;
          }
          document.getElementById('IdHeader').value = ""; 
          document.getElementById('Step1').checked = false;
          document.getElementById('Des0').value ="";

        });
  }
  else{
    alert('Vui lòng chọn dòng cần cập nhật');
  }
}    
//---------------------------------------------------------------------
   render() {
  
    return (
       
        <div>
        <div className="container-fluid mt-3 myfont">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">SETUP HEADER WORKFLOW</h1>
              <h1 className="h3 mb-0 text-gray-800"><div id="info"><span id="info1"><p className="text-left myfontHeader "></p></span></div></h1>
              <div className="pull-right">
              <a href="#" className="btn btn-outline-primary btn-sm shadow-sm pl-3 pr-3 mr-3" onClick={this.handleThemMoi}><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Thêm mới</span></a>
              <a href="#" className="btn btn-outline-primary btn-sm shadow-sm pl-3 pr-3" onClick={this.OnUpdate}><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Cập nhật</span></a>
              </div>
            
            </div>
            <hr/>
            
          
          <form className="myfont">
          <div className="form-group">
              <label htmlFor="email">Id</label>
              <input type="text" className="form-control"  id="IdHeader" name="IdHeader" value={this.IdHeader} disabled onChange={this.handleChange} placeholder="Id.."/>
            </div>

           
            <div className="form-group">
              <label htmlFor="pwd">Descition:</label>
              <input type="text" className="form-control" id="Des0" name="Des0" value={this.Des0}  onChange={this.handleChange}   placeholder="Description.."/>
            </div>
            <div className="form-check">
              
              <input type="checkbox" className="form-check-input"  id="Step1" name="Step1" value={this.Step1}  onChange={this.handleChange} placeholder="Step.."/>
              <label className="form-check-label" htmlFor="Step1">Start</label>
            </div>
            <br/>
          
                <div className="form-check">
                  <input type="checkbox" className="form-check-input"  id="ckActive1" name="ckActive1" value={this.ckActive1}   defaultChecked onChange={this.handleChange} />
                  <label className="form-check-label" htmlFor="ckActive1">Active</label>
            </div>
            
           
          </form>
        </div>
        <hr/>
        <div className="container-fluid mt-3 myfont overflow-auto">
          {/* <h2>Filterable Table</h2>
          <p>Type something in the input field to search the table for first names, last names or emails:</p> */}
          <input className="form-control" id="myInput" type="text" placeholder="Search.." />
          <br />
          <table className="table table-bordered overflow-auto">
            <thead>
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">Start</th>
                <th className="text-left">Desciption</th>
                <th className="text-center">Active</th>
                <th className="text-center">Update</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody id="myTable">
           
            { this.state.HeaderWFS.map((HeaderWF, index) => (
              
                <tr>
                             <td className="text-center" id={HeaderWF.Id} name={HeaderWF.Id} value={HeaderWF.Id}   onChange={this.handleChange}>{HeaderWF.Id}</td>
                              <td className="text-center" id="Step1" name="Step1" value="this.Step1"   onChange={this.handleChange}>     
                              {(() => {
                                            if (HeaderWF.Step1 == 1) {
                                                return  <input type="checkbox" classname="form-check-input" id="radio1" name="optradio" value="option1" checked disabled />
                                           
                                            }
                                            else{
                                              return   <input type="checkbox" classname="form-check-input" id="radio1" name="optradio" value="option1"  disabled />
                                            }
      })()}                             
                                 
                              </td>
                              <td className="text-left" id="Des0" name="Des0" value="this.Des0"   onChange={this.handleChange}>{HeaderWF.Des0}</td>
                              <td className="text-center">
                                <div classname="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left text-center">
                                {(() => {
                                            if (HeaderWF.Active == 1) {
                                                return <input type="checkbox" className="form-check-input" id={HeaderWF.Id} name={HeaderWF.Id} value={HeaderWF.Id}  checked  onChange={this.handleChange} />
                                           
                                            }
                                            else{
                                              return  <input type="checkbox" className="form-check-input" id={HeaderWF.Id} name={HeaderWF.Id} value={HeaderWF.Id}  disabled  onChange={this.handleChange} />  
                                            }
      })()}  
                                </div>
                              </td>
                              <td className="text-center"><a href="#"  id={HeaderWF.Id} name={HeaderWF.Id} onClick={this.SelectUpdate}>Update</a></td>
                              <td className="text-center"><a href="#"  id={HeaderWF.Id} name={HeaderWF.Id} onClick={this.OnDelete} >Delete</a></td>
                            </tr>
                     ))} 
         
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App_Main;
