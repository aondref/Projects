import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
function Skills() {
    return (
        <div className="container px-1 mt-5">
            <div className="row gx-4">
                <div className="col-sm-3">
                    <p className="p-3 border bg-light text-center">Skills</p>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-lg-4 p-3 border bg-light">
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'><span><FaHtml5 /></span> HTML</h4>
                                </div>
                            </div>
                            <p>
                                HTML, or Hyper Text Markup Language, is the markup language used for the web. HTML is used to structure web pages and by manipulating HTML elements, you can provide style and functionality to your websites.
                            </p>
                        </div>
                        <div className="col-lg-4 p-3 border bg-light">
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'><span><FaCss3Alt /></span> CSS</h4>
                                </div>
                            </div>
                            <p>
                                CSS stands for Cascading Style Sheets. It enables you to style HTML elements in however way you want. The elements on this page for example are positioned and laid out using CSS and 1 of its frameworks. 
                            </p>
                        </div>
                        <div className="col-lg-4 p-3 border bg-light">
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'><span><SiJavascript /></span> JavaScript</h4>
                                </div>
                            </div>
                            <p>
                                JavaScript is 1 of the most popular programming languages. It enables websites to become a more dynamic experience through manipulating HTML and CSS. It also gets used on the server side.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 p-3 border bg-light">
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'><span><FaReact /></span> React</h4>
                                </div>
                            </div>
                            <p>
                                React is a JavaScript library for building user interfaces. FaceBook developed and it's amazing tool that nearly destroyed my conciousness when I started learning it. This site was made using React.
                            </p>
                        </div>
                        <div className="col-lg-4 p-3 border bg-light">
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'><span><FaBootstrap /></span> BootStrap 5</h4>
                                </div>
                            </div>
                            <p>
                                BootStrap 5 is the newest version BootStrap. It's a framework developed by Twitter. It's great for creating responsive, mobile-first websites.
                            </p>
                        </div>
                        <div className="col-lg-4 p-3 border bg-light">
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'><span><FaGithub /></span> Git/GitHub</h4>
                                </div>
                            </div>
                            <p>
                                Git is a version control system. It allows you to keep track of code changes. Github provides hosting software development and version control. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
