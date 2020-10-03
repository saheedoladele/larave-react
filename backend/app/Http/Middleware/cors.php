<?php

namespace App\Http\Middleware;

use Closure;

class cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

         // ALLOW OPTIONS METHOD
        //  $headers = [
        //     'Access-Control-Allow-Origin' => '*',
        //     'Access-Control-Allow-Methods' => 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE',
        //     'Access-Control-Allow-Headers' => 'Authorization, Accept, Origin, Content-Type, X-Auth-Token, x-xsrf-token, x_carftoken, enctype, X-Requested-with, text/xml, application/data, audio/mpeg',
           
            
        // ];
        // if ($request->getMethod() == "OPTIONS") {
        //     // The client-side application can set only headers allowed in Access-Control-Allow-Headers            
        //     return response()->make('OK', 200, $headers);
        // }
        // // get next response
        // $response = $next($request);
        // foreach ($headers as $key => $value)
        //     $response->header($key, $value);
        // return $response;
        return $next($request)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization');
    }
}
