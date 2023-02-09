import { createContext } from "react";

const UserContext = createContext({
    user:  {
            name: "Saqib",
            email: "saqib@gmail.com"
        }
})

export default UserContext
