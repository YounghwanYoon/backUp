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

        setTimeout(()=>{        
            //document.getElementById("gform").style.opacity = '0';
            this.setState({
                submitted:false
            });
            
        }, 3000);
        
        this.fadeIn();
    }

    fadeIn(){

    }

    fadeOut(){
        console.log("Fadeout");

        var removeEl = document.querySelector("form");
        var newEl=document.createElement('p');
        newEl.innerHTML = 'Your submission has been processed.\n' +   
                'Thank you for your input. I will getback to you asap.';

        setTimeout(function(){
            document.getElementById("gform").parentNode.replaceChild(newEl, removeEl);
        },3000);
    }
           


  render() {
    return (
        <div className="mainContent" id = "mainContent" >
            <form className={this.state.submitted?'fadeIn':'fadeOut'} id="gform" name="gform" target="hidden_iframe" action="https://docs.google.com/forms/d/e/1FAIpQLSeFnfChxkMrp2a5iJAfiLDQi4LAOt7IrDc1_6OsV2XcQzaTFg/formResponse?"
                onSubmit={this.handleSubmit}>
                    <label htmlFor="entry.2005620554">Company Name</label><br/>
                    <input type="text" name="entry.2005620554" id="entry.2005620554"/><br/>
                    <label htmlFor="entry.1045781291">Email Address</label><br/>
                    <input type="email" name="entry.1045781291" id="entry.1045781291" placeholder="name@example.com"/><br/>
                    <label htmlFor="entry.1166974658">Phone</label><br/>
                    <input type="tel" name="entry.1166974658" id="entry.1166974658"/><br/>
                    <label htmlFor="entry.839337160">Message</label><br/>
                    <textarea name="entry.839337160" id="entry.839337160" rows="10" cols="50"></textarea><br/>
                    <input id="submit" type="submit" name="" value="submit" />
                    <button id="submit" type="submit" name="" value="submit" >Submit</button>
                </form>
                <iframe title="Unique Title"name="hidden_iframe" id="hidden_iframe" style={{display:"none"}} onLoad={()=>{if(this.props.submitted === true)return true;} }></iframe>
            <div className={this.state.submitted?'fadeOut':'fadeIn'} style={{display:"none"}}>Your submission has been successfully processed. Thank you for your interests.</div>
        </div>
    )
  }
}
export default Contact;