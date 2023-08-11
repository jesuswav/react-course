import { XMarkIcon } from '@heroicons/react/24/outline';

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl?.[0]} alt={title} />
        </figure>
        <p className="text-sm font-light"> {title} </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium"> {price} </p>
        <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black-500 hover:cursor-pointer"></XMarkIcon>
      </div>
    </div>
  );
};

export default OrderCard;