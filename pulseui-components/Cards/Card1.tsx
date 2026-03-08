"use client"

import React from "react"
import { motion, MotionProps } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./CardStructure/Card"

type CardProps = MotionProps & {
  children: React.ReactNode
  className?: string
}

export default function Card1({ children, className, ...motionProps }: CardProps) {
  return (
    <Card className=""
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.4 }}
>


<CardTitle>Title for {children}</CardTitle>

<CardDescription>
Description text

</CardDescription>

<CardContent>
Main card content
</CardContent>

<CardFooter>
Footer text
</CardFooter>

</Card>
  )
}