<template>
    <div>
        <div class="page list js_show">
            <div class="page__hd" @click="toList">
                <h1 class="page__title"><i class="fa  fa-lg fa-reply" aria-hidden="true"></i></h1>
                <p class="page__desc"></p>
            </div>
            <div class="page__bd">
                <div class="weui-cells__title">配色信息</div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>品牌名称</p>
                        </div>
                        <div class="weui-cell__ft">{{item.brand}}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>嘉盛编号</p>
                        </div>
                        <div class="weui-cell__ft">{{item.brand_no}}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>汽车品牌</p>
                        </div>
                        <div class="weui-cell__ft">{{item.car_brand}}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>适用车型</p>
                        </div>
                        <div class="weui-cell__ft">{{item.series}}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>原厂色号</p>
                        </div>
                        <div class="weui-cell__ft">{{item.color_no}}</div>
                    </div>

                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>颜色名称</p>
                        </div>
                        <div class="weui-cell__ft">{{item.color_name}}</div>
                    </div>

                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>嘉盛编号</p>
                        </div>
                        <div class="weui-cell__ft">{{item.brand_no}}</div>
                    </div>

                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>嘉盛色号</p>
                        </div>
                        <div class="weui-cell__ft">{{item.JS_color}}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>颜色年份</p>
                        </div>
                        <div class="weui-cell__ft">{{item.year}}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>标准色/差异色</p>
                        </div>
                        <div class="weui-cell__ft">{{item.color_type}}</div>
                    </div>

                </div>
                <div class="weui-cells__title">配色方案</div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_active" id="js_cell">
                        <div class="weui-cell__hd"><label class="weui-label">配方比重&nbsp;(g)</label></div>
                        <div class="weui-cell__bd weui-flex">
                            <input id="js_input" class="weui-input" autofocus="" v-model="weight" type="number"
                                   pattern="[0-9]*" placeholder="请输入16位数卡号" maxlength="16">
                            <button id="js_input_clear" class="weui-btn_reset weui-btn_icon weui-btn_input-clear">
                                <i class="weui-icon-clear"></i>
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <td class="alt herd">序号</td>
                            <td class="alt herd">色母编号</td>
                            <td class="alt herd ">重量(g)</td>
                            <td class="alt herd ">累加量(g)</td>
                        </tr>
                        </thead>
                        <tbody v-for="(item,i) in color">

                        <tr>
                            <td>{{item.sort}}</td>
                            <td class="alt">{{item.color_master}}</td>
                            <td>{{(item.weight/100*weight).toFixed(3)}}</td>
                            <td class="alt">{{addWeight(i).toFixed(3)}}</td>
                        </tr>
                        <tr>
                            <td colspan="4">{{item.attribute}}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>


            <div class="page__ft">
                <a href="javascript:home()"><img src="images/icon_footer_link.png"></a>
            </div>
        </div>

    </div>

</template>

<script>


    import Weui from 'weui';

    export default {
        components: Weui,
        mounted: function () {
            this.id = this.$route.query.id;
            this.item = this.storage.get('item');
            this.getColor();
        },
        data() {
            return {
                id: '',
                color: [],
                weight: 100,
                datas: [],
                item: {},
                oldWeight: [0]
            }
        },
        computed: {},
        methods: {
            toList() {
                this.$router.push('/list')

            },
            async getColor() {
                let that = this;
                this.$axios({
                    method: 'get',
                    url: 'api/v1/' + that.id

                }).then((response) => {
                    that.color = response.data.data;
                }).catch((error) => {
                    that.msg = error;
                    that.err = true;
                    this.loadingToast = false;
                    setInterval(function () {
                        that.err = false;
                    }, 5000);

                })
            }, addWeight(i) {

                let weight = (this.color[i].weight) / 100 * this.weight;
                let addWeight = weight + this.oldWeight[i];
                let next = i + 1;
                this.oldWeight[next] = addWeight;
                return addWeight;

            }


        }
    }
</script>

<style>
    table {
        width: 100%;
        padding: 0;
        margin: 0;
        border-collapse: collapse;
    }

    td {
        border: 1px solid #C1DAD7;
        background: #fff;
        font-size: 11px;
        padding: 6px 6px 6px 12px;
        color: #4f6b72;
    }

    td.alt {
        background: #F5FAFA;
        color: #797268;
    }

    td.herd {
        mso-ansi-font-weight: bold;
    }

</style>
