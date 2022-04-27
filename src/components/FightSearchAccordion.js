import React, { Component, useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { DriveEtaOutlined } from '@mui/icons-material';


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;
const Container = styled.div`
  position: absolute;
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

export default function FightSearchAccordion(props) {

  
  const newArr = props.filteredPosts.map(({_id, ...rest}) => {
    return rest;
  });
  console.log(newArr)
  
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
        {newArr.map((item, index) => {
          return (
            <>
            
            <Wrap onClick={() => toggle(index)} key={index}>
            <h1>{item.fight_id}</h1>
            <span>{Clicked === index ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {Clicked === index ? (
            <Dropdown>
              <div>
                <span className='fightStats'>
                  <li>Winner: {item.winner}</li>
                  <li>Method: {item.method}</li>
                  <li>Weight Class: {item.weight_class}</li>
                  <li>Stance Matchup: {item.stance_matchup}</li>
                  <li>Rounds: {item.rounds}</li>
                  <li>Title Fight: {item.title_fight}</li>
                  <li>Round End: {item.red_RndEnd}</li>
                  <li>Total Fight Seconds: {item.red_FightSec}</li>
                  <li>Event: {item.event}</li>
                  <li>Date: {item.date}</li>
                  <li>Location: {item.location}</li>
                </span>
                <div className='colorStats'>
                  <div className='redStats'>
                    <li>Red Name: {item.red_name}</li>
                    <li>Red Age: {item.red_age}</li>
                    <li>Red Stance: {item.red_stance}</li>
                    <li>Red Height: {item.red_heightIN}</li>
                    <li>Red Reach: {item.red_reachIN}</li>
                    <li>Red KDs: {item.red_KDs}</li>
                    <li>Red Significant Strikes Landed: {item.red_SigStksLnd}</li>
                    <li>Red Significant Strikes Attempted: {item.red_SigStksAtt}</li>
                    <li>Red Significant Strike Accuracy: {(item.red_SigStksLnd) / (item.red_SigStksAtt) * 100} %</li>
                    <li>Red Total Strikes Landed: {item.red_TotStksLnd}</li>
                    <li>Red Total Strikes Attempted: {item.red_TotStksAtt}</li>
                    <li>Red Total Strike Accuracy: {(item.red_TotstkPct) * 100} %</li>
                    <li>Red Distance Strikes Landed: {item.red_SigStkDistLnd}</li>
                    <li>Red Distance Strikes Attempted: {item.red_SigStkDistAtt}</li>
                    <li>Red Distance Strike Accuracy: {(item.red_SigStkDistLnd / item.red_SigStkDistAtt) * 100} %</li>
                    <li>Red Clinch Strikes Landed: {item.red_SigStkClchLnd}</li>
                    <li>Red Clinch Strikes Attempted: {item.red_SigStkClchAtt}</li>
                    <li>Red Clinch Strike Accuracy: {(item.red_SigStkClchLnd / item.red_SigStkClchAtt) * 100} %</li>
                    <li>Red Ground Strikes Landed: {item.red_SigStkGndLnd}</li>
                    <li>Red Ground Strikes Attempted: {item.red_SigStkGndAtt}</li>
                    <li>Red Ground Strike Accuracy: {(item.red_SigStkGndLnd / item.red_SigStkGndAtt) * 100} %</li>
                    <li>Red Head Strikes Landed: {item.red_SigStkHeadLnd}</li>
                    <li>Red Head Strikes Attempted: {item.red_SigStkHeadAtt}</li>
                    <li>Red Head Strike Accuracy: {(item.red_SigStkHeadLnd / item.red_SigStkHeadAtt) * 100} %</li>
                    <li>Red Body Strikes Landed: {item.red_SigStkBodyLnd}</li>
                    <li>Red Body Strikes Attempted: {item.red_SigStkBodyAtt}</li>
                    <li>Red Body Strike Accuracy: {(item.red_SigStkBodyLnd / item.red_SigStkBodyAtt) * 100} %</li>
                    <li>Red Leg Strikes Landed: {item.red_SigStkLegLnd}</li>
                    <li>Red Leg Strikes Attempted: {item.red_SigStkLegAtt}</li>
                    <li>Red Leg Strike Accuracy: {(item.red_SigStkLegLnd / item.red_SigStkLegAtt) * 100} %</li>
                    <li>Red TDs Landed: {item.red_TDsLnd}</li>
                    <li>Red TDs Attempted: {item.red_TDsAtt}</li>
                    <li>Red TD Accuracy: {item.red_TDPct * 100} %</li>
                    <li>Red TD Defense: {(1 - (item.red_TakenDown / item.red_TDsSeen)) * 100} %</li>
                    <li>Red Submission Attempts: {item.red_SubAtts}</li>
                    <li>Red Submissions Escaped: {item.red_SubEsc}</li>
                    <li>Red Control Seconds: {item.red_CtrlSec}</li>
                    <li>Red Reversals: {item.red_Reversals}</li>
                    <li>Red Reversed: {item.blue_Reversals}</li>
                  </div>
                  <div className='blueStats'>
                    <li>Blue Name: {item.blue_name}</li>
                    <li>Blue Age: {item.blue_age}</li>
                    <li>Blue Stance: {item.blue_stance}</li>
                    <li>Blue Height: {item.blue_heightIN}</li>
                    <li>Blue Reach: {item.blue_reachIN}</li>
                    <li>Blue KDs: {item.blue_KDs}</li>
                    <li>Blue Significant Strikes Landed: {item.blue_SigStksLnd}</li>
                    <li>Blue Significant Strikes Attempted: {item.blue_SigStksAtt}</li>
                    <li>Blue Significant Strike Accuracy: {(item.blue_SigStksLnd) / (item.blue_SigStksAtt) * 100} %</li>
                    <li>Blue Total Strikes Landed: {item.blue_TotStksLnd}</li>
                    <li>Blue Total Strikes Attempted: {item.blue_TotStksAtt}</li>
                    <li>Blue Total Strike Accuracy: {(item.blue_TotstkPct) * 100} %</li>
                    <li>Blue Distance Strikes Landed: {item.blue_SigStkDistLnd}</li>
                    <li>Blue Distance Strikes Attempted: {item.blue_SigStkDistAtt}</li>
                    <li>Blue Distance Strike Accuracy: {(item.blue_SigStkDistLnd / item.blue_SigStkDistAtt) * 100} %</li>
                    <li>Blue Clinch Strikes Landed: {item.blue_SigStkClchLnd}</li>
                    <li>Blue Clinch Strikes Attempted: {item.blue_SigStkClchAtt}</li>
                    <li>Blue Clinch Strike Accuracy: {(item.blue_SigStkClchLnd / item.blue_SigStkClchAtt) * 100} %</li>
                    <li>Blue Ground Strikes Landed: {item.blue_SigStkGndLnd}</li>
                    <li>Blue Ground Strikes Attempted: {item.blue_SigStkGndAtt}</li>
                    <li>Blue Ground Strike Accuracy: {(item.blue_SigStkGndLnd / item.blue_SigStkGndAtt) * 100} %</li>
                    <li>Blue Head Strikes Landed: {item.blue_SigStkHeadLnd}</li>
                    <li>Blue Head Strikes Attempted: {item.blue_SigStkHeadAtt}</li>
                    <li>Blue Head Strike Accuracy: {(item.blue_SigStkHeadLnd / item.blue_SigStkHeadAtt) * 100} %</li>
                    <li>Blue Body Strikes Landed: {item.blue_SigStkBodyLnd}</li>
                    <li>Blue Body Strikes Attempted: {item.blue_SigStkBodyAtt}</li>
                    <li>Blue Body Strike Accuracy: {(item.blue_SigStkBodyLnd / item.blue_SigStkBodyAtt) * 100} %</li>
                    <li>Blue Leg Strikes Landed: {item.blue_SigStkLegLnd}</li>
                    <li>Blue Leg Strikes Attempted: {item.blue_SigStkLegAtt}</li>
                    <li>Blue Leg Strike Accuracy: {(item.blue_SigStkLegLnd / item.blue_SigStkLegAtt) * 100} %</li>
                    <li>Blue TDs Landed: {item.blue_TDsLnd}</li>
                    <li>Blue TDs Attempted: {item.blue_TDsAtt}</li>
                    <li>Blue TD Accuracy: {item.blue_TDPct * 100} %</li>
                    <li>Blue TD Defense: {(1 - (item.blue_TakenDown / item.blue_TDsSeen)) * 100} %</li>
                    <li>Blue Submission Attempts: {item.blue_SubAtts}</li>
                    <li>Blue Submissions Escaped: {item.blue_SubEsc}</li>
                    <li>Blue Control Seconds: {item.blue_CtrlSec}</li>
                    <li>Blue Reversals: {item.blue_Reversals}</li>
                    <li>Blue Reversed: {item.red_Reversals}</li>
                  </div>
                </div>
              </div>


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