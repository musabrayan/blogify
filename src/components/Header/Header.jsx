import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const handleNavigation = (slug, name) => {
    // Only add the click effect on mobile
    if (window.innerWidth < 1024) {
      setActiveButton(name);
      // Reset the active state after the animation
      setTimeout(() => {
        setActiveButton(null);
        navigate(slug);
        setIsMenuOpen(false);
      }, 200);
    } else {
      navigate(slug);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className='py-3 shadow bg-secondaryBg'>
      <Container>
        <nav className='relative flex items-center justify-between max-w-screen-xl mx-auto h-12'>
          {/* Logo */}
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='lg:hidden p-2 rounded-lg hover:bg-gray-100'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex items-center ml-auto space-x-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-accentGreen hover:text-white rounded-full text-l font-medium'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='absolute top-full right-0 left-0 mt-3 lg:hidden bg-white rounded-lg shadow-lg py-2 z-50'>
              <ul className='flex flex-col'>
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item.slug, item.name)}
                        className={`w-full text-left px-6 py-3 duration-200 text-sm font-medium
                          ${activeButton === item.name 
                            ? 'bg-gray-100 text-gray-900' 
                            : 'hover:bg-gray-50'
                          }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li className='px-4 py-2'>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;