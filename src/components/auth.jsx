import { supabase } from "../supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/user/user";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, showSignUp] = useState(false);
  const [isLogged, logState] = useState(false);
  const [loggedState, checkLog] = useState(false);
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  let [isOpen, setIsOpen] = useState(false);

  // get user currently logged user

  const getSetUser = function () {
    const user = supabase.auth.user();
    if (user) {
      dispatch(userActions.setUser(user));
    }
  };

  // store configuration

  const dispatch = useDispatch();

  // modal functions

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email: emailSignUp,
        password: passwordSignUp,
      });
      if (error) throw error;
      alert("Check your email for confirmation!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("you are logged in !");
      checkLog(true);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      getSetUser();
      closeModal();
    }
  };

  return (
    <div className="lg:w-full w-screen   h-full bg-mainWhite rounded-sm flex  flex-col justify-start shadow-2xl  items-center z-50">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 top-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full lg:p-24 p-16 bg-mainWhite text-gray-200 max-w-md transform overflow-hidden rounded-sm   text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg self-center font-medium leading-6 "
                  >
                    <div className="flex w-full p-5 space-y-2 h-full flex-col align-center items-center justify-center">
                      <h1 className="text-5xl text-CoolGray-900">Sign Up</h1>
                      {/* <p className="text-7xl font-bold">کافه پینت</p> */}
                    </div>
                  </Dialog.Title>
                  <div
                    className="flex items-around flex-col m-1"
                    aria-live="polite"
                  >
                    {loading ? (
                      "signing up..."
                    ) : (
                      <form
                        className="flex flex-col space-y-2 mt-2"
                        onSubmit={handleSignUp}
                      >
                        <input
                          id="email"
                          className="inputField  text-right text-gray-900 p-2 rounded "
                          type="email"
                          placeholder="آدرس ایمیل"
                          value={emailSignUp}
                          onChange={(e) => setEmailSignUp(e.target.value)}
                        />
                        <input
                          id="password"
                          className="inputField  text-right text-gray-900 p-2 rounded"
                          type="password"
                          placeholder="پسوورد"
                          value={passwordSignUp}
                          onChange={(e) => setPasswordSignUp(e.target.value)}
                        />
                        <div className="p-5 flex flex-col ">
                          <button
                            className="button block px-5 py-3 bg-CoolGray-900 text-mainWhite mb-2 capitalize rounded font-bold text-2xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray-900  "
                            aria-live="polite"
                          >
                            Sign In
                          </button>
                          <button
                            className="button block px-5 py-3 border-2 border-dashed  border-CoolGray-900 text-CoolGray-900 mb-2 capitalize rounded font-bold text-2xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray-900  "
                            onClick={(event) => {
                              event.preventDefault();
                              logState(false);
                              setIsOpen(false);
                              closeModal();
                            }}
                          >
                            Go Back
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div
        style={isLogged ? { display: "none" } : { display: "block" }}
        className="flex items-around flex-col m-28"
        aria-live="polite"
      >
        <div className="flex w-full  space-y-2 mb-8 h-full flex-col align-center items-center justify-center">
          <h1 className="text-7xl capitalize font-extralight">login </h1>
          {/* <p className="text-8xl">کافه پینت</p> */}
        </div>
        {loading ? (
          "login in..."
        ) : (
          <form className="flex flex-col mt-2" onSubmit={handleLogin}>
            <input
              id="email"
              className="inputField my-2 text-right p-2 rounded"
              type="email"
              placeholder="آدرس ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              className="inputField my-2 text-right p-2 rounded"
              type="password"
              placeholder="پسوورد"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="lg:p-5 flex flex-col">
              <button
                className="button block px-5 py-3 bg-CoolGray-900 text-mainWhite mb-2 capitalize rounded font-bold text-2xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray-900  "
                aria-live="polite"
              >
                login
              </button>
              <button
                className="button block px-5 py-3 border-2 border-dashed   border-CoolGray-900 text-CoolGray-900 mb-2 capitalize rounded font-bold text-2xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray-900  "
                onClick={(event) => {
                  event.preventDefault();
                  openModal();
                }}
              >
                create a new account?
              </button>
            </div>
          </form>
        )}
      </div>

      {/* <div className="flex w-full">
        {loggedState ? <div>not logged</div> : <div>not logged</div>}
      </div> */}
    </div>
  );
}
