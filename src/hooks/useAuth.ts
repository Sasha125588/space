import { useSelector } from "react-redux";

export interface userState {
    user: {
        email: string | null,
        token:string | null,
        id: string | null
    }
}

export function useAuth() {
    const {email, token, id} = useSelector((state: userState) => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}