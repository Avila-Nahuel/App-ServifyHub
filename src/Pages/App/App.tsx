
import './globals.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import NotFound from '../NotFound/NotFound'
import SigIn from '../SigIn/SigIn'

//components


const AppRoutes = () =>{
    let routes = useRoutes([
        {path: '/', element: <Home></Home>},
        {path: '/my-account', element: <MyAccount></MyAccount>},
        {path: '/*', element: <NotFound></NotFound>},
        {path: '/sig-in', element: <SigIn></SigIn>},
    ])
    return routes
}

const App = ()=> {
    return (    
            <BrowserRouter>
                <AppRoutes></AppRoutes>
            </BrowserRouter>
    )
}

export default App
