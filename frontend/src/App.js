import './index.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SubCategorie from './components/SubCategorie';
import ProductState from './context/ProductState';
import RetrieveCategoriesProps
 from './components/RetrieveApiProps/RetrieveCategoriesProps';

import RetrieveSubCategoriesProps from './components/RetrieveApiProps/RetrieveSubCategoriesProps';

import DisplayProducts from './components/DisplayProducts';
import RetrieveProductsProps from './components/RetrieveApiProps/RetrieveProductsProps';
import DisplaySpecificProduct from './components/DisplaySpecificProduct';
import SignUp from './components/SignUp';
import Login from './components/Login';
import RegisterOrganization from './components/RegisterOrganization';
import LoginOrganization from './components/LoginOrganization';
import WishList from './components/WishList';
import RetrieveProductSpecificProps from './components/RetrieveApiProps/RetrieveProductSpecificProps';
import UserAccountInfo from './components/UserAccountInfo';
import GetAccontProps from './components/RetrieveApiProps/GetAccontProps';
function App() {
  return (
    <>
      <Router>
    <ProductState>
      <Switch>
          <Route exact path="/">
              <Navbar/>
              <HomePage/>
              {/* <Category/> */}
              <RetrieveCategoriesProps></RetrieveCategoriesProps>
              <Footer/>
          </Route>

          <Route exact path="/Sub-Categories/:CategoryId">
              {/* <SubCategorie/> */}
              <RetrieveSubCategoriesProps></RetrieveSubCategoriesProps>
          </Route>

          <Route exact path="/DisplayProducts/:CategoryIdentifier/:SubCat">
              <RetrieveProductsProps/>
          </Route>

          <Route exact path="/DisplaySpecificProducts/:productId">
              <RetrieveProductSpecificProps/>
          </Route>

          <Route exact path="/SignUp">
              <SignUp/>
          </Route>

          <Route exact path="/Login">
              <Login/>
          </Route>

          <Route exact path="/Seller/Site/OrgRegister">
              <RegisterOrganization/>
          </Route>

          <Route exact path="/Seller/Site/OrgLogin">
              <LoginOrganization/>
          </Route>

          <Route exact path="/WishList">
              <WishList/>
          </Route>

          <Route exact path="/AccountInfo">
              <GetAccontProps/>
          </Route>
      </Switch> 
    </ProductState>
  </Router>

      </>
  );
}

export default App;
