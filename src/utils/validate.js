export const validateForm=(email,password)=>{
   const IsValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const IsValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    console.log(IsValidEmail);
    console.log(IsValidPassword);
    if(!IsValidEmail) return "Email Id is not valid ";
    if (!IsValidPassword) return "Password does not meeet the requirements";
    return null;

      
} 