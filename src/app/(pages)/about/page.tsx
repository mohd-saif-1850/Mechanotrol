"use client";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] text-transparent bg-clip-text">
            About Mechanotrol Tech
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AI-driven roadside assistance and technician management keeping your wheels turning with speed, safety, and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                To build the smartest emergency repair and technician platform powered by AI,
                providing real-time support, transparent pricing, and reliable service for every vehicle owner.
                </p>
            </div>

            <div className="w-full h-64 rounded-2xl flex items-center justify-center bg-gray-100 border border-gray-300">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] text-transparent bg-clip-text">
                Mechanotrol Tech
                </h1>
            </div>
        </div>


        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">AI-Powered Assistance</h3>
            <p className="text-gray-600">
              Smart technician matching, instant estimates, and predictive maintenance powered by AI.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Fast Emergency Support</h3>
            <p className="text-gray-600">
              Battery, tire, fuel, EV support, and basic engine issues handled quickly with verified technicians.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Future-Ready Platform</h3>
            <p className="text-gray-600">
              Fleet dashboards, analytics, EV integration, mobile technician app, and smart automation.
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">What We Are Building</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A complete ecosystem for vehicle owners, technicians, and businesses.  
            From request systems and technician dashboards to predictive maintenance  
            and fleet analytics - Mechanotrol Tech is creating the future of smart mobility services.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] h-[2px] w-full rounded-full" />

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Tagline</h2>
          <p className="text-gray-700 text-xl italic">
            “AI Keeping Your Wheels Turning”
          </p>
        </div>

      </div>
    </div>
  );
}
