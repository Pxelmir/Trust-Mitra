"use client"

export default function Home({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Light Theme */}
      <nav className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center space-x-8">
          <a href="#" className="text-lg font-medium text-gray-800 hover:text-red-600">Home</a>
          <a href="#" className="text-lg font-medium text-gray-800 hover:text-red-600">Services</a>
          <a href="#" className="text-lg font-medium text-gray-800 hover:text-red-600">About Us</a>
          <a href="#" className="text-lg font-medium text-gray-800 hover:text-red-600">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section Container */}
      <div className="relative">
        {/* Image Container - 90% width */}
        <div className="mx-auto w-[90%] overflow-hidden rounded-b-2xl shadow-2xl mt-8">
          <div className="relative h-[600px]">
            <img
              src="/Group.png"
              alt="Skilled workers collaborating"
              className="h-full w-full object-cover"
            />
            {/* Gradient overlay concentrated at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            {/* Additional bottom shadow for depth */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Text Overlay - Positioned at bottom */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-[90%] text-center">
            <section className="relative pb-16 pt-8 text-white md:pb-20 md:pt-12">
              <div className="mx-auto max-w-8xl px-4">
                <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl lg:text-6xl xl:text-7xl
                  [text-shadow:0_4px_12px_rgba(0,0,0,0.8)]
                  drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]">
                  Find Skilled Workers Near You
                </h1>

                <p className="mb-8 mx-auto text-lg leading-relaxed text-gray-100 text-balance md:text-xl lg:text-2xl w-[100%]
                  [text-shadow:0_2px_rgba(0,0,0,0.1)]
                  drop-shadow-md">
                  Our platform connects job seekers and employers across all industries, all skill levels, and every type of
                  work. Whether you're looking for your next career move or searching for the perfect person to join your team,
                  we make the process fast, easy, and reliable.
                </p>

                <button
                  onClick={onGetStarted}
                  className="rounded-xl bg-red-600 px-10 py-5 text-lg font-semibold text-white 
                    transition-all duration-300 hover:bg-red-700 
                    shadow-2xl hover:shadow-3xl
                    [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]
                    hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}