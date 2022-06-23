require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = '';
  var style = '';
  var redirectUrl = '';
  var logo = function (url, style) {
    $('.book-summary').children()
      .eq(0)
      .before($('<div class="book-logo"><img src="' + url + '" style="' + style + '" /></div>')
        .click(function () {
          window.location.href = redirectUrl;
        })
      )
  }
  gitbook.events.bind('start', function (e, config) {
    url = config['sunchaser-logo']['url'];
    style = config['sunchaser-logo']['style'];
    redirectUrl = config['sunchaser-logo']['redirectUrl'];
  })

  gitbook.events.bind("page.change", function () {
    logo(url, style)
  })
})
