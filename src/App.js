import React from "react";
import {BrowserRouter} from 'react-router-dom';
import createRoutes from "./routes";
import './App.css';




let routes = createRoutes()



function App() {


  return (
     <>
         <BrowserRouter>
             {routes}
         </BrowserRouter>
         </>
  );
}

export default App;
