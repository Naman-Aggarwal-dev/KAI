# KAI

KAI is a standalone web product built around a focused product experience, documentation surface, download flow, and privacy-facing pages.

The repository is intentionally framework-light: the application is composed from HTML, CSS, and JavaScript rather than a heavy build stack. This keeps the project portable and straightforward to deploy.

## Repository structure

```text
.
├── index.html       # Primary product surface
├── about.html       # Product and project context
├── features.html    # Feature overview
├── docs.html        # Documentation surface
├── download.html    # Download / distribution surface
├── privacy.html     # Privacy information
├── 404.html         # Fallback route
├── app.js           # Application behaviour
├── pages.js         # Page-level behaviour/data
└── styles.css       # Shared presentation system
```

## Engineering priorities

- Clear separation between structure, presentation, and behaviour
- Responsive product surfaces
- Accessible navigation and interaction patterns
- Minimal runtime dependencies
- Predictable static deployment
- Explicit privacy and download surfaces

## Local development

No package manager is required for the current static implementation. Serve the repository with any static HTTP server, then open the local address.

For example:

```bash
python -m http.server 8080
```

Open `http://localhost:8080` in a browser.

## Deployment

The repository is compatible with static hosting providers and GitHub Pages-style deployments. The production host should serve the repository root as the site root.

## Project status

Active independent project. Product behaviour and content should be treated as implementation-specific; documentation should describe only capabilities that exist in the current source.

## Contributing

Changes should preserve the project's lightweight architecture. Avoid introducing a framework or dependency for functionality that can be implemented cleanly with the existing platform APIs.

See `CONTRIBUTING.md` for the contribution workflow.

## Security

See `SECURITY.md` for responsible disclosure guidance.

## Author

Naman Aggarwal — https://github.com/Naman-Aggarwal-dev
