import React from 'react';
import { FaWater, FaShareAlt, FaBookOpen } from 'react-icons/fa';

const BlogSection = () => (
    <div className="blog-section card">
        <h2><FaWater /> Health News and Tips</h2>
        <h3>Stay Hydrated for Optimal Health</h3>
        <p>
            Drinking enough water is crucial for maintaining energy levels, supporting digestion, and keeping your skin healthy.
            Aim for around 8 glasses a day and adjust based on your activity level and climate.
        </p>
        <button className="read-more"><FaBookOpen /> Read More</button>
        <button className="share"><FaShareAlt /> Share</button>
    </div>
);

export default BlogSection;


