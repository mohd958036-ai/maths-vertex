import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  BookOpen,
  Target,
  LineChart,
  UserCheck,
  Calendar,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';

const WHATSAPP_NUMBER = "+919580365233";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20would%20like%20to%20book%20a%201-Hour%20Assessment`;

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-white bg-primary selection:bg-gold selection:text-primary">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg h-[80px] flex items-center' : 'bg-primary h-[80px] flex items-center'}`}>
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <span className="text-white font-display font-bold text-2xl tracking-wide">MATHS<span className="text-gold">VERTEX</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-xs font-semibold tracking-[2px] uppercase">About</a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors text-xs font-semibold tracking-[2px] uppercase">Method</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-light text-primary px-6 py-2.5 font-bold text-xs uppercase tracking-[1px] transition-all">
              Contact Us
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-bold tracking-[2px] uppercase">About</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-bold tracking-[2px] uppercase">Method</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-primary px-[36px] py-[18px] font-bold text-sm uppercase tracking-[1px] mt-4">
            Book Assessment
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-primary overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-4">
                <span className="text-[11px] text-gold uppercase tracking-[4px] font-bold">Exclusive Mentorship for UAE Elite</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white leading-[1.1] tracking-[-1px] mb-6">
                Your Child's Maths,<br />
                My <span className="text-gold">Responsibility.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-light leading-[1.6]">
                1-on-1 Personal Mentorship for Grade 9–12 students. Specialist in IGCSE, IB, and A-Level mastery.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-primary px-[36px] py-[18px] font-bold text-sm uppercase tracking-[1px] transition-all flex items-center justify-center gap-2">
                  Book a 1-Hour Assessment
                  <ChevronRight size={18} />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-gold hover:bg-gold/10 text-white px-[36px] py-[18px] font-bold text-sm uppercase tracking-[1px] transition-all flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
              
              <div className="mt-16 p-8 border-l-2 border-gold bg-gold/5 text-left max-w-md mx-auto md:mx-0">
                <h3 className="m-0 text-lg font-semibold text-white">“I work with only <span className="text-gold">10 students</span> each year.”</h3>
                <p className="mt-2 text-sm text-white/60">Ensuring complete focus, academic accountability, and guaranteed results.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold/20 relative shadow-[0_0_40px_rgba(197,160,34,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary mix-blend-color opacity-20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1635372722656-389f8ce94203?q=80&w=1470&auto=format&fit=crop" 
                  alt="Smartboard with math equations" 
                  className="w-full h-full object-cover object-top contrast-110 saturate-50 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary border-t border-white/5 relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1} className="bg-white/5 border border-white/10 rounded-sm p-8 transition-colors hover:bg-white/10">
              <div className="text-gold font-display text-2xl mb-3">01. Personal Attention</div>
              <p className="text-white/60 text-sm leading-relaxed">No batches. Complete focus on your child's specific learning gaps and strengths.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white/5 border border-white/10 rounded-sm p-8 transition-colors hover:bg-white/10">
              <div className="text-gold font-display text-2xl mb-3">02. Exam Strategy</div>
              <p className="text-white/60 text-sm leading-relaxed">Deep foundational clarity paired with rigorous exam-specific strategies.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white/5 border border-white/10 rounded-sm p-8 transition-colors hover:bg-white/10">
              <div className="text-gold font-display text-2xl mb-3">03. Concept Clarity</div>
              <p className="text-white/60 text-sm leading-relaxed">Transforming fear into confidence through consistent, targeted problem-solving.</p>
            </FadeIn>
            <FadeIn delay={0.4} className="bg-white/5 border border-white/10 rounded-sm p-8 transition-colors hover:bg-white/10">
              <div className="text-gold font-display text-2xl mb-3">04. Full-Year Mentorship</div>
              <p className="text-white/60 text-sm leading-relaxed">Not a short-term crash course. I take complete responsibility for their academic year.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-primary relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Designed exclusively for</h2>
                <div className="space-y-6 mt-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-sm bg-gold/20 flex items-center justify-center shrink-0 border border-gold">
                      <CheckCircle2 size={14} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Grade 9–12 Students</h4>
                      <p className="text-white/60 text-sm mt-1">Specifically navigating the crucial high school years.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-sm bg-gold/20 flex items-center justify-center shrink-0 border border-gold">
                      <CheckCircle2 size={14} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">IGCSE, IB, AS & A-Level</h4>
                      <p className="text-white/60 text-sm mt-1">Expertise in international curricula and grading standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-sm bg-gold/20 flex items-center justify-center shrink-0 border border-gold">
                      <CheckCircle2 size={14} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Students aiming for top grades</h4>
                      <p className="text-white/60 text-sm mt-1">Precision training to secure A*s and top university placements.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.2}>
                <div className="bg-primary-light border border-white/10 text-white p-10 md:p-12 rounded-sm relative overflow-hidden">
                  <h3 className="text-gold font-semibold tracking-wide uppercase text-[11px] mb-4">The Commitment</h3>
                  <p className="font-display text-2xl md:text-3xl leading-snug mb-8">
                    "I do not accept every student. The parent, the student, and I must be aligned on the goal and the work required to achieve it."
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-[1px] border-b border-gold pb-1 hover:text-gold transition-colors">
                    Request an Evaluation <ChevronRight size={16} />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-primary border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl text-white mb-4">The Methodology</h2>
            <p className="text-white/60 text-lg">A structured, predictable path to mathematical excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[ 
              { step: "01", title: "Book Assessment", desc: "Reach out via WhatsApp to schedule the initial consultation." },
              { step: "02", title: "1-Hour Evaluation", desc: "A deep-dive session with the student to identify core strengths and gaps." },
              { step: "03", title: "Custom Study Plan", desc: "A tailored roadmap designed specifically for your child's curriculum and goals." },
              { step: "04", title: "Weekly 1-on-1s", desc: "Weekly classes designed for the entire academic year to ensure steady progress." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                <div className="bg-white/5 p-8 rounded-sm border border-white/10 h-full transition-colors hover:bg-white/10">
                  <span className="font-display text-4xl text-white/10 absolute top-6 right-6">{item.step}</span>
                  <div className="relative z-10 pt-4 mt-6">
                    <h4 className="font-bold text-lg text-white mb-3">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusivity Section (Game Changer) */}
      <section className="py-24 bg-primary-light text-white relative overflow-hidden text-center border-t border-b border-white/10">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-6xl text-gold mb-8 italic tracking-tight">
              Only 10 Students<br className="hidden md:block" /> Selected Each Year
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8">
              "I do not run batches. Each student receives my undivided personal attention and complete academic responsibility."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <FadeIn>
                <h2 className="font-display text-4xl text-white mb-2">Mohd Hasib Alam</h2>
                <p className="text-gold font-bold uppercase tracking-[2px] text-[11px] mb-2">Mathematics Specialist</p>
                <p className="text-white/60 text-xs font-bold tracking-[1px] uppercase mb-8">11+ Years of Experience</p>
                
                <div className="space-y-6 text-base text-white/70 leading-relaxed font-light">
                  <p>
                    I specialize in transforming students' relationships with mathematics. My approach goes beyond merely teaching equations; I focus on absolute clarity and high-performance exam strategy.
                  </p>
                  <p>
                    By keeping my roster intentionally small, I operate as a dedicated personal mentor rather than a traditional tutor. This allows me to intimately understand how your child learns, adapting my methodology to their specific cognitive style.
                  </p>
                  <p>
                    My commitment is to long-term results: fundamentally changing their confidence, problem-solving abilities, and ultimately, securing the top grades required for elite university admissions.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <FadeIn delay={0.2}>
                <div className="relative px-8 pb-8">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 border border-gold/50 rounded-sm -z-10 transform translate-x-4 -translate-y-4"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1471&auto=format&fit=crop" 
                    alt="Math equations" 
                    className="rounded-sm w-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)] contrast-110 saturate-50"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Impact */}
      <section className="py-24 bg-primary-light border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-4xl text-white">The Impact</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeIn delay={0.1} className="bg-primary p-6 rounded-sm border border-white/10 flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-white"><TrendingUp size={24} /></div>
              <h4 className="font-semibold text-white text-lg">Improved Confidence</h4>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-primary p-6 rounded-sm border border-white/10 flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-white"><BrainCircuit size={24} /></div>
              <h4 className="font-semibold text-white text-lg">Better Problem-Solving Ability</h4>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-primary p-6 rounded-sm border border-white/10 flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-gold"><Menu size={24} /></div>
              <h4 className="font-semibold text-white text-lg">Strong Exam Performance</h4>
            </FadeIn>
            <FadeIn delay={0.4} className="bg-primary p-6 rounded-sm border border-white/10 flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-white"><BookOpen size={24} /></div>
              <h4 className="font-semibold text-white text-lg">Reduced Fear of Maths</h4>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Positioning */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="inline-block border border-gold/30 bg-gold/5 rounded-sm px-6 py-2 mb-6 text-gold text-[11px] font-bold tracking-[2px] uppercase">
              Investment
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Premium 1-on-1 Mentorship
            </h2>
            <p className="text-xl text-white/60 font-light max-w-xl mx-auto">
              Due to the highly personalized nature of this program and strict 10-student capacity, seats are highly limited.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-light text-center px-6 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-8 tracking-[-1px]">
              Limited Slots Available<br className="hidden md:block"/> for This Year
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-primary px-[36px] py-[18px] font-bold text-sm uppercase tracking-[1px] transition-all flex justify-center">
                Book Assessment Now
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-gold hover:bg-gold/10 text-white px-[36px] py-[18px] font-bold text-sm uppercase tracking-[1px] transition-all flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 text-center md:text-left">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white/50 font-display font-semibold text-lg tracking-wide uppercase">Maths<span className="text-white/30">Vertex</span></span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-[11px] text-white/50 font-semibold tracking-[1px] uppercase">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">WhatsApp: {WHATSAPP_NUMBER}</a>
              <a href="mailto:mohd958036@gmail.com" className="hover:text-white transition-colors block">Email: mohd958036@gmail.com</a>
            </div>
            
            <p className="text-white/30 text-[11px] uppercase tracking-[1px]">
              &copy; {new Date().getFullYear()} Maths Vertex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
        {/* Breathing ring effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </a>
    </div>
  );
}
