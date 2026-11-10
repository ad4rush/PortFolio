import React, { useEffect, useState } from 'react';
import colors from '../../constants/colors';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

// function to validate email
const validateEmail = (email: string) => {
    const re =
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

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

const Contact: React.FC<ContactProps> = (props) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [formMessageColor, setFormMessageColor] = useState('');

    useEffect(() => {
        if (validateEmail(email) && name.length > 0 && message.length > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, name, message]);

    const subjectStr = `Portfolio Message from ${name}${company ? ` (${company})` : ''}`;
    const bodyText = `Hi Adarsh,\n\n${message}\n\n---\nBest regards,\n${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ''}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ad4rush@gmail.com&su=${encodeURIComponent(subjectStr)}&body=${encodeURIComponent(bodyText)}`;
    const mailtoUrl = `mailto:ad4rush@gmail.com?subject=${encodeURIComponent(subjectStr)}&body=${encodeURIComponent(bodyText)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918287993780&text=${encodeURIComponent(`Hi Adarsh, this is ${name}${company ? ` from ${company}` : ''}. ${message} (Email: ${email})`)}`;
    const clipboardText = `To: ad4rush@gmail.com\nSubject: ${subjectStr}\n\n${bodyText}`;

    function submitForm() {
        if (!isFormValid) {
            setFormMessage('Please complete name, email, and message.');
            setFormMessageColor(colors.red);
            return;
        }

        // Store message in local storage audit log
        try {
            const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
            stored.push({
                timestamp: new Date().toISOString(),
                name,
                email,
                company: company || 'N/A',
                message,
            });
            localStorage.setItem('portfolio_messages', JSON.stringify(stored));
        } catch (e) {}

        // Copy formatted message to clipboard automatically
        try {
            if (navigator && navigator.clipboard) {
                navigator.clipboard.writeText(clipboardText);
            }
        } catch (e) {}

        // Trigger Gmail compose directly
        try {
            window.open(gmailUrl, '_blank');
        } catch (e) {}

        setIsSubmitted(true);
        setFormMessage('Message prepared and queued!');
        setFormMessageColor(colors.blue);
    }

    const copyToClipboard = () => {
        try {
            if (navigator && navigator.clipboard) {
                navigator.clipboard.writeText(clipboardText);
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            }
        } catch (e) {}
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setCompany('');
        setEmail('');
        setName('');
        setMessage('');
        setFormMessage('');
    };

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
                    I am actively exploring high-impact AI Engineering, Distributed Systems, and Data Lakehouse opportunities. Feel free to reach out directly via email at{' '}
                    <a href="mailto:ad4rush@gmail.com">ad4rush@gmail.com</a>, or connect on LinkedIn and GitHub! You can also drop a message using the form below.
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:ad4rush@gmail.com">
                        ad4rush@gmail.com
                    </a>
                </p>
                <p>
                    <b>Phone: </b>
                    <a href="tel:+918287993780">
                        +91-8287993780
                    </a>
                </p>

                {isSubmitted ? (
                    <div style={styles.confirmationBox}>
                        <div style={styles.confirmationHeader}>
                            <h3 style={{ margin: 0, color: '#166534' }}>
                                ✓ Message Prepared for Transmission!
                            </h3>
                            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#374151' }}>
                                A formatted copy has been placed on your clipboard. Choose how you'd like to deliver it:
                            </p>
                        </div>

                        <div style={styles.summaryBox}>
                            <p style={{ margin: '2px 0' }}><b>To:</b> ad4rush@gmail.com</p>
                            <p style={{ margin: '2px 0' }}><b>From:</b> {name} ({email}){company ? ` at ${company}` : ''}</p>
                            <p style={{ margin: '6px 0 2px' }}><b>Message:</b></p>
                            <pre style={styles.summaryPre}>{message}</pre>
                        </div>

                        <div style={styles.dispatchActions}>
                            <a
                                href={gmailUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="site-button"
                                style={styles.actionButton}
                            >
                                ✉ Open in Gmail (Send Immediately)
                            </a>
                            <a
                                href={mailtoUrl}
                                className="site-button"
                                style={styles.actionButton}
                            >
                                📧 Open in Default Mail App
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="site-button"
                                style={styles.actionButton}
                            >
                                💬 Send via WhatsApp (+91-8287993780)
                            </a>
                            <button
                                type="button"
                                className="site-button"
                                style={styles.actionButton}
                                onClick={copyToClipboard}
                            >
                                📋 {copied ? '✓ Copied to Clipboard!' : 'Copy Formatted Text'}
                            </button>
                            <button
                                type="button"
                                className="site-button"
                                style={{ ...styles.actionButton, backgroundColor: '#f1f5f9', marginTop: 10 }}
                                onClick={handleReset}
                            >
                                ↺ Write Another Message
                            </button>
                        </div>
                    </div>
                ) : (
                    <div style={styles.form}>
                        <label>
                            <p>
                                {!name && <span style={styles.star}>*</span>}
                                <b>Your name:</b>
                            </p>
                        </label>
                        <input
                            style={styles.formItem}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>
                            <p>
                                {!validateEmail(email) && (
                                    <span style={styles.star}>*</span>
                                )}
                                <b>Email:</b>
                            </p>
                        </label>
                        <input
                            style={styles.formItem}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>
                            <p>
                                <b>Company (optional):</b>
                            </p>
                        </label>
                        <input
                            style={styles.formItem}
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <label>
                            <p>
                                {!message && <span style={styles.star}>*</span>}
                                <b>Message:</b>
                            </p>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            style={styles.formItem}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <div style={styles.buttons}>
                            <button
                                className="site-button"
                                style={styles.button}
                                type="button"
                                disabled={!isFormValid}
                                onClick={submitForm}
                            >
                                Send Message
                            </button>
                            <div style={styles.formInfo}>
                                <p
                                    style={Object.assign(
                                        {},
                                        { color: formMessageColor }
                                    )}
                                >
                                    <b>
                                        <sub>
                                            {formMessage
                                                ? `${formMessage}`
                                                : ' Messages are routed directly to ad4rush@gmail.com'}
                                        </sub>
                                    </b>
                                </p>
                                <p>
                                    <sub>
                                        {!isFormValid ? (
                                            <span>
                                                <b style={styles.star}>*</b> = required
                                            </span>
                                        ) : (
                                            '\xa0'
                                        )}
                                    </sub>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        flexDirection: 'column',
        marginTop: 24,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    buttons: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 34,
    },
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
    confirmationBox: {
        flexDirection: 'column',
        marginTop: 20,
        padding: 16,
        backgroundColor: '#f0fdf4',
        border: '2px solid #86efac',
        borderRadius: 8,
    },
    confirmationHeader: {
        flexDirection: 'column',
        marginBottom: 12,
    },
    summaryBox: {
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#ffffff',
        border: '1px solid #bbf7d0',
        borderRadius: 6,
        marginBottom: 16,
        fontSize: '12px',
        color: '#1f2937',
    },
    summaryPre: {
        margin: '4px 0 0',
        padding: 8,
        backgroundColor: '#f8fafc',
        borderRadius: 4,
        fontSize: '12px',
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        border: '1px solid #e2e8f0',
    },
    dispatchActions: {
        flexDirection: 'column',
        gap: 8,
    },
    actionButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 14px',
        textDecoration: 'none',
        color: '#000000',
        fontWeight: 600,
        fontSize: '13px',
        cursor: 'pointer',
        textAlign: 'center',
    },
};

export default Contact;
