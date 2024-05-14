import Image from "next/image";
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-6xl">Create databoard</h1> <br />
      <h1 className="text-6xl">Now</h1>
      <div className="mt-12 justify-self-stretch">
        <p className="text-2xl w-72">Databoard is a modern website that help you in the creation of databoards. </p>
        <div className="mt-8 flex">
          <button className="text-violet-700 border-b-0 hover:text-violet-500 border-b-4"><a href="">Learn More</a></button>
          <button className="text-violet-700 border-b-0 hover:text-violet-500 border-b-4 ml-8"><a href="">Create Now</a></button>
        </div>
      </div>
    </main>
  );
}
