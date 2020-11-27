const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
const bar = document.querySelector(".bar")

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  logo.classList.toggle("white");
  bar.classList.toggle("white-icon");
});


new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    navigation: true,
  
    
    
});



            
        // images setup
        const images = [
          "./images/chivalry.png",
          "./images/chivalry2.png",
          "./images/graph.png",
      ];
      
      // content setup
      const texts = [
          ["Earth", "Surface gravity‎: ‎9.807 m/s²"],
          ["Mars", "Surface gravity‎: ‎3.711 m/s²"],
          ["Venus", "Surface gravity‎: ‎8.87 m/s²"],
      ]

      rgbKineticSlider = new rgbKineticSlider({

          slideImages: images, // array of images > must be 1920 x 1080
          itemsTitles: texts, // array of titles / subtitles

          backgroundDisplacementSprite: 'img/map-9.jpg', // slide displacement image 
          cursorDisplacementSprite: 'img/displace-circle.png', // cursor displacement image

          cursorImgEffect : true, // enable cursor effect
          cursorTextEffect : false, // enable cursor text effect
          cursorScaleIntensity : 0.65, // cursor effect intensity
          cursorMomentum : 0.14, // lower is slower

          swipe: true, // enable swipe
          swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
          swipeScaleIntensity: 2, // scale intensity during swipping

          slideTransitionDuration : 1, // transition duration
          transitionScaleIntensity : 30, // scale intensity during transition
          transitionScaleAmplitude : 160, // scale amplitude during transition

          nav: true, // enable navigation
          navElement: '.main-nav', // set nav class
          
          imagesRgbEffect : false, // enable img rgb effect
          imagesRgbIntensity : 0.9, // set img rgb intensity
          navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 

          textsDisplay : true, // show title
          textsSubTitleDisplay : true, // show subtitles
          textsTiltEffect : true, // enable text tilt
          googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use
          buttonMode : false, // enable button mode for title
          textsRgbEffect : true, // enable text rgb effect
          textsRgbIntensity : 0.03, // set text rgb intensity
          navTextsRgbIntensity : 15, // set text rgb intensity for regular nav

          textTitleColor : 'white', // title color
          textTitleSize : 125, // title size
          mobileTextTitleSize : 125, // title size
          textTitleLetterspacing : 3, // title letterspacing

          textSubTitleColor : 'white', // subtitle color ex : 0x000000
          textSubTitleSize : 21, // subtitle size
          mobileTextSubTitleSize : 21, // mobile subtitle size
          textSubTitleLetterspacing : 2, // subtitle letter spacing
          textSubTitleOffsetTop : 90, // subtitle offset top
          mobileTextSubTitleOffsetTop : 90, // mobile subtitle offset top
      });
  