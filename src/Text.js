import { useState, useEffect } from "react"

export const Text = () => {

    let [text,setText] = useState("");

    useEffect(() => {
        //Called when the component re-renders
        console.log("COMPONENT MOUNTED");
        
        return () => {
            console.log("COMPONENT UNMOUNTED")
        }
    },[])

    // useEffect(() => {
    //     //Called when the component re-renders
    //     console.log("COMPONENT MOUNTED");
    
    // },[text])


    return (
        <div>
            <input
            onChange={ (event) => {
                setText(text = event.target.value)
            }}
            >
            </input>

            <h1>{text}</h1>
        </div>
    )
}