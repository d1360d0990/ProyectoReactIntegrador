import PageContainerBasic from "./Datos/OrdenData"
import { Presupuestar } from "./Datos/Presupuestar"
import '../Styles/DatosRender.css'
import { Box } from "@mui/material"


export const DatosRender = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Presupuestar/>
    <PageContainerBasic/>
    </Box>
      
       
    </>
  )
}
