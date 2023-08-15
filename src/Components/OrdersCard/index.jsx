import {
  CalendarIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { orderNumber, totalPrice, totalProducts, orderDate } = props;

  return (
    <div className="flex flex-col rounded-lg items-start mb-3 border border-black">
      <p className="pt-4 ml-11 font-medium">Order: {orderNumber + 1}</p>
      <div>
        <p className="flex flex-row py-2 px-10">
          <div className="flex flex-row items-center mr-8">
            <CalendarIcon className="h-8 w-8 text-black-500 hover:cursor-pointer"></CalendarIcon>
            <span className="text-lg my-3">{orderDate}</span>
          </div>
          <div className="flex flex-row items-center mr-8">
            <ShoppingCartIcon className="h-8 w-8 text-black-500 hover:cursor-pointer"></ShoppingCartIcon>
            <span className="text-lg my-3">{totalProducts}</span>
          </div>
          <div className="flex flex-row items-center">
            <CurrencyDollarIcon className="h-8 w-8 text-black-500 hover:cursor-pointer"></CurrencyDollarIcon>
            <span className="text-lg my-3">{totalPrice}</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
