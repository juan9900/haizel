console.log($('.container'));
let width = screen.width;

// ABOUT US TEXT
const sectionCategories = $('.section-categories');
const categoriesContainer = $('.categories-container');


var waypointCategories = new Waypoint({
    element: sectionCategories,
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      // $(aboutText).addClass('animate__backInRight');
    //   width < 780 ? $(categoriesContainer).addClass('animate__fadeInUp animate__animated') : $(categoriesContainer).addClass('animate__fadeInLeft animate__animated');
    $(categoriesContainer).addClass('animate__fadeInUp animate__animated') 
    $(categoriesContainer).fadeIn();
    },
    offset: width < 780 ? '58%' : '50%'
    
  })

  $(document).ready(()=>{
    $(categoriesContainer).css('opacity',0);
  })