import { FiExternalLink } from 'react-icons/fi';
import './project.css';

const projects = [
    {
        id: 1,
        title: 'Collaborative Segmentation Software',
        date: 'Jan 2023 - May 2023',
        image: 'annotate-sync.gif',
        description: 'In Collaboration with Massachusetts General Hospital developed a browser-based online annotation tool for 3D medical image volumes that allow annotations to be shared between users.',
        link: 'https://github.com/oopsuwu/Collaborative-Segmentation-Software/blob/main/README.md',
    },
    {
        id: 2,
        title: "Board For Bored",
        date: 'May 2023 - Dec 2023',
        image: "Boardforbored.png",
        description: `Welcome to Board For Bored, where our passion for board games meets the joy of play! We're more than just a board game rental service; we're enthusiasts dedicated to fostering a vibrant community of gamers.`,
        link: `https://lahasyakr.github.io/BoardForBored/#/about`,
    },
    {
        id: 3,
        title: 'CryptoLib',
        date: 'Jan 2023 - May 2023',
        image: "cryptolib.png",
        description: 'In collaboration with Atsign Company developed a Library for - RSA, AES, Encryption and Decryption, and Base64 encode and decode using Javascript.',
        link: 'https://github.com/Lahasyakr/CS682-Project4b/blob/main/README.md',
    },

    {
        id: 4,
        title: "Shared DrawingApp",
        date: 'Dec 2023 - Feb 2024',
        image: "sharedDrawing.png",
        description: 'Real Time Shared Drawing Application using React + (express + socket.io)',
        link: 'https://github.com/Lahasyakr/Shared_DrawingApp',
    }
    // Add more projects as needed
];

const Projects = () => (
    <section id="projects" className="projects-section">
        <h2>Academic Projects</h2>
        <div className="projects-list">
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <div className="project-header">
                        <h3>{project.title}</h3>

                    </div>
                    <div className="project-date">{project.date}</div>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-details">
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Visit Project <FiExternalLink />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;