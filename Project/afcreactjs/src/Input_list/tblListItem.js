import React from 'react';

export default class tblListItem extends React.Component{

  constructor(props) {
      super(props);
        this.state = {
            listItem:[],
        };
    }
  
  componentDidMount()
  {
      this.setState({listItem:this.props.listItem})
    
  }

    render()
    {
               
                return (
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 myfont text-left">
                    <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Attached File</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div><hr /><table className="table border">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col" className="border text-center">STT</th>
                        <th scope="col" className="border text-center">MÃ NHÂN VIÊN</th>
                        <th scope="col" className="border text-center">TÊN NHÂN VIÊN</th>
                        <th scope="col" className="border text-center">EMAIL</th>
                        <th scope="col" className="border text-center">TỪ NGÀY</th>
                        <th scope="col" className="border text-center">ĐẾN NGÀY</th>
                        <th scope="col" className="border text-center">TỪ GIỜ</th>
                        <th scope="col" className="border text-center">ĐẾN GIỜ</th>
                        <th scope="col" className="border text-center">LÝ DO</th>
                        <th scope="col" className="border text-center">GHI CHÚ</th>
                        <th scope="col" className="border text-center"> <a href="#" className="d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-file-o fa-sm text-white-50" /><span className="text-right myfont">Xóa</span></a></th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.listItem.map((Input_List, index) => (
                        // Input_List.itemLists.map((InpuitemList, index1) => (
                            index = index + 1,
                            
                       <tr>
                            <td scope="row" className="border text-center">{index}</td>
                            <td className="border">{Input_List.StaffCode}</td>
                            <td className="border">{Input_List.StaffName}</td>
                            <td className="border text-center">{Input_List.StaffEmail}</td>
                            <td className="border text-center">{Input_List.DateFrom}</td>
                            <td className="border text-center">{Input_List.DateTo}</td>
                            <td className="border text-center">{Input_List.TimeFrom}</td>
                            <td className="border text-center">{Input_List.TimeTo}</td>
                            <td className="border">{Input_List.Reason}</td>
                            <td scope="row" className="border">{Input_List.Note}</td>
                            <td className="border text-center"><div className="form-check"> 
                                    
                                    <input type="checkbox" className="form-check-input" id="index" name="option1" defaultValue="something"  /> 
                                    {/* <div className="form-check"> 
                                    <label className="form-check-label" htmlFor="check1"> 
                                    <input type="checkbox" className="form-check-input" id="check1" name="option1" defaultValue="something" defaultChecked /> 
                                    Option 1 
                                    </label> 
                                </div>
                                     */}
                                </div>
                            </td>
                        </tr>
                        // ))
                    ))}
                        
                      
                    </tbody>
                    </table>
                </div>
               );
            }
        }

                  


