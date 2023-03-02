<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>华彩科技</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/0.2.2/weui.css"/>
        <link rel="stylesheet" href="/css/example.css"/>
        <link rel="stylesheet" href="/css/font-awesome.min.css"/>
        <!-- Styles -->

    </head>
    <body>
       <div id="app">
       </div>
       <script src="{{ mix('js/app.js') }}"></script>
       <script src="/js/weui.min.js"></script>

    </body>
</html>
