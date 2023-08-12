import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  console.log("Order: ", context.order)

  return (
    <Layout>
      <div className="mb-3">
        <h1 className="">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            orderDate={order.date}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
