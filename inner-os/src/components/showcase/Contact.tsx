import React, { useEffect, useState, useRef } from 'react';
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

const GFORM_ACTION =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfr8kySoY7ynGGMKnTUBn_mrP9C5MZsBdXrVqfZP-PizHUyQA/formResponse';
const ENTRY_NAME = 'entry.26235626';
const ENTRY_EMAIL = 'entry.622767810';
const ENTRY_COMPANY = 'entry.1198129217';
const ENTRY_MESSAGE = 'entry.111327979';

const Contact: React.FC<ContactProps> = (props) => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [formMessageColor, setFormMessageColor] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (validateEmail(email) && name.length > 0 && message.length > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, name, message]);

    function handleSubmit(e?: React.FormEvent) {
        if (e) e.preventDefault();
        if (!isFormValid || isLoading) {
            setFormMessage('Form unable to validate, please fill all required fields.');
            setFormMessageColor(colors.red);
            return;
        }

        setIsLoading(true);

        // Submit form via hidden iframe
        if (formRef.current) {
            formRef.current.submit();
        }

        // Store in local storage audit log
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
        } catch (err) {}

        const senderName = name;
        setTimeout(() => {
            setFormMessage(`Message successfully sent! Thank you ${senderName}!`);
            setFormMessageColor(colors.blue);
            setCompany('');
            setEmail('');
            setName('');
            setMessage('');
            setIsLoading(false);
        }, 600);
    }

    useEffect(() => {
        if (formMessage.length > 0) {
            const timer = setTimeout(() => {
                setFormMessage('');
                setFormMessageColor('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formMessage]);

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

                {/* Hidden iframe for seamless Google Form submission without page reload */}
                <iframe
                    name="hidden_gform"
                    id="hidden_gform"
                    title="hidden_gform"
                    style={{ display: 'none' }}
                />

                <form
                    ref={formRef}
                    action={GFORM_ACTION}
                    method="POST"
                    target="hidden_gform"
                    onSubmit={handleSubmit}
                    style={styles.form}
                >
                    <label>
                        <p>
                            {!name && <span style={styles.star}>*</span>}
                            <b>Your name:</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        name={ENTRY_NAME}
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
                        name={ENTRY_EMAIL}
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
                        name={ENTRY_COMPANY}
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
                        name={ENTRY_MESSAGE}
                        placeholder="Message"
                        style={styles.formItem}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div style={styles.buttons}>
                        <button
                            className="site-button"
                            style={styles.button}
                            type="submit"
                            disabled={!isFormValid || isLoading}
                        >
                            {!isLoading ? (
                                'Send Message'
                            ) : (
                                <p className="loading">Sending...</p>
                            )}
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
                                            : ' All messages get forwarded straight to my personal email'}
                                    </sub>
                                </b>
                            </p>
                            <p>
                                <sub>
                                    {!isFormValid ? (
                                        <span>
                                            <b style={styles.star}>*</b> =
                                            required
                                        </span>
                                    ) : (
                                        '\xa0'
                                    )}
                                </sub>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        flexDirection: 'column',
        marginTop: 32,
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
        height: 32,
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
};

export default Contact;
