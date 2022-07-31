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
    <div className="w-full lg:w-1/2 p-5 h-full bg-Amber-400 flex  flex-col justify-center shadow-2xl rounded align-center items-center">
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
                <Dialog.Panel className="w-full bg-purple-500 text-gray-200 max-w-md transform overflow-hidden rounded-2xl  p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg self-center font-medium leading-6 text-white"
                  >
                    <div className="flex w-full h-full flex-col align-center items-center justify-center">
                      <h1 className="text-5xl">Supabase + React</h1>
                      <p className="text-8xl">Sign to cafe</p>
                    </div>
                  </Dialog.Title>
                  <div
                    className="flex items-around flex-col m-1"
                    aria-live="polite"
                  >
                    {loading ? (
                      "signing up..."
                    ) : (
                      <form className="flex flex-col" onSubmit={handleSignUp}>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          className="inputField text-gray-900 p-2 rounded "
                          type="email"
                          placeholder="Your email"
                          value={emailSignUp}
                          onChange={(e) => setEmailSignUp(e.target.value)}
                        />
                        <label htmlFor="email">Password</label>
                        <input
                          id="password"
                          className="inputField text-gray-900 p-2 rounded"
                          type="password"
                          placeholder="Your password"
                          value={passwordSignUp}
                          onChange={(e) => setPasswordSignUp(e.target.value)}
                        />
                        <div className="p-5 flex flex-col ">
                          <button
                            className="button mb-2 block p-4 rounded bg-pink-500 text-white"
                            aria-live="polite"
                          >
                            signup
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
                            back
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
        <h1 className="text-5xl">Supabase + React</h1>
        <p className="text-8xl">login to cafe</p>
        {loading ? (
          "login in..."
        ) : (
          <form className="flex flex-col" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField p-2 rounded"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Password</label>
            <input
              id="password"
              className="inputField p-2 rounded"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="p-5 flex flex-col">
              <button
                className="button block p-5 mb-2 rounded bg-pink-500 text-white"
                aria-live="polite"
              >
                login
              </button>
              <button
                className="p-2 bg-mainBlue text-white"
                onClick={(event) => {
                  event.preventDefault();
                  openModal();
                }}
              >
                don't have an account?
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
