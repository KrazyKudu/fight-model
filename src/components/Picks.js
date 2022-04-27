import ModelResults from './ModelResults';

export default function Picks() {
    
    const pickString = require('../data/model_picks.json');
    const pickData = JSON.parse(pickString)
    const pickArr = pickData.map(({_id, ...rest}) => {
        return rest;
      });
    
    const pickTable = (
        <table className='picksTable'>
        <thead>
          <tr>
            <th>Red Name</th>
            <th>Blue Name</th>
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
          {pickArr.map(item => {
            return (
              <tr key={item.fight_id}>
                <td>{ item.red_name }</td>
                <td>{ item.blue_name }</td>
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
    )
    const resultTable = (
        <table className='picksTable'>
        <thead>
          <tr>
            <th>Red Name</th>
            <th>Blue Name</th>
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
          {pickArr.map(item => {
            return (
              <tr key={item.fight_id}>
                <td>{ item.red_name }</td>
                <td>{ item.blue_name }</td>
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
    )
    
    
    return (
       <div>
           <h2>picks for upcoming event</h2>
      {pickTable}
        <h2>Picks and results from past events</h2>
       <ModelResults />
     </div>
    )
} 