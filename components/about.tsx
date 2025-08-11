import Image from "next/image";

export default function About(){
    return(<div className="grid md:grid-cols-2 grid-cols-1 place-items-center bg-white text-black px-2 md:px-[168px] gap-[128px] pb-24">
        <div className="order-2 md:order-1">
            <Image src={"/image.png"} alt="about" width={100} height={100} className="w-[343px] h-[560px] md:h-[696px] md:w-[432px] rounded-full"/>
        </div>
        <div className="order-1 md:order-2">
            <div className="text-[20px] font-bold" style={{"color":"#F9784CCC"}}>ABOUT</div>
            <div className="text-[40px] font-medium leading-12 italic md:not-italic">Crafting UNIQUE BRAND EXPERIENCES SINCE 2014</div>
            <div className="text-[18px] pt-[16px]">With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.</div>
            <button className="border rounded-full py-[12px] px-[24px] mt-[40px]">SCHEDULE A CALL</button>
        </div>
    </div>)
}