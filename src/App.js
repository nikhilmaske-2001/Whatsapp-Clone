import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
     <div className="app_body">
       <Router>
          <Sidebar/>
         <Switch>
           <Route path="/users/:roomId">
             <Chat/>
           </Route>
           <Route path="/">
             <Chat/>
           </Route>
         </Switch>
       </Router>
       
     </div>
    </div>
  );
}

export default App;
