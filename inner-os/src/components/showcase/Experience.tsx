import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />

            {/* 1. TBO.com */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>TBO.com</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.tbo.com/'}
                        >
                            <h4>www.tbo.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI Engineer (Production Engineering)</h3>
                        <b>
                            <p>Jan 2026 -- Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Leading production data lakehouse and agentic AI systems for global travel distribution platforms handling billions of transactions.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Near-Real-Time Data Lakehouse</b>: Architected ETL/ELT pipelines on S3 using <b>Apache Spark, AWS Glue, Kafka CDC (Debezium)</b>, and <b>Apache Hudi</b>, orchestrated via <b>FastAPI</b> microservices; enabled incremental sub-second processing across <b>billions of records</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Pipeline Reliability & Cost Optimization</b>: Raised AWS Glue job success rate from <b>94% to 99.8%</b> while slashing daily operating expenses by <b>$300/day</b> through automated schema caching and checkpointing.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Infrastructure Routing ($5,000+/mo savings)</b>: Restructured distributed data processing by routing ECS consumer reads to the same-AZ Kafka broker instead of cross-AZ leaders, eliminating cross-AZ data transfer fees.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Text-to-SQL Ontology Agent</b>: Engineered an enterprise schema-aware agent validating complex SQL on <b>Amazon Athena</b>, cutting BI team workload by <b>35%</b>; exposed catalog capabilities to Claude via the <b>Model Context Protocol (MCP)</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Conversational AI Voice Bot</b>: Developed an IVR navigation voice bot using <b>AWS Nova Sonic, RAG</b>, and tool calling; sustained <b>p95 response latency under 600ms</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>LLM Email Classification</b>: Automated triage of <b>650+ daily emails</b> and 100,000+ KAM notes via AWS Lambda, applying prompt caching to reduce inference spend by <b>70%+</b> and manual review by <b>57%</b>.
                        </p>
                    </li>
                </ul>
            </div>

            {/* 2. IIIT-Delhi R2C */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IIIT-Delhi (R2C)</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://r2c.iiitd.edu.in/'}
                        >
                            <h4>r2c.iiitd.edu.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>ML Engineer Intern</h3>
                        <b>
                            <p>May 2025 -- Oct 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Advisor: Dr. Anuj Grover. Built commercialization and document intelligence systems bridging university patent portfolios with industry partners.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed a multi-agent AI pipeline for paper analysis and researcher-industry matchmaking, advancing project toward <b>INR 40 Lakhs ($50K USD) NRDC funding</b>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Calibrated a document intelligence stack in <b>PyTorch</b> with <b>OCR, FastAPI, LoRA</b>, and <b>PEFT</b>, achieving <b>97% extraction accuracy</b>, 75% parameter compression, and <b>2x faster inference</b>.
                        </p>
                    </li>
                </ul>
            </div>

            {/* 3. IIIT-Delhi x Oracle */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Oracle x IIIT-Delhi</h1>
                        <h4>Independent Research</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI / NLP Researcher</h3>
                        <b>
                            <p>Aug 2024 -- Dec 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Advisors: Prof. Raghava Mutharaju, Suman Roy (Oracle Labs). Knowledge graph and ontology path extraction.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Fine-tuned <b>R-BERT</b> in PyTorch with LoRA and span-based embeddings, surpassing LLaMA-3, Mistral, and GPT-3 baselines by <b>6 F1 points</b> on biomedical relation extraction.
                        </p>
                    </li>
                    <li>
                        <p>
                            Validated relationships across <b>25,000+ biomedical entities</b> via FAISS vector search, reducing false positives by <b>20%</b>.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    headerContainer: {
        backgroundColor: 'white',
        width: '100%',
        padding: '12px 16px',
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 24,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingBottom: 4,
    },
};

export default Experience;
