import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const reviews = [
        {
            name: "Dr. Ananya Sharma",
            role: "CEO, Tech Solutions",
            content: "The level of professionalism and the luxury fleet provided by Urban Black is unmatched. The AI pricing is transparent and fair.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=1"
        },
        {
            name: "Vikram Malhotra",
            role: "Investment Banker",
            content: "I use Urban Black for all my corporate travel. The Elite Pass has saved me countess hours and provides a seamless experience.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=2"
        },
        {
            name: "Sarah Fernandes",
            role: "Student, Mumbai University",
            content: "The student discount is a lifesaver. Plus, the women safety features give me and my family total peace of mind during late rides.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=3"
        },
        {
            name: "Rajesh Kulkarni",
            role: "Retired Professor",
            content: "Accessibility matters. The 50% discount for senior citizens makes premium travel affordable for everyone. Exceptional service!",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=4"
        }
    ];

    return (
        <section className="py-24 bg-primary relative px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title">What Our <span className="text-accent italic">Members</span> Say</h2>
                    <p className="section-subtitle mx-auto">Hear from our community about their luxury commute experience.</p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16 testimonial-swiper"
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx} className="h-full">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] h-full flex flex-col justify-between group hover:border-accent/40 transition-all duration-300">
                                <div>
                                    <RiDoubleQuotesL className="text-accent/20 mb-6" size={40} />
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <RiStarFill key={i} className="text-accent" />
                                        ))}
                                    </div>
                                    <p className="text-text-muted text-lg italic mb-8 leading-relaxed">
                                        "{review.content}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full border-2 border-accent/20" />
                                    <div>
                                        <h4 className="text-white font-bold">{review.name}</h4>
                                        <p className="text-accent text-xs font-medium uppercase tracking-wider">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #A0A0A0;
          opacity: 0.5;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #FFD54F !important;
          width: 24px;
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
