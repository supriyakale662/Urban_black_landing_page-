import { motion } from 'framer-motion';
import {
    RiCoinFill, RiCarFill, RiUserHeartFill,
    RiVerifiedBadgeFill, RiMapPin2Fill, RiCustomerService2Fill,
    RiNavigationFill, RiFlashlightFill
} from 'react-icons/ri';
import { features } from '../../data';

const iconMap = {
    RiCoinFill, RiCarFill, RiUserHeartFill,
    RiVerifiedBadgeFill, RiMapPin2Fill, RiCustomerService2Fill,
    RiNavigationFill, RiFlashlightFill
};

const NoiseOverlay = () => (
    <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
    />
);

const Features = () => {
    return (
        <section id="about" className="pt-[70px] pb-[80px] relative overflow-hidden bg-[#F9F7F2]">
            {/* Premium Light Luxury Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
                        radial-gradient(circle at 10% 10%, rgba(234,179,8,0.05), transparent 40%),
                        radial-gradient(circle at 90% 90%, rgba(0,0,0,0.03), transparent 40%)
                    `
                }}
            />

            {/* Subtle Texture/Noise for Premium Feel */}
            <NoiseOverlay />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Optimized Header */}
                <div className="text-center mb-[45px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-[42px] leading-[1.2] font-bold tracking-tight text-[#1F2937] mb-4"
                    >
                        Why Choose <span className="text-[#EFBF3B]">Urban Black</span>?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-gray-500 max-w-[620px] mx-auto leading-[1.6]"
                    >
                        Built for Indian cities, Urban Black offers an unparalleled mobility experience focused on trust, safety, and comfort.
                    </motion.p>
                </div>

                {/* Animated Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                                }}
                                className="group p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#EFBF3B]/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center text-white mb-4 group-hover:bg-[#EFBF3B] group-hover:text-black transition-all duration-500 shadow-lg">
                                        {Icon && <Icon size={28} />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-[#111111] tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
