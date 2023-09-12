import { Children } from 'react';
import './App.css';
import Home from './Components/HomePage/Home';
import LayOut from './Components/LayOut/LayOut';
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';

let routers = createBrowserRouter([
  {
    path: "", element: <LayOut></LayOut>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "Home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "Portfolio", element: <Portfolio></Portfolio>}
    ]
  },
])


function App() {
  return (<>
    <RouterProvider router={routers}></RouterProvider>
  </>

  );
}

export default App;
