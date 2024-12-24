import React, { useState } from 'react';

type RatingType = 1 | 2 | 3 | 4 | 5;

type FormDataType = {
  firstname: string;
  comment: string;
  rating: RatingType | null;
};

interface AddCommentFormProps {
  offerId: string; // ID de l'offre à laquelle le commentaire est lié
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ offerId }) => {
  const [formData, setFormData] = useState<FormDataType>({
    firstname: '',
    comment: '',
    rating: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Gestion des champs de texte
  const handleFieldChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion des changements de note
  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = parseInt(evt.target.value, 10) as RatingType; // Utilisation de `10` comme radix
    setFormData({ ...formData, rating: newRating });
  };

  // Soumission du formulaire
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setIsSubmitted(true);
  };

  // Fonction pour obtenir le titre de la note
  const getRatingTitle = (star: number): string => {
    const titles: Record<number, string> = {
      5: 'perfect',
      4: 'good',
      3: 'not bad',
      2: 'badly',
      1: 'terribly',
    };
    return titles[star];
  };

  // Afficher les détails si le formulaire est soumis
  if (isSubmitted) {
    return (
      <Details firstname={formData.firstname} comment={formData.comment} />
    );
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <h2>Add your comment</h2>

      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleFieldChange}
        required
      />

      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleFieldChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
        required
        minLength={50}
      />
      {formData.comment.length < 50 && formData.comment.length > 0 && (
        <p>Your comment must be at least 50 characters long.</p>
      )}

      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star}>
            <input
              className="form__rating-input visually-hidden"
              type="radio"
              id={`${star}-stars`}
              value={star}
              name="rating"
              checked={formData.rating === star}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={getRatingTitle(star)}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </div>
        ))}
      </div>

      <button
        className="reviews__submit form__submit button"
        type="submit"
        disabled={
          !formData.rating ||
          formData.comment.length < 50 ||
          !formData.firstname
        }
      >
        Submit
      </button>
    </form>
  );
};

const Details: React.FC<{
  firstname: string;
  comment: string;
}> = ({ firstname, comment }) => (
  <div>
    <h2>Review Details:</h2>
    <p>
      <b>First Name: </b>
      {firstname}
    </p>
    <p>
      <b>Comment: </b>
      {comment}
    </p>
  </div>
);


export default AddCommentForm;
