# 💝 Valentine's Day Website

A beautiful, interactive Valentine's Day website with stunning animations and features designed to express your love.

## ✨ Features

### 🏠 Home Page
- Interactive "Will you be my Valentine?" buttons
- Yes button grows on hover and creates floating hearts
- No button has fun animations
- Smooth entrance animations

### 📖 Our Story
- Beautiful timeline layout
- 4 meaningful milestones including "First Confession"
- Staggered animations on load
- Hover effects with elevation

### 💌 Messages  
- 6 love letter cards with handwritten styling
- Natural tilted layout
- Floating heart animations on hover
- Click for radial heart burst effect

### 📸 Gallery
- Authentic Polaroid-style photo frames
- Hand-written captions with emojis
- 3D perspective hover effects
- Professional shadows and depth

### 🎁 Surprise
- Beautiful gift box with pink ribbon and bow
- 3D hover animations
- Smooth message reveal with bounce effect
- Personalized Valentine's message

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Your 6 favorite photos

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Add your photos**
   - Place 6 JPEG photos in the `images/` folder
   - Name them: `pic1.jpeg`, `pic2.jpeg`, `pic3.jpeg`, `pic4.jpeg`, `pic5.jpeg`, `pic6.jpeg`

3. **Customize (optional)**
   - Edit HTML files to personalize messages and labels
   - Update Polaroid captions in `gallery.html`
   - Change colors in `css/style.css`

4. **Open in browser**
   ```bash
   # Simply open index.html or use a local server:
   python -m http.server 8000
   ```

## 📝 Customization

### Update Surprise Message
Edit `surprise.html` (lines 40-46):
```html
<h2>💕 Your Title 💕</h2>
<p>Your custom message...</p>
```

### Change Polaroid Labels
Edit `gallery.html` and update the `.polaroid-label` text

### Customize Colors
Edit `css/style.css` and modify the `:root` CSS variables

## 📁 File Structure

```
valentines-website/
├── index.html          # Home page
├── story.html          # Timeline page
├── messages.html       # Love letters page
├── gallery.html        # Polaroid gallery
├── surprise.html       # Surprise page
├── css/
│   └── style.css      # All styling
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Your photos folder
└── README.md          # This file
```

## 🎨 Technologies

- **HTML5** - Semantic markup
- **CSS3** - Grid, Transforms, Animations, Gradients
- **JavaScript (ES6)** - Interactivity
- **Google Fonts** - Poppins, Comic Neue, Dancing Script

## 📱 Responsive Design

- ✅ Desktop (1200px+) - Full experience
- ✅ Tablet (768px) - Optimized layout
- ✅ Mobile (480px) - Touch friendly

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 📦 Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Site available at `https://yourusername.github.io/repo-name`

### Netlify / Vercel
1. Connect your GitHub repository
2. Deploy with one click

## 🎬 Features Showcase

### Animations
- Staggered entrance animations
- 3D perspective hover effects
- Smooth cubic-bezier timing
- GPU-accelerated transforms

### Interactivity
- Click to reveal messages
- Hover for visual feedback
- Touch-friendly on mobile
- 60fps smooth performance

## 💡 Tips

- Use square photos for best Polaroid appearance
- Customize the surprise message to be personal
- Test on mobile before sharing
- Use high-quality images

## 📄 License

MIT License - Feel free to use and modify!

---

**Made with ❤️ for your Valentine!** 💕✨
