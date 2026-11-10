import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, AudioLines, ChevronDown, CirclePlay,
  Command, Globe2, Menu, MoveUpRight, Orbit, Radio, ShieldCheck, Sparkles,
  Users, X, Zap
} from 'lucide-react'

const navItems = ['Platform', 'Possibilities', 'Our thinking']

function Brand() {
  return <a href="#top" className="brand" aria-label="AlloKonnect home">
    <span className="brand-symbol"><i/><i/><i/><i/></span>
    <span>ALLO<span>KONNECT</span></span>
  </a>
}

function SignalOrb() {
  return <div className="signal-stage" aria-label="Abstract connected network visual">
    <div className="signal-grid"/>
    <div className="orb-halo halo-a"/>
    <div className="orb-halo halo-b"/>
    <div className="orb-core"><div className="core-glow"/><span>AK</span></div>
    <div className="orbit-ring ring-a"><b className="node node-a"/><b className="node node-b"/></div>
    <div className="orbit-ring ring-b"><b className="node node-c"/><b className="node node-d"/></div>
    <div className="orbit-ring ring-c"><b className="node node-e"/></div>
    <div className="signal-label label-a"><span/> PEOPLE / 01</div>
    <div className="signal-label label-b"><span/> MOMENTS / 02</div>
    <div className="signal-label label-c"><span/> POSSIBILITIES / 03</div>
    <div className="orb-coordinate">13°04' N&nbsp; 80°16' E</div>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('People')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: .14 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) setSent(true)
  }

  const tabs: Record<string, {eyebrow: string; title: string; body: string; points: string[]}> = {
    People: {
      eyebrow: 'CONNECTION, WITHOUT THE DISTANCE',
      title: 'Your people.<br/>Within reach.',
      body: 'Make space for the relationships that shape your days. Bring your circles closer with a digital experience designed around people first.',
      points: ['Keep your important circles close', 'Make introductions feel effortless', 'Find a more natural way to stay in touch']
    },
    Moments: {
      eyebrow: 'THE LITTLE THINGS ADD UP',
      title: 'Make more<br/>of every moment.',
      body: 'Plans, conversations and shared experiences belong together. Spend less energy coordinating and more time being there.',
      points: ['Keep plans moving together', 'Bring conversations into context', 'Make everyday coordination simpler']
    },
    Communities: {
      eyebrow: 'BELONGING, BUILT TO GROW',
      title: 'Find your<br/>place in it.',
      body: 'From familiar faces to new shared interests, create room for the communities that make your world bigger.',
      points: ['Discover shared interests', 'Create spaces around what matters', 'Help good connections grow']
    }
  }

  return <div id="top" className="app-shell">
    <div className="topline"><span className="pulse-dot"/> A NEW PERSPECTIVE ON CONNECTION <span className="topline-right">INDEPENDENTLY HUMAN <span>✳</span></span></div>
    <header className="header">
      <div className="wrap header-inner">
        <Brand/>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
          {navItems.map((item, i) => <a key={item} href={['#platform','#possibilities','#thinking'][i]} onClick={() => setMenuOpen(false)}>{item}<sup>0{i+1}</sup></a>)}
        </nav>
        <a className="header-cta" href="#connect">Let's connect <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> THE HUMAN SIDE OF WHAT'S NEXT</div>
          <h1>Connection<br/>is the <span className="gradient-word">future.</span></h1>
          <p className="hero-description">A more thoughtful digital world starts with a simple idea: technology should bring us closer to the people and possibilities that matter.</p>
          <div className="hero-actions"><a href="#platform" className="button-primary">Explore the platform <ArrowUpRight size={17}/></a><a href="#thinking" className="text-action"><CirclePlay size={17}/> Our point of view</a></div>
          <div className="hero-meta"><span>01 / 04</span><span className="meta-line"/><span>BUILT AROUND PEOPLE</span></div>
        </div>
        <div className="hero-visual"><SignalOrb/><div className="visual-index">FIG. 001 <span>THE CONNECTION FIELD</span></div></div>
        <div className="hero-vertical">A DIFFERENT KIND OF DIGITAL EXPERIENCE</div>
      </section>

      <section className="ticker" aria-label="AlloKonnect principles"><div className="ticker-track">
        {Array.from({length:2}).map((_,i)=><div className="ticker-set" key={i}><span>PEOPLE FIRST</span><i>✳</i><span>MORE MEANING</span><i>✳</i><span>LESS FRICTION</span><i>✳</i><span>REAL CONNECTION</span><i>✳</i></div>)}
      </div></section>

      <section id="platform" className="platform section wrap">
        <div className="section-aside reveal"><span className="section-no">01 — PLATFORM</span><span className="aside-line"/><span className="aside-note">A connected way<br/>to move through life.</span></div>
        <div className="platform-main reveal">
          <div className="section-heading"><span className="micro-label">NOT ANOTHER THING TO KEEP UP WITH</span><h2>Make digital<br/>feel <em>personal.</em></h2></div>
          <div className="platform-bottom"><p>AlloKonnect is imagined as a connected space where your relationships, conversations and everyday interactions can feel more considered — and a little less complicated.</p><div className="platform-stat"><strong>01<span>—</span></strong><small>ONE HUMAN<br/>CENTRED IDEA</small></div></div>
        </div>
      </section>

      <section id="possibilities" className="possibilities section">
        <div className="wrap">
          <div className="possibility-head reveal"><div><span className="micro-label">02 — POSSIBILITIES</span><h2>One world.<br/><em>Many ways to connect.</em></h2></div><p>Every connection has its own shape. Explore a few ways a more thoughtful digital experience can fit around yours.</p></div>
          <div className="possibility-layout">
            <div className="tab-list reveal" role="tablist" aria-label="Connection possibilities">
              {Object.keys(tabs).map((tab,i)=><button key={tab} role="tab" aria-selected={activeTab===tab} className={activeTab===tab?'tab active':'tab'} onClick={()=>setActiveTab(tab)}><span>0{i+1}</span>{tab}<ArrowUpRight size={17}/></button>)}
              <div className="tab-foot"><Orbit size={18}/> A LIVING ECOSYSTEM</div>
            </div>
            <div className="tab-content reveal" key={activeTab}>
              <div className="tab-visual">
                <div className="tab-visual-grid"/>
                <div className="tab-icon">{activeTab==='People'?<Users size={48}/>:activeTab==='Moments'?<AudioLines size={48}/>:<Globe2 size={48}/>}</div>
                <span className="tab-visual-label">ALLOKONNECT / {activeTab.toUpperCase()}</span>
                <span className="tab-visual-index">0{Object.keys(tabs).indexOf(activeTab)+1}</span>
              </div>
              <div className="tab-copy"><span className="micro-label">{tabs[activeTab].eyebrow}</span><h3 dangerouslySetInnerHTML={{__html:tabs[activeTab].title}}/><p>{tabs[activeTab].body}</p><ul>{tabs[activeTab].points.map(point=><li key={point}><span><Zap size={13}/></span>{point}</li>)}</ul></div>
            </div>
          </div>
        </div>
      </section>

      <section id="thinking" className="manifesto section wrap">
        <div className="manifesto-top reveal"><span className="micro-label">03 — OUR THINKING</span><span className="manifesto-coordinate">HUMAN / DIGITAL / IN BALANCE</span></div>
        <div className="manifesto-main reveal"><span className="giant-quote">“</span><h2>The best technology<br/>doesn't ask for attention.<br/><span>It gives life back.</span></h2></div>
        <div className="manifesto-foot reveal"><p>We believe technology should be intuitive enough to fade into the background, leaving more room for what happens between people. That's the standard we're working towards.</p><span className="manifesto-mark"><Sparkles size={22}/> A HUMAN FIRST APPROACH</span></div>
      </section>

      <section className="principles section">
        <div className="wrap principles-grid">
          <div className="principles-intro reveal"><span className="micro-label">04 — THE PRINCIPLES</span><h2>Designed for<br/><em>real life.</em></h2><p>Not more noise. Not more complexity. Just a clearer way to bring the important things closer.</p></div>
          <div className="principle-cards">
            <article className="principle-card reveal"><span>01 / INTENTIONAL</span><div className="principle-icon"><Command/></div><h3>Clarity over clutter.</h3><p>Every interaction should have a reason to be there. Keep the experience useful, calm and easy to understand.</p><ArrowUpRight className="card-arrow"/></article>
            <article className="principle-card reveal"><span>02 / CONNECTED</span><div className="principle-icon"><Radio/></div><h3>People over platforms.</h3><p>Technology works best when it helps people find each other, share context and stay connected.</p><ArrowUpRight className="card-arrow"/></article>
            <article className="principle-card reveal"><span>03 / CONSIDERED</span><div className="principle-icon"><ShieldCheck/></div><h3>Trust is the foundation.</h3><p>A thoughtful experience starts with respect for people's time, attention and information.</p><ArrowUpRight className="card-arrow"/></article>
          </div>
        </div>
      </section>

      <section id="connect" className="connect-section">
        <div className="connect-glow"/>
        <div className="wrap connect-inner reveal"><span className="micro-label">05 — THE NEXT CHAPTER</span><h2>Closer is a<br/><em>good place to start.</em></h2><p>Follow the journey as we shape a more human way to connect.</p>
          {sent ? <div className="sent-state"><span>✓</span> Thanks for your interest. This demo doesn't store email addresses yet.</div> :
            <form className="email-form" onSubmit={submit}><input aria-label="Email address" type="email" required placeholder="Enter your email address" value={email} onChange={e=>setEmail(e.target.value)}/><button type="submit">Keep me posted <ArrowUpRight size={17}/></button></form>}
          <small className="form-note">A small note from AlloKonnect, when there's something worth sharing.</small>
        </div>
      </section>

      <section className="faq section wrap">
        <div className="faq-heading reveal"><span className="micro-label">GOOD QUESTIONS</span><h2>Before we<br/><em>get going.</em></h2></div>
        <div className="faq-items reveal">{[
          ['What is AlloKonnect?','This concept presents AlloKonnect as a people-first digital ecosystem. Confirm official product descriptions and features with the AlloKonnect team before publishing.'],
          ['Is this the live AlloKonnect product?','No. This is a frontend landing-page concept and does not connect to an AlloKonnect backend or mobile application.'],
          ['Can I join or download the app here?','The calls to action are design placeholders. Add verified official signup, app-store and contact links before launch.']
        ].map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown className={openFaq===i?'chevron open':''}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div>
      </section>
    </main>

    <footer className="footer"><div className="wrap footer-main"><Brand/><div className="footer-message">A more human<br/>kind of connected.</div><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={15}/></a></div><div className="wrap footer-legal"><span>© {new Date().getFullYear()} ALLOKONNECT / CONCEPT WEBSITE</span><span>DESIGNED AROUND PEOPLE <span className="footer-star">✳</span></span></div></footer>
  </div>
}
export default App
