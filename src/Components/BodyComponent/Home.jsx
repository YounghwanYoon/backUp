import React, { Component } from 'react';
import first_slide from '../../img/media_player.png';
import second_slide from '../../img/squirrel_college.png';
import third_slide from '../../img/gits.png';
import custom from '../../style/custom.css';
import Resume from './Resume';
import Contact from './Contact';


/*
          <p>I am a person who saw the power of a computer science while working for my previous company, called SK Education Consulting Group.
            The company was a start up and then, it grow to medium size company within 4 years. During so, a number of clients/data increased dramatically which must handled
            by limited people. To deal with it, I first made guidances to organize data and files. Then, I started looking at alternative way of doing the work  
            and that was Virtual Basic, aka VBA, from exel. I self-taught basic of VBA and made an auto document filing and submitting program. 
          </p>
          <p>
            After many try and error, it was working! It handled thousands of data by itself. 
            Since then, I could not resist to pursue my education toward a computer science. So, I decided to go back to college. 
          </p>
          <p>
            In year of 2016, I graduate/received my second degree as an A.S. degree in computer science from FootHill College. From the college, 
            I learned basic idea about programming languages such as Java, JavaScript, CSS, HTML. After graduation, I decided to learn and make android application. 
            It is not because I am into android but just because I happended to have android smart phones. Above are my published and unpulbished projects.
          </p>
*/

class Objective extends React.Component{
  render(){
    return (
      <div className="objective">
        <div className= "jumbotron">
          <h6 className= "display-4">About Me</h6>
          <p>
          In 2016, I graduated with an A.S. degree in computer science from FootHill College. During this time, I developed programming skills in Java, JavaScript, CSS, and HTML. 
          After graduation, I learned to build android applications. 
          I welcome challenges of exciting projects that require me to work outside my comfort and knowledge set, as learning new languages and development techniques are important to me. 
          </p>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className={custom}>
        <div id="slides" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
              <li data-target="#slides" data-slide-to="0" className="active"></li>
              <li data-target="#slides" data-slide-to="1"></li>
              <li data-target="#slides" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner">
              <div className="carousel-item active" id="img-center">
                <img src={first_slide} alt= "srt_media_player"/>
                <div className="carousel-caption">
                    <button type="button" className="btn btn-outline-primary btn-lg">
                      <a href="https://play.google.com/store/apps/details?id=com.ray.android.srt_media_player">
                        Check It Out
                      </a>
                    </button>
                </div>
              </div>
              <div className="carousel-item">
                  <img src={second_slide} alt="squirrel_college"/>
                  <div className="carousel-caption">
                    <button type="button" className="btn btn-outline-primary btn-lg">
                      <a href="https://play.google.com/store/apps/details?id=com.squirrel.android.collegefootprints">
                        Check It Out
                      </a>
                    </button>
                  </div>
              </div>
              <div className="carousel-item">
                <img className= "img-fluid" src={third_slide} alt="git_slide"/>  
                <div className="carousel-caption">
                  <button type="button" className="btn btn-outline-primary btn-lg">
                    <a href="https://github.com/YounghwanYoon?tab=repositories">
                      GitHub
                    </a>
                  </button>
                  <button type="button" className="btn btn-outline-primary btn-lg">
                    <a href="https://gitlab.com/CodeStory">
                      GitLap
                    </a>
                  </button>
                </div>
              </div>
          </div>
        </div>
        <Objective/>
        <br/>
        <Resume/>
        <br/>
        <Contact/>
      </div>
    )
  }
}
export default Home;