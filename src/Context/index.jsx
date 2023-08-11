import { createContext } from "react";
import { useState } from "react";

// creamos un contexto y posteriormente
// creamod un proveedor que nos va a encapsular
// todos los componentes que tenemos en App
// para poder proveerlos de información
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Card - Increment Quantity
  const [count, setCount] = useState(0);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState(false);

  // Shoppiing Cart - Add products to card
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
