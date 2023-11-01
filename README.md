# CSE210-WarmUpTask2

## Branches
It's recommended that every person edits on his/her own branch, then push to the main branch. Ensure that the main branch is without any bugs.

Each time edition: 

first fetch and pull from the main branch to your own branch, then edit on your own branch, then push to your own branch, then merge to the main branch. Write some comments or write notes in this file to make others understand.

## Netlify
For this repo's main branch, you can check the Netlify at [https://capable-bienenstitch-3a6abf.netlify.app/src/ucsd.edu/](https://capable-bienenstitch-3a6abf.netlify.app/src/ucsd.edu/).

## Updates

### Change Log on Performance- 2023/10/29
**Authors**: Fangqi Yuan, Jason, Dev Churiwala

#### Improvements:

- **Images**:
  - Changed all image formats to `.webp`.
  - Compressed all images. 
    - Benefits: `.webp` is more performant than `.jpg`, reducing the payload delivered.
  - Reduced some image sizes to more "realistic" numbers.
    - Some images were way too large for the screen space they would be realistically representing.
    - Using the picture tag would have messed up image style, so an overall resizing was done.

- **CSS**:
  - Minified all blocking CSS files for faster load times.

- **Fonts**:
  - Cleaned up `bris-sans` font file that was blocking rendering.
  - Removed `font_awesome` which was also blocking rendering.

- **Script and Link Tags**:
  - Added `defer` and `preload` attributes to improve loading.
  - Replaced `document.write()` with `<script>` tags for better performance.
  - Added `preconnect` for external links to establish network connections early and increase performance.

- **Deleted Items**:
  - Removed unnecessary and non-performant scripts from the HTML.


### Change Log on Accessibility- 2023/10/30
**Authors**: Siyu Ma, Jieyi Huang

#### Improvements:
- **ARIA attributes**:
  - Fix the errors for `ARIA standarlizations`, including the role-attribute mismatches, invalid values for attributes, inaccesble names for the input fields, children elements missing and focusable descendents for not-hidden elements by editting the ARIA tags.

- **Names and Labels**:
  - Restructure the href links for the calendars.

- **Tables and Lists**:
  - Replace all the `ul` children to be `li` elements.

- **Navigation**:
  - Change the heading elements' tags to make them in descending orders.

![New Lighthouse Performance](./performance_img/performance.png)

