import React, { Component, useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Table, Thread, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const AccordionSection = styled.div`
  display: flexbox;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;
const Container = styled.div`
 
  top: 30%;
  `;
const Wrap = styled.div`
  background: lightgray; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer
  
  h1{
    padding: 2rem;
    font-size: 2rem;
  }`;
const Dropdown = styled.div`
`;

export default function ModelResults() {


  
    const resultString = require('../data/model_results.json');
    const resultData = JSON.parse(resultString)
    const resultArr = resultData.map(({_id, ...rest}) => {
        return rest;
    });
    console.log(resultArr)
   
    function groupByKey(array, key) {
        return array
          .reduce((hash, obj) => {
            if(obj[key] === undefined) return hash; 
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
          }, {})
     }

    const groupedObj = groupByKey(resultArr, 'event')
    console.log(groupedObj)

    // const reversedKeys = Object.keys(groupedArr).reverse();
    
    // let reversedObj = reversedKeys.forEach(key => {
    //   let {key: groupedArr[key]} // 👉️ c three, b two, a one
    // });
    // console.log(reversedObj)

    // const arrayReverseObj = (obj) => {
    //   let newArray = []
    
    //   Object.keys(obj)
    //     .sort()
    //     .reverse()
    //     .forEach(key => {
    //       console.log(key)
    //       newArray.push( {
    //       'key':key, 
    //       'id':obj[key].id
    //       })
    //     })
    
    //   console.log(newArray)
    //   return newArray  
    // }
    
    // let newArray = arrayReverseObj(groupedArr)

    const newArray = Object.entries(groupedObj);
    console.log(newArray)

    const revArray = newArray.reverse()
    console.log(revArray)
    
    // const arrayReverseObj =  => Object.keys(groupedArr).sort().reverse().map(key=> ({ ...groupedArr[key], key }) );
    // console.log(arrayReverseObj)

    const [Clicked, setClicked] = useState(false)

    const toggle = index => {
        if(Clicked === index) {
            return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <span className="PastAccordion">
    <IconContext.Provider value={{color: 'green', size: '25px'}}>
    <AccordionSection>
      <Container>
        {revArray.map((item, index) => {
          return (
            <>
            
            <Wrap onClick={() => toggle(index)} key={index}>
            <h1>{item[0]}</h1>
            <span>{Clicked === index ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {Clicked === index ? (
            <Dropdown>

        <table className='resultTable'>
        <thead>
          <tr>
            <th>Red Name</th>
            <th>Blue Name</th>
            <th>Actual Winner</th>
            <th>Actual Method</th>
            <th>Highest % Winner</th>
            <th>Highest % Method</th>
            <th>Red Total %</th>
            <th>Blue Total %</th>
            <th>Red Decision %</th>
            <th>Red (T)KO %</th>
            <th>Red Submission %</th>
            <th>Blue Decision %</th>
            <th>Blue (T)KO %</th>
            <th>Blue Submission %</th>
          </tr>
        </thead>
        <tbody>
          {revArray[index][1].map((item) => {
            return (
              <tr key={item.fight_id}>
                <td>{ item.red_name }</td>
                <td>{ item.blue_name }</td>
                <td>{ item.actual_winner }</td>
                <td>{ item.actual_method }</td>
                <td>{ item.win_pred }</td>
                <td>{ item.win_method }</td>
                <td>{ Math.round(item.red_total_pct * 100) }</td>
                <td>{ Math.round(item.blue_total_pct * 100) }</td>
                <td>{ Math.round(item.red_dec_pct * 100) }</td>
                <td>{ Math.round(item.red_ko_pct * 100) }</td>
                <td>{ Math.round(item.red_sub_pct * 100) }</td>
                <td>{ Math.round(item.blue_dec_pct * 100) }</td>
                <td>{ Math.round(item.blue_ko_pct * 100) }</td>
                <td>{ Math.round(item.blue_sub_pct * 100) }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
            {/* <p>    
              
              {Object.entries(item).map(([key, value]) =>
             <li>{key} : {value}</li>)}</p> */}
             </Dropdown>
             ) : null}
            </>
          )
        })}
      </Container>
    </AccordionSection>
    </IconContext.Provider>
    </span>
  )
}