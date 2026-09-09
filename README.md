# Shehab Uddin — Mechanical Engineering Portfolio

A compact, single-page portfolio for employers. Open index.html after extracting the ZIP. No installation or build is required.

## This revision

- Small circular portrait with a soft shadow on the profile card.
- Professional Profile heading and direct links to Projects, Skills, Education and Contact.
- Five project sections, with four images each: 20 project images in total.
- Four equal image frames per desktop row; two per row on smaller screens.
- Uncropped CAD images at rest, with a smooth zoom on mouse hover.
- Click or tap an image to see the full drawing on the same page.
- My contribution and Tools are always visible, beside the project summary on desktop.
- Alternating white and light-brown sections, restrained shadows and compact spacing.
- One readable stylesheet, theme.css, with no additional styling layers.

## Update your existing GitHub portfolio

1. Extract this ZIP.
2. Upload index.html, theme.css, app.js and content.js to the root of your existing portfolio repository.
3. Upload the required images inside the assets folder, keeping that folder name and the image filenames.
4. Commit the changes. Your existing GitHub Pages setup can use the updated files.

index.html must be at the repository root. Upload the extracted contents, not the ZIP or an extra enclosing folder.

If you have separately edited your GitHub copy, keep your own image replacements and copy your text changes into the new content.js before uploading it. This download does not automatically include changes made in a separate GitHub repository.

Older styles.css, enhancements.css and enhancements.js files are no longer loaded by the new index.html. You do not need them for this revision.

## Change your profile picture

Replace assets/profile.jpg with your own JPG named profile.jpg. The site automatically makes it round. A square portrait works best; keep your face near the middle. You do not need to crop the picture into a circle yourself.

You can upload a replacement with the same name; deleting the old file first is unnecessary. If the image is a PNG, either convert it to JPG or update the portrait src in index.html to its actual PNG filename. Renaming an extension does not convert the image.

profile-reference.jpg is a fallback image taken from the portrait in your supplied reference. Leave that file in place.

## Change project images

Replace the following files inside assets, keeping each file's name and extension. Alternatively, edit the corresponding src in content.js to match a new filename. Names are case-sensitive.

| Project section | Four image files |
| --- | --- |
| Mafna — two images for each of two projects | 01.jpg, 02.jpg, 03.jpg, 04.jpg |
| BJIT | 05.jpg, 06.jpg, 07.jpg, 08.jpg |
| Research assistant | 09.jpg, 10.jpg, 11.jpg, 12.jpg |
| Rover challenge | 13.jpg, 14.jpg, rover-detail.jpg, 17-rover-detail.png |
| Boiler and pressure vessel | 15.jpg, 16.jpg, vessel-detail.jpg, 18-boiler-detail.png |

Use original images with enough resolution for an employer to read the drawing in the enlarged view. Thumbnails fit the full image inside the frame before hover.

After replacing a sample, find it in content.js, update title and detail, and set placeholder: false. This removes the individual Illustrative sample caption. Sample illustrations are generic concepts, not original project drawings or validated analysis results.

Mafna's two image groups remain in content.js, with two images per group and four total in its gallery. The other project sections each have one group of four.

## Change writing

| What to change | Where to edit |
| --- | --- |
| Name, professional title, location, email and LinkedIn | Top of content.js |
| Two profile paragraphs | introduction and biography in content.js |
| Credentials under the profile paragraphs | credentials in content.js |
| Project titles, organizations, roles and descriptions | projects in content.js |
| My contribution and Tools | contribution and tools in each project in content.js |
| Image captions and descriptions | title and detail in each image entry in content.js |
| Professional Profile heading, profile degree, skills and education | Clearly separated sections in index.html |
| Formal contact introduction | Contact section in index.html |
| Colors, spacing, shadows and picture sizes | theme.css |

Keep quotation marks, commas and brackets intact when editing content.js. To include an apostrophe inside a text value, use double quotes around the whole value. Routine edits do not require changing app.js.

## Image interaction and accessibility

Move the pointer over an image to zoom it within its frame. Captions and project writing remain still. Keyboard focus also previews the zoom; users who prefer reduced motion see stationary images.

Click or tap a picture for the large view. Use the previous/next buttons or left/right arrow keys to browse. Escape or Close returns to the project without leaving the page, and keyboard focus returns to the selected image.

## Included illustrations

The generic engineering images were generated for this portfolio. The profile crop comes from your supplied reference. Existing project descriptions, contributions, tools and image choices are retained. Additional unused sample crops in assets may be kept for later replacement.
