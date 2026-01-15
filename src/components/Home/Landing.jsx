import React from 'react';

// import ScrollFade from '@/components/animations/ScrollFade';
import Link from 'next/link'
import ScrollFade from '../Animations/ScrollFade';

const Landing = () => {
     return (
    <main className="overflow-x-hidden">

      {/* HERO */}
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <ScrollFade>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable Choices for a <span className="text-primary">Greener Future</span>
            </h1>
            <p className="max-w-xl mx-auto text-neutral/80 mb-8">
              Discover eco-friendly products that reduce waste and protect our planet.
            </p>
            <Link href="/products" className="btn btn-primary">
              Browse Items
            </Link>
          </ScrollFade>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-base-200">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-6">
          {['Eco Certified', 'Reusable Materials', 'Carbon Neutral'].map((item, i) => (
            <ScrollFade key={i} delay={i * 0.1}>
              <div className="card bg-base-100 shadow-md p-6 text-center h-full">
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
                <p className="text-sm text-neutral/70">
                  Carefully selected products aligned with sustainable values.
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <ScrollFade>
            <h2 className="text-3xl font-bold mb-10 text-center">Popular Categories</h2>
          </ScrollFade>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Kitchen', 'Lifestyle', 'Travel', 'Office'].map((cat, i) => (
              <ScrollFade key={i} delay={i * 0.1}>
                <div className="card bg-base-200 p-6 text-center h-full">
                  <p className="font-medium">{cat}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GREENSHELF */}
      <section className="bg-base-200">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <ScrollFade>
            <h2 className="text-3xl font-bold mb-4">Why GreenShelf?</h2>
            <p className="text-neutral/80">
              We connect conscious consumers with products that make a real environmental impact.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-6 text-center">
          {['10K+ Products', '5K+ Customers', '100% Eco Focused'].map((stat, i) => (
            <ScrollFade key={i} delay={i * 0.1}>
              <div className="p-6 bg-base-200 rounded-xl">
                <h3 className="text-2xl font-bold text-primary">{stat}</h3>
              </div>
            </ScrollFade>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <ScrollFade>
            <p className="italic text-neutral/80">
              “GreenShelf helped me switch to sustainable products without compromise.”
            </p>
            <p className="mt-4 font-semibold">— Eco Conscious Buyer</p>
          </ScrollFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <ScrollFade>
            <h2 className="text-3xl font-bold mb-6">Start Your Green Journey Today</h2>
            <Link href="/products" className="btn btn-primary btn-lg">
              Explore Products
            </Link>
          </ScrollFade>
        </div>
      </section>

    </main>
  );
};

export default Landing;

