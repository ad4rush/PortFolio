import React from 'react';
import printer from '../../assets/resume/printer.gif';
import Resume from '../../assets/resume/Adarsh_Kumar_Jha_Resume.pdf';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="Desk Printer" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                <a rel="noreferrer" target="_blank" href={Resume} download="Adarsh_Kumar_Jha_AI_Engineer_Resume.pdf">
                    <p>Click here to print & download it! (ATS Optimized PDF, 22KB)</p>
                </a>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    resumeContainerText: {
        display: 'flex',
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
};

export default ResumeDownload;
