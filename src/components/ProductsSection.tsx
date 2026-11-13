import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { products } from '@/data/site';
import { productIcons } from '@/components/icons/productIcons';

export default function ProductsSection() {
  return (
    <section id="products" className="bg-white py-12 md:py-16 lg:py-24 scroll-mt-32">
      <AnimateOnScroll>
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]">
              Products
            </h2>
            <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
          </div>
          <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
            Our HirushCore suite of industrial software products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col p-6 border border-gray-100 border-t-[3px] border-t-[#B81005] hover:border-[#B81005] transition-all duration-300 group"
                style={{ background: '#F9F9F9', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300 flex-shrink-0"
                    style={{ background: 'rgba(184,16,5,0.08)' }}
                  >
                    <div className="w-7 h-7">{productIcons[product.icon]}</div>
                  </div>
                  <div>
                    <h3
                      className="font-coda text-[18px] font-normal leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                      style={{ color: '#111111' }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wide leading-[1.4] mt-1 text-[#777777]">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <ul className="mt-auto space-y-1.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[13px] text-[#555555] leading-[1.5]"
                    >
                      <span
                        className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#B81005' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
