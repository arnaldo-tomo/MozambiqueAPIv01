<div>
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <link rel="shortcut icon" href="assets/icon.png">

   <!-- Google Font -->
   <link
      href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;display=swap"
      rel="stylesheet">

   <!-- FontAwesome JS-->
   <script defer src="assets/fontawesome/js/all.min.js"></script>
   <!-- Plugins CSS -->
   <link rel="stylesheet"
      href="assets/highlight.js/9.15.2/styles/atom-one-dark.min.css">
   <link rel="stylesheet"
      href="assets/plugins/simplelightbox/simple-lightbox.min.css">

   <!-- Theme CSS -->
   <link id="theme-style" rel="stylesheet" href="assets/css/theme.css">
   <link id="theme-style" rel="stylesheet" href="assets/css/estilo.css">

    <title>{{ config('app.name') }}</title>
    @livewireStyles
 </head>
 <body>
    {{ $slot }}

    @livewireScripts
<!-- Javascript -->
<script src="assets/plugins/popper.min.js"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/highlight.js/9.15.8/highlight.min.js"></script>
<!-- Page Specific JS -->
<script src="assets/plugins/smoothscroll.min.js"></script>
<script src="assets/js/highlight.min.js"></script>
<script src="assets/js/highlight-custom.js"></script>
<script src="assets/plugins/simplelightbox/simple-lightbox.min.js"></script>
<script src="assets/plugins/gumshoe/gumshoe.polyfills.min.js"></script>
<script src="assets/js/docs.js"></script>
 </html>
</div>
