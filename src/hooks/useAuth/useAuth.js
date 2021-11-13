import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
// useAuth hook here
const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;