import React, {Component} from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state= {
            submitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(event){
        document.addEventListener('submit', this.fadeOut()); 

        this.setState({
            submitted:true
        });
        
        this.fadeIn();
    }

    fadeIn(){
        this.setState({
            submitted:false
        });
        
        setTimeout(function(){

            //var removeEl = document.getElementsByClassName('submitted_text');

            document.getElementById("gform").reset();
            //document.getElementById("contact").removeChild(removeEl);
            document.getElementById("gform").style.visibility ="visible";
            //document.getElementById("gform").parentNode.replaceChild(newEl, removeEl);
        },1000);
    }

    fadeOut(){
        this.addAlert(); 

        //var removeEl = document.querySelector("form");
       /* 
        var newEl=document.createElement('p');
        newEl.className = "submitted_text";
        newEl.innerHTML = 'Your submission has been processed.\n' +   
                'Thank you for your input. I will getback to you asap.';
        */
        setTimeout(function(){
            document.getElementById("gform").style.visibility ="hidden";
            //document.getElementById("contact").appendChild(newEl);
            //document.getElementById("gform").parentNode.replaceChild(newEl, removeEl);
        },2000);
    }

    addAlert(){
        var parent= document.getElementById("contact");
        var alertEl = document.createElement('div');
        var linkEl = document.createElement('a'); 

        alertEl.className = "alert alert-success" ;
        alertEl.role = "alert";
        alertEl.innerHTML = "Thank you for your consideration. \nSubmission has successfully proceeded.";

        linkEl.href="/Contact";
        linkEl.className = "alert-link";
        linkEl.innerHTML = "Return to Contact";

        alertEl.appendChild(linkEl);
        parent.appendChild(alertEl);
    }
           

//                    <input id="submit" type="submit" name="" value="submit" />

  render() {
    return (
        <div className="jumbotron">
            <div className="contact" id = "fixed-wrap" >
                <form className={this.state.submitted?'fadeIn':'fadeOut'} id="gform" name="gform" target="hidden_iframe" action="https://docs.google.com/forms/d/e/1FAIpQLSeFnfChxkMrp2a5iJAfiLDQi4LAOt7IrDc1_6OsV2XcQzaTFg/formResponse?"
                    onSubmit={this.handleSubmit}>
                    <label htmlFor="entry.2005620554">Company Name</label><br/>
                    <input type="text" name="entry.2005620554" id="entry.2005620554"/><br/>
                    <label htmlFor="entry.1045781291">Email Address</label><br/>
                    <input type="email" name="entry.1045781291" id="entry.1045781291" placeholder="name@example.com"/><br/>
                    <label htmlFor="entry.1166974658">Phone Number</label><br/>
                    <input type="tel" name="entry.1166974658" id="entry.1166974658"/><br/>
                    <label htmlFor="entry.839337160">Message</label><br/>
                    <textarea name="entry.839337160" id="entry.839337160" rows="10" cols="50"></textarea><br/>
                    <button className= "btn btn-primary" id="submit" type="submit" name="" value="submit" >Submit</button>
                </form>
                <iframe title="Unique Title"name="hidden_iframe" id="hidden_iframe" style={{display:"none"}} onLoad={()=>{if(this.props.submitted === true)return true;} }></iframe>
            </div>
            <div className={this.state.submitted?'fadeOut':'fadeIn'} style={{display:"none"}}>Your submission has been successfully processed. Thank you for your interests.</div>
        </div>
    )
  }
}
export default Contact;