import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializFirebase from "../../Pages/Shared/Login/firebase/firebase.init";
initializFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    // google login handler here
    const googleHandler = (location, history) => {
        setIsloading(true)
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
        setIsloading(false)
    }
    // crate user with email and password
    const registerAccount = (email, password, name, location, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                const location_uri = location?.state?.from || "/home"
                history.push(location_uri)
                setError('')
                userSaveDb(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: "name"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {

                });

            })
            .catch((error) => {
                setError('Your Password dosnt matched!!');
            });
        setIsloading(false)
    }
    // login user with email and password
    const singInEmailPass = (email, password, location, history) => {
        setIsloading(false)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                setError('')
                const location_uri = location?.state?.from || "/home"
                history.push(location_uri)

            })
            .catch((error) => {
                setError('Your Email and password wrong!!');
            });
        setIsloading(false)

    }
    // onAuthStateChanged here
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
            setIsloading(false)
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
    // store user data on database
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
        error,
        isLoading,
        googleHandler,
        registerAccount,
        singInEmailPass,
        logOut
    }
};

export default useFirebase;