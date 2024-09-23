"use client";
import { jobExperience } from './job-data'
import { motion } from "framer-motion";

const listItemVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

export const WorkExperienceSection = () => {
    return (
        <div
            name="skills"
            className="w-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <h2 className="text-center text-4xl shadow-md  font-bold </div>text-white mt-4 mb-8 md:mb-12">
                    Experience
                </h2>

                <div className='flex mt-5'>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        {jobExperience.map((job, i) => {
                            return (
                                <li className="mb-5 ms-10" key={i}>
                                    <span className="absolute flex items-center justify-center w-10 h-10  bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <img src={job.image} alt="arrow" className="rounded-full w-10 h-10" />
                                    </span>
                                    <br />
                                    <motion.div variants={listItemVariants}
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className='rounded-lg px-4 shadow-lg shadow-gray-500 hover:shadow-blue-800'
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                                        <h4 className='pb-2'>{job.company}</h4>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.date}</time>
                                        <div className="pb-3">
                                            {job.description.map((desc, index) => {
                                                return (
                                                    <p key={index}  className="mb-1 ml-2 text-base font-normal text-gray-500 dark:text-gray-400" >{" - " + desc}</p>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}
