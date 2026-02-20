'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSendMessage = () => {
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        const mailtoLink = `mailto:sitinjakwirandy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-4 relative flex items-center justify-center overflow-hidden">

            {/* Background Gradient elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-4xl w-full relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                            GET IN TOUCH
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
                    </p>
                </motion.div>

                {/* Glass Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-2">Your Name</label>
                                <input
                                    suppressHydrationWarning
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all outline-none text-gray-700 placeholder-gray-400"
                                    placeholder="name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-2">Your Email</label>
                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all outline-none text-gray-700 placeholder-gray-400"
                                    placeholder="email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600 ml-2">Message</label>
                            <textarea
                                suppressHydrationWarning
                                rows={5}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 transition-all outline-none text-gray-700 placeholder-gray-400 resize-none"
                                placeholder="text..."
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                suppressHydrationWarning
                                type="button"
                                onClick={handleSendMessage}
                                className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 transform"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
