import { motion } from 'framer-motion';
import { RiVipCrownFill, RiShieldCheckLine, RiPriceTag3Line, RiFlashlightLine } from 'react-icons/ri';

const Pass = () => {
    return (
        <section id="pass" className="py-24 bg-primary relative overflow-hidden px-6">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="glass-card bg-gradient-to-br from-white/10 to-transparent border-white/20 p-12 overflow-hidden relative">
                    {/* Floating Yellow Element */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 blur-[60px] rounded-full"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <RiVipCrownFill className="text-accent" size={32} />
                                <span className="text-2xl font-bold tracking-widest text-white uppercase italic">Urban Black Pass</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Elevate Every Ride <span className="text-accent italic">Experience Elite Mobility</span>
                            </h2>
                            <p className="text-text-muted text-lg mb-10 leading-relaxed">
                                Elevate your daily commute with the Urban Black Pass. Priority booking, fixed fares, and exclusive access to our premium fleet - all in one subscription.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { icon: RiShieldCheckLine, text: "Priority Booking" },
                                    { icon: RiPriceTag3Line, text: "No Surge Pricing" },
                                    { icon: RiFlashlightLine, text: "Instant VIP Support" },
                                    { icon: RiVipCrownFill, text: "Exclusive Fleet" }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white">
                                        <benefit.icon className="text-accent" size={20} />
                                        <span className="font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <button className="btn-accent px-10 py-4 w-full sm:w-auto">Get Started</button>
                                <div className="text-white">
                                    <span className="text-3xl font-bold">₹2,999</span>
                                    <span className="text-text-muted text-sm ml-2">/ month</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ rotate: -5, y: 20 }}
                                whileInView={{ rotate: 5, y: -20 }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                                className="relative z-20 aspect-[4/3] rounded-3xl bg-gradient-to-tr from-accent to-accent-gold p-[1px] shadow-[0_20px_50px_rgba(255,213,79,0.3)] shadow-accent/20"
                            >
                                <div className="w-full h-full bg-primary-soft rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
                                    {/* Card Design */}
                                    <div className="absolute top-0 right-0 p-8">
                                        <RiVipCrownFill className="text-accent/20" size={120} />
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-accent font-bold tracking-[0.2em] mb-2">URBAN BLACK</p>
                                        <h4 className="text-3xl font-bold text-white tracking-widest uppercase italic">ELITE</h4>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-xs text-text-muted mb-1">MEMBER SINCE</p>
                                        <p className="text-white font-mono">2026 / 02</p>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 blur-[40px] rounded-full"></div>
                                </div>
                            </motion.div>
                            {/* Back card */}
                            <div className="absolute top-4 -left-4 w-full h-full bg-white/5 rounded-3xl border border-white/10 -z-10 rotate-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pass;
