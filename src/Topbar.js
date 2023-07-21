import React, { useContext } from 'react'
import UserContext from './Usercontext'

function Topbar(props) {
    const userCxt=useContext(UserContext)
  return (
    
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>

       
        <ul className="navbar-nav ml-auto">

            
            <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                </a>
                
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small"
                                placeholder="Search for..." aria-label="Search"
                                aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>

            
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    
                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
                
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                        Alerts Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 12, 2019</div>
                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-success">
                                <i className="fas fa-donate text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 7, 2019</div>
                            $290.29 has been deposited into your account!
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-warning">
                                <i className="fas fa-exclamation-triangle text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 2, 2019</div>
                            Spending Alert: We've noticed unusually high spending for your account.
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                </div>
            </li>

          
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    
                    <span className="badge badge-danger badge-counter">7</span>
                </a>
               
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                alt="..."/>
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                problem I've been having.</div>
                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                alt="..."/>
                            <div className="status-indicator"></div>
                        </div>
                        <div>
                            <div className="text-truncate">I have the photos that you ordered last month, how
                                would you like them sent to you?</div>
                            <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                alt="..."/>
                            <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                the progress so far, keep up the good work!</div>
                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                alt="..."/>
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                told me that people say this to all dogs, even if they aren't good...</div>
                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

           
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userCxt.name}</span>
                    <img className="img-profile rounded-circle"
                        src="data:image/png;base64,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"/>
                </a>
                
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>

        </ul>

    </nav>
  )
}

export default Topbar