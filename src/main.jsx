import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import HomePage from './HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/About', element: <About /> },
      { path: '/Service', element: <Service /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Team', element: <Team /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
