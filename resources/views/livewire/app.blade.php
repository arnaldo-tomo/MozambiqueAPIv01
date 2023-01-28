<div>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="shortcut icon" href="assets/icon.png">
        <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />

        <title>{{ config('app.name') }}</title>
        @livewireStyles
    </head>

    <body>
        {{ $slot }}
        @livewireScripts
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>

    </body>
    </html>
</div>
