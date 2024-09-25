export const gettodo=async()=>{
    const response=await fetch("https://todoapp-backend-z2om.onrender.com/api/details",
   { method :"GET",
});
return  await response.json();
};