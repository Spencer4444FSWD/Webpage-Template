#Webpage Template README

This README provides essential information to help you get started with and customize your new webpage template.

---

## Features

* **Fully Responsive:** Designed to look great on desktops, tablets, and mobile devices, ensuring a consistent user experience across all devices.
* **Clean Code:** Written with readability and ease of modification in mind, making customization straightforward for developers.
* **Easy Color Customization:** Leverage Microsoft VS Code's built-in color picker for quick and intuitive color changes.
* **Call to Action:** Includes a fully functional Donate button, ready for immediate use.
* **Template Only Styling:** The initial all-caps text and vibrant, contrasting colors are intentionally used to highlight placeholder content and specific elements. This helps you visually track where your content and stylistic changes will take effect as you customize the code.
* **Effortless Image Handling:** Simply add your images, and our smart CSS ensures they look perfect and responsive on any device, automatically adapting to screen sizes without manual adjustments.

---

## Getting Started

*⚠️ WARNING: Always back up the original code!** If any changes cause unexpected behavior or issues, having a backup ensures you can easily revert to an earlier, working state.

### Setting Up Your Environment

To get started quickly and customize your template, follow these steps to set up your development environment and preview your changes:

1.  **Download VS Code & Live Server:** If you haven't already, download **Microsoft VS Code**. Then, within VS Code, go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X), search for "Live Server" by Ritwick Dey, and install it.
2.  **Enable Live Server:** Once installed, make sure Live Server is enabled. You'll know it's ready when the **"Go Live" button** appears on the bottom of VS Code's status bar.
3.  **Open Your Project:** In VS Code, go to `File` > `Open Folder`. Then, select your `my-website-template` folder (or the main folder containing your project files).
4.  **Launch Live Server:** Click the **"Go Live" button** on the bottom status bar in VS Code. A webpage preview of your template will open in your default browser. All changes you make to the code will update in real-time upon saving (by hitting **Ctrl+S** or **Cmd+S** on Mac).

### Changing Template Colors

The colors in this template are easy to customize, letting you enhance the end-user's experience and perfectly match your brand's unique look. The template also uses vibrant colors to contrast certain elements. This intentional design helps you quickly spot *where* your new colors will take effect, making customization intuitive.

1.  **Open Your Stylesheet:** In VS Code, open your primary CSS file by clicking on its tab (e.g., `style.css` or `variables.scss`).
2.  **Locate & Change Colors:** Use **VS Code's Color Picker** to update colors. Look for color values directly within the code, such as:
    * Hex codes like `#FF5733`
    * RGB values like `rgb(255, 87, 51)`
    * HSL values
    * CSS variables like `--primary-color`

    You will see **color squares** appear directly next to these elements. Clicking on a color square will open a color palette, letting you visually select a new color or type in a precise new value.
3.  **Save Your Work:** Hit **Ctrl+S (or Cmd+S on Mac)** to save your file. Your changes will automatically reflect in the webpage preview from the Live Server interface.

---

## CSS Grid System

The template's main layout uses a responsive CSS Grid system, ensuring content is well-organized and adapts seamlessly to various screen sizes.

### Desktop Layout

On larger screens (typically above 768px wide), the layout forms a clear 3-column, 3-row structure:

+------------------+------------------+------------------+
|      HEADER      |      HEADER      |      HEADER      |
|    (Column 1)    |    (Column 2)    |    (Column 3)    |
+------------------+------------------+------------------+
|      SIDEBAR     |   MAIN CONTENT   |   RIGHT SIDEBAR  |
|    (Column 1)    |    (Column 2)    |    (Column 3)    |
+------------------+------------------+------------------+
|      FOOTER      |      FOOTER      |      FOOTER      |
|    (Column 1)    |    (Column 2)    |    (Column 3)    |
+------------------+------------------+------------------+


**Key Dimensions for Desktop:**

* **Columns:** Defined as `250px` (left sidebar), `1fr` (middle content area), `250px` (right sidebar).
* **Rows:** Defined as `auto` (header - adapts to content height), `1fr` (main content/sidebar area - takes remaining vertical space), `auto` (footer - adapts to content height).

### Mobile Layout

When the screen width is 768px or less, the grid automatically collapses into a single-column stacked layout, optimizing for smaller devices:

+------------------+
|      HEADER      |
|    (Column 1)    |
+------------------+
|   RIGHT SIDEBAR  |
|    (Column 1)    |
+------------------+
|   MAIN CONTENT   |
|    (Column 1)    |
+------------------+
|      SIDEBAR     |
|    (Column 1)    |
+------------------+
|      FOOTER      |
|    (Column 1)    |
+------------------+


**Key Changes on Mobile:**

* **Single Column:** All sections stack vertically in one column (`grid-template-columns: 1fr;`).
* **Content Order:** The `Right Sidebar` is specifically configured to appear *above* the `Main Content` and `Sidebar` in the mobile view.
* **Auto Rows:** Each section adapts its height (`grid-row: auto;`) to its content.

---
