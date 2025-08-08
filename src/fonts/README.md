# Fonts Directory

This directory is set up to use local Cooper font files. 

## Required Font Files

To use the Cooper font locally, you need to add the following font files to this directory:

### Cooper Black (700 weight):
- CooperBlack.woff2
- CooperBlack.woff
- CooperBlack.ttf

### Cooper Medium (500 weight):
- CooperMedium.woff2
- CooperMedium.woff
- CooperMedium.ttf

### Cooper Regular (400 weight):
- CooperRegular.woff2
- CooperRegular.woff
- CooperRegular.ttf

## Font Formats

- **WOFF2**: Modern compressed format, best for web performance
- **WOFF**: Widely supported compressed format
- **TTF**: TrueType format for older browser support

## Alternative: Using Web Fonts

If you don't have Cooper font files, you can use alternative fonts:

1. **Cooper Hewitt** (free alternative):
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Cooper+Hewitt:wght@400;500;700&display=swap');
   ```

2. **Georgia** (system font similar to Cooper):
   Already included as a fallback in the CSS.

## Current Setup

The fonts.css file is already configured to load Cooper fonts from this directory. Once you add the font files, they will be automatically used throughout the website.