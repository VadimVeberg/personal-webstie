# [My personal webstie](https://vadimveberg.ru/)
This is my diploma work on Skillbox course "Layout" and my personal portfolio site.

# Layout
I used new HTML5 features like semantic elements. All CSS code is written by BEM methodology and with SASS preprocessor. CSS code for each independent block of page was written to separate file, so you can modify css easy and fast.

<img src="https://vadimveberg.ru/assets/img/git_readme/SASS_blocks.png" width="150px" alt="Independent SASS blocks">

I also used Bottstrap 4 columns for some blocks of page.

# Adaptivity
I used @media queries, bootstrap columns and containers to make all elements of page displayed in right way on every screen size. <img src="https://vadimveberg.ru/assets/img/git_readme/Adaptive.png" width="350px" alt="Adaptive">

# Animations
Every animation on this site was created using css transitions or requestAnimationFrame(), so they works smooth and doesn't load CPU.

<img src="https://vadimveberg.ru/assets/img/git_readme/Animation_1.gif" width="800px" alt="Animation_1">

# Slider
I made infinity slider that works also on mobile devices. My script automatically define count of showed slides per page based on current screen size. See more at [slider](https://github.com/VadimVeberg/personal-webstie/blob/master/src/assets/js/modules/slider.js) module

<img src="https://vadimveberg.ru/assets/img/git_readme/Slider.gif" width="500px" alt="Animation_1">

# Run and build
This project is builded with Gulp and Webpack. You can run this site on your local host after forking this repo, istalling all dependecies (**npm i**) and typed in terminal **gulp** in root directory.
 To get minifyend production build you must run **gulp buildProd** command. See more gulp settings in [gulpfile](https://github.com/VadimVeberg/personal-webstie/blob/master/gulpfile.js)
