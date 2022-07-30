import { useEffect, useState } from 'react'
import  {supabase}  from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [signUp , showSignUp] = useState(false)
  const [isLogged , logState] = useState(false)
  const [loggedState , checkLog] = useState(false)



  const handleSignUp = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ email , password })
      if (error) throw error
      alert('Check your email for confirmation!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email , password })
      if (error) throw error
      alert('you are logged in !')
      checkLog(true)
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
      
    }
  }


  return (
    <div className="w-1/2 h-full bg-Amber-400 flex  flex-col justify-center shadow-2xl rounded align-center items-center">
      <div style={ isLogged ? { display:'block'} : {display : 'none'} }   className="flex items-around flex-col m-1" aria-live="polite">
        <h1 className="text-5xl">Supabase + React</h1>
        <p className="text-8xl">Sign to cafe</p>
        {loading ? (
          'signing up...'
        ) : (
          <form className='flex flex-col' onSubmit={handleSignUp}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField p-2 rounded "
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
            <div className="p-5 flex flex-col ">
              <button className="button mb-2 block p-4 rounded bg-pink-500 text-white" aria-live="polite">
              signup
            </button>
             <button className='bg-mainBlue text-white rounded shadow-2xl p-2' onClick={(event) => {
              event.preventDefault()
              logState(false)
            }
              }>back</button>
            </div>
          </form>
        )}
      </div>

       <div style={ isLogged ? { display:'none'} : {display : 'block'} } className="flex items-around flex-col m-1" aria-live="polite">
        <h1 className="text-5xl">Supabase + React</h1>
        <p className="text-8xl">login to cafe</p>
        {loading ? (
          'login in...'
        ) : (
          <form className='flex flex-col' onSubmit={handleLogin}>
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
              <button className="button block p-5 mb-2 rounded bg-pink-500 text-white" aria-live="polite">
              login
            </button>
            <button className='p-2 bg-mainBlue text-white' onClick={(event) => {
              event.preventDefault()
              logState(true)
            }
              }>don't have an account?</button>
        </div>
          </form>
        )}
      </div>

      <div className="flex w-full">
       {loggedState ?  (
       <div>
       not logged
       </div>
       ) : (
       <div>
        not logged
       </div>
       )}
      </div>
    </div>
  )
}