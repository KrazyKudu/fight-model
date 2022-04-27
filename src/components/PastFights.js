import PastFightsAccordion from "./PastFightsAccordion"

export default function PastFights(props) {
    
    let SelectedFighter = props.TopResult.Name
    // console.log(props.TopResult)
    // console.log(selectedFighter)

    let SelectedFights = []
    for(const fight in props.FightsData) {
        if (props.FightsData[fight].red_name === String(SelectedFighter)) {
                    SelectedFights.push(props.FightsData[fight])
                }
        else if (props.FightsData[fight].blue_name === String(SelectedFighter)) {
                    SelectedFights.push(props.FightsData[fight])
                }
            }

    
    // console.log(SelectedFights)
    function custom_sort(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    SelectedFights.sort(custom_sort)
    // let allFights = []
    // for(const blah in selectedFights) {
    //     for(const bluh in blah) {
    //     let elems = Object.entries(bluh).map(([key, value]) => (
    //         <li>{key}: {value}</li>
    //     ));
    //     allFights.push(elems)
    // }}
    // console.log(allFights)
    return (
    <div>
        <PastFightsAccordion SelectedFights={SelectedFights} />
    </div>
    )
}