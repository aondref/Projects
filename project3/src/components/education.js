import React from 'react';

function Education({ subtitle }) {
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
                                <h4 className='col'>Per Scholas</h4>
                                <p className='card-subtitle'>Focus: Software Engineering</p>
                                <p className='card-subtitle'>2020 - 2021</p>
                            </div>
                            <div className='row'>
                                <p className='mt-3 mb-2 card-subtitle'>Over 15 weeks, I completed 450+ hours of hands-on coding for class and personal projects. I learned coding principles, using pseudocode, before using HTML, JavaScript & CSS.</p>
                                <p className='card-subtitle mb-2'>After learning Front End technologies, libraries and frameworks, the course moved on to design principles before introducing APIs & and databases.</p>
                                <p>From here, I moved on to the backend. I Learned Java and its popular framework and after learning how to deploy websites and apps to the web, my full-stack skill set was rounded out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education;
