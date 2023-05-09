export function Rating(props) {
  let { rating = 5 } = props;

  rating = rating > 5 ? 5 : rating;

  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        return index < rating ? (
          <i key={index} id="one" className={"fas fa-star"}></i>
        ) : (
          "☆"
        );
      })}
    </div>
  );
}
