import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetailsCast } from "../../API_service/api_service";

import s from "./Reviews.module.scss";
import { toast } from "react-toastify";

const Reviews = () => {
  const [reviews, setRewievs] = useState([]);
  const { movie_id } = useParams();

  useEffect(() => {
    getReviewsList();
  }, [movie_id]);

  const getReviewsList = () => {
    getMovieDetailsCast(movie_id, "reviews")
      .then(({ results }) => setRewievs(results))
      .catch((e) => toast(e));
  };

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, id, content, updated_at }) => (
          <div key={id} className={s.Reviews}>
            <p className={s.Author}>Author: {author}</p>
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
