<?php

namespace App\Admin\Controllers;

use App\Admin\Actions\Data\DownloadTemp;
use App\Data;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Admin\Actions\Data\ImportData;
use Carbon\Carbon;


class DataController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '数据管理';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Data());
        $grid->column('car_brand','汽车品牌')->filter('like');

        $grid->column('year','车型年份')->sortable();

        $grid->car_type('车型');
        $grid->series('产品系列');
        $grid->color_name('颜色名称');
        $grid->color_no('色号');
        $grid->color_type('差异色');



        $grid->filter(function($filter) {

            $filter->disableIdFilter();

            $filter->column(1 / 2, function ($filter) {
                $filter->like('car_brand', '汽车品牌');
                $filter->like('car_type', '车型');
                $filter->like('year', '车型年份');
            });

            $filter->column(1 / 2, function ($filter) {
                $filter->like('series', '产品系列');
                $filter->like('color_name', '颜色名称');
                $filter->like('color_no', '色号');

            });



        });



        $grid->model()->orderBy('id', 'desc');


        $grid->tools(function (Grid\Tools $tools) {
            $tools->append(new DownloadTemp());
        });


        $grid->tools(function (Grid\Tools $tools) {
            $tools->append(new ImportData());
        });





        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Data::findOrFail($id));

            $show->field('id', 'ID');
            $show->field('car_brand', '汽车品牌');
            $show->field('car_type', '车型');
            $show->field('series', '车系');
            $show->field('color_no', '颜色编号');
            $show->field('color_name', '颜色名称');
            $show->field('year', '颜色年份');
            $show->field('color_type', '标准色/差异色');
//            $show->field('images', '图片');
//            $show->images('图片')->image();

        $show->color('配方信息', function ($color) {

            $color->resource('/admin/color');


            $color->storey("层数");
            $color->sort("配方序号");
            $color->color_master('色母编号');
            $color->color_master_name('色母名称');
            $color->weight('色母量');
            $color->cumulative_weight('色母累积量');
            $color->component('适用部件');
            $color->production('工序');
//            $color->images('图片');

            $color->filter(function ($filter) {
                $filter->disableIdFilter();
                $filter->like('color_master','色母编号');
            });
            $color->  disableActions();
            $color->disableBatchActions();
            $color->disableCreateButton();
            $color->disableExport();
            $color->disableTools();


        });


        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Data());
        $form->column(1/2, function ($form) {
//            $form->text('brand', '品牌');
//            $form->text('brand_no', '品牌编号');
            $form->text('car_brand', '汽车品牌');
            $form->text('car_type', '车型');
            $form->text('series', '产品系列');
            $form->text('year', '车型年份');
          $form->image('images', '图片');


        });
        $form->hasMany('color', '配方',function (Form\NestedForm $form) {
            $form->number('storey','层数');
            $form->number('sort','配方序号');
            $form->text('color_master','色母编号');
            $form->text('color_master_name','色母名称');
            $form->text('weight','色母量');
            $form->text('cumulative_weight','色母累积量');
            $form->text('component','适用部件');
            $form->number('production','工序');
//            $form->image('images', '图片');
        });
        $form->column(1/2, function ($form) {
            $form->text('color_no', '色号');
            $form->text('color_name', '颜色名称');

            $form->text('color_type', '差异色');


        });



        $form->confirm('确定创建吗？', 'create');





        return $form;
    }
}
