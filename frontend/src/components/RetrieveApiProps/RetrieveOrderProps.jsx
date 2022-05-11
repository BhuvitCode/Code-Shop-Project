import React, { useEffect, useContext } from 'react'
import product_context from '../../context/ProductsContext';
import OrdersPage from '../OrdersPage';

const RetrieveOrderProps = () => {
    const GetContext = useContext(product_context)

    const { GetOrders,OrderDetails } = GetContext;

    
    useEffect(() => {
        GetOrders()
    },[])

    return (
        <>
            {OrderDetails.map((OrderDetailsArray) => {
                return <OrdersPage key={OrderDetailsArray._id} OrderDetailsArray={OrderDetailsArray}></OrdersPage>
            })}
        </>
    )
}

export default RetrieveOrderProps