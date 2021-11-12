import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializFirebase from "../../Pages/Shared/Login/firebase/firebase.init";
initializFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState('')
    const [isLoading, setIsloading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googleHandler = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                setUser(user)
                const location_uri = location?.state?.from || "/home"
                history.push(location_uri)
                userSaveDb(user.email, user.displayName, 'PUT')

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
                userSaveDb(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: "name"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    // login user with email and password
    const singInEmailPass = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // Signed in 
                setUser(user)
                const location_uri = location?.state?.from || "/home"
                history.push(location_uri)
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }

        });
        return () => unsubscribe
    }, [])

    // get admin
    useEffect(() => {
        const url = `https://guarded-savannah-01945.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const userSaveDb = (email, name, method) => {
        const newUser = { email: email, displayName: name }
        fetch('https://guarded-savannah-01945.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    // signOut handler here
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({})
            })
            .catch((error) => {
                // An error happened.
            });

    }
    return {
        user,
        admin,
        googleHandler,
        registerAccount,
        singInEmailPass,
        logOut
    }
};

export default useFirebase;