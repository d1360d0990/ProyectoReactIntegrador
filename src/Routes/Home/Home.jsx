import ResponsiveAppBar from '../../Components/AppBar/AppBar'
import { DatosRender } from '../../Components/DatosRender'
import './Home.css'





export const Home = () => {
  return (
    <>
      
        <ResponsiveAppBar />
        <div className='medio'>
          <DatosRender />
        </div>

    </>

  )
}


