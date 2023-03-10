<?php

namespace App\Http\Livewire;

use App\Models\User;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;

class Login extends Component
{
    public $email, $password;
    public function render()
    {
        return view('livewire.login')->layout('livewire.app');
    }

    protected $rules = [
        'email' => 'required|email',
        'password' => 'required|',
    ];

  
    public function login()
    {
        $this->validate();
        $this->rules;
        // // verificar se o susuario existe
        $query_ru = User::where('email', $this->email)->first();

        //    Verificar  se Existe o susuario
        if (isset($query_ru) == 0) {
            return redirect()->back()->with('status', 'Usuário não existe ');
        }

        //    Verificar se a senha corresponde ao que na DB
        if (Hash::check($this->password, $this->password)) {
            return redirect()->back()->with('status', 'Palavra-passe Incorreta.');
        }

        Session::put('logado', 'sim');
        Session::put('usuario', $query_ru->name);

        if (session('logado')) {
            # code...
            return redirect()->route('manegerapi')->with('status', 'Logado com sucessos');
        } else {
            # code...
            return redirect()->back()->with('status', 'Usuário não existe ');
        }
        
    }


    public function logout()
    {
        Session::flush();
        Session()->flush();
        return redirect('cpainel')->with('status', 'terminado com sucessos');
    }

   
}
