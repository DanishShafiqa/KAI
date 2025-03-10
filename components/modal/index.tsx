import { ReactNode } from "react"

type props = {
    children: ReactNode,
    isShow: boolean
}
const Modal=(myProp:props)=>{

    return(
        <div className={`${myProp.isShow ? `block`:`hidden`} z-[1024] w-dvw h-dvh fixed top-0 left-0 bg-black bg-opacity-75 flex justify-center items-center`}>
            <div className="w-5/6 md:w-4/6 lg:w-1/2 bg-white ">
                {myProp.children}
            </div>
        </div>
    )
}

export default Modal