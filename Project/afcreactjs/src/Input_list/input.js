import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
export default class Logout extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      itemLists:[],
      
      // txtSTT: "",
      // txtMNV: "",
      // txtTNV: "",
      // txtRmail: "",
      // txtTN: "",
      // txtDN: "",
      // txtTG: "",
      // txtDG: "",
      // slLD: "",
      // slGC: "",
    };
    // This binding is necessary to make `this` work in the callback
    this.handleThemMoi = this.handleThemMoi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   const { handle } = this.props.match.params
  //   const { fromNotifications } = this.props.location.state
  // }

  handleChange(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    this.setState({
        [id]: value
    });
  }


  handleThemMoi(e) {
    // e.preventDefault();
    // this.setState({txtSTT : 1});
    // this.setState({txtMNV : document.getElementById('txtMNV').value});
    // this.setState({txtTNV : document.getElementById('txtTNV').value});
    // this.setState({txtRmail : document.getElementById('txtRmail').value});
    // this.setState({txtTN : document.getElementById('txtTN').value});
    // this.setState({txtDN : document.getElementById('txtDN').value});
    // this.setState({txtTG : document.getElementById('txtTG').value});
    // this.setState({txtDG : document.getElementById('txtDG').value});
    // this.setState({slLD : document.getElementById('slLD').value});
    // this.setState({slGC : document.getElementById('slGC').value});
    
    // alert(this.state.txtMNV);
    // alert(this.state.txtTNV);
    // alert(this.state.txtRmail);
    // alert(this.state.txtTN);
    // alert(this.state.txtDN);
    // alert(this.state.txtTG);
    // alert(this.state.txtDG);
    // alert(this.state.slLD);
    // alert(this.state.slGC);

var  myitemList  = {};
myitemList.Id = '';
myitemList.IdNumberRef = '';
myitemList.IdCreatedBy = '';
myitemList.CreatedBy = '';
myitemList.CreatedOn = '';
myitemList.ChangedOn = '';
myitemList.StaffCode = document.getElementById('txtMNV').value;
myitemList.StaffName = document.getElementById('txtTNV').value;
myitemList.StaffEmail = document.getElementById('txtRmail').value;
myitemList.DateFrom =  document.getElementById('txtTN').value;
myitemList.DateTo = document.getElementById('txtDN').value;
myitemList.TimeFrom = document.getElementById('txtTG').value;
myitemList.TimeTo = document.getElementById('txtDG').value;
myitemList.Reason = document.getElementById('slLD').value;
myitemList.Note = document.getElementById('slGC').value;
myitemList.Des1 = '';
myitemList.Des2 = '';
myitemList.Des3 = '';
myitemList.Des4 = '';
myitemList.Src1 = '';
myitemList.Src2 = '';
myitemList.Src3 = '';
myitemList.Src4 = '';
myitemList.File1 = '';
myitemList.File2 = '';
myitemList.File3 = '';
myitemList.File4 = '';

myitemList.Img1 = '';
myitemList.Img2 = '';
myitemList.Img3 = '';
myitemList.Img4 = '';
  
    
    
    this.props.location.state.itemLists.map((Input_List, index) => (
      
      this.state.itemLists.push(Input_List)
  ))
    this.state.itemLists.push(myitemList);
    // alert(this.state.itemLists[0].txtMNV);
    // alert(this.state.itemLists[1].txtMNV);
    // alert(this.state.itemLists[2].txtMNV)

  }
  
    render()
    {
     
      return (
      <div  className="pl-3 pr-3">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Thêm mới</h1>
              <div className="pull-right">
                  <Link to={{
                    pathname: '/main_view/input_list',
                    state: {
                      // txtSTT: '1',
                      // txtMNV: this.state.txtMNV,
                      // txtTNV: this.state.txtTNV,
                      // txtRmail: this.state.txtRmail,
                      // txtTN: this.state.txtTN,
                      // txtDN: this.state.txtDN,
                      // txtTG: this.state.txtTG,
                      // txtDG: this.state.txtDG,
                      // slLD: this.state.slLD,
                      // slGC: this.state.slGC,
                      itemLists: this.state.itemLists,

                    }
                  }} className="btn btn-outline-primary shadow-sm btn-sm pl-3 pr-3 mr-3" onClick={this.handleThemMoi}><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Thêm mới</span></Link>
                    <Link to="/main_view/input_list" className="btn btn-outline-primary btn-sm shadow-sm pl-3 pr-3"><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Quay lại</span></Link>
                 
              </div>
            
            </div>
            
        <hr />
        <form className="myfont" >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mã nhân viên</label>
            <input type="text" className="form-control" id="txtMNV" name="txtMNV" value={this.txtMNV}  placeholder="Nhập mã nhân viên"  onChange={this.handleChange}  />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="ckKTTT" name="ckKTTT" value={this.ckKTTT}  onChange={this.handleChange}  />
            <label className="form-check-label" htmlFor="exampleCheck1">Kiểm tra thông tin</label>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Tên nhân viên</label>
            <input type="text" className="form-control" id="txtTNV"  name="txtTNV" value={this.txtTNV}  onChange={this.handleChange}  placeholder="Nhập tên nhân viên" />
          </div>
           <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="text" className="form-control" id="txtRmail" name="txtRmail" value={this.txtRmail}  onChange={this.handleChange}   aria-describedby="emailHelp" placeholder="Nhập email" />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Từ ngày</label>
            <input type="date" name="txtTN" id="txtTN" name="txtTN" value={this.txtTN}  onChange={this.handleChange}   max="3000-12-31" min="1000-01-01" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Đến ngày</label>
            <input type="date" name="txtDN" id="txtDN" name="txtDN" value={this.txtDN}  onChange={this.handleChange}  max="3000-12-31" min="1000-01-01" className="form-control" />
            {/* <input type="datetime-local" class="form-control" id="datetime-local" />  */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Từ giờ</label>
             <input type="time"  name="txtTG" id="txtTG"  name="txtTG" value={this.txtTG}  onChange={this.handleChange}  max="3000-12-31" min="1000-01-01" className="form-control" />
             
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Đến giờ</label>
            <input type="time"  name="txtDG" id="txtDG" name="txtDG" value={this.txtDG}  onChange={this.handleChange}  max="3000-12-31" min="1000-01-01" className="form-control" />
            
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Lý do</label>
            <select className="custom-select custom-select-sm mt-3" style={{fontSize: '13px'}} id="slLD"  name="slLD" value={this.slLD}  onChange={this.handleChange} >
              <option selected />
              <option value={'Quét vân tay nhưng không có dữ liệu'}>1: Quét vân tay nhưng không có dữ liệu</option>
              <option value={'Quên quét vân tay/thẻ'}>2: Quên quét vân tay/thẻ</option>
              <option value={'Chưa lấy mẫu vân tay'}>3: Chưa lấy mẫu vân tay</option>
              <option value={'Khác'}>4: Khác</option>
              
            </select>
          </div>
          <div className="form-group myfont">
            <label htmlFor="exampleInputPassword1">Ghi chú</label>
            {/* <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea> */}
            <select className="custom-select custom-select-sm mt-3" style={{fontSize: '13px'}} id="slGC"  name="slGC" value={this.slGC}  onChange={this.handleChange} >
              <option selected className="myfont" />
              <option value={'Bổ sung giờ vào'}>1: Bổ sung giờ vào</option>
              <option value={'Bổ sung giờ ra'}>2: Bổ sung giờ ra</option>
              <option value={'Bổ sung giờ vào và giờ ra'}>3: Bổ sung giờ vào và giờ ra</option>
              <option value={'Khác'}>4: Khác</option>
              
            </select>
          </div>
          {/*---------------------------*/}
          {/*----------------------------*/}
         
        </form>
      </div>
    );
  }


}