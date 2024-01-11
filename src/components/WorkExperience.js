import { SiInfosys } from "react-icons/si";
import { MdWorkHistory } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

const projectlink = <a href="#projects">Projects</a>;
const workExperience = [
    {
        company: 'University of Massachusetts Boston',
        duration: 'Sep 2022 - Dec 2023',
        position: 'Graduate Student',
        location: "Boston, MA",
        description: "As a Computer Science (CS) graduate student, I embarked on a journey of advanced learning and research within the field. During this period, I engaged in various academic and practical experiences. These opportunities not only expanded my knowledge but also honed my skills,enabling me to make meaningful contributions to numerous impactful projects.",
        logo: FaUserGraduate, // Replace with the actual logo file name
        /*  projects: [
             {
                 projectName: 'Academic Projects',
                 description: 'Please click here' + projectlink,
             },
         ], */
    },
    {
        company: 'Marlabs Innovations Pvt. Ltd',
        location: 'Bangalore, India',
        position: 'Senior Software Engineer',
        duration: 'Oct 2019 - March 2022',
        description: 'As a Senior Software Engineer at Marlabs Innovations Pvt. Ltd from October 2019 to March 2022, I played a pivotal role in the success of projects for our esteemed client, the Merck Group. My responsibilities encompassed a wide range of key areas, including independently researching and prototyping project components, crafting responsive web interfaces using React, Redux, and TypeScript, maintaining exceptional code quality with over 90% test coverage and rigorous testing, and contributing to team growth through upskilling sessions, particularly focusing on React hooks. Moreover, I exhibited strong leadership qualities by leading project planning, problem-solving, and decision-making processes, which significantly contributed to the seamless development and timely delivery of projects.:',
        logo: MdWorkHistory, // Replace with the actual logo file name
        projects: [
            {
                projectName: 'MYSITE',
                technology: 'React Js, Liquid Design,REST API, Jest, Enzymes, PostMan, JSDoc, Visual Studio 2008',
                description: 'Web app developing with react and redux. It\'s a tool for the capturing of site observations, along with zone details and all necessary info.',
                role: 'Developed responsive UI for web app using React Js using TypeScript for better quality and involved myself with unit testing of the UI code.',
            },
            {
                projectName: 'Sustainable Business Value',
                technology: 'React Js, Liquid Design,REST API, Jest, Enzymes, PostMan, JSDoc, Visual Studio 2008',
                description: 'SBV- Sustainable business value(web app using react with typescript) This tool supports you in computing the SBV(SBV is a collection of measures and assessments—not a single metric, and has a positive correlation with Total Shareholder Return)',
                role: 'Built a responsive UI for web app using React Js using TypeScript for better quality and involved myself with unit testing of the UI code. Published a SonarQube report with good code coverage and minimal duplication of code and with zero code smells.',
            },
            {
                projectName: 'On Demand Knowledge',
                technology: 'React Js, Liquid Design,REST API, Jest, Enzymes, PostMan, JSDoc, Visual Studio 2008',
                description: 'ODK- Learning platform (web app using React (type script)) Which maintains the assignment and allocation of learning material.',
                role: 'Handled the team with good planning and right decision for the development. Developed responsive UI for web app using React Js using TypeScript for better quality and involved myself with unit testing of the UI code. Published a SonarQube report with good code coverage and minimal duplication of code and with zero code smells.',
            },
        ],
    },
    {
        company: 'Infosys Limited',
        duration: 'May 2016 - Oct 2019',
        position: 'Senior System Engneer',
        location: "Bangalore",
        description: 'During my tenure at Infosys Limited from May 2016 to October 2019,  I made significant contributions in various aspects of project success. I started by gathering project requirements, ensuring alignment with the clients needs. Furthermore, I played a crucial role in creating visually appealing and user-friendly interfaces, seamlessly integrating complex UX designs. In response to project-specific needs, I took the initiative to enhance my React skills. My unwavering commitment to quality was evident as I utilized various technologies and frameworks to guarantee the development of top-notch user interfaces, improving data management, and enhancing the overall user experience.',
        logo: SiInfosys, // Replace with the actual logo file name
        projects: [
            {
                projectName: 'CADRE Application',
                technology: 'React Js, CSS, HTML5, Bootstrap, SQLServer 2016,NodeJs, Ant-design, Visual Studio 2008',
                description: 'CADRE consists of a web app for company managers to create, edit, and monitor trips for employees and candidates. It includes a dashboard to view all created trips. It also includes a mobile app to help employees and candidates monitor their trips and settle their expenses.',
                role: 'Developed entire responsive UI for web app using React Js, which included complex UX design. Consumed web services through AJAX calls to display results in the required format and used React libraries to enhance the UI.',
            },
            {
                projectName: 'Agile Integration Broker',
                technology: 'AngularJs, SQL, NodeJs, ',
                description: 'project involved the development of an internal tool to manage deployment requests and defect tracking.',
                role: 'Contributed to an internal tool for deployment requests and defect tracking using AngularJs and SQL Server, reducing manual deployment tracker time by more than 50%.',
            }
        ],
    },
    // Add more work experience objects as needed
];

const WorkExperience = () => {
    return (
        <>
            <section id="work-experience" className="work-experience-section">
                <h2>Work Experience</h2>
                <div className="work-experience-list">
                    <div className="work-timeline"></div>
                    {workExperience.map((experience, index) => (

                        <div key={index} >
                            <div className='work-experience-logo '><div className="work-logo">
                                <experience.logo size={'2em'} />
                                {/* <img src={experience.logo} alt={experience.company} /> */}
                            </div></div>
                            <div className="work-experience">
                                <div className="work-timeline-content">
                                    <h3>{experience.company} &nbsp; <small style={{ color: "grey" }}>{experience.duration}</small></h3>
                                    <h4>{experience.position}</h4>
                                    <p>{experience.location}</p>

                                    <p className="exp-desc">{experience.description}</p>

                                    <h4 className="work-project-nameProj">Projects :</h4>
                                    {experience.projects?.map((project, projectIndex) => (
                                        <ol key={projectIndex} className="work-project">
                                            <h4 className="work-project-name">{project.projectName}</h4>
                                            <p className="work-project-description">
                                                <strong style={{ color: "grey" }}>Description:</strong> {project.description}
                                            </p>
                                            <p className="work-project-role">
                                                <strong style={{ color: "grey" }}>Role:</strong> {project.role}
                                            </p>
                                            <p className="work-project-technology">
                                                <strong style={{ color: "grey" }}>Technology/Tools:</strong> {project.technology}
                                            </p>
                                        </ol>
                                    ))}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
};

export default WorkExperience;