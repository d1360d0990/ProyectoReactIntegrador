import useFetch from "../../Hooks/useFetch";
import EventTable from "../EventTable/EventTable"
import PageContainerBasic from "../PageContainer/PageContainerBasic"
import { baseURL, eventsURL } from "../../App"
import { getevents } from "../../service/getApi"



export const Main = () => {
  const { data, loading } = useFetch(`${baseURL}${eventsURL}`, getevents);
  return (
    <>
    <PageContainerBasic />
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <EventTable events={data} />
      )}
    </>
  )
}
