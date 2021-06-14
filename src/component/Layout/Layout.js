import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="container p-4 p-sm-1">
      <div className="row">
         <div className="col-xl-8 col-lg-10"> 
            <div className="card">
              <div className="card-body">
                {children}
              </div>

            </div>
          </div>
      </div>
      
    </div>
    );
};

export default Layout;