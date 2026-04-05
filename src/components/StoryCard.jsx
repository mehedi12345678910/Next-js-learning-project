import Link from "next/link";

export default function StoryCard({ story }) {
  // Truncating the story text to keep it concise
  const shortStory = story.story.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <div className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-200/50">
      
      {/* 1. The Dynamic Gradient Border (Animated on hover) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 opacity-30 group-hover:opacity-100 group-hover:animate-gradient-xy transition-opacity duration-500"></div>

      {/* 2. The Inner Card Content */}
      <div className="relative bg-white rounded-3xl p-7 flex flex-col justify-between h-full backdrop-blur-xl">
        
        {/* Top Section: Profile & "Quote" Icon */}
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                {/* Image Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-500 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <img
                  src={story.image}
                  alt={story.name}
                  className="relative w-16 h-16 rounded-2xl object-cover border-2 border-white"
                />
              </div>
              <div>
                <h2 className="font-extrabold text-xl text-gray-950 tracking-tight leading-tight">
                  {story.name}
                </h2>
                <div className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {story.designation} <span className="text-gray-400">@ {story.company}</span>
                </div>
              </div>
            </div>
            
            {/* Minimalist Quote Icon */}
            <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944 2c-3.321 1.343-5.424 4.039-5.424 6.725h4.48v11h-10v-8zm-13 0c0-5.141 3.892-10.519 10-11.725l.944 2c-3.321 1.343-5.424 4.039-5.424 6.725h4.48v11h-10v-8z"/>
            </svg>
          </div>

          {/* Story Text with premium typography */}
          <div className="relative">
            {/* Background pattern */}
            <div className="absolute -inset-2 opacity-5 mt-2 bg-[url('/grid.svg')] bg-center rounded-xl"></div>
            <p className="relative z-10 text-gray-700 leading-relaxed text-base font-normal tracking-wide italic px-1">
              "{shortStory}"
            </p>
          </div>
        </div>

        {/* 3. The Interactive Button Section */}
        <div className="mt-8 pt-5 border-t border-gray-100">
          <Link
            href={`/stories/${story.id}`}
            className="group/btn relative inline-flex items-center justify-center w-full px-6 py-3.5 overflow-hidden font-semibold text-white transition-all duration-300 bg-gray-950 rounded-xl hover:bg-gray-800"
          >
            {/* Button Gradient Layer */}
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 group-hover/btn:opacity-100 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            
            <span className="relative flex items-center">
              Read the Full Story
              <svg 
                className="ml-2.5 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}