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

  $(".course-content").on("click", function(event) {
    var courseCarousel = $(event.target).closest(".owl-nav, .owl-dot");
    $(document.documentElement).off("keyup");
    if (courseCarousel.length) {
      $(document.documentElement).on("keyup", function(event) {
        if (event.keyCode == 37) {
          courseCarousel.trigger("prev.owl.carousel");
        } else if (event.keyCode == 39) {
          courseCarousel.trigger("next.owl.carousel");
        }
      });
    }
  });
});
