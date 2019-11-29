import React from 'react';
import { Link , Redirect} from 'react-router-dom';
import API from '../API';
import TblListItem from './tblListItem';
const queryString = require('query-string');

export default class input_list extends React.Component{
 
  

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      itemLists: [],
      itemListsAAAA: [],
      HeaderDXBSDVT: [
        {
          Id:'',
          IdNumberRef:'',
          MyStatus: 'Draft',
          IdCreatedBy: '',
          EmailCreatedBy:'trinhquang.khai@asiafoods.vn',
          CreatedBy:'Khai Quang Trinh 222',
          CreatedOn:  (new Date()).getDate()+ '/' + (new Date()).getMonth() + '/' + (new Date()).getFullYear() ,
          ChangedOn:'',
          IdRoom:'',
          RoomName:'Công nghệ thông tin (IT) 333',
          Location:'Tran Nhat Duat - Ho Chi Minh 3333',
          reason:'',
          Header:'Trần châu Tú',
          EmailHeader: 'tranchau.tu@asiafoods.vn 333',
          SecondHeader:'',
          EmailSecondHeader: 'tranchau.tu@asiafoods.vn 333',
          Active:'1',
          Image1:'',
          Image2:'',
          Image3:'',
          Image4:'',
          Src1:'',
          Src2:'',
          Src3:'',
          Src4:'',
          Describe1:'',
          Describe2:'',
          Describe3:'',
          Describe4:'',

        }

      ],
      HeaderBSDVTs:[],
      IdNumberRef: '',
      Get_ItemWorkFlow:[],

    };
    this.handleThemMoi = this.handleThemMoi.bind(this);
    this.Mainstep = this.Mainstep.bind(this);
    this.Sendmail = this.Sendmail.bind(this);
    this.postHeader = this.postHeader.bind(this);
    this.postItem = this.postItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAPI_ALl_HeaderBSDVT = this.getAPI_ALl_HeaderBSDVT.bind(this);
    this.Init_for_Open_ID = this.Init_for_Open_ID.bind(this);
    this.API_Get_Item_BSDVT_By_ID = this.API_Get_Item_BSDVT_By_ID.bind(this);
    this.API_Get_Header_BSDVT_By_ID = this.API_Get_Header_BSDVT_By_ID.bind(this);
    this.get_API_ALl_ItemWorkFlow_ID = this.get_API_ALl_ItemWorkFlow_ID.bind(this);
    
    this.Update_WF = this.Update_WF.bind(this);
    this.handeletest = this.handeletest.bind(this);
    this.handleWFlow = this.handleWFlow.bind(this);
  }

  //-------------
  handeletest(e){
    
  }
//---------------------------------------------------
 handleWFlow(e){
  // alert(e.currentTarget.dataset.id);
 
   e.preventDefault();
  if (queryString.parse(this.props.location.search).Id!=null) {
    var nameYouWant = queryString.parse(this.props.location.search).Id;
     this.Update_WF(nameYouWant,e.currentTarget.dataset.id);
  }
}
//--------------------------------------------------
Update_WF(IdNumberRef,Id)
{
  API.post('api/Update_WF/' +Id, {IdNumberRef}).then((res)=> {
    if (res.data !=null)
    {
      this.props.history.push
                ({
                  pathname: '/main_view',
                  search: '?query='+ IdNumberRef,
                  
                  // state: {IdNumberRef1:this.state.IdNumberRef }
                });
      this.Sendmail();
     
    }
  })
  .catch((error) =>{
    console.log(error);
  });
}

//------------------------------------------------
  getAPI_ALl_HeaderBSDVT()
  {
    
      API.get('api/All_HeaderBSDVTs').then(res => {
        const HeaderBSDVTs = res.data;
        this.setState({ HeaderBSDVTs });
        
      }) 
      .catch((error) => { 
        alert(error);
  
      });
      
      
  };  
