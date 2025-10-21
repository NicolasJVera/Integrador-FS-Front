

const ENVIO_GRATIS_DESDE = 15000;
const ENVIO_COSTO = 5000;

const useShipping = (total) => {
  const tieneEnvioGratis = total >= ENVIO_GRATIS_DESDE;
  const envio = ENVIO_COSTO;
  const descuentoEnvio = tieneEnvioGratis ? ENVIO_COSTO : 0;
  const totalConEnvio = total + envio - descuentoEnvio;

  const restanteParaEnvioGratis = tieneEnvioGratis ? 0 : ENVIO_GRATIS_DESDE - total;

  return {
    envio,
    descuentoEnvio,
    totalConEnvio,
    restanteParaEnvioGratis,
    tieneEnvioGratis,
  };
};

export default useShipping;
