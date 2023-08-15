import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

function SingIn() {
  const context = useContext(ShoppingCartContext);

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 :true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 :true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome to Shoppi</h1>
      <div className="flex flex-col w-80">
        <p>
          <span>Email: </span>
          <span className="font-light text-lg">{parsedAccount?.email}</span>
        </p>
        <p>
          <span>Password: </span>
          <span className="font-light text-lg" >{parsedAccount?.password}</span>
        </p>
        <Link
          to="/">
          <button
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
            disabled={!hasUserAnAccount}>
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password</a>
        </div>
        <button
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
          disabled={hasUserAnAccount}>
          Sign up
        </button>
      </div>
    </Layout>
  );
}

export default SingIn;
