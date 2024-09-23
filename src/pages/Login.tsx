import { useDispatch } from "react-redux"
import { logIn } from "../reducer/reducer"

export const LogIn: React.FC = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logIn());
    };

    return (
        <div style={{width:'300px',display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px'}}>
          <h1>Вход в учетную запись</h1>
          <input type="email"></input>
          <input type="password"></input>
          <button type="button" onClick={handleClick}>Войти</button>
        </div>
    );
}

export default LogIn

