import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Link href="/freetrial" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:bg-gradient-to-r from-pink-500 to-purple-500">Free Trial</Link>
    </div>

  );
}