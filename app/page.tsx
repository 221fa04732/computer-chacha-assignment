import Header from "@/components/header"
import Dropmenu from "@/components/dropmenu"

export default function Home(){
    return(<div className="flex flex-col justify-center items-center w-full min-h-screen">
        <div className="w-full fixed top-0 hidden lg:block z-50 bg-black">
            <Header />
        </div>
        <div className="w-full fixed top-0 lg:hidden z-50 bg-black">
            <Dropmenu />
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-[73px]">
            
        </div>
    </div>)
}