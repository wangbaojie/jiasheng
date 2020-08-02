<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $table = 'color';
    public $timestamps = false;

    protected $fillable = [
        'datas_id',
        'sort',
        'color_master',
        'attribute',
        'weight'
    ];

    public function painter()
    {
        return $this->belongsTo(Data::class, 'datas_id');
    }
}
