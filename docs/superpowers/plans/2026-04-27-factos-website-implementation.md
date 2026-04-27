# Factos Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first production-ready static website for Factos Solutions based on the approved executive-dark mockup and design spec.

**Architecture:** Use a static site with focused files: `index.html` for semantic content, `src/styles.css` for layout/visual system, `src/main.js` for microinteractions, and `assets/` for brand images. This keeps the first version deployable anywhere and avoids framework/dependency setup while preserving a modern interactive feel.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, local image assets, Git.

---

## File Structure

- Create: `index.html`
  - Semantic landing page content and section order.
  - Links to `src/styles.css` and `src/main.js`.
  - Uses `assets/logo.png`.
- Create: `src/styles.css`
  - Brand tokens, responsive layout, cards, hero, animation, hover states.
  - Palette: navy, orange, light blue, white, soft grays.
- Create: `src/main.js`
  - Smooth section navigation.
  - Scroll reveal behavior.
  - Subtle hero visual pointer movement.
  - Current-year footer text.
- Create: `assets/logo.png`
  - Copy of the approved Factos Solutions logo.
- Modify: `.gitignore`
  - Keep `.superpowers/` ignored.
  - Keep no production files ignored.
- Keep: `factos-homepage-mockup-a-logo.html`
  - Visual reference only, not the production entry point.
- Keep: `docs/superpowers/specs/2026-04-27-factos-website-design.md`
  - Source of truth for design decisions.

## Implementation Tasks

### Task 1: Scaffold Production Static Site

**Files:**
- Create: `index.html`
- Create: `src/styles.css`
- Create: `src/main.js`
- Create: `assets/logo.png`
- Modify: `.gitignore`

- [ ] **Step 1: Copy the logo into the project**

Run:

```powershell
New-Item -ItemType Directory -Force -Path 'assets' | Out-Null
Copy-Item -LiteralPath 'C:\Users\jpozo\Documents\Factos Solutions\Web con Claude Code\logo.png' -Destination 'assets\logo.png' -Force
```

Expected:

```text
assets/logo.png exists
```

- [ ] **Step 2: Create source folder**

Run:

```powershell
New-Item -ItemType Directory -Force -Path 'src' | Out-Null
```

Expected:

```text
src folder exists
```

- [ ] **Step 3: Write the production HTML**

Create `index.html` with this complete structure:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Factos Solutions brinda consultoria en automatizacion e IA para optimizar procesos empresariales en Peru.">
  <title>Factos Solutions | Automatizacion e IA para procesos empresariales</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="src/styles.css">
