import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface SignatureProps {
    color?: string;
    width?: number;
    height?: number;
    subtitle?: string;
}

export const Signature: React.FC<SignatureProps> = ({
    color = '#003366',
    width = 280,
    height = 90,
    subtitle = 'Adarsh Kumar Jha — AI & Systems Engineer',
}) => {
    const [key, setKey] = useState(0);

    const replay = () => {
        setKey((prev) => prev + 1);
    };

    return (
        <div style={styles.container}>
            <div style={styles.signatureWrapper} onClick={replay} title="Click to replay signature">
                <svg
                    key={key}
                    width={width}
                    height={height}
                    viewBox="0 0 320 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={styles.svg}
                >
                    {/* Flourish start */}
                    <motion.path
                        d="M 25 70 C 40 20, 60 15, 75 75 C 80 40, 95 35, 110 65"
                        stroke={color}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                    />
                    {/* 'A' Crossbar & flow */}
                    <motion.path
                        d="M 45 55 Q 70 52, 95 56 C 115 45, 130 65, 145 60"
                        stroke={color}
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
                    />
                    {/* 'darsh' fluid stroke */}
                    <motion.path
                        d="M 135 62 Q 150 48, 160 62 T 180 60 Q 195 40, 200 68 T 215 58 Q 225 35, 230 65"
                        stroke={color}
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.9, ease: 'easeInOut' }}
                    />
                    {/* 'Jha' underline flourish */}
                    <motion.path
                        d="M 225 55 Q 245 42, 255 70 Q 265 85, 250 90 Q 235 92, 245 80 L 270 58 Q 285 45, 295 62"
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.0, delay: 1.4, ease: 'easeOut' }}
                    />
                    {/* Underline loop sweep */}
                    <motion.path
                        d="M 40 85 C 100 80, 210 78, 295 82"
                        stroke={color}
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.85 }}
                        transition={{ duration: 0.7, delay: 2.1, ease: 'easeOut' }}
                    />
                </svg>
            </div>
            {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '16px 0',
        padding: '12px 18px',
        background: '#f8f9fa',
        border: '1px dashed #ced4da',
        borderRadius: 8,
        cursor: 'pointer',
        userSelect: 'none',
    },
    signatureWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svg: {
        overflow: 'visible',
    },
    subtitle: {
        fontSize: '11px',
        fontFamily: 'monospace',
        color: '#6c757d',
        marginTop: 4,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
    },
};

export default Signature;
