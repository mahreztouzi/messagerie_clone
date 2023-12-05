

import Messagerie from './component/Messagerie'
import Sidebar from './component/Sidebar'

function App() {
 

  return (
    <div className="flex w-full overflow-x-hidden bg-gray-100">
       <Sidebar />
    <Messagerie />
  </div>
  )
}

export default App
