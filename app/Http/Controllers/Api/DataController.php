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
        collect($request->series)->isNotEmpty() && $data = $data->Series($request->series);
        collect($request->color_no)->isNotEmpty() && $data = $data->Colorno($request->color_no);
        collect($request->color_name)->isNotEmpty() && $data = $data->ColorName($request->color_name);

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


        return $this->success($data->color);
    }
}



