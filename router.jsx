import Financial from './pages/financial/index.jsx'
import Consultants from './pages/consultants/index.jsx'
import Settings from './pages/settings/index.jsx'
import Complaints from './pages/complaints/index.jsx'

let router = [
    {path: '/', element:<Financial/>},
    {path: '/consultants', element:<Consultants/>},
    {path: '/settings', element:<Settings/>},
    {path: '/complaints', element:<Complaints/>},
]

export default router