"use client";
import React, { useState, useEffect } from "react";
import app from "./../../firebase/config";
import { useRouter } from "next/navigation";

import { useParams } from "next/navigation";
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
function UserDetail({}: Props) {
  const params = useParams();
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
  //   console.log(params);
  let user: Data | undefined = data.find((elem) => elem.id == params.userID);
  //   console.log(user);
  return (
    <div>
      <button
        onClick={() => {
          router.push("/users");
        }}
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
        Users
      </button>
      <h1 className="text-2xl">
        Name:
        <span className="text-blue-600">{user?.name}</span>
      </h1>
    </div>
  );
}

export default UserDetail;
