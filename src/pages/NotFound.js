import React, {Component} from "react";
import { Link } from "react-router-dom";





class NotFoundPage extends Component{
    render(){
        return (
            <div className="text-center mt-5">
                <h2>Ooops! Page not found!</h2>
                <p>Contact the web developer for further assistance.</p>
                <a href="/"><p>Go Back to Home</p></a>
            </div>
        )
    }
}

export default NotFoundPage;