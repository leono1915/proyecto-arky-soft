<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Paquetes;
class PaquetesController extends Controller
{
    //
  public function index(){
     $paquetes= Paquetes::paginate(20);
     return $paquetes->toJson();
  }
  public function create(Request $request){
    $empleado= new Paquetes;
    $empleado->nombre=$request->nombre;
    $empleado->descripcion=$request->descripcion;
    $empleado->precio=$request->precio;
    $empleado->save();
    return 'creado';
        
  }
  public function delete($id){
    
    $paquetes=Paquetes::findOrFail($id);
    $paquetes->delete($id);
   return $paquetes;

  }
  public function update($id,Request $request){
    $paquetes=Paquetes::findOrFail($id);
    $paquetes->nombre=$request->nombre;
    $paquetes->descripcion=$request->descripcion;
    $paquetes->precio=$request->precio;
    $paquetes->save();
    return $paquetes->toJson();

  }
  public function show($id){
   
     $paquetes=Paquetes::findOrFail($id);
     return $paquetes->toJson();
  
  }
}
