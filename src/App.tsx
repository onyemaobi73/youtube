import { RouterProvider } from 'react-router-dom'
import mainRoutes from "./router/mainRoutes"

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoutes} />
    </div>
  )
}

export default App