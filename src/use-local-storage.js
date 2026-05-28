import { useState,useEffect } from "react";
export default function useLocalStorage(keyName, initialValue) {
  // Add your solution here
  const [value,setValue]=useState(()=>{
    const storedValue = localStorage.getItem(keyName);
    if(storedValue !== null){
      return JSON.parse(storedValue)
    }
    return initialValue;
  })

  useEffect(()=>{
    localStorage.setItem(keyName, JSON.stringify(value));
  },[keyName,value])
  return[value,setValue];
}
