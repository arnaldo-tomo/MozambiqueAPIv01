<div>
{{-- <div class="container">
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
<input type="text" wire:model="email" class="form-control" placeholder="Eemail">
@error('email')
<span class="text-danger">{{ $message }}</span>
@enderror
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
<input type="password" wire:model="password" class="form-control" @error('password') placeholder="****************">
<span class="text-danger">{{ $message }}</span>
@enderror
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
</div> --}}

<div class="row justify-content-center">
    <div class="col-4">
        <div class="card">
            <div class="card-header ">
                <h2>Autenticacao</h2>
                <p>brow aqui e para vc informar suas credencias "admin"</p>
                <div class="form-group">
                    <label class="form-label">Email:*</label>
                    <input id="my-input" class="form-control" placeholder="enforme o email" type="text" name="">
                </div>
                <div class="form-group">
                    <label class="form-label">Passoword:*</label>
                    <input id="my-input" class="form-control" type="text" placeholder="*******" name="">
                </div>

                <div class="row">
                    <div class="col-6">
                        <button type="submit" class="btn btn-success btn-block btn-sm">Conectar</button>
                    </div>
                    <div class="col-6">
                        <button type="submit" class="btn btn-success btn-block btn-sm">Conectar</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>