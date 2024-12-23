import EventTable from "../../Components/EventTable/EventTable"
import useFetch from "../../Hooks/useFetch"
import { baseURL, eventsURL } from "../../App"
import { getevents } from "../../service/getApi"
import ResponsiveAppBar from "../../Components/Header/ResposiveAppBar"





export const Eventos = () => {
  const {data,loading} = useFetch(`${baseURL}${eventsURL}`, getevents)
  console.log(data);
  
  return (
    <>
    <ResponsiveAppBar/>
    <EventTable events={data}/>
    </>
  )
}
