import React from 'react';
import {Link} from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default class Content extends React.Component{

    render()
    {
        return (
              <div>
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4 pl-3 pr-3">
                <h1 className="h3 mb-0 text-gray-800">HỆ THỐNG QUẢN LÝ </h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
              </div>
              <hr/>
              {/* Content Row */}
              <div className="row pl-3 pr-3">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                             <Link to="/main_view"> <h6>Đề xuất bổ sung dấu vân tay</h6></Link>
                          </div>
                        </div>
                        <div className="col-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          <Link to="/extra_time"><h6>Đề xuất làm thêm giờ</h6></Link>
                          </div>
                        </div>
                        <div className="col-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          <Link to="/input"><h6>Mở mới nhà phân phối</h6></Link>
                          </div>
                        </div>
                        <div className="col-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pending Requests Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          <Link to="/input"><h6>Thay đổi đại chỉ nhà phân phối</h6></Link>
                          </div>
                        </div>
                        <div className="col-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}