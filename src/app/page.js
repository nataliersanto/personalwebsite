export default function Home() {
  return (

    // items-center = centers items vertically
    // justify-center = centers items horizontally
    // h-screen = makes height the full screen
    // px-6 = padding on left and right sides
    <div className="flex items-center justify-center h-screen overflow-hidden px-6 bg-gray-50 dark:bg-gray-900">
      
      {/* CONTENT WRAPPER - limits how wide content can get */}
      {/* max-w-2xl = maximum width */}
      {/* w-full = takes full width up to the max */}
      {/* -mt-16 = moves everything up a bit (negative margin top) */}
      <div className="max-w-2xl w-full -mt-16">
        

        {/* items-center = center everything horizontally */}
        {/* gap-6 = space between each item */}
        <div className="flex flex-col items-center gap-6">
          
          {/* hover:scale-105 = grows to 105% size when you hover over it */}
          {/* transition-transform = makes the size change smooth */}
          {/* duration-300 = animation takes 0.3 seconds */}
          <h1 className="text-7xl font-bold text-gray-900 dark:text-gray-100 text-center hover:scale-105 transition-transform duration-300 cursor-default">
            Hi, I'm Natalie!
          </h1>
          
          {/* flex-shrink-0 = prevents this from getting smaller */}
          <div className="flex-shrink-0">
            
            {/* THE CIRCLE */}
            {/* w-80 h-80 = 320 pixels wide and tall (makes it a square) */}
            {/* rounded-full = makes the square into a circle */}
            {/* overflow-hidden = clips anything outside the circle */}
            {/* shadow-2xl = shadow behind the circle */}
            {/* hover:scale-105 = grows when you hover */}
            {/* transition-transform duration-300 = smooth 0.3s animation */}
            {/* cursor-pointer = shows hand cursor when hovering */}            <div className="w-80 h-80 rounded-full border-4 border-violet-400 overflow-hidden bg-violet-50 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              

              <div className="w-full h-full flex items-center justify-center">

                <span className="text-8xl font-bold text-violet-600">NS</span>
              </div>

              
            </div>
          </div>

          <div className="w-full hover:scale-105 transition-transform duration-300 cursor-default">

            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-center">
              I'm a junior Computer Science student at Florida State University with minors in Math and Criminology. I have hands-on experience as a full-stack software engineering intern and a strong interest in cybersecurity. Check out my projects that highlight my skills in software development and security systems!
            </p>
          </div>

          <div className="flex gap-4">
            

            <a 
              href="https://github.com/nataliersanto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
            >

              
              <span>📎</span> GitHub
            </a>
            

            <a 
              href="https://www.linkedin.com/in/natalie-santo-5931032a2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <span>📎</span> LinkedIn
            </a>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
