import { KursiType } from "../../types"
import DropKursi from "./dropSeat"
import EditKursi from "./editSeat"

type props = {
    item: KursiType
}
const Seat = (myProp: props) =>{
    
    return(
        <div className="flex-col size-20 rounded-sm flex items-center justify-center bg-sky-700">
            <div>
                <span className="text-white font-semibold">{myProp.item.seat_number}</span>
            </div>
            <div>
                <div className="flex gap-1">
                    <EditKursi item={myProp.item}/>
                    <DropKursi item={myProp.item}/>
                </div>
            </div>
        </div>
    )
}
export default Seat