import React, {createContext, useState } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);



    const authInfo = {}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};



export default AuthProvider;