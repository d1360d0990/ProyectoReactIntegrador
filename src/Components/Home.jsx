import '../Styles/Home.css'
import SearchAppBar from "./AppBar"
import { SideBar } from "./SideBar"
import { DatosRender } from './DatosRender'




export const Home = () => {
  return (
<>
 
 <SearchAppBar />
      <div className='medio'>
      <SideBar />
<DatosRender/>
      </div>
</>

  )
}


