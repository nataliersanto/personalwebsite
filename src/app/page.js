import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-gray-50 dark:bg-gray-900">
      
      <div className="max-w-2xl w-full -mt-16">
        
        <div className="flex flex-col items-center gap-6">
          
          <h1 className="text-7xl font-bold text-gray-900 dark:text-gray-100 text-center hover:scale-105 transition-transform duration-300 cursor-default">
            Hi, I&apos;m Natalie!
          </h1>
          
          <div className="flex-shrink-0">
            <div className="relative w-80 h-80 rounded-full border-4 border-violet-400 overflow-hidden bg-violet-50 shadow-2xl">
              <Image 
                src="/IMG_2309.jpg" 
                alt="profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full hover:scale-105 transition-transform duration-300 cursor-default">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-center">
              I&apos;m a junior at Florida State University studying Computer Science with minors in Math and Criminology. I have hands-on experience as a full-stack software engineering intern and a strong interest in cybersecurity. Check out my projects that highlight my skills in software development and security systems!
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
