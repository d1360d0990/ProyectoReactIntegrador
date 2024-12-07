
import './App.css'
import SearchAppBar from './Components/AppBar'
import { DatosRender } from './Components/DatosRender'
import { SideBar } from './Components/SideBar'
import StickyHeadTable from './Components/StickyHeader'


function App() {


  return (
    <>
      <SearchAppBar/>
      <div className='medio'>
      <SideBar />
      <div>
<DatosRender/>      
      </div>
      </div>


    </>
  )
}

export default App
