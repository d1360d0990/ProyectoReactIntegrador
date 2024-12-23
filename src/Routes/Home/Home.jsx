import ResponsiveAppBar from '../../Components/Header/ResposiveAppBar'
import './Home.css'
import { Main } from '../../Components/Main/Main'





export const Home = () => {


  return (
    <>
      
        <ResponsiveAppBar />
        <div className='medio'>
          <Main/>
        </div>

    </>

  )
}


