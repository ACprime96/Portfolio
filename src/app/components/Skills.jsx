"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "SQL", "Go", "TypeScript / JavaScript", "C++ (academic & teaching)"],
  },
  {
    title: "Data & Backend",
    skills: ["Batch & event-driven pipelines", "Snowflake", "Kafka", "Spring Boot", "PySpark", "Data lakes / warehouses", "PostgreSQL"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "CI/CD", "DynamoDB", "Redis", "Elasticsearch", "PagerDuty"],
  },
  {
    title: "AI & Agentic",
    skills: ["Model Context Protocol (MCP)", "Agent skills", "Claude Code", "Devin", "GitHub Copilot", "Codex", "LLMs", "PyTorch"],
  },
];

function Skills() {
  const [selectedGroup, setSelectedGroup] = useState(0);

  return (
    <section id="skills" className="w-full mb-10" aria-labelledby="skills-heading">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full text-white">
        <h2 id="skills-heading" className="text-center text-4xl font-bold mt-4 mb-4">
          Technologies
        </h2>
        <div className="py-5 flex flex-wrap gap-2" role="group" aria-label="Technology categories">
          {skillGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              aria-pressed={selectedGroup === index}
              aria-controls="skill-list"
              className={`rounded-full border-2 px-4 py-3 text-base sm:text-xl cursor-pointer ${selectedGroup === index
                ? "text-white border-blue-500"
                : "text-[#ADB7BE] border-slate-600 hover:border-white"}`}
              onClick={() => setSelectedGroup(index)}
            >
              {group.title}
            </button>
          ))}
        </div>
        <ul id="skill-list" aria-label={skillGroups[selectedGroup].title} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {skillGroups[selectedGroup].skills.map((skill) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center min-h-[88px] px-3 py-4 rounded-lg border border-slate-700 shadow-md shadow-blue-900/30 text-[#ADB7BE]"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
