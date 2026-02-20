'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef, useState } from 'react';

const projects = [
    {
        id: 1,
        title: "Crypto Technical Analysis Bot (Telegram)",
        category: "AI / Assistant",
        description: "An automated Telegram bot designed to provide real-time cryptocurrency technical analysis. It features indicator calculations such as RSI and MACD, along with price prediction probabilities to assist in trading decisions.",
        tech: ["Python", "Telegram"],
        image: "/projects/1.png",
        link: "https://web.telegram.org/k/#@mecrypto_bot"
    },
    {
        id: 2,
        title: "Smart AI Assistant Bot (Telegram)",
        category: "AI / Assistant",
        description: "An intelligent Telegram assistant that leverages Gemini API to provide instant information retrieval, content generation, and task automation directly within the chat interface.",
        tech: ["Python", "Telegram Bot", "Gemini API"],
        image: "/projects/2.png",
        link: "https://web.telegram.org/k/#@gubukhouse_bot"
    },
    {
        id: 3,
        title: "ATARES - Facial Skin Analysis Platform",
        category: "Artificial Intelligence / Web Development",
        description: "A comprehensive facial skin analysis platform that utilizes advanced computer vision and machine learning algorithms to detect skin conditions, analyze facial features, and provide personalized skincare recommendations.",
        tech: ["Python", "TensorFlow", "React JS", "TypeScript", "yolo", "PostgreSQL"],
        image: "/projects/3.png",
        link: "https://docs.google.com/document/d/1Abr6-UphCxPUK88Z44qzCuNJjbNB0UQgU2l4ppZIkr0/edit?usp=sharing"
    },
    {
        id: 4,
        title: "ADA Property - Real Estate Website",
        category: "Web Development",
        description: "A modern real estate platform featuring property listings, agent profiles, and interactive property details.",
        tech: ["React Native", "TypeScript"],
        image: "/projects/4.png",
        link: "https://adaproindonesia.com/"
    },
    {
        id: 5,
        title: "Forensic & Medical X-Ray Analysis System",
        category: "Artificial Intelligence / Web Development",
        description: "A specialized AI system designed for the forensic and medical analysis of X-ray images. It employs advanced computer vision techniques to detect anomalies, fractures, and other critical indicators in both human and animal subjects.",
        tech: ["Python", "TensorFlow", "php", "mysql", "html", "css", "javascript"],
        image: "/projects/5.png",
        link: "#"
    },
    {
        id: 6,
        title: "Data Clustering & Visualization",
        category: "Data Science",
        description: "A data analysis project that explores and visualizes patterns within a dataset. It utilizes clustering algorithms to group similar data points and generates visualizations to interpret the underlying structure and relationships in the data.",
        tech: ["Python", "orange"],
        image: "/projects/6.png",
        link: "https://docs.google.com/document/d/1CNaJE5WWwIRZLmOaNpQTMmq-Pv-6pnGr6-Ex30EKQSw/edit?usp=sharing"
    },
    {
        id: 7,
        title: "MRI Image Processing & Segmentation",
        category: "Artificial Intelligence",
        description: "A digital image processing project built with Python. It focuses on implementing region-growing algorithms to segment specific areas (Region Grown Mask) on brain MRI scans and applies color overlays to highlight targeted medical regions.",
        tech: ["Python", "OpenCV", "NumPy"],
        image: "/projects/7.png",
        link: "https://docs.google.com/document/d/1N_0v48inCOtB0SE2WVXg-OE46KfQyrhCTgnijvdAJ-4/edit?usp=sharing"
    },
    {
        id: 8,
        title: "Personal Finance Management App",
        category: "App Development",
        description: "A personal finance management application designed to help users track their income, expenses, and savings goals. The app provides intuitive visualizations and insights to promote healthier financial habits.",
        tech: ["flutter", "dart"],
        image: "/projects/8.png",
        link: "https://money-coleb.vercel.app/"
    }
];

export default function Projects() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Drag to Scroll Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="projects" className="min-h-screen w-full py-20 relative flex flex-col justify-center bg-transparent overflow-hidden">

            {/* Heading */}
            <div className="container mx-auto px-6 mb-12 text-center z-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                        PROJECTS
                    </span>
                </h2>

                <p className="md:hidden text-gray-400 text-xs mt-2 animate-pulse">( Swipe to explore )</p>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="w-full overflow-x-auto pb-12 pt-4 px-6 md:px-20 no-scrollbar flex gap-8 items-center cursor-grab active:cursor-grabbing"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -10 }}
                        className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[600px] relative rounded-[2rem] overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-xl group cursor-pointer"
                    >
                        {/* Project Preview (Image) */}
                        <div className="h-[40%] w-full relative overflow-hidden bg-gray-100">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* Content */}
                        <div className="h-[60%] p-8 flex flex-col justify-between relative bg-white/40">
                            <div>
                                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-5">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-semibold bg-white/60 text-gray-700 rounded-full border border-gray-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Button */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-20"
                                >
                                    <FaExternalLinkAlt className="text-sm" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Drag Hint (Mobile) */}
            <div className="absolute bottom-10 w-full text-center md:hidden animate-pulse">
                <span className="text-gray-400 text-sm font-medium">Swipe to explore &rarr;</span>
            </div>

        </section>
    );
}
