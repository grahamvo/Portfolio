export default ({ app }) => {
    return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Portfolio Website">
      <meta name="author" content="Graham von Oehsen">
      <title>Graham von Oehsen | Front-End Developer</title>
      <!-- Bootstrap Core CSS -->
      <link href="/css/bootstrap.min.css" rel="stylesheet">
      <!-- Custom CSS -->
      <link href="/dist/app.css" rel="stylesheet">
      <!-- Custom Fonts -->
      <script src="https://use.fontawesome.com/49fb8c90ec.js"></script>
      <link href="//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
      <link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
      <link href='//fonts.googleapis.com/css?family=Catamaran:400,100,600' rel='stylesheet' type='text/css'>
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
    </head>
    <body class="hidden">
      <div id="app">${app}</div>
      <script src="/js/jquery.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/clean-blog.min.js"></script>
      <script src="/dist/bundle.js"></script>
    </body>
    </html>
    `);
};