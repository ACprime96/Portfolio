"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul style={{ listStyleType: 'square', paddingLeft: '1rem' }}>
        <li>University of Colorado Boulder</li>
        <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem' }}>
          <li>Degree: Master of Science in Computer Science</li>
          <li>Graduation Date: December 2024</li>
          <li>GPA: 3.94 / 4</li>
        </ul>
        <br />
        <li>Ramaiah Institute of Technology</li>
        <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem' }}>
          <li>Degree: Bachelor of Engineering in Information Science and Engineering</li>
          <li>Graduation Date: June 2019</li>
          <li>CGPA: 9.33 / 10</li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Teaching",
    id: "teaching",
    content: (
      <ul style={{ listStyleType: 'square', paddingLeft: '1rem' }}>
        <li>Fall 2024 - CSCI 2270 Data Structures, Teaching Assistant</li>
        <li>Spring 2024 - CSCI 1300 Starting Computin, Teaching Assistant</li>
        <li>Fall 2023 - CSCI 1300 Starting Computing, Teaching Assistant</li>
        <li>Spring 2023 - CSCI 1300 Starting Computing, Teaching Assistant</li>
        <li>Nov 2018 - Served as facilitator for Google Developer Student club and conducted hands-on workshop on Node.js for juniors</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul style={{ listStyleType: 'square', paddingLeft: '1rem' }}>
        <li>AWS Cloud Practitioner (in progress)</li>
        <li>AWS Solutions Architect Associate (in progress)</li>
        <li>AWS Developer Associate (in progress)</li>
        <li>Certified Kubernetes Application Developer (in progress)</li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul style={{ listStyleType: 'square', paddingLeft: '1rem' }}>
        <li>Media Framing through the Lens of Event-Centric Narratives, WNU 2024</li>
        <li>
          <a href="https://aclanthology.org/R19-1068/" target="_blank" className="text-sky-500 underline">
            Study on Unsupervised Statistical Machine Translation for Backtranslation, RANLP 2019
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul style={{ listStyleType: 'square', paddingLeft: '1rem' }}>
        <li>3rd place in AWS Hackathon hosted by CU Boulder CS Department, Feb 2024</li>
        <li>1st place in Network & Logistics Virtual Hackathon hosted by Wabtec Corporation, Nov 2021</li>
        <li>Award for Pursuing Excellence in 2021 Q1 Network and Logistics India Recognition, May 2021</li>
        <li>Award for Inspiration at Smart India Hackathon under Ministry of Social Justice and Empowerment, Mar 2018</li>
        <li>Special Jury Award at ITC Infotech Codeathon (iTech), Jul 2017</li>
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/pic.jpeg" width={600} height={600} className="rounded-xl" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("teaching")}
              active={tab === "teaching"}
            >
              {" "}
              Teaching{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("publications")}
              active={tab === "publications"}
            >
              {" "}
              Publications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
