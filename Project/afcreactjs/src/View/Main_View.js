import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import API from '../API';
const queryString = require('query-string');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        
        HeaderBSDVTs:[],
         
        };
      
        this.getAPI_ALl_HeaderBSDVT = this.getAPI_ALl_HeaderBSDVT.bind(this);
        this.getQueryStringParams = this.getQueryStringParams.bind(this);
        
        
      }
    
//---------------------------------------------------------------------
getQueryStringParams = query => {
  return query
      ? (/^[?#]/.test(query) ? query.slice(1) : query)
          .split('&')
          .reduce((params, param) => {
                  let [key, value] = param.split('=');
                  params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                  alert(params);
                  return params;
              }, {}
          )
      : {}
};
//-----------------------------------------------------------------------
componentDidMount() {
  //this.UserList();
    
      this.getAPI_ALl_HeaderBSDVT();
      // this.getQueryStringParams();

        
        // if(!this.props.location.search)
        // {
        //   var nameYouWant = queryString.parse(this.props.location.search).query;
        //   document.getElementById("info1").innerHTML = "Chứng từ vừa tạo:" + nameYouWant ;
      
        // }
   
  };


//----------------------------------------------------------------------
 getAPI_ALl_HeaderBSDVT()
{
  alert('asd');
    API.get('api/All_HeaderBSDVTs').then(res => {
      const HeaderBSDVTs = res.data;
      this.setState({ HeaderBSDVTs });
    }) 
    .catch((error) => { 
      alert(error);

    });
    
    
};  
//----------------------------------------------------------------------

  render() {

    return (
       <div className="container-fluid mt-3 myfont overflow-auto">
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">PHIẾU XÁC NHẬN VÂN TAY</h1>
              <h1 className="h3 mb-0 text-gray-800"><div id="info"><span id="info1"><p className="text-left myfontHeader "></p></span></div></h1>
              <div id= "buttonGroupEnable">
                    <Link to= "/main_view/input_list"className="btn btn-outline-primary btn-sm shadow-sm mr-4" id="btTaoMoi" ><i className="fas fa-file-o fa-sm text-white-50 "  /> <span className="text-right myfont" >Tạo mới phiếu ĐXBSDVT</span></Link>
           
                    <Link to="/" className="btn btn-outline-primary btn-sm shadow-sm pl-3 pr-3"><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Quay lại</span></Link>
                
              </div>
            
            </div>
            <hr/>
        <p><h6>Vui lòng gõ từ khóa để tìm những chứng từ bạn muốn</h6></p>
        <input className="form-control" id="myInput" type="text" placeholder="Search.." />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
            <th className ="text-center">Số tham khảo</th>
              <th className ="text-center">Trạng thái</th>
              <th className ="text-center">Nơi làm việc</th>
              <th className ="text-center">Phòng ban</th>
               <th className ="text-center">Ngày tạo</th>
              <th className ="text-center">Người tạo</th>
              <th className ="text-center">Lý do</th>
               
              <th className ="text-center">Trưởng phòng</th>
              <th className ="text-center">Đại diện TP</th>
               
            </tr>
          </thead>
          <tbody id="myTable">
            { this.state.HeaderBSDVTs.map((HeaderBSDVT, index) => (
                      
            <tr>
              <td><Link  to=
              
              {{
                pathname: '/main_view/input_list',
                search: '?Id=' + HeaderBSDVT.IdNumberRef,
               
              
              }}
              className="nav-link myfont text-center" exact >{HeaderBSDVT.IdNumberRef}</Link></td>
              <td>{HeaderBSDVT.MyStatus}</td>
              <td>{HeaderBSDVT.Location}</td>
              <td>{HeaderBSDVT.RoomName}</td>
              <td>{HeaderBSDVT.CreatedOn}</td>
              <td>{HeaderBSDVT.CreatedBy}</td>
              <td>{HeaderBSDVT.reason}</td>
              
              <td>{HeaderBSDVT.Header}</td>
              <td>{HeaderBSDVT.SecondHeader}</td>
            </tr>


        ))}
       
          </tbody>
        </table>
        
      </div>
    );
  }
}
export default App;
