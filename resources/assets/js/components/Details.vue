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
                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>汽车品牌</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.car_brand }}</div>
                    </div>

                </div>

                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>适用车型</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.car_type }}</div>
                    </div>

                </div>
                <div class="weui-cells" @click="setByYears">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>车型年份</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.year }}</div>
                    </div>

                </div>
                <div class="weui-cells" @click="setBySeries">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>产品系列</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.series }}</div>
                    </div>

                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>颜色名称</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.color_name }}</div>
                    </div>

                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>色号</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.color_no }}</div>
                    </div>

                </div>
                <div class="weui-cells" @click="setByColorType">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>标准色/差异色</p>
                        </div>
                        <div class="weui-cell__ft">{{ item.color_type }}</div>
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

                    <table v-for="(item,i) in color">
                        <thead>
                        <tr aria-colspan="6">第{{ i }}层</tr>
                        <tr>
                            <td class="alt herd">色母编号</td>
                            <td class="alt herd">色母名称</td>
                            <td class="alt herd ">色母量(g)</td>
                            <td class="alt herd ">累积量(g)</td>
                            <td class="alt herd ">适用部件</td>
                            <td class="alt herd ">工序</td>
                        </tr>
                        </thead>
                        <tbody v-for="(item2,i) in item">

                        <tr>
                            <td class="alt">{{ item2.color_master }}</td>
                            <td class="alt">{{ item2.color_master_name }}</td>
                            <td>{{ (item2.weight / 1000 * weight).toFixed(3) }}</td>
                            <td class="alt">{{ (item2.cumulative_weight / 1000 * weight).toFixed(3) }}</td>
                            <td class="alt">{{ item2.component }}</td>
                            <td class="alt">{{ item2.production }}</td>
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
        //  this.item = this.storage.get('item');
        this.getColor();
    },
    data() {
        return {
            id: '',
            color: [],
            weight: 1000,
            datas: [],
            item: {},
            oldWeight: [0],
            dataList: [],
            colorTypeList: [],
            allColorTypes: [],
            allYears: [],
            allSeries: []
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
                that.dataList = response.data.data;
                that.setAllDates();
                that.setColorAndItem(that.id);
            }).catch((error) => {
                that.msg = error;
                that.err = true;
                this.loadingToast = false;
                setInterval(function () {
                    that.err = false;
                }, 5000);

            })
        },

        setColorAndItem(id) {
            this.item = this.dataList[id];
            this.color = this.dataList[id].color;
        }, setAllDates() {
            var dataList = this.dataList;
            var lastColorType = '';
            var lastYears = '';
            var lastSeries = '';
            for (let val in this.dataList) {
                if (lastColorType != dataList[val].color_type) {
                    this.allColorTypes.push({value: dataList[val].id, label: dataList[val].color_type})
                    lastColorType = dataList[val].color_type;
                }
                if (lastYears != dataList[val].year) {
                    this.allYears.push({value: dataList[val].id, label: dataList[val].year})
                    lastYears = dataList[val].year;
                }
                if (lastSeries != dataList[val].series) {
                    this.allSeries.push({value: dataList[val].id, label: dataList[val].series})
                    lastSeries = dataList[val].series;

                }
            }
        }, setByColorType() {
            let that = this;
            if (that.allColorTypes.length > 0) {
                weui.picker(that.allColorTypes, {
                    onConfirm: function (result) {
                        that.setColorAndItem(result[0].value)
                    },
                });
            }

        }, setByYears() {
            let that = this;
            if (that.allYears.length > 0) {
                weui.picker(that.allYears, {
                    onConfirm: function (result) {
                        that.setColorAndItem(result[0].value)
                    },
                });
            }
        },
        setBySeries() {
            let that = this;
            if (that.allSeries.length > 0) {
                weui.picker(that.allSeries, {
                    onConfirm: function (result) {
                        that.setColorAndItem(result[0].value)
                    },
                });
            }
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
