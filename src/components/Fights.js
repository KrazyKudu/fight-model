import { useState } from 'react';
import FightSearch from './FightSearch';
import FightSearchAccordion from './FightSearchAccordion';

const fightString = require('../data/fightsData.json');
const fightObj = JSON.parse(fightString)

const fightData = fightObj.map(({_id, ...rest}) => {
    return rest;
  });

function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
fightData.sort(custom_sort)

const filterPosts = (fightData, query) => {
    if (!query) {
        return fightData;
    }

    return fightData.filter((fight) => {
        const postName = fight.fight_id.toLowerCase();
        return postName.includes(query.toLowerCase());
    });
};

const Fights = () => {
    // console.log(fightData)
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(fightData, query);
    return (
        <div>
            <h2>Search by event or fighter</h2>
            <FightSearch 
             searchQuery={searchQuery}
             setSearchQuery={setSearchQuery}
             />
            <FightSearchAccordion filteredPosts={filteredPosts} />
        </div>
)
    
}
export default Fights