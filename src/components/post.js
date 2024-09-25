export const posttodo=async(title,description)=>{
    console.log(title,description,"posttst")
    const response=await fetch("https://todoapp-backend-z2om.onrender.com/api/add",
   { method :"POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title:title,description:description }),


});
return  await response.json();
};