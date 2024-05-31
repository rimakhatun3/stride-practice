
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditItem = () => {
const items = useLoaderData()



const HandleEdit = async (e)=>{
e.preventDefault()

const form = e.target;
const image_url = form.image_url.value
const title = form.title.value
const brand = form.brand.value
const price = form.price.value
const description = form.description.value
const itemData = {
    image_url,
    title,
    brand,
    price,
    description
}


  await fetch(`http://localhost:5000/shoes/${items._id}`,{
    method:"PATCH",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify(itemData)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
        Swal.fire({
            title: "Good job!",
            text: "Data edit success",
            icon: "success"
          });
    }
    
  })



}

    return (
        <div className='w-full mx-auto pe-8 bg-stone-50'>
<h1 className='text-3xl font-bold text-center my-10'>Edit item </h1>
            <form onSubmit={HandleEdit}>
                <div className='flex flex-row justify-center items-center  '>
                <div className='w-1/2 mx-9'>
                    <p className='mb-2 ms-2'>Image Url</p>
                    <input className=' px-4 py-2 border rounded-lg w-full ' type="text" defaultValue={items?.image_url} name="image_url" id="" />
                </div>
                <div className='w-1/2'>
                    <p className='mb-2 ms-2'>Title</p>
                  <input  className='px-4 py-2 border rounded-lg w-full' defaultValue={items?.title} type="text" name="title" id="" />
                </div>
                </div>
                <div className='flex flex-row justify-center items-center  '>
                <div className='w-1/2 mx-9'>
                    <p className='my-2 ms-2'>Brand</p>
                    <input className=' px-4 py-2 border rounded-lg w-full ' type="text" name="brand" defaultValue={items?.brand} id="" />
                </div>
                <div className='w-1/2'>
                    <p className='my-2 ms-2'>Price</p>
                  <input className='px-4 py-2 border rounded-lg w-full' type="text" name="price" defaultValue={items?.price} id="" />
                </div>
                </div>
                <div className='w-full mx-9'>
                <p className='my-2 ms-2'>Description</p>
              <textarea rows={3} cols={108} className='px-4 py-4 border rounded-lg ' name="description" defaultValue={items?.description} id=""></textarea>
                </div>
                <div className='w-full mx-9 flex justify-center mt-3 pb-8'>
                    <input className='btn btn-primary w-1/2' type="submit" value="Edit Now" />
                </div>
            </form>
        </div>
    );
};

export default EditItem;