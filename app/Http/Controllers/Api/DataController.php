<?php

namespace App\Http\Controllers\Api;

use  App\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;


class DataController extends Controller
{
    //
    public function index(Request $request, Data $data)
    {
        collect($request->brand)->isNotEmpty() && $data = $data->Brand($request->brand);
        collect($request->brand_no)->isNotEmpty() && $data = $data->BrandNo($request->brand_no);
        collect($request->car_brand)->isNotEmpty() && $data = $data->Carbrand($request->car_brand);
        collect($request->car_type)->isNotEmpty() && $data = $data->CarType($request->car_type);
        collect($request->color_no)->isNotEmpty() && $data = $data->Colorno($request->color_no);
        collect($request->color_name)->isNotEmpty() && $data = $data->ColorName($request->color_name);
        $data= $data->series($request->series);

        $data = $data->paginate(10);
        return $this->success($data);

    }

    public function group(Request $request, Data $data)
    {
        $group = $request->group;
        if (Cache::has($group)) {
            $data = Cache::get($group);
        } else {
            $data = Data::select($group)
                ->where($group, '<>', '')
                ->where($group, '<>', NULL)
                ->groupBy($group)
                ->get();
            Cache::put($group, $data, 60);
        }
        return $this->success($data);
    }


    public function info(Request $request, Data $data)
    {
        $res= [];
        $getData=false;
      //  $model_data = Data::where('car_brand', $data->car_brand);
       // if (!empty($data->car_type)){
      //  $model_data= $model_data->where('car_type', $data->car_type);
        $where['car_brand'] = $data->car_brand;
        $where['car_type'] = $data->car_type;
       // }
       // if (!empty($data->color_no)){
          //  $model_data->where('color_no', $data->color_no);
       // }

     if (!empty($data->color_type)){
      //  var_dump(123);
      $length = strrpos($data->color_type,"(")===false?strlen($data->color_type):strrpos($data->color_type,"(");
          $colorTypeMaster =   substr($data->color_type,0,$length);
          $where[] = ['color_type', 'like', $colorTypeMaster."%"];
        // $model_data=  $model_data->where('color_type', 'like',$colorTypeMaster."%");
        }else{
      //   var_dump(456);
//         $model_data=   $model_data->where('color_no', $data->color_no);
//         $model_data=  $model_data->where('color_name', $data->color_name);
         $where['color_no'] = $data-> color_no;
         $where['color_name'] = $data->color_name;
      }
            $otherColor =  Data::where($where)->get();

    // dd($model_data->getLastSql());
//        var_dump($data->car_brand);
//        var_dump($data->car_type);
//        var_dump($data->color_type);
//       // var_dump($data->car_type);
//     dd($otherColor->toArray());
          foreach ($otherColor as $k=>$v){
               $res[$v->id]=$v->toArray();
              foreach ($v->color as $kk=>$vv){
                  $res[$v->id]['color'][$vv->storey][] =$vv->toArray();
              }
          }
        return $this->success($res);
    }
}



