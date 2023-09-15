import { Children } from 'react';
import './App.css';
import Home from './Components/HomePage/Home';
import LayOut from './Components/LayOut/LayOut';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

let routers = createBrowserRouter([
  {
    path: "", element: <LayOut></LayOut> ,
    children: [
      { path: "", element: <Home></Home> },
      { path: "Home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "Portfolio", element: <Portfolio></Portfolio>},
      { path: "Contact", element: <Contact></Contact>},
      { path: "*", element: <NotFound></NotFound>}
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
