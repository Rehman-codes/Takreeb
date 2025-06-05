import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-black text-white p-8">
            <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                        <Mail size={24} />
                        <p>contact@takreeb.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone size={24} />
                        <p>+971 50 123 4567</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPin size={24} />
                        <p>Dubai, UAE</p>
                    </div>
                </div>
                
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 bg-gray-900 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 bg-gray-900 rounded-lg"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full p-3 bg-gray-900 rounded-lg"
                    ></textarea>
                    <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
