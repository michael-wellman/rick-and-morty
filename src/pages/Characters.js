import React, {useState, useEffect} from "react";
import CardItem from "../components/cards/CardItem";
import FilterSection from "../components/layout/FilterSection";

function Characters(props) {

    const [characters, updateCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    async function getCharacters() {
        let url = 'https://rickandmortyapi.com/api/character/?page=1';
        let response = [];
        
        try {
            response = await fetch(url);
        } 
        catch(error) {
            console.log(error);
        }

        const characters = await response.json();
        updateCharacters(characters);
        console.log(characters);
        return characters;
    }

    return (<main>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <FilterSection />
                </div>
                <div className="col-9">
                    <div className="d-flex flex-wrap">
                        {
                        characters.results && characters.results.map((character) => (
                            <CardItem 
                                name={character.name}
                                image={character.image}
                                location={character.location.name}
                                status={character.status}
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

export default Characters;