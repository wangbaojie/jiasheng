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
        $grid->column('brand','品牌')->filter('like');

        $grid->column('brand_no','品牌编号')->sortable();
        $grid->car_brand('汽车品牌');
        $grid->color_name('颜色名称');
        $grid->year('颜色年份')->sortable();;
        $grid->color_type('标砖色/差异色');



        $grid->filter(function($filter) {

            $filter->disableIdFilter();

            $filter->column(1 / 2, function ($filter) {
                $filter->like('brand', '品牌');
                $filter->like('brand_no', '品牌编号');
                $filter->like('car_brand', '汽车品牌');
            });

            $filter->column(1 / 2, function ($filter) {
                $filter->like('series', '车系');
                $filter->like('color_no', '颜色编号');
                $filter->like('color_name', '颜色名称');

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
            $show->field('brand', '品牌');
            $show->field('brand_no', '品牌编号');
            $show->field('car_brand', '汽车品牌');
            $show->field('series', '车系');
            $show->field('color_no', '颜色编号');
            $show->field('color_name', '颜色名称');
            $show->field('year', '颜色年份');
            $show->field('color_type', '标准色/差异色');

        $show->color('配方信息', function ($color) {

            $color->resource('/admin/color');


            $color->sort("配方序号");
            $color->color_master('色母编号');
            $color->attribute('色母特性');
            $color->weight('配方重量');

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
            $form->text('brand', '品牌')->rules('required');
            $form->text('brand_no', '品牌编号')->rules('required');
            $form->text('car_brand', '汽车品牌')->rules('required');
            $form->text('series', '车系')->rules('required');


        });
        $form->hasMany('color', '配方',function (Form\NestedForm $form) {
            $form->number('sort','配方序号');
            $form->text('color_master','色母编号');
            $form->text('attribute','色母特性');
            $form->text('weight','配方重量');
        });
        $form->column(1/2, function ($form) {
            $form->text('color_no', '颜色编号')->rules('required');

            $form->text('color_name', '颜色名称')->rules('required');
            $form->text('year', '颜色年份');
            $form->text('color_type', '标准色/差异色')->rules('required');


        });



        $form->confirm('确定创建吗？', 'create');





        return $form;
    }
}
