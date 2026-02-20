import { motion } from 'framer-motion';
import { RiGooglePlayFill, RiAppleFill, RiQrCodeLine, RiShieldCheckLine, RiWallet3Line, RiMapPinTimeLine, RiFileList3Line, RiVipCrown2Line } from 'react-icons/ri';

const MobileApp = () => {
    return (
        <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 to-transparent blur-[100px] opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Coming to Your Hand</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            One App. <br /><span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-200">Total Control</span>.
                        </h2>
                        <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-xl font-light">
                            Book city rides, airport transfers, and intercity travel — all in one intelligent platform designed for India.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                            {[
                                { icon: RiMapPinTimeLine, text: "Instant booking" },
                                { icon: RiShieldCheckLine, text: "Real-time tracking" },
                                { icon: RiWallet3Line, text: "Secure digital payments" },
                                { icon: RiFileList3Line, text: "Ride history & invoices" },
                                { icon: RiVipCrown2Line, text: "Urban Black Pass integration" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-300">
                                    <feature.icon className="text-accent" size={20} />
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* App Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <button className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 group">
                                <RiAppleFill size={32} />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase tracking-wider font-bold opacity-60 mb-0.5">Download on the</p>
                                    <p className="text-xl leading-none font-serif">App Store</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-4 bg-transparent text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(255,213,79,0.2)] hover:scale-105 transition-all duration-300">
                                <RiGooglePlayFill size={28} />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase tracking-wider font-bold opacity-60 mb-0.5">Get it on</p>
                                    <p className="text-xl leading-none font-serif">Google Play</p>
                                </div>
                            </button>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                <RiQrCodeLine className="text-white" size={32} />
                            </div>
                            <p className="text-sm text-gray-500 max-w-[150px] leading-snug">Scan the QR code to download directly.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Mockup */}
                    <div className="h-full flex items-center justify-center relative">
                        {/* Glow behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-accent/20 blur-[80px] rounded-full"></div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="w-[340px] h-[680px] bg-[#0a0a0a] border-[8px] border-zinc-800 rounded-[3.5rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30"></div>

                                {/* App UI */}
                                <div className="h-full flex flex-col bg-zinc-950 text-white pt-14 px-6 pb-8">
                                    {/* App Header */}
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-400 uppercase tracking-widest">Good Evening</span>
                                            <span className="text-lg font-serif italic text-accent">Rahul</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-accent text-xs">UB</div>
                                    </div>

                                    {/* Balance Card */}
                                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-6 border border-white/5 shadow-lg mb-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Urban Black Wallet</p>
                                        <p className="text-3xl font-bold text-white mb-4">₹12,450.00</p>
                                        <div className="flex gap-3">
                                            <div className="h-2 w-16 bg-accent rounded-full"></div>
                                            <div className="h-2 w-8 bg-zinc-700 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div className="flex-1 space-y-4">
                                        <p className="text-sm font-bold text-gray-400 mb-2">Recent Trips</p>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <div className="w-10 h-10 rounded-xl bg-black border border-zinc-800 flex items-center justify-center text-accent">
                                                    <RiMapPinTimeLine />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2 w-24 bg-zinc-800 rounded mb-2"></div>
                                                    <div className="h-2 w-16 bg-zinc-900 rounded"></div>
                                                </div>
                                                <div className="text-xs text-gray-500">₹450</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom Action */}
                                    <div className="bg-accent text-black font-bold text-center py-4 rounded-2xl mt-4 shadow-[0_0_20px_rgba(255,213,79,0.3)]">
                                        Book New Ride
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
