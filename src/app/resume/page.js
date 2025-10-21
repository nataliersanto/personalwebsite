export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      <div className="flex gap-4">
        
        <div className="flex-1">
          <div className="border-2 border-violet-300 rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe
              src="/Natalie%20Santo%20Resume.pdf"
              className="w-full"
              style={{ height: '150vh' }}
              title="Resume PDF"
            >
              This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <a 
            href="/Natalie%20Santo%20Resume.pdf" 
            download="Natalie_Santo_Resume.pdf"
            className="px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg hover:scale-110 transition-all duration-300 shadow-lg block"
            title="Download Resume"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
          </a>
        </div>
        
      </div>
      
    </div>
  );
}
