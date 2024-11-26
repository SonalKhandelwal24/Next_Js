"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const navigate = (name: any) => {
    router.push(name);
  }
  
  return (
    <main>
      <h1 className=" font-bold text-3xl text-white">
        First Next Js Project
      </h1>
      <div className="m-8"> <Link href={'/about'} className="text-xl text-blue-500 my-32"> Go To About Page </Link> </div>
      <div className="m-8"> <Link href={'/login'} className="text-xl text-blue-500 my-32"> Go To Login Page </Link> </div>
      <div className="m-8"> <Link href={'/productlist2'} className="text-xl text-blue-500 my-32"> Go To Product list 2 Page </Link> </div>

      <button onClick={() => navigate('/about')}>Go to About Page</button>
      <button onClick={() => navigate('/login')}>Go to Login Page</button>
      <button onClick={() => navigate('/studentlist')}>Go to Student list</button>
      <button onClick={() => navigate('/productlist')}>Go to Product list</button>
      <button onClick={() => navigate('/productlist2')}>Go to Product list 2</button>
      <button onClick={() => navigate('/productlist3')}>Go to Product list 3</button>

    </main>
  );
}