</head>
<body>
  <header class="site-header" data-reveal>
    <a class="brand" href="#inicio" aria-label="Factos Solutions inicio">
      <img src="assets/logo.png" alt="Factos Solutions">
    </a>
    <nav class="nav-links" aria-label="Navegacion principal">
      <a href="#servicios">Servicios</a>
      <a href="#procesos">Procesos</a>
      <a href="#academia">Academia</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <a class="nav-action" href="#diagnostico">Diagnostico</a>
  </header>

  <main>
    <section id="inicio" class="hero section">
      <div class="hero-content" data-reveal>
        <p class="eyebrow">Consultoria en automatizacion e IA</p>
        <h1>Procesos empresariales mas inteligentes</h1>
        <p class="hero-copy">Ayudamos a empresas y negocios en Peru a detectar tareas manuales, ordenar sus flujos y aplicar automatizacion e inteligencia artificial de forma practica.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#servicios">Explorar servicios</a>
          <a class="button button-secondary" href="#diagnostico">Ver diagnostico S/150</a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true" data-reveal>
        <div class="flow-path"></div>
        <div class="glass-cube" data-tilt></div>
        <span class="node node-one"></span>
        <span class="node node-two"></span>
        <span class="node node-three"></span>
        <div class="opportunity-card">
          <span>Primer paso</span>
          <strong>Mapa de oportunidades de automatizacion</strong>
        </div>
      </div>
    </section>

    <section id="servicios" class="section services-section">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Servicios</p>
        <h2>Consultoria y ejecucion para pasar de tareas manuales a sistemas conectados</h2>
      </div>
      <div class="service-grid">
        <article class="service-card" data-reveal>
          <span class="card-line card-line-orange"></span>
          <h3>Consultoria IA</h3>
          <p>Diagnostico, priorizacion y roadmap para aplicar tecnologia donde genera impacto.</p>
        </article>
        <article class="service-card" data-reveal>
          <span class="card-line card-line-blue"></span>
          <h3>Automatizacion de procesos</h3>
          <p>Flujos, integraciones, alertas y reportes para reducir trabajo repetitivo.</p>
        </article>
        <article class="service-card" data-reveal>
          <span class="card-line card-line-light"></span>
          <h3>Webs conectadas</h3>
          <p>Paginas modernas integradas a formularios, CRM, agenda o procesos internos.</p>
        </article>
      </div>
    </section>

    <section id="procesos" class="section problems-section">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Procesos</p>
        <h2>Problemas que se pueden ordenar y automatizar</h2>
      </div>
      <div class="problem-grid">
        <article data-reveal><h3>Trabajo manual repetitivo</h3><p>Tareas que consumen horas y dependen de seguimiento humano constante.</p></article>
        <article data-reveal><h3>Informacion dispersa</h3><p>Datos repartidos entre WhatsApp, Excel, correos, formularios y sistemas.</p></article>
        <article data-reveal><h3>Seguimiento lento</h3><p>Ventas, operaciones o administracion sin alertas claras ni responsables visibles.</p></article>
        <article data-reveal><h3>Reportes hechos a mano</h3><p>Indicadores que llegan tarde porque se consolidan manualmente.</p></article>
        <article data-reveal><h3>IA sin claridad</h3><p>Interes por aplicar IA, pero sin saber donde conviene empezar.</p></article>
        <article data-reveal><h3>Webs desconectadas</h3><p>Paginas que reciben visitas pero no activan procesos comerciales u operativos.</p></article>
      </div>
    </section>

    <section class="section use-cases-section">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">Aplicaciones</p>
        <h2>Una misma metodologia para distintos tipos de negocio</h2>
      </div>
      <div class="use-case-list">
        <article data-reveal><span>01</span><h3>Pymes tradicionales</h3><p>Digitalizar tareas repetitivas, ordenar operaciones y reducir dependencia de hojas sueltas.</p></article>
        <article data-reveal><span>02</span><h3>Equipos administrativos o comerciales</h3><p>Reducir cuellos de botella, mejorar seguimiento y centralizar informacion critica.</p></article>
        <article data-reveal><span>03</span><h3>Negocios digitales</h3><p>Escalar atencion, ventas, reportes y procesos internos con automatizacion e IA.</p></article>
      </div>
    </section>

    <section id="diagnostico" class="section diagnostic-section">
      <div class="diagnostic-panel" data-reveal>
        <div>
          <p class="eyebrow">Diagnostico de procesos</p>
          <h2>Antes de implementar, identificamos que conviene automatizar primero</h2>
          <p>Una evaluacion practica para detectar oportunidades, priorizar por impacto y definir proximos pasos.</p>
        </div>
        <div class="price-card">
          <span>Inversion</span>
          <strong>S/150</strong>
          <a class="button button-primary" href="#contacto">Solicitar diagnostico</a>
        </div>
      </div>
      <ul class="diagnostic-list" data-reveal>
        <li>Reunion de levantamiento</li>
        <li>Identificacion de procesos repetitivos</li>
        <li>Mapa de oportunidades</li>
        <li>Recomendacion de proximos pasos</li>
        <li>Priorizacion segun impacto y facilidad</li>
      </ul>
    </section>

    <section id="academia" class="section academy-section">
      <div class="academy-content" data-reveal>
        <p class="eyebrow">Academia</p>
        <h2>Aprende a aplicar automatizacion e IA en tu negocio</h2>
        <p>Proximamente: recursos, talleres y guias practicas para empresarios que quieren entender la tecnologia antes de invertir en ella.</p>
      </div>
    </section>

    <section id="contacto" class="section contact-section">
      <div data-reveal>
        <p class="eyebrow">Contacto</p>
        <h2>Empecemos identificando que procesos puedes automatizar primero</h2>
        <div class="contact-actions">
          <a class="button button-primary" href="mailto:contacto@factossolutions.com">Enviar correo</a>
          <a class="button button-secondary" href="#diagnostico">Ver diagnostico</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <span>Factos Solutions</span>
    <span>© <span id="year">2026</span> Consultoria en automatizacion e IA</span>
  </footer>

  <script src="src/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create empty CSS and JS files**

