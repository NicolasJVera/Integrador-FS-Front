import { useNavigate } from "react-router-dom";
import { FelicitacionesStyles, TittleStyles, ButtonStyles, ParagraphStyles } from "./FelicitacionesStyles";

const Felicitaciones = () => {
    const navigate = useNavigate();
    return (
        <FelicitacionesStyles>
            <TittleStyles>Gracias por tu compra</TittleStyles>
            <ParagraphStyles>Podes ver tu pedido en la sección de mis ordenes</ParagraphStyles>
            <ButtonStyles onClick={() => navigate('/mis-ordenes')}>
                Regresar a mis ordenes
            </ButtonStyles>
        </FelicitacionesStyles>
    );
};

export default Felicitaciones;