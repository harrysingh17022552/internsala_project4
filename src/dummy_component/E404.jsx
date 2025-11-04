import { Link } from "react-router-dom";

export default function E404() {
  return (
    <div className="flex flex-col gap-8 w-screen h-screen justify-center items-center p-4">
      <h1 className="text-5xl text-red-600">404 : Page Not Found !</h1>
      <Link to="/" className='underline underline-offset-4 text-blue-700'>Go back</Link>
    </div>
  );
}
