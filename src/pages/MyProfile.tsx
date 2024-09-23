import { useNavigate } from "react-router-dom";


export const MyProfile:React.FC = () => {
    const navigate = useNavigate();
    
    const onLogOut = () => {
        navigate('/logout')
    }

    return (
        <>
        <h1>Мой профиль</h1>
        <p>Здесь должно быть фото</p>
        <p>Описание</p>
        <button onClick={onLogOut}>Выйти из учетной записи</button>
        </>
    )
}