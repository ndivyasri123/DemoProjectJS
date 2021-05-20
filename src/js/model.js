export const state={
 search:{},
};
export const loadUser=async function(id){
    const userdata = await fetch('https://jsonplaceholder.typicode.com/users');
        //.then((response) => response.json())
        //.then((json) => console.log(json));
     const data = await userdata.json();   
     console.log(data);
}