import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Users, GraduationCap, ShieldCheck, Lightbulb, Globe2, Atom, Palette, Trophy, HeartHandshake, CalendarDays, Clock3, MapPin, Quote } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ProgramCard } from "../components/ProgramCard";

const features = [
  { icon: BookOpen, title: "Quality education", text: "A relevant curriculum designed for real-world success." },
  { icon: Users, title: "Experienced teachers", text: "Passionate educators who know every learner matters." },
  { icon: GraduationCap, title: "Whole-child development", text: "Academic, social, emotional and creative growth." },
  { icon: ShieldCheck, title: "Safe environment", text: "A secure, welcoming campus where students thrive." },
  { icon: Lightbulb, title: "Modern facilities", text: "Purpose-built spaces for discovery and collaboration." },
  { icon: Globe2, title: "Global opportunities", text: "Preparing students to contribute to a changing world." },
];
const programs = [
  { icon: BookOpen, title: "Junior Secondary", tag: "JSS 1–3", description: "Building strong foundations, curiosity and confidence for future learning." },
  { icon: GraduationCap, title: "Senior Secondary", tag: "SSS 1–3", description: "Focused pathways that prepare students for university and beyond." },
  { icon: Atom, title: "STEM & Innovation", tag: "Discover", description: "Exploring science, technology, engineering and creative problem-solving." },
  { icon: Palette, title: "Arts & Sports", tag: "Thrive", description: "Developing talent, teamwork, self-expression and healthy habits." },
];
const testimonials = [
  { name: "Mrs. Adeyemi", role: "Parent", quote: "Riverside has given my child not just education, but confidence and a sense of purpose.", initials: "MA" },
  { name: "Daniel Okafor", role: "Student", quote: "The teachers are supportive and the learning environment is amazing. I've grown so much here!", initials: "DO" },
  { name: "Chinwe Eze", role: "Alumna", quote: "Riverside truly prepares students for the future. I'm grateful for the opportunities I had here.", initials: "CE" },
];
const events = [
  { day: "14", month: "NOV", category: "SCHOOL EVENT", title: "Open Day & Campus Tour", details: "Meet our teachers, explore our facilities and experience Riverside.", time: "10:00 AM – 1:00 PM" },
  { day: "21", month: "NOV", category: "ACADEMICS", title: "STEM Discovery Showcase", details: "Student-led experiments, robotics demonstrations and creative projects.", time: "11:00 AM – 2:00 PM" },
  { day: "05", month: "DEC", category: "COMMUNITY", title: "Inter-house Sports Festival", details: "A day of friendly competition, teamwork and school spirit.", time: "9:00 AM – 4:00 PM" },
];

