import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({children})=>{
 const auth = getAuth(app)
 const goggleProvider = new GoogleAuthProvider()

const [user ,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const signIn = ( email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}

const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

const signInWithGoggle = ()=>{
    return signInWithPopup(auth,goggleProvider)
}


useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        if (currentUser) {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
          } else {
            setLoading(false);
          }

    })

return ()=>{
        return unSubscribe ()
}

},[user,loading])


const AuthInfo ={
    signIn,
    createUser,
    logOut,
    signInWithGoggle,
    loading,
    user
}

return (<AuthContext.Provider value={AuthInfo} >
{children}
</AuthContext.Provider>
    
)
     
}

export default AuthProvider;