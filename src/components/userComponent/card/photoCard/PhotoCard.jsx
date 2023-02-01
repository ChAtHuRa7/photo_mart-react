import ReactStars from "react-rating-stars-component"
import MovieImage from "../../../../assest/user.jpg"
import { useNavigate } from "react-router-dom";

import "./photoCard.css"



const MovieCard = ({photographer}) => {
    const navigate = useNavigate();

    const handelClick = ()=>{
        navigate(`/booking/${photographer.photographerId}`)
    }

    return (
        <div className="showing_movie_card">
            <div className="showing_movie_card-container">
                <img src={photographer.profilePicLink} alt="./assest/cover.jpg" />
                <div className="showing_movie_card-details">
                    <div className="showing_movie_card-titel">
                        <p>{photographer.photographerName}</p>
                        <h4>@{photographer.studioName}</h4>
                    </div>
                    <div className="showing_movie_card_chapter">
                        <p> {photographer.description} </p>
                    </div>
                    {/* <p>Cinema - Majestic plaza</p>
                    <p>Duration - 156 min</p> */}
                </div>
                <button onClick={handelClick} type="button">Book Now</button>
                <div className="showing_movie_card-rating">
                    <ReactStars
                        count={5}
                        size={24}
                        // edit={false}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;