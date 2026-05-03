'use client';
import { Button } from "@/components/ui/button";
import React from 'react'
import { useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const UserDropdown = () => {
const router:any = useRouter();

const handleSignOut = async (): Promise<void> => {
  router.push("/sign-in");
}

const user = {name: 'Arjoma', email:'arjomasaha008@gmail.com'}
  return (
   <DropdownMenu>
       <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://www.vecteezy.com/free-vector/stock-market-logo" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
               {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md-flex flex-col items-start">
             <span className='text-based'></span>
          </div>
        </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
       </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default UserDropdown
