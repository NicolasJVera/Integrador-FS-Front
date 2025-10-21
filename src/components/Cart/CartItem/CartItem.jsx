import {
  // CartItemContainer,
  CartItemImage,
  CartItemTitle,
  CartItemPrice,
  QuantityControl,
  QuantityButton,
  Quantity,
  Items,
  CartTextContainer, 
  // Item
} from '../CartStyles';

const CartItem = ({ product, onUpdateQuantity }) => {
  const { id, name, price, img, quantity } = product;
  
  const handleDecrease = () => {
    onUpdateQuantity(id, -1);
  };
  
  const handleIncrease = () => {
    onUpdateQuantity(id, 1);
  };
  
  return (
    <Items>
      <CartItemImage src={img} alt={name} />
      <CartTextContainer>
        <CartItemTitle>{name}</CartItemTitle>
        <CartItemPrice>${price.toFixed(2)}</CartItemPrice>
      </CartTextContainer>

      <QuantityControl>
        <QuantityButton onClick={handleDecrease}>-</QuantityButton>
        <Quantity>{quantity}</Quantity>
        <QuantityButton onClick={handleIncrease}>+</QuantityButton>
      </QuantityControl>
    </Items>
  );
};

export default CartItem;