import { formatPrice } from '../../../utils/formatPrice';
import { 
  CardsWrapperStyled,
  EnvioStyled,
  HrStyled,
  PriceContainerStyled,
  PriceTotalStyled,
  ProductosContainerStyled,
  SubtotalStyled,
  TittleProductsStyled,
  TotalStyled,
} from './ProductsCheckoutStyles';
import { useCart } from '../../Cart/hooks/useCart';
import useShipping from '../../Cart/hooks/useShipping';
import CardProdCheck from '../../CardProdCheck/CardProdCheck';

const ProductsCheckout = () => {

  const {
     cartItems,
     total,
   } = useCart();

  const { envio, tieneEnvioGratis, restanteParaEnvioGratis } = useShipping(
  cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
);


  return (
    <ProductosContainerStyled>
      <TittleProductsStyled>Tu pedido</TittleProductsStyled>
      <CardsWrapperStyled>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CardProdCheck key={item.id} {...item} />
          ))
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </CardsWrapperStyled>

      


      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal:</p>
          <span>{formatPrice(total)}</span>
        </SubtotalStyled>

        <EnvioStyled>
          <p>Envío:</p>
          <span>
            {tieneEnvioGratis ? (
              <span>Gratis</span>
            ) : (
              <span>{formatPrice(envio)}</span>
            )}
          </span>
        </EnvioStyled>

        <HrStyled />

        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(tieneEnvioGratis ? total : total + envio)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;