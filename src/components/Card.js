import React, {useState} from 'react';
import './Card.css';
const Card = ({ id,img, name, star, Price ,addToCart}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <section className="card">
        <div className="img-card">
        <img src={img} alt={name} className="card-img" />
            </div>
        <div className="card-details">
          <h3 className="card-title">{name}</h3>
          <select classname="size" onChange={handleSizeChange} value={selectedSize}>
                <option value="Size">Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <div className="quantity-controls">
              <button className="quantity" onClick={decreaseQuantity}>-</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity" onClick={increaseQuantity}>+</button>
            </div>
          </section>
          <section className="card-price">
            <div className="price">
              Rs.{Price*quantity}
              </div>
            <div className="bag" onClick={() => addToCart({ id,img, name, Price })}>
              <button className="btn">Buy Now</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
