import { useState, useEffect } from 'react';
import { events } from '../../data/eventData';
import { Search } from 'lucide-react';

export default function Events() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(events);

    useEffect(() => {
        const filtered = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(filtered);
    }, [searchTerm]);

    return (
        <section id="events" className="min-h-screen bg-black text-white p-4 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Featured Events</h2>
            
            <div className="relative mb-4 md:mb-8">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-900 rounded-lg text-sm md:text-base"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredEvents.map(event => (
                    <div key={event.id} className="bg-gray-900 rounded-lg p-4 md:p-6 hover:bg-gray-800 transition">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{event.name}</h3>
                        <p className="text-gray-400 text-sm md:text-base mb-2">{event.date} at {event.time}</p>
                        <p className="text-gray-400 text-sm md:text-base mb-3">{event.location}</p>
                        <p className="text-sm md:text-base mb-4">{event.description}</p>
                        <button className="bg-white text-black px-4 md:px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                            Register
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
