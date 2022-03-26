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
      </Switch>
    </ProductState>
  </Router>

      </>
  );
}

export default App;
