<template>
    <div>
        <div class="container">
            <div class="page preview js_show" @scroll.passive="getScroll($event)">
                <div class="page__hd" @click="toHome">
                    <h1 class="page__title"><i class="fa  fa-2x fa-home" aria-hidden="true"></i></h1>
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
                <div class="page__hd" v-for="(item ,i ) in masterData" @click="toInfo(item)">
                    <div class="weui-form-preview">
                        <div class="weui-form-preview__hd">
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">汽车品牌</label>
                                <em class="weui-form-preview__value">{{item.car_brand}}</em>
                            </div>
                        </div>
                        <div class="weui-form-preview__bd">
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">品牌编号</label>
                                <span class="weui-form-preview__value">{{item.brand_no}}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">品牌</label>
                                <span class="weui-form-preview__value">{{item.brand}}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">适用车型</label>
                                <span class="weui-form-preview__value">{{item.series}}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">原厂色号</label>
                                <span class="weui-form-preview__value">{{item.color_no}}</span>
                            </div>
                            <div class="weui-form-preview__item">
                                <label class="weui-form-preview__label">颜色名称</label>
                                <span class="weui-form-preview__value">{{item.color_name}}</span>
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


        },
        mounted: function () {
            this.chooseData = this.storage.get('choose');
            this.getData(true);
            //  window.addEventListener("scroll", this.onScroll,true);
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
                finished: true

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
            async getData(status = false) {


                let that = this;
                if (status) this.loadingToast = true;
                if (!status) this.loading = true;
                this.msg = "查询中";
                this.finished = false;
                let chooseData = that.chooseData;
                this.$axios({
                    method: 'get',
                    url: that.url,
                    params: chooseData
                }).then((response) => {
                    if (status) that.loadingToast = false;
                    if (!status) that.loading = false;
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
    .weui-loadmore_line .weui-loadmore__tips{
        background-color:var(--weui-FG-4);
    }
</style>
