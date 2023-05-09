import "../commonStyle.css";

export function Rating(props) {
  let { rating = 5 } = props;

  rating = rating > 5 ? 5 : rating;

  let svgAsset = {
    full: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none">
        <path
          d="M11 0L13.4697 6.90983H21.4616L14.996 11.1803L17.4656 18.0902L11 13.8197L4.53436 18.0902L7.00402 11.1803L0.538379 6.90983H8.53035L11 0Z"
          fill="#F3D779"></path>
      </svg>
    ),
    zero: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none">
        <path
          d="M11 1.48562L12.9988 7.07811L13.1174 7.40983H13.4697H19.7974L14.7204 10.7631L14.3932 10.9793L14.5252 11.3486L16.4902 16.8467L11.2756 13.4025L11 13.2204L10.7244 13.4025L5.50977 16.8467L7.47485 11.3486L7.60685 10.9793L7.27958 10.7631L2.20262 7.40983H8.53035H8.88262L9.00118 7.07811L11 1.48562Z"
          stroke="#F3D779"></path>
      </svg>
    ),
  };
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        return index < rating ? (
          <div className="single-star full-star" key={index}>
            {svgAsset.full}
          </div>
        ) : (
          <div className="single-star zero-star" key={index}>
            {svgAsset.zero}
          </div>
        );
      })}
    </div>
  );
}
