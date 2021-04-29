const userContainer=document.querySelector('.user');

const showUser=async function(){
    try{
     const userdata =fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => console.log(json));

     const markup=`<tr>
     <td>${userdata.name}</td>
     <td>${userdata.username}</td>
     <td>${userdata.email}</td>
     <td>${userdata.company.name}</td>
     <td>${userdata.address.street},${userdata.address.city},${userdata.address.zipcode}</td>
     <td>${userdata.phone}</td>
     <td>${userdata.website}</td>
     </tr>`;
     userContainer.innerHTML='';
     userContainer.insertAdjacentHTML('afterbegin',markup);
    }catch(e){
        alert(e);
    }
}
//https://jsonplaceholder.typicode.com/users/1

showUser();


