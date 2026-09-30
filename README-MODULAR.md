# memery site structure

The site now uses only three shared front-end files:

- `site.css` — global tokens, reset, typography foundation, layout basics and shared header/menu styling.
- `components.css` — reusable components and page-specific section styles, safely scoped to each page's body class.
- `menu.js` — the single shared header/menu widget and navigation links.

Every HTML page loads:

```html
<link rel="stylesheet" href="site.css">
<link rel="stylesheet" href="components.css">
<script src="menu.js" defer></script>
```

Every page mounts the shared header with:

```html
<div id="site-header"></div>
```

## What to update later

Change the menu or header links:
- edit `menu.js`

Change the shared header/menu styling or global brand tokens:
- edit `site.css`

Change cards, forms, hero sections, carousels, page sections, gated-content blocks, etc:
- edit `components.css`

You no longer need a separate CSS file for each page.
