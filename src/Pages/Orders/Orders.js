import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import OrderCard from './OrderCard';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user,logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email,logOut])

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('Token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success("DELETED SUCCESSFULLY !!");
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining);
            }else{
                toast.error("FAIL TO DELETE!")
            }
        })
    }


    const handleUpdate = (id) =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('Token')}`

            },
            body:JSON.stringify({status:'Approved'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(order => order._id !== id);
                const approved = orders.find(order => order._id === id);
                approved.status = 'Approved';
                const newOrders = [approved,...remaining];
                setOrders(newOrders);
                toast.success("UPDATED SUCCESSFULLY!!");
            }else{
                toast.error("UPDATED FAILED!!");

            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Customer</th>
                            <th>Message</th>
                            <th>Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderCard key={order._id} order={order} handleDelete={handleDelete} handleUpdate={handleUpdate}></OrderCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;