import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'Sports', path: '/about/sports' },
        { name: 'Class', path: '/about/class' },
        { name: 'Teachers', path: '/about/teachers' },
        { name: 'Location', path: '/about/locantion' },
        // { name: 'Infrastructure', path: '/about/infrastructure' }
      ]
    },
    { 
      name: 'Admission', 
      path: '/admission',
      submenu: [
        { name: 'Help & Feedback', path: '/admission/help & feedback' },
        { name: 'Contact', path: '/admission/contact' },
        { name: 'Admission Form', path: '/admission/admission' },
        // { name: 'Exam Schedule', path: '/academics/exams' },
        // { name: 'Results', path: '/academics/results' }
      ]
    },
    { 
      name: 'Academies', 
      path: '/academies',
      submenu: [
        { name: 'Procedure', path: '/academies/std.& teacher' },
        { name: 'Fee Structure', path: '/academies/fees' },
        { name: 'Scholarships', path: '/academies/scholarships' },
        { name: 'Important Dates', path: '/academies/dates' },
        { name: 'Apply Online', path: '/academies/apply' }
      ]
    },
    { 
      name: 'News', 
      path: '/news',
      submenu: [
        { name: 'Meritlist', path: '/news/meritlist' },
        { name: 'Result', path: '/news/result' },
        { name: 'Vecancies', path: '/news/sports' },
        { name: 'Transport', path: '/news/transport' },
        { name: 'Cafeteria', path: '/news/cafeteria' }
      ]
    },
    { 
      name: 'Achivements', 
      path: '/achivements',
      submenu: [
        { name: 'Festival', path: '/achivements/festival' },
        { name: 'Gallery', path: '/achivements/gallery' },
        { name: 'Alunini', path: '/achivements/alunini' },
        { name: 'Transport', path: '/achivements/transport' },
        { name: 'Sports History', path: '/achivements/Sports' }
      ]
    },
    { name: 'Contact', path: '/conctact' }
  ];

  return (
    <header className="bg-white-800 text-black-200 shadow-xl">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cache.careers360.mobi/media/schools/social-media/logo/Capture_74yW9et.PNG"
              alt="School Logo"
              className="h-12 w-12 rounded-full border-2 border-white"
            />
            <span className="ml-3 text-xl font-bold">Aasta Vidya Mindir School</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="hover:text-yellow-200 px-3 py-2 font-medium flex items-center transition-colors"
                      >
                        {item.name}
                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div className={`absolute left-0 mt-0 w-56 bg-white text-gray-700 rounded-b-md shadow-2xl z-50 ${
                        activeDropdown === item.name ? 'block' : 'hidden'
                      } group-hover:block`}>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-0 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-yellow-200 px-3 py-2 font-medium block transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black text-2xl focus:outline-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-400 pb-2">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name} className="border-t border-blue-400">
                  {item.submenu ? (
                    <div className="px-4">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex justify-between items-center w-full py-3 text-left"
                      >
                        <span className="font-medium ">{item.name}</span>
                        <span className='cursor-pointer'>{activeDropdown === item.name ? '^' : '⌄'}</span>
                      </button>
                      {activeDropdown === item.name && (
                        <ul className="bg-blue-100 rounded-lg mb-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className="block px-6 py-2 hover:bg-blue-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 font-medium hover:bg-blue-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;