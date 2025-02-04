"use client";
// import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  // NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
// import ModeToggle from "../mode-toggle"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ModeToggle } from "./mode-toggle";

const links = [
  { name: "Providers", href: "/providers" },
  { name: "Find my Meds", href: "/find-meds" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[1rem]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>FindRx</SheetTitle>
              <SheetDescription>
                Find your prescription medications quickly and easily
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              {links.map((link) => (
                <DialogClose asChild key={link.href}>
                  <Link href={link.href}>
                    <Button variant="outline" className="w-full">
                      {link.name}
                    </Button>
                  </Link>
                </DialogClose>
              ))}
              <ModeToggle />
            </div>
          </SheetContent>
        </Dialog>

        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <h1 className="font-bold">FindRx</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 max-[825px]:hidden">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost">{link.name}</Button>
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
