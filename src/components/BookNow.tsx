import { useState } from "react";

const BookNow = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, city, service, date } = form;

    const message = `Hello, a new booking request has been received:\n\n🧑 Name: ${name}\n📞 Phone: ${phone}\n📍 City: ${city}\n🎨 Service: ${service}\n📅 Date: ${date}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "7987492361";
    const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      phone: "",
      city: "",
      service: "",
      date: "",
    });
  };

  return (
    <div className="min-h-screen py-16 px-6" style={{ backgroundColor: "#FCF5AE" }}>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Book a Painter Now</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-green-800 mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-green-800 mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. 9876543210"
            />
          </div>

          <div>
            <label className="block text-green-800 mb-2 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. Bhopal"
            />
          </div>

          <div>
            <label className="block text-green-800 mb-2 font-medium">Painting Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select a service</option>
              <option value="Interior">Interior Painting</option>
              <option value="Exterior">Exterior Painting</option>
              <option value="Both">Both Interior & Exterior</option>
            </select>
          </div>

          <div>
            <label className="block text-green-800 mb-2 font-medium">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
