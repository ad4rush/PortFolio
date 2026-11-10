import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import Signature from './Signature';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>About Me</h1>
            <h3>Adarsh Kumar Jha</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm an <b>AI & Systems Engineer</b> currently engineering near-real-time data lakehouses and production AI agents at <b>TBO.com</b>. I am completing my B.Tech in <b>Computer Science and Artificial Intelligence</b> at <b>IIIT-Delhi (Indraprastha Institute of Information Technology Delhi)</b> with a CGPA of 8.2 / 10.
                </p>
                <br />
                <p>
                    My core technical focus spans distributed streaming systems (<b>Apache Spark, Kafka CDC, Apache Hudi, AWS Glue</b>), LLM agent systems (<b>AWS Nova Sonic, RAG, Model Context Protocol - MCP, Text-to-SQL</b>), and high-performance backend microservices in <b>Python, FastAPI, and Go</b>.
                </p>
                <br />
                <p>
                    If you are interested in discussing engineering opportunities, systems architecture, or collaborating on high-scale data/AI systems, feel free to reach out via <Link to="/contact">the contact window</Link> or email me directly at{' '}
                    <a href="mailto:ad4rush@gmail.com">ad4rush@gmail.com</a>.
                </p>
            </div>

            <ResumeDownload />

            <div className="text-block">
                <h3>Key Honors & Achievements</h3>
                <br />
                <ul>
                    <li>
                        <b>GATE 2026 AIR 252</b>: Ranked 252 All India in Computer Science & Information Technology.
                    </li>
                    <li>
                        <b>JEE Mains 2022 AIR 4778</b>: 99.5 percentile among 872,970 candidates across India.
                    </li>
                    <li>
                        <b>Competitive Programming</b>: Codeforces <b>Specialist</b> (Max Rating 1450+), 500+ problems solved across LeetCode & GFG.
                    </li>
                    <li>
                        <b>Leadership</b>: Operations Head at Odyssey IIIT-Delhi (led 30-member council for festival with 30,000+ attendees).
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h3>Education</h3>
                <br />
                <p>
                    <b>Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)</b><br />
                    <i>B.Tech in Computer Science and Artificial Intelligence (2022 -- 2026)</i><br />
                    CGPA: <b>8.2 / 10</b><br />
                    Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, Machine Learning, Deep Learning, Distributed Systems.
                </p>
            </div>

            <div className="text-block">
                <h3>Verified Signature</h3>
                <Signature color="#003366" subtitle="Maxime Heckel Animated Vector Signature • Verified by Adarsh Kumar Jha" />
            </div>
        </div>
    );
};

export default About;
