# Contributing to KAI

KAI is maintained as a focused, lightweight web product. Contributions should improve the product without increasing architectural complexity unnecessarily.

## Before changing code

1. Read the existing page and shared-script structure.
2. Confirm that the change belongs in the repository rather than being better handled by configuration or content.
3. Keep HTML, CSS, and JavaScript responsibilities separated.

## Development

Serve the repository through a local HTTP server rather than opening files directly:

```bash
python -m http.server 8080
```

Verify the affected pages at desktop and mobile widths. Check navigation, keyboard interaction, console errors, and broken asset paths before opening a pull request.

## Pull requests

Keep changes focused. Explain the user-facing result, the implementation approach, and any known limitations. Avoid unrelated formatting churn.
