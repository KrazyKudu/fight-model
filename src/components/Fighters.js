import FuseSearch from "./FuseSearch";
import React from "react"

export default function Fighters() {
    const [Input, setInput] = React.useState("Charles Oliveira")

    function handleSearch() {
        setInput(document.getElementById('selectedFighter').value)
    }
    console.log(Input)
    
    const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
            setInput(document.getElementById('selectedFighter').value)
          }
        }
    
    return (
        <div>
            <div>
                <p>Search fighters here</p>
            <input className="searchBar" type="text" id="selectedFighter" onKeyDown={handleKeyDown} />
            <button id="myBtn" onClick={handleSearch}>Go</button>
            </div>
        <FuseSearch Input={Input} />
        </div>
    )
}