Create `src/styles.css`:

```css
/* Styles added in Task 2. */
```

Create `src/main.js`:

```js
// Interactions added in Task 3.
```

- [ ] **Step 5: Verify scaffold opens**

Run:

```powershell
Test-Path 'index.html'
Test-Path 'src\styles.css'
Test-Path 'src\main.js'
Test-Path 'assets\logo.png'
```

Expected:

```text
True
True
True
True
```

- [ ] **Step 6: Commit scaffold**

Run:

```bash
git add index.html src/styles.css src/main.js assets/logo.png .gitignore
git commit -m "feat: scaffold Factos website"
```

Expected:

```text
[main ...] feat: scaffold Factos website
```

If Git reports missing author identity, configure only this repository before retrying:

```bash
git config user.name "Jose Pozo"
```

Then pause and request the GitHub email chosen by the project owner before running `git config user.email`.

### Task 2: Implement Visual System and Responsive Layout

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Replace `src/styles.css` with the full stylesheet**

Use this content:

```css
:root {
  --navy-950: #06111f;
  --navy-900: #081b2f;
  --navy-800: #0c2741;
  --navy-700: #123a5d;
  --orange: #f5682d;
  --orange-dark: #d94f1f;
  --blue: #63b3e6;
  --blue-strong: #2a88c7;
  --white: #ffffff;
  --ink: #10243a;
  --muted: #d6e2ee;
  --soft: #f3f6fb;
  --line: rgba(255, 255, 255, .12);
  --shadow: 0 30px 90px rgba(8, 27, 47, .25);
  color-scheme: light;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--soft);
  color: var(--ink);
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px clamp(18px, 4vw, 56px);
  background: rgba(8, 27, 47, .92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(16px);
}

.brand img {
  display: block;
  width: 168px;
  height: auto;
  padding: 7px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, .96);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  color: #d8e7f7;
  font-size: 14px;
  font-weight: 600;
}

.nav-links a,
.nav-action {
  transition: color .2s ease, background .2s ease, transform .2s ease;
}

.nav-links a:hover {
  color: var(--blue);
}

.nav-action {
  height: 38px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, .22);
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: rgba(255, 255, 255, .08);
  font-weight: 800;
}

.nav-action:hover {
  background: var(--orange);
  transform: translateY(-1px);
}

.section {
  padding: clamp(64px, 8vw, 108px) clamp(22px, 5vw, 64px);
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, .95fr);
  gap: clamp(28px, 5vw, 58px);
  min-height: calc(100vh - 76px);
  overflow: hidden;
  color: var(--white);
  background:
    radial-gradient(circle at 80% 18%, rgba(42, 136, 199, .32), transparent 30%),
    radial-gradient(circle at 18% 82%, rgba(245, 104, 45, .24), transparent 28%),
    linear-gradient(135deg, var(--navy-950) 0%, var(--navy-800) 58%, var(--navy-900) 100%);
}

.hero-content {
  align-self: center;
  max-width: 690px;
}

.eyebrow {
  margin: 0;
  color: var(--blue);
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: .1em;
}

h1,
h2,
h3,
p {
  letter-spacing: 0;
}

h1 {
  margin: 16px 0 0;
  max-width: 700px;
  font-size: clamp(46px, 7vw, 82px);
  line-height: .96;
  font-weight: 900;
}

h2 {
  margin: 12px 0 0;
  font-size: clamp(32px, 4.6vw, 56px);
  line-height: 1.02;
}

h3 {
  margin: 0;
  font-size: 20px;
  line-height: 1.15;
}

.hero-copy,
.section-heading p + h2 + p {
  max-width: 610px;
}

.hero-copy {
  color: var(--muted);
  font-size: clamp(17px, 1.8vw, 20px);
  line-height: 1.58;
  margin: 24px 0 0;
}

.hero-actions,
.contact-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.button {
  min-height: 48px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  font-weight: 900;
  font-size: 15px;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--orange);
  color: var(--white);
  box-shadow: 0 18px 45px rgba(245, 104, 45, .3);
}

.button-primary:hover {
  background: var(--orange-dark);
}

.button-secondary {
  border: 1px solid rgba(255, 255, 255, .22);
  color: #eaf4ff;
  background: rgba(255, 255, 255, .07);
}

.hero-visual {
  position: relative;
  min-height: 440px;
  align-self: center;
}

.glass-cube {
  position: absolute;
  right: clamp(38px, 8vw, 86px);
  top: 20px;
  width: clamp(210px, 24vw, 284px);
  aspect-ratio: 1;
  border-radius: 42px;
  background: linear-gradient(135deg, rgba(42, 136, 199, .52), rgba(255, 255, 255, .08));
  border: 1px solid rgba(255, 255, 255, .18);
  transform: rotate(12deg);
  box-shadow: 0 34px 90px rgba(42, 136, 199, .26);
  transition: transform .18s ease-out;
}

.glass-cube::after {
  content: "";
  position: absolute;
  inset: 34px;
  border-radius: 28px;
  background: rgba(255, 255, 255, .09);
  border: 1px solid rgba(255, 255, 255, .16);
  backdrop-filter: blur(8px);
}

.flow-path {
  position: absolute;
  right: clamp(88px, 12vw, 156px);
  top: 104px;
  width: 276px;
  height: 176px;
  border: 1px solid rgba(255, 255, 255, .18);
  border-left: 0;
  border-bottom: 0;
  border-radius: 0 42px 0 0;
}

.node {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 0 8px rgba(245, 104, 45, .12);
}

.node-one { right: 354px; top: 118px; }
.node-two { right: 244px; top: 232px; background: var(--blue); box-shadow: 0 0 0 8px rgba(99, 179, 230, .12); }
.node-three { right: 130px; top: 88px; }

.opportunity-card {
  position: absolute;
  right: 0;
  bottom: 18px;
  width: min(310px, 92%);
  border-radius: 16px;
  padding: 18px;
  background: rgba(255, 255, 255, .94);
  color: var(--ink);
  box-shadow: 0 24px 70px rgba(0, 0, 0, .22);
}

.opportunity-card span,
.price-card span {
  color: var(--orange);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .08em;
  font-size: 12px;
}

.opportunity-card strong {
  display: block;
  margin-top: 7px;
  font-size: 22px;
  line-height: 1.08;
}

.services-section,
.use-cases-section,
.academy-section {
  background: var(--white);
}

.section-heading {
  max-width: 820px;
  margin-bottom: 28px;
}

.service-grid,
.problem-grid,
.use-case-list {
  display: grid;
  gap: 16px;
}

.service-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card,
.problem-grid article,
.use-case-list article {
  border-radius: 14px;
  padding: 24px;
  border: 1px solid #dbe5ef;
  background: #f8fafc;
}

.service-card {
  min-height: 188px;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(42, 136, 199, .35);
  box-shadow: 0 20px 55px rgba(16, 36, 58, .1);
}

.card-line {
  display: block;
  width: 54px;
  height: 5px;
  border-radius: 999px;
  margin-bottom: 18px;
}

.card-line-orange { background: var(--orange); }
.card-line-blue { background: var(--blue); }
.card-line-light { background: var(--navy-700); }

.service-card p,
.problem-grid p,
.use-case-list p,
.diagnostic-panel p,
.academy-content p {
  color: #4b6078;
  line-height: 1.55;
}

.problems-section,
.diagnostic-section,
.contact-section {
  background: #edf3f9;
}

.problem-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.use-case-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.use-case-list span {
  display: inline-flex;
  color: var(--orange);
  font-weight: 900;
  margin-bottom: 16px;
}

.diagnostic-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 28px;
  align-items: center;
  padding: clamp(28px, 5vw, 44px);
  border-radius: 18px;
  color: var(--white);
  background: linear-gradient(135deg, var(--navy-900), var(--navy-700));
  box-shadow: var(--shadow);
}

.diagnostic-panel h2 {
  max-width: 720px;
}

.diagnostic-panel p {
  color: var(--muted);
  max-width: 680px;
}

.price-card {
  border-radius: 16px;
  padding: 22px;
  background: rgba(255, 255, 255, .94);
  color: var(--ink);
}

.price-card strong {
  display: block;
  margin: 8px 0 18px;
  font-size: 48px;
  line-height: 1;
}

.diagnostic-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  padding: 0;
  margin: 18px 0 0;
  list-style: none;
}

.diagnostic-list li {
  border-radius: 12px;
  background: var(--white);
  border: 1px solid #dbe5ef;
  padding: 16px;
  font-weight: 800;
  font-size: 14px;
}

.academy-section {
  position: relative;
  overflow: hidden;
}

.academy-section::after {
  content: "";
  position: absolute;
  right: 8%;
  top: 18%;
  width: 220px;
  height: 220px;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(99, 179, 230, .24), rgba(245, 104, 45, .12));
  transform: rotate(12deg);
}

.academy-content {
  max-width: 760px;
  position: relative;
  z-index: 1;
}

.contact-section {
  text-align: center;
}

.contact-section > div {
  max-width: 820px;
  margin: 0 auto;
}

.contact-actions {
  justify-content: center;
}

.contact-section .button-secondary {
  color: var(--ink);
  border-color: #cbd8e6;
  background: var(--white);
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding: 24px clamp(22px, 5vw, 64px);
  background: var(--navy-950);
  color: #d8e7f7;
  font-size: 14px;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .55s ease, transform .55s ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: 360px;
  }

  .service-grid,
  .problem-grid,
  .use-case-list,
  .diagnostic-list {
    grid-template-columns: 1fr 1fr;
  }

  .diagnostic-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .site-header {
    min-height: 70px;
  }

  .brand img {
    width: 142px;
  }

  .nav-action {
    height: 36px;
    padding: 0 14px;
    font-size: 14px;
  }

  .section {
    padding: 56px 20px;
  }

  .hero {
    min-height: auto;
    padding-top: 48px;
  }

  h1 {
    font-size: 46px;
  }

  h2 {
    font-size: 34px;
  }

  .hero-actions,
  .contact-actions {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .hero-visual {
    min-height: 320px;
  }

  .glass-cube {
    right: 28px;
    width: 210px;
  }

  .flow-path {
    right: 80px;
    width: 210px;
  }

  .node-one { right: 278px; }
  .node-two { right: 188px; }
  .node-three { right: 88px; }

  .opportunity-card {
    left: 0;
    right: 0;
    width: auto;
  }

  .service-grid,
  .problem-grid,
  .use-case-list,
  .diagnostic-list {
    grid-template-columns: 1fr;
  }

  .site-footer {
    flex-direction: column;
  }
}
```

