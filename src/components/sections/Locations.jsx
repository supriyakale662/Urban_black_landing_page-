import { motion } from 'framer-motion';
import { RiMapPin2Line, RiTimeLine, RiHashtag, RiShieldCheckLine, RiRocketLine } from 'react-icons/ri';

const Locations = () => {
    const serviceAreasRow1 = [
        "Baner",
        "Hinjewadi",
        "Kharadi",
        "Koregaon Park",
        "Aundh",
        "Hadapsar",
    ];

    const serviceAreasRow2 = [
        "Wakad",
        "Viman Nagar",
        "Shivajinagar",
        "Magarpatta",
        "Pimpri-Chinchwad",
        "Pashan",
    ];

    const stats = [
        { label: "Areas Covered", value: "12+", icon: RiHashtag },
        { label: "Pune Coverage", value: "100%", icon: RiShieldCheckLine },
        { label: "Avg Pickup Time", value: "<10min", icon: RiTimeLine },
        { label: "Service Hours", value: "24/7", icon: RiTimeLine },
    ];

    return (
        <section id="services" className="py-12 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary font-bold text-xs uppercase tracking-wider mb-3 border border-accent/20"
                    >
                        <RiMapPin2Line className="text-accent" /> OUR LOCATIONS
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3"
                    >
                        Currently Serving <span className="text-accent">Pune</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-muted max-w-2xl mx-auto text-base md:text-lg"
                    >
                        Premium taxi service available across all major areas of Pune city
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                    {/* Left Side: City Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative h-[400px] w-full rounded-[1.5rem] overflow-hidden shadow-xl">
                            <img
                                src="/pune_city_image.png"
                                alt="Pune City Skyline"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                            {/* Overlay Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/25 p-6 rounded-3xl shadow-2xl text-center min-w-[200px] border border-white/25"
                            >
                                <div className="w-10 h-10 bg-accent/20 text-accent rounded-xl flex items-center justify-center mx-auto mb-3 border border-accent/50">
                                    <RiMapPin2Line size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Pune</h3>
                                <p className="text-white/70 text-xs font-medium uppercase tracking-tight">Maharashtra, India</p>
                            </motion.div>
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-accent/5 rounded-[1.5rem] -z-10 -rotate-2"></div>
                    </motion.div>

                    {/* Right Side: Service Areas & Info */}
                    <div className="space-y-5">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-1.5 bg-accent/10 text-accent rounded-lg">
                                    <RiMapPin2Line size={18} />
                                </div>
                                <h3 className="text-xl font-bold text-primary">Service Areas</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-2.5">
                                    {serviceAreasRow1.map((area, idx) => (
                                        <motion.div
                                            key={area}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl border border-gray-100 hover:border-accent/30 transition-colors group"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,213,79,0.4)]" />
                                            <span className="text-primary/80 font-semibold text-sm">{area}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="space-y-2.5">
                                    {serviceAreasRow2.map((area, idx) => (
                                        <motion.div
                                            key={area}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (idx + 6) * 0.05 }}
                                            className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl border border-gray-100 hover:border-accent/30 transition-colors group"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,213,79,0.4)]" />
                                            <span className="text-primary/80 font-semibold text-sm">{area}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Expanding Soon Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent/5 p-4 rounded-2xl border border-accent/10 flex gap-4 items-start"
                        >
                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                                <RiRocketLine size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-sm mb-1">Expanding Soon</h4>
                                <p className="text-text-muted text-xs leading-relaxed">
                                    We're rapidly expanding to more cities across Maharashtra and India. Stay tuned for updates on new service areas.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-5 rounded-2xl border border-gray-100 text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-accent/30 transition-all group"
                        >
                            <span className="block text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{stat.value}</span>
                            <span className="text-text-muted text-xs font-medium">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
