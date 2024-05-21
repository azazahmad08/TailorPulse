import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider,updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';

const auth = getAuth(app);


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const  githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const updateUserProfile = async (user, profileData) => {
        try {
            // Update user profile with displayName and photoURL
            await updateProfile(user, profileData);
            console.log("User profile updated successfully:", profileData);
        } catch (error) {
            console.error("Error updating user profile:", error);
            // Handle error here if needed
            throw error; // Rethrow the error for handling in the calling code
        }
    };

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // After user creation, update user profile with name and photo URL
            return updateUserProfile(userCredential.user, { displayName: name, photoURL: photoURL });
        });
    };
    

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
        
    }

    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }

    

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('current user:',currentUser)
        });
        return() =>{
            unSubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
  };

export default AuthProvider;