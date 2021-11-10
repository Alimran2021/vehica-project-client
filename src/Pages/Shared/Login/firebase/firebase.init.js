import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializFirebase = () => {
    return initializeApp(firebaseConfig);
}

export default initializFirebase
