import React, {useState} from 'react';
import ScatterPlot from './ScatterPlot'

export default function ScatterAxis(props) {

    // console.log(props.TopResult)
    // console.log(props.AllStats)
    // console.log(typeof(props.AllStats))

    const first = props.AllStats[0];
    const firstCopy = Object.assign({}, first);
    delete firstCopy["Name"]
    delete firstCopy["Full Name"]
    delete firstCopy["First Name"]
    delete firstCopy["Last Name"]
    delete firstCopy["Nickname"]
    delete firstCopy["Stance"]
    delete firstCopy["Weight Class"]
    // console.log(firstCopy)
    const keys = Object.keys(firstCopy);
    // console.log(keys)

    let [XAxis, setXAxis] = useState("Select X Axis")
    let [YAxis, setYAxis] = useState("Select Y Axis")


    let handleXChange = (x) => {
        setXAxis(x.target.value)
        // console.log(x.target.value)
      }

    let handleYChange = (y) => {
        setYAxis(y.target.value)
        // console.log(y.target.value)
      }
    
    // let allX = Object.values(props.AllStats.XAxis);
    // let allY = Object.values(props.AllStats.YAxis);
    
    let allX = props.AllStats.map(a => a[XAxis]);
    let allY = props.AllStats.map(a => a[YAxis]);
    let names = props.AllStats.map(a => a["Name"]);
    // console.log(typeof(allX))
    // console.log(allX)
    // console.log(allY)
    let selX = props.TopResult[`${XAxis}`];
    // console.log(selX)
    let selY = props.TopResult[`${YAxis}`];
    // console.log(selY)
    let selName = props.TopResult["Name"];
    // console.log(selName)

    return (
            <div>
              <span className="Scatter">
              <ScatterPlot allX={allX} allY={allY} names={names} selX={selX} selY={selY} selName={selName} XAxis={XAxis} YAxis={YAxis}/>
              </span>
              <span className="Yselect">
              <h5>Select Y Axis:
              <select onChange={handleYChange}>
                    <option value="Select Y Axis">Select Y Axis</option>
                    {keys.map((key) => <option value={key.value}>{key}</option>)}
                </select> 
              </h5>
              </span>
              <span className="Xselect">
              <h5>Select X Axis: 
                <select onChange={handleXChange}>
                <option value="Select X Axis">Select X Axis</option>
                    {keys.map((key) => <option value={key.value}>{key}</option>)}
                </select> 
              </h5>  
              </span>         
            </div>
        )
}
    