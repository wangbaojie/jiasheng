<template>
    <div>
        <div class="page form_page js_show">
            <div class="weui-form">
                <div class="weui-form__text-area">
                    <h2 class="weui-form__title">精准配色系统</h2>
                    <div class="weui-form__desc"></div>
                </div>


                <!--BEGIN toast-->
                <div id="toast" v-show="success">
                    <div class="weui-mask_transparent"></div>
                    <div class="weui-toast">
                        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                        <p class="weui-toast__content">{{msg}}</p>
                    </div>
                </div>

                <div v-show="err">
                    <div class="weui-mask_transparent"></div>
                    <div class="weui-toast">
                        <i class="weui_icon_warn weui-icon_toast"></i>
                        <p class="weui-toast__content">{{msg}}</p>
                    </div>
                </div>
                <!--end toast-->

                <!-- loading toast -->
                <div v-show="loadingToast">
                    <div class="weui-mask_transparent"></div>
                    <div class="weui-toast">
                        <i class="weui-loading weui-icon_toast"></i>
                        <p class="weui-toast__content">{{msg}}</p>
                    </div>
                </div>

                <div class="weui-form__control-area">
                    <div class="weui-cells__group weui-cells__group_form">
                        <div class="weui-cells weui-cells_form">
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">品牌编号</label></div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" v-model="chooseData.brand_no" placeholder="请输入品牌编号">
                                </div>
                            </div>

                            <div
                                class="weui-cell weui-cell_active weui-cell_access weui-cell_select weui-cell_select-after">
                                <div class="weui-cell__hd"><label class="weui-label">汽车品牌</label></div>
                                <div class="weui-cell__bd" @click="setCarBrand">{{getChooseCarBrand}}</div>
                            </div>

                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">适用车型</label></div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" v-model="chooseData.series" placeholder="请输入使用车型">
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">原厂色号</label></div>
                                <div class="weui-cell__bd">
                                    <input class="weui-input" v-model="chooseData.color_no" placeholder="请输入原厂色号">
                                </div>
                            </div>

                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">颜色名称</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" v-model="chooseData.color_name"
                                           placeholder="颜色名称">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weui-form__opr-area">
                    <a class="weui-btn weui-btn_primary" @click="tolist">
                        查询配方
                    </a>
                </div>
                <div class="weui-form__opr-area">
                    <div class="weui-footer">
                        <p class="weui-footer__links">
                            <a href="javascript:" class="weui-footer__link">广州嘉盛环保高新材料股份有限公司</a>
                        </p>
                        <p class="weui-footer__text">Copyright © 2008-2019 4nd.cn</p>
                    </div>
                </div>

            </div>


        </div>


    </div>

</template>

<script>


    import Weui from 'weui';


    export default {
        components: Weui,
        computed: {
            getChooseCarBrand() {

                if (this.chooseData.car_brand == '') {
                    return "请选择汽车品牌"
                } else {
                    return this.chooseData.car_brand;
                }
            }
        },
        mounted: function () {
            this.getBrand();
            this.chooseData = this.storage.get('choose');
        },
        data() {

            return {
                chooseData: {
                    brand_no: '',
                    car_brand: "",
                    series: '',
                    color_no: '',
                    color_name: ''
                },
                loadingToast: false,
                success: false,
                err: false,
                visible: false,
                msg: '',
                brand: [{
                    label: "请选择汽车品牌", value: "请选择汽车品牌"
                }],

            }
        },
        methods: {
            async  getBrand() {
                let that = this;
                this.$axios({
                    method: 'get',
                    url: 'api/v1/group',
                    params: {
                        group: 'car_brand'
                    }
                }).then((response) => {
                    response.data.data.forEach(function (val, index, arr) {

                        let data = {label: val.car_brand, value: val.car_brand}

                        that.brand.push(data);

                    })
                    //请求成功返回的数据
                }).catch((error) => {
                    that.msg = error;
                    that.err = true;
                    setInterval(function () {
                        that.err = false;
                    }, 5000);

                })
            },

            setCarBrand() {
                let that = this;
                weui.picker(that.brand, {
                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                        if (result[0].label == "请选择汽车品牌") {
                            that.chooseData.car_brand = '';
                        }else{
                            that.chooseData.car_brand = result[0].label;
                        }

                    },
                    title: '请选择汽车品牌'
                });

            },
            tolist() {
                this.storage.set('choose', this.chooseData);
                this.$router.push({
                    name: 'list',
                })
            },


        }
    }
</script>

<style>
    .hello {
        font-size: 2em;
        color: green;
    }
</style>
