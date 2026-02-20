import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { faqs } from '../../data';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-primary px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Knowledge Base</span>
                    <h2 className="section-title">Common <span className="text-accent">Queries</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/10 transition-all"
                            >
                                <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                                <span className="text-accent shrink-0">
                                    {openIndex === idx ? <RiSubtractLine size={24} /> : <RiAddLine size={24} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-white/5 bg-white/[0.02]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center p-8 rounded-3xl bg-accent/5 border border-accent/20">
                    <p className="text-white mb-4">Still have questions?</p>
                    <button className="text-accent font-bold underline underline-offset-4 hover:text-white transition-colors">
                        Contact our 24/7 Concierge Support
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
