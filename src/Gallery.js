import React, { Component } from "react";
import "./App.css";



class Gallery extends Component{
    render(){
        return(
            <div>
                <h1 className="header">My image gallery</h1>
                <img src={require("./image/01.jpg")}  alt="flower01" />
                <img src={require("./image/02.jpg")}  alt="flower02" />
                <img src={require("./image/03.jpg")}  alt="flower03" />
                <img src={require("./image/09.jpg")}  alt="flower04" />
                <img src={require("./image/08.jpg")}  alt="flower05" />
                <img src={require("./image/07.jpg")}  alt="flower06" />
                
            </div>
        )
    }
}
export default Gallery;
