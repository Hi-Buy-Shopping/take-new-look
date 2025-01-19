import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <FaHourglassHalf className="text-6xl text-blue-500 animate-spin" />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Coming Soon</h1>
                <p className="text-lg text-gray-600">We are working hard to bring you new projects. Stay tuned!</p>
            </motion.div>
        </div>
    );
};

export default Projects;