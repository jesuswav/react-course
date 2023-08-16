import { useContext, useState, useRef } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    // Update account
    const stringfiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringfiedAccount);
    context.setAccount(data);

    setView('user-info');
  }

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span>Name: </span>
          <span className="font-light text-lg">{parsedAccount?.name}</span>
        </p>
        <p>
          <span>Email: </span>
          <span className="font-light text-lg">{parsedAccount?.email}</span>
        </p>
        <p>
          <span>Password: </span>
          <span className="font-light text-lg">{parsedAccount?.password}</span>
        </p>
        <button
          className="bg-white border border-black text-black w-full rounded-lg py-3 mt-4 mb-2"
          onClick={() => setView('edit-user-info')}
        >
          Edit user info
        </button>
      </div>
    );
  };

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="name"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="someone@example.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="********"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
          <button
          className="bg-black border border-black text-white w-full rounded-lg py-3 mt-4 mb-2"
          onClick={() => editAccount()}
        >
          Edit user info
        </button>
        </div>
      </form>
    );
  };

  const renderView = () =>
    view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-4">My Account</h1>
      {renderView()}
    </Layout>
  );
}

export default MyAccount;
