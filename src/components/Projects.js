import { FiExternalLink } from 'react-icons/fi';


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
        title: 'CryptoLib',
        date: 'Jan 2023 - May 2023',
        image: "cryptolib.png",
        description: 'In collaboration with Atsign Company developed a Library for - RSA, AES, Encryption and Decryption, and Base64 encode and decode using Javascript.',
        link: 'https://github.com/Lahasyakr/CS682-Project4b/blob/main/README.md',
    },
    {
        id: 3,
        title: "Shared DrawingApp",
        date: 'Dec 2022 - Feb 2023',
        image: "sharedDrawing.png",
        description: 'Real Time Shared Drawing Application using React + (express + socket.io)',
        link: 'https://github.com/Lahasyakr/Shared_DrawingApp',
    }
    // Add more projects as needed
];

const Projects = () => {
    return (
        <>
            <section id="projects" className="projects-section">
                <h2>Academic Projects</h2>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <div style={{ marginRight: "0px", fontSize: "small", color:"grey" }}>{project.date}</div>
                            </div>
                            <img src={project.image} alt={project.title} />
                            <div className="project-details">
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    Visit Project <FiExternalLink />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </>
    )
};

export default Projects;