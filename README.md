# Shehab Uddin — Mechanical Design Portfolio

Single-page portfolio ready for GitHub Pages. No installation or build required.

## Preview
Extract the ZIP, then double-click index.html. Keep the files and assets folder together.

## Publish on GitHub
1. Create a public repository named YOUR-USERNAME.github.io, replacing YOUR-USERNAME with your GitHub username.
2. Choose Add file > Upload files. Upload the extracted contents including assets. index.html must be at the repository root, not inside another folder. Do not upload the ZIP itself.
3. Commit the uploaded files to main.
4. Open Settings > Pages. Under Build and deployment choose Deploy from a branch, select main and / (root), then Save.
5. Wait for deployment and open the URL shown by GitHub Pages.

Official guide: https://docs.github.com/en/pages/quickstart
Settings: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Replace images
Replace an existing JPG in assets with your own JPG using exactly the same filename. Use roughly 1600–2400 pixels on the long edge for legible CAD images. Full drawing sheets should retain enough resolution to read when enlarged. Gallery images display uncropped.

| Section | Image files |
| --- | --- |
| Mafna project A | 01.jpg, 02.jpg |
| Mafna project B | 03.jpg, 04.jpg |
| BJIT | 05.jpg, 06.jpg, 07.jpg |
| Research | 09.jpg, 10.jpg, 11.jpg |
| Rover | 13.jpg, 14.jpg, rover-detail.jpg |
| Boiler and vessel | 15.jpg, 16.jpg, vessel-detail.jpg |

Then open content.js, find that image, edit title and detail, and change placeholder: true to placeholder: false. The top preview notice disappears automatically when all images have placeholder: false. The included generated illustrations are low-resolution placeholders, not engineering drawings or validated simulation results. The two detail images are crops of corresponding sample assemblies.

## Edit text
Open content.js in Notepad, VS Code, or GitHub's pencil editor. Introduction, email, LinkedIn, credentials and project descriptions are grouped there. Keep commas and brackets intact. Text values use single quotes; use double quotes around a value if it contains an apostrophe.

- Rename Mafna Project A and Project B when adding actual projects.
- Update the boiler study description when you have its scope and deliverables.
- Add an image by copying an image object inside a group's images array, separated by a comma.
- Change the warm beige palette and compact spacing in theme.css. The main component styling remains in styles.css.
- Edit index.html for the headline, name, location and education.
- app.js controls the galleries; routine edits do not require changing it.

The contact email uses shehab.uwindsor@gmail.com from the first supplied résumé. No résumé PDF, telephone number or supervisor contact information is bundled.

## Interaction
All projects are on one page. Navigation jumps to sections. Select an image to enlarge it; use previous/next buttons or arrow keys to browse, and Escape or Close to return. Layout adapts to mobile and supports reduced-motion preferences.

On desktop, the four Mafna images appear as four equal-size cards in one row. On mobile, image cards stack for legibility.

## Sample assets
Created using the built-in image-generation tool. Prompt: 4 by 4 contact sheet of generic mechanical engineering CAD illustrations on pale blue-gray backgrounds: AHU assembly/layout/sheet metal/drawing; crusher component/drawing/hydraulic routing/machined component; reactor model/conceptual CFD/schematic/laboratory reactor; human-powered rover/chassis/horizontal boiler/vertical pressure vessel. No text, numbers, branding or quantitative claims.

Unused source images 08.jpg and 12.jpg are available as optional replacements.
