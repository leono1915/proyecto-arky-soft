<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Arky-sof</title>
       
        <link rel="shortcut icon" type="image/x-icon" href="{{asset('images/logo.jpg')}}" />
    <link rel="stylesheet" href="{{asset('css/css/owl.carousel.css')}}">
    <link rel="stylesheet" href="{{asset('css/css/barfiller.css')}}">
    <link rel="stylesheet" href="{{asset('css/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('css/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/css/slicknav.css')}}">
    <link rel="stylesheet" href="{{asset('css/css/main.css')}}">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" 
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    </head>
    <body>
       <!-- <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif        
        </div>-->
    <div id="example">
   
    </div>
    
    <script src="{{asset('js/app.js')}}" /> </script>
<script src="{{asset('js/js/jquery-2.2.4.min.js')}}"></script>
<script src="{{asset('js/js/vendor/popper.min.js')}}"></script>
<script src="{{asset('js/js/vendor/bootstrap.min.js')}}"></script>
<script src="{{asset('js/js/vendor/owl.carousel.min.js')}}"></script>
<script src="{{asset('js/js/vendor/isotope.pkgd.min.js')}}"></script>
<script src="{{asset('js/js/vendor/jquery.barfiller.js')}}"></script>
<script src="{{asset('js/js/vendor/loopcounter.js')}}"></script>
<script src="{{asset('js/js/vendor/slicknav.min.js')}}"></script>
<script src="{{asset('js/js/active.js')}}"></script>
    </body>
</html>
