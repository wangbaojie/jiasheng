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

        $model_data = Data::where('brand', $row['品牌'])
            ->where('brand_no', $row['品牌编号'])
            ->where('car_brand', $row['汽车品牌'])
            ->where('series', $row['车系'])
            ->where('color_name', $row['颜色名称'])
            ->where('color_no', $row['颜色编号'])
            ->where('year', $row['颜色年份'])
            ->where('color_type', $row['标准色/差异色'])
            ->first();

        if (empty($model_data)) {
            return null;
        }



        return new ColorModel([
            'datas_id' => $model_data->id,
            'sort' => $row['配方序号'],
            'color_master' => $row['色母编号'],
            'attribute' => $row['色母特性'],
            'weight' => $row['配方重量'],
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
