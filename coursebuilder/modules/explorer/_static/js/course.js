$(document).ready(function documentReady() {
  $(".button-collapse").sideNav();
  $("select").material_select();
  $(".dropdown-button").dropdown();

  $(".course-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: [
      '<i class="material-icons small">chevron_left</i>',
      '<i class="material-icons small">chevron_right</i>'
    ],
    items: 1
  });

  var sidebarToggle = false;
  $("body").on("click", "#hideCourseSidenav", function() {
    sidebarToggle = !sidebarToggle;
    var sidebarWidth = sidebarToggle ? $(".course-accordion").width() : 0;

    $(".course-accordion").toggleClass("hide-sidenav");
    $(".course-card").animate({ "margin-left": sidebarWidth / 2 + "px" }, 300);
    $(".course-accordion").animate(
      { "margin-left": "-" + sidebarWidth + "px" },
      300
    );
  });

  $(".course-accordion .collapsible").clone().appendTo("#courseMobileSidebar");
  $(".collapsible").collapsible();
  $("body").on("click", "#closeSideNav", function() {
    $(".button-collapse").sideNav("hide");
  });

  var parentElementClass = ['item',
      'owl-carousel owl-theme course-carousel owl-loaded owl-drag',
    'gcb-border-box', 'owl-item', 'owl-dot active',
    'owl-next', 'owl-prev', 'owl-prev disabled',
    'owl-next disabled','owl-dot', 'owl-dots', 'gcb-lesson-content'];

  $(".course-carousel").on("click", function(event) {
    $(document.documentElement).off("keyup");
    var owlCarousel = $(event.target).closest(".owl-carousel");
    var target = $(event.target);
    $(document.documentElement).on("keyup", function (event) {
      var carouselContent = target.closest().context.parentElement.className;
      // returns true if on keyup, the target's first parent is in parent element class array
      var isParentElement = parentElementClass.includes(carouselContent);
      if (!isParentElement) {
        event.stopPropagation();
      } else {
        if (event.keyCode == 37) {
          owlCarousel.trigger("prev.owl.carousel");
        } else if (event.keyCode == 39) {
          owlCarousel.trigger("next.owl.carousel");
        }
      }
    });
  });
});
