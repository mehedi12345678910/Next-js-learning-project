import Link from 'next/link';
import React from 'react'

const StoryDetailsPage = async({params}) => {
    const {id}=await params;
     const devStories = [
    {
      id: 1,
      name: "Arman Hossain",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "3 years",
      skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
      story:
        "Arman started learning web development during his university days. He struggled at first with JavaScript fundamentals but stayed consistent. Every day he solved one problem and built small UI components. After mastering React, he transitioned to Next.js for better performance and SEO. He has a habit of reading documentation and experimenting with new features. His turning point came when he built a dashboard project that impressed his seniors. This boosted his confidence and pushed him to explore more advanced concepts. Today, Arman continues to learn, build, and refine his skills with real-world projects.",
      about:
        "Arman is a passionate frontend developer from Bangladesh who loves building seamless and interactive user interfaces. He believes in learning by doing, which explains his strong portfolio of small experimental projects. Arman prefers working with the React ecosystem and is particularly fascinated by performance optimization and design systems. Outside coding, he enjoys writing tech blogs and sharing tips for beginners. His long-term goal is to become a full-stack developer and contribute to open-source projects that impact thousands of developers. Arman also mentors juniors part-time, helping them break into the tech industry with confidence and practical guidance.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      designation: "Full Stack Developer",
      company: "BrightByte Labs",
      experience: "4 years",
      skills: ["Node.js", "Express", "MongoDB", "React", "Docker"],
      story:
        "Sara began her journey with basic HTML and CSS tutorials. She enjoyed making designs come alive on the browser. Later, JavaScript caught her interest and she spent months mastering it. After learning React, she wanted to understand backend systems, so she moved into Node.js and database management. Building her first MERN full-stack application was a huge milestone. With every project, she pushed her limits and learned better architecture, data handling, and deployment strategies. Today, Sara continues learning distributed systems and DevOps essentials to improve her backend engineering skills.",
      about:
        "Sara is a dedicated full-stack developer who specializes in creating scalable and maintainable applications. She enjoys solving complex problems and improving user experiences with well-structured systems. Her teammates describe her as detail-oriented, curious, and persistent. Outside work, she mentors junior developers and contributes to documentation for open-source libraries. She also loves participating in hackathons and frequently collaborates with teams across the world. Sara’s goal is to become a software architect and work on high-performance cloud-native systems. She is passionate about continuous learning and firmly believes that consistency is the key to software mastery.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 3,
      name: "Rahul Das",
      designation: "Backend Engineer",
      company: "CodeCraft Systems",
      experience: "2 years",
      skills: ["Node.js", "PostgreSQL", "Redis", "REST API", "TypeScript"],
      story:
        "Rahul’s learning story started with solving logic problems and understanding how data flows inside applications. He quickly became fascinated with backend engineering. He focused on JavaScript and later shifted to TypeScript for better type safety. Building scalable API systems became his passion. He practiced database design regularly and used tools like PostgreSQL to optimize queries. Redis caching was another breakthrough that helped him understand performance optimization deeply. Rahul continues learning system design and distributed architecture to upgrade himself.",
      about:
        "Rahul is an early-career backend engineer who loves building reliable, efficient, and secure server systems. He enjoys working with databases, caching layers, and cloud deployment. His strongest skill is breaking down complex problems into manageable parts. Outside work, Rahul enjoys teaching beginners about backend fundamentals and writing short technical guides. His long-term goal is to specialize in high-load systems and contribute to large-scale backend services used by millions. Rahul values clean coding practices and believes good architecture is the backbone of successful software projects.",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Maya Siddiqui",
      designation: "UI/UX Focused Frontend Developer",
      company: "PixelForge Studio",
      experience: "3.5 years",
      skills: ["Figma", "React", "Tailwind", "GSAP", "TypeScript"],
      story:
        "Maya started her career as a designer but soon realized she wanted her designs to become real interactive experiences. She taught herself HTML, CSS, and JavaScript. After learning React, she began focusing on animations and delightful micro-interactions. Tailwind CSS helped her build faster and more consistently. Maya constantly improved by cloning modern websites and learning UI patterns. She believes that design and development must work together to create smooth user journeys.",
      about:
        "Maya is a frontend developer with a strong sense of design and a passion for interactive user experiences. She blends aesthetics with technology, building fast, responsive, and visually appealing interfaces. Her background in UI/UX helps her understand user psychology, accessibility, and visual hierarchy. Maya loves experimenting with animations and motion libraries to create memorable digital experiences. She also mentors aspiring designers who want to transition into coding. Her mission is to bridge the gap between design and development in modern web ecosystems.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 5,
      name: "Zahidul Karim",
      designation: "MERN Stack Developer",
      company: "DevOrbit Labs",
      experience: "5 years",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Redux"],
      story:
        "Zahidul started as a self-taught developer with a strong interest in JavaScript. He practiced daily by building small tasks and mini-projects. After learning React, he moved to full-stack using Node.js and MongoDB. His major breakthrough came when he built an LMS platform prototype. That experience improved his understanding of authentication, state management, and large-scale app structure. Zahidul now focuses on mastering advanced concepts like caching, scalable APIs, and performance optimization.",
      about:
        "Zahidul is a highly experienced MERN stack developer who enjoys architecting robust and user-friendly applications. He has worked on dashboards, LMS platforms, eCommerce applications, and real-time features. His strength lies in understanding the entire flow of applications, from frontend UI to backend logic and database structures. Outside development, Zahidul likes reading books and researching new technologies. His long-term goal is to lead a software engineering team and build impactful products that solve real-world problems.",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];
  const story=devStories.find((story)=>story.id==id);
  if(!story){
    return <h2>Story Not Fount .</h2>;
  }
  return (
 <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/stories" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> 
          Back to all stories
        </Link>

        <main className="bg-white shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden border border-gray-100">
          
          {/* Header Section with Gradient Background */}
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
          
          <div className="relative px-8 pb-8">
            {/* Profile Image & Basic Info */}
            <div className="relative -mt-16 flex flex-col sm:flex-row items-end gap-6 pb-6 border-b border-gray-100">
              <img
                src={story.image}
                alt={story.name}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg bg-white"
              />
              <div className="flex-1 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{story.name}</h1>
                <p className="text-lg font-medium text-blue-600">{story.designation} <span className="text-gray-400 mx-1">@</span> {story.company}</p>
                <div className="mt-2 flex items-center gap-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        {story.experience} Experience
                    </span>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
              
              {/* Left Side: Skills & Quick Info */}
              <div className="md:col-span-1 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {story.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 mb-2">Quick Contact</h3>
                    <p className="text-sm text-gray-600">Available for collaborations and mentorship.</p>
                    <button className="mt-4 w-full bg-white border border-gray-200 py-2 rounded-xl text-sm font-semibold shadow-sm hover:bg-gray-50 transition-all">
                        Connect with {story.name.split(' ')[0]}
                    </button>
                </div>
              </div>

              {/* Right Side: Detailed Story & About */}
              <div className="md:col-span-2 space-y-10">
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900">The Learning Journey</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    "{story.story}"
                  </p>
                </section>

                <section>
                   <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900">Professional Background</h2>
                  </div>
                  <div className="bg-indigo-50/30 p-6 rounded-2xl border border-indigo-100/50">
                    <p className="text-gray-700 leading-relaxed">
                        {story.about}
                    </p>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </main>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          © 2026 Developer Stories Community. All rights reserved.
        </p>
      </div>
 </div>
  )
}

export default StoryDetailsPage
