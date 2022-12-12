import React from "react";
import { useEffect, useState } from "react";

const Api = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const mainData = await response.json();
    // console.log(mainData);

    setdata(mainData);
  }







 useEffect( () => {
    getData();
  },[]);


  return (
    <>

   <h1 className="text-center my-3">Jsonplaceholder - Free Fake Rest API </h1>
          
      <table className="table">

     <th>ID</th>
     <th>Name</th>
     <th>UserNmae</th>
     <th>Email</th>
     <th>Adrress</th>



     {

data.map((cval) => {


    return(
        <>
        
        <tr>
            <td>{cval.id}</td>
            <td>{cval.name}</td>
            <td>{cval.username}</td>
            <td>{cval.email}</td>
            <td>{cval.address.street},{cval.address.city},{cval.address.zipcode}</td>



        </tr>
        
        

        </>
    )

})
     }
      </table>
    </>
  );
};
export default Api;
