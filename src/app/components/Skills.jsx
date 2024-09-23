"use client";
import React from "react";
import { motion } from "framer-motion";

const skillVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const webTechs = [
    {
        id: 1,
        src: "/images/skills/html.png",
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: "/images/skills/css.png",
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        src: "/images/skills/javascript.png",
        title: "JavaScript",
        style: "shadow-yellow-500",
    },
    {
        id: 4,
        src: "/images/skills/react.png",
        title: "React",
        style: "shadow-blue-600",
    },
    {
        id: 5,
        src: "/images/skills/mongodb.png",
        title: "Mongo DB",
        style: "shadow-white",
    },
    {
        id: 6,
        src: "/images/skills/react.png",
        title: "React Native",
        style: "shadow-blue-600",
    },
    {
        id: 7,
        src: "/images/skills/nodejs3.png",
        title: "Node JS",
        style: "shadow-white",
    },
    {
        id: 8,
        src: "/images/skills/github.png",
        title: "GitHub",
        style: "shadow-gray-400",
    },
];

const dbTechs = [
    {
        id: 1,
        src: "/images/skills/react.png",
        title: "React",
        style: "shadow-blue-600",
    },
    {
        id: 2,
        src: "/images/skills/mongodb.png",
        title: "Mongo DB",
        style: "shadow-white",
    },
    {
        id: 3,
        src: "/images/skills/react.png",
        title: "React Native",
        style: "shadow-blue-600",
    },
    {
        id: 4,
        src: "/images/skills/nodejs3.png",
        title: "Node JS",
        style: "shadow-white",
    },
    {
        id: 5,
        src: "/images/skills/github.png",
        title: "GitHub",
        style: "shadow-gray-400",
    },
];

const aiTechs = [
    {
        id: 2,
        src: "/images/skills/css.png",
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 4,
        src: "/images/skills/react.png",
        title: "React",
        style: "shadow-blue-600",
    },
    {
        id: 6,
        src: "/images/skills/react.png",
        title: "React Native",
        style: "shadow-blue-600",
    },
    {
        id: 8,
        src: "/images/skills/github.png",
        title: "GitHub",
        style: "shadow-gray-400",
    },
];

const tabs = [WebDev(), DB(), AIML()];

function WebDev() {
    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center sm:px-0">
            {webTechs.map(({ id, src, title, style }) => (
                <motion.div variants={skillVariants}
                    key={id}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    className={`shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style}`}
                >
                    <img src={src} alt="" className="w-12 mx-auto" />
                    <p className="mt-4">{title}</p>
                </motion.div>
            ))}
        </div>
    );
}

function DB() {
    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center sm:px-0">
            {dbTechs.map(({ id, src, title, style }) => (
                <motion.div variants={skillVariants}
                    key={id}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    className={`shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style}`}
                >
                    <img src={src} alt="" className="w-12 mx-auto" />
                    <p className="mt-4">{title}</p>
                </motion.div>
            ))}
        </div>
    );
}

function AIML() {
    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-8 text-center sm:px-0">
            {aiTechs.map(({ id, src, title, style }) => (
                <motion.div variants={skillVariants}
                    key={id}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    className={`shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style}`}
                >
                    <img src={src} alt="" className="w-12 mx-auto" />
                    <p className="mt-4">{title}</p>
                </motion.div>
            ))}
        </div>
    );
}



function Skills() {
    const [tab, setTab] = React.useState(1);


    return (
        <div
            name="skills"
            className="w-full mb-10"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">


                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-4">
                    Technologies
                </h2>

                <div className="mx-auto py-5 flex gap-2">
                    <button
                        className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${tab === 1 ? "text-white border-blue-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"}`}
                        onClick={() => setTab(1)}
                    >
                        Web
                    </button>
                    <button
                        className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${tab === 2 ? "text-white border-blue-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"}`}
                        onClick={() => setTab(2)}
                    >
                        Database
                    </button>
                    <button
                        className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${tab === 3 ? "text-white border-blue-500"
                            : "text-[#ADB7BE] border-slate-600 hover:border-white"}`}
                        onClick={() => setTab(3)}
                    >
                        AI/ML
                    </button>

                </div>
                {/* <motion.div variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>    */}
                    {tabs[tab - 1]}
                {/* </motion.div> */}
                
            </div>
        </div>
    );
}
export default Skills;