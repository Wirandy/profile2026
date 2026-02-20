'use client';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = 'Code. Create. Innovate.';
    const containerRef = useRef(null);

    // Scroll Animation Logic (Gravity Fall)
    const { scrollY } = useScroll();
    // As we scroll down (0 -> 300px), move text DOWN (0 -> 150px) and fade OUT (1 -> 0)
    const yRange = useTransform(scrollY, [0, 300], [0, 150]);
    const opacityRange = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="hero" ref={containerRef} className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">

            <motion.div
                style={{ y: yRange, opacity: opacityRange }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >

                {/* Name */}
                <h1 className="text-5xl md:text-8xl font-bold font-sans text-black mb-2 tracking-tight uppercase animate-fade-in-up">
                    WIRANDY SITINJAK
                </h1>

                {/* Subtitle with underline */}
                <div className="inline-block relative mb-8 h-8">
                    <h2 className="text-xl md:text-2xl text-gray-700 font-light tracking-widest min-h-[1.5em]">
                        {text}
                        <span className="animate-pulse">|</span>
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 animate-expand-width"></div>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                    A developer focused on web technology, intelligent systems, and the development
                    of future digital solutions.
                </p>

                {/* Button */}
                <div className="animate-fade-in-up delay-300">
                    <Link
                        href="#about"
                        className="px-8 py-3 rounded-full bg-[#1a1a1a] text-white font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transform inline-block border border-transparent hover:border-cyan-500"
                    >
                        Learn More
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