- [ ] **Step 2: Open the page locally**

Run:

```powershell
Start-Process 'index.html'
```

Expected:

```text
Browser opens index.html
```

If using Codex in-app browser, navigate to:

```text
file:///C:/Users/jpozo/Documents/Factos%20Solutions/FactosSolutions%20desde%20cero%20con%20Codex/index.html
```

- [ ] **Step 3: Verify responsive layout manually**

Check these viewport widths in browser dev tools or the in-app browser:

```text
Desktop: 1366px wide
Tablet: 768px wide
Mobile: 390px wide
```

Expected:

```text
No overlapping text.
Hero CTA buttons fit.
Service cards stack on mobile.
Diagnostic list stacks on mobile.
Logo remains readable.
```

- [ ] **Step 4: Commit visual system**

Run:

```bash
git add src/styles.css index.html
git commit -m "feat: implement Factos visual system"
```

Expected:

```text
[main ...] feat: implement Factos visual system
```

### Task 3: Add Interactions and Motion

**Files:**
- Modify: `src/main.js`

- [ ] **Step 1: Replace `src/main.js` with interaction code**

Use this content:

```js
const revealTargets = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((target) => revealObserver.observe(target));

const tiltTarget = document.querySelector("[data-tilt]");
const heroVisual = document.querySelector(".hero-visual");

if (tiltTarget && heroVisual) {
  heroVisual.addEventListener("pointermove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltTarget.style.transform = `rotate(12deg) rotateX(${y * -7}deg) rotateY(${x * 7}deg)`;
  });

  heroVisual.addEventListener("pointerleave", () => {
    tiltTarget.style.transform = "rotate(12deg)";
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear().toString();
}
```

