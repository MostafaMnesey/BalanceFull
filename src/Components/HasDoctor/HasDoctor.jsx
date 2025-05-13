import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import Doctor from '../Doctor/Doctor';
import AllDoctors from '../AllDoctors/AllDoctors';

export default function HasDoctor() {
 const {user} = useContext(AuthContext);
 console.log(user?.hasDoctor);
 
    
  return (
    <>
    {
      user?.hasDoctor ? (
        <Doctor/> 
      ):(<AllDoctors/>)
    }
    </>
    
  )
}
