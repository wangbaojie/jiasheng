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
        'brand',
        'brand_no',
        'car_brand',
        'series',
        'color_no',
        'color_name',
        'year',
        'color_type',
        'images'
    ];

    public function color()
    {
        return $this->hasMany(Color::class, 'datas_id', 'id');
    }

    public function scopeBrand($query, $brand)
    {
        return $query->where('brand', $brand);
    }

    public function scopeBrandNo($query, $brand_no)
    {
        return $query->where('brand_no', $brand_no);
    }

    public function scopeCarBrand($query, $car_brand)
    {
        return $query->where('car_brand', $car_brand);
    }

    public function scopeSeries($query, $series)
    {
        return $query->where('series', 'like',"%$series%");
    }

    public function scopeColorNo($query, $color_no)
    {
        return $query->where('color_no', $color_no);
    }

    public function scopeColorName($query, $color)
    {
        return $query->where('color_name', $color);
    }



}


