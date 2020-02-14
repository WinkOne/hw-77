import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Main from "./containers/Main";
import NewGoods from "./containers/NewGoods";
import Layout from "./components/Layuot/Layout";

function App() {
  return (
    <div className="App">
       <Layout>
           <Switch>
               <Route path={"/"} exact component={Main}/>
               <Route path={"/new"} exact component={NewGoods}/>
           </Switch>
       </Layout>
    </div>
  );
}

export default App;
