import { Chat } from "./components/Chat/Chat";
import { Login } from "./components/Login/Login";
import { LOGIN_ROUTE , CHAT_ROUTE } from "./conts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component : Login
    },
   
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component : Chat
    },
   
]