<?php

namespace App\Imports;

use App\Data;
use App\Color;
use App\Color as ColorModel;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::default('none');

class ColorSheetImport implements ToCollection, WithBatchInserts, WithChunkReading, WithHeadingRow, ToModel
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
        if (empty($model_data)) {
            return null;
        }



        return new ColorModel([
            'datas_id' => trim($model_data->id),
            'sort' => trim($row['配方序号']),
            'color_master' => trim($row['色母编号']),
            'color_master_name' => trim($row['色母名称']),
            'weight' => trim($row['色母量']),
            'cumulative_weight' =>trim( $row['色母累积量']),
            'storey' => trim($row['层数']),
            'component' => trim($row['适用部件']),
            'production' =>trim( $row['工序']),
//            'images' => $row['图片'],
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
        return 1000;
    }


    public function chunkSize(): int
    {
        return 1000;
    }

}
