import { Routes as ReactDomRoutes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';
import PrivateRoute from "./PrivateRoute";

// Componentes de páginas públicas
const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Productos/Productos"));
const Coleccion = lazy(() => import("../pages/Coleccion/Coleccion"));
const Contacto = lazy(() => import("../pages/Contacto/Contacto"));
const Nosotros = lazy(() => import("../pages/Nosotros/Nosotros"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));

// Componentes de páginas protegidas
const Profile = lazy(() => import("../pages/Dashboard/Profile"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));
const Felicitaciones = lazy(() => import("../pages/Felicitaciones/Felicitaciones"));
const MisOrdenes = lazy(() => import("../pages/MisOrdenes/MisOrdenes"));
const Resumen = lazy(() => import("../pages/Resumen/Resumen"));

// Componentes de carga
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <ReactDomRoutes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/coleccion" element={<Coleccion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/felicitaciones" element={<Felicitaciones />} />
        <Route path="/mis-ordenes" element={<MisOrdenes />} />
        <Route path="/resumen/:orderId" element={<Resumen />} />
        
        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Ruta protegida de checkout */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* Ruta protegida de perfil */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Manejo de rutas no encontradas */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </ReactDomRoutes>
    </Suspense>
  );
}

export default Routes;
