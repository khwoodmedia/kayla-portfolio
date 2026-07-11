# Kayla Henderson-Wood Portfolio Mockup

This folder contains a responsive HTML/CSS/JavaScript version of the approved portfolio mockup.

## Files
- `index.html` — page structure and content
- `style.css` — complete responsive styling
- `script.js` — hero word rotation, video controls, byline interactions and social-media transitions
- `assets/` — placeholder SVGs that can be replaced with real images

## Run locally
Open `index.html` directly in a browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Replace the placeholders

### Videos
In `index.html`, replace each blank video source:

```html
<source src="" type="video/mp4">
```

with your file path:

```html
<source src="assets/my-video.mp4" type="video/mp4">
```

The videos are configured to:
- autoplay
- loop
- remain muted initially
- pause on hover
- slightly zoom and turn to color on hover
- allow visitors to mute/unmute

### Journalism
Edit the `bylines` array in `script.js`. Add your actual:
- publication
- story title
- description
- image
- article link

### Publications
Replace the placeholder files in `assets/`. The first image is the interior/spread view and the `-cover` image is shown after the card flips.

### Social media
Edit the `socialProjects` array in `script.js`. The phone content changes as visitors scroll through the section or click the small controls.

### Contact form
The form uses a placeholder Formspree action:

```html
https://formspree.io/f/your-form-id
```

Replace this with your own Formspree endpoint or connect it to your preferred form service.
