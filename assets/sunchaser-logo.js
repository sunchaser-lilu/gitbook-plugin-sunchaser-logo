require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = ''
  var style = ''
  var logo = function (url, style) {
    $('.book-summary').children()
      .eq(0)
      .before($('<div class="book-logo"><img src="' + url + '" style="' + style + '" /></div>')
        .click(function () {
          window.location.href = "/";
        })
      )
  }
  gitbook.events.bind('start', function (e, config) {
    url = config['sunchaser-logo']['url']
    style = config['sunchaser-logo']['style']
  })

  gitbook.events.bind("page.change", function () {
    logo(url, style)
  })
})
