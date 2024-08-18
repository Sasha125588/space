import { useSelector } from "react-redux";
import { userState } from "../redux/auth/user/reducer";

export interface userAuth {
    user: userState
}

export function useAuth() {
    const {email, token, id} = useSelector((state: userAuth) => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}