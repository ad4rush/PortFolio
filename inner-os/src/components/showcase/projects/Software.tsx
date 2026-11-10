import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Engineering & Systems</h3>
            <br />
            <p>
                A selection of production systems, distributed lakehouse infrastructure, and deep learning research systems engineered by Adarsh Kumar Jha.
            </p>
            <br />
            <ResumeDownload />
            <br />

            {/* AREA 1: AUTONOMOUS AI & MULTI-AGENT SYSTEMS */}
            <div className="text-block">
                <h1>Autonomous AI & Multi-Agent Systems</h1>
                <h3>Agent Pipelines, Voice AI & RAG</h3>
            </div>

            {/* Project 1: AI-AUTOAPPLIER-JOBS */}
            <div className="text-block">
                <h2>AI-AUTOAPPLIER-JOBS — Autonomous Multi-Portal Job Agent</h2>
                <p>
                    <b>Stack:</b> TypeScript, Python, Claude 3.5 Sonnet, Gemini API, ego-browser | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/AI-AUTOAPPLIER-JOBS">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Autonomous multi-portal job hunt, resume tailoring, and auto-apply platform executing deterministic applications on Ashby, Greenhouse, Lever, Microsoft, and Stripe career portals.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Multi-Engine Agent Integration</b>: Real-time ChatGPT consultation in ego-browser Profile 1, Claude Sonnet 3.5 resume tailoring, and round-robin Gemini API batch Q&A.
                    </li>
                    <li>
                        <b>Continuous Daemon Runner</b>: MCP terminal agent runner with persistent 24/7 daemon watcher and automated application dispatch tracking.
                    </li>
                </ul>
            </div>

            {/* Project 2: Auto-Mailer */}
            <div className="text-block">
                <h2>Auto-Mailer — Autonomous Cold Outreach & Campaign Engine</h2>
                <p>
                    <b>Stack:</b> Python, Gmail API, SQLite, Schedule Daemon, Rich CLI | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/Auto-Mailer">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    High-deliverability automated cold email pipeline with dynamic liquid variable substitution, campaign batching, and automated bounce mitigation.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Campaign Pipeline</b>: Automated schedule daemon with customizable pacing delays preventing mailbox rate limits.
                    </li>
                    <li>
                        <b>Dispatch Telemetry</b>: SQLite transaction tracking recording delivered, opened, and replied statuses with comprehensive terminal dashboards.
                    </li>
                </ul>
            </div>

            {/* Project 3: R2C Nova Sonic */}
            <div className="text-block">
                <h2>R2C — Nova Sonic Ultra-Low Latency Voice Agent</h2>
                <p>
                    <b>Stack:</b> Python, FastRTC, Twilio Voice, LiveKit, WebRTC, OpenAI Whisper | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/R2C">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Ultra-low latency conversational voice agent bridging live Twilio telephony streams with WebRTC audio pipelines for real-time customer support and automated triage.
                </p>
                <br />
                <ul>
                    <li>
                        <b>600ms p95 Turn Latency</b>: Engineered full-duplex bi-directional audio streaming via FastRTC and WebSockets, cutting turn latency by <b>65%</b> over traditional STT-LLM-TTS chains.
                    </li>
                    <li>
                        <b>Barge-In Interruption Detection</b>: Real-time VAD (Voice Activity Detection) frame buffering allowing callers to naturally interrupt the agent mid-sentence.
                    </li>
                </ul>
            </div>

            {/* Project 4: TechTransfer_Chatbot */}
            <div className="text-block">
                <h2>TechTransfer Chatbot — Academic IP RAG Assistant</h2>
                <p>
                    <b>Stack:</b> Python, LangChain, FAISS, Streamlit, Gemini Pro | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/TechTransfer_Chatbot">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Conversational patent intelligence system indexing university research publications and technology disclosures to accelerate technology transfer licensing.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Contextual Document Chunking</b>: Hybrid semantic splitting over complex technical patent disclosures with FAISS vector similarity search.
                    </li>
                    <li>
                        <b>Source-Attributed Synthesis</b>: Zero-hallucination document synthesis with explicit citation spans referencing exact patent claims and figures.
                    </li>
                </ul>
            </div>

            <br />
            {/* AREA 2: DISTRIBUTED SYSTEMS, LAKEHOUSE & INFRASTRUCTURE */}
            <div className="text-block">
                <h1>Distributed Systems, Lakehouse & Infrastructure</h1>
                <h3>Near-Real-Time CDC, Telemetry & OS Internals</h3>
            </div>

            {/* Project 5: TBO CDC Lakehouse */}
            <div className="text-block">
                <h2>TBO.com Near-Real-Time CDC Lakehouse Platform</h2>
                <p>
                    <b>Stack:</b> AWS Glue, Apache Hudi, DynamoDB Checkpoints, Amazon S3, Pharaoh CDC | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/PortFolio">Architecture [Docs]</a>
                </p>
                <br />
                <p>
                    Engineered near-real-time CDC ingestion pipelines streaming high-frequency booking transactions from SQL Server replicas into Apache Hudi ACID tables across TBO.com environments.
                </p>
                <br />
                <ul>
                    <li>
                        <b>99.8% Pipeline Uptime</b>: Resolved Glue job lockouts, schema drift, and CloudWatch stack traces across 12 production microservices.
                    </li>
                    <li>
                        <b>DynamoDB High-Watermark Checkpointing</b>: Implemented exact-once CDC commit checkpoints preventing duplicate record writes during transient AWS infrastructure failovers.
                    </li>
                </ul>
            </div>

            {/* Project 6: ML Monitoring */}
            <div className="text-block">
                <h2>ML Serving Diagnostics & Observability Platform</h2>
                <p>
                    <b>Stack:</b> Python, FastAPI, Docker, Kubernetes, Prometheus, Grafana, GCP | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/ml-monitoring">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Constructed an automated diagnostics toolkit for ML inference workloads deployed on Kubernetes clusters, intercepting runtime telemetry to isolate latency spikes, OOM container faults, and tensor shape mismatches.
                </p>
                <br />
                <ul>
                    <li>
                        <b>40% MTTR Reduction</b>: Slashed mean time to diagnosis across 5 production services by automatically pinpointing offending layer bottlenecks.
                    </li>
                    <li>
                        <b>Telemetry Dashboard</b>: Deployed a FastAPI health streaming dashboard with GCP Cloud Storage artifact persistence and automated remediation runbooks.
                    </li>
                </ul>
            </div>

            {/* Project 7: Linux Shell */}
            <div className="text-block">
                <h2>Custom Linux Mini OS Shell & POSIX Thread Scheduler</h2>
                <p>
                    <b>Stack:</b> C, Linux Syscalls, POSIX Threads, Concurrency Primitives | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/Custom-Shell">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Engineered an authentic Unix shell in C supporting command piping, multi-level I/O redirection, background job execution, and POSIX signal handling.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Round-Robin Thread Scheduler</b>: Developed a user-level preemptive scheduler with configurable time slices and mutex synchronization.
                    </li>
                    <li>
                        <b>Concurrency Stress Testing</b>: Stress-tested concurrency primitives across <b>1,000+ simulated concurrent processes</b>, eliminating race conditions and deadlocks.
                    </li>
                </ul>
            </div>

            {/* Project 8: Batch-Upload */}
            <div className="text-block">
                <h2>Batch-Upload — Resilient Multi-Threaded S3 Platform</h2>
                <p>
                    <b>Stack:</b> Python, Boto3, Multi-threading, Concurrent Futures, AWS S3 | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/Batch-Upload">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Resilient multi-threaded batch upload platform supporting multipart uploads, checksum validation, and automated network retry backoffs.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Parallel Chunk Streaming</b>: Slashed bulk upload times by <b>4x</b> using concurrent thread pools and automatic multipart S3 chunk assembly.
                    </li>
                    <li>
                        <b>Integrity Verification</b>: MD5 and SHA-256 chunk hash checks guaranteeing zero data corruption during gigabyte-scale transfers.
                    </li>
                </ul>
            </div>

            {/* Project 9: RAFT */}
            <div className="text-block">
                <h2>RAFT — Distributed Consensus Algorithm Implementation</h2>
                <p>
                    <b>Stack:</b> Python, Concurrency, Socket Programming, Distributed Systems | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/RAFT">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Implementation of the RAFT distributed consensus algorithm supporting leader election, log replication, and network partition recovery.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Leader Election & Heartbeats</b>: Implemented randomized election timeouts preventing split votes under network latency.
                    </li>
                    <li>
                        <b>Partition Healing</b>: Verified safety invariants during split-brain network simulations, ensuring linearizable state machine replication.
                    </li>
                </ul>
            </div>

            <br />
            {/* AREA 3: DEEP LEARNING, COMPUTER VISION & MULTIMODAL RESEARCH */}
            <div className="text-block">
                <h1>Deep Learning, Computer Vision & Multimodal Research</h1>
                <h3>Knowledge Graphs, Video Understanding & Sequence Modeling</h3>
            </div>

            {/* Project 10: VICAS Lab */}
            <div className="text-block">
                <h2>VICAS Lab Portal & Resume Knowledge Graph</h2>
                <p>
                    <b>Stack:</b> React, FastAPI, FAISS, Neo4j, GCN, Docker, AWS EC2 | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/Vicas-Lab">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Engineered an AI-powered talent marketplace and recruiter portal on AWS EC2 featuring 6 REST microservices, Google OAuth2, and GitHub Actions CI/CD; successfully onboarded <b>160+ registered students</b>.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Gemini RAG Pipeline</b>: Formulated an automated pipeline converting PDF resumes into structured candidate skill profiles in <b>FAISS</b> vector stores.
                    </li>
                    <li>
                        <b>Neo4j & GCN Link Prediction</b>: Built an enterprise knowledge graph and trained a Graph Convolutional Network with BGE Cross-Encoder re-ranking to predict candidate-job fit with <b>91.4% precision</b>.
                    </li>
                </ul>
            </div>

            {/* Project 11: WatchTower-S3R */}
            <div className="text-block">
                <h2>WatchTower-S3R — Spatiotemporal Video Anomaly Detection</h2>
                <p>
                    <b>Stack:</b> PyTorch, OpenCV, Spatiotemporal CNN, ResNet-3D, CUDA | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/WatchTower-S3R">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Deep learning surveillance framework detecting abnormal events in real-time camera feeds through spatiotemporal 3D convolutions.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Spatiotemporal Feature Extraction</b>: 3D convolutional backbone capturing motion kinematics and contextual object interactions.
                    </li>
                    <li>
                        <b>Real-Time Inference</b>: Optimized CUDA tensor pipelines executing inference at <b>30+ FPS</b> on surveillance streams.
                    </li>
                </ul>
            </div>

            {/* Project 12: Deception-Detection */}
            <div className="text-block">
                <h2>Multimodal Deception Detection via Cross-Modal Attention</h2>
                <p>
                    <b>Stack:</b> PyTorch, Hugging Face Transformers, RoBERTa, Audio Processing | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/Deception-Detection">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Multimodal classification system fusing facial micro-expressions, acoustic pitch shifts, and transcript linguistic cues to identify deceptive statements.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Cross-Modal Attention Fusion</b>: Dynamic cross-attention weighting verbal confidence and non-verbal stress signals.
                    </li>
                    <li>
                        <b>Benchmarking</b>: Outperformed unimodal baselines by <b>14%</b> across cross-domain legal deposition benchmarks.
                    </li>
                </ul>
            </div>

            {/* Project 13: Handwritten Text Recognition */}
            <div className="text-block">
                <h2>Handwritten Text Recognition (CRNN + CTC Loss OCR)</h2>
                <p>
                    <b>Stack:</b> PyTorch, OpenCV, CRNN, Bidirectional LSTM, CTC Loss | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/Handwritten-Text-Recognition-">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    End-to-end handwriting recognition architecture processing cursive manuscript images into transcribed ASCII text without character segmentation.
                </p>
                <br />
                <ul>
                    <li>
                        <b>CRNN Pipeline</b>: Convolutional feature extraction paired with Bi-LSTM sequence modeling and Connectionist Temporal Classification (CTC) loss.
                    </li>
                    <li>
                        <b>Character Error Rate</b>: Achieved under <b>8.2% CER</b> across unstructured cursive documents.
                    </li>
                </ul>
            </div>

            {/* Project 14: Customer Churn */}
            <div className="text-block">
                <h2>Customer Churn Prediction — Ensemble ML Benchmarking</h2>
                <p>
                    <b>Stack:</b> Python, XGBoost, LightGBM, CatBoost, Scikit-learn, Optuna | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/PortFolio">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Benchmarked gradient-boosted decision tree architectures on 50,000+ customer records to identify high-risk churners under severe class imbalance.
                </p>
                <br />
                <ul>
                    <li>
                        <b>89.4% ROC-AUC</b>: Optimized ensemble weights and hyperparameters with Optuna, delivering a <b>12% gain</b> over baseline classifiers.
                    </li>
                    <li>
                        <b>Business Impact</b>: Minimized false negative attrition rates, preventing an estimated <b>18% simulated revenue loss</b>.
                    </li>
                </ul>
            </div>

            {/* Project 15: STICKMAN */}
            <div className="text-block">
                <h2>STICKMAN — 2D Physics & Sprite Animation Engine</h2>
                <p>
                    <b>Stack:</b> Python, Pygame, Rigid Body Physics, Vector Math | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/STICKMAN">GitHub [Code]</a>
                </p>
                <br />
                <p>
                    Custom 2D platformer physics engine implementing impulse-based collision resolution, velocity Verlet integration, and skeletal bone hierarchy animation.
                </p>
                <br />
                <ul>
                    <li>
                        <b>Physics Solver</b>: Deterministic continuous collision detection resolving tunneling artifacts at high projectile velocities.
                    </li>
                    <li>
                        <b>Skeletal Inverse Kinematics</b>: Real-time procedural leg and arm positioning adapting dynamically to uneven terrain.
                    </li>
                </ul>
            </div>

            <br />
        </div>
    );
};

export default SoftwareProjects;
