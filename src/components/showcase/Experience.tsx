import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Huduma</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.hudumakenya.go.ke/'}
                        >
                            <h4>www.hudumakenya.go.ke</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>ICT Attachee</h3>
                        <b>
                            <p>May 2025 - August 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Based in Nairobi, Kenya, Huduma Kenya Centre (GPO) is a government service hub 
                    integrating multiple agencies to provide citizens with streamlined access to 
                    public services. As an ICT Attaché from May to August 2025, I provided 
                    technical support and contributed to the maintenance and optimization of the 
                    Centre’s IT infrastructure.
                </p>
                <br />
                <ul>
                    <li>
                    <p>
                        Delivered first-line user support and troubleshooting for both staff and 
                        service desks across multiple government agencies, efficiently diagnosing 
                        and resolving hardware, software, and network-related issues.
                    </p>
                    </li>
                    <li>
                    <p>
                        Assisted in network and systems maintenance by performing switch port 
                        patching, VLAN assignments, and basic configuration checks while tracing 
                        network cables and addressing connectivity issues through diagnostics.
                    </p>
                    </li>
                    <li>
                    <p>
                        Supported virtualization operations by helping users access Citrix-hosted 
                        virtual desktops and applications, resolving login errors, session 
                        timeouts, and printer redirection challenges within the virtual workspace.
                    </p>
                    </li>
                    <li>
                    <p>
                        Contributed to ICT asset management by tagging, tracking, and documenting 
                        all ICT equipment to maintain an accurate inventory and ensure devices 
                        remained operational and up-to-date.
                    </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FRS Africa</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://frsafrica.com/'}
                        >
                            <h4>www.frsafrica.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Developer Intern</h3>
                        <b>
                            <p>April 2023 - September 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div className="text-block">
                    <p>
                        Focused on backend data engineering and automation, this role involved 
                        developing efficient data collection and integration systems using Django, 
                        BeautifulSoup, and Scrapy to support internal applications and analytics.
                    </p>
                    <br />
                    <ul>
                        <li>
                        <p>
                            Developed and optimized web scraping scripts using Django and 
                            BeautifulSoup/Scrapy to extract and structure data from diverse online 
                            sources with high accuracy.
                        </p>
                        </li>
                        <li>
                        <p>
                            Designed and implemented RESTful APIs to seamlessly integrate scraped data 
                            into internal applications, ensuring smooth communication across services.
                        </p>
                        </li>
                        <li>
                        <p>
                            Automated end-to-end data processing pipelines to enhance efficiency and 
                            reduce manual intervention in data handling workflows.
                        </p>
                        </li>
                        <li>
                        <p>
                            Contributed to backend development efforts including database schema design, 
                            data validation, and detailed API documentation for maintainability.
                        </p>
                        </li>
                        <li>
                        <p>
                            Collaborated closely with cross-functional developers to improve data 
                            integrity, implement access controls, and strengthen security measures 
                            across all data layers.
                        </p>
                        </li>
                    </ul>
                    </div>
            </div>
        </div>    
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
