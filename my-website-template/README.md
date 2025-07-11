# Website Maintenance Guide

### Project Overview
This website is a simple, three-page site designed to showcase the work of **[YOUR ORGANIZATION]**. The site has a clean, responsive layout and a navigation menu that works on both desktop and mobile devices.

### File Structure
Your website is organized into a single, main folder. Inside that folder, you have your core files and a folder for images.

my-website-template/

├── index.html          (Your Home Page)

├── page1.html          (The second page, "NAV ONE")

├── page2.html          (The third page, "NAV TWO")

├── style.css           (Controls all website colors, fonts, and layout)

├── script.js           (Controls the mobile hamburger menu)

└── images/

├── my-photo.jpg    (Photo for your home page)

├── my-photo1.jpg   (Photo for your "NAV ONE" page)

└── my-photo2.jpg   (Photo for your "NAV TWO" page)

### How to View and Edit the Website
To view and edit the website, you simply need to open the files in a text editor like **VS Code** and open the HTML files in a web browser.

* To see the website live, double-click on any of the HTML files (`index.html`, `page1.html`, `page2.html`). They will open in your default web browser.

---

## 1. How to Edit the Content

All of the website's text and images are inside the three HTML files. You can open them with a simple text editor like VS Code and make changes.

### Changing Text
To change any text, just find the text you want to change inside the file and type over it.

* **Page Title:** Change `<title>TAB TITLE</title>` to a new title that appears in the browser tab.
* **Organization Name:** Change `<h1>ORGANIZATION NAME</h1>` to your organization's name.
* **Article Titles:** Change `<h2>CENTER ARTICLE TITLE</h2>` or `<h3>LEFT SIDE BAR ARTICLE TITLE</h3>` to your new titles.
* **Paragraphs:** Change `<p>CENTER ARTICLE BODY</p>` to your new article text.

### Changing Photos
You can easily replace the photos on any page.

1.  Find the `images` folder in your project.
2.  Add your new photo to this folder. It's a good idea to use the same file name (e.g., `my-photo.jpg`) or a simple, new name (e.g., `new-photo.jpg`).
3.  Open the correct HTML file (`index.html`, `page1.html`, or `page2.html`).
4.  Find the image code, which looks like this:
    ```html
    <img src="images/my-photo.jpg" alt="DESCRIBE WHAT THE PHOTO IS SHOWING" width="600" height="400">
    ```
5.  Change the file name in the `src` attribute to your new photo's name (e.g., `src="images/new-photo.jpg"`).
6.  It's also a good idea to update the text in the `alt` attribute to describe the new photo.

### Updating Navigation Links
If you need to change where a navigation link goes, you can edit the `href` attribute.

For example, to change your "DONATE NOW" button to point to a new page:

```html
<a href="#donate" class="btn btn-donate">DONATE NOW</a>

Simply replace #donate with the URL of your new donation page (e.g., https://www.your-donation-page.com).

2. Website Customization (For Advanced Users)
If you need to make more significant changes, such as colors or layout, you can edit the style.css file.

Colors: All of your colors are defined in this file. Look for terms like background-color or color followed by rgba() or # color codes.

Fonts: The font for the entire website is defined on the body tag at the top of the file.

Layout: The grid-template-columns property at the top of the file controls the layout of your main content and sidebars.

The script.js file handles the functionality of the hamburger menu (making it open and close on mobile devices). It is not recommended to edit this file unless you are familiar with JavaScript.

Need Help?
If you have any questions or need to make a change that isn't covered in this guide, please do not hesitate to reach out.
