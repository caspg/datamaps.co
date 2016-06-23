function renderHtml(data) {
  return (
    `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">

        <meta name="msvalidate.01" content="E13826D612F7D8D97C50E1DB61BF34C6" />

        <title>${data.title}</title>
        <meta name='description' content='${data.description}'/>
        <meta property="og:image" content="http://datamaps.co/images/icons/icon-300.png"/>
        <link rel="image_src" href="http://datamaps.co/images/icons/icon-300.png"/>

        <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/bundles/app.bundle.css">

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-78197759-1', 'auto');
          window.ga = ga
        </script>

      </head>
      <body>
        <div id="application" style="overflow-x: hidden"></div>
        <script type="text/javascript" src="/bundles/app.bundle.js"></script>
      </body>
      </html>
    `
  )
}

module.exports = renderHtml
