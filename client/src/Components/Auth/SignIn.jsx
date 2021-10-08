import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/Reducer/Auth/Auth.action'

export default function SignIn({ isOpen, setIsOpen}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()

  const handleChange = (e) => setUserData((prev) => ({...prev,  [e.target.name]: e.target.value }))
  /*const handleChange = (e) => {
    const demo = {
      email: "",
      password: "",
    }
    if (e.target.name === "email"){
      demo.email = e.target.value
    }
    else {
      demo.password = e.target.value
    }
    setUserData(demo)

  }*/

  function closeModal() {
    setIsOpen(false)
  }

  const Submit = () => {
    closeModal()
    dispatch(signIn(userData))
    setUserData({
      email: "",
      password: "",
    })
  }

  const googleSignIn = () => (
    window.location.href = "http://localhost:4000/auth/google"
  )
  

  return (
    <>
      
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                
                <div className="mt-2 w-full flex flex-col gap-3 ">
                  <button onClick={googleSignIn} className="flex items-center justify-center px-3 py-2 gap-2 w-full rounded-lg border border-gray-400 bg-white text-gray-700 hover:bg-gray-200">
                      Sign In with Google  <FcGoogle className="w-6 h-6" />
                  </button>
                  <h1 className="text-2xl text-center font-light mt-2 ">OR</h1>
                  
                  <form className="flex flex-col gap-3 items-center">
                    <div className=" w-full flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="email@email.com"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                        />
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="**********"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                        />
                    </div>
                    <div className="cursor-pointer text-center w-full bg-zomato-400 text-white py-2 px-3 rounded-lg" onClick={Submit}>
                        Sign In
                    </div>
                  </form>
                </div>

                
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
