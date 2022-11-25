import React, {useState, useEffect} from 'react';
import CardItem from '../components/cards/CardItem';

function Episodes() {
    const [episodes, updateEpisodes] = useState([]);

    useEffect(() => {
        getEpisodes();
    }, []);

   async function getEpisodes() {
    let url = 'https://rickandmortyapi.com/api/character/?page=1';
    let response = [];

        try {
            response = await fetch(url);
        } 
        catch (error) {
            console.log(error);
        }

        const episodes = await response.json();
        updateEpisodes(episodes);
        console.log(episodes);
        return episodes;
    }

    return(<section>
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    FILTER GOES HERE
                </div>
                <div className="col-sm-10">
                {
                    episodes.results && episodes.results.filter((episode) => episode.episode === 'https://rickandmortyapi.com/api/episode/1').map(filteredEpisode => (
                        <CardItem 
                            name={filteredEpisode.name}
                            image={filteredEpisode.image}
                            location={filteredEpisode.location.name}
                            status={filteredEpisode.status}
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