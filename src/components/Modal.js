import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function Modal() {
  const { toggleModal, modal, modalId, modalType, remove } = useGlobalContext();

  const handleRemove = () => {
    remove(modalId);
    toggleModal(false, 'remove');
  };

  if (modalType === 'remove') {
    return (
      <div className={modal ? 'modal' : 'modal hide'}>
        <div className='modalDiv'>
          <div>
            <h2>Are you sure you want to remove the item from your cart?</h2>
            <button onClick={() => toggleModal(false, 'remove')}>No</button>
            <button onClick={() => handleRemove()}>Yes, remove</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={modal ? 'modal' : 'modal hide'}>
        <div className='modalDiv'>
          <div>
            <h2>Added to cart!</h2>
            <button onClick={() => toggleModal(false, 'added')}>
              Continue Shopping
            </button>
            <Link to='/cart'>
              <button onClick={() => toggleModal(false)}>Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