export function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-shade"></div>
      <div className="container hero-content">
        <span className="eyebrow eyebrow-bright">THE RIGHT FOUNDATION FOR A BRIGHTER TOMORROW</span>
        <h1>Welcome to <span>Riverside College</span></h1>
        <p>We provide a safe, supportive and inspiring environment where students learn, grow and achieve their dreams.</p>
        <div className="hero-actions"><Link to="/admissions" className="button button-primary button-large">Apply Now <ArrowRight size={17} /></Link><Link to="/academics" className="button button-outline button-large">Explore our programs</Link></div>
        <div className="hero-note"><span className="note-dot"></span> A community where every learner belongs</div>
      </div>
      <div className="hero-stats container"><div><strong>25+</strong><span>Years of learning</span></div><div><strong>1,200+</strong><span>Happy students</span></div><div><strong>98%</strong><span>Parent satisfaction</span></div><div><strong>40+</strong><span>Dedicated educators</span></div></div>
    </section>

    <section className="feature-band"><div className="container feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-item" key={title}><span className="feature-icon"><Icon size={23} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section about-preview"><div className="container about-grid">
      <div className="about-image-wrap"><img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85" alt="Modern school building surrounded by green lawns" /><div className="image-caption"><span className="caption-icon"><GraduationCap size={21} /></span><span><strong>Learn with purpose.</strong><small>Grow with confidence.</small></span></div></div>
      <div className="about-copy"><span className="eyebrow">A LITTLE ABOUT US</span><h2>More than just a school.</h2><p className="lead">At Riverside College, education is about discovering potential, building character and preparing young people to make a difference.</p><p>We combine high academic standards with personal attention, meaningful experiences and a caring community. Every student is encouraged to ask questions, explore interests and find their own path to success.</p><ul className="check-list"><li><ShieldCheck size={18} /> Welcoming and inclusive community</li><li><ShieldCheck size={18} /> Personalised learning and support</li><li><ShieldCheck size={18} /> Strong focus on values and leadership</li></ul><Link to="/about" className="button button-primary">Discover our story <ArrowRight size={16} /></Link></div>
    </div></section>

    <section className="section programs-section"><div className="container"><SectionHeading eyebrow="LEARNING THAT OPENS DOORS" title="Programs for every learner" description="A strong foundation, room to explore and pathways to a future full of possibility."/><div className="program-grid">{programs.map((p) => <ProgramCard key={p.title} {...p} />)}</div><div className="center-action"><Link to="/academics" className="button button-dark">View all academic programs <ArrowRight size={16} /></Link></div></div></section>

    <section className="section campus-section"><div className="container campus-grid"><div><span className="eyebrow">LIFE AT RIVERSIDE</span><h2>Room to learn.<br/><span className="text-blue">Space to become.</span></h2><p className="lead">The best learning happens when students feel safe enough to try, supported enough to grow and inspired enough to dream big.</p><div className="campus-points"><div><span><Atom size={20}/></span><div><strong>Explore new ideas</strong><p>Science labs, digital learning and hands-on projects.</p></div></div><div><span><Trophy size={20}/></span><div><strong>Find your community</strong><p>Sports, arts, clubs and student leadership.</p></div></div><div><span><HeartHandshake size={20}/></span><div><strong>Grow with support</strong><p>Pastoral care that values each student's wellbeing.</p></div></div></div><Link to="/campus-life" className="text-link">Explore campus life <ArrowRight size={16}/></Link></div><div className="campus-photo-grid"><img className="campus-photo-main" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85" alt="Students walking together on campus"/><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=650&q=85" alt="Students learning in a classroom"/><div className="campus-photo-note"><GraduationCap size={23}/><strong>Every student.</strong><span>Every possibility.</span></div></div></div></section>

    <section className="section testimonials-section"><div className="container"><SectionHeading eyebrow="KIND WORDS, REAL COMMUNITY" title="Trusted by families" description="Our greatest achievement is seeing students grow into confident, thoughtful people."/><div className="testimonial-grid">{testimonials.map((t) => <article className="testimonial-card" key={t.name}><Quote className="quote-icon" size={27}/><p>“{t.quote}”</p><div className="testimonial-person"><span className="avatar">{t.initials}</span><span><strong>{t.name}</strong><small>{t.role}</small></span><span className="stars" aria-label="5 out of 5 stars">★★★★★</span></div></article>)}</div></div></section>

    <section className="section events-section"><div className="container"><div className="events-heading"><SectionHeading eyebrow="WHAT'S HAPPENING" title="The latest at Riverside" description="There is always something to discover, celebrate and look forward to."/><Link to="/news-events" className="text-link">All news & events <ArrowRight size={16}/></Link></div><div className="events-grid">{events.map((e) => <article className="event-card" key={e.title}><div className="event-date"><strong>{e.day}</strong><span>{e.month}</span></div><div className="event-content"><span className="event-category">{e.category}</span><h3>{e.title}</h3><p>{e.details}</p><div className="event-meta"><span><Clock3 size={14}/>{e.time}</span><span><MapPin size={14}/>School campus</span></div></div></article>)}</div></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow eyebrow-bright">YOUR NEXT CHAPTER STARTS HERE</span><h2>Give your child a place to thrive.</h2><p>Come and see what makes Riverside special. We'd love to meet your family.</p></div><Link to="/admissions" className="button button-white button-large">Begin your application <ArrowUpRight size={18}/></Link></div></section>
  </>;
}
