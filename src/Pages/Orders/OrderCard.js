import React, { useEffect, useState } from 'react';

const OrderCard = ({ order,handleDelete,handleUpdate }) => {
    const {_id, serviceName, serviceId, price, customer, phone, message,status } = order;
    const [orderService, setOrderService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [serviceId])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>{handleDelete(_id)}} className="btn btn-active btn-ghost  rounded-full">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-18 h-14">
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="badge badge-ghost badge-sm">{serviceId}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-lg">{phone}</span>
            </td>
            <td>{message}</td>
            <th>
                <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderCard;