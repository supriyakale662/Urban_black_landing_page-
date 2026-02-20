import { motion } from 'framer-motion';
import {
    RiUserSearchLine,
    RiMapPin2Line,
    RiAlarmWarningLine,
    RiShieldUserLine,
    RiEye2Line,
    RiStarFill,
    RiShieldCheckLine,
    RiTimeLine,
    RiRadarLine,
    RiHealthBookLine
} from 'react-icons/ri';

const Safety = () => {
    const features = [
        {
            title: "Verified Drivers",
            desc: "All drivers undergo thorough background checks and verification processes.",
            icon: RiUserSearchLine
        },
        {
            title: "Live Tracking",
            desc: "Share your ride details and track your journey in real-time with loved ones.",
            icon: RiMapPin2Line
        },
        {
            title: "Emergency Support",
            desc: "24/7 emergency helpline and quick response team for immediate assistance.",
            icon: RiAlarmWarningLine
        },
        {
            title: "Company Employee Drivers",
            desc: "Full-time trained drivers for maximum accountability and better safety.",
            icon: RiShieldUserLine
        },
        {
            title: "Ride Monitoring",
            desc: "Every ride is monitored by our control center for added security and safety.",
            icon: RiEye2Line
        }
    ];

    const stats = [
        { label: "Verified Drivers", value: "100%", icon: RiShieldCheckLine },
        { label: "Emergency Support", value: "24/7", icon: RiTimeLine },
        { label: "Ride Tracking", value: "Live", icon: RiRadarLine },
        { label: "All Rides", value: "Insured", icon: RiHealthBookLine }
    ];

    return (
        <section id="safety" className="pt-4 md:pt-6 pb-16 md:pb-20 bg-gradient-to-b from-[#FAF9F6] to-[#F3F2EE] px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-primary">
                            <span className="text-accent">Women Safety</span> First
                        </h2>
                        <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg font-medium opacity-90">
                            Advanced safety features and verified drivers for worry-free travel, especially for women passengers.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12 md:mb-16">
                    {/* Left: Feature Cards */}
                    <div className="lg:col-span-7 space-y-3">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="bg-white p-4 md:p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-start gap-5 group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                            >
                                <div className="p-3 rounded-xl bg-accent/5 text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300 flex-shrink-0">
                                    <feature.icon size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1 tracking-tight">{feature.title}</h4>
                                    <p className="text-sm text-text-muted leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end lg:pr-10"
                    >
                        <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] group w-full max-w-[440px]">
                            <img
                                src="/woman-car1.jpg"
                                alt="Women Safety First"
                                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute bottom-6 right-6 bg-accent text-primary px-6 py-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-white/20 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="text-2xl font-black">4.9</span>
                                    <RiStarFill className="mb-0.5 text-primary" size={18} />
                                </div>
                                <span className="text-[9px] uppercase font-black tracking-widest leading-none text-primary/80">Safety Rating</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-gray-200/50">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -3 }}
                            className="bg-white p-5 md:p-6 rounded-[1.5rem] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-50 text-center flex flex-col items-center transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                        >
                            <span className="text-3xl font-black text-accent mb-1 tracking-tighter">{stat.value}</span>
                            <span className="text-xs font-bold text-text-muted tracking-tight">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Safety;
