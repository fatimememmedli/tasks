"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import app from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, getFirestore, collection } from "firebase/firestore";
type Props = {};

function AddUser({}: Props) {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const router = useRouter();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            router.push("/users");
          }}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Users
        </button>
      </div>
      <div>Add Users</div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <form action="">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              let obj = {
                name: name,
                password: pass,
              };
              const addUser = async () => {
                let obj = {
                  name: name,
                  password: pass,
                };
                const db = getFirestore(app);
                const newUserRef = doc(collection(db, "users"));
                await setDoc(newUserRef, obj);
              };
              addUser();
              router.push("/users");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ADD USER
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
