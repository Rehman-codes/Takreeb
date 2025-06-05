import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-black text-white p-4 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center space-x-4">
                        <Mail size={20} mdSize={24} />
                        <p className="text-sm md:text-base">contact@takreeb.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone size={20} mdSize={24} />
                        <p className="text-sm md:text-base">+971 50 123 4567</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPin size={20} mdSize={24} />
                        <p className="text-sm md:text-base">Dubai, UAE</p>
                    </div>
                </div>
                
                <form className="space-y-4 md:space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 md:p-3 bg-gray-900 rounded-lg text-sm md:text-base"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 md:p-3 bg-gray-900 rounded-lg text-sm md:text-base"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full p-2 md:p-3 bg-gray-900 rounded-lg text-sm md:text-base"
                    ></textarea>
                    <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-200 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
