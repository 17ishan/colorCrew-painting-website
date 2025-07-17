const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-[#FFF1E6] py-20 px-6 text-gray-800 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#e5743f]">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At{" "}
            <span className="font-semibold text-[#e5743f]">ColorCrew</span>, we
            connect homeowners with top-rated local painters — quickly,
            affordably, and with trust. Whether it's a small refresh or a
            complete transformation, we’re here to make your home shine.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our platform ensures every professional is verified, experienced,
            and reviewed by real customers. No hidden charges, no compromises
            on quality.
          </p>

          <div className="grid grid-cols-2 gap-4 text-center mt-4">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-[#3B82F6]">5,000+</h3>
              <p className="text-sm mt-2">Homes Painted</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-[#3B82F6]">1,200+</h3>
              <p className="text-sm mt-2">Verified Painters</p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-block mt-6 bg-[#e5743f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cf5f2c] transition duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://img.freepik.com/free-photo/side-view-man-painting-wall_23-2149300989.jpg?w=826"
            alt="Painter at Work"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
