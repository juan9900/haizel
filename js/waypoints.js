console.log($('.container'));
let width = screen.width;

// ABOUT US TEXT
const sectionCategories = $('.section-categories');
const categoriesContainer = $('.categories-container');
const checkMoreContainer = $('.check-more-container');


var waypointCategories = new Waypoint({
    element: sectionCategories,
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      // $(aboutText).addClass('animate__backInRight');
    //   width < 780 ? $(categoriesContainer).addClass('animate__fadeInUp animate__animated') : $(categoriesContainer).addClass('animate__fadeInLeft animate__animated');
    $(categoriesContainer).addClass('animate__fadeInUp animate__animated') 
    $(checkMoreContainer).addClass('animate__fadeInUp animate__animated') 
    $(categoriesContainer).fadeIn();
    $(checkMoreContainer).fadeIn();
    },
    offset: width < 780 ? '58%' : '70%'
    
  })

  $(document).ready(()=>{
    $(categoriesContainer).css('opacity',0);
  })