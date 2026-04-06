import "./Landing.css";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div className="landing">
      <header className="landing__topbar">
        <div className="landing__brand"></div>

        <div className="landing__topbar-actions">
          <button>SIGN IN</button>
          <button>REGISTER</button>
        </div>
      </header>

      <div className="landing__shell">
        <aside className="landing__sidebar">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>PRICING</button>
          <button>CONTACT</button>
        </aside>

        <main className="landing__main">
          <p className="landing__eyebrow">WELCOME</p>

          <h1 className="landing__title">
            LESS NOISE.
            <br />
            MORE IMPACT.
          </h1>

          <p className="landing__subtitle">
            Clean design. Bold choices. Nothing unnecessary.
          </p>

          <div className="landing__actions">
            <button>GET STARTED</button>
            <button>LEARN MORE</button>
          </div>

          <section className="landing__cards">
            <article className="landing__card">
              <h3>SIMPLE</h3>
              <p>No clutter. Every element earns its place.</p>
            </article>

            <article className="landing__card">
              <h3>BOLD</h3>
              <p>Strong contrast. Strong statements.</p>
            </article>

            <article className="landing__card">
              <h3>FAST</h3>
              <p>Built light, ships fast.</p>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
