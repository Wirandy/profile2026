'use client';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-10 px-4 bg-transparent border-t border-white/20 relative z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">

                {/* Social Links */}
                <div className="flex items-center gap-8">
                    <a href="https://www.instagram.com/wirandys_?igsh=eGVkenJ3M2JjZjNq" className="text-gray-400 hover:text-pink-600 hover:scale-110 transition-all duration-300 p-2 bg-white/30 rounded-full backdrop-blur-sm shadow-sm group">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/wirandy-sitinjak-373379399/" className="text-gray-400 hover:text-blue-700 hover:scale-110 transition-all duration-300 p-2 bg-white/30 rounded-full backdrop-blur-sm shadow-sm group">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="mailto:sitinjakwirandy@gmail.com" className="text-gray-400 hover:text-cyan-600 hover:scale-110 transition-all duration-300 p-2 bg-white/30 rounded-full backdrop-blur-sm shadow-sm group">
                        <FaEnvelope className="text-2xl" />
                    </a>
                    <a href="https://github.com/Wirandy" className="text-gray-400 hover:text-black hover:scale-110 transition-all duration-300 p-2 bg-white/30 rounded-full backdrop-blur-sm shadow-sm group">
                        <FaGithub className="text-2xl" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm font-medium">
                        © {currentYear} Wirandy Sitinjak. Built with Next.js & Tailwind.
                    </p>
                </div>

            </div>
        </footer>
    );
}