- [ ] **Step 2: Verify scroll reveal and tilt do not break layout**

Open:

```text
file:///C:/Users/jpozo/Documents/Factos%20Solutions/FactosSolutions%20desde%20cero%20con%20Codex/index.html
```

Expected:

```text
Sections fade in once as the user scrolls.
Hero abstract cube responds subtly to pointer movement on desktop.
Footer year shows current year.
No console errors.
```

- [ ] **Step 3: Commit interactions**

Run:

```bash
git add src/main.js
git commit -m "feat: add website interactions"
```

Expected:

```text
[main ...] feat: add website interactions
```

### Task 4: Content Review and Brand Safety Pass

**Files:**
- Modify if needed: `index.html`
- Modify if needed: `src/styles.css`

- [ ] **Step 1: Search for disallowed tool-specific positioning**

Run:

```powershell
Select-String -Path 'index.html','src\styles.css','src\main.js' -Pattern 'n8n|N8N'
```

Expected:

```text
No output
```

- [ ] **Step 2: Verify required business content exists**

Run:

```powershell
Select-String -Path 'index.html' -Pattern 'Consultoria en automatizacion e IA','S/150','Academia','Automatizacion de procesos','Webs conectadas'
```

Expected:

```text
Matches for all five required phrases
```

- [ ] **Step 3: Verify no placeholder contact language remains**

