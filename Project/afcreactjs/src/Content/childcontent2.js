import React from 'react';

export default class ChildContent2 extends React.Component{

    render()
    {
        return (
            <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            <a href="/input">
                              <h6>Đề xuất làm thêm giờ</h6>
                            </a>
                          </div>
                        </div>
                        <div className="col-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           
          );
    }
}