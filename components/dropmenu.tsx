"use client"

import { useState } from "react"
import Image from "next/image"

export default function Dropmenu(){
    const [visible, setVisible] = useState<boolean>(false)
    return(<div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-between items-center h-[73px] w-11/12 py-[16px]">
            <div className="font-montserrat font-semibold text-[14px]">ERICA JONES</div>
            <button onClick={()=>{
                setVisible(!visible)
            }} className="cursor-pointer">
                {visible ? <Image alt="icon" width={40} height={40} src={"/cross.png"}  /> : 
                <Image alt="icon" width={30} height={30} src={"/menu.png"}  />}
            </button>
        </div>
        <Menubar visible={visible}/>
    </div>
)}

function Menubar({visible} : {visible : boolean}){
    return(<div className={`h-[538px] w-full bg-neutral-900 ${visible ? "block" : "hidden"} relative overflow-hidden -z-20`}>
        <div style={{"background": "linear-gradient(342.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%"}} className="h-[334px] w-full absolute top-[348px] blur-2xl -z-10"></div>
        <div className="h-full w-full flex flex-col justify-between items-center z-10 py-12">
            <div className="w-11/12 flex flex-col items-start text-[21px] gap-10 text-white">
                <div className="cursor-pointer">ABOUT ME</div>
                <div className="cursor-pointer">PORTFOLIO</div>
                <div className="cursor-pointer">SKILLS</div>
                <div className="cursor-pointer">SERVICES</div>
                <div className="cursor-pointer">TESTIMONIALS</div>
            </div>
            <div className="bg-white text-black py-[12px] px-[24px] rounded-[40px] flex justify-center w-11/12 cursor-pointer">GET IN TOUCH</div>
        </div>
    </div>)
}