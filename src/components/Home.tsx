import { SparklesText } from "@/components/magicui/sparkles-text";

const Home = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-20 px-6"
        style={{ backgroundColor: "#A3D99B" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          <SparklesText>Hire Professional Painters for Your Home</SparklesText>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
          Book trusted painters for interior and exterior jobs. Fast booking, verified professionals, and top-quality finish — all at your fingertips.
        </p>
        <a
          href="/painters"
          className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-lg text-sm font-medium transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse Painters
        </a>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-6" style={{ backgroundColor: "#D9E283" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-900">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Professionals",
                desc: "We work only with trusted and background-verified painters to ensure safety and quality.",
              },
              {
                title: "Affordable Pricing",
                desc: "Transparent and competitive prices with no hidden charges. Get instant quotes before booking.",
              },
              {
                title: "Easy Booking",
                desc: "Book online in minutes. Choose your preferred time, service, and get instant confirmation.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-6" style={{ backgroundColor: "#FCF5AE" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-900">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["5K+", "Happy Customers"],
              ["1.2K+", "Verified Painters"],
              ["10+", "Cities Served"],
              ["4.8⭐", "Average Rating"],
            ].map(([num, label], i) => (
              <div key={i}>
                <h3 className="text-4xl font-extrabold text-green-700">{num}</h3>
                <p className="text-green-800 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 px-6 text-center" style={{ backgroundColor: "#FDD4B0" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
          Ready to Paint Your Dream Space?
        </h2>
        <p className="text-lg mb-8 text-green-800">
          Let us connect you with the best professionals near you.
        </p>
        <a
          href="/book"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6" style={{ backgroundColor: "#A3D99B" }}>
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["1️⃣", "Select Your Service", "Choose interior or exterior painting and your preferred date/time."],
              ["2️⃣", "Get Matched", "We’ll assign the best available professional near you instantly."],
              ["3️⃣", "Enjoy the Results", "Our painter arrives, completes the job, and you pay after satisfaction."],
            ].map(([icon, title, desc], i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/90">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6" style={{ backgroundColor: "#D9E283" }}>
        <div className="max-w-5xl mx-auto text-center text-green-900">
          <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                feedback: "The painter arrived on time and did a wonderful job. It looks like a new house!",
                name: "– Priya Sharma, Bhopal",
              },
              {
                feedback: "Affordable and smooth booking process. I’m so happy with the results!",
                name: "– Rakesh Verma, Indore",
              },
            ].map(({ feedback, name }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <p className="italic text-gray-700 mb-3">"{feedback}"</p>
                <p className="font-semibold text-green-700">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