Run:

```powershell
Select-String -Path 'index.html' -Pattern 'TBD|placeholder|lorem' -CaseSensitive:$false
```

Expected:

```text
No output
```

- [ ] **Step 4: Commit content pass**

Run:

```bash
git add index.html src/styles.css src/main.js
git commit -m "chore: review website content"
```

Expected:

```text
[main ...] chore: review website content
```

If there are no changes after the checks:

```text
Skip this commit.
```

### Task 5: Final Local Verification

**Files:**
- Read: `index.html`
- Read: `src/styles.css`
- Read: `src/main.js`

- [ ] **Step 1: Check current git status**

Run:

```bash
git status --short
```

Expected:

```text
No unstaged production changes except optional docs/mockups already intentionally staged or committed.
```

- [ ] **Step 2: Open final page**

Open:

```text
file:///C:/Users/jpozo/Documents/Factos%20Solutions/FactosSolutions%20desde%20cero%20con%20Codex/index.html
```

Expected:

```text
The page uses the Factos logo.
The page visually matches the approved A mockup direction.
The service card says "Automatizacion de procesos", not a tool name.
The diagnostic price is shown only after service/value sections.
Academia exists as a future-facing educational section.
```

- [ ] **Step 3: Commit plan document if not committed**

Run:

```bash
git add docs/superpowers/plans/2026-04-27-factos-website-implementation.md
git commit -m "docs: add website implementation plan"
```

Expected:

```text
[main ...] docs: add website implementation plan
```

### Task 6: Push to GitHub

**Files:**
- No file edits.

- [ ] **Step 1: Confirm remote**

Run:

```bash
git remote -v
```

Expected:

```text
origin  https://github.com/Zparda/Factos_Con_Codex.git (fetch)
origin  https://github.com/Zparda/Factos_Con_Codex.git (push)
```

- [ ] **Step 2: Push main**

Run:

```bash
git push -u origin main
```

Expected:

```text
branch 'main' set up to track 'origin/main'
```

If authentication fails, use the GitHub CLI or browser login configured on the user's machine, then retry the same push command.

## Self-Review

Spec coverage:

- Positioning as consultoria in automatizacion e IA: Task 1 HTML and Task 4 checks.
- Palette aligned to logo: Task 2 CSS tokens and visual system.
- No n8n in public communication: Task 4 search.
- Diagnostic S/150 after services/value: Task 1 section order and Task 5 visual check.
- Corporate, technological, close, educational tone: Task 1 content and Task 2 visual system.
- Academia section: Task 1 HTML and Task 4 required phrase check.
- Responsive behavior: Task 2 responsive checks and media queries.
- Clear CTAs: Task 1 hero, diagnostic and contact CTAs.

Placeholder scan:

- No `TBD`, `implement later`, or vague test instructions are present.
- Git author email is intentionally not guessed. Execution must pause and ask the project owner if Git requires it.

Type and selector consistency:

- CSS selectors match classes used in `index.html`.
- JavaScript selectors match `[data-reveal]`, `[data-tilt]`, `.hero-visual`, and `#year`.
