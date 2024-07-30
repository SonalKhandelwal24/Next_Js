import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Book Library Lists</h1>
      <div className="space-y-4">
        <Link href="/bookList" className="text-blue-500 hover:text-blue-700">Book List </Link>
        <Link href="/addBook" className="text-blue-500 hover:text-blue-700">Add Book </Link>
      </div>
    </div>
  );
}
