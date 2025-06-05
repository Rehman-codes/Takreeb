import { ArrowUp, Calendar, Contact } from 'lucide-react';

export default function Bottom() {
    const navIcons = [
        { Icon: ArrowUp, title: "Top", id: "intro" },
        { Icon: Calendar, title: "Events", id: "events" },
        { Icon: Contact, title: "Contact", id: "contact" },
    ];

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex justify-center items-center fixed bottom-0 left-0 w-full h-[10%] px-4 md:px-8">
            <nav className="border-[0.5px] border-black h-[50%] md:h-[60%] rounded-3xl bg-white inline-flex justify-around items-center px-2 md:px-4">
                {/* Navigation Icons */}
                {navIcons.map(({ Icon, title, id }, index) => (
                    <div key={index} className="cursor-pointer p-1 md:p-2" onClick={() => handleScroll(id)}>
                        <Icon size={20} mdSize={24} />
                    </div>
                ))}
            </nav>
        </div>
    );
}