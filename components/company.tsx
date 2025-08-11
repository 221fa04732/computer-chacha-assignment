"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Company() {
  return (
    <div className="h-[532px] w-full flex flex-col antialiased items-center justify-center relative overflow-hidden" style={{"background": "linear-gradient(355.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%"
}}>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    url : "/logo.png"
  },{
    url : "/logo1.png"
  },{
    url : "/logo2.png"
  },{
    url : "/logo3.png"
  },{
    url : "/logo4.png"
  },{
    url : "/logo5.png"
  },{
    url : "/logo6.png"
  }
];
