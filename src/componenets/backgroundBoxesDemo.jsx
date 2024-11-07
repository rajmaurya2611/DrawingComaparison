"use client";
import React from "react";
import { Boxes } from "./background-boxes";
import { cn } from "../lib/utils";
import Button from "./button";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-white flex flex-col items-center justify-center ">
      <div
        className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
      />
      <Boxes />
      <h1 className={cn("md:text-6xl text-xl font-extrabold text-gray-800  font-rubik relative  z-20")}>
        Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-rubik">
        SketchVision AI
        </span>
      </h1>
      <div className="text-5xl font-extrabold text-center mb-16">
      </div>
      <Button/>
    </div>
  );
}
