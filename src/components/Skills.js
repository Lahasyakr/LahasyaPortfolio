const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJs',
    'Node.js',
    'Git',
    'Responsive Web Design',
];

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h2>GitHub Top Languages</h2>
                <div className="github-stats-card">
                    <iframe
                        width="100%"
                        height="300"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=lahasyakr&layout=compact"
                        frameBorder="0"
                    ></iframe>
                </div>
            </section>
        </>
    )
};

export default Skills;