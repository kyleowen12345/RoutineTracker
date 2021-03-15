import React, {useState, useEffect, useContext, createContext} from 'react';
import firebase from './firebase'
import { useRouter } from 'next/router'
const authContext = createContext();

export function AuthProvider({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};
 


function useProvideAuth() {
    const [user, setUser] = useState(null);
    const router = useRouter()
    const handleUser = async (rawUser) => {
        if(rawUser){
            const user = rawUser;
            // const {token, ...userWithoutToken}=user
            // createUser(user.uid, userWithoutToken)
            setUser(user)
            // cookie.set('fast-feedback-auth',true,{expires:1})
            return user
        }else{
            setUser(false)
            // cookie.remove('fast-feedback-auth')
            return false
        }
        
    }
   const createUser=(email,password)=>{
   return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      console.log(userCredential)
      // ...
    })
    .catch((error) => {
     console.log(error)
      // ..
    });
   }
    const signinWithGithub = () => {
        
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);
                router.push('/dashboard')
            }).catch(err=>{
                console.log(err.message)
            })
    };
    const signinWithGoogle = () => {
        
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
                router.push('/dashboard')
            }).catch(err=>{
               console.log(err.message)
            })
    };
    const signinFaceBook = () => {
        
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((response) => {
                handleUser(response.user);
                router.push('/dashboard')
            }).catch(err=>{
                console.log(err.message)
            })
    };


    const signout = () => {
       
        return firebase
            .auth()
            .signOut()
            .then(() => {
                cookie.remove('fast-feedback-auth')
                handleUser(false);
            });
    };
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGithub,
        signinWithGoogle,
        signinFaceBook,
        signout,
        createUser
    };
}

