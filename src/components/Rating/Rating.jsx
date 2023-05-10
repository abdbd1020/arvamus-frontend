import "../commonStyle.css";
import "./Rating.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function Rating(props) {
  let { rating = 5 } = props;

  rating = rating > 5 ? 5 : rating;

  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        return index < rating ? (
          <div className="single-star full-star" key={index}>
            <FaStar key={index} className="star filled" />
          </div>
        ) : (
          <div className="single-star zero-star" key={index}>
            <FaRegStar key={index} className="star" />
          </div>
        );
      })}
    </div>
  );
}
