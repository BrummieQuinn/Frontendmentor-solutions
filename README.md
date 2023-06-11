# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://github.com/BrummieQuinn)
- Live Site URL: [Add live site URL here](https://codepen.io/BrummieQuinn)

## My process
Based on the user journey given, I knew I would need a flexible layout and media queries.
I also decided to try BEM methodology for naming the classes.

### Built with
- Semantic HTML5 markup
- BEM methodology
- Flexbox
- CSS Grid
- Flexible layout
- Mobile-first workflow


### What I learned
I learned that while BEM naming for classes is quite time-consuming, but beneficial. 

While my normal workflow was slowed by about 50% from normal, I was also able to walk away from my code knowing that even if I leave it for 6 months, I would know what each component related to and what it was doing.
This is incredibly helpful, especially if you don't want the code littered with comments.

Most become redundant and can be replaced with commented out section headings as I have done. 

I imagine this is something I could get faster at going forward, if I continue to use it in my projects.

```html
 <h1 class="result-header__title
               result-header__title--center
               result-header__title--bgcolour">


```
I'm really happy with the media query I was able to create for the layout to change depending on whether it is viewed on a mobile or desktop.

I'm sure I can make shorter declarations as I become more proficient in CSS, possibly through combining selectors.

```css
@media (min-width: 1440px) {
/*|| General styles||*/

    body {
        margin-top: 5px;
        margin-left: 10px;
    
        overflow: hidden;
    }
    
    .desktop-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        padding: 0; 
```

### Continued development

For my continued development, I would like to add the results dynamically to the page using the data.json file provided and javascript.

I want to continue to get faster at creating class names using BEM


## Author

- Frontend Mentor - [@BrummieQuinn](https://www.frontendmentor.io/profile/BrummieQuinn)


