<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\User;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function register(Request $request)
     {
         $request->validate([
             'name'=>'required',
             'email'=>'required|email|unique:users',
             'password'=>'required|min:6',
             'phoneno'=>'required'
         ]);

         $user = User::create([
             'name'=>$request->name,
             'email'=>$request->email,
             'password'=>Hash::make($request->password),
             'phoneno'=>$request->phoneno,
             'level'=>$request->level
         ]);
         $user->save();
         $token = $user->createToken($user->email.'-'.NOW());
         return response()->json(['user'=>$user,'token'=>$token->accessToken]);
     }

     //login function
    //  public function login(Request $request)
    //  {
    //      $request->validate([
    //          'email'=>'required|email|exists:users,email',
    //          'password'=>'required|min:6'
    //      ]);

    //      if(Auth::attempt(['email' => $email, 'password' => $password]))
    //      {
    //          $user = Auth::user();
    //          $token = $user->createToken($user->email.'-'.NOW());
    //          return response()->json(['token'=>$token->accessToken, 'user'=>$user]);
    //      }else{
    //          return response()->json(['error'=>'Unauthorized']);
    //      }
    //  }

    public function login(Request $request){
        $request->validate([
            'email' =>'required|email|exists:users,email',
            'password' =>'required|min:6'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        {
           $user=Auth::user();
           $token =$user->createToken($user->email.'-'.now());
           return response()->json([
               'token' =>$token->accessToken,
               'user' =>$user
           
           ]);
       }else{
           return response()->json(['error' =>"unothorized"]);
       }
    }
    
    public function index()
    {
        //
        $user = User::all();
        return $user;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
