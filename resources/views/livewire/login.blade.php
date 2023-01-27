<div>
    <div class="container">
        <div class="row">
            <div class="col-md-5 mx-auto">
                <div id="first">
                    <div class="myform form ">
                        <div class="logo mb-3">
                            <div class="col-md-12 text-center">
                                <h1>{{ config('app.name') }} </h1>
                            </div>
                        </div>
                        @if (session('status'))
                        <div class="alert alert-primary" role="alert">
                          {{ session('status') }}
                        </div>
                            
                        @endif
                        <form wire:submit.prevent="login">
                            <div class="form-group">

                                <label for="exampleInputEmail1">Email {{ $email }}</label>
                                <input type="email" wire:model="email" class="form-control" aria-describedby="emailHelp"
                                    placeholder="Eemail">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" wire:model="password" class="form-control"
                                    aria-describedby="emailHelp" placeholder="****************">
                            </div>

                            <div class="col-md-12 text-center ">
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                            </div>
                            <div class="col-md-12 ">
                                <div class="login-or">
                                    <hr class="hr-or">
                                    <span class="span-or">or</span>
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <p class="text-center">
                                    <a href="javascript:void();" class="google btn mybtn"><i class="fa fa-google-plus">
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
    </div>