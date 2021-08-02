import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from "./Components/Header";
import ExpenseDasboardPage from "./Components/ExpenseDashboardPage";
import AddExpensePage from "./Components/AddExpensePage";
import EditExpensePage from "./Components/EditExpensePage";
import HelpExpensePage from "./Components/HelpExpensePage";
import NotFoundPage from "./Components/NotFoundPage";

import './App.css';const AppRouter=()=>(
  <BrowserRouter>
     <Header/>
     <Switch>
    <Route path="/" exact={true} component={ExpenseDasboardPage}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit/:id" component={EditExpensePage}/>
    <Route path="/help" component={HelpExpensePage}/>
    <Route component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
  );


export default AppRouter;
