<template>
    <div>
        <div class="container">
            <div class="page preview js_show" @scroll.passive="getScroll($event)">
                <div class="page__hd ">
                    <div class="weui-flex">
                        <div class=" weui-flex__item page__title" @click="toHome"><i class="fa  fa-2x fa-home"
                                                                                     aria-hidden="true"></i>


                        </div>
                        <div class="weui-flex__item">
                            <a @click=setSeries(1) role="button" :class=k1>1K</a>
                        </div>
                        <div class="weui-flex__item">
                            <a @click=setSeries(2) role="button" :class=k2>2K</a>
                        </div>
                    </div>
                </div>
                <!--BEGIN toast-->
                <div id="toast" v-show="success">
                    <div class="weui-mask_transparent"></div>
                    <div class="weui-toast">
                        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                        <p class="weui-toast__content">{{ msg }}</p>
                    </div>
                </div>

                <div v-show="err">
                    <div class="weui-mask_transparent"></div>
                    <div class="weui-toast">
                        <i class="weui_icon_warn weui-icon_toast"></i>
                        <p class="weui-toast__content">{{ msg }}</p>
                    </div>
                </div>
                <!--end toast-->

                <!-- loading toast -->
                <div v-show="loadingToast">
                    <div class="weui-mask_transparent"></div>
                    <div class="weui-toast">
                        <i class="weui-loading weui-icon_toast"></i>
                        <p class="weui-toast__content">{{ msg }}</p>
                    </div>
                </div>
                <div class="page__hd" v-for="(item ,i ) in masterData" @click="toInfo(item)">
                    <div class="weui-form-preview">
                        <div class="weui-form-preview__hd">
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">汽车品牌</label>
                                <em class="weui-form-preview__value">{{ item.car_brand }}</em>
                            </div>
                        </div>
                        <div class="weui-form-preview__bd">
                            <!--                            <div class="weui-form-preview__item">-->
                            <!--                                <label class="weui-form-preview__label">品牌编号</label>-->
                            <!--                                <span class="weui-form-preview__value">{{item.brand_no}}</span>-->
                            <!--                            </div>-->
                            <!--                            <div class="weui-form-preview__item">-->
                            <!--                                <label class="weui-form-preview__label">品牌</label>-->
                            <!--                                <span class="weui-form-preview__value">{{item.brand}}</span>-->
                            <!--                            </div>-->
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">车型</label>
                                <span class="weui-form-preview__value">{{ item.car_type }}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">车型年份</label>
                                <span class="weui-form-preview__value">{{ item.year }}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">产品系列</label>
                                <span class="weui-form-preview__value">{{ item.series }}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">色号</label>
                                <span class="weui-form-preview__value">{{ item.color_no }}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">颜色名称</label>
                                <span class="weui-form-preview__value">{{ item.color_name }}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">差异色</label>
                                <span class="weui-form-preview__value">{{ item.color_type }}</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="page__bd">
                    <div class="weui-loadmore" v-show="loading">
                        <i class="weui-loading"></i>
                        <span class="weui-loadmore__tips">正在加载</span>
                    </div>
                    <div class="weui-loadmore weui-loadmore_line" v-show="noData">
                        <span class="weui-loadmore__tips">暂无数据</span>
                    </div>
                    <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot" v-show="allData">
                        <span class="weui-loadmore__tips"></span>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>


import Weui from 'weui';
//

export default {
    components: Weui,
    created() {
    }, watch: {
        series(o, n) {
            if (n == 1) {
                this.k1 = "weui-btn weui-btn_mini weui-btn_default weui-wa-hotarea";
                this.k2 = "weui-btn weui-btn_mini weui-btn_primary weui-wa-hotarea";
            } else {
                this.k2 = "weui-btn weui-btn_mini weui-btn_default weui-wa-hotarea";
                this.k1 = "weui-btn weui-btn_mini weui-btn_primary weui-wa-hotarea";
            }
            // this.page=1;
            // this.url= '/api/v1?page=1';
            this.getData(1, 1);
        }
    },
    mounted: function () {
        this.chooseData = this.storage.get('choose');
        this.getData(true);

    },
    data() {

        return {
            chooseData: {},
            choose_car_brand: false,
            loadingToast: false,
            success: false,
            err: false,
            msg: '',
            masterData: [],
            url: '/api/v1?page=1',
            loading: false,
            noData: false,
            allData: false,
            finished: true,
            k1: "weui-btn weui-btn_mini weui-btn_primary weui-wa-hotarea",
            k2: "weui-btn weui-btn_mini weui-btn_default weui-wa-hotarea",
            series: 1

        }
    },
    methods: {
        getScroll(event) {
            let scrollBottom =
                event.target.scrollHeight -
                event.target.scrollTop -
                event.target.clientHeight;
            if (this.finished && scrollBottom < 40) {
                this.getData()
            }
        },
        setSeries(series) {
            this.series = series;
//                 if (series==1){
// this.k1="weui-btn weui-btn_default";
// this.k2="weui-btn weui-btn_disabled weui-btn_default";
//                 }else{
//                     this.k2="weui-btn weui-btn_default";
//                     this.k1="weui-btn weui-btn_disabled weui-btn_default";
//                 }
        },

        toInfo(item) {
            this.storage.set('item', item);
            this.$router.push({
                name: 'details',
                query: {id: item.id}
            })
        },
        toHome() {
            this.$router.push('/')
        },
        async getData(status = false, newData = false) {

            let that = this;
            //    console.log(that.chooseData)
            if (status) this.loadingToast = true;
            if (!status) this.loading = true;
            this.msg = "查询中";
            this.finished = false;
            that.chooseData.series = this.series;
            let chooseData = that.chooseData;
            if (newData) that.url = '/api/v1?page=1';
            this.$axios({
                method: 'get',
                url: that.url,
                params: chooseData
            }).then((response) => {
                if (status) that.loadingToast = false;
                if (!status) that.loading = false;
                if (newData) that.masterData = [];
                response.data.data.data.forEach(function (val, index, arr) {
                    that.masterData.push(val);
                });
                if (that.masterData.length == 0) {
                    that.noData = true
                } else {
                    that.url = response.data.data.next_page_url;
                    that.finished = true;
                    if (response.data.data.next_page_url == null) {
                        that.allData = true;
                        that.finished = false
                    }
                }
            }).catch((error) => {
                that.finished = true;
                that.msg = error;
                that.err = true;
                this.loadingToast = false;
                setInterval(function () {
                    that.err = false;
                }, 5000);

            })
        }

    }
}
</script>

<style>
.weui-loadmore_line .weui-loadmore__tips {
    background-color: var(--weui-FG-4);
}
</style>
