'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const constraintsRef = useRef(null);

    return (
        <section id="about" className="min-h-screen w-full relative py-20 px-4 flex items-center justify-center overflow-hidden">
            {/* Background uses the global gradient, no extra bg needed here */}

            {/* Subtle Grid Pattern for Tech Feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="w-full max-w-7xl min-h-[80vh] relative flex flex-col md:block items-center justify-center gap-6 py-10 md:py-0" ref={constraintsRef}>

                {/* Heading (Floating) - Static on Mobile, Absolute on Desktop */}
                <div className="relative md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 z-0 text-center pointer-events-none mb-8 md:mb-0">
                    <h2 className="text-5xl md:text-7xl font-bold text-black/10 tracking-widest uppercase select-none">
                        ABOUT ME
                    </h2>
                    <p className="text-cyan-600/60 font-medium text-sm mt-2 animate-pulse hidden md:block">
                        ( Try dragging the cards! )
                    </p>
                </div>

                {/* Photo Card (Glass Style) */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    whileDrag={{ scale: 1.1, zIndex: 20 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative md:absolute md:left-[10%] md:top-20 w-72 md:w-80 p-3 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl cursor-grab active:cursor-grabbing"
                >
                    <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
                        <img
                            src="/wirandy-1.jpg"
                            alt="Wirandy"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-sans font-bold text-gray-800 text-xl">Wirandy Sitinjak</h3>
                        <p className="text-cyan-600 text-sm font-medium tracking-wider uppercase">Fullstack Developer</p>
                    </div>
                </motion.div>

                {/* Intro Card (Glass Style) */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                    whileDrag={{ scale: 1.05, zIndex: 20 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative md:absolute md:right-[5%] md:top-12 w-full max-w-lg p-8 bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-xl cursor-grab active:cursor-grabbing text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>

                    <h3 className="font-sans text-3xl font-bold text-gray-800 mb-4">Hi, I'm Randy!</h3>
                    <div className="font-sans text-gray-700 text-base leading-relaxed text-justify space-y-4">
                        <p>
                            Hi, you can call me Randy! I am an Informatics student and Software Developer based in Jababeka City. I have a deep interest in <strong className="text-cyan-600">web development</strong>, <strong className="text-purple-600">Machine Learning</strong>, and <strong className="text-pink-600">blockchain technology</strong>.
                        </p>
                        <p>
                            With experience leading a team at Novotech and building various innovative applications like the facial skin quality detection platform (ATARES), I am accustomed to transforming ideas into functional digital products. I am ready to help create efficient technology solutions, whether through intuitive UI design, robust backend architecture, or the integration of artificial intelligence systems.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold border border-cyan-200">#WebDev</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold border border-purple-200">#MachineLearning</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold border border-pink-200">#Blockchain</span>
                    </div>
                </motion.div>

                {/* Stats Card (Frosted Dark Glass) */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                    whileDrag={{ scale: 1.05, zIndex: 20 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative md:absolute md:right-[50%] md:translate-x-1/2 md:bottom-10 w-full md:w-auto min-w-[200px] bg-[#1a1a1a]/90 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl cursor-grab active:cursor-grabbing text-white"
                >
                    <div className="flex flex-row md:flex-col gap-6 md:gap-4 items-center md:items-start justify-around md:justify-start">
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="text-2xl font-bold">10+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                            </div>
                        </div>
                        <div className="w-px md:w-full h-8 md:h-px bg-gray-700"></div>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="text-2xl font-bold">2+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
