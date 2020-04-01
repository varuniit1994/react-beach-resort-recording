// import React from 'react'
// import RoomsFilter from "./RoomsFilter"
// import RoomsList from "./RoomsList"
// import {RoomConsumer} from "../context"
// import Loading from "../components/Loading"

// export default function RoomContainer() {
//     return (

//         <RoomConsumer>
//             {
//                 value=>{
//                    // console.log(value);
//                     const {loading,sortedRooms,rooms}=value;
//                     if(loading)
//                     {
//                         return <Loading></Loading>
//                     } 
//                     return(
//                         <>
//                             Hello from Rooms Container.
//                             <RoomsFilter rooms={rooms}></RoomsFilter>
//                             <RoomsList rooms={sortedRooms}></RoomsList>
//                        </>
//                     );
//                 }
//             }
//         </RoomConsumer>

//     )
// }


import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { withRoomConsumer} from "../context";

function RoomContainer({context})
{
    const{loading,sortedRooms,rooms}=context;
    if(loading)
    {
        return <Loading></Loading>
    }
    return(
        <>
            
            <RoomsFilter rooms={rooms} ></RoomsFilter>
            <RoomsList rooms={sortedRooms}></RoomsList>
        </>
    )
}


export default withRoomConsumer(RoomContainer)