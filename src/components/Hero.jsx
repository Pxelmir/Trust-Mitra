"use client"

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 text-white md:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Group.png"
          alt="Skilled workers"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl">Find Skilled Workers Near You</h1>

        <p className="mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-gray-200 text-balance md:text-xl">
          Our platform connects job seekers and employers across all industries, all skill levels, and every type of
          work. Whether you're looking for your next career move or searching for the perfect person to join your team,
          we make the process fast, easy, and reliable.
        </p>

        <button
          onClick={onGetStarted}
          className="rounded-lg bg-red-600 px-8 py-6 text-lg font-semibold text-white transition-colors hover:bg-red-700"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
