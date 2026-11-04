# Sameed Iqbal portfolio

Personal site built with Next.js (App Router) as a static export, hosted on GitHub Pages.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Pages update as you save.

To check the real static build:

```bash
npm run build
npm start
```

## Edit the words

All text lives in `content/`. You don't need to touch the components.

| File | What it holds |
| --- | --- |
| `content/site.js` | Name, contact links, nav, resume link, home page text, water meter numbers and citation |
| `content/projects.js` | The three case studies |
| `content/about.js` | Bio, experience, leadership, skills, education, publication |

Any text that starts with `TODO:` shows on the site with a highlight, so nothing gets missed. To find them all:

```bash
grep -rn "TODO:" content
```

Replace the whole string, including `TODO:`, and the highlight goes away.

## Add photos

1. Save the image at the path shown on its placeholder box, for example `public/images/cost-of-a-click/tank-and-pump.jpg`. Create the folder if needed.
2. Find that photo in `content/projects.js`.
3. Set `ready: true` and write `alt`, a short description of what the photo shows.

```js
{
  src: "/images/cost-of-a-click/tank-and-pump.jpg",
  ready: true,
  alt: "Clear tank partly filled with water, with a submersible pump at the bottom",
  label: "Close-up of the tank and pump",
},
```

Resize photos to about 1600px wide and export as JPG before adding them. The site doesn't compress images for you.

To add a photo to a gallery, add another entry to that project's `gallery` list. Each `src` must be different.

## Add a video

In `content/projects.js`, set the project's `video.src` to an embed URL (not the normal page link):

- YouTube: `https://www.youtube-nocookie.com/embed/VIDEO_ID`
- TikTok: `https://www.tiktok.com/embed/v2/VIDEO_ID`

`VIDEO_ID` is the code at the end of the video's normal URL. Keep `portrait: true` for vertical video. To remove the video section from a project, set `video: null`.

## Update your resume

Replace `public/resume.pdf`, keeping the same filename. The nav link and the About page button both download it.

**Always use a copy without your phone number.** Your phone number is deliberately left off this site, and anything committed stays in the public git history even if you delete it later.

## Deploy to GitHub Pages

The first time:

1. Create a public GitHub repository named `sameediqbal.github.io`.
2. In the repository, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Connect this folder and push:

   ```bash
   git remote add origin https://github.com/sameediqbal/sameediqbal.github.io.git
   git push -u origin main
   ```

The site goes live at `https://sameediqbal.github.io`. Check progress in the repository's **Actions** tab.

After that, every push to `main` builds and deploys automatically through `.github/workflows/deploy.yml`.

## Project layout

```
app/          Pages and global styles (globals.css holds the colors)
components/   Page sections and pieces
content/      All text
public/       Photos and the resume PDF
```
