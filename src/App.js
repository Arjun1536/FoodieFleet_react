

import './App.css';
import Header from "./components/Header";
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';




const App=()=> {

const [userName,setuserName] = useState()

useEffect(()=>{
const data = {name:"Arjun Singh"}
setuserName(data.name)
},[])

  return (
    <Provider store ={appStore}>
    <userContext.Provider value={{userLoggedIn:userName,setuserName}}>
    <div className="App">
          <Header />
          
        < Outlet/>
       
    </div>
    </userContext.Provider>
    </Provider>
  );
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <RouterProvider router ={appRouter}/>
 
// );
export default App;
