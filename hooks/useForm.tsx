import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

interface Inputs {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  address: string;
}

function Register() {
  const router = useRouter();
  const { signUp } = useAuth(); // Get signUp function from useAuth hook

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password, username, phoneNumber, address }) => {
    try {
      await signUp(email, password); // Call signUp function from useAuth hook

      // Redirect to home page upon successful registration
      router.push('/');
    } catch (error: any) { // Explicitly type error as any
      console.error('Error registering user:', error.message);
      // Handle error, display error message to the user, etc.
    }
  };

  // Remaining component code...
}

export default Register;
