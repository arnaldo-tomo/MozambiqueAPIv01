<div>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>{{ config('app.name') }}</title>
        <link rel="stylesheet" href="assets/css/estilo.css">
        <link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' rel='stylesheet'>
        <link href='https://use.fontawesome.com/releases/v5.7.2/css/all.css' rel='stylesheet'>
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                    <div class="panel border bg-white">
                        <div class="panel-heading">
                            <h3 class="pt-4 font-weight-medium">{{ config('app.name') }}</h3>
                        </div>
                        <div class="panel-body p-3">
                            <form action="login_script.php" method="POST">
                                <div class="form-group py-2">
                                    <div class="input-field"> <span class="far fa-user p-2"></span> <input
                                            type="text" placeholder="Email" required> </div>
                                </div>
                                <div class="form-group py-1 pb-2">
                                    <div class="input-field"> <span class="fas fa-lock px-2"></span> <input
                                            type="password" placeholder="Password" required> <button
                                            class="btn bg-white text-muted"> <span class="far fa-eye-slash"></span>
                                        </button> </div>
                                </div>
                                <div class="form-inline"> <input type="checkbox" name="remember" id="remember"> <label
                                        for="remember" class="text-muted">Remember me</label> <a href="#"
                                        id="forgot" class="font-weight-bold">Forgot password?</a> </div>
                                <div class="btn btn-primary btn-block mt-3">Login</div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
        <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'></script>
        <script type='text/javascript' src='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'></script>
    </body>

    </html>

</div>
