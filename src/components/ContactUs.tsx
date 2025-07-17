const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-[#E4F5F2] py-20 px-6 text-gray-800 font-sans"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#179177]">
            Let's Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            Whether you're ready to hire a painter or just want to ask a
            question, we’re here to help. Fill out the form or message us
            directly on WhatsApp!
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20HirePainter,%20I%20want%20to%20book%20a%20painting%20service!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1EBE5D] transition"
          >
            Message Us on WhatsApp
          </a>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#179177] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#179177] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#179177] focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#179177] text-white py-3 rounded-md font-semibold hover:bg-[#137e67] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
