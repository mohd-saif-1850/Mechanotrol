"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Car,
  Wrench,
  BatteryCharging,
  Fuel,
  Zap,
  MapPin,
  Users,
  Clock,
  FileText,
  Award,
  ShieldCheck,
  Star,
  Mail,
  PhoneCall,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white text-gray-900 antialiased">
      <section className="pt-24 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AI Keeping Your Wheels Turning
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Fast, reliable on-road emergency support for Cars, Bikes & EVs. A smooth, powerful rescue experience engineered with smart AI dispatch.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/request"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md text-white font-semibold text-lg transition transform hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,106,0,0.6)]"
                style={{
                  background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)",
                }}
              >
                Get Help Now
                <ArrowIcon />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md border border-gray-300 font-semibold text-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 items-center text-sm text-gray-600">
              <HoverBadge icon={<ShieldCheck className="w-5 h-5" />} text="Verified Technicians" />
              <HoverBadge icon={<Clock className="w-5 h-5" />} text="Fast ETA" />
              <HoverBadge icon={<Award className="w-5 h-5" />} text="Transparent Pricing" />
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg">Quick Help Form</div>
                <div className="text-sm text-gray-500">Instant</div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <QuickBtn icon={<BatteryCharging className="w-6 h-6" />} label="Battery" />
                <QuickBtn icon={<Fuel className="w-6 h-6" />} label="Fuel" />
                <QuickBtn icon={<Wrench className="w-6 h-6" />} label="Tire" />
              </div>

              <div className="mt-6">
                <select className="w-full p-4 rounded-md border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition focus:outline-none">
                  <option>Car</option>
                  <option>Bike</option>
                  <option>EV</option>
                </select>
              </div>

              <div className="mt-6 flex gap-3">
                <input
                  className="flex-1 p-4 rounded-md border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition focus:outline-none"
                  placeholder="Enter your location"
                />
                <button className="px-4 py-3 rounded-md bg-gray-100 border border-gray-300 hover:bg-gray-200 transition">Auto</button>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/request"
                  className="flex-1 inline-flex justify-center px-8 py-4 rounded-md text-white font-semibold transition hover:shadow-[0_8px_24px_rgba(255,106,0,0.6)] transform hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)",
                  }}
                >
                  Request Now
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-md border border-gray-300 hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-md"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionHeading title="Our Services" subtitle="Premium roadside help engineered for speed." />

      <div className="max-w-7xl mx-auto px-6 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        <ServiceCard icon={<BatteryCharging />} title="Battery Jumpstart" desc="Instant power boost and diagnostics." />
        <ServiceCard icon={<Fuel />} title="Fuel Delivery" desc="On-demand fuel delivered safely." />
        <ServiceCard icon={<Wrench />} title="Tire Repairs" desc="Fix flats, patch leaks, replace tires." />
        <ServiceCard icon={<Zap />} title="EV Support" desc="Mobile charging + EV diagnostics." />
        <ServiceCard icon={<Car />} title="Engine Help" desc="Minor breakdown fixes & assistance." />
        <ServiceCard icon={<FileText />} title="Docs Support" desc="PUC, insurance & reminders." />
      </div>

      <SectionHeading title="Why Choose Us" />

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature icon={<Award />} title="Certified Technicians" desc="Background checked and trained experts." />
        <Feature icon={<Star />} title="Top Rated" desc="High customer satisfaction across zones." />
        <Feature icon={<ShieldCheck />} title="Safe & Trusted" desc="Secure operations and documented workflow." />
      </div>

      <SectionHeading title="Estimate Ranges" subtitle="Clear, preset ranges for MVP." />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        <PriceCard icon={<BatteryCharging />} title="Battery" range="₹500 - ₹2,500" />
        <PriceCard icon={<Fuel />} title="Fuel Delivery" range="₹300 - ₹1,200" />
        <PriceCard icon={<Wrench />} title="Tire Change" range="₹200 - ₹1,000" />
      </div>

      <SectionHeading title="Mechanotrol in Numbers" />

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <StatCard value="+12k" label="Jobs Completed" />
        <StatCard value="9.8/10" label="Customer Rating" />
        <StatCard value="+3k" label="Technicians" />
        <StatCard value="95%" label="On-time ETA" />
      </div>

      <SectionHeading title="Customer Stories" />

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial name="Rohit S." text="Fast assistance. Technician arrived in 15 min and fixed my tire quickly." />
        <Testimonial name="Anjali M." text="Jumpstart was smooth. Loved the live updates." />
        <Testimonial name="Vikram P." text="EV charging support was excellent and on time." />
      </div>

      <SectionHeading title="FAQs" />

      <div className="max-w-3xl mx-auto px-6 mt-8 space-y-4">
        <FaqItem index={1} open={openFaq === 1} onToggle={() => setOpenFaq(openFaq === 1 ? null : 1)} question="How fast is the response?">
          Average technician assignment time: under 15 minutes.
        </FaqItem>

        <FaqItem index={2} open={openFaq === 2} onToggle={() => setOpenFaq(openFaq === 2 ? null : 2)} question="Do you support EV charging?">
          Yes, you can request instant EV onsite charging.
        </FaqItem>

        <FaqItem index={3} open={openFaq === 3} onToggle={() => setOpenFaq(openFaq === 3 ? null : 3)} question="Available payment methods?">
          MVP supports cash or payment pending.
        </FaqItem>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold">Join Mechanotrol Network</h3>
            <p className="mt-3 text-gray-600">
              Become a technician partner to receive jobs and grow your work portfolio.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/technician/apply"
                className="px-6 py-4 rounded-md text-white font-semibold transition hover:shadow-[0_8px_24px_rgba(255,106,0,0.6)] hover:-translate-y-1"
                style={{
                  background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)",
                }}
              >
                Apply Now
              </Link>

              <Link
                href="/technician/info"
                className="px-6 py-4 rounded-md border border-gray-300 hover:bg-gray-100 transition hover:-translate-y-1 hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="flex items-center gap-6">
              <Users className="w-12 h-12 text-[#FF6A00]" />
              <div>
                <div className="text-xl font-semibold">3,000+ technicians</div>
                <div className="text-sm text-gray-600">Operational across major zones</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-white border hover:shadow-md transition">
                <div className="text-gray-500 text-sm">Avg response</div>
                <div className="text-xl font-bold">12 min</div>
              </div>
              <div className="p-5 rounded-lg bg-white border hover:shadow-md transition">
                <div className="text-gray-500 text-sm">Satisfaction</div>
                <div className="text-xl font-bold">9.8/10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="mt-2 text-gray-600">Receive product updates & offers.</p>

          <form className="mt-6 flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-4 rounded-md border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-4 rounded-md text-white font-semibold transition hover:shadow-[0_8px_24px_rgba(255,106,0,0.6)] hover:-translate-y-1"
              style={{
                background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-white text-xl font-bold">Mechanotrol Tech</div>
            <div className="mt-3 text-gray-400 text-sm">AI-powered roadside support.</div>

            <div className="mt-6 flex flex-col space-y-3">
              <a href="tel:+917995484420" className="inline-flex items-center gap-2 hover:text-white">
                <PhoneCall className="w-5 h-5" /> +91 79954 84420
              </a>
              <a href="mailto:support@mechanotrol.com" className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="w-5 h-5" /> support@mechanotrol.com
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/request" className="hover:text-white">Request Help</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Legal</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">© 2026 Mechanotrol Tech. All rights reserved.</div>
      </footer>

      <a
        href="https://wa.me/7995484420?text=Hi%20Mechanotrol%20Team" target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="w-9 h-9 text-white" />
      </a>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HoverBadge({ icon, text }: any) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#FF6A00] hover:text-white transition transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      {icon}
      <span className="font-medium">{text}</span>
    </div>
  );
}

