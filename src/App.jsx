import { createBrowserRouter,RouterProvider,Link } from 'react-router-dom'
import LoadingScreen from '../Screens/LoadingScreen.jsx'
import S1Beginning from '../Story/S1Beginning.jsx'
import S2Blessings from '../Story/S2Blessings.jsx'
import S3Floor7 from '../Story/S3Floor7.jsx'
import S4Floor6 from '../Story/S4Floor6.jsx'
import S5Floor5 from '../Story/S5Floor5.jsx'
import S6Floor4 from '../Story/S6Floor4.jsx'
import S7Floor3 from '../Story/S7Floor3.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<LoadingScreen/>
  },
  {
    path:"/beginning",
    element:<S1Beginning/>
  },
  {
    path:"/blessings",
    element:<S2Blessings/>
  },
  {
    path:"/Floor7",
    element:<S3Floor7/>
  },
  {
    path:"/Floor6",
    element:<S4Floor6/>
  },
  {
    path:"/Floor5",
    element:<S5Floor5/>
  },
  {
    path:"/Floor4",
    element:<S6Floor4/>
  },
  {
    path:"/Floor3",
    element:<S7Floor3/>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App