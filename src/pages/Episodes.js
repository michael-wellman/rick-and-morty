import React, {useState, useEffect} from 'react';
import CardItem from '../components/cards/CardItem';

function Episodes() {
    const [episodes, updateEpisodes] = useState([]);

    useEffect(() => {
        getEpisodes();
    }, []);

   async function getEpisodes(selEpisode, defaultEpisode = 1) {
    let response = [];
    
    const episodeItem = selEpisode ? episodeItem : 1;

        try {
            response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeItem}`);
        } 
        catch (error) {
            console.log(error);
        }

        const episodes = await response.json();
        updateEpisodes(episodes);

        episodes.characters && episodes.characters.map((character) => (
            getCharacterInfo(character)
           ))

        return episodes;
    }

    async function getCharacterInfo(characterAPI) {
        let response = [];

        try {
            response = await fetch(characterAPI);
        } catch (error) {
            console.log(error)
        }

        const retCharacterDetails = await response.json();
        console.log(retCharacterDetails);
        return retCharacterDetails;
    }

    return(<section>
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    FILTER GOES HERE
                </div>
                <div className="col-sm-10">
                {
                    //** BELIEVE THIS IS WHERE MY ISH IS MESSING UP  */
                    retCharacterDetails && retCharacterDetails.map(retCharacterDetail => (
                    <CardItem 
                        name={retCharacterDetail.name}
                        image={retCharacterDetail.image}
                        location={retCharacterDetail.location.name}
                        status={retCharacterDetail.status}
                    />
                   ))
                }
                </div>
            </div>
        </div>
    </section>
    )
}

export default Episodes;