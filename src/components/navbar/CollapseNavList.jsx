"use client"

import { Button, Collapse } from "@material-tailwind/react"
import Link from "next/link"
import { useSelector } from "react-redux"


export default function CollapseNavList({ navList }) {
  const { isShowNav } = useSelector(state => state.toggleSlice)

  return (
    <Collapse open={isShowNav}>
      {navList}
      <div className="flex items-center gap-x-1">
        <Button fullWidth variant="text" size="sm" className="text-xl">
          <Link href="/login">
            <span>লগইন</span>
          </Link>
        </Button>
        <Button fullWidth variant="gradient" size="sm" className="">
          <Link href="/register">
            <span>রেজিস্টার</span>
          </Link>
        </Button>
      </div>
    </Collapse>
  )
}