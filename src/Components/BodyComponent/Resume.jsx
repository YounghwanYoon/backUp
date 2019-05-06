
import React, {Component} from 'react';

function Experiences(){
    return(
        <div className="work_exp">
            <div className="container-fluid padding">
                
            <div className="row padding">
                    <div className="col-md-12 col-lg-6" id="left">
                        <div className="title">
                            <h6 className="job_title">Java/Android Developer</h6>
                            <h6 className="company_name">Self-Employed-Philadelphia, PA</h6>
                            <h6 className="working_period">2016 to Present</h6>
                        </div>                    
                    </div>
                    <div className="col-md-12 col-lg-6" id="right">
                        <div className="details">
                            <ul className="list">
                                <li>Create and launch an Android application with a simple user interface design
                                     that embedded mathematical logics.</li>
                                <li>Interconnect various Android applications such as email, music, and messenger by using intents.</li>
                                <li>Continuously adapting to newly introduced Android platforms to the application.</li>
                                <li>Proficient in various development tools such as Eclipse, Android Studio, Visual Studio Code, IntelliJ, Visual Basic, and Git .</li>
                                <li>Experiences with followings:</li>
                                <ul>    
                                    <li>Adding Google AdMob advertisements to android applications.
                                    </li>
                                    <li>Adapting Proguard to obfuscating code to prevent reverse engineering. 
                                    </li>
                                    <li>Creating data/SQLite relate application template with solely using Kotlin.
                                    </li>
                                    <li>
                                        Making responsive webpage with solely using BootStrap.
                                    </li>
                                </ul>	
                                <li>Published android application links:  </li> 
                                    <ul>
                                        <li>
                                            <a href="https://play.google.com/store/apps/details?id=com.ray.android.srt_media_player">
                                                https://play.google.com/store/apps/details?id=com.ray.android.srt_media_player 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://play.google.com/store/apps/details?id=com.squirrel.android.collegefootprints">
                                                https://play.google.com/store/apps/details?id=com.squirrel.android.collegefootprints 
                                            </a>
                                        </li>
                                    </ul>
                                <li>Unpublished skilled related applications links: </li>
                                    <ul>
                                        <li>
                                            <a>
 
                                            •	https://gitlab.com/CodeStory/Quake-Report
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            •	https://github.com/YounghwanYoon/React_ResumeSite 

                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            •	https://github.com/YounghwanYoon/Miwok_Udacity  
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            •	https://github.com/YounghwanYoon/Soonami-http- 

                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            •	https://github.com/YounghwanYoon/SQLITE 

                                            </a>
                                        </li>
                                        <li>
                                            <a>

                                            •	https://github.com/YounghwanYoon/Responsive_Web_with_Bootstrap
                                            </a>
                                        </li>
                                    </ul>
                                <li>Experienced with developing auto file and submission programs using Visual Basic. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row padding">
                    <div className="col-md-12 col-lg-6" id="left">
                        <div className="title">
                            <h6 className="job_title">Operation Manager</h6>
                            <h6 className="company_name">SK Education Consulting Group-San Jose, CA</h6>
                            <h6 className="working_period">2012 to 2016</h6>
                        </div>                    
                    </div>
                    <div className="col-md-12 col-lg-6" id="right">
                        <div className="details">
                            <ul className="list">
                                <li>IT support for the company by maintaining the computer systems/networks 
                                    and diagnosing hardware/software faults.</li>
                                <li>Analyze current structure to find and remove or update inefficient procedures.</li>
                                <li>Adapt new technologies to reduce cost and improve productivity such as clouding system 
                                    and salesforce.</li>
                                <li>Create Microsoft Office automated programs using Excel, Outlook, and VBA to minimize repetitive work.</li>
                                <li>Train new employees to quickly adapt to new technologies and system.</li>
                                <li>Experienced with developing auto file and submission programs using Visual Basic. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Objective(){
    return(
        <p className= "objective">
            An Entry to Mid-Level Software Developer is currently seeking for a position from 
            an established organization in the great city of Philadelphia.   
            Self-motivated,enthusiastic, and professional Java Programmer with 3 years of experiences
            in designing and developing web and android based application using Java and Kotlin platform.
            Able to work well independently or as part of a professional computer program development team.
        </p>
    );
}

function Skills(){
    return(
        <div className="skills">
            <ul className="skill-rating">
                <div className="progress">
                    <div className="progress-bar bg-success" id="Java" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        Java
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" id="Kotlin" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        Kotlin             
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-danger" id="SQLite"role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        SQLite
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-warning" id="Web-related" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        JavaScript(ReactJS)/Html(Bootstrap)/CSS or SCSS
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-secondary" id="Others" role="progressbar" aria-valuenow="125" aria-valuemin="0" aria-valuemax="100">
                        Others-Networking/Windows Systems/Virtual Basic/Git
                    </div>
                </div>
            </ul>
        </div>
    );
}

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <div className="container-fluid padding">
                <div className="jumbotron">
                    <div className="hexagon">
                        <div className="hexagon-inside">
                            <div className="hexagon-image"> 
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid padding" id="personal-info" >
                        <div className ="row padding">
                            <div className= "col-md-12 col-lg-6" id="left">
                                <h5 id="personal-title">Personal Details</h5>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">Name:</p></div>
                                    <div className="col px-md-5"><p className="info">Ray Yoon</p></div>
                                </div>
                                <hr className="light"/>

                                <div className="row">
                                    <div className="col px-md-5"><p className="title">D.O.B:</p></div>   
                                    <div className="col px-md-5"><p className="info">September 13th, 1987</p></div>   
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">Web:</p></div>
                                    <div className="col px-md-5"><p className="info">www.thiswebsite.com</p></div>
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">Contact:</p></div>
                                    <div className="col px-md-5"><p className="info">408-691-7625</p></div>
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">Email:</p></div>
                                    <div className="col px-md-5"><p className="info">ray.yoon87@gmail.com</p></div>
                                </div>
                                <hr className="light"/>
                            </div>
                            <div className= "col-md-12 col-lg-6" id="right">
                                 <h5 id="personal-title">Education</h5>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">Degree:</p></div>
                                    <div className="col px-md-5"><p className="info">A.S. of Computer Science</p></div>
                                </div>
                                <hr className="light"/>

                                <div className="row">
                                    <div className="col px-md-5"><p className="title">From:</p></div>   
                                    <div className="col px-md-5"><p className="info">Foothill College</p></div>   
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">When Complete</p></div>
                                    <div className="col px-md-5"><p className="info">June 30th, 2016</p></div>
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">Degree:</p></div>
                                    <div className="col px-md-5"><p className="info">B.S. of Biochemistry/Cell-Biology</p></div>
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">From </p></div>
                                    <div className="col px-md-5"><p className="info">University of California, San Diego</p></div>
                                </div>
                                <hr className="light"/>
                                <div className="row">
                                    <div className="col px-md-5"><p className="title">When Complete</p></div>
                                    <div className="col px-md-5"><p className="info">December 30th, 2011</p></div>
                                </div>
                                <hr className="light"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="Experiences">
                        <h5>Work Experiences</h5>
                        <hr className="light"/>
                        <Experiences/>
                    </div>
                    <div className="Objective">
                        <div className="row padding">
                            <div className="col-md-12 col-lg-6" id="left">
                                <h5>Objective</h5>
                                <hr className="light"/>
                                <Objective></Objective>
                            </div>

                            <div className="col-md-12 col-lg-6" id="right">
                                <h5>Skills</h5>
                                <hr className="light"/>
                                <Skills/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
export default Resume;

