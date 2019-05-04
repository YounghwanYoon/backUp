import React, { Component } from 'react';
import hstyle from './header_style.css';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
    <header className={hstyle}>
        <NavBar></NavBar>
    </header>
    )
  }
}
export default Header;

/*
      <footer className= "mainFooter" style={{alignSelf: 'flex-end'}}>
        <p>Click to <a id="email" href="mailto:ray.yoon87@gmail.com">Contact</a></p>
     </footer>
*/ 



/*
import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

class Header extends Component{
    return(){
        return(
            <div className="container-fluid">
                <a href= "/"><Logo></Logo></a>
                <span className="Title">Ray's ResumeSite</span>

                <NavBar></NavBar>
            </div>
        )
    }
}

export default Header;
*/