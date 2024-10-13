"use client"
import React, { useState } from 'react'

export const MyProjectsSection = () => {

    const [isExpanded, setIsExpanded] = useState(false);


    const MAX_LENGTH = 100;
    const projectsData = [
        {
            title: "Hyperparameter Tuning as a Service (HypTaaS)",
            description: "HypTaaS is a web application developed as the final project for the course CSCI 5253 - Data Center Scale Computing. The platform automates hyperparameter optimization for deep learning models, enabling users to upload datasets and select pre-trained models from Hugging Face. Utilizing a grid search approach, HypTaaS fine-tunes multiple configurations simultaneously on Google Cloud Platform (GCP), streamlining the model development process. The application features a React-based interface with a Flask backend and employs a modular architecture integrating Minio for storage, Redis for caching, and Kafka for messaging. This architecture enhances scalability and facilitates rapid experimentation, making HypTaaS applicable in various domains, including healthcare, finance, and natural language processing, improving performance through efficient hyperparameter tuning.",
            url: "https://www.youtube.com/embed/DLgby897HYg?si=fmSPz2pCvMiUcbS1",
            techs: ["React", "Kafka", "Docker", "Kubernetes", "PyTorch"],
            image: "/images/projects/1.png",
            gitUrl: "https://github.com/HyperParameter-Tuning-as-a-Service",
        },
        {
            title: "Arxiv Insanity",
            description: "Arxiv Insanity is a web application developed as the final project for the course ATLS 5214 - Big Data Architecture. The platform aims to revolutionize the literature review process by simplifying how researchers track and explore relationships between academic papers. Using a combination of GoLang, Neo4j, and React, the application implements an interactive citation network that allows users to effortlessly navigate primary research papers and discover related works. The system leverages Terraform for scalable infrastructure deployment on Google Cloud, ensuring efficient handling of large datasets. The project automates the extraction of citation data using the S2AG API and visualizes the complex connections between papers, making the research process more intuitive and streamlined.",
            url: "https://www.youtube.com/embed/Q3QZI4MUjJc?si=O10PdHgFtFzVlSA9",
            techs: ["React", "Go", "MongoDB", "Neo4j", "Redis", "Docker", "Kubernetes", "Terraform"],
            image: "/images/projects/1.png",
            gitUrl: "https://github.com/ArxivInsanity",
        },
        {
            title: "True Cost Predictor",
            description: "In this project, I leveraged technologies such as Python, NumPy, Pandas, JavaScript, Scikit-learn, and Flask to create a predictive model for rail car hire costs. By preprocessing historical car hire rates, I trained a Random Forest Regression model that achieved an accuracy of 78%. To make the predictions accessible, I developed a Flask web application that showcases car hire cost predictions, aiming to reduce overpayments and streamline rebate claims per transaction. Additionally, I led a team of four in the Network & Logistics Virtual Hackathon hosted by Wabtec Corporation, where we earned first place. Our model contributed to a 40% reduction in overpayments, significantly enhancing cash flow management for the business.",
            // url: "https://www.youtube.com/embed/DLgby897HYg?si=fmSPz2pCvMiUcbS1",
            techs: ["Python", "NumPy", "Pandas", "React", "Scikit-learn", "Flask"],
            image: "/images/projects/1.png",
            // gitUrl: "https://github.com/ArxivInsanity",
        },
        {
            title: "Soft Braille",
            description: "The Soft Braille project focused on developing assistive applications for educating the visually impaired, utilizing Python, PyQt, Pytesseract, and OpenCV.I created an open- source desktop application that converts scanned school textbook pages into braille output, reducing printing costs per page by 80 %.By leveraging the Pytesseract OCR engine and OpenCV for edge detection, the application facilitates effective learning for visually impaired students.Recognized at the Smart India Hackathon, it received an award for Inspiration and is currently in use at Mathru Blind School in Bengaluru, India.",
            // url: "https://www.youtube.com/embed/DLgby897HYg?si=fmSPz2pCvMiUcbS1",
            techs: ["Python", "PyQt", "Pytesseract", "OpenCV"],
            image: "/images/projects/2.png",
            gitUrl: "https://github.com/ACprime96/SoftBraille",
        }
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
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>) : (
                                <img src={project.image} alt="project" className="flex-1 md:w-1/2 w-full rounded-xl shadow-blue-800 shadow-lg" />)}
                            <div className='flex-1'>
                                <h3 className='mb-4 text-2xl font-bold  text-white'>{project.title}</h3>
                                <div>
                                    <p className={`text-gray-400 ${isExpanded ? "" : "line-clamp-2 md:line-clamp-none"}`}>
                                        {project.description}
                                    </p>
                                    <span
                                        className="text-blue-500 md:hidden cursor-pointer ml-2 block"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        {isExpanded ? "show less" : "show more"}
                                    </span>
                                </div>


                                {project.gitUrl ? (<a href={project.gitUrl} target="_blank">
                                    <img src="/images/skills/github.png" className='mt-4 w-6 hover:scale-110' />
                                </a>) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
