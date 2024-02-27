import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Import necessary functions from Firebase Auth SDK
import { auth } from '../firebase'; // Import the Firebase authentication instance

interface Inputs {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  address: string;
}

function Register() {
  const router = useRouter();
  const [registering, setRegistering] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password, username, phoneNumber, address }) => {
    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Optionally, you can also update user profile information
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Redirect or perform any additional actions upon successful registration
      // For example, redirect to a different page
      router.push('/login');
    } catch (error: any) {
      console.error('Error registering user:', error.message);
      // Handle error, display error message to the user, etc.
    }
  };

  // Function to handle signin button click
  const handleSignInClick = () => {
    router.push('/login'); // Redirect to /login route
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Libraula - Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/dptcp5"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://rb.gy/e2yjuv"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Register</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-green-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-green-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="text"
              placeholder="Username"
              className="input"
              {...register('username', { required: true })}
            />
            {errors.username && (
              <p className="p-1 text-[13px] font-light text-green-500">
                Please enter your username.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="tel"
              placeholder="Phone Number"
              className="input"
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && (
              <p className="p-1 text-[13px] font-light text-green-500">
                Please enter your phone number.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="text"
              placeholder="Address"
              className="input"
              {...register('address', { required: true })}
            />
            {errors.address && (
              <p className="p-1 text-[13px] font-light text-green-500">
                Please enter your address.
              </p>
            )}
          </label>
        </div>

        <button
          className="w-full rounded bg-[#14E509] py-3 font-semibold"
          onClick={() => setRegistering(true)}
        >
          Continue
        </button>

        <div className="text-[gray]">
          Already have an account?{' '}
          <button
            type="button" // Change type to "button"
            className="text-white hover:underline"
            onClick={handleSignInClick} // Add onClick event handler
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
