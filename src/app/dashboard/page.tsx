'use client'

import Image from "next/image";
import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";
import FreeTrialbtn from '../../components/FreeTrialBTN'
import { collection, addDoc, getDoc, query, QuerySnapshot, Query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; 

interface Item {
  name: string;
  price: number;
  id?: string; // Añadimos 'id' opcional ya que lo estamos agregando al objeto
}

// DASHBOARD PAGE 
export default function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  
  const [newItem, setNewItem] = useState({name: '', price: ''});
  const [total, setTotal] = useState(0);

  // Add item to Database
  const addItem = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price !== '') {
      const newItemWithNumericPrice = {
          ...newItem,
          price: parseFloat(newItem.price) // Convertir el precio a número
      };
      // setItems([...items, newItemWithNumericPrice]);

      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItemWithNumericPrice.price
      });
      setNewItem({name: '', price: ''});
    }
  }



  // Read items from database
  useEffect(() => {
    const q = query(collection(db, 'items'))
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      let itemsarr: Item[] = [];

      querySnapshot.forEach(doc => {
        itemsarr.push({...doc.data(), id: doc.id} as Item)
      });
      setItems(itemsarr);

      // Read and + the elements
      const calculateTotal = () => {
        const TotalPrice = itemsarr.reduce((sum, item) => sum + parseFloat(item.price.toString()), 0);
        setTotal(TotalPrice)
      };
      calculateTotal();
      return () => unsuscribe();


    })

  }, [])

  // Delete items from database
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, 'items', id));
  }

  return (
    <main className="min-h-screen">
      <div className="p-12 w-full flex justify-between">
        <FreeTrialbtn />
      </div>

      <div className="pl-24 mt-12 pr-24">
        <h1 className="text-4xl">Dashboard of our community</h1>
        <div className="dashboard mt-32 rounded-lg p-4 bg-slate-800">
          <form action="" className="grid grid-cols-6 items-center text-black">
            <input value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} className="col-span-3 p-3 border" type="text" placeholder='Enter item' />
            <input value={newItem.name} onChange={(e) => setNewItem({...newItem, price: e.target.value})} className="col-span-2 p-3 border mx-3" type="number" placeholder='Enter Price' />
            <button onClick={addItem} className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl" type="submit">+</button>
          </form>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="my-4 w-full flex justify-between bg-slate-950">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <button onClick={() => deleteItem(item.id)} className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16">X</button>
              </li>
            ))}
          </ul>
          {items.length > 0 ? (
            <div className="flex justify-between p-3">
              <span>Total</span>
              <span>${total}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      
    </main>
  );
}
