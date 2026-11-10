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
                A selection of production systems, distributed infrastructure, and machine learning research projects I have engineered.
            </p>
            <br />
            <ResumeDownload />
            <br />

            {/* Project 1: VICAS Lab */}
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

            {/* Project 2: ML Diagnostics */}
            <div className="text-block">
                <h2>ML Serving Diagnostics & Observability Platform</h2>
                <p>
                    <b>Stack:</b> Python, FastAPI, Docker, Kubernetes, TensorFlow, PyTorch, GCP | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush/ml-monitoring">GitHub [Code]</a>
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

            {/* Project 3: Linux Shell */}
            <div className="text-block">
                <h2>Custom Linux Mini OS Shell & POSIX Thread Scheduler</h2>
                <p>
                    <b>Stack:</b> C, Linux Syscalls, POSIX Threads, Concurrency Primitives | <a rel="noreferrer" target="_blank" href="https://github.com/ad4rush">GitHub [Profile]</a>
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

            {/* Project 4: Churn Prediction */}
            <div className="text-block">
                <h2>Customer Churn Prediction -- Ensemble ML Benchmarking</h2>
                <p>
                    <b>Stack:</b> Python, XGBoost, LightGBM, CatBoost, Scikit-learn, Optuna
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
        </div>
    );
};

export default SoftwareProjects;
