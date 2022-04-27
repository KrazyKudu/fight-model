
export default function FighterHeader(props) {
    console.log(props.TopResult)

    let HeadlineInfo = {
        "Name": props.TopResult["Name"],
        "First Name": props.TopResult["First Name"],
        "Last Name": props.TopResult["Last Name"],
        "Nickname": props.TopResult["Nickname"],
        "Stance": props.TopResult["Stance"],
        "Weight Class": props.TopResult["Weight Class"],
        "Height (IN)": props.TopResult["Height (IN)"],
        "Reach (IN)": props.TopResult["Reach (IN)"],
        "Current Age": props.TopResult["Current Age"],
        "Age of Last Fight": props.TopResult["Age of Last Fight"],
        "Fights": props.TopResult["Fights"],
        "Wins": props.TopResult["Wins"],
        "Losses": props.TopResult["Losses"],
        "Draws": props.TopResult["Draws"],
        "No Contests": props.TopResult["No Contests"],
        "Title Fights": props.TopResult["Title Fights"],
        "Win %": props.TopResult["Win %"],
        "Decision Wins": props.TopResult["Decision Wins"],
        "Submission Wins": props.TopResult["Submission Wins"],
        "(T)KO Wins": props.TopResult["(T)KO Wins"],
        "DQ Wins": props.TopResult["DQ Wins"],
        "Decision Losses": props.TopResult["Decision Losses"],
        "Submission Losses": props.TopResult["Submission Losses"],
        "(T)KO Losses": props.TopResult["(T)KO Losses"],
        "DQ Losses": props.TopResult["DQ Losses"],
        "Fight Seconds": props.TopResult["Fight Seconds"]
    }
    let elems = Object.entries(HeadlineInfo).map(([key, value]) => (
    <li>{key}: {value}</li>
    ));
    console.log(elems)
    return (
        <div>
            {elems}
        </div>
    )
}