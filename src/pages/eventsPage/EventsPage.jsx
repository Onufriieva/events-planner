import EventsList from '../../components/eventsList/EventsList';
import { Outlet } from "react-router-dom"

export default function EventsPage () {
      return(
        <div>
         {<EventsList/>}
         <Outlet/>
        </div>
    )

}

