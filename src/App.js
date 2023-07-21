import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Card from "./Card";
import Userform from "./Userform";
import Createform from "./Createform";
import Userview from "./Userview";
import Useredit from "./Useredit";
import Userdelete from "./Userdelete";
import Product from "./Product";
import CreateProduct from "./CreateProduct";

import ViewProduct from "./ViewProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { UserProvider } from "./Usercontext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <body id="page-top">
        <div id="wrapper">
          <UserProvider value={{ users, setUsers }}>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Topbar />

                <div className="container-fluid">
                  <Routes>
                    <Route path="/dash" element={<Card />}></Route>
                    <Route path="/ush" element={<Userform />}></Route>
                    <Route path="/create" element={<Createform />}></Route>
                    <Route path="/user-view/:id" element={<Userview />}></Route>
                    <Route path="/user-edit/:id" element={<Useredit />}></Route>
                    <Route
                      path="/user-delete/:id"
                      element={<Userdelete />}
                    ></Route>
                    <Route path="/prod" element={<Product />}></Route>
                    <Route path="/crprod" element={<CreateProduct />}></Route>
                    <Route
                      path="/product-view/:id"
                      element={<ViewProduct />}
                    ></Route>
                    <Route
                      path="/product-edit/:id"
                      element={<EditProduct />}
                    ></Route>
                    <Route
                      path="/product-delete/:id"
                      element={<DeleteProduct />}
                    ></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </UserProvider>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
