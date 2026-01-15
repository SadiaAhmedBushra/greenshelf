"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollFade from "../Animations/ScrollFade";
import Image from "next/image";
import { FaLeaf, FaShippingFast, FaHandsHelping } from "react-icons/fa";

const featuredProducts = [
  {
    id: "1",
    name: "Eco-Friendly Notebook",
    image: "https://i.ibb.co.com/wh8t9bj6/Eco-Friendly-Notebook.webp",
    price: 25,
  },
  {
    id: "2",
    name: "Eco Bamboo Toothbrush",
    image: "https://i.ibb.co.com/0jV0TXD3/Bamboo-Toothbrush.jpg",
    price: 8,
  },
  {
    id: "3",
    name: "Organic Cotton Tote Bag",
    image: "https://i.ibb.co.com/cSdBB8pV/Organic-Cotton-Tote-Bag.jpg",
    price: 15,
  },
  {
    id: "4",
    name: "Solar Powered Desk Lamp",
    image: "https://i.ibb.co.com/HLGsFzNv/Solar-Powered-Desk-Lamp.jpg",
    price: 60,
  },
];

const FeaturedProductCard = ({ product }) => {
  return (
    <motion.div
      className="w-[280px] h-[300px] mx-auto bg-base-100 rounded-lg shadow-lg p-4 flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={50}
          style={{ objectFit: "contain", display: "block" }}
          loading="lazy"
        />
      </div>

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className=" font-bold text-primary text-xl">${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="btn btn-sm btn-primary mt-4"
      >
        View Details
      </Link>
    </motion.div>
  );
};

// Data for the new "Why Choose Eco-Friendly" cards
const ecoCards = [
  {
    id: 1,
    image: "https://i.ibb.co.com/Z1gkjr3X/eco2.webp",
    text: "Reduce pollution and protect the environment by choosing sustainable products.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/Txxkq5vd/eco3.jpg",
    text: "Conserve natural resources and decrease carbon footprint through eco-friendly choices.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/GfqMLvh9/eco4.jpg",
    text: "Support ethical practices and promote a healthier planet for future generations.",
  },
];

const Landing = () => {
  return (
    <>
      {/* Hide all scrollbars globally */}
      <style>{`
        /* Hide scrollbar for all browsers */
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        @keyframes heroSlide {
          0% {
            transform: translateX(0);
          }
          33.33% {
            transform: translateX(-100vw);
          }
          66.66% {
            transform: translateX(-200vw);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-heroSlide {
          animation: heroSlide 15s ease-in-out infinite;
          white-space: nowrap;
        }
      `}</style>

      <main className="overflow-x-hidden space-y-32">
        {/* HERO */}
        <section className="relative bg-base-100 overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-200/10" />

          <div className="relative max-w-7xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <ScrollFade>
              <div className="text-center md:text-left">
                <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                  Eco-Friendly Marketplace
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Sustainable Choices for a{" "}
                  <span className="text-primary">Greener Future</span>
                </h1>

                <p className="max-w-xl text-neutral/80 text-lg mb-10">
                  Discover thoughtfully curated eco-friendly products that
                  reduce waste, support ethical sourcing, and protect our planet
                  for generations to come.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/products" className="btn btn-primary btn-lg">
                    Explore Products
                  </Link>
                  {/* <Link href="/about" className="btn btn-outline btn-lg">
            Learn More
          </Link> */}
                </div>
              </div>
            </ScrollFade>

            {/* RIGHT IMAGE */}
            <ScrollFade delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                <Image
                  src="https://i.ibb.co.com/GvjJwzLd/Eco-Friendly-Product-Trends-min.png"
                  alt="Eco friendly lifestyle"
                  width={600}
                  height={450}
                  className="relative rounded-3xl w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* OUR GREEN PROMISE */}
        <section className="bg-base-200 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <ScrollFade>
              <h2 className="text-3xl font-bold mb-10">Our Green Promise</h2>
            </ScrollFade>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <ScrollFade delay={0.1}>
                <div className="flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-md">
                  <FaLeaf className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    100% Sustainable
                  </h3>
                  <p className="text-neutral/80">
                    Every product meets strict eco-friendly standards, from
                    sourcing to packaging.
                  </p>
                </div>
              </ScrollFade>

              <ScrollFade delay={0.3}>
                <div className="flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-md">
                  <FaShippingFast className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Fast & Green</h3>
                  <p className="text-neutral/80">
                    Efficient delivery using eco-conscious methods to reduce
                    carbon footprint.
                  </p>
                </div>
              </ScrollFade>

              <ScrollFade delay={0.5}>
                <div className="flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-md">
                  <FaHandsHelping className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                  <p className="text-neutral/80">
                    Dedicated support to help you make sustainable choices
                    easily and confidently.
                  </p>
                </div>
              </ScrollFade>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE ECO-FRIENDLY */}
        <section className="bg-base-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold mb-10 text-center">
                Why Choose Eco-Friendly?
              </h2>
            </ScrollFade>

            <div className="relative overflow-hidden">
              <div className="flex gap-8 animate-slideLeft">
                {" "}
                {[...ecoCards, ...ecoCards].map((card, idx) => (
                  <div
                    key={idx}
                    className="min-w-[280px] max-w-sm bg-base-200 rounded-lg shadow-md p-6 flex-shrink-0"
                  >
                    {" "}
                    <div className="h-40 rounded-lg overflow-hidden mb-4">
                      {" "}
                      <Image
                        src={card.image}
                        alt="Eco Friendly"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        height={80}
                        width={80}
                      />{" "}
                    </div>{" "}
                    <p className="text-neutral/90">{card.text}</p>{" "}
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>

          {/* CSS keyframes animation for infinite sliding */}
          <style>{`
            @keyframes slideLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-slideLeft {
              animation: slideLeft 20s linear infinite;
            }
          `}</style>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="bg-base-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold mb-10 text-center">
                Featured Products
              </h2>
            </ScrollFade>
            <motion.div
              className="flex gap-6 overflow-x-auto no-scrollbar px-2"
              drag="x"
              dragConstraints={{ left: -800, right: 0 }}
              dragElastic={0.1}
            >
              {featuredProducts.map((product) => (
                <FeaturedProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY GREENSHELF */}
        <section className="bg-base-200 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollFade>
              <h2 className="text-3xl font-bold mb-6">Why GreenShelf?</h2>
              <p className="text-neutral/80 text-lg leading-relaxed">
                We connect conscious consumers with products that make a real
                environmental impact. Every product on our platform has been
                carefully vetted to meet sustainability standards and promote a
                greener lifestyle.
              </p>
            </ScrollFade>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="bg-base-100 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
            {["10K+ Products", "5K+ Customers", "100% Eco Focused"].map(
              (stat, i) => (
                <ScrollFade key={i} delay={i * 0.15}>
                  <div className="p-8 bg-base-200 rounded-xl shadow-md">
                    <h3 className="text-3xl font-bold text-primary">{stat}</h3>
                  </div>
                </ScrollFade>
              )
            )}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-base-200 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  id: 1,
                  name: "Sahika",
                  review:
                    "“GreenShelf helped me switch to sustainable products without compromise. The quality and impact are unmatched.”",
                  image: "https://i.ibb.co.com/DD1njvnc/sahika.jpg",
                },
                {
                  id: 2,
                  name: "Halith",
                  review:
                    "“I love how easy it is to find eco-friendly products that actually work. Trendy items. Highly recommend GreenShelf!”",
                  image: "https://i.ibb.co.com/mVLQVBYg/customer1.webp",
                },
                {
                  id: 3,
                  name: "Yildiz",
                  review:
                    "“The curated selection of products makes it simple to reduce my carbon footprint. Fantastic service and mission.”",
                  image: "https://i.ibb.co.com/9d0G9nr/Yildiz.jpg",
                },
              ].map(({ id, name, review, image }, i) => (
                <ScrollFade key={id} delay={i * 0.15}>
                  <div className="bg-base-100 p-8 rounded-xl shadow-md flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                      <Image
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>
                    <p className="italic text-neutral/80 text-lg mb-4">
                      {review}
                    </p>
                    <p className="font-semibold text-lg">— {name}</p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-base-200 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold mb-10 text-center">
                Our Commitment to Sustainability
              </h2>
            </ScrollFade>
            <div className="grid md:grid-cols-3 gap-8">
              {["Eco Certified", "Reusable Materials", "Carbon Neutral"].map(
                (item, i) => (
                  <ScrollFade key={i} delay={i * 0.1}>
                    <div className="card bg-base-100 shadow-md p-8 text-center h-full flex flex-col justify-center">
                      <h3 className="font-semibold text-xl mb-4">{item}</h3>
                      <p className="text-sm text-neutral/70">
                        Carefully selected products aligned with sustainable
                        values.
                      </p>
                    </div>
                  </ScrollFade>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
