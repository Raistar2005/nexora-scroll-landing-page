import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, Sparkles, Sun, Moon, Palette, Code2, Layers3 } from 'lucide-react';

const services = [
  { icon: Palette, title: 'Brand & Design', text: 'Distinctive visual identities made to stand out.' },
  { icon: Code2, title: 'Web Development', text: 'Fast, responsive websites built for real people.' },
  { icon: Layers3, title: 'Digital Strategy', text: 'Clear ideas that turn ambition into action.' }
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className={dark ? 'site dark' : 'site light'}>
      <header className="navbar">
        <a className="logo" href="#home"><Sparkles size={20}/> NEXORA<span>.</span></a>
        <button className="menu-btn" onClick={() => setMenu(!menu)}><Menu/></button>
        <nav className={menu ? 'nav open' : 'nav'}>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#work" onClick={() => setMenu(false)}>Work</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#pricing" onClick={() => setMenu(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact ↗</a>
        </nav>
        <button className="theme-btn" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span/> INDEPENDENT DIGITAL STUDIO</p>
            <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>Ideas into<br/><span>impact.</span></motion.h1>
            <p className="intro">We craft thoughtful digital experiences that help ambitious brands move the world forward.</p>
            <div className="hero-actions"><a className="primary" href="#work">Explore our work <ArrowUpRight size={17}/></a><a className="plain" href="#services">What we do ↘</a></div>
            <div className="trust"><div className="avatars"><span>JD</span><span>AK</span><span>MS</span></div><p><b>Good people. Great work.</b><small>Trusted by teams with big ideas.</small></p></div>
          </div>
          <div className="art">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <motion.div className="orb" animate={{rotate:360}} transition={{duration:35,repeat:Infinity,ease:'linear'}}>✳</motion.div>
            <motion.div className="float float-top" animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity}}>✦ &nbsp; Built to perform</motion.div>
            <motion.div className="float float-bottom" animate={{y:[0,8,0]}} transition={{duration:4,repeat:Infinity}}>↗ &nbsp; +248% engagement</motion.div>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE <span/> 01 / 05</div>
        </section>

        <section className="stats wrap">
          {[['48+','Projects shipped'],['21','Happy partners'],['6 yrs','Making good stuff'],['98%','Would recommend us']].map(([n,t])=><div className="stat" key={t}><strong>{n}</strong><span>{t}</span></div>)}
        </section>

        <section className="section wrap" id="services">
          <div className="section-heading"><div><p className="eyebrow">WHAT WE BRING</p><h2>Good work starts<br/>with <span>good thinking.</span></h2></div><p>From the first sketch to the final pixel, we bring clarity, craft, and a little bit of magic to every challenge.</p></div>
          <div className="cards">{services.map((s,i)=><motion.article className="service-card" key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}}><div className="service-icon"><s.icon/></div><small>0{i+1}</small><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" className="round-arrow">↗</a></motion.article>)}</div>
        </section>

        <section className="section wrap" id="work">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Made to make<br/>you <span>look twice.</span></h2></div><a className="plain" href="#contact">Have a project? ↗</a></div>
          <div className="projects"><article className="project project-a"><small>BRAND IDENTITY · 2026</small><strong>F/F</strong><h3>Form & Function</h3></article><article className="project project-b"><small>PRODUCT DESIGN · 2026</small><strong>orbit.</strong><h3>Orbit Finance</h3></article><article className="project project-c"><small>WEB EXPERIENCE · 2025</small><strong>auré</strong><h3>Auré Studio</h3></article></div>
        </section>

        <section className="manifesto" id="about"><div className="wrap"><p className="eyebrow">OUR POINT OF VIEW</p><h2>Less noise.<br/>More <span>meaning.</span></h2><p>The internet doesn’t need more stuff. It needs more things that matter. We make digital work with purpose and people at its heart.</p><a className="primary" href="#contact">Let’s get to know each other ↗</a></div></section>

        <section className="section wrap"><div className="section-heading"><div><p className="eyebrow">OUR JOURNEY</p><h2>Built on curiosity.<br/><span>Driven by craft.</span></h2></div></div><div className="timeline">{[['2022','The first spark','A small team with a big belief in better digital experiences.'],['2023','Finding our rhythm','Partnered with ambitious teams and shipped our first projects.'],['2024','Growing with purpose','Expanded across strategy, design, and engineering.'],['2026','What comes next','Building thoughtful technology for brands shaping tomorrow.']].map(([year,title,desc])=><div className="timeline-row" key={year}><b>{year}</b><span className="node"/><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></section>

        <section className="section wrap"><div className="testimonial"><p className="eyebrow">KIND WORDS, REAL PEOPLE</p><blockquote>“They didn’t just deliver a beautiful website. They helped us see our brand more clearly — and gave us the tools to take it somewhere new.”</blockquote><b>Alex Morgan</b><small>Founder, Form & Function</small></div></section>

        <section className="section wrap" id="pricing"><div className="section-heading"><div><p className="eyebrow">CLEAR FROM THE START</p><h2>Good things.<br/><span>Fair numbers.</span></h2></div></div><div className="pricing">{[['Launch','$1,499','Landing page','Responsive development','Core motion effects'],['Momentum','$3,499','Up to 5 pages','Advanced interactions','30-day support'],['Custom','Let’s talk','Bespoke strategy','Dedicated team','Ongoing collaboration']].map(([name,price,a,b,c],i)=><article className={i===1?'price-card featured':'price-card'} key={name}><p>{name}</p><h3>{price}</h3><small>Thoughtful work for ambitious teams.</small><a className="primary" href="#contact">Choose {name} ↗</a><hr/><ul><li>✓ {a}</li><li>✓ {b}</li><li>✓ {c}</li></ul></article>)}</div></section>

        <section className="section wrap contact" id="contact"><div><p className="eyebrow">YOUR TURN</p><h2>Have a good<br/>one in <span>mind?</span></h2><p>Tell us what you’re dreaming up. We’ll bring the questions and fresh ideas.</p></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><h3>Thanks for reaching out!</h3><p>This demo form validated successfully. Connect a backend to receive real messages.</p><button type="button" className="primary" onClick={()=>setSent(false)}>Send another</button></div>:<><label>Your name<input required minLength="2" placeholder="Jane Smith"/></label><label>Email address<input required type="email" placeholder="jane@company.com"/></label><label>Service<select required defaultValue=""><option value="" disabled>Choose a service</option><option>Brand & Design</option><option>Web Development</option><option>Digital Strategy</option><option>Other</option></select></label><label>Project details<textarea required minLength="10" rows="4" placeholder="Tell us a little about your idea..."/></label><button className="primary" type="submit">Send your note ↗</button></>}</form></section>
      </main>
      <footer className="footer wrap"><a className="logo" href="#home"><Sparkles size={18}/> NEXORA<span>.</span></a><p>Independent by nature. Digital by design.</p><small>© 2026 NEXORA STUDIO</small></footer>
    </div>
  );
}