'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path;
  };
  
  const isProjectActive = pathname.startsWith('/projects');

  return (
    <header className="w-full bg-gray-50 dark:bg-gray-900 border-b-2 border-violet-300 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-6">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link 
              href="/" 
              className={`text-base font-semibold transition-colors hover:text-violet-500 ${
                isActive('/') ? 'text-violet-700 border-b-2 border-violet-700' : 'text-violet-400'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/resume" 
              className={`text-base font-semibold transition-colors hover:text-violet-500 ${
                isActive('/resume') ? 'text-violet-700 border-b-2 border-violet-700' : 'text-violet-400'
              }`}
            >
              Resume
            </Link>
          </li>
          
          <li className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`text-base font-semibold transition-colors hover:text-violet-500 inline-block ${
                isProjectActive ? 'text-violet-700 border-b-2 border-violet-700' : 'text-violet-400'
              }`}
            >
              Projects ▾
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-violet-300 min-w-[150px]">
                <Link
                  href="/projects/project-1"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold transition-colors hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-t-lg ${
                    isActive('/projects/project-1') ? 'text-violet-700 bg-violet-50 dark:bg-violet-900/20' : 'text-violet-400'
                  }`}
                >
                  SafeNote
                </Link>
                
                <Link
                  href="/projects/project-2"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold transition-colors hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-b-lg ${
                    isActive('/projects/project-2') ? 'text-violet-700 bg-violet-50 dark:bg-violet-900/20' : 'text-violet-400'
                  }`}
                >
                  ZoneIQ
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
