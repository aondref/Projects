import React from 'react';

function Experience({ subtitle }) {
  return (
        <div className='container px-1 mb-5'>
            <div className='row gx-4'>
                <div className='col-sm-3'>
                    <p className='p-3 border bg-light text-center'>{subtitle}</p>
                </div>
                <div className='col gx-5'>
                    <div className='row'>
                        <div className='col-lg p-3 border bg-light'>
                            <div className='col'>
                                <div className='row'>
                                    <h4 className='col'>Infrastructure Engineer Apprentice</h4>
                                    <p>Bank of America | June 2021 - Current</p>
                                    <div className='col px-4'>
                                        <ul className='p-4'>
                                            <li>Shadowed network, software, & devops engineers who provided an overview of the bank’s architecture and how the engineering teams supports it.</li>
                                            <li>My Responsibilities include, providing problem determination and resolution, install and update newly developed software to assigned systems.</li>
                                            <li>Continuous Integration and Continuous Deployment (CI/CD) of applications onto different environments for Development, Quality Assurance, User Acceptance Testing and Production.</li>
                                            <li>I’m learning; documenting systems design, configuration, creating runbooks and providing better and consistent support throughout the Software Development Life Cycle (SDLC).</li>
                                            <li>I’m learning; providing system-level support of multi-user operating systems, hardware, and software tools, including installation, configuration, maintenance, and support of these systems.</li>
                                            <li>I’m learning; to translate application requirements into a thorough infrastructure design and help drive the delivery and implementation of such infrastructure.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
