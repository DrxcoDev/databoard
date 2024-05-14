'use client'

import Image from "next/image";
import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";
import FreeTrialbtn from '../../components/FreeTrialBTN'
import Link from "next/link";


// DASHBOARD PAGE 
export default function Dashboard() {
  const [items, setItems] = useState([
    { name: 'coffee', price: 16 },
    { name: 'tea', price: 12 },
    { name: 'milk', price: 10 }
  ]);
  
    const [total, setTotal] = useState(5);

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center">
      
      <div className="block mt-24">
        <h1 className="text-6xl font-light">The Free Trial</h1>
        <div className=" flex justify-center ">
            <Link href="/freetrial" className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full mt-12">Free Trial Active</Link>    
        </div>
        <p className=" flex justify-center ">This is the free trial. You can tried and pay after. Pay before of 30 days or we'll pay automatic</p>    
      </div>
      
    </main>
  );
}
