import { CalendarIcon, ShoppingCartIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, orderDate } = props;

  return (
    <div className="flex justify-between rounded-lg items-center mb-3 border border-black">
      <p className="flex flex-row py-5 px-10">
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
  );
};

export default OrdersCard;
