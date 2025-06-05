import { Download } from "lucide-react";

export default function Top() {

    return (
        <div className="fixed top-0 left-0 w-full h-[10%] flex justify-between items-center px-4 md:px-8">
            <div className="h-8 w-8 md:h-10 md:w-10">
                <img src="/event.png" alt="profile pic" className="border-[0.5px] border-black cursor-pointer h-full w-full object-cover" />
            </div>
        </div>
    );
}