//-------------------------------------------------------------
API_Get_Header_BSDVT_By_ID(Id_BSDVT)
{
    
    API.get('api/Get_HeaderBSDVTs_ID'+Id_BSDVT).then(res => {
      const HeaderDXBSDVT = res.data;
      this.setState({ HeaderDXBSDVT });
    
      this.API_Get_Item_BSDVT_By_ID(Id_BSDVT,HeaderDXBSDVT[0].IdCurStatus);
     
      
    }) 
    .catch((error) => { 
      alert(error);

    });
    
   
};  
//------------------------------------------------------------

 Init_for_Open_ID()
{
  if(queryString.parse(this.props.location.search).Id!=null)
    {
      var nameYouWant = queryString.parse(this.props.location.search).Id;
      this.API_Get_Header_BSDVT_By_ID(nameYouWant);
       
   }
   else{
    
  
      
   
   }
  
}
  //--------------------------------------------------------
   componentWillMount()
  {
    //  this.Init_for_Open_ID();
    // alert(this.state.itemListsAAAA[0].IdNumberRef);
   
  }

  //---------------------------------------------------------

  //--------------------------------------------------------

  get_API_ALl_ItemWorkFlow_ID(Id_BSDVT,Id)
  {
    
      API.get('api/Get_ItemWorkFlow_ID/'+Id+'?IdNumberRef='+Id_BSDVT).then(res => {
          const Get_ItemWorkFlow = res.data;
          this.setState({ Get_ItemWorkFlow });
          // alert(Get_ItemWorkFlow);
            // alert(this.state.Get_ItemWorkFlow[0].MyAction);
        }) 
        .catch((error) => { 
          console.log(error);
          });
  }
//---------------------------------------------------------
  componentDidMount() {

    this.Init_for_Open_ID();
    
    //this.UserList();
        // this.getAPI_ALl_HeaderBSDVT();
        // this.renderRedirect();
        
    };
    //----------------------------------------------------
    API_Get_Item_BSDVT_By_ID(Id_BSDVT,aaaa)
    {
     
      API.get('api/Get_ItemBSDVTs_Id/'+Id_BSDVT).then(res => {
        const itemLists = res.data;
        this.setState({ itemLists });
        
        this. get_API_ALl_ItemWorkFlow_ID(Id_BSDVT,aaaa);
        
      }) 
      .catch((error) => { 
        alert(error);
  
      });
    }
