import { RiFacebookFill, RiTwitterFill, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-primary pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <span className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                            URBAN <span className="text-accent">BLACK</span>
                        </span>
                        <p className="text-text-muted mb-6 max-w-sm">
                            Luxury AI-powered ride-hailing platform. Move smart, ride premium with Urban Black.
                        </p>
                        <div className="flex gap-4">
                            {[RiFacebookFill, RiTwitterFill, RiInstagramLine, RiLinkedinFill].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Services', 'Safety', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-muted hover:text-accent transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            {['Help Center', 'Our Routes', 'Urban Black Pass', 'Our Locations', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-muted hover:text-accent transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-text-muted mb-4 text-sm">
                            Subscribe to get latest updates and luxury ride offers.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent/50 transition-colors"
                            />
                            <button className="btn-accent py-2 px-4 rounded-lg text-sm">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                    <p>© 2026 Urban Black. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent">Privacy Policy</a>
                        <a href="#" className="hover:text-accent">Terms of Service</a>
                        <a href="#" className="hover:text-accent">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
