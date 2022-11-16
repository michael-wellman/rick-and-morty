import classes from './CardItem.modules.scss'

function CardItem(props) {
    return(
        <a href='/' className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'>
        <div className="card">
             <div className="card-image">
                <img src={props.image} alt={props.name} />
             </div>
             <div className="card-content">
                <h3>{props.name}</h3>
                <div className="location-details">
                    <p>
                    <span>Last Location</span><br/>
                    {props.location}
                    </p>
                </div>
             </div>
        </div>
        </a>
    )
}

export default CardItem;