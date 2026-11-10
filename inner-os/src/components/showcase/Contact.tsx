import React, { useState } from 'react';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

const GOOGLE_FORM_VIEW_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfr8kySoY7ynGGMKnTUBn_mrP9C5MZsBdXrVqfZP-PizHUyQA/viewform';
const GOOGLE_FORM_EMBED_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfr8kySoY7ynGGMKnTUBn_mrP9C5MZsBdXrVqfZP-PizHUyQA/viewform?embedded=true';

const Contact: React.FC<ContactProps> = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/ad4rush'}
                    />
                    <SocialBox
                        icon={inIcon}
                        link={'https://www.linkedin.com/in/ad4rush'}
                    />
                </div>
            </div>
            <div className="text-block">
                <p>
                    I am actively exploring high-impact AI Engineering, Distributed Systems, and Data Lakehouse opportunities. Feel free to reach out directly via the official Google Form below, or connect on LinkedIn and GitHub!
                </p>
                <br />
                <div style={styles.directContactBar}>
                    <p style={{ margin: 0 }}>
                        <b>Email: </b>
                        <a href="mailto:ad4rush@gmail.com">
                            ad4rush@gmail.com
                        </a>
                        <span style={{ margin: '0 12px', color: '#9ca3af' }}>|</span>
                        <b>Phone: </b>
                        <a href="tel:+918287993780">
                            +91-8287993780
                        </a>
                    </p>
                    <div style={styles.formActionButtons}>
                        <a
                            href={GOOGLE_FORM_VIEW_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="site-button"
                            style={styles.popoutBtn}
                        >
                            ↗ Open Google Form in New Tab
                        </a>
                    </div>
                </div>

                <div style={styles.formContainer}>
                    {isLoading && (
                        <div style={styles.loadingPlaceholder}>
                            <p className="loading" style={{ margin: 0, fontWeight: 600 }}>
                                Loading Google Form…
                            </p>
                        </div>
                    )}
                    <iframe
                        src={GOOGLE_FORM_EMBED_URL}
                        title="Adarsh Kumar Jha — Contact & Opportunities"
                        style={{
                            ...styles.iframe,
                            display: isLoading ? 'none' : 'block',
                        }}
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        onLoad={() => setIsLoading(false)}
                    >
                        Loading Google Form…
                    </iframe>
                </div>
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    social: {
        width: 4,
        height: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    directContactBar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 14px',
        backgroundColor: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: 6,
        marginBottom: 16,
        gap: 12,
    },
    formActionButtons: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    popoutBtn: {
        padding: '4px 12px',
        fontSize: '12px',
        fontWeight: 600,
        textDecoration: 'none',
        color: '#000000',
        display: 'inline-flex',
        alignItems: 'center',
    },
    formContainer: {
        flexDirection: 'column',
        width: '100%',
        minHeight: 780,
        backgroundColor: '#ffffff',
        border: '2px solid #94a3b8',
        borderRadius: 6,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 16,
    },
    loadingPlaceholder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: '100%',
        color: '#64748b',
    },
    iframe: {
        width: '100%',
        height: 820,
        border: 'none',
    },
};

export default Contact;
