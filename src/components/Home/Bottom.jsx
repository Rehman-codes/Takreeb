import { ArrowUp, Calendar, Contact } from 'lucide-react';

export default function Bottom() {
    const navIcons = [
        { Icon: ArrowUp, title: "Top", id: "top" },
        { Icon: Calendar, title: "Events", id: "events" },
        { Icon: Contact, title: "Contact", id: "contact" },
    ];

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex justify-center items-center fixed bottom-0 left-0 w-full h-[10%]">
            <nav className="border-[0.5px] border-black h-[60%] rounded-3xl bg-white inline-flex justify-around items-center px-4">
                {/* Navigation Icons */}
                {navIcons.map(({ Icon, title, id }, index) => (
                    <div key={index} className="cursor-pointer p-2" onClick={() => handleScroll(id)}>
                        <Icon size={24} />
                    </div>
                ))}
            </nav>
        </div>
    );
}