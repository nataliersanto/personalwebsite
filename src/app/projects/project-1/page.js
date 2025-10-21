import Image from "next/image";

export default function Project1() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
        SafeNote: Secure Cloud Notes
      </h1>
      
      <div className="flex justify-center mb-8">
        <a 
          href="https://github.com/nataliersanto/safe-note" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold hover:scale-110 transition-all duration-300 shadow-lg flex items-center gap-2"
        >
          <span>📎</span> Repository
        </a>
      </div>
      
      <div className="w-full max-w-4xl mx-auto mb-12">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-center">
          SafeNote is a secure cloud-based note-taking application designed to demonstrate modern security practices in application and cloud architecture. Users can register, log in, and store notes that are encrypted end-to-end, with all data safely persisted in the cloud. The project also incorporates basic intrusion detection and network monitoring, providing hands-on experience with cybersecurity tools and secure deployment practices.
        </p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto mb-12">
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <span className="mr-3 text-violet-600 text-xl font-bold">•</span>
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
      
      <div className="w-full max-w-5xl mx-auto mb-12">
        <div className="space-y-8">
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Example CURL Requests
            </h3>
            <div className="border-2 border-violet-300 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/CURL example - Edited.png"
                alt="CURL example"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Wireshark capture showing SYN packets from a local host to a remote IP, used to analyze connection attempts detected by Suricata
            </h3>
            <div className="border-2 border-violet-300 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Wireshark example edited.png"
                alt="Wireshark example"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
