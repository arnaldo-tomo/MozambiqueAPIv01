<div>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>

        <link rel="stylesheet" href="assets/css/estilo.css">
        <link rel="stylesheet" href="assets/js/js.js">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" >
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-5 mx-auto">
                    <div id="first">
                        <div class="myform form ">
                            <div class="logo mb-3">
                                <div class="col-md-12 text-center">
                                    <h1>{{ config('app.name') }}</h1>
                                </div>
                            </div>
                            <form action="" method="post" name="login">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email </label>
                                    <input type="email"  class="form-control" 
                                        aria-describedby="emailHelp" placeholder="Eemail">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" class="form-control"
                                        aria-describedby="emailHelp" placeholder="****************">
                                </div>
                               
                                <div class="col-md-12 text-center ">
                                    <button type="submit"
                                        class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="login-or">
                                        <hr class="hr-or">
                                        <span class="span-or">or</span>
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <p class="text-center">
                                        <a href="javascript:void();" class="google btn mybtn"><i
                                                class="fa fa-google-plus">
                                            </i> Signup using Google
                                        </a>
                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="text-center">Don't have account? <a href="#" id="signup">Sign up
                                            here</a></p>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </body>
</html>
</div>
