"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reach out to Mechanotrol Tech  we’re here to assist you anytime with support, queries, and service help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Support Details</h2>
              <p className="text-gray-600 mt-2">
                For any help or business inquiries, feel free to contact us.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-gray-100 border border-gray-300">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-700">support@mechanotrol.com</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-100 border border-gray-300">
                <h3 className="text-xl font-semibold">Support Executive</h3>
                <p className="text-gray-700">Manoj (Customer Support Lead)</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-100 border border-gray-300">
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-700">+91 79954 84420</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-100 border border-gray-300">
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-700">
                  Nirman,<br />
                  2nd Floor, Sudha and Shankar Innovation Hub,<br/>
                  IIT Madras, Chennai 600 036, India
                </p>
              </div>

              <a
                href="https://wa.me/7995484420?text=Hi%20Mechanotrol%20Team"
                className="block text-center w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 transition"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="p-8 bg-gray-100 rounded-2xl border border-gray-300 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 h-32 resize-none focus:outline-none"
            />

            <button className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] hover:scale-[1.02] transition">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
