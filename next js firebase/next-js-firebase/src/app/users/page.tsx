"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import app from "./../firebase/config";
import { useRouter } from "next/navigation";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";
type Props = {};
interface Data {
  id: string;
  name: string;
  password: string;
}
function Users({}: Props) {
  const router = useRouter();
  const [data, setData] = useState<Data[]>([]);
  const getData = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "users"));
    let arr: Data[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let obj = {
        id: doc.id,
        name: doc.data().name,
        password: doc.data().password,
      };
      //   console.log(obj);
      arr.push(obj);
      setData(arr);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log(data);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            router.push("/addUser");
          }}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Add User
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Home
        </button>
      </div>
      <h1>Users</h1>
      <ul>
        {data &&
          data.map((elem, i) => {
            return (
              <li key={i}>
                {elem.name}
                <button
                  onClick={() => {
                    const deleteUser = async () => {
                      const db = getFirestore(app);
                      await deleteDoc(doc(db, "users", elem.id));
                    };
                    deleteUser();
                    setData(data.filter((element) => element.id != elem.id));
                  }}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    router.push(`/users/${elem.id}`);
                  }}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Detail
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Users;
