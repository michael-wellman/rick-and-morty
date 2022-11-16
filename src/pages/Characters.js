import CardItem from "../components/cards/CardItem";

function Characters(props) {
    return (<section>
        <div className="container">
            <div className="row">
            {props.cards.map((card) => (
                <CardItem key={card.id}
                    id={card.id}
                    image={card.image}
                    name={card.name}
                    location={card.location}
                />     
            ))}
            </div>
        </div>
    </section>
    )
}

export default Characters;