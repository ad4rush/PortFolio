import React from 'react';
import { useNavigate } from 'react-router-dom';
import software from '../../assets/pictures/projects/software.gif';

export interface ProjectsProps {}

interface ProjectTrackCardProps {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    stats: string;
    onClick: () => void;
}

const ProjectTrackCard: React.FC<ProjectTrackCardProps> = ({
    icon,
    title,
    subtitle,
    description,
    stats,
    onClick,
}) => {
    return (
        <div
            onMouseDown={onClick}
            className="big-button-container"
            style={styles.projectLink}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={styles.computerIcon}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 36, margin: '0 0 4px 0' }}>{title}</h1>
                    <h3 style={{ fontSize: 14, color: '#003366', margin: '0 0 8px 0' }}>{subtitle}</h3>
                    <p style={{ fontSize: 13, color: '#495057', margin: '0 0 6px 0' }}>{description}</p>
                    <p style={{ fontSize: 11, fontFamily: 'monospace', color: '#6c757d' }}><b>Key Highlights:</b> {stats}</p>
                </div>
            </div>
            <div style={styles.projectLinkRight}>
                <p style={{ fontSize: 18, color: '#003366' }}><b>➔</b></p>
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = () => {
    const navigate = useNavigate();

    return (
        <div className="site-page-content">
            <h1>Engineering Projects</h1>
            <h3>Production Systems & Research Directory</h3>
            <br />
            <p>
                A collection of autonomous multi-agent pipelines, distributed lakehouse architectures, and deep learning research systems engineered by Adarsh Kumar Jha. Click any track below or explore the full interactive project timeline.
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectTrackCard
                    icon={software}
                    title="Autonomous AI & Multi-Agent Systems"
                    subtitle="4 PROJECTS — 2025/2026"
                    description="Autonomous multi-portal job applications, dynamic LaTeX ATS tailoring, ultra-low latency voice IVR, and document RAG."
                    stats="Greenhouse, Ashby, Lever, Claude 3.5 Sonnet, Gemini API, FastRTC, Twilio, WebRTC (600ms p95)"
                    onClick={() => navigate('/projects/software')}
                />
                <ProjectTrackCard
                    icon={software}
                    title="Distributed Systems, Lakehouse & Infrastructure"
                    subtitle="5 PROJECTS — 2024–2026"
                    description="Real-time CDC pipelines, Apache Hudi ACID tables, Glue run-failure self-healing, ML inference observability, and Unix systems programming."
                    stats="AWS Glue, Apache Hudi, DynamoDB Checkpoints, Prometheus, Grafana, POSIX C Threads, RAFT Consensus"
                    onClick={() => navigate('/projects/software')}
                />
                <ProjectTrackCard
                    icon={software}
                    title="Deep Learning, Computer Vision & Multimodal Research"
                    subtitle="5 PROJECTS — 2024–2026"
                    description="Neo4j & GCN candidate knowledge graphs, spatiotemporal video anomaly detection, CRNN handwriting OCR, and dialogue deception detection."
                    stats="Neo4j, PyTorch Geometric, Spatiotemporal CNN, CRNN + CTC Loss, RoBERTa, Optuna (89.4% ROC-AUC)"
                    onClick={() => navigate('/projects/software')}
                />
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 20,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px',
        backgroundColor: '#ffffff',
        border: '2px solid #000000',
        borderRadius: '6px',
        boxShadow: '3px 3px 0px rgba(0,0,0,0.8)',
    },
    projectLinkLeft: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    projectLinkRight: {
        marginLeft: 16,
    },
    computerIcon: {
        width: 56,
        height: 56,
        marginRight: 20,
    },
    projectText: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
};

export default Projects;
