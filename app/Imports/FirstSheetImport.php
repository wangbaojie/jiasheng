<?php

namespace App\Imports;

use App\Data;
use App\Data as DataModel;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::default('none');

class FirstSheetImport implements ToCollection, WithBatchInserts, WithChunkReading, WithHeadingRow, ToModel
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    private $round;

    public function __construct(int $round)
    {
        $this->round = $round;
    }


    public function model(array $row)
    {


        $model_data = Data::where('car_brand', !empty($row['汽车品牌'])?$row['汽车品牌']:'')
            ->where('car_type', !empty($row['车型'])?$row['车型']:'')
            ->where('year', !empty($row['车型年份'])?$row['车型年份']:'')
            ->where('series', !empty($row['产品系列'])?$row['产品系列']:'')
            ->where('color_name', !empty($row['颜色名称'])?$row['颜色名称']:'')
            ->where('color_no', !empty($row['色号'])?$row['色号']:'')
            ->where('color_type', !empty($row['差异色'])?$row['差异色']:'')
            ->first();

        if ($model_data) {
            return null;
        }



        return new DataModel([
//            'brand' => $row['品牌'],
//            'brand_no' => $row['品牌编号'],
            'car_brand' => trim($row['汽车品牌']),
            'car_type' => trim($row['车型']),
            'year' =>   trim($row['车型年份']),
            'series' => trim($row['产品系列']),
            'color_name' =>trim( $row['颜色名称']),
            'color_no' =>trim( $row['色号']),
            'color_type' => trim($row['差异色']),
            'images' => trim($row['图片']),
        ]);
//            $dataModel->color->sort = $row['配方序号'];
//            $dataModel->color->color_master = $row['色母编号'];
//            $dataModel->color->attribute = $row['色母特性'];
//            $dataModel->color->weight = $row['配方重量'];
        //  }
        //  else {

//            $model_data->color->sort = $row['配方序号'];
//            $model_data->color->color_master = $row['色母编号'];
//            $model_data->color->attribute = $row['色母特性'];
//            $model_data->color->weight = $row['配方重量'];
//            $dataModel = $model_data;
        //}

        // return $dataModel;
    }

    public function collection(Collection $rows)
    {
        //
    }


    public function batchSize(): int
    {
        return 1;
    }


    public function chunkSize(): int
    {
        return 1;
    }

}
