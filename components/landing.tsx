export default function Landing(){
    return(<div className="w-11/12 bg-neutral-900 flex flex-col justify-center items-start pt-12 pb-2">
        <div className="font-semibold">👋 Hey, I am Erica</div>
        <div style={{background: "linear-gradient(175.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"
        }} className="text-[56px] lg:text-[95px] leading-16 lg:leading-24 lg:pr-16 py-6">A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
        </div>
        <div className="w-full flex gap-[17px] sm:justify-start justify-center">
            <button className="border border-white rounded-full py-[12px] px-[24px] text-white">MY WORKS</button>
            <button className="bg-white text-black border border-white rounded-full py-[12px] px-[24px]">LET'S TALK</button>
        </div>
    </div>)
}