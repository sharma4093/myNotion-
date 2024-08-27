import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login=()=> {
  const [mode, setMode] =useState('login');
  const {register, handleSubmit,watch,formState:{errors}} = useForm();

  const switchMode=()=>{
    setMode(!'login');
  }

  const handleClickSubmit=async (data)=>{
    if(switchMode != 'login'){
        try {
          console.log(data);
          const res = await axios.post('http://localhost:4500/user/register',data);
          console.log(res.data);
          alert('successfully registered');
        } catch (error) {
          console.log(error.message)
        }
    }
  }


    return (
      <>
        <div
          id="page-container"
          className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
        >
          {/* Page Content */}
          <main id="page-content" className="flex max-w-full flex-auto flex-col">
            <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
              {/* Sign In Section */}
              <section className="w-full max-w-xl">
                {/* Header */}
                <header className="mb-10 text-center">
                  <h1 className="mb-2 inline-flex items-center gap-2 text-2xl font-bold">
                    <svg
                      className="hi-mini hi-cube-transparent inline-block size-5 text-purple-600 dark:text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>myNotion</span>
                  </h1>
                  <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Welcome, please sign in to your dashboard
                  </h2>
                </header>
                {/* END Header */}
  
                {/* Sign In Form */}
                <div className="flex flex-col overflow-hidden border-2 rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                  <div className="grow p-5 md:px-10 md:py-7">
                  {mode==="login"?
                    (<form className="space-y-6">
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          {...register('email', {required:true})}
                          placeholder="Enter your email"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-2 leading-6 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium">
                          Password
                        </label>
                        <input
                          type="password"   
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-2 leading-6 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <div className="mb-5 flex items-center justify-between gap-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              id="remember_me"
                              name="remember_me"
                              className="size-4 rounded border border-gray-200 text-purple-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-purple-500 dark:focus:border-purple-500"
                            />
                            <span className="ml-2 text-sm">Remember me</span>
                          </label>
                          <a
                            href="#"
                            className="inline-block text-sm font-medium text-purple-600 hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-purple-700 bg-purple-700 px-6 py-3 font-semibold leading-6 text-white hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:ring focus:ring-purple-400/50 active:border-purple-700 active:bg-purple-700 dark:focus:ring-purple-400/90"
                        >
                          <svg
                            className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Sign In</span>
                        </button>
                        {/* Divider: With Label */}
                        <div className="my-5 flex items-center">
                          <span
                            aria-hidden="true"
                            className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                          />
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            or sign in with
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-0 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                          >
                            <svg
                              className="bi bi-facebook inline-block size-4 text-[#1877f2]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <span>Facebook</span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                          >
                            <svg
                              className="bi bi-twitter-x inline-block size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                            </svg>
                            <span className="sr-only">X</span>
                          </button>
                        </div>
                      </div>
                    </form> 
                    ):(
                      <form onSubmit={handleSubmit(handleClickSubmit)}>
                      {/* sign up form */}
                      <div className="space-y-1 mb-3">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                        defaultValue='' {...register("name",{required:errors.message})}
                          placeholder="Name"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-2 leading-6 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-1 mb-3">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                        defaultValue=""
                        {...register("email", {required:true})}
                        type='email'
                          placeholder="email"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-2 leading-6 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
                        />
                      <div className="space-y-1 mb-3">
                        <label htmlFor="mobile" className="text-sm font-medium">
                          Mobile No
                        </label>
                        <input
                          defaultValue=""
                          {...register('mobile_no',{required:true})}
                          type='number'
                          placeholder="Mobile No"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-2 leading-6 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
                        />
                      </div>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium">
                          Password
                        </label>
                        <input
                          type='text'
                          {...register('password',{required:true})}
                          placeholder="password"
                          className="block w-full rounded-lg border border-gray-200 px-5 py-2 leading-6 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
                        />
                      </div>
                      <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center gap-2 mt-5 rounded-lg border border-purple-700 bg-purple-700 px-6 py-3 font-semibold leading-6 text-white hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:ring focus:ring-purple-400/50 active:border-purple-700 active:bg-purple-700 dark:focus:ring-purple-400/90"
                        >
                          <svg
                            className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Sign up</span>
                        </button>
                      </form>
                    )}
                  </div>
                  {mode==="login"?(<div className="grow bg-gray-50 p-5 text-center text-sm md:px-16 dark:bg-gray-700/50">
                    Don’t have an account yet?
                    <a
                    onClick={switchMode}
                      href="#"
                      className="font-medium text-purple-600 hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      Sign up
                    </a>
                  </div>):(<div className="grow bg-gray-50 p-5 text-center text-sm md:px-16 dark:bg-gray-700/50">
                    Go Back to  
                    <a
                    onClick={()=>{setMode('login')}}
                      href="#"
                      className=" font-bold px-4 text-purple-600 hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      Login
                    </a>
                  </div>)}
                  
                </div>
              </section>
            </div>
          </main>
          {/* END Page Content */}
        </div>
        {/* END Page Container */}
  
        {/* END Pages: Sign In: Boxed */}
      </>
    );
  }
  
  export default Login;


  // const Login = () => {
//     const [data, setData] = useState(null); // Initialize with null or an empty object
//     const { register, handleSubmit } = useForm();
   
//     const onSubmit =async (data) => {
//         try {
//             const res = await axios.post('http://localhost:4500/user/signup', data);
//             alert("registered successfully",res.data);
//         } catch (Error) {
//             alert('failed',Error)
//             console.log(Error,"error");
//         }
//     };

//     const getData =async ()=>{
//         try {
//             const response = await axios.get("http://localhost:4500/user/getallusers");
//             setData(response.data.data);
//             console.log(response.data.data);
//         } catch (error) {
//             console.warn(error)
//         }
//     }
//     useEffect(()=>{
//         getData();
//     },[]);


//     return (
//         <>
//             <h1>Welcome</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input placeholder='name' {...register('name')} />
//                 <input placeholder='email' {...register('email')} />
//                 <input placeholder='mobile no' {...register('mobile_no')} />
//                 <input placeholder='password' {...register('password')} />
//                 <button type='submit'>Submit</button>
//             </form>

           
//             </>
//     );
// };

// export default Login;
