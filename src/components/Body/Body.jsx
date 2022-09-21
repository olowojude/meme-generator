import React from "react";
import { useState, useEffect } from "react";


export default function Body() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    }) 

    // fetching our data from api
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setMemeArray(data.data.memes))
    }, [])

    // state to handle our all our memes data that we get from the api
    const [memeArray, setMemeArray] = useState([])


    // then loop over the meme array above to get one image at a time
    function getMeme() {
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevData => ({
            ...prevData,
            randomImage: url
        }))
    }

    // handling the change in the inputs
    function handleChange(event) {

        const {name, value} = event.target
        setMeme(prevData => {
           return {
            ...prevData,
            [name]: value
           }
        })
    } 



    function handleSubmit(event) {
        event.preventDefault()

        console.log(meme)
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type="submit" 
                className="button"
                value="Get new meme image"
                onClick={getMeme} 
                />

                <input 
                type='text' 
                className='input' 
                name="topText" 
                onChange={handleChange} 
                placeholder="Top text" 
                value={meme.topText} /><br />
                
                <input 
                type="text" 
                className="input" 
                name="bottomText" 
                onChange={handleChange} 
                placeholder="Bottom text" 
                value={meme.bottomText}/><br />
                
            </form>
            <div className="meme-image">
                {meme.randomImage && <img src={meme.randomImage} alt="meme-image" />}
                {meme.randomImage && <h1 className="topText">{meme.topText}</h1>}
                {meme.randomImage && <h1 className="bottomText">{meme.bottomText}</h1>}
            </div>
        </div>
    )

}