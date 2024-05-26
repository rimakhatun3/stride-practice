import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShoeRow = ({item,onDelete}) => {
    const {title,brand,price,image_url,id} = item

const handleDelete = async () =>{
await fetch(`http://localhost:3000/shoes/${id}`,{
  method:"DELETE"
 
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  Swal.fire({
    title: "Are you sure?",
    text: "Delete ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })
  onDelete(id)

})
}
  
    return (
        <tr className='text-center'>
        <th>
          {id}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14 ">
                <img src={image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <th>
           
        {title}
        </th>
        <th>
           
        {brand}
        </th>
        <th>
           
        {price}
        </th>
       
        <th>
            <Link > <button onClick={handleDelete} className="btn bg-red-500 btn-xs">Delete</button></Link>
         
        </th>
        <th>
        <Link to={`edit/${id}`}> <button className="btn bg-primary btn-xs">Edit</button></Link>
        </th>
      </tr>
    );
};

export default ShoeRow;