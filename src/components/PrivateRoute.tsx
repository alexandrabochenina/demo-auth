import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store";


export const PrivateRoute: React.FC = () => {
  const location = useLocation(); // Получаем текущий маршрут из хука useLocation
  const isAuthChecked = useAppSelector((state) => state.reducer.isAuthChecked);

  return isAuthChecked === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

