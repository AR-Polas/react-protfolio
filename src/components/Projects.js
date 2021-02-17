import { Fragment } from "react";
import { ProjectData } from "../ProjectsData";
import LanguageIcon from '@material-ui/icons/Language';

const Projects = () => {
    return (
        <div className="container mb-5 project__container" id="project">
            <div className="project-info text-center">
                <h1>My Project</h1>
                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
            </div>
            <div className="project-details mt-5">

                <div className="row">
                    {
                        ProjectData.map(data => {
                            return <Fragment key={data.id}>  <div className="col-md-4 col-sm-6 col-10 mx-auto  mb-3">
                                <div className="image-container"> <img src={data.img} className="w-100" alt="not found" />
                                    <div className="after">
                                        <div className="after-info">
                                            <p>{data.name}</p>
                                            <div className="project-link">
                                               <a href={data.gitHub}> <span><i class="fab fa-github"></i></span></a>
                                                <a href={data.liveSite}><span> <LanguageIcon className="svg_icons" /> </span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Fragment>
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Projects;