
import React, {Component} from 'react';

class Resume extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-lg-6">
                        <img src="http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg" alt ="my face"className="img-fluid"/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <h3>Ray Yoon</h3>
                        <p>Phone: 408-691-7625</p>
                        <p>Current Location: </p>	
                        <p>Philadelphia, PA 19128</p>
                        <a href="/Resume" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <hr className="my-4"/>
            
            <div className="container">            
	    <div className="block">
            <div className="row">
                <img className="img-left" src="http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg" alt ="..."/>
                <div className="content-heading-right">
                    <ul className ="contact">
                        <li>Phone: 408-691-7625</li>
                        <li>Current Location: </li>	
                        <li>Philadelphia, PA 19128</li>
                    </ul>
                    <hr/>
                </div>
            </div>
        </div>
        <br/>
        <div className="objective">
            <h2>Objective</h2>
            <p>Seeking an Entry Level Mobile or Web Developer position in an established organization where I can use my educational background and develop my skills.</p>
        </div>
            <hr/>
                <div className="experiences">
                    <h2>Work Experience</h2>
                    <ul> Android /Web Application Developer
                        <ul className="whereAndWhen">
                            <li className="whereAndWhen">
                                Self- Employed - Santa Clara, CA
                            </li>
                            <li className="whereAndWhen">
                                    2016 to Present
                            </li>
                        </ul>
                        <ul className="experiences">
                            <li>
                                ➢ Create and launch an Android application with a simple user interface design that embedded mathematical logics.  
                            </li>
                            <li>
                                ➢ Interconnect various Android applications such as email, music, and messenger by using intents. 
                            </li>	
                            <li>
                                ➢ Continuously adapting to newly introduced Android platforms to the application.							
                            </li>	
                            <li>
                                ➢ Proficient in various development tools such as Eclipse, Android Studio, Visual Studio Code, IntelliJ, Visual Basic, and Git . 
                            </li>	
                            <li>➢<a href= "https://play.google.com/store/apps/details?id=com.squirrel.android.collegefootprints"> Click to see application created</a>							</li>	
                        </ul>				
                    </ul>
                    <ul> Operation Manager
                        <ul className="whereAndWhen">
                            <li className="whereAndWhen">
                                SK Education Consulting Group - San Jose, CA							</li>
                            <li className="whereAndWhen">
                                2012 to 2016				
                            </li>
                        </ul>
                        <ul className="experiences">
                            <li>
                                ➢ IT support for the company by maintaining the computer systems/networks and diagnosing hardware/software faults.							
                            </li>
                            <li>
                                ➢ Analyze current structure to find inefficient procedures.							
                            </li>	
                            <li>
                                ➢ Adapt new technologies to reduce cost and improve productivity such as clouding system and salesforce.							
                            </li>	
                            <li>
                                ➢ Create Microsoft Office automated programs using Excel, Outlook, and VBA to minimize repetitive work.							
                            </li>	
                            <li>
                                ➢ Guide co-workers to quickly adapt to new technologies or system.							
                            </li>	
                        </ul>				
                    </ul>
                    <hr/>
                </div>			
                <div className="relative_skills">
                    <h2>Relative Skills</h2>
                    <ul className="relative_lists">
                        <li>•	Java (2 years)</li>
                        <li>•	Android (1 year)</li>
                        <li>•	Kotlin</li>
                        <li>•	HTML</li>
                        <li>•	CSS</li>
                        <li>•	JavaScript</li>
                        <li>•	Microsoft Office VBA</li>
                        <li>•	Windows Environment</li>
                        <li>•	Basic Networking</li>
                    </ul>
                </div>
                <hr/>
                <div className="degree">
                    <h2>Education</h2>
                    <ul > Associate of Science in Computer Science
                            <li className="whereAndWhen">
                                Self- Employed - Santa Clara, CA
                            </li>
                            <li className="whereAndWhen">
                                    2016
                            </li>
                    </ul>
                    <ul> Bachelor of Science in Biochemistry and Cell Biology
                            <li className="whereAndWhen">
                                Self- Employed - Santa Clara, CA
                            </li>
                            <li className="whereAndWhen">
                                    2011
                            </li>
                    </ul>
            </div>
            </div>
            </div>









        )
    }
}
export default Resume;