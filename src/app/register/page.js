import RegisterForm from "./RegisterForm";
import LoginForm from "./RegisterForm";

export default function page() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="wrapper w-full bg-white shadow-md p-4 md:w-[600px]">
        <h1 className="text-2xl text-center font-bold">Sign Up</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
