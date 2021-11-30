import React from 'react'
import { FoodOrder } from './FoodOrder'
export const OrderIteration = (props) => {
    const {orders}= props
    return (
        <>
        {orders.length> 0 ? (
            orders.map((order) => <FoodOrder key={order.id} order={order} />)
        ) : (
          <tr>
            <td colSpan="3">No orders</td>
          </tr>
        )}
      </>
    )
}
