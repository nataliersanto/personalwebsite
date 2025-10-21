export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* CONTAINER - Button and PDF side by side */}
      {/* flex = puts items side by side */}
      {/* gap-4 = space between button and PDF */}
      <div className="flex gap-4">
        
        {/* LEFT SIDE: PDF VIEWER */}
        {/* flex-1 = takes up remaining space */}
        <div className="flex-1">
          <div className="border-2 border-violet-300 rounded-lg overflow-hidden shadow-lg bg-white">
            {/* iframe = embeds the PDF in the page */}
            {/* %20 = space character in URL format */}
            {/* height: 150vh makes it 1.5x the screen height so you can see more without scrolling inside */}
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
        
        {/* RIGHT SIDE: DOWNLOAD BUTTON */}
        {/* flex-shrink-0 = keeps button from shrinking */}
        <div className="flex-shrink-0">
          {/* %20 = space character in URL format */}
          {/* Rectangle button with download icon */}
          <a 
            href="/Natalie%20Santo%20Resume.pdf" 
            download="Natalie_Santo_Resume.pdf"
            className="px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg hover:scale-110 transition-all duration-300 shadow-lg block"
            title="Download Resume"
          >
            {/* Download icon using SVG-like arrow */}
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
