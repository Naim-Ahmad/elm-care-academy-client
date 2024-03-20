"use client"
import { useState } from "react"

export default function useToggle(value) {
  const [toggle, setToggle] = useState(value ? value : false)
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  return [toggle, toggleHandler]
}