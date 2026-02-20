'use client';
import { motion } from 'framer-motion';
import {
    FaPython, FaJs, FaPhp, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaLinux, FaNetworkWired, FaBrain
} from 'react-icons/fa';
import {
    SiTypescript, SiSolidity, SiNextdotjs, SiLaravel, SiMysql, SiPostgresql, SiOpencv, SiGoogle, SiPytorch, SiSolana, SiN8N, SiTelegram, SiBlender
} from 'react-icons/si';

const hardSkills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: <FaPython className="text-blue-500" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Solidity", icon: <SiSolidity className="text-gray-400" /> },
        ]
    },
    {
        category: "Frameworks & Web",
        items: [
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
            { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        ]
    },
    {
        category: "AI & Machine Learning",
        items: [
            { name: "Computer Vision (YOLO)", icon: <SiOpencv className="text-green-500" /> },
            { name: "Gemini API", icon: <SiGoogle className="text-blue-400" /> },
            { name: "Deep Learning (KNN, RF, DT)", icon: <FaBrain className="text-pink-500" /> },
            { name: "Data Mining (Orange)", icon: <div className="w-4 h-4 rounded-full bg-orange-500"></div> },
        ]
    },
    {
        category: "Blockchain & Web3",
        items: [
            { name: "dApp Development", icon: <SiSolidity className="text-gray-600" /> },
            { name: "Solana Ecosystem", icon: <SiSolana className="text-purple-500" /> },
            { name: "Crypto Arbitrage", icon: <div className="w-4 h-4 rounded-full bg-green-400"></div> },
        ]
    },
    {
        category: "Database & Infra",
        items: [
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
            { name: "VPS Hosting", icon: <FaLinux className="text-black" /> },
        ]
    },
    {
        category: "Tools & Integrations",
        items: [
            { name: "n8n Automation", icon: <SiN8N className="text-red-500" /> },
            { name: "Telegram API", icon: <SiTelegram className="text-blue-400" /> },
        ]
    },
    {
        category: "Other Skills",
        items: [
            { name: "UI Design", icon: <div className="w-4 h-4 rounded-full bg-pink-400"></div> },
            { name: "Network Security (Firewall)", icon: <FaNetworkWired className="text-gray-600" /> },
            { name: "3D Design & Animation", icon: <SiBlender className="text-orange-500" /> },
        ]
    }
];

const softSkills = [
    "Problem Solving",
    "Project Management",
    "Communication & Collaboration",
    "Entrepreneurial Mindset",
    "Adaptability & Fast Learner",
    "Customer Service & Client Relations"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center bg-transparent relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
                            SKILLSET
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A blend of technical expertise and professional capabilities cultivated through years of development and leadership.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Hard Skills Column (Spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            Technical Skills
                        </h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {hardSkills.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h4 className="font-bold text-gray-800 mb-4 border-b border-gray-200/50 pb-2">
                                        {category.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill, sIdx) => (
                                            <div key={sIdx} className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-lg text-sm font-medium text-gray-700 border border-gray-100">
                                                {skill.icon}
                                                <span>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Soft Skills Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                Professional Skills
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-lg border border-white/60 rounded-3xl p-8 shadow-lg"
                            >
                                <ul className="space-y-4">
                                    {softSkills.map((skill, idx) => (
                                        <motion.li
                                            key={idx}
                                            variants={itemVariants}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 font-medium">{skill}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
