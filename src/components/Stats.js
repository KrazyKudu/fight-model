import React, { Component, useState } from 'react';
import styled from 'styled-components'
import { Accordion } from "semantic-ui-react";



export default function DisplayStats(props) {
        console.log(props)
        let Striking = {
          "Offensive": {
            "Significant Strikes Per Minute Differential": props.TopResult["Significant Strikes Per Minute Differential"],
            "Total Strikes Per Minute Differential": props.TopResult["Total Strikes Per Minute Differential"],
            "Knock Downs": props.TopResult["Knock Downs"],
            "Knock Downs / Knock Outs Per 100 Strikes Landed": props.TopResult["Knock Downs Per 100 Strikes Landed"],
            "Significant Strikes Landed": props.TopResult["Significant Strikes Landed"],
            "Significant Strikes Attempted": props.TopResult["Significant Strikes Attempted"],
            "Significant Strike Accuracy %": props.TopResult["Significant Strike Accuracy %"],
            "Significant Strikes Landed Per Minute": props.TopResult["Significant Strikes Landed Per Minute"],
            "Total Strikes Landed": props.TopResult["Total Strikes Landed"],
            "Total Strikes Attempted": props.TopResult["Total Strikes Attempted"],
            "Total Strike Accuracy %": props.TopResult["Total Strike Accuracy %"],
            "Total Strikes Landed Per Minute": props.TopResult["Total Strikes Landed Per Minute"],
            "Significant Head Strikes Landed": props.TopResult["Significant Head Strikes Landed"],
            "Significant Head Strikes Attempted": props.TopResult["Significant Head Strikes Attempted"],
            "Significant Head Strike Accuracy %": props.TopResult["Significant Head Strike Accuracy %"],
            "Significant Head Strikes Landed Per Minute": props.TopResult["Significant Head Strikes Landed Per Minute"],
            "Significant Body Strikes Landed": props.TopResult["Significant Body Strikes Landed"],
            "Significant Body Strikes Attempted": props.TopResult["Significant Body Strikes Attempted"],
            "Significant Body Strike Accuracy %": props.TopResult["Significant Body Strike Accuracy %"],
            "Significant Body Strikes Landed Per Minute": props.TopResult["Significant Body Strikes Landed Per Minute"],
            "Significant Leg Strikes Landed": props.TopResult["Significant Leg Strikes Landed"],
            "Significant Leg Strikes Attempted": props.TopResult["Significant Leg Strikes Attempted"],
            "Significant Leg Strike Accuracy %": props.TopResult["Significant Leg Strike Accuracy %"],
            "Significant Leg Strikes Landed Per Minutes": props.TopResult["Significant Leg Strikes Landed Per Minutes"],
            "Significant Distance Strikes Landed": props.TopResult["Significant Distance Strikes Landed"],
            "Significant Distance Strikes Attempted": props.TopResult["Significant Distance Strikes Attempted"],
            "Significant Distance Strike Accuracy %": props.TopResult["Significant Distance Strike Accuracy %"],
            "Significant Distance Strikes Landed Per Minute": props.TopResult["Significant Distance Strikes Landed Per Minute"],
            "Significant Clinch Strikes Landed": props.TopResult["Significant Clinch Strikes Landed"],
            "Significant Clinch Strikes Attempted": props.TopResult["Significant Clinch Strikes Attempted"],
            "Significant Clinch Strike Accuracy %": props.TopResult["Significant Clinch Strike Accuracy %"],
            "Significant Clinch Strikes Landed Per Minute": props.TopResult["Significant Clinch Strikes Landed Per Minute"],
            "Significant Ground Strikes Landed": props.TopResult["Significant Ground Strikes Landed"],
            "Significant Ground Strikes Attempted": props.TopResult["Significant Ground Strikes Attempted"],
            "Significant Ground Strike Accuracy %": props.TopResult["Significant Ground Strike Accuracy %"],
            "Significant Ground Strikes Landed Per Minute": props.TopResult["Significant Ground Strikes Landed Per Minute"],
        },
          "Defensive": {
            "Knocked Down": props.TopResult["Knocked Down"],
            "Knocked Down Per 100 Strikes Absorbed": props.TopResult["Knocked Down Per 100 Strikes Absorbed"],
            "Significant Strikes Absorbed": props.TopResult["Significant Strikes Absorbed"],
            "Significant Strikes Seen": props.TopResult["Significant Strikes Seen"],
            "Significant Strike Defense %": props.TopResult["Significant Strike Defense %"],
            "Significant Strikes Absorbed Per Minute": props.TopResult["Significant Strikes Absorbed Per Minute"],
            "Total Strikes Absorbed": props.TopResult["Total Strikes Absorbed"],
            "Total Strikes Seen": props.TopResult["Total Strikes Seen"],
            "Total Strike Defense %": props.TopResult["Total Strike Defense %"],
            "Total Strikes Absorbed Per Minute": props.TopResult["Total Strikes Absorbed Per Minute"],
            "Significant Head Strikes Absorbed": props.TopResult["Significant Head Strikes Absorbed"],
            "Significant Head Strikes Seen": props.TopResult["Significant Head Strikes Seen"],
            "Significant Head Strike Defense %": props.TopResult["Significant Head Strike Defense %"],
            "Significant Head Strikes Absorbed Per Minute": props.TopResult["Significant Head Strikes Absorbed Per Minute"],
            "Significant Body Strikes Absorbed": props.TopResult["Significant Body Strikes Absorbed"],
            "Significant Body Strikes Seen": props.TopResult["Significant Body Strikes Seen"],
            "Significant Body Strike Defense %": props.TopResult["Significant Body Strike Defense %"],
            "Significant Body Strikes Absorbed Per Minute": props.TopResult["Significant Body Strikes Absorbed Per Minute"],
            "Significant Leg Strikes Absorbed": props.TopResult["Significant Leg Strikes Absorbed"],
            "Significant Leg Strikes Seen": props.TopResult["Significant Leg Strikes Seen"],
            "Significant Leg Strike Defense %": props.TopResult["Significant Leg Strike Defense %"],
            "Significant Leg Strikes Absorbed Per Minute": props.TopResult["Significant Leg Strikes Absorbed Per Minute"],
            "Significant Distance Strikes Absorbed": props.TopResult["Significant Distance Strikes Absorbed"],
            "Significant Distance Strikes Seen": props.TopResult["Significant Distance Strikes Seen"],
            "Significant Distance Strike Defense %": props.TopResult["Significant Distance Strike Defense %"],
            "Significant Distance Strikes Absorbed Per Minute": props.TopResult["Significant Distance Strikes Absorbed Per Minute"],
            "Significant Clinch Strikes Absorbed": props.TopResult["Significant Clinch Strikes Absorbed"],
            "Significant Clinch Strikes Seen": props.TopResult["Significant Clinch Strikes Seen"],
            "Significant Clinch Strike Defense %": props.TopResult["Significant Clinch Strike Defense %"],
            "Significant Clinch Strikes Absorbed Per Minute": props.TopResult["Significant Clinch Strikes Absorbed Per Minute"],
            "Significant Ground Strikes Absorbed": props.TopResult["Significant Ground Strikes Absorbed"],
            "Significant Ground Strikes Seen": props.TopResult["Significant Ground Strikes Seen"],
            "Significant Ground Strike Defense %": props.TopResult["Significant Ground Strike Defense %"],
            "Significant Ground Strikes Absorbed Per Minute":props.TopResult["Significant Ground Strikes Absorbed Per Minute"] ,
          }
        }
        let Grappling = {
          "Offensive": {
            "Control Seconds Differential": props.TopResult["Control Seconds Differential"],
            "Control Seconds": props.TopResult["Control Seconds"],
            "Control Seconds Per Minute": props.TopResult["Control Seconds Per Minute"],
            "Takedowns Landed": props.TopResult["Takedowns Landed"],
            "Takedowns Attempted": props.TopResult["Takedowns Attempted"],
            "Takedown Accuracy %": props.TopResult["Takedown Accuracy %"],
            "Takedowns Per Minute": props.TopResult["Takedowns Per Minute"],
            "Submission Attempts": props.TopResult["Submission Attempts"],
            "Submission Accuracy %": props.TopResult["Submission Accuracy %"],
            "Submission Attempts Per Minute": props.TopResult["Submission Attempts Per Minute"],
            "Reversals": props.TopResult["Reversals"],
          },
          "Defensive": {
            "Controled Seconds": props.TopResult["Controled Seconds"],
            "Controled Seconds Per Minute": props.TopResult["Controled Seconds Per Minute"],
            "Takedowns Absorbed": props.TopResult["Takedowns Absorbed"],
            "Takedowns Seen": props.TopResult["Takedowns Seen"],
            "Takedown Defense %": props.TopResult["Takedown Defense %"],
            "Takedowns Absorbed Per Minute": props.TopResult["Takedowns Absorbed Per Minute"],
            "Submissions Escaped": props.TopResult["Submissions Escaped"],
            "Submission Defense %": props.TopResult["Submission Defense %"],
            "Reversed": props.TopResult["Reversed"],
          }
        }

        let StkOff = Object.entries(Striking.Offensive).map(([key, value]) => (
            <li>{key}: {value}</li>
            ));
            // console.log(elems)
        let StkDef = Object.entries(Striking.Defensive).map(([key, value]) => (
            <li>{key}: {value}</li>
            ));

        let GrapOff = Object.entries(Grappling.Offensive).map(([key, value]) => (
                <li>{key}: {value}</li>
                ));
                // console.log(elems)
        let GrapDef = Object.entries(Grappling.Defensive).map(([key, value]) => (
                <li>{key}: {value}</li>
                ));
        
        const level1Panels = [
            { key: "OffStriking", title: "Striking Offense", content: StkOff },
            { key: "DefStriking", title: "Striking Defense", content: StkDef }
          ];
          
          const Level1Content = (
            <div>
              <Accordion.Accordion panels={level1Panels} />
            </div>
          );
          
          const level2Panels = [
            { key: "OffGrappling", title: "Grappling Offense", content: GrapOff },
            { key: "DefGrappling", title: "Grappling Defense", content: GrapDef }
          ];
          
          const Level2Content = (
            <div>
              <Accordion.Accordion panels={level2Panels} />
            </div>
          );
          
          const rootPanels = [
            { key: "Striking", title: "Striking Stats", content: { content: Level1Content } },
            { key: "Grappling", title: "Grappling Stats", content: { content: Level2Content } }
          ];
          
        const AccordionExampleNested = () => (
            <Accordion defaultActiveIndex={0} panels={rootPanels} />
          );
        return (
            <div>   
            <AccordionExampleNested />
            </div>
        )
}

