const Pages = {
  home: `
    <div class="text-center section-spacing">
      <span class="section-label">Native Windows Voice AI</span>
      <h1 class="hero-title">Meet KAI.</h1>
      <p class="large-text text-secondary-highlight max-width-800" style="font-size: clamp(1.2rem, 3vw, 1.8rem); margin-bottom: 2.5rem;">
        Your computer shouldn't wait for commands. It should understand you.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#/download" class="btn-primary" data-link>Download KAI</a>
        <a href="#/features" class="btn-secondary" data-link>View Features</a>
      </div>
    </div>
    <div class="grid-3">
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Voice First</h3>
        <p>Speak naturally. KAI listens, decodes intent, and responds in real-time without friction. No prompts, no text boxes.</p>
      </div>
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Native Presence</h3>
        <p>Built with Electron + Python. It lives on your desktop, not in a browser tab. It's always one hotkey away.</p>
      </div>
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>System Intelligence</h3>
        <p>Contextually aware of your OS. It performs tasks directly within your Windows environment securely.</p>
      </div>
    </div>
    <div class="text-center section-spacing">
      <span class="section-label">The Experience</span>
      <h2 class="large-text">Not a chatbot. Not a tab. <span class="text-gradient">A presence.</span></h2>
      <p class="paragraph-text max-width-700">KAI is companionship, intelligence, and presence, wrapped in a minimal interface that gets out of your way.</p>
    </div>
    <div class="liquid-glass glass-card section-spacing">
      <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
      <div class="grid-2" style="margin-bottom: 0; gap: 4rem;">
        <div>
          <h3 class="medium-text">Natural Language Processing</h3>
          <p class="paragraph-text">KAI doesn't just listen to keywords; it understands context. Ask it to "prepare for the meeting," and it will open your presentation, launch Zoom, and mute your Spotify.</p>
        </div>
        <div>
          <h3 class="medium-text">Local & Private</h3>
          <p class="paragraph-text">Your voice commands and files are processed locally on your machine. KAI does not send your personal data to the cloud. Your system belongs to you.</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <h2 class="large-text">Ready to change how you compute?</h2>
      <a href="#/download" class="btn-primary" data-link>Download KAI for Windows</a>
    </div>
  `,
  features: `
    <div class="text-center section-spacing">
      <span class="section-label">Capabilities</span>
      <h1 class="large-text">Designed for <span class="text-gradient">natural interaction</span>.</h1>
      <p class="paragraph-text max-width-700">KAI bridges the gap between human intent and machine execution. Explore the core features that make KAI the ultimate desktop companion.</p>
    </div>
    <div class="feature-row">
      <div class="feature-text">
        <span class="section-label">Voice Activation</span>
        <h2 class="medium-text">Speak naturally. Act instantly.</h2>
        <p class="paragraph-text">No prompts. No text boxes. Just a conversation with your operating system. KAI processes your voice locally for instant, private responses. Say "Open VS Code" or "Launch Spotify" without touching your keyboard.</p>
      </div>
      <div class="feature-visual liquid-glass" style="border-radius: 16px;">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        Voice Waveform Visual
      </div>
    </div>
    <div class="feature-row">
      <div class="feature-text">
        <span class="section-label">App Integration</span>
        <h2 class="medium-text">Seamless App Control</h2>
        <p class="paragraph-text">Launch and control Windows applications seamlessly. KAI interacts directly with your OS to open, close, and manage the software you use every day. "Find my presentation" has never been easier.</p>
      </div>
      <div class="feature-visual liquid-glass" style="border-radius: 16px;">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        App Control Visual
      </div>
    </div>
    <div class="feature-row">
      <div class="feature-text">
        <span class="section-label">File Management</span>
        <h2 class="medium-text">Intelligent File Search</h2>
        <p class="paragraph-text">Search, summarize, and organize your files using natural language. KAI understands your local directory structure deeply. Ask it to "Summarize this PDF" or "Search my files for Q3 reports" and get instant results.</p>
      </div>
      <div class="feature-visual liquid-glass" style="border-radius: 16px;">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        File System Visual
      </div>
    </div>
    <div class="grid-3 section-spacing">
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Context Awareness</h3>
        <p>Knows what's on your screen and adjusts responses based on the active application.</p>
      </div>
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Privacy First</h3>
        <p>Voice processing happens on-device. Your conversations never leave your machine.</p>
      </div>
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Lightweight</h3>
        <p>Built with Electron + Python, optimized to run quietly in the background without draining resources.</p>
      </div>
    </div>
    <div class="text-center">
      <a href="#/download" class="btn-primary" data-link>Experience KAI Today</a>
    </div>
  `,
  download: `
    <div class="text-center section-spacing">
      <span class="section-label">Get KAI</span>
      <h1 class="large-text">Download KAI.</h1>
      <p class="paragraph-text max-width-700">Native Windows Voice AI Assistant. Version 1.0.0. Install it directly on your machine and experience a new way to interact with your desktop.</p>
    </div>
    <div class="liquid-glass glass-card max-width-700" style="margin: 0 auto 6rem auto; padding: 3rem; text-align: center;">
      <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 2.5rem; color: var(--text-secondary); font-size: 0.9rem; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); padding: 1.5rem 0;">
        <div class="meta-item">Platform <span style="display: block; color: var(--text-primary); margin-top: 0.25rem; font-family: var(--font-display);">Windows 10/11</span></div>
        <div class="meta-item">Version <span style="display: block; color: var(--text-primary); margin-top: 0.25rem; font-family: var(--font-display);">1.0.0</span></div>
        <div class="meta-item">Size <span style="display: block; color: var(--text-primary); margin-top: 0.25rem; font-family: var(--font-display);">~85MB</span></div>
      </div>
      <a href="KAI-Setup-1.0.0.exe" download class="btn-primary" style="width: 100%; margin-bottom: 1rem;" id="download-btn">
        Download KAI-Setup-1.0.0.exe
      </a>
      <div style="display: flex; gap: 1.5rem; justify-content: center; font-size: 0.8rem; color: var(--text-tertiary);">
        <a href="#" style="border-bottom: 1px solid transparent;">System Requirements</a>
        <a href="#" style="border-bottom: 1px solid transparent;">Release Notes</a>
      </div>
    </div>
    <div class="section-spacing">
      <div class="text-center" style="margin-bottom: 4rem;">
        <span class="section-label">Installation</span>
        <h2 class="medium-text">Up and running in minutes</h2>
      </div>
      <div class="grid-3">
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <span class="step-number">01</span>
          <h3>Download</h3>
          <p>Click the download button above to get the KAI-Setup-1.0.0.exe installer file.</p>
        </div>
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <span class="step-number">02</span>
          <h3>Run Installer</h3>
          <p>Double-click the executable and follow the standard Windows installation prompts.</p>
        </div>
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <span class="step-number">03</span>
          <h3>Launch KAI</h3>
          <p>Open KAI, grant microphone permissions, and start speaking to your desktop.</p>
        </div>
      </div>
    </div>
    <div class="section-spacing">
      <div class="text-center" style="margin-bottom: 4rem;">
        <span class="section-label">FAQ</span>
        <h2 class="medium-text">Frequently Asked Questions</h2>
      </div>
      <div class="grid-2">
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <h3>Is KAI free to use?</h3>
          <p>Yes, KAI is currently free to download and use for all Windows 10 and 11 users.</p>
        </div>
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <h3>Does KAI require internet?</h3>
          <p>Only for the initial download. Voice processing and file management happen locally on your machine.</p>
        </div>
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <h3>Is my data private?</h3>
          <p>Absolutely. KAI does not send your voice recordings or personal files to the cloud. Everything stays on your PC.</p>
        </div>
        <div class="liquid-glass glass-card">
          <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
          <h3>What technologies are used?</h3>
          <p>KAI is built natively with Electron for the interface and Python for the backend intelligence and OS integration.</p>
        </div>
      </div>
    </div>
  `,
  about: `
    <div class="text-center section-spacing">
      <span class="section-label">Philosophy</span>
      <h1 class="large-text">Your desktop deserves <span class="text-gradient">a better assistant.</span></h1>
    </div>
    <div class="max-width-800 section-spacing">
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <p class="paragraph-text" style="color: var(--text-primary); font-size: 1.3rem; margin-bottom: 1.5rem;">
          KAI is not a chatbot. KAI is not a web application.
        </p>
        <p class="paragraph-text">
          We believe AI should live where you work—not in a browser tab. For too long, digital assistants have been locked behind search engines or confined to mobile devices. KAI breaks that mold.
        </p>
        <p class="paragraph-text">
          Built with Electron and Python, KAI is installed directly on Windows to provide a native, voice-first experience. Unlike cloud-based assistants, KAI is designed to understand your system, manage your files, and control your applications through natural conversation.
        </p>
        <p class="paragraph-text">
          We are dedicated to building companionship, intelligence, and presence, wrapped in a minimal interface that gets out of your way. This is just the beginning.
        </p>
      </div>
    </div>
    <div class="text-center section-spacing">
      <span class="section-label">The Mission</span>
      <h2 class="medium-text">Built for the modern workflow.</h2>
      <p class="paragraph-text max-width-700">Our mission is to bridge the gap between human intent and machine execution. Every line of code in KAI is designed to reduce friction between you and your operating system.</p>
    </div>
    <div class="grid-3 section-spacing">
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Local First</h3>
        <p>We believe your data belongs to you. KAI processes commands locally, ensuring privacy and speed.</p>
      </div>
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Voice Native</h3>
        <p>Keyboards are efficient, but voice is natural. KAI makes voice the primary interface, not an afterthought.</p>
      </div>
      <div class="liquid-glass glass-card">
        <div class="lg-backdrop"></div><div class="lg-edge"></div><div class="lg-bloom"></div>
        <h3>Open Architecture</h3>
        <p>Built on Electron + Python, KAI is extensible and transparent, designed for developers and power users.</p>
      </div>
    </div>
    <div class="text-center">
      <a href="#/download" class="btn-primary" data-link>Download KAI</a>
    </div>
  `
};