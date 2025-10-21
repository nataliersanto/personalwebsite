export default function Project1() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      

      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
        SafeNote: Secure Cloud Notes
      </h1>
      
 
      <div className="flex justify-center gap-4 mb-8">
        
        {/* Repository Button */}
        <a 
          href="https://github.com/nataliersanto/safe-note" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          <span>📎</span> Repository
        </a>
        
        {/* Live Link Button */}
        <a 
          href="https://safenoteapp.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          <span>📎</span> Live Link
        </a>
        
      </div>
      
      {/* DEMO VIDEO */}
      {/* max-w-4xl = maximum width */}
      {/* mx-auto = centers the video */}
      {/* mb-12 = space below the video */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        
        {/* VIDEO PLAYER */}
        {/* controls = shows play/pause/volume buttons */}
        {/* rounded-lg = rounded corners */}
        {/* border-2 border-violet-300 = purple border */}
        {/* shadow-lg = shadow behind video */}
        <video 
          controls 
          className="w-full rounded-lg border-2 border-violet-300 shadow-lg"
        >

          <source src="/safenote-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      

      <div className="w-full max-w-4xl mx-auto mb-12">

        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-center">
          SafeNote is a secure cloud-based note-taking application designed to demonstrate modern security practices in application and cloud architecture. Users can register, log in, and store notes that are encrypted end-to-end, with all data safely persisted in the cloud. The project also incorporates basic intrusion detection and network monitoring, providing hands-on experience with cybersecurity tools and secure deployment practices.
        </p>
      </div>
      
      {/* BULLET POINTS / KEY FEATURES */}
      {/* max-w-4xl = maximum width */}
      {/* mx-auto = centers the list */}
      {/* mb-12 = space below the list */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        {/* space-y-4 = space between each bullet point */}
        {/* text-left = align text to the left */}
        <ul className="space-y-4 text-left">
          
          {/* Each bullet point */}
          {/* flex = puts bullet and text side by side */}
          {/* items-start = aligns items to the top */}
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            {/* The text */}
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Built with Python Flask, JWT authentication, and AES-256 encryption
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Cloud deployment using AWS EC2, S3, and DynamoDB with IAM roles
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Basic intrusion detection and network monitoring using Suricata and Nmap
            </span>
          </li>
          
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
            <span className="text-lg text-gray-900 dark:text-gray-100">
              Local development includes environment variable management and password hashing for secure practices
            </span>
          </li>
          
        </ul>
      </div>
      
      
    </div>
  );
}
