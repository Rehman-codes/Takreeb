import { Download } from "lucide-react";

export default function Top() {

    return (
        <div className="fixed top-0 left-0 w-full h-[10%] flex justify-between items-center">
            <div className="h-10 w-10 ml-4">
                <img src="/event.png" alt="profile pic" className="border-[0.5px] border-black cursor-pointer h-full w-full object-cover" />
            </div>
        </div>
    );
}