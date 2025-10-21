export default function Project2() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
        ZoneIQ: Property Intelligence Platform
      </h1>
      
      <div className="flex justify-center mb-8">
        <a 
          href="https://github.com/nataliersanto/zoneiq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          <span>📎</span> Repository
        </a>
      </div>
      
      <div className="w-full max-w-4xl mx-auto mb-12">
        <video 
          controls 
          className="w-full rounded-lg border-2 border-violet-300 shadow-lg"
        >
          <source src="/ZONEIQ demo.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="w-full max-w-4xl mx-auto mb-12">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-center">
          The further progression of a hackathon project, ZoneIQ is a full-stack web application designed to handle multiple authentication flows and user roles. Users can securely register, log in, and access a dynamic dashboard that adjusts functionality based on their role.
        </p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto mb-12">
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
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
