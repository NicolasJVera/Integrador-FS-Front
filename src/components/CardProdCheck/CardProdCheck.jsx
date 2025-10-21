import { 
  CardContainer,
  ImgContainer,
  TextContainer,
  Title,
  HandlerButton,
  Quantity,
  Price,
  Description,
  QuantityHandler
} from './CardProdCheckStyles';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/cart/cartSlice';
import { formatPrice } from '../../utils/formatPrice';

const CardProdCheck = ({ id, title, desc, price, img, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart({ id, title, desc, price, img }));
  };

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <CardContainer>
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Price>{formatPrice(price)}</Price>
      </TextContainer>
      <QuantityHandler >
        <HandlerButton onClick={handleDelete}>
          {quantity === 1 ? <i className="fas fa-trash"></i> : <i className="fas fa-minus"></i>}
        </HandlerButton>
        <Quantity>{quantity}</Quantity>
        <HandlerButton onClick={handleIncrease}>
          <i className="fas fa-plus"></i>
        </HandlerButton>
      </QuantityHandler>
    </CardContainer>
  );
};

export default CardProdCheck;