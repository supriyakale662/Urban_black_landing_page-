import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section logic
            const sections = ['hero', 'about', 'routes', 'safety', 'services', 'pass', 'faq'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Using a slightly more generous threshold to ensure active state updates correctly
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActiveSection(section);
                    }
                }
            }
        };
        handleScroll(); // Check on mount for direct page loads
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (id === 'hero') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Match compact height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Routes', id: 'routes' },
        { name: 'Safety', id: 'safety' },
        { name: 'Services', id: 'services' },
        { name: 'Pass', id: 'pass' },
        { name: 'FAQ', id: 'faq' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-400 navbar",
                isScrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200 navbar-compact"
                    : "bg-transparent border-transparent shadow-none"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-center items-center"
                >
                    <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className={cn(
                        "relative flex items-center transition-all duration-400",
                        isScrolled ? "h-[80px]" : "h-[110px]"
                    )}>
                        {/* Sticky Navbar Logo (Dark) */}
                        <motion.img
                            src="/urban_black_logo.png"
                            alt="Urban Black"
                            animate={{
                                opacity: isScrolled ? 1 : 0,
                                y: isScrolled ? 0 : -10,
                                scale: isScrolled ? 1 : 0.95
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={cn(
                                "absolute left-0 w-auto object-contain pointer-events-none",
                                "h-[45px] sm:h-[50px] md:h-[55px] lg:h-[99px]"
                            )}
                        />
                        {/* Hero Section Logo (Text) */}
                        <motion.div
                            animate={{
                                opacity: !isScrolled ? 1 : 0,
                                y: !isScrolled ? 0 : 10,
                                scale: !isScrolled ? 1 : 0.95
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={cn(
                                "text-2xl md:text-3xl font-bold tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
                                isScrolled ? "pointer-events-none" : "pointer-events-auto"
                            )}
                        >
                            URBAN <span className="text-accent">BLACK</span>
                        </motion.div>
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            href={`#${link.id}`}
                            onClick={(e) => scrollToSection(e, link.id)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "text-base font-semibold transition-colors hover:text-yellow-500",
                                activeSection === link.id
                                    ? "text-yellow-500"
                                    : (isScrolled ? "text-gray-700" : "text-white/90")
                            )}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={cn(
                            "px-6 py-2.5 rounded-full font-bold transition-all shadow-lg active:scale-95",
                            isScrolled
                                ? "bg-[#111111] hover:bg-black text-white shadow-black/5"
                                : "bg-white hover:bg-gray-100 text-black shadow-white/5"
                        )}
                    >
                        Book Now
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "lg:hidden text-2xl transition-colors duration-300",
                        isScrolled ? "text-[#111111]" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu4Line />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={`#${link.id}`}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    className={cn(
                                        "text-lg font-semibold hover:text-yellow-500 transition-colors",
                                        activeSection === link.id ? "text-yellow-500" : "text-gray-700"
                                    )}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-[#111111] hover:bg-black text-white w-full mt-4 text-base py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">Book Now</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
