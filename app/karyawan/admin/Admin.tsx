"use client"
import Link from "next/link"
import { AdminType } from "../types"

type props = {
    item: AdminType
}

const Admin = (myProp: props) =>{
    return(
        <div className="w-full flex flex-wrap my-2 border rounded-md">
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">ID</small>
                <span><Link href={`/karyawan/admin/${myProp.item.id}`}>{myProp.item.id}</Link></span>
            </div>
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">Nama Pengguna</small>
                <span>{myProp.item.name}</span>
            </div>
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">NIK</small>
                <span>{myProp.item.nik}</span>
            </div>
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">adress</small>
                <span>{myProp.item.address}</span>
            </div>
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">phone</small>
                <span>{myProp.item.phone}</span>
            </div>
            
            <div></div>

        </div>
    )
}
export default Admin
// id: number
//     username: string
//     password: string
//     nik: number
//     name: string
//     address: string
//     phone: number