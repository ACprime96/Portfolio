"use client"
import React, { useState } from 'react'

export const MyProjectsSection = () => {

    const [expandedStates, setExpandedStates] = useState({});

    const toggleExpand = (index) => {
        setExpandedStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the state for the specific index
        }));
    };

    const projectsData = [
        {
            title: "Hyperparameter Tuning as a Service (HypTaaS)",
            date: "December 2023",
            description: "Parallelized hyperparameter grid search across 30 GPU nodes on GCP, reducing runtime from 3 hours to 12 minutes. Kafka job replay sustained over 99.9% job success across 50+ models. Built with Kubernetes, PyTorch, and FastAPI to support scalable model experimentation.",
            url: "https://www.youtube.com/embed/DLgby897HYg?si=fmSPz2pCvMiUcbS1",
            techs: ["GCP", "Kubernetes", "Kafka", "PyTorch", "FastAPI"],
            image: "/images/projects/1.png",
            gitUrl: "https://github.com/HyperParameter-Tuning-as-a-Service",
        },
        {
            title: "Arxiv Insanity",
            date: "May 2023",
            description: "Built an interactive citation-network explorer over 10K+ papers using the S2AG API, with sub-second search. Used Go, Neo4j, and React to help researchers explore relationships between papers, and provisioned the application on GCP with Terraform.",
            url: "https://www.youtube.com/embed/Q3QZI4MUjJc?si=O10PdHgFtFzVlSA9",
            techs: ["Go", "Neo4j", "React", "Terraform", "GCP"],
            image: "/images/projects/1.png",
            gitUrl: "https://github.com/ArxivInsanity",
        },
        {
            title: "Soft Braille",
            description: "The Soft Braille project focused on developing assistive applications for educating the visually impaired, utilizing Python, PyQt, Pytesseract, and OpenCV.I created an open- source desktop application that converts scanned school textbook pages into braille output, reducing printing costs per page by 80 %.By leveraging the Pytesseract OCR engine and OpenCV for edge detection, the application facilitates effective learning for visually impaired students.Recognized at the Smart India Hackathon, it received an award for Inspiration and is currently in use at Mathru Blind School in Bengaluru, India.",
            url: "https://www.youtube.com/embed/prn9IHzP2Fs?si=UDuu0DqUykk9gQxH",
            techs: ["Python", "PyQt", "Pytesseract", "OpenCV"],
            image: "/images/projects/2.png",
            gitUrl: "https://github.com/ACprime96/SoftBraille",
        },
        {
            title: "True Cost Predictor",
            description: "In this project, I leveraged technologies such as Python, NumPy, Pandas, JavaScript, Scikit-learn, and Flask to create a predictive model for rail car hire costs. By preprocessing historical car hire rates, I trained a Random Forest Regression model that achieved an accuracy of 78%. To make the predictions accessible, I developed a Flask web application that showcases car hire cost predictions, aiming to reduce overpayments and streamline rebate claims per transaction. Additionally, I led a team of four in the Network & Logistics Virtual Hackathon hosted by Wabtec Corporation, where we earned first place. Our model contributed to a 40% reduction in overpayments, significantly enhancing cash flow management for the business.",
            // url: "https://www.youtube.com/embed/DLgby897HYg?si=fmSPz2pCvMiUcbS1",
            techs: ["Python", "NumPy", "Pandas", "React", "Scikit-learn", "Flask"],
            image: "/images/projects/1.png",
            // gitUrl: "https://github.com/ArxivInsanity",
        },
    ];
    return (
        <div className='w-full' id="projects" >
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Projects
            </h2>
            <div className='md:px-[90px]'>
                {projectsData.map((project, index) => {
                    const isOdd = (index + 1) % 2 !== 0;
                    return (
                        <div key={index} className={`flex ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-24 flex-col`}>
                            {project.url ? (
                                <iframe
                                    className='flex-1 md:w-1/2 w-full rounded-xl aspect-video'
                                    src={project.url}
                                    title={`${project.title} demo`}
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>) : (
                                <img src={project.image} alt="project" className="flex-1 md:w-1/2 w-full rounded-xl shadow-blue-800 shadow-lg" />)}
                            <div className='flex-1'>
                                <h3 className='mb-4 text-2xl font-bold  text-white'>{project.title}</h3>
                                {project.date && <p className="mb-3 text-sm text-gray-400">{project.date}</p>}
                                <div>
                                    <p className={`text-gray-400 ${expandedStates[index] ? "" : "line-clamp-2 md:line-clamp-none"}`}>
                                        {project.description}
                                    </p>
                                    <button
                                        type="button"
                                        aria-expanded={Boolean(expandedStates[index])}
                                        className="text-blue-500 md:hidden cursor-pointer ml-2 block"
                                        onClick={() => toggleExpand(index)}
                                    >
                                        {expandedStates[index] ? "show less" : "show more"}
                                    </button>
                                </div>
                                <ul className="flex flex-wrap gap-2 mt-4" aria-label={`${project.title} technologies`}>
                                    {project.techs.map((tech) => (
                                        <li key={tech} className="rounded-full border border-slate-600 px-3 py-1 text-sm text-gray-300">{tech}</li>
                                    ))}
                                </ul>
                                {project.gitUrl ? (<a href={project.gitUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                                    <img src="/images/skills/github.png" alt="GitHub" className='mt-4 w-6 hover:scale-110' />
                                </a>) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
