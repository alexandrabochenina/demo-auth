import { useDispatch } from "react-redux"
import { logOut } from "../reducer/reducer"
import { useEffect } from "react"


export const LogOut: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(logOut())
    }, [])

    return (
      <>
        <h1>Выходим из учетной записи</h1>
      </>
    );
}

export default LogOut