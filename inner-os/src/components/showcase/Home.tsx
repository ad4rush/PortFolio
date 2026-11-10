import React from 'react';
import { Link } from '../general';
import { useNavigate } from 'react-router-dom';
import Signature from './Signature';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Adarsh Kumar Jha</h1>
                <h2 style={styles.title}>AI & Systems Engineer</h2>
                <p style={styles.tagline}>
                    IIIT-Delhi CS & AI '26 | AI Engineer at TBO.com | GATE AIR 252
                </p>
            </div>
            
            <Signature subtitle="Click to replay handwritten stroke" />

            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT ME" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '24px 20px',
        boxSizing: 'border-box',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 16,
    },
    name: {
        fontSize: 34,
        marginBottom: 4,
        letterSpacing: '-0.5px',
        fontWeight: 'bold',
        color: '#111827',
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        color: '#003366',
        marginBottom: 6,
    },
    tagline: {
        fontSize: 13,
        color: '#4b5563',
        fontWeight: 500,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 320,
        gap: 8,
        marginTop: 12,
    },
    link: {
        marginBottom: 0,
    },
};

export default Home;
