import React from "react";

const AboutDecorish = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      {/* Hero Image Section */}
      <div className="w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzw_vjKzZjaG6N4xvnKvb8D3pcC8QJyA7I3A&s"
          alt="About Decorish"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* About Content Section */}
      <div className="w-full bg-white flex flex-col items-center py-16 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-center mb-8">
          About Decorish
        </h1>
        <div className="max-w-3xl text-center text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Founded in 2015 from the shared vision of CEO Marco Credendino and
            Creative Director Ippolita Rostagno, Decorish was created to
            celebrate and preserve exceptional craftsmanship by providing
            artisans and designers with an online platform to showcase their
            extraordinary works.
          </p>
          <br />
          <p>
            At Decorish, we believe in bridging the past and the present,
            offering timeless pieces that carry a story — all while promoting
            ethical design and sustainability. Our curated selection includes
            furniture, lighting, décor, tabletop and fine art, representing the
            finest in craftsmanship and innovation.
          </p>
          <br />
          <p>
            Every item on Decorish is handmade by expert artisans using
            traditional techniques passed down through generations, reimagined
            through a contemporary lens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDecorish;
