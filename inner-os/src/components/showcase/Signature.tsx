import React, { useState } from 'react';
import { motion } from 'framer-motion';
import signatureImg from '../../assets/pictures/signature.png';

export interface SignatureProps {
    color?: string;
    width?: number;
    height?: number;
    subtitle?: string;
}

export const Signature: React.FC<SignatureProps> = ({
    color = '#0f172a',
    width = 320,
    height = 138,
    subtitle = 'Handwritten Signature — Adarsh Kumar Jha',
}) => {
    const [key, setKey] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const replay = () => {
        setKey((prev) => prev + 1);
    };

    // Mask ID unique per key to force SVG mask re-evaluation in all browsers
    const maskId = `signature-reveal-mask-${key}`;

    return (
        <div 
            style={{
                ...styles.container,
                borderColor: isHovered ? '#3b82f6' : '#cbd5e1',
                boxShadow: isHovered 
                    ? '0 6px 20px rgba(59, 130, 246, 0.15)' 
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
                        {/* Progressive dynamic reveal mask tracing Adarsh's authentic strokes */}
                        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="156">
                            {/* Black background hides unrevealed areas */}
                            <rect width="360" height="156" fill="black" />

                            {/* Stroke 1: Leftward sweep crossbar loop */}
                            <motion.path
                                d="M 125 36 C 85 36, 44 55, 44 75 C 44 95, 75 94, 125 62"
                                stroke="white"
                                strokeWidth="32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.65, ease: [0.45, 0, 0.55, 1] }}
                            />

                            {/* Stroke 2: Rising stem of 'A' up to the top apex */}
                            <motion.path
                                d="M 125 108 C 135 80, 150 40, 165 7"
                                stroke="white"
                                strokeWidth="32"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 1, 0.5, 1] }}
                            />

                            {/* Stroke 3: Descending slash of 'A' */}
                            <motion.path
                                d="M 165 7 C 158 35, 146 70, 132 102"
                                stroke="white"
                                strokeWidth="32"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.4, delay: 1.0, ease: [0.33, 1, 0.68, 1] }}
                            />

                            {/* Stroke 4: Upper arching flourish across top */}
                            <motion.path
                                d="M 132 102 C 145 40, 195 24, 250 36 C 275 42, 288 36, 288 30"
                                stroke="white"
                                strokeWidth="32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.65, delay: 1.35, ease: [0.42, 0, 0.58, 1] }}
                            />

                            {/* Stroke 5: Fluid cursive letters 'darsh' */}
                            <motion.path
                                d="M 132 55 C 150 58, 165 65, 178 78 C 190 60, 202 52, 214 83 C 224 82, 235 60, 248 65 C 260 76, 275 60, 292 66 C 304 68, 312 70, 316 72"
                                stroke="white"
                                strokeWidth="32"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.0, delay: 1.95, ease: [0.45, 0, 0.55, 1] }}
                            />

                            {/* Stroke 6: Trailing underline flourish */}
                            <motion.path
                                d="M 44 96 C 90 92, 130 65, 155 95 C 160 116, 210 110, 270 85"
                                stroke="white"
                                strokeWidth="30"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.55, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
                            />

                            {/* Stroke 7: First punctuation dot */}
                            <motion.circle
                                cx="198"
                                cy="121"
                                r="12"
                                fill="white"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.15, delay: 3.45, ease: 'easeOut' }}
                            />

                            {/* Stroke 8: Second punctuation dot */}
                            <motion.circle
                                cx="212"
                                cy="120"
                                r="12"
                                fill="white"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.15, delay: 3.65, ease: 'easeOut' }}
                            />
                        </mask>

                        {/* Subtle blue/indigo ambient glow gradient */}
                        <linearGradient id="signature-glow-gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>

                    {/* 1. Real authentic handwritten signature image revealed through animated strokes */}
                    <image
                        href={signatureImg}
                        x="0"
                        y="0"
                        width="360"
                        height="156"
                        preserveAspectRatio="xMidYMid meet"
                        mask={`url(#${maskId})`}
                        style={{ filter: color !== '#0f172a' ? 'contrast(1.1)' : undefined }}
                    />

                    {/* 2. Maxime Heckel animated blue/indigo vector guide line (glowing ink stroke) */}
                    <motion.path
                        d="M 125 36 C 85 36, 44 55, 44 75 C 44 95, 75 94, 125 62"
                        stroke="url(#signature-glow-gradient)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.9 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 0.65, ease: [0.45, 0, 0.55, 1] }}
                    />
                    <motion.path
                        d="M 125 108 C 135 80, 150 40, 165 7"
                        stroke="url(#signature-glow-gradient)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.9 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 1, 0.5, 1] }}
                    />
                    <motion.path
                        d="M 165 7 C 158 35, 146 70, 132 102"
                        stroke="url(#signature-glow-gradient)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.9 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 0.4, delay: 1.0, ease: [0.33, 1, 0.68, 1] }}
                    />
                    <motion.path
                        d="M 132 102 C 145 40, 195 24, 250 36 C 275 42, 288 36, 288 30"
                        stroke="url(#signature-glow-gradient)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.9 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 0.65, delay: 1.35, ease: [0.42, 0, 0.58, 1] }}
                    />
                    <motion.path
                        d="M 132 55 C 150 58, 165 65, 178 78 C 190 60, 202 52, 214 83 C 224 82, 235 60, 248 65 C 260 76, 275 60, 292 66 C 304 68, 312 70, 316 72"
                        stroke="url(#signature-glow-gradient)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.9 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 1.0, delay: 1.95, ease: [0.45, 0, 0.55, 1] }}
                    />
                    <motion.path
                        d="M 44 96 C 90 92, 130 65, 155 95 C 160 116, 210 110, 270 85"
                        stroke="url(#signature-glow-gradient)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0.9 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 0.55, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                </svg>
            </div>
            <div style={styles.footer}>
                <span style={styles.replayBadge}>
                    ↺ {isHovered ? 'Click to replay' : 'Replay animation'}
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
