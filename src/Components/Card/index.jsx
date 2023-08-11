import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCard = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCard = context.cartProducts.filter(product => product.id === id).length > 0;

    if (isInCard) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 font-extrabold"
        >
          <CheckIcon className="h-4 w-4 text-white hover:cursor-pointer"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-bold"
          onClick={(event) => addProductsToCard(event, data.data)}
        >
          <PlusIcon className="h-4 w-4 text-black hover:cursor-pointer"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg text-black"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-1 left-1 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images?.[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
        <p className="flex justify-between">
          <span className="text-lg font-light">{data.data.title}</span>
          <span className="text-lg font-bold">${data.data.price}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;
