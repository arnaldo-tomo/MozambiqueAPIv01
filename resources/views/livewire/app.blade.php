<div>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="shortcut icon" href="assets/icon.png">
        <title>{{ config('app.name') }}</title>
        @livewireStyles
    </head>

    <body>
        {{ $slot }}
        @livewireScripts
    </body>
    </html>
</div>
