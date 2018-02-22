import React from 'react';
import ShoppingList from './ShoppingList';
import './style.css';

class App extends React.Component {
  render() {
    return (
        <div className="appContainer">
          <ShoppingList />
        </div>
    )
  }
}

export default App;
