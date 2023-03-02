<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;


class Data extends Model
{
    //
    use SoftDeletes;
    protected $table = 'datas';
    public $timestamps = false;


    protected $fillable = [
        'id',
        'car_brand',
        'series',
        'color_no',
        'color_name',
        'year',
        'color_type',
        'car_type',
         'images'
    ];

    public function color()
    {
        return $this->hasMany(Color::class, 'datas_id', 'id');
    }

//    public function scopeBrand($query, $brand)
//    {
//        return $query->where('brand', $brand);
//    }
//
//    public function scopeBrandNo($query, $brand_no)
//    {
//        return $query->where('brand_no', $brand_no);
//    }

    public function scopeCarBrand($query, $car_brand)
    {
        return $query->where('car_brand', 'like',"%$car_brand%");
    }

   public function scopeSeries($query, $series)
   {
        return $query->where('series', $series=="1"?'1K Basecoat':'2K Topcoat');
   }
    public function scopeCarType($query, $car_type)
    {
        return $query->where('car_type', 'like', "%$car_type%");
    }

    public function scopeColorNo($query, $color_no)
    {
        return $query->where('color_no', 'like', "%$color_no%");
    }

    public function scopeColorName($query, $color)
    {
        return $query->where('color_name', 'like', "%$color%");
    }

    public  function getAllColorType($colorTypeMaster){

     return  Data::where('color_type', 'like',"$colorTypeMaster%")
           ->get();
    }

    public function getAllColorByNo($colorNo){
        return  Data::where('color_no', $colorNo)
            ->get();
    }



}


