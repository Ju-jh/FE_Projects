$(function () {
  var url = location.href;
  var menu;
  var page;
  if (url.includes('greet')) {
    menu = 1;
    page = 1;
  } else if (url.includes('location')) {
    menu = 1;
    page = 2;
  } else if (url.includes('biz-intro')) {
    menu = 2;
    page = 1;
  } else if (url.includes('biz-area')) {
    menu = 2;
    page = 2;
  } else if (url.includes('gallery')) {
    menu = 3;
    page = 1;
  } else if (url.includes('online')) {
    menu = 4;
    page = 1;
  } else if (url.includes('notice')) {
    menu = 5;
    page = 1;
  } else if (url.includes('board')) {
    menu = 5;
    page = 2;
  } else if (url.includes('faq')) {
    menu = 5;
    page = 3;
  }

  $(`.snb .menu${menu}`).show();
  $(`.snb .menu${menu}_${page}`).addClass('active');
}); //ready
