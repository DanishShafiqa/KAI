import { ScheduleType } from "../types";
import DropJadwal from "./dropSchedule";
import EditJadwal from "./editSchedule";

type props = {
    item: ScheduleType;
};

export const showTime = (date: string) => {
    const currentDate = new Date(date)
    return currentDate.toLocaleTimeString(
        `id-ID`,
        {
            year: "numeric",
            month: "long",
            day: '2-digit'
        }
    )
}
const Schedule = (myProp: props) => {
return (
    <div className="flex flex-wrap w-full border rounded-md shadow-md my-2">

    {/* Departured */}
    <div className="w-full md:w-3/12 p-3 flex flex-col">
    <small className="text-xs font-semibold text-sky-700">
        Berangkat dari
    </small>
    <strong>{myProp.item.departured_location}</strong>
    <small className="text-xs font-semibold text-sky-700">
        Waktu keberangkatan
    </small>
    <strong>{showTime(myProp.item.departured_time)}</strong>
    </div>

    {/* Arrived */}
    <div className="w-full md:w-3/12 p-3 flex flex-col">
    <small className="text-xs font-semibold text-sky-700">
        Tiba di
    </small>
    <strong>{myProp.item.arrived_location}</strong>
    <small className="text-xs font-semibold text-sky-700">
        Waktu kedatangan
    </small>
    <strong>{showTime(myProp.item.arrived_time)}</strong>
    </div>

    {/* Price */}
    <div className="w-full md:w-4/12 p-3 flex flex-col">
    <small className="text-xs font-semibold text-sky-700">
        Unit Kereta
    </small>
    <strong>{myProp.item.train_details.name}</strong>
    <small className="text-xs font-semibold text-sky-700">
        Harga
    </small>
    <strong>{myProp.item.price.toLocaleString(`en-US`, {style:`currency`, currency: `IDR`})}</strong>
    </div>

    <div className="w-full md:w-2/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">Opsi</small>
                <div className="flex gap-2 items-center">
                    <EditJadwal item={myProp.item}/>
                    <DropJadwal item={myProp.item}/>
                </div>
            </div>
    </div>

    
);
};
export default Schedule;