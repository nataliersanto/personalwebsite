'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

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
          <li>
            <Link 
              href="/projects/project-1" 
              className={`text-base font-semibold transition-colors hover:text-violet-500 ${
                isActive('/projects/project-1') ? 'text-violet-700 border-b-2 border-violet-700' : 'text-violet-400'
              }`}
            >
              Project 1
            </Link>
          </li>
          <li>
            <Link 
              href="/projects/project-2" 
              className={`text-base font-semibold transition-colors hover:text-violet-500 ${
                isActive('/projects/project-2') ? 'text-violet-700 border-b-2 border-violet-700' : 'text-violet-400'
              }`}
            >
              Project 2
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

