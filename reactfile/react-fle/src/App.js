import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import uploadcomponent from './components/uploadcomponent'

function App() {
  return (
    <div className="App">
       <Router>
      <div className = "conatiner">
       

          <div className="container">
            <Switch>
              <Route path="/" exact component = {uploadcomponent}></Route>
            
            </Switch>
    
          </div>

      
     </div>
   </Router>
    </div>
  );
}

export default App;
