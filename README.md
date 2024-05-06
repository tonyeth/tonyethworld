# Tony's World

**Tony's World** is a website designed to explore the possibilities of innovation with Ethereum. It contains three main pages: **Home**, **About**, and **Projects**, each featuring an intuitive user interface and clean, responsive design.

## Project Structure

The project is organized in a structured manner to provide modularity and ease of maintenance:

- **index.html**: The main landing page (Home).
- **about.html**: The page introducing the author (About).
- **projects.html**: The portfolio page (Projects).
- **assets**: Contains all site resources, divided into subfolders:
  - **css**: Contains the CSS files for styling different pages.
    - `style.css`: Defines the style of the Home page.
    - `about.css`: Provides the styling for the About page.
    - `projects.css`: Manages the style for the Projects page.
  - **js**: Contains the `script.js` file that manages menu functionality and the contact form.
  - **icons**: Contains the icons used throughout the website.
  - **img**: Stores images used for page graphics.

## Design Overview

### Structure

The three pages are organized as separate HTML files, each with consistent navigation elements but distinct content:

- **Home Page**: Introduces the site concept, sharing buttons, and application possibilities.
- **About Page**: Highlights personal and professional information.
- **Projects Page**: Displays a portfolio of projects with images and descriptions.

### Responsive Design

- **CSS Media Queries** are used extensively to adapt the site for different screen sizes, ensuring consistent display across devices. Specific breakpoints (768px) control changes to navigation elements and cards.
- **Flexbox** layout is used for arranging sections, aligning items, and creating responsive grids.

### Navigation

The navigation bar features a responsive **hamburger menu** that toggles a dropdown list. JavaScript is used to manage the display logic.

### Forms

The contact form is implemented on all three pages to encourage visitors to reach out. JavaScript functions handle validation and submission using EmailJS, keeping the backend lightweight and simple.

## Technical Analysis

### HTML and Accessibility

- **Semantic Elements**: The use of `<header>`, `<footer>`, and `<nav>` tags makes the structure clear to assistive technologies.
- **Meta Tags**: Comprehensive metadata for Open Graph, Twitter Cards, and Google ensures the site is optimized for social sharing and SEO.

### JavaScript

- **Modularization**: A single `script.js` file is used across all pages for maintainability.
- **Event Listeners**: JavaScript listeners handle the menu toggling and prevent unintended closures.
- **EmailJS Integration**: The contact form function interacts with EmailJS using their public API, reducing the need for a custom server-side solution.

### CSS

- **BEM Naming**: Block-Element-Modifier (BEM) convention makes the CSS modular and easy to maintain.
- **Global Box-Sizing**: A universal `box-sizing` rule ensures consistent width/height calculations for all elements.
- **Linear Gradients**: Enhance the visual aesthetics of headers and buttons.

## Conclusion

The structure and design of Tony's World aim to achieve the following:

1. **User-Friendly Navigation**: Responsive navigation, consistent layout, and clear content sections.
2. **Scalability**: Separate files and modular code simplify future development.
3. **Cross-Device Compatibility**: Responsive CSS adapts the design to mobile and desktop devices.
