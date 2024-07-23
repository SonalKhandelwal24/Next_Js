import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="front-page">
        <Link href={"/addproduct"}>Add Products</Link>
        <Link href={"/productlist"}>Products List</Link>
      </div>
    </main>
  );
}
