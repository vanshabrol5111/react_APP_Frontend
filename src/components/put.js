export const puttodo=async(id,title,description)=>{

    const response=await fetch("https://todoapp-backend-z2om.onrender.com/api/changes",
   { method :"PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        id:id,
        title:title,
description:description})
});
return  await response.json();
};