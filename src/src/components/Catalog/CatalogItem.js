import {Link} from 'react-router-dom';

export const CatalogItem = ({
    _id,
    title,
    genre,
    imageUrl,
    summary,    
}) => {
    return (
        <div className ="allMangas">
            <div className = "allMangas-info">
                <img src ={imageUrl} alt ="No content"/>
                <h6>{genre}</h6>
                <h2>{title}</h2>
                <Link to = {`/catalog/${_id}`} className = "details-button">Details</Link>
            </div>
        </div>
    )
}