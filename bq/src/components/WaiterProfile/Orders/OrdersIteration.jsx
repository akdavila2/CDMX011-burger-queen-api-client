import React from 'react'
import { FoodOrdersReady } from './FoodOrdersReady';

export const OrdersIteration = ({orders, closeOrder,  deleteData}) => {
    return (
        <>
        {orders.length > 0 ? (
          orders.map((order) => (
            <FoodOrdersReady
              key={order.id}
              order={order}
              deleteData={deleteData}
              closeOrder={closeOrder}
            
            />
          ))
        ) : (
          <div className= "msg-empty">
            <h2 >No orders</h2>
          </div>
        )}
      </>
    )
}

