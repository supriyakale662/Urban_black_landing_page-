import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import {
    RiArrowRightUpLine,
    RiTimeLine
} from 'react-icons/ri';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const ROUTES_DATA = [
    {
        id: 1,
        from: "Pune",
        to: "Mumbai",
        time: "3.5 hrs",
        price: 2999,
        desc: "Premium Expressway Sedan for your intercity travel.",
        image: "/urbancar.png"
    },
    {
        id: 2,
        from: "Hinjewadi",
        to: "Pune Airport",
        time: "75 mins",
        price: 699,
        desc: "On-time airport transfers with premium service.",
        image: "/car1.png"
    },
    {
        id: 3,
        from: "Pune",
        to: "Lonavala",
        time: "1.5 hrs",
        price: 1499,
        desc: "Perfect weekend getaway with professional drivers.",
        image: "/urbancar.png"
    },
    {
        id: 4,
        from: "Kothrud",
        to: "Pune Station",
        time: "30 mins",
        price: 249,
        desc: "Reliable city connect for railway station transfers.",
        image: "/car1.png"
    },
    {
        id: 5,
        from: "Baner",
        to: "Kharadi",
        time: "45 mins",
        price: 399,
        desc: "Daily IT commute made comfortable and safe.",
        image: "/urbancar.png"
    },
    {
        id: 6,
        from: "Pune",
        to: "Mahabaleshwar",
        time: "4 hrs",
        price: 3499,
        desc: "/car1.png",
        image: "/car1.png"
    }
];

const RouteCard = ({ route }) => {
    return (
        <div
            className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 h-full select-none"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10">
                    <div className="bg-[#EFBF3B] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        <RiTimeLine className="text-xs" />
                        {route.time}
                    </div>
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#EFBF3B] transition-colors line-clamp-1">
                    {route.from} to {route.to}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-5 font-medium line-clamp-2">
                    {route.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-[9px] uppercase text-gray-400 font-bold tracking-widest mb-0.5">Starting at</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-gray-900">₹</span>
                            <span className="text-xl font-black text-gray-900">{route.price}</span>
                        </div>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#EFBF3B] group-hover:text-black group-hover:rotate-45 transition-all duration-300 shadow-lg">
                        <RiArrowRightUpLine size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Routes = () => {
    return (
        <section id="routes" className="pt-[40px] pb-0 relative overflow-hidden bg-[#FAFAFA]">
            <style dangerouslySetInnerHTML={{
                __html: `
                .routes-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}} />

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="px-6 text-center mb-[30px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-[42px] leading-[1.2] font-bold tracking-tight text-gray-900 mb-4"
                    >
                        Popular <span className="text-[#EFBF3B]">Routes</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-gray-500 max-w-[620px] mx-auto leading-[1.6]"
                    >
                        Experience premium intercity and local travel across Mumbai and Pune.
                    </motion.p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        loop={true}
                        speed={8000}
                        freeMode={{
                            enabled: true,
                            momentum: false,
                        }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.2 },
                            1280: { slidesPerView: 4.2 },
                            1600: { slidesPerView: 5.2 },
                        }}
                        onMouseEnter={(swiper) => {
                            swiper.autoplay.stop();
                        }}
                        onMouseLeave={(swiper) => {
                            swiper.autoplay.start();
                        }}
                        className="routes-swiper !px-6"
                    >
                        {[...ROUTES_DATA, ...ROUTES_DATA].map((route, index) => (
                            <SwiperSlide key={`${route.id}-${index}`} className="py-4">
                                <RouteCard route={route} />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
            </div>
        </section>
    );
};

export default Routes;
