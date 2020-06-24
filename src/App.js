import React from 'react';
import './css/styles.css';
import Meal from './components/Meal';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Meal />
      </div>
     );
  }
}


export default App;
