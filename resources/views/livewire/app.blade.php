<div>
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <link rel="stylesheet" href="assets/css/estilo.css">
    <link rel="stylesheet" href="assets/js/js.js">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" >
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> 
    <title>{{ config('app.name') }}</title>
    @livewireStyles
 </head>
 <body>
    {{ $slot }}

    @livewireScripts
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 </body>
 </html>
</div>
