<div>
    <form action="" wire:submit.prevent='login'>
        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-header ">
                        <h2>Autenticacao</h2>
                        <p>brow aqui e para vc informar suas credencias "admin"</p>
                        <div class="form-group">
                            <label class="form-label">Email:*</label>
                            <input id="my-input" class="form-control" wire:model='email' placeholder="enforme o email"
                                type="text" name="">
                            @error('email')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label class="form-label">Passoword:*</label>
                            <input id="my-input" class="form-control" wire:model='password' type="text"
                                placeholder="*******" name="">
                            @error('password')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
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
    </form>
</div>
