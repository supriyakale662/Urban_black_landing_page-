import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    RiMapPin2Fill,
    RiTimeLine,
    RiArrowDropDownLine,
    RiCheckboxBlankCircleFill,
    RiStopFill,
    RiPriceTag3Fill,
    RiNavigationFill,
    RiCalendarEventLine
} from 'react-icons/ri';

const Hero = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Pickup now');

    const options = [
        { label: 'Pickup now', icon: <RiTimeLine size={18} /> },
        { label: 'Schedule later', icon: <RiCalendarEventLine size={18} /> }
    ];
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("/urbancar1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(1.1) contrast(1.05)'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 lg:py-0">
                <div className="max-w-lg lg:max-w-[518px] mt-16 md:mt-20 lg:mt-24">
                    {/* LEFT SIDE: UBER-STYLE BOOKING CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="px-6 py-10 md:px-8 md:py-14 rounded-3xl shadow-2xl w-full border border-gray-100/50"
                        style={{
                            background: 'rgba(255, 255, 255, 0.70)',
                        }}
                    >
                        {/* Top Location Header */}
                        <div className="flex items-center gap-2 mb-3 group cursor-pointer">
                            <RiMapPin2Fill className="text-black" size={16} />
                            <p className="font-bold text-[#111111] text-xs md:text-sm">
                                Pune, INDIA <span className="text-blue-600 font-normal underline ml-2 decoration-blue-200 underline-offset-4 group-hover:text-blue-700 transition-colors"></span>
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] leading-tight tracking-tight mb-3">
                            Request a ride for now or later
                        </h1>

                        {/* Promo Text */}
                        <div className="flex gap-3 mb-4">
                            <RiPriceTag3Fill className="text-green-600 mt-0.5 shrink-0" size={16} />
                            <div className="text-[11px] md:text-xs">
                                <p className="font-bold text-[#111111] leading-tight">Up to 50% off your first Urban Black rides.</p>
                                <p className="text-[#555555] mt-0.5 font-medium">Valid for 15 days after signup.</p>
                            </div>
                        </div>

                        {/* Ride Timing Dropdown */}
                        <div className="mb-4 relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 bg-[#F3F3F3] hover:bg-[#EAEAEA] px-3.5 py-1.5 rounded-full font-bold text-[#111111] transition-colors text-xs active:scale-95"
                            >
                                {selectedOption === 'Pickup now' ? <RiTimeLine size={14} /> : <RiCalendarEventLine size={14} />}
                                {selectedOption}
                                <RiArrowDropDownLine size={18} className={`ml-0.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden"
                                    >
                                        {options.map((option) => (
                                            <button
                                                key={option.label}
                                                onClick={() => {
                                                    setSelectedOption(option.label);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors
                                                    ${selectedOption === option.label ? 'bg-gray-50 text-black' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
                                            >
                                                {option.icon}
                                                {option.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Input Fields with Connector */}
                        <div className="relative space-y-1.5 mb-5">
                            {/* Vertical Line Connector */}
                            <div className="absolute left-[26px] top-6 bottom-6 w-[1px] bg-gray-300"></div>

                            {/* Pickup Input */}
                            <div className="relative group">
                                <RiCheckboxBlankCircleFill className="absolute left-5 top-1/2 -translate-y-1/2 text-black z-10" size={10} />
                                <input
                                    type="text"
                                    placeholder="Pickup location"
                                    className="w-full bg-[#EEEEEE] border-transparent focus:border-black border-2 rounded-xl py-2.5 pl-14 pr-12 text-black font-medium focus:bg-white focus:outline-none transition-all placeholder:text-gray-500 text-xs md:text-sm"
                                />
                                <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black hover:bg-black/5 p-2 rounded-full transition-all">
                                    <RiNavigationFill size={18} />
                                </button>
                            </div>

                            {/* Dropoff Input */}
                            <div className="relative group">
                                <RiStopFill className="absolute left-5 top-1/2 -translate-y-1/2 text-black z-10" size={10} />
                                <input
                                    type="text"
                                    placeholder="Dropoff location"
                                    className="w-full bg-[#EEEEEE] border-transparent focus:border-black border-2 rounded-xl py-2.5 pl-14 pr-4 text-[#111111] font-medium focus:bg-white focus:outline-none transition-all placeholder:text-gray-500 text-xs md:text-sm"
                                />
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-black hover:bg-[#222222] text-white font-bold text-sm md:text-base px-8 py-3 rounded-xl transition-all active:scale-[0.98] shadow-lg">
                            See prices
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-30">
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-black">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-[2px] h-10 bg-black rounded-full"
                />
            </div>
        </section>
    );
};

export default Hero;
