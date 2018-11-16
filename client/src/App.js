import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AppNavbar />
          <Container>
          <ItemModal />
          <ShoppingList />
          </Container>
          <div class='i-container'>
    <div class='instructions'>
    <span>
    Click the <u><strong>ADD ITEM</strong></u> Button to get started.
    </span></div>
          
          
        </div>
        </div>
        
      </Provider>
      
    );
    
  }
}

export default App;
