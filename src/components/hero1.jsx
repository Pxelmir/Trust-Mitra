"use client"

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Group.png"
          alt="Skilled workers"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Find Skilled Workers Near You</h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
          Our platform connects job seekers and employers across all industries, all skill levels, and every type of
          work. Whether you're looking for your next career move or searching for the perfect person to join your team,
          we make the process fast, easy, and reliable.
        </p>

        <button
          onClick={onGetStarted}
          className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
