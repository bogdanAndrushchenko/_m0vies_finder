import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsCast } from "../../API_service/api_service";

import s from "./Reviews.module.scss";

const Reviews = () => {
  const [reviews, setRewievs] = useState([]);

  const { movie_id } = useParams();
  // const params = useRouteMatch();
  // console.log(params.path);
  useEffect(() => {
    getReviewsList();
  }, [movie_id]);

  const getReviewsList = () => {
    getMovieDetailsCast(movie_id, "reviews").then(({ results }) =>
      setRewievs(results)
    );
  };
  console.log(reviews);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, id, content, updated_at }) => (
          <div key={id} className={s.Reviews}>
            <p className={s.Author}>{author}</p>
            <p className={s.Content}>{content}</p>
            <p className={s.Update}>Update: {updated_at}</p>
          </div>
        ))
      ) : (
        <p className={s.NotReviews}>Not reviews for this film</p>
      )}
    </>
  );
};

export default Reviews;
