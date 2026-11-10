import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface SignatureProps {
    color?: string;
    width?: number;
    height?: number;
    subtitle?: string;
}

export const Signature: React.FC<SignatureProps> = ({
    color = '#002b49',
    width = 320,
    height = 138,
    subtitle = 'Handwritten Signature — Adarsh Kumar Jha',
}) => {
    const [key, setKey] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const replay = () => {
        setKey((prev) => prev + 1);
    };

    return (
        <div
            style={{
                ...styles.container,
                borderColor: isHovered ? '#2563eb' : '#cbd5e1',
                boxShadow: isHovered
                    ? '0 6px 20px rgba(37, 99, 235, 0.15)'
                    : '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={replay}
            title="Click to replay handwritten signing animation"
        >
            <div style={styles.signatureWrapper}>
                <svg
                    key={key}
                    width={width}
                    height={height}
                    viewBox="0 0 360 156"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={styles.svg}
                >
                    <defs>
                        {/* Glowing ink gradient for signing pen accents */}
                        <linearGradient id="ink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a8a" />
                            <stop offset="50%" stopColor="#0f172a" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>

                        <filter id="ink-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#1e3a8a" floodOpacity="0.3" />
                        </filter>
                    </defs>

                    {/* STROKE 1: Leftward sweep crossbar loop of 'A' */}
                    <motion.path
                        d="M 124 42 C 85 36, 44 54, 44 75 C 44 94, 76 92, 124 60"
                        stroke={color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        filter="url(#ink-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.65, ease: [0.45, 0, 0.55, 1] }}
                    />

                    {/* STROKE 2: Ascending stem of 'A' up to the apex */}
                    <motion.path
                        d="M 124 108 C 134 82, 150 42, 166 8"
                        stroke={color}
                        strokeWidth="4.2"
                        strokeLinecap="round"
                        fill="none"
                        filter="url(#ink-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 1, 0.5, 1] }}
                    />

                    {/* STROKE 3: Descending slash of 'A' */}
                    <motion.path
                        d="M 166 8 C 160 38, 146 72, 132 105"
                        stroke={color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                        filter="url(#ink-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.0, ease: [0.33, 1, 0.68, 1] }}
                    />

                    {/* STROKE 4: High arching flourish looping across the top */}
                    <motion.path
                        d="M 132 105 C 145 36, 195 24, 245 34 C 272 40, 286 34, 286 28"
                        stroke={color}
                        strokeWidth="3.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        filter="url(#ink-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.65, delay: 1.35, ease: [0.42, 0, 0.58, 1] }}
                    />

                    {/* STROKE 5: Fluid cursive letters 'darsh' */}
                    <motion.path
                        d="M 132 58 C 148 56, 165 62, 176 76 C 186 60, 198 52, 212 80 C 220 78, 230 60, 242 62 C 254 72, 268 56, 280 60 C 292 65, 305 68, 316 72"
                        stroke={color}
                        strokeWidth="3.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        filter="url(#ink-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 1.95, ease: [0.45, 0, 0.55, 1] }}
                    />

                    {/* STROKE 6: Trailing horizontal underline flourish */}
                    <motion.path
                        d="M 44 96 C 90 92, 130 68, 155 96 C 160 116, 205 112, 265 85"
                        stroke={color}
                        strokeWidth="3.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        filter="url(#ink-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.55, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* STROKE 7: First punctuation dot */}
                    <motion.circle
                        cx="198"
                        cy="121"
                        r="4"
                        fill={color}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 3.55, ease: 'easeOut' }}
                    />

                    {/* STROKE 8: Second punctuation dot */}
                    <motion.circle
                        cx="212"
                        cy="120"
                        r="4"
                        fill={color}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 3.75, ease: 'easeOut' }}
                    />
                </svg>
            </div>
            <div style={styles.footer}>
                <span style={styles.replayBadge}>
                    ↺ {isHovered ? 'Click to replay' : 'Replay signing animation'}
                </span>
                {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '18px 0',
        padding: '16px 20px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        border: '1.5px dashed #cbd5e1',
        borderRadius: 12,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
    },
    signatureWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
    },
    svg: {
        overflow: 'visible',
        maxWidth: '100%',
        height: 'auto',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 6,
        gap: 4,
    },
    replayBadge: {
        fontSize: '10px',
        fontWeight: 600,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#2563eb',
        background: '#eff6ff',
        padding: '2px 8px',
        borderRadius: 12,
        border: '1px solid #bfdbfe',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
    },
    subtitle: {
        fontSize: '11px',
        fontFamily: 'monospace',
        color: '#64748b',
        letterSpacing: '0.03em',
        margin: 0,
    },
};

export default Signature;
