import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store";


export const PublicRoute: React.FC = () => {
  const location = useLocation(); // Получаем текущий маршрут из хука useLocation
  const isAuthChecked = useAppSelector((state) => state.reducer.isAuthChecked);

  return isAuthChecked === false ? (
    <Outlet />
  ) : (
    <Navigate to="/profile" state={{ from: location }} replace />
  );
};

export default PublicRoute;