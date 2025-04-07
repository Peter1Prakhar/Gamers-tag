"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="relative group/card w-full h-full rounded-none border-none p-0">
        <CardItem translateZ="100" className="w-full h-full">
          <Image
            src="/image1.jpg"
            alt="thumbnail"
            fill
            className="object-cover rounded-none group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
