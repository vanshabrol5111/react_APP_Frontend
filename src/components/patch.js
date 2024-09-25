export const patchtodo=async(id,iscompleted)=>{

    const response=await fetch("https://todoapp-backend-z2om.onrender.com/api/change",
   { method :"PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        id:id,
        iscompleted:iscompleted}),


});
return  await response.json();
};