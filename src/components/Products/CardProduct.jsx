import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart/cartSlice";
import {
  Card,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  AddToCartButton,
  ProductDesc,
  Notification
} from "./CardsProductsStyles";
import { formatPrice } from "../../utils/formatPrice";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from 'react-hot-toast';

function CardProduct({ _id, id, name, description, price, image }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Estado para la notificación
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    // Gate de autenticación: si no está logueado, bloquear y redirigir
    if (!isAuthenticated) {
      toast.error('Debes iniciar sesión para agregar productos');
      navigate('/login', { state: { from: location } });
      return;
    }

    // Agregar el producto al carrito
    dispatch(addToCart({ id: _id || id, img: image, name, desc: description, price }));

    // Mostrar la notificación
    setShowNotification(true);

    // Ocultar la notificación después de 2 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
        {isAuthenticated ? (
          <AddToCartButton onClick={handleAddToCart}>
            Agregar al carrito
          </AddToCartButton>
        ) : (
          <AddToCartButton onClick={() => { toast.error('Debes iniciar sesión para agregar productos'); navigate('/login', { state: { from: location } }); }} title="Inicia sesión para agregar productos" aria-disabled="true">
            Inicia sesión para agregar al carrito
          </AddToCartButton>
        )}
      </ImageContainer>

      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductDesc>{description}</ProductDesc>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </ProductInfo>

      
      {showNotification && (
        <Notification>
          ¡Producto agregado al carrito!
        </Notification>
      )}
    </Card>
  );
}

export default CardProduct;
