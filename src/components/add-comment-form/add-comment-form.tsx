import React, { useState } from 'react';


type FormDataType = {
  comment: string;
  rating: string;
};

interface CommentProps {

  activeOfferId: string | null;
  onAddComment: (offerId: string, comment: string, rating: string) => void;
}

const AddCommentForm: React.FC<CommentProps> = ({ activeOfferId, onAddComment }) => {
  const [formData, setFormData] = useState<FormDataType>({
    comment: '',
    rating: '',
  });


  const handleFieldChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (activeOfferId && formData.comment.length >= 50 && formData.rating) {
      onAddComment(activeOfferId, formData.comment, formData.rating);
    }
  };


  if (!activeOfferId) {
    return null;
  }

  return (
    <form className='offer__host' onSubmit={handleSubmit}>
      <h2 className='offer__host-title'>Meet the host</h2>
      <label
        htmlFor='rating'
        className='reviews__label form__label'
        style={{
          display: 'block',
          fontSize: '16px',
          marginBottom: '8px',
          color: '#555',
        }}
      >
        Rate your experience:
      </label>
      <div className='reviews__rating-form form__rating' style={{ marginBottom: '20px' }}>
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              value={value}
              id={`${value}-stars`}
              type='radio'
              onChange={handleFieldChange}
              checked={formData.rating === String(value)}
              required
            />
            <label
              htmlFor={`${value}-stars`}
              className='reviews__rating-label form__rating-label'
              style={{
                cursor: 'pointer',
              }}
            >
              <svg
                className='form__star-image'
                width='37'
                height='33'
                fill={Number(formData.rating) >= value ? '#ffc107' : '#ccc'}
                style={{ transition: 'fill 0.3s ease' }}
              >
                <use xlinkHref='#icon-star'></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <label
        htmlFor='comment'
        className='form__label'
        style={{
          display: 'block',
          fontSize: '16px',
          marginBottom: '8px',
          color: '#555',
        }}
      >
        Comment:
      </label>
      <textarea
        className='reviews__textarea form__textarea'
        id='comment'
        name='comment'
        value={formData.comment}
        onChange={handleFieldChange}
        placeholder='Tell how was your stay, what you like and what can be improved'
        required
        minLength={50}
        style={{
          width: '100%',
          fontSize: '16px',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          minHeight: '100px',
          resize: 'none',
          boxSizing: 'border-box',
        }}
      />

      {formData.comment.length < 50 && formData.comment.length > 0 && (
        <p
          className='reviews__help'
          style={{
            fontSize: '14px',
            color: '#ff6f61',
            marginBottom: '20px',
          }}
        >
          Your comment must be at least <b>50 characters long.</b>
        </p>
      )}
      <button
        className='reviews__submit form__submit button'
        type='submit'
        disabled={formData.comment.length < 50 || !formData.rating}
        style={{
          width: '25%',
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '10px',
          color: '#fff',
          backgroundColor:
            formData.comment.length < 50 || !formData.rating
              ? '#ccc'
              : '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor:
            formData.comment.length < 50 || !formData.rating
              ? 'not-allowed'
              : 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddCommentForm;
