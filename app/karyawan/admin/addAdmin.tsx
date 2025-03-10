"use client"
import Modal from "@/components/modal"
import { axiosInstance } from "@/helper/api"
import { getCookie } from "@/helper/client-cookie"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast, ToastContainer } from "react-toastify"



const AddAdmin = ()=>{
    const[nik, setNik] = useState<string>("")
    const[name, setName] = useState<string>("")
    const[address, setAddress]=useState<string>("")
    const[phone, setPhone]=useState<string>("")
    const[show, setShow]=useState<boolean>(false)
    const router = useRouter()

    const openModal=()=>{
        setShow(true)
        setNik("")
        setName("")
        setAddress("")
        setPhone("")
    }

    const closeModal=()=>{
        setShow(false)
    }

    const handleSubmit= async(e: FormEvent)=>{
        try {
            e.preventDefault()
            const TOKEN = getCookie(`token`)
            const url = `/admin/register`
            const requestData = {nik, name, address, phone}

            const response: any = await axiosInstance.post(url, requestData,{
                headers:{
                    authorization: `Bearer ${TOKEN}`
                }
            })
            const message = response.data.message
            if(response.data.success == true){
                toast(message,
                    {
                        containerId: `toastAddAdmin`,
                        type: "success"
                    }
                )
                setShow(false)
                setTimeout(()=>router.refresh(), 1000)
            }else {
                toast(message,
                    {
                        containerId: `toastAddAdmin`,
                        type: "warning"
                    }
                )
            }
        } catch (error) {
            console.log(error)
            toast(`Something wrong`,
                {
                    containerId: `toastAddAdmin`,
                    type: "error"
                }
            )
        }
    }
    return(
        <div>
            <ToastContainer containerId={`toastAddAdmin`}/>
            <button type="button" onClick={()=>openModal()} className="px-4 py-2 rounded-md bg-lime-600 hover:bg-lime-500 text-white">Tambah Admin</button>
            <Modal isShow={show}>
                <form onSubmit={handleSubmit}>
                    <div className="w-full p-3 rounded-t-lg">
                        <h1 className="font-semibold text-lg">Tambah Admin</h1>
                        <span className="text-sm text-slate-500">Pastikan data yang diisi sudah benar</span>
                    </div>
                    <div className="w-full p-3">
                        <div className="my-2 border rounded-md p-3">
                            <small className="text-sm fonst-semibold text-sky-600">NIK</small>
                            <input type="text" id={`nik`} value={nik} onChange={e=>setNik(e.target.value)} required={true} className="w-full p-1 outline-none focus:border-b-sky-600 focus:border-b"/>
                        </div>
                        <div className="my-2 border rounded-md p-3">
                            <small className="text-sm fonst-semibold text-sky-600">Name</small>
                            <input type="text" id={`name`} value={name} onChange={e=>setName(e.target.value)} required={true} className="w-full p-1 outline-none focus:border-b-sky-600 focus:border-b"/>
                        </div>
                        <div className="my-2 border rounded-md p-3">
                            <small className="text-sm fonst-semibold text-sky-600">Address</small>
                            <input type="text" id={`address`} value={address} onChange={e=>setAddress(e.target.value)} required={true} className="w-full p-1 outline-none focus:border-b-sky-600 focus:border-b"/>
                        </div>
                        <div className="my-2 border rounded-md p-3">
                            <small className="text-sm fonst-semibold text-sky-600">Phone</small>
                            <input type="text" id={`phone`} value={phone} onChange={e=>setPhone(e.target.value)} required={true} className="w-full p-1 outline-none focus:border-b-sky-600 focus:border-b"/>
                        </div>
                    </div>
                    <div className="w-full p-3 rounded-b-lg flex items-center justify-end gap-2">
                        <button type="button" onClick={()=> closeModal()} className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white">Close</button>
                        <button type="submit" className="px-4 py-2 rounded-md bg-sky-700 hover:bg-sky-600 text-white">Save</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
export default AddAdmin
// export interface AdminType {
//     id: number
//     username: string
//     password: string
//     nik: number
//     name: string
//     address: string
//     phone: number
// }