//----------------------------------------------------------------------
handleChange(e) {
    
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const id = target.id;
  this.setState({
      [id]: value
  });
}




  //--------------------------------------------------------------------
   handleThemMoi(e) {
    e.preventDefault();
     this.Mainstep();
  //---------------------------------------------------------------------     
      // document.getElementById("info1").innerHTML = "Trình kí thành công!";
      // this.setState({
      //   redirect: true
      // })
      
      //------------------------------------------------------------------
    }

    renderRedirect = () => {
      
      if (this.state.redirect) {
        return <Redirect to={{
          pathname: '/main_view',
          state: { HeaderBSDVTs: this.state.HeaderBSDVTs }
      }} />
      }
    }

 
    //-----------------------------------------------------------
     Sendmail()
    {
      API.post('send-email', {})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    //----------------------------------------------------------
     Mainstep()
    {
         this.postHeader();
     
    }
    // -----------------------------------------------------------
      postHeader()
    {
            
      var HeaderDXBSDVT =[];
      HeaderDXBSDVT.push(this.state.HeaderDXBSDVT[0]);
      HeaderDXBSDVT[0].SecondHeader = document.getElementById('SecondHeader').value
      HeaderDXBSDVT[0].reason = document.getElementById('reason').value
      //--------------------------------------------------------
      
      API.post('api/HeaderBSDVT', {HeaderDXBSDVT}).then((res)=> {
        if (res.data !=null)
        {
        
          this.postItem(res.data[0].IdNumberRef);
        
          // this.getAPI_ALl_HeaderBSDVT();
         
        }
      })
      .catch((error) =>{
        console.log(error);
      });
      //----------------------------------------------------------
    }

      // -----------------------------------------------------------
      postItem(IdNumberRef)
      {

        var itemLists =  []; 

        //-----------------------------------------------------
        for(var i=0;i<this.state.itemLists.length;i++)
        {

          this.state.itemLists[i].CreatedBy = this.state.HeaderDXBSDVT[0].CreatedBy;
          this.state.itemLists[i].IdNumberRef = IdNumberRef;
          itemLists.push(this.state.itemLists[i]);
        }
        var IdNumberRef1;
         API.post('api/ItemBSDVT', {itemLists}).then(res => {
            if (res.data !=null)
            {
              if (res.data =='Thành công')
              {
                this.props.history.push
                ({
                  pathname: '/main_view',
                  search: '?query='+ IdNumberRef,
                  
                  // state: {IdNumberRef1:this.state.IdNumberRef }
                });
                
                // this.Update_WF(IdNumberRef);
                this.Sendmail();
              
              }
             
            }
            
        })
        .catch(function (error) {
          console.log(error);
        });
       
      }
    // -----------------------------------------------------------


    render()
    {

      
      
      if(queryString.parse(this.props.location.search).Id!=null)
      {
     
     }
     else{
      
          this.state.HeaderDXBSDVT.push(this.state.HeaderDXBSDVT[0]);
          this.state.itemLists=[];
          if (this.props.location.state != null)
          {
            this.props.location.state.itemLists.map((Input_List, index) => (
            this.state.itemLists.push(Input_List)
            
          
          ))
        
          }
     }

       return (
        
          <div  className="pl-3 pr-3">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">PHIẾU XÁC NHẬN VÂN TAY</h1>
              <h1 className="h3 mb-0 text-gray-800"><div id="info"><span id="info1"><p className="text-left myfontHeader ">Trạng thái: {this.state.HeaderDXBSDVT[0].MyStatus}</p></span></div></h1>


             

              <div id= "buttonGroupEnable">
              {(() => {
               
                                            if (queryString.parse(this.props.location.search).Id==null) {
                                                return  <Link to={{ 
                                                  pathname: '/main_view/input_list/input',
                                                  state: {
                                                    //  itemLists: this.state.itemLists
                                                    itemLists: this.state.itemLists
                                                  
                                                  }
                                                }}className="btn btn-outline-primary btn-sm shadow-sm mr-4" id="btTaoMoi" ><i className="fas fa-file-o fa-sm text-white-50 "  /> <span className="text-right myfont" >Tạo mới</span></Link>;
                                           
                                            }
                                            else{
                                              return   <Link to={{ 
                                                pathname: '/main_view/input_list/input',
                                                state: {
                                                  //  itemLists: this.state.itemLists
                                                  itemLists: this.state.itemLists
                                                
                                                }
                                              }}  className="btn btn-outline-primary btn-sm shadow-sm mr-4 d-none"  id="btTaoMoi" ><i className="fas fa-file-o fa-sm text-white-50 "  /> <span className="text-right myfont" >Tạo mới</span></Link>;
                                            }
              })()}  

              
                   
                  
                  <div class="btn-group btn-sm mr-4" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle btn-outline-primary  btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Thực hiện
                    </button>
                      <div className="dropdown-menu  btn-sm" aria-labelledby="btnGroupDrop1">
                     
                         
                                         
                     
                   {(() => {
               
                                            if (queryString.parse(this.props.location.search).Id==null) {
                                            return    <a className="dropdown-item  btn-sm" href="#" onClick={this.handleThemMoi}><i className="fas fa-file-o fa-sm text-white-50" />  <span className="text-right myfont">Trình ký</span></a>
                                            }
                                            else
                                            {
                                              return    this.state.Get_ItemWorkFlow.map((item, index) => (
                                                <a className="dropdown-item  btn-sm" href="#" onClick={this.handleWFlow.bind(this)} data-id = {item.Id} name= {item.Id} value= {item.Id} id = {item.Id}><i className="fas fa-file-o fa-sm text-white-50" />  <span className="text-right myfont" >{item.MyAction}</span></a>
                                                // ((e)=>this.handleWFlow.bind(e,'item.Id'))
                                        ))  
                                            }
              })()}  
                                             

                      </div>
                </div>
                    
                {/* {(() => {
              
                                            if (queryString.parse(this.props.location.search).Id==null) {
                                                return    <a href="#" className="btn btn-outline-primary btn-sm shadow-sm mr-4 pl-4 pr-4" onClick={this.handleThemMoi}><i className="fas fa-file-o fa-sm text-white-50 " /><span className="text-right myfont">Lưu</span></a>
                                           
                                            }
                                            else{
                                              return    <a href="#" className="btn btn-outline-primary btn-sm shadow-sm mr-4 pl-4 pr-4 d-none" onClick={this.handleThemMoi}><i className="fas fa-file-o fa-sm text-white-50 " /><span className="text-right myfont">Lưu</span></a>
                                            }
              })()}   */}

                  

                    <Link to="/main_view" className="btn btn-outline-primary btn-sm shadow-sm pl-3 pr-3"><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Quay lại</span></Link>
                
              </div>
            
            </div>
            
            {/* Content Row */}
            <div className="row">
             
              {/*------------------------------------------------*/}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bg-success myfontHeader">
                Thông tin người đề xuất *
              </div>
              {/*------------------------------------------------*/}
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                Người đề xuất:
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 myfont text-left">
              {this.state.HeaderDXBSDVT[0].CreatedBy}
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                Ngày yêu cầu:
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 myfont text-left">
                {this.state.HeaderDXBSDVT[0].CreatedOn}
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                Phòng ban:*
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 myfont text-left">
              {this.state.HeaderDXBSDVT[0].RoomName}
              </div>
              {/*------------------------------------------------*/}
              <hr />
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                Nơi làm việc:
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 myfont text-left">
              {this.state.HeaderDXBSDVT[0].Location}
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                Lý do:*
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 myfont text-left">
                <div className="form-group">

                {(() => {
               
                                            if (queryString.parse(this.props.location.search).Id==null) {
                                                return     <input type="text" className="form-control btn-sm" id="reason"  name="reason" value={this.reason}  onChange={this.handleChange}  placeholder="Nhập lý do" />
                                           
                                            }
                                            else{
                                              return     this.state.HeaderDXBSDVT[0].reason
                                            }
              })()}  


               
                </div>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                Đại diện TP:
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 myfont text-left">
                <div className="form-group">
                {(() => {
               
               if (queryString.parse(this.props.location.search).Id==null) {
                   return     <input type="text" className="form-control btn-sm" id="SecondHeader"  name="SecondHeader" value={this.SecondHeader}  onChange={this.handleChange}  placeholder="Nhập người đại diện" />   
              
               }
               else{
                 return     this.state.HeaderDXBSDVT[0].SecondHeader
               }
            })()}  
                   
                </div>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 myfont text-left">
                
              {(() => {
               
               if (queryString.parse(this.props.location.search).Id==null) {
                   return     <div>  <input type="checkbox" className="form-check-input" id="ckKTTT" name="ckKTTT" value={this.ckKTTT}  onChange={this.handleChange}  />
                                <label className="form-check-label " htmlFor="exampleCheck1">Kiểm tra thông tin</label> 
                                </div>
              
               }
               else{
                 return    ""
               }
            })()}  
                
              </div>
            </div>
            <hr />
            {/*------------------------------------------------*/}
            {/* THÊM MỚI BỔ SUNG DẤU VÂN TAY */}
            <div className="row myfont overflow-auto">
               {/*------------------------------------------------*/}
              <TblListItem listItem = {this.state.itemLists}/>
               {/*------------------------------------------------*/}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 myfont text-left">
                <table className="table border">
                  <thead className="thead-light">
                    <tr>
                      <th className="border text-center">Phụ trách phòng ban</th>
                      <th className="border text-center">Nhân viên phòng HCNS</th>
                      <th className="border text-center">Trưởng phòng HCNS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border text-center">Trịnh Quang Khải</td>
                      <td className="border text-center">Trịnh Quang Khải</td>
                      <td className="border text-center">Trịnh Quang Khải</td>
                    </tr>
                    <tr>
                      <td className="border text-center">Đã xem xét ngày: 06/11/2019</td>
                      <td className="border text-center">Đã xem xét ngày: 06/11/2019</td>
                      <td className="border text-center">Đã xem xét ngày: 06/11/2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*-------------------------collapse----------------------------------------*/}
            <div className="accordion myfont" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <span className="myfont">Nhật kí thao tác</span>
                    </button>
                  </h5>
                </div>
                
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="row myfont overflow-auto">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 myfont text-left">
                        <table className="table border">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className="border text-center">Hành động</th>
                              <th scope="col" className="border text-center">Thời gian</th>
                              <th scope="col" className="border text-center">Thực hiện bởi</th>
                              <th scope="col" className="border text-center">Trạng thái mới</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row" className="border text-left">Create</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                              <td className="border">Khai Quang Trinh/SGN/AFC</td>
                              <td className="border  text-left">Draft</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Submit</td>
                              <td className="border text-center">06/11/2019 13:24</td>
                              <td className="border">Khai Quang Trinh/SGN/AFC</td>
                              <td className="border  text-left">Chờ Trưởng phòng duyệt</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Approve - Duyệt</td>
                              <td className="border text-center">06/11/2019 13:37</td>
                              <td className="border">Tu Chau Tran/SGN/AFC</td>
                              <td className="border  text-left">Chờ NV HCNS kiểm tra</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Remind - Nhắc nhở</td>
                              <td className="border text-center">07/11/2019 07:45</td>
                              <td className="border">VNSGNM01/AFC</td>
                              <td className="border  text-left">Chờ NV HCNS kiểm tra</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 myfont text-left">
                        <table className="table border">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className="border text-left">Theo dõi các thông báo</th>
                              <th scope="col" className="border text-center">Ngày giờ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row" className="border text-left">Email gửi tới Tu Chau Tran/SGN/AFC</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Email gửi tới Anh ThiVan Tran/SGN/AFC; Phuong Thi Tran/SGN/AFC; Ngoc Phuong Nguyen/SGN/AFC; Anh ThiMai Vu/SGN/AFC, CC Khai Quang Trinh/SGN/AFC</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Email gửi tới Anh ThiVan Tran/SGN/AFC; Phuong Thi Tran/SGN/AFC; Ngoc Phuong Nguyen/SGN/AFC; Anh ThiMai Vu/SGN/AFC, CC Khai Quang Trinh/SGN/AFC</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="myfont">Thông tin người thực hiện và phê duyệt</span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="row myfont overflow-auto">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 myfont text-left">
                        <table className="table border">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className="border text-left">Theo dõi các thông báo</th>
                              <th scope="col" className="border text-center">Ngày giờ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row" className="border text-left">Email gửi tới Tu Chau Tran/SGN/AFC</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Email gửi tới Anh ThiVan Tran/SGN/AFC; Phuong Thi Tran/SGN/AFC; Ngoc Phuong Nguyen/SGN/AFC; Anh ThiMai Vu/SGN/AFC, CC Khai Quang Trinh/SGN/AFC</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                            </tr>
                            <tr>
                              <td scope="row" className="border text-left">Email gửi tới Anh ThiVan Tran/SGN/AFC; Phuong Thi Tran/SGN/AFC; Ngoc Phuong Nguyen/SGN/AFC; Anh ThiMai Vu/SGN/AFC, CC Khai Quang Trinh/SGN/AFC</td>
                              <td className="border text-center">06/11/2019 13:21</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span className="myfont">Thông tin khác</span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      Lý do từ chối: Bạn đã xác nhận sai ngày
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <span className="myfont">Audit trail</span>
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div className="card-body">
                    Created : 06/11/2019 13:21:52 Khai Quang Trinh/SGN/AFC
                    <br /><br /> Last modified : 11/06/2019 01:37:40 PM 06/11/2019 13:24:23
                    <br /><br />Tu Chau Tran/SGN/AFC Khai Quang Trinh/SGN/AFC
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    );
  }


}

// input_list.defaultProps = {
//   HeaderDXBSDVT:[
//         {
//           Id:'',
//           IdNumberRef:'',
//           MyStatus: 'Draft',
//           IdCreatedBy: '',
//           EmailCreatedBy:'trinhquang.khai@asiafoods.vn',
//           CreatedBy:'Khai Quang Trinh',
//           CreatedOn:  (new Date()).getDate()+ '/' + (new Date()).getMonth() + '/' + (new Date()).getFullYear() ,
//           ChangedOn:'',
//           IdRoom:'',
//           RoomName:'Công nghệ thông tin (IT)',
//           Location:'Tran Nhat Duat - Ho Chi Minh',
//           reason:'',
//           Header:'Trần châu Tú',
//           EmailHeader: 'tranchau.tu@asiafoods.vn',
//           SecondHeader:'',
//           EmailSecondHeader: 'tranchau.tu@asiafoods.vn',
//           Active:'1',
//           Image1:'',
//           Image2:'',
//           Image3:'',
//           Image4:'',
//           Src1:'',
//           Src2:'',
//           Src3:'',
//           Src4:'',
//           Describe1:'',
//           Describe2:'',
//           Describe3:'',
//           Describe4:'',

//         }
//       ]
 
// }