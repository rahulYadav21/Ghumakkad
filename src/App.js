import './App.css';
import Navbar from './components/navbar/navbar.components';
import Home from './components/home/Home.component';
import About from './components/about/about.component';
import Destination from './components/destination/Destination'
import Tour from './components/tour/tour.component';
import ContactUs from './components/contactUs/contactUs.component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/destination",
        element: <Destination />
      },
      {
        path: "/tour",
        element: <Tour />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
    ]
  },
  
])
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
