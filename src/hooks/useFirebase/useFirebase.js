import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializFirebase from "../../Pages/Shared/Login/firebase/firebase.init";
initializFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googleHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                setUser(user)

            }).catch((error) => {
                // Handle Errors here.

            });
    }
    // crate user with email and password
    const registerAccount = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name }
                setUser(newUser)

            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    // login user with email and password
    const singInEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // Signed in 

                // ...
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    return {
        user,
        googleHandler,
        registerAccount,
        singInEmailPass
    }
};

export default useFirebase;