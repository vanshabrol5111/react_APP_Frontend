export const deletetodo=async(id)=>{
console.log(id,"vansh")
    const response=await fetch("https://todoapp-backend-z2om.onrender.com/api/remove",
   { method :"DELETE",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id:id}),


});
return  await response.json();
};