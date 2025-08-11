export default function Header(){
    return(<div className="flex justify-between items-center h-[73px] w-full px-[56px] py-[16px]">
        <div className="font-montserrat font-semibold text-[14px] text-white">ERICA JONES</div>
        <div className="flex text-[14px] gap-[40px] text-white">
            <div className="cursor-pointer">ABOUT ME</div>
            <div className="cursor-pointer">PORTFOLIO</div>
            <div className="cursor-pointer">SKILLS</div>
            <div className="cursor-pointer">SERVICES</div>
            <div className="cursor-pointer">TESTIMONIALS</div>
        </div>
        <div className="bg-white text-black py-[12px] px-[24px] rounded-[40px] cursor-pointer">GET IN TOUCH</div>
    </div>)
}