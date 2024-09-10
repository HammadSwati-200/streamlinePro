"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CarouselSpacing() {
  const testimonials = [
    {
      name: "John Doe",
      content: "This app is amazing! It has boosted my productivity tenfold.",
      image:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?t=st=1725879125~exp=1725882725~hmac=e68dd319a4d78ef679153b7c3fab95cb5f2e39c20124984597965db067e7bb60&w=740",
    },
    {
      name: "Jane Smith",
      content:
        "I love using this tool. It's a real game-changer for collaboration.",
      image:
        "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?t=st=1725879206~exp=1725882806~hmac=1810ffb86bbd244ed35108008006a99b21f5acce870ccbfc5a648af1f367629c&w=740",
    },
    {
      name: "Mike Johnson",
      content:
        "The real-time analytics feature is top-notch, helping us make quicker decisions.",
      image:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1725879144~exp=1725882744~hmac=ca87a3906edafa9d9c1a85c375fbc5ea0b77e014527a513441c8a7282cb538ca&w=740",
    },
    {
      name: "Alice Brown",
      content: "Automating repetitive tasks has saved us so much time.",
      image:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?t=st=1725879157~exp=1725882757~hmac=21a9f0e4d0c982163120961a4cfb601ea048825fe245271b5bedd23b58474041&w=740",
    },
    {
      name: "Robert Wilson",
      content:
        "Seamless collaboration across teams, this app made our workflow smoother.",
      image:
        "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1725879221~exp=1725882821~hmac=2ce0c66bdf70ca3fee41ad7946ef28761f8379b993e0069b69e2c659393ec810&w=740",
    },
  ];
  return (
    <div id="testimonials">
      <h2 className="text-4xl font-bold tracking-tight text-center">
        What Our <span className="text-red-500">Clients </span>Say
      </h2>
      <div className="w-full flex justify-center items-center md:p-20">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-5 gap-4">
                        <Avatar>
                          <AvatarImage src={item.image} />
                        </Avatar>
                        <h4>{item.name}</h4>
                      </div>
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
            {/* {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="p-6">
                      <h4>name</h4>
                      <p>
                        This app is amazing! It has boosted my productivity
                        tenfold.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))} */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
