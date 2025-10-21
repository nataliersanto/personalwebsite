export default function Project2() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
        ZoneIQ: Property Intelligence Platform
      </h1>
      

      <div className="w-full max-w-4xl mx-auto mb-12">
        
        {/* VIDEO PLAYER */}

        <video 
          controls 
          className="w-full rounded-lg border-2 border-violet-300 shadow-lg"
        >
          <source src="/zoneiq-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      
      {/* DESCRIPTION PARAGRAPH */}
      {/* max-w-4xl = maximum width (same as video) */}
      {/* mx-auto = centers the text */}
      {/* mb-12 = space below the paragraph */}
      <div className="w-full max-w-4xl mx-auto mb-12">
       
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-center">
          The further progression of a hackathon project, ZoneIQ is a full-stack web application designed to handle multiple authentication flows and user roles. Users can securely register, log in, and access a dynamic dashboard that adjusts functionality based on their role.
        </p>
      </div>
      

      <div className="w-full max-w-4xl mx-auto mb-12">
        {/* space-y-4 = space between each bullet point */}
        {/* text-left = align text to the left */}
        <ul className="space-y-4 text-left">
          

          <li className="flex items-start">
            {/* The bullet (violet checkmark) */}
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            {/* The text */}
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Built with Next.js 15, React, and Tailwind CSS
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Supabase Authentication & Database for secure user accounts and storing submitted addresses
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              User Dashboard allowing submission of addresses and viewing of previous entries
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Admin Dashboard showing current users and their data
            </span>
          </li>
          
        </ul>
      </div>
      
      
    </div>
  );
}