function QuickBtn({ icon, label }: any) {
  return (
    <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-[#FF6A00] hover:bg-orange-50 transition transform hover:-translate-y-1 hover:shadow-md">
      <div className="text-[#FF6A00]">{icon}</div>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function SectionHeading({ title, subtitle }: any) {
  return (
    <div className="max-w-3xl mx-auto px-6 text-center mt-24">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
}

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer group">
      <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white transition">
        {icon}
      </div>
      <div className="mt-6 text-xl font-semibold group-hover:text-[#FF6A00] transition">{title}</div>
      <div className="mt-2 text-gray-600">{desc}</div>

      <div className="mt-4 text-sm font-medium text-[#FF6A00] group-hover:underline transition flex items-center gap-1">
        Learn more
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer flex items-start gap-4">
      <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white transition">
        {icon}
      </div>
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-gray-600 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function PriceCard({ icon, title, range }: any) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        <div className="w-12 h-12 rounded-xl bg-[#FF6A00] flex items-center justify-center text-white">
          {icon}
        </div>
      </div>

      <div className="mt-4 text-2xl font-bold">{range}</div>
      <div className="mt-1 text-gray-500 text-sm">Technician confirms final amount onsite.</div>
    </div>
  );
}

function StatCard({ value, label }: any) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  );
}

function Testimonial({ name, text }: any) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xl">👤</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">Verified User</div>
        </div>
      </div>
      <div className="mt-4 text-gray-700 italic">{text}</div>
    </div>
  );
}

function FaqItem({ index, open, onToggle, question, children }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5">
        <div className="font-medium text-lg">{question}</div>
        {open ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>

      {open && <div className="px-5 pb-5 text-gray-600">{children}</div>}
    </div>
  );
}
