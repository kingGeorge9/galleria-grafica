# 📸 Professional Photo Gallery

A modern, responsive photo gallery showcasing professional photography work across different categories. Built with HTML, CSS, and JavaScript, featuring a sleek glassmorphism design.

## 🌟 Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Category Filtering**: Easily filter photos by business categories (Branding, Real Estate, Events, etc.)
- **Interactive Lightbox**: Full-screen image viewing with smooth navigation
- **Keyboard Controls**: Navigate using arrow keys and Escape key
- **Lazy Loading**: Optimized image loading for better performance
- **Modern UI**: Glassmorphism design with beautiful gradient backgrounds
- **Smooth Animations**: Elegant hover effects and transitions
- **Optimized Images**: Automatically processed thumbnails and full-size versions

## 🎯 Categories

- Branding & Corporate Identity
- Real Estate & Architecture
- Events & Special Occasions
- Restaurant & Culinary
- Logistics & Supply Chain
- Travel Photography

## 📁 File Structure

```
gallery/
├── index.html          # Main gallery page with responsive design
├── README.md          # Documentation
├── js/
│   └── gallery.js     # Gallery functionality (lightbox, filtering, etc.)
├── images/
│   ├── thumbs/        # Optimized thumbnails (300px wide)
│   ├── full/          # Full-size images (max 1200px wide)
│   └── *.jpg          # Original images
└── process_images.sh  # Image optimization script
```

## �️ Setup and Usage

1. **Process Images**:

   ```bash
   # Make the script executable
   chmod +x process_images.sh

   # Run the image processing script
   ./process_images.sh
   ```

   This will automatically:

   - Create optimized thumbnails (300px wide)
   - Create web-optimized full-size images (max 1200px wide)
   - Organize images in the proper directories

2. **Customize Categories**:

   - Edit the filter buttons in `index.html`
   - Update `data-category` attributes in gallery items
   - Add/remove categories as needed

3. **Deploy**:
   - Upload all files to your web server
   - Ensure the `images` directory structure is maintained
   - No build process required - it's all static files!

## 🎨 Customization

### Adding New Photos

Replace the sample photo items in `index.html` with your own:

```html
<div
  class="photo-item"
  data-category="your-category"
  data-title="Your Title"
  data-description="Your description"
>
  <div class="photo-container">
    <img src="images/thumbs/your-photo.jpg" alt="Your Photo" loading="lazy" />
    <div class="photo-overlay">
      <span class="view-text">View Image</span>
    </div>
  </div>
  <div class="photo-info">
    <h3 class="photo-title">Your Title</h3>
    <p class="photo-description">Your description</p>
    <div class="photo-tags">
      <span class="tag">your-tag</span>
    </div>
  </div>
</div>
```

### Customizing Categories

Update the filter buttons in the HTML:

```html
<button class="filter-btn" data-filter="your-category">Your Category</button>
```

### Changing Colors

Modify the CSS variables in the `<style>` section:

- Background gradient: Update the `body` background property
- Accent colors: Change the `.tag` background and `.filter-btn` styles
- Card backgrounds: Modify `.photo-item` background values

## 📱 Mobile Optimization

The gallery is fully responsive and includes:

- Touch-friendly navigation in lightbox mode
- Optimized button sizes for mobile
- Responsive grid layout
- Mobile-specific lightbox controls

## 🔧 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📞 Support

If you have any questions or need help customizing your gallery, please open an issue on GitHub.

---
