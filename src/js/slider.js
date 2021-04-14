export function slider() {
  $('.next').on('click', function () {
    let currentDiv = $('.active');
    // next grab next element
    let nextDiv = currentDiv.next();

    if (nextDiv.length) {
      currentDiv.removeClass('active').css('z-index', -10);
      nextDiv.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function () {
    let currentDiv = $('.active');
    // next grab next element
    let prevDiv = currentDiv.prev();

    if (prevDiv.length) {
      currentDiv.removeClass('active').css('z-index', -10);
      prevDiv.addClass('active').css('z-index', 10);
    }
  });
}
