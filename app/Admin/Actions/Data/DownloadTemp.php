<?php

namespace App\Admin\Actions\Data;

use Encore\Admin\Actions\Action;
use Illuminate\Http\Request;

class DownloadTemp extends Action
{
    protected $selector = '.download-temp';

    public function handle(Request $request)
    {
        // $request ...

        return $this->response()->success('下载成功')->download('/temp/配色信息模板.xls');
    }

    public function html()
    {
        return <<<HTML
        <a class="btn btn-sm btn-default  download-temp"><i class="fa fa-file-excel-o "></i>&nbsp;&nbsp;获取模板</a>
HTML;
    }
}
