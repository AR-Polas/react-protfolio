import { useState } from "react";
import {AboutData} from '../AboutData'
const About = () => {
    const [activeClass,setActiveClass] = useState(0)
    console.log(activeClass)
    const [data,setData] = useState('comfortable')
    const filterData = AboutData.filter(info => info.category === data)

    return (
     <div className="about" id="about">
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="about__img">
                        <img src="https://i.ibb.co/RQVSdxC/Frame-Art-2021213114234813.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-7">
                    <h1>ABOUT ME</h1>
                    <p>I'm Anisur Rahman Polas, I have been working with react for about 1 year. I have created many projects with react. The most challenging project for me is the world news project. In addition to reacting to this project, express,mongoose that is frontend and backed and database have been used in this project. I always love to create single page application with react.</p>
                    <div className="about-info">
                        <a onClick={() => {setData('comfortable'); setActiveClass(1)}} className={`${activeClass === 1 ? 'active' : ''}`}>Comfortable_Skills</a>

                        <a onClick={() => {setData('familiar'); setActiveClass(2)}} className={`${activeClass === 2 ? 'active' : ''}`}>Familiar_Skills</a>

                        <a onClick={() => {setData('tools');setActiveClass(3)}} className={`${activeClass === 3 ? 'active' : ''}`}>Tools</a>

                        <a onClick={() => {setData('education');setActiveClass(4)}} className={`${activeClass === 4 ? 'active' : ''}`}>Education</a>
                    </div>
                    <div className="">
                        {filterData.map(info => {
                            return <h6>{info.text}</h6>
                        })}
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default About;