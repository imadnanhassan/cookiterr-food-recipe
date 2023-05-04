import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvaider = ({ chldren }) => {
   const user = { displayName: "Adnan HAssan" }
   const authInfo = {
      user
   }
   return (
      <div>
         <AuthProvaider value={authInfo}>
            {chldren}
         </AuthProvaider>
      </div>
   );
};

export default AuthProvaider;