import Financial from './pages/financial/index.jsx'
import Consultants from './pages/consultants/index.jsx'
import Leeds from './pages/settings/leeds/index.jsx'
import Complaints from './pages/complaints/index.jsx'

let router = [
    {path: '/', element:<Financial/>},
    {path: '/consultants', element:<Consultants/>},
    {path: '/settings/leeds', element:<Leeds/>},
    {path: '/complaints', element:<Complaints/>},
]

export default router