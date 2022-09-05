import React from "react";
import "./body.scss";
import { useState } from "react";

export default function Body() {
    const [formData, setFormData] = useState({
        topText: "",
        bottomText: "",
    })

    function handleChange(event) {

        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
           return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
           }
        })
    } 

    function handleSubmit(event) {
        event.preventDefault()

        console.log(formData)
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type='text' 
                className='input' 
                name="topText" 
                onChange={handleChange} 
                placeholder="Top text" 
                value={formData.topText} /><br />
                
                <input 
                type="text" 
                className="input" 
                name="bottomText" 
                onChange={handleChange} 
                placeholder="Bottom text" 
                value={formData.bottomText}/><br />
                
                
                <button className="button">Get new meme image</button>
            </form>
            <div className="meme-image"></div>
        </div>
    )

}