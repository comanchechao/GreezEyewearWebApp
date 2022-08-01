import { supabase } from "../supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

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
    }
  };

  return (
    <div className="w-full p-5 h-full bg-gradient-to-r from-mainYellow to-mainGreen flex  flex-col justify-center shadow-2xl rounded align-center items-center">
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full bg-mainPurple text-gray-200 max-w-md transform overflow-hidden rounded-2xl  p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg self-center font-medium leading-6 text-white"
                  >
                    <div className="flex w-full p-5 space-y-2 h-full flex-col align-center items-center justify-center">
                      <h1 className="text-5xl">ثبت نام </h1>
                      <p className="text-7xl font-bold">کافه پینت</p>
                    </div>
                  </Dialog.Title>
                  <div
                    className="flex items-around flex-col m-1"
                    aria-live="polite"
                  >
                    {loading ? (
                      "signing up..."
                    ) : (
                      <form className="flex flex-col space-y-2 mt-5" onSubmit={handleSignUp}>
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
                            className="button mb-2 block p-4 rounded bg-pink-500 text-white"
                            aria-live="polite"
                          >
                            ثبت نام
                          </button>
                          <button
                            className="bg-mainBlue text-white rounded shadow-2xl p-2"
                            onClick={(event) => {
                              event.preventDefault();
                              logState(false);
                              setIsOpen(false);
                              closeModal();
                            }}
                          >
                            برگرد
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
        className="flex items-around flex-col m-1"
        aria-live="polite"
      >
        <div className="flex w-full text-white space-y-2 mb-8 h-full flex-col align-center items-center justify-center">
          <h1 className="text-5xl">ورود  </h1>
          <p className="text-8xl">کافه پینت</p>
        </div>
        {loading ? (
          "login in..."
        ) : (
          <form className="flex flex-col mt-4" onSubmit={handleLogin}>
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
            <div className="p-5 flex flex-col">
              <button
                className="button block p-5 mb-2 rounded bg-pink-500 text-white"
                aria-live="polite"
              >
                ورود
              </button>
              <button
                className="p-2 bg-mainBlue text-white"
                onClick={(event) => {
                  event.preventDefault();
                  openModal();
                }}
              >
                میخوای اکانت جدید درست کنی؟
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="flex w-full">
        {loggedState ? <div>not logged</div> : <div>not logged</div>}
      </div>
    </div>
  );
}
