import React from 'react'

export const MyProjectsSection = () => {
    const projectsData = [
        {
            title: "Hyperparameter Tuning as a Service (HypTaaS)",
            description: "Devised a microservice architecture based application to store and retrieve images based on contextual keywords. Deployed to run on Google Kubernetes Engine, with flask serving the means to interact with the application, RabbitMQ acting as the message broker, and Cloud SQL, Redis as the storage and caching mechanism. The application is also set to scale horizontally based on CPU utilization.",
            url: "https://www.youtube.com/embed/DLgby897HYg?si=fmSPz2pCvMiUcbS1",
            techs: ["React", "Kafka", "Docker", "Kubernetes", "PyTorch"],
            image: "/images/projects/1.png",
            gitUrl: "https://github.com/HyperParameter-Tuning-as-a-Service",
        },
        {
            title: "Arxiv Insanity",
            description: "Devised a microservice architecture based application to store and retrieve images based on contextual keywords. Deployed to run on Google Kubernetes Engine, with flask serving the means to interact with the application, RabbitMQ acting as the message broker, and Cloud SQL, Redis as the storage and caching mechanism. The application is also set to scale horizontally based on CPU utilization.",
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
            // gitUrl: "https://github.com/ArxivInsanity",
        }
    ];
  return (
      <div className='w-full'>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
              Projects
          </h2>
          <div className='px-[90px]'>
              {projectsData.map((project, index) => {
                  const isOdd = (index + 1) % 2 !== 0;
                  return (
                      <div key={index} className={`flex ${isOdd ? 'flex-row' : 'flex-row-reverse'} gap-8 mb-24`}>
                          {project.url ? (
                                  
                              <iframe
                                  className='flex-1 w-1/2 rounded-xl aspect-video'
                                  src={project.url}
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                              ></iframe> ) : (
                              <img src={project.image} alt="project" className="flex-1 w-1/2 rounded-xl shadow-blue-800 shadow-lg" />)}
                          <div className='flex-1'>
                              <h3 className='mb-4 text-2xl font-bold'>{project.title}</h3>
                              <p className='text-gray-400'>{project.description}</p>
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
