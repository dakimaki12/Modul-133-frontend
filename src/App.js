/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import "./cssClasses.scss";
import "antd/dist/reset.css";
import RequireAuth from "./assets/RequireAuth";
import Products from "./pages/Products/Products";
import { getUser } from "./state/user/userSelector";
import { login } from "./state/user/userThrunk";
import Error404 from "./pages/Error404/Error404";
import MainHeader from "./pages/MainHeader/MainHeader";
import Checkout from "./pages/Checkout/Checkout";
import Notification from "./pages/Notification/Notification";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/Cart";
import ItemOverview from "./pages/ItemOverview/ItemOverview";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import './cssClasses.scss';
import 'antd/dist/reset.css';
import RequireAuth from './assets/RequireAuth';
import Products from './pages/Products/Products';
import { getUser } from './state/user/userSelector';
import { login } from './state/user/userThrunk';
import Error404 from './pages/Error404/Error404';
import Logout from './pages/Logout/Logout';
import Notification from './pages/Notification/Notification';
import Dashboard from './pages/Dashboard/Dashboard';

/*----------------------------------------------------------------------------*/
/* App                                                                        */
/*----------------------------------------------------------------------------*/

const App = () => {
  const dispatch = useDispatch();
  const { loaded } = useSelector(getUser);

  useEffect(() => {
    dispatch(login("", "", true));
  }, [dispatch]);

  return (
    <>
      {loaded && (
        <>
          <div className="whole-page">
            <MainHeader />
            <Notification />
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="login" element={<Login />} />
              <Route
                path="products"
                element={
                  <RequireAuth>
                    <Products />
                  </RequireAuth>
                }
              />
              <Route
                path="item/:id"
                element={
                  <RequireAuth>
                    <ItemOverview />
                  </RequireAuth>
                }
              />
              <Route
                path="dashboard"
                element={
                  <RequireAuth roles={['Admin']}>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<Error404 />} />
              <Route
                path="checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />
              {/*               <Route
                path="cart"
                element={
                  <RequireAuth>
                    <Cart />
                  </RequireAuth>
                }
              /> */}
              <Route path='*' element={<Error404 />} />
              <Route path='logout' element={<Logout />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default App;
