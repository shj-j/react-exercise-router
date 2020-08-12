import React from 'react'
import { Link } from 'react-router-dom';

export default function About(){
    return(
        <div  className="child-page"> 
            <p>
                Company: ThoughtWorks Local<br/>
                Location: Xi'an
            </p>
            <p>
                For more information, please view our 
                <Link to="/" style={{color:'red'}}> website.</Link>
            </p>
        </div>
    );

}