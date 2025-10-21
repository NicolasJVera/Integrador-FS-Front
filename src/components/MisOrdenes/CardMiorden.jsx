import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { formatDate } from "../../utils/formatDate";
import { 
  CardMiordenContainerStyles, 
  TextContainerStyles, 
  TitleStyles, 
  IDStyles, 
  TotalStyles,
  ItemsCountStyles,
  DateStyles
} from "./CardMiOrdenStyles";

function CardMiorden({ _id, items = [], total, createdAt, shippingDetails }) {
  const navigate = useNavigate();
  
  return (
    <CardMiordenContainerStyles onClick={() => navigate(`/resumen/${_id}`)}>
      <TextContainerStyles>
        <TitleStyles>Orden #{_id?.slice(-6)}</TitleStyles>
        <DateStyles>Fecha: {formatDate(createdAt)}</DateStyles>
        <ItemsCountStyles>
          {items?.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0} productos
        </ItemsCountStyles>
        {shippingDetails?.address && (
          <IDStyles>Enviar a: {shippingDetails.address}</IDStyles>
        )}
        <TotalStyles>Total: {formatPrice(total)}</TotalStyles>
      </TextContainerStyles>
    </CardMiordenContainerStyles>
  );
}

export default CardMiorden;