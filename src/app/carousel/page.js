"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      label:
        "We craft lightning-fast, scalable websites tailored to your brand. From sleek portfolios to robust platforms—we build it all, pixel-perfect. Your vision, brought to life with code that performs and impresses.",
      image: "car1.jpg",
    },
    {
      label:
        "We create stunning, user-first mobile apps that captivate and convert. From concept to launch, we deliver seamless experiences on every device. Your app idea? We turn it into a game-changing reality.",
      image: "car2.jpg",
    },
    {
      label:
        "We don’t just market—we make your brand unforgettable. With data-driven strategies, we put you ahead of trends and competition. More clicks, more leads, more growth—every campaign, every time.",
      image: "car3.jpg",
    },
    {
      label:
        "Design that speaks, flows, and feels just right. We turn complex ideas into beautiful, intuitive interfaces. Every pixel we touch enhances your user's journey.",
      image: "car2.jpg",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <div className="relative bg-gray-100 flex flex-col items-center">
      <div className="relative w-full h-[60vh] overflow-hidden shadow-lg">
        <img
          src={services[currentIndex].image}
          alt={services[currentIndex].label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4">
            <span className="text-white text-2xl font-semibold text-center block">
              {services[currentIndex].label}
            </span>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-[#0891b2] hover:text-white transition-colors"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
