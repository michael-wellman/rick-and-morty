import React, {useState, useEffect} from 'react';
import CardItem from '../components/cards/CardItem';

function Episodes() {
    const [episodes, updateEpisodes] = useState([]);
    const [characterDetail, filteredCharacterDetail] = useState([]);

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

        const characterDetail = await response.json();
        filteredCharacterDetail(characterDetail);
        return characterDetail;
    }

    return (<main>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    FILTER GOES HERE
                </div>
                <div className="col-9">
                    <div className="d-flex flex-wrap">
                        {
                           characterDetail && characterDetail.map((char) => (
                            <CardItem
                                name={char.name}
                            />
                           ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Episodes;