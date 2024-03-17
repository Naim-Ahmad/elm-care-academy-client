"use client"

import { Button, Collapse } from "@material-tailwind/react"
import { useSelector } from "react-redux"


export default function CollapseNavList({ navList }) {
  const { isShowNav } = useSelector(state => state.toggleSlice)

  return (
    <Collapse open={isShowNav}>
      {navList}
      <div className="flex items-center gap-x-1">
        <Button fullWidth variant="text" size="sm" className="">
          <span>Log In</span>
        </Button>
        <Button fullWidth variant="gradient" size="sm" className="">
          <span>Sign in</span>
        </Button>
      </div>
    </Collapse>
  )
}