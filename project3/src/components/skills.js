import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
function Skills({ subtitle }) {
    const skillsData = [
        {
            id: 1,
            title: "HTML",
            icon: <FaHtml5 />,
            content: "HTML, or Hyper Text Markup Language, is the markup language used for the web. HTML is used to structure web pages and by manipulating HTML elements, you can provide style and functionality to your websites."
        },
        {
            id: 2,
            title: "CSS",
            icon: <FaCss3Alt />,
            content: "CSS stands for Cascading Style Sheets. It enables you to style HTML elements in however way you want. The elements on this page for example are positioned and laid out using CSS and 1 of its frameworks."
        },
        {
            id: 3,
            title: "JavaScript",
            icon: <SiJavascript />,
            content: "JavaScript is 1 of the most popular programming languages. It enables websites to become a more dynamic experience through manipulating HTML and CSS. It also gets used on the server side."
        },
        {
            id: 4,
            title: "React",
            icon: <FaReact />,
            content: "React is a JavaScript library for building user interfaces. FaceBook developed and it's amazing tool that nearly destroyed my conciousness when I started learning it. This site was made using React."
        },
        {
            id: 5,
            title: "BootStrap 5",
            icon: <FaBootstrap />,
            content: "BootStrap 5 is the newest version BootStrap. It's a framework developed by Twitter. It's great for creating responsive, mobile-first websites."
        },
        {
            id: 6,
            title: "Git/GitHub",
            icon: <FaGithub />,
            content: "Git is a version control system. It allows you to keep track of code changes. Github provides hosting software development and version control."
        }
    ]
    return (
        <div className="container px-1 mb-5">
            <div className="row gx-4">
                <div className="col-sm-3">
                    <p className="p-3 border bg-light text-center">{subtitle}</p>
                </div>
                <div className="col gx-5">
                    <div className="row">
                        {
                            skillsData.map((skill) => (
                                <div className='col-lg-4 p-3 border bg-light' key={skill.id}>
                                    <div className='col'>
                                        <div className='row'>
                                            <h4 className='col'><span>{skill.icon}</span> {skill.title}</h4>
                                        </div>
                                    </div>
                                    <p>
                                        {skill.content}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
