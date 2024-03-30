import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './Layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
