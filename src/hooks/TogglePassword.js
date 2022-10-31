import React,{useState} from 'react'

function TogglePassword() {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [iconEye, setIconEye] = useState("eye");

  const handlePasswordVisibility=()=>{
    if (iconEye === "eye") {
      setIconEye("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (iconEye === "eye-off") {
      setIconEye("eye");
      setPasswordVisibility(!passwordVisibility);
    }
   }
    
    return({iconEye,passwordVisibility,handlePasswordVisibility})
}

export default TogglePassword