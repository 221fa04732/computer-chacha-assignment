import Header from "@/components/header"
import Dropmenu from "@/components/dropmenu"
import { Company } from "@/components/company"
import Landing from "@/components/landing"

export default function Home(){
    return(<div className="flex flex-col justify-center items-center w-full min-h-screen">
        <div className="w-full fixed top-0 hidden lg:block z-50 bg-neutral-900">
            <Header />
        </div>
        <div className="w-full fixed top-0 lg:hidden z-50 bg-neutral-900">
            <Dropmenu />
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-[73px] bg-neutral-900">
            <Landing />
            <Company />
            <div className="w-full min-h-96 bg-white"></div>
        </div>
    </div>)
}