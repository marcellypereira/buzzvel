import React from 'react';
import { Helmet } from 'react-helmet';

/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
export default function PickSun() {
  return (
    <div className="max-w-[1920px] mx-auto">
      {/* Configurando o Helmet para SEO */}
      <Helmet>
        <title>Pick the Sun</title>
        <meta name="description" content="No more waste. Et pulvinar nec interdum integer id urna molestie porta nullam." />
      </Helmet>

      <div className="mt-20 lg:mt-40">
        <section className="text-center px-4">
          <p className="text-lg sm:text-xl text-[#D97706] leading-9 font-medium mt-6 lg:mt-10">
            No more waste
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mt-4 mb-6">
            Pick the Sun
          </h2>
          <article className="lg:max-w-[900px] lg:mx-auto mx-6 font-normal">
            <p className="text-xl">
              Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed
              turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum
              sollicitudin.
            </p>
          </article>
        </section>

        <div className="lg:mt-0">
          <img
            src="image3.png"
            alt="Primary image"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
