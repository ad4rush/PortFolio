import React, { useState } from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

type Category = 'all' | 'ai' | 'systems' | 'research';

interface Project {
    id: string;
    title: string;
    timeline: string;
    category: 'ai' | 'systems' | 'research';
    categoryLabel: string;
    stack: string;
    githubUrl?: string;
    description: string;
    highlights: string[];
}

const PROJECTS_DATA: Project[] = [
    // ---------------- AI & AUTONOMOUS AGENTS ----------------
    {
        id: 'ai-autoapplier',
        title: 'AI-AUTOAPPLIER-JOBS — Autonomous Multi-Portal Job Agent',
        timeline: '2026',
        category: 'ai',
        categoryLabel: 'Autonomous AI & Agents',
        stack: 'Python, Playwright, Claude 3.5 Sonnet, Gemini API, ego-browser, SQLite',
        githubUrl: 'https://github.com/ad4rush/AI-AUTOAPPLIER-JOBS',
        description:
            'Autonomous end-to-end multi-portal job hunt and auto-application platform. Performs deterministic form filing across Greenhouse, Ashby, Lever, Stripe, and Microsoft careers portals.',
        highlights: [
            'Dynamic Resume Tailoring: Employs Claude 3.5 Sonnet to dynamically parse job descriptions, inject matching keywords, and re-compile tailored LaTeX master resumes.',
            'Gemini Batch Q&A: Implements round-robin Gemini API batch workers to accurately answer complex application screening questionnaires with high fidelity.',
            'Deterministic Browser Runner: Uses Playwright & ego-browser profile isolation with persistent 24/7 daemon watcher for continuous lead harvesting and status verification.',
        ],
    },
    {
        id: 'auto-mailer',
        title: 'Auto-Mailer — Autonomous Cold Outreach Platform',
        timeline: '2026',
        category: 'ai',
        categoryLabel: 'Autonomous AI & Agents',
        stack: 'Python, Gmail SMTP Pool, Tectonic XeTeX, Claude AI, DNS Deliverability Triad',
        githubUrl: 'https://github.com/ad4rush/Auto-Mailer',
        description:
            'Enterprise cold-outreach automation system with randomized jitter delays, dynamic LaTeX resume compilation, and comprehensive deliverability verification.',
        highlights: [
            'Deliverability Triad: Verifies SPF, DKIM, and DMARC DNS health records to ensure 100% primary inbox landing and eliminate spam folder placement.',
            'Tectonic Dynamic PDF Compiler: Re-compiles tailored XeTeX resume PDFs in under 1 second, guaranteeing strictly 1-page ATS-optimized 22KB PDF attachments.',
            'Anti-Spam Velocity Engine: Enforces warm-up ramps (5 to 30 emails/day) with 90-180s randomized jitter intervals and automated MX/syntax email verification.',
        ],
    },
    {
        id: 'r2c-voice-ivr',
        title: 'R2C Voice AI Agent & Nova Sonic Low-Latency IVR',
        timeline: '2026',
        category: 'ai',
        categoryLabel: 'Autonomous AI & Agents',
        stack: 'Python, WebRTC, Twilio, Exotel, FastRTC, OpenAI Whisper, TTS Pipeline',
        githubUrl: 'https://github.com/ad4rush',
        description:
            'Ultra-low-latency bidirectional conversational voice AI agent engineered at R2C Lab (IIIT-Delhi) for high-concurrency telephony customer interactions.',
        highlights: [
            '600ms p95 Response Time: Engineered an end-to-end full-duplex WebRTC voice pipeline achieving sub-second conversational latency across standard cellular telephony.',
            'Telephony Bridge: Integrated Twilio and Exotel voice gateways with custom VAD (Voice Activity Detection) interrupt-handling for natural human conversational turn-taking.',
            'Speech-to-Speech Streaming: Streamed audio chunks directly through low-latency ASR and synthesized neural audio frames without disk buffering.',
        ],
    },
    {
        id: 'techtransfer-chatbot',
        title: 'TechTransfer Chatbot — Intellectual Property Conversational RAG',
        timeline: '2025',
        category: 'ai',
        categoryLabel: 'Autonomous AI & Agents',
        stack: 'Python, LangChain, OpenAI Embeddings, ChromaDB, FastAPI, Streamlit',
        githubUrl: 'https://github.com/ad4rush/TechTransfer_Chatbot',
        description:
            'Conversational question-answering assistant for complex technology transfer agreements, patent filings, and licensing disclosures.',
        highlights: [
            'Domain Document Chunking: Implemented semantic-aware chunking preserving legal clauses, IP assignment provisions, and royalty formulas.',
            'Vector Search & Reranking: Delivered high-precision clause retrieval across multi-hundred-page tech transfer legal PDFs with cross-encoder verification.',
        ],
    },

    // ---------------- DISTRIBUTED SYSTEMS & LAKEHOUSE ----------------
    {
        id: 'tbo-lakehouse',
        title: 'TBO.com Production CDC Lakehouse & Glue Self-Healing',
        timeline: '2026',
        category: 'systems',
        categoryLabel: 'Distributed Systems & Lakehouse',
        stack: 'Python, AWS Glue, PySpark, Apache Hudi, DynamoDB, AWS Athena, Confluent Kafka',
        githubUrl: 'https://github.com/ad4rush',
        description:
            'Production enterprise data lakehouse supporting high-volume pricing and booking transaction streams across TBO.com production environments.',
        highlights: [
            'Real-Time CDC Ingestion: Engineered Change Data Capture pipelines into Apache Hudi ACID tables with sub-minute query readiness.',
            'DynamoDB Checkpoint Self-Healing: Built automated run-failure triage diagnosing failing Glue & Pharaoh ETL jobs, inspecting DynamoDB checkpoints and restoring pipeline state.',
            '99.8% Lakehouse Uptime: Prevented silent downstream schema drifts and data loss, slashing data engineering on-call MTTR by 60%.',
        ],
    },
    {
        id: 'ml-monitoring',
        title: 'ML Serving Diagnostics & Observability Platform',
        timeline: '2026',
        category: 'systems',
        categoryLabel: 'Distributed Systems & Infrastructure',
        stack: 'Python, FastAPI, Prometheus, Grafana, Docker, Kubernetes, GCP Cloud Storage',
        githubUrl: 'https://github.com/ad4rush/ml-monitoring',
        description:
            'Automated diagnostics and telemetry pipeline for machine learning inference microservices deployed across containerized clusters.',
        highlights: [
            'Real-Time Inference Telemetry: Intercepts request latency histograms, OOM container exceptions, and tensor shape anomalies in production.',
            'Prometheus & Grafana Alerting: Integrated live metrics streaming and automated diagnostic runbooks, slashing MTTR across 5 production services by 40%.',
            'Cloud Storage Artifact Store: Persists diagnostic crash dumps and tensor traces for post-mortem debugging and model drift analysis.',
        ],
    },
    {
        id: 'custom-shell',
        title: 'Custom Linux POSIX Shell & Concurrency Thread Scheduler',
        timeline: '2025',
        category: 'systems',
        categoryLabel: 'Systems Programming',
        stack: 'C, Linux Syscalls, POSIX Threads, Signals, Concurrency Primitives',
        githubUrl: 'https://github.com/ad4rush/Custom-Shell',
        description:
            'A fully functional Unix shell written in C implementing process execution, signal trapping, and user-level cooperative thread scheduling.',
        highlights: [
            'Command Pipelines & Redirection: Engineered multi-level pipeline execution (|) and file descriptor redirection (<, >, >>) with robust process isolation.',
            'Round-Robin Preemptive Scheduler: Implemented custom user-space thread scheduler with configurable quantum slices and mutex synchronization.',
            '1,000+ Concurrency Stress Test: Stress-tested across 1,000+ concurrent worker processes, eliminating race conditions and deadlocks.',
        ],
    },
    {
        id: 'batch-upload',
        title: 'High-Throughput Batch Upload & Media Processing',
        timeline: '2025',
        category: 'systems',
        categoryLabel: 'Distributed Systems & Cloud',
        stack: 'Python, Multi-Threading, AWS S3 Boto3, Asyncio, Parallel Chunking',
        githubUrl: 'https://github.com/ad4rush/Batch-Upload',
        description:
            'Resilient multi-threaded batch upload platform supporting multipart uploads, checksum validation, and automated network retry backoffs.',
        highlights: [
            'Parallel Chunk Streaming: Slashed bulk upload times by 4x using concurrent thread pools and automatic multipart S3 chunk assembly.',
            'Fault-Tolerant Checkpointing: Automatically resumes interrupted transfers without re-uploading completed chunks.',
        ],
    },
    {
        id: 'raft-consensus',
        title: 'RAFT Distributed Consensus Protocol',
        timeline: '2024',
        category: 'systems',
        categoryLabel: 'Distributed Systems',
        stack: 'Python, Socket Programming, RPC, State Machine Replication, Distributed Consensus',
        githubUrl: 'https://github.com/ad4rush/RAFT',
        description:
            'Implementation of the RAFT distributed consensus algorithm supporting leader election, log replication, and network partition recovery.',
        highlights: [
            'Leader Election & Heartbeats: Implemented randomized election timeouts preventing split votes under network latency.',
            'Partition Healing: Verified safety invariants during split-brain network simulations, ensuring linearizable state machine replication.',
        ],
    },

    // ---------------- DEEP LEARNING & RESEARCH ----------------
    {
        id: 'vicas-lab',
        title: 'VICAS Lab Portal & GCN Candidate Knowledge Graph',
        timeline: '2026',
        category: 'research',
        categoryLabel: 'Deep Learning & Knowledge Graphs',
        stack: 'React, FastAPI, FAISS Vector Store, Neo4j, PyTorch Geometric GCN, AWS EC2',
        githubUrl: 'https://github.com/ad4rush/Vicas-Lab',
        description:
            'Production research platform and recruiter knowledge graph engine developed for the VLSI Circuits & Systems Lab at IIIT-Delhi.',
        highlights: [
            '160+ Active Students Onboarded: Engineered 6 REST microservices, Google OAuth2 authentication, and automated CI/CD deployed on AWS EC2.',
            'Gemini PDF RAG: Built resume-to-vector extraction pipeline indexing skill embeddings into FAISS vector stores.',
            'Neo4j & GCN Link Prediction: Trained a Graph Convolutional Network predicting candidate-to-job matches with 91.4% precision.',
        ],
    },
    {
        id: 'watchtower-s3r',
        title: 'WatchTower-S3R — Real-Time Video Anomaly Detection',
        timeline: '2026',
        category: 'research',
        categoryLabel: 'Computer Vision & Deep Learning',
        stack: 'Python, PyTorch, Spatiotemporal CNN, OpenCV, Temporal Feature Aggregation',
        githubUrl: 'https://github.com/ad4rush/WatchTower-S3R',
        description:
            'Automated surveillance system designed for real-time video anomaly detection in security feeds using deep spatiotemporal feature representations.',
        highlights: [
            'Spatiotemporal Feature Extraction: Analyzed multi-frame video sequences using 3D convolutions and optical flow to detect anomalous events.',
            'Low False-Positive Filtering: Implemented dynamic thresholding and temporal smoothing to minimize false alarms in bustling camera scenes.',
        ],
    },
    {
        id: 'deception-detection',
        title: 'Deception Detection in Dialogue — Hybrid Deep Learning NLP',
        timeline: '2026',
        category: 'research',
        categoryLabel: 'NLP & Deep Learning',
        stack: 'Python, PyTorch, HuggingFace Transformers, RoBERTa, BiLSTM, Scikit-learn',
        githubUrl: 'https://github.com/ad4rush/Deception-Detection',
        description:
            'Hybrid deep learning NLP framework engineered to automatically detect deceptive messages, bluffing, and subtle linguistic cues within conversational game dialogues.',
        highlights: [
            'Hybrid Transformer Architecture: Combined fine-tuned RoBERTa token embeddings with bidirectional LSTM layers to capture multi-turn conversational context.',
            'Linguistic Feature Extraction: Evaluated lexical diversity, sentiment polarity shifts, and syntactic patterns to elevate classification F1-score.',
        ],
    },
    {
        id: 'htr-crnn',
        title: 'Handwritten Text Recognition — CRNN with CTC Loss',
        timeline: '2025',
        category: 'research',
        categoryLabel: 'Deep Learning & Computer Vision',
        stack: 'Python, TensorFlow, Keras, OpenCV, CRNN, CTC Loss, Beam Search Decoding',
        githubUrl: 'https://github.com/ad4rush/Handwritten-Text-Recognition-',
        description:
            'End-to-end optical character recognition system converting handwritten text line images into ASCII strings without explicit character segmentation.',
        highlights: [
            'CRNN + CTC Loss Architecture: Trained deep convolutional recurrent neural networks on the IAM Handwriting Database using Connectionist Temporal Classification loss.',
            'Neural Beam Search Spelling Corrector: Integrated character n-gram language models and beam search decoding to correct misrecognized tokens.',
        ],
    },
    {
        id: 'churn-prediction',
        title: 'Customer Churn Prediction — Ensemble ML Benchmarking',
        timeline: '2025',
        category: 'research',
        categoryLabel: 'Applied Machine Learning',
        stack: 'Python, XGBoost, LightGBM, CatBoost, Scikit-learn, Optuna',
        githubUrl: 'https://github.com/ad4rush',
        description:
            'Benchmarked gradient-boosted decision tree architectures on 50,000+ records to identify high-risk customer attrition under class imbalance.',
        highlights: [
            '89.4% ROC-AUC: Optimized ensemble hyperparameter weights with Optuna, delivering a 12% improvement over baseline classifiers.',
            'Feature Attribution: Applied SHAP (SHapley Additive exPlanations) values to identify primary risk drivers and retention interventions.',
        ],
    },
    {
        id: 'stickman-game',
        title: 'STICKMAN — JavaFX Procedural Physics Game Engine',
        timeline: '2025',
        category: 'systems',
        categoryLabel: 'Game Physics & Java',
        stack: 'Java, JavaFX, Object-Oriented Design, Collision Detection, Event Loop',
        githubUrl: 'https://github.com/ad4rush/STICKMAN',
        description:
            'JavaFX arcade game application implementing custom 2D collision physics, variable platform procedural generation, and high-score persistence.',
        highlights: [
            'Deterministic Physics Engine: Formulated custom bounding-box collision detection and variable-length stick extension mechanics.',
            'MVC Architecture: Structured clean separation of game state, physics step loop, and JavaFX render pipeline with sound effects.',
        ],
    },
];

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');

    const filteredProjects =
        selectedCategory === 'all'
            ? PROJECTS_DATA
            : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

    return (
        <div className="site-page-content">
            <h1>Engineering & Research Projects</h1>
            <h3>Adarsh Kumar Jha — Project Directory & Timeline</h3>
            <br />
            <p>
                Below is a curated timeline of production systems, autonomous multi-agent pipelines, distributed lakehouses, and deep learning research projects I have engineered. All projects include links to their active GitHub repositories.
            </p>
            <br />
            <ResumeDownload />
            <br />

            {/* Quick Filter Tabs */}
            <div style={styles.filterContainer}>
                <button
                    style={Object.assign(
                        {},
                        styles.filterButton,
                        selectedCategory === 'all' && styles.filterButtonActive
                    )}
                    onClick={() => setSelectedCategory('all')}
                >
                    All Projects ({PROJECTS_DATA.length})
                </button>
                <button
                    style={Object.assign(
                        {},
                        styles.filterButton,
                        selectedCategory === 'ai' && styles.filterButtonActive
                    )}
                    onClick={() => setSelectedCategory('ai')}
                >
                    🤖 Autonomous AI & Agents (4)
                </button>
                <button
                    style={Object.assign(
                        {},
                        styles.filterButton,
                        selectedCategory === 'systems' && styles.filterButtonActive
                    )}
                    onClick={() => setSelectedCategory('systems')}
                >
                    ⚡ Distributed Systems & Lakehouse (5)
                </button>
                <button
                    style={Object.assign(
                        {},
                        styles.filterButton,
                        selectedCategory === 'research' && styles.filterButtonActive
                    )}
                    onClick={() => setSelectedCategory('research')}
                >
                    🔬 Deep Learning & CV Research (5)
                </button>
            </div>
            <br />

            {/* Projects Timeline List */}
            {filteredProjects.map((proj) => (
                <div key={proj.id} className="text-block" style={styles.projectCard}>
                    <div style={styles.cardHeader}>
                        <div>
                            <span style={styles.timelineBadge}>{proj.timeline}</span>
                            <span style={styles.categoryBadge}>{proj.categoryLabel}</span>
                        </div>
                        {proj.githubUrl && (
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href={proj.githubUrl}
                                style={styles.githubLink}
                            >
                                <b>GitHub [Code] ↗</b>
                            </a>
                        )}
                    </div>
                    <h2 style={styles.projectTitle}>{proj.title}</h2>
                    <p style={styles.stackText}>
                        <b>Tech Stack:</b> {proj.stack}
                    </p>
                    <p style={styles.descriptionText}>{proj.description}</p>
                    <ul style={styles.highlightsList}>
                        {proj.highlights.map((h, i) => (
                            <li key={i} style={styles.highlightItem}>
                                {h}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    filterContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
    },
    filterButton: {
        padding: '6px 12px',
        fontSize: '12px',
        fontFamily: 'inherit',
        backgroundColor: '#e9ecef',
        color: '#333',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    filterButtonActive: {
        backgroundColor: '#003366',
        color: '#fff',
        borderColor: '#002244',
        fontWeight: 'bold',
    },
    projectCard: {
        marginBottom: '28px',
        padding: '16px 20px',
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
    },
    timelineBadge: {
        backgroundColor: '#003366',
        color: '#ffffff',
        fontSize: '11px',
        fontWeight: 'bold',
        padding: '3px 8px',
        borderRadius: '4px',
        marginRight: '8px',
    },
    categoryBadge: {
        backgroundColor: '#e7f1ff',
        color: '#0d6efd',
        fontSize: '11px',
        fontWeight: '600',
        padding: '3px 8px',
        borderRadius: '4px',
    },
    githubLink: {
        fontSize: '12px',
        color: '#0d6efd',
        textDecoration: 'none',
    },
    projectTitle: {
        fontSize: '20px',
        margin: '6px 0 8px 0',
        color: '#1a1a1a',
    },
    stackText: {
        fontSize: '13px',
        color: '#495057',
        marginBottom: '10px',
    },
    descriptionText: {
        fontSize: '14px',
        lineHeight: 1.5,
        color: '#212529',
        marginBottom: '10px',
    },
    highlightsList: {
        paddingLeft: '20px',
        margin: '0',
    },
    highlightItem: {
        fontSize: '13px',
        lineHeight: 1.5,
        color: '#343a40',
        marginBottom: '6px',
    },
};

export default SoftwareProjects;
