import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-9xl font-extrabold drop-shadow-md">
                    404
                </h1>
                <p className="mt-4 text-2xl md:text-3xl font-light">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
            </motion.div>
            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {/* <img
                    src="https://via.placeholder.com/400x300?text=404+Illustration"
                    alt="Not Found Illustration"
                    className="w-64 md:w-80 mx-auto drop-shadow-lg"
                /> */}
            </motion.div>
            <motion.div
                className="mt-8 flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Link
                    to="/"
                    className="bg-white text-purple-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all flex items-center space-x-2"
                >
                    <FaHome />
                    <span>Back to Home</span>
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
