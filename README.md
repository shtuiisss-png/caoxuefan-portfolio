# caoxuefan Portfolio Website Template

This is a free, editable static portfolio website template.

## Files
- `index.html` — website structure
- `styles.css` — colours, typography, layout, animation effects
- `script.js` — project data, page routing, project detail pages
- `assets/` — logo, thumbnails, portrait, video and CV files

## How to run locally
1. Open this folder in VS Code.
2. Install the VS Code extension **Live Server**.
3. Right click `index.html`.
4. Choose **Open with Live Server**.

## Where to edit your content
Open `script.js`.

You can edit:
- project title
- project category
- cover image
- role
- tools
- short description
- long project description
- gallery images
- YouTube video ID

## Replace the homepage showreel
Put your showreel file into `assets/` and name it:

`showreel.mp4`

Or edit this line in `script.js`:

```js
showreelVideo: "assets/showreel.mp4"
```

Important: homepage autoplay video must be muted for most browsers to allow autoplay.

## Replace logo
The current logo is:

`assets/logo.png`

Replace it with another image using the same filename.

## Replace About portrait
Put your square portrait image into assets and edit this line in `renderAbout()` inside `script.js`:

```html
src="assets/avatar-placeholder.svg"
```

For example:

```html
src="assets/my-portrait.jpg"
```

## CV download
Put your CV PDF into assets and name it:

`cv.pdf`

Or edit this line in `script.js`:

```js
cv: "assets/cv.pdf"
```

## Contact links
Edit this part of `script.js`:

```js
email: "yourname@gmail.com",
linkedin: "https://www.linkedin.com/",
youtube: "https://www.youtube.com/",
instagram: "https://www.instagram.com/",
```

## Project images
Put your project images into the `assets` folder, then edit each project:

```js
cover: "assets/your-image.jpg",
images: [
  { src: "assets/your-process-image.jpg", caption: "Storyboard" }
]
```

## YouTube video
For a project page using YouTube, edit:

```js
videoType: "youtube",
youtubeId: "VIDEO_ID_HERE",
```

For a normal uploaded video, use:

```js
videoType: "video",
video: "assets/your-video.mp4",
```

For just an image at the top, use:

```js
videoType: "image",
video: "assets/your-image.jpg",
```

## Publish for free
Recommended free hosting:
- GitHub Pages
- Netlify
- Vercel

You can later buy a custom domain and connect it to the free hosting.
