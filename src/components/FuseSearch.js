import Fuse from "fuse.js";
import React from "react";
import Stats from "./Stats"
import ScatterAxis from "./ScatterAxis"
import PastFights from "./PastFights";
import FighterHeader from "./FighterHeader";

export default function FuseSearch(props) {
    console.log(props)
    // const FighterData = require('../data/fighterStats.json'); //(with path)
    const fighterString = require('../data/fighterData.json');
    const FighterData = JSON.parse(fighterString)
    console.log(FighterData)
    const fightString = require('../data/fightsData.json');
    const FightsData = JSON.parse(fightString)
    // console.log(FightsData)
    // console.log(typeof(FighterData))
    // console.log(FighterData)


    const AllStats = []
    for(const x in FighterData) {
      let data = FighterData[x]
      let fighter = {
          "Name": data.name,
          "First Name": data.first,
          "Last Name": data.last,
          "Nickname": data.nickname,
          "Stance": data.stance,
          // "Date of Birth": DoB,
          "Weight Class": data.weightclass,
          "Height (IN)": data.heightIN,
          "Reach (IN)": data.reachIN,
          "Current Age": data.age,
          "Age of Last Fight": data.ageLastFight,
          "Fights": data.fights,
          "Wins": data.wins,
          "Losses": data.losses,
          "Draws": data.draws,
          "No Contests": data.NCs,
          "Title Fights": data.sumTitleFights,
          "Win %": data.winPCT,
          "Decision Wins": data.sumDecWin,
          "Submission Wins": data.sumSubWin,
          "(T)KO Wins": data.sumKOWin,
          "DQ Wins": data.sumDQWin,
          "Decision Losses": data.sumDecLoss,
          "Submission Losses": data.sumSubLoss,
          "(T)KO Losses": data.sumKOLoss,
          "DQ Losses": data.sumDQLoss,
          "Fight Seconds": data.sumFightSec,
          "Significant Strikes Per Minute Differential": data.SigStkPerMinDiff,
          "Total Strikes Per Minute Differential": data.TotStkPerMinDiff,
          "Knock Downs": data.sumKDs,
          "Knock Downs Per 100 Strikes Landed": data.KDsPer100Stk,
          "Significant Strikes Landed": data.sumSigStksLnd,
          "Significant Strikes Attempted": data.sumSigStksAtt,
          "Significant Strike Accuracy %": data.SigStkAcc,
          "Significant Strikes Landed Per Minute": data.SigStkPerMin,
          "Total Strikes Landed": data.sumTotStksLnd,
          "Total Strikes Attempted": data.sumTotStksAtt,
          "Total Strike Accuracy %": data.TotStkAcc,
          "Total Strikes Landed Per Minute": data.TotStkPerMin,
          "Significant Head Strikes Landed": data.sumSigHeadLnd,
          "Significant Head Strikes Attempted": data.sumSigHeadAtt,
          "Significant Head Strike Accuracy %": data.SigHeadStkAcc,
          "Significant Head Strikes Landed Per Minute": data.StkHeadPerMin,
          "Significant Body Strikes Landed": data.sumSigBodyLnd,
          "Significant Body Strikes Attempted": data.sumSigBodyAtt,
          "Significant Body Strike Accuracy %": data.SigBodyStkAcc,
          "Significant Body Strikes Landed Per Minute": data.StkBodyPerMin,
          "Significant Leg Strikes Landed": data.sumSigLegLnd,
          "Significant Leg Strikes Attempted": data.sumSigLegAtt,
          "Significant Leg Strike Accuracy %": data.SigLegStkAcc,
          "Significant Leg Strikes Landed Per Minutes": data.StkLegPerMin,
          "Significant Distance Strikes Landed": data.sumSigDistLnd,
          "Significant Distance Strikes Attempted": data.sumSigDistAtt,
          "Significant Distance Strike Accuracy %": data.SigDistStkAcc,
          "Significant Distance Strikes Landed Per Minute": data.StkDistPerMin,
          "Significant Clinch Strikes Landed": data.sumSigClchLnd,
          "Significant Clinch Strikes Attempted": data.sumSigClchAtt,
          "Significant Clinch Strike Accuracy %": data.SigClchStkAcc,
          "Significant Clinch Strikes Landed Per Minute": data.StkClchPerMin,
          "Significant Ground Strikes Landed": data.sumSigGndLnd,
          "Significant Ground Strikes Attempted": data.sumSigGndAtt,
          "Significant Ground Strike Accuracy %": data.SigGndStkAcc,
          "Significant Ground Strikes Landed Per Minute": data.StkGndPerMin,
          "Knocked Down": data.sumKedD,
          "Knocked Down Per 100 Strikes Absorbed": data.KedDPer100StkAbs,
          "Significant Strikes Absorbed": data.sumSigStksAbs,
          "Significant Strikes Seen": data.sumSigStksSeen,
          "Significant Strike Defense %": data.SigStkDef,
          "Significant Strikes Absorbed Per Minute": data.SigStkAbsPerMin,
          "Total Strikes Absorbed": data.sumTotStksAbs,
          "Total Strikes Seen": data.sumTotStksSeen,
          "Total Strike Defense %": data.TotStkDef,
          "Total Strikes Absorbed Per Minute": data.TotStkAbsPerMin,
          "Significant Head Strikes Absorbed": data.sumSigHeadAbs,
          "Significant Head Strikes Seen": data.sumSigHeadSeen,
          "Significant Head Strike Defense %": data.SigHeadStkDef,
          "Significant Head Strikes Absorbed Per Minute": data.StkHeadAbsPerMin,
          "Significant Body Strikes Absorbed": data.sumSigBodyAbs,
          "Significant Body Strikes Seen": data.sumSigBodySeen,
          "Significant Body Strike Defense %": data.SigBodyStkDef,
          "Significant Body Strikes Absorbed Per Minute": data.StkBodyAbsPerMin,
          "Significant Leg Strikes Absorbed": data.sumSigLegAbs,
          "Significant Leg Strikes Seen": data.sumSigLegSeen,
          "Significant Leg Strike Defense %": data.SigLegStkDef,
          "Significant Leg Strikes Absorbed Per Minute": data.StkLegAbsPerMin,
          "Significant Distance Strikes Absorbed": data.sumSigDistAbs,
          "Significant Distance Strikes Seen": data.sumSigDistSeen,
          "Significant Distance Strike Defense %": data.SigDistStkDef,
          "Significant Distance Strikes Absorbed Per Minute": data.StkDistAbsPerMin,
          "Significant Clinch Strikes Absorbed": data.sumSigClchAbs,
          "Significant Clinch Strikes Seen": data.sumSigClchSeen,
          "Significant Clinch Strike Defense %": data.SigClchStkDef,
          "Significant Clinch Strikes Absorbed Per Minute": data.StkClchAbsPerMin,
          "Significant Ground Strikes Absorbed": data.sumSigGndAbs,
          "Significant Ground Strikes Seen": data.sumSigGndSeen,
          "Significant Ground Strike Defense %": data.SigGndStkDef,
          "Significant Ground Strikes Absorbed Per Minute": data.StkGndAbsPerMin,
          "Control Seconds Differential": data.CtrlDiff,
          "Control Seconds": data.sumCtrlSec,
          "Control Seconds Per Minute": data.CtrlSecPerMin,
          "Takedowns Landed": data.sumTDsLnd,
          "Takedowns Attempted": data.sumTDsAtt,
          "Takedown Accuracy %": data.TDAcc,
          "Takedowns Per Minute": data.TDsPerMin,
          "Submission Attempts": data.sumSubAtt,
          "Submission Accuracy %": data.SubAcc,
          "Submission Attempts Per Minute": data.SubAttPerMin,
          "Reversals": data.sumRevs,     
          "Controled Seconds": data.sumCtrldSec,
          "Controled Seconds Per Minute": data.CtrldSecPerMin,
          "Takedowns Absorbed": data.sumTDsAbs,
          "Takedowns Seen": data.sumTDsSeen,
          "Takedown Defense %": data.TDDef,
          "Takedowns Absorbed Per Minute": data.TDsAbsPerMin,
          "Submissions Escaped": data.sumSubEsc,
          "Submission Defense %": data.SubDef,
          "Reversed": data.sumReversed    
      }
      AllStats.push(fighter)
    }

    const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          "Name",
          "Nickname",
          "First Name",
          "Last Name"
        ]
      };
      
    const fuse = new Fuse(AllStats, options);
      
      // Change the pattern
    const pattern = props.Input
    console.log(pattern)
    let results = fuse.search(pattern)
    // console.log(results[0])
    let TopResult = results[0].item
    console.log(TopResult)
    return (
      <div>
        <div>
          <span className="Topline">
            <h2>Fighter Info</h2>
            <FighterHeader TopResult={TopResult} />
          </span>
        </div>
        <span className="Stats">
          <h2>Fighter Stats</h2>
          <Stats key="Full Name" TopResult={TopResult} /> 
        </span>
        <h2>Compare All fighters by selecting X and Y axis stat values</h2>
        <ScatterAxis AllStats={AllStats} TopResult={TopResult} />
        <h2>Fight History</h2>
        <PastFights TopResult={TopResult} FightsData={FightsData} />
      </div>
    )
      
  
}