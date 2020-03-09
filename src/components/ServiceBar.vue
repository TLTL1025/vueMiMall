<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-1"></span>预约维修服务</li>
        <li><span class="icon-2"></span>七天无理由退货</li>
        <li><span class="icon-3"></span>15天免费换货</li>
        <li><span class="icon-4"></span>满150包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "service-bar"
};
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.service{
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    li{
        display: inline-block;
        width: 24.9%;
        text-align: center;
        border-right: 1px solid #e5e5e5;
        span{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 8px;
        }
        .icon-1{
          @include bgImg(20px,20px,'/imgs/icon-setting.png')
        }
        .icon-2{
          @include bgImg(20px,20px,'/imgs/icon-setting.png')
        }
        .icon-3{
          @include bgImg(20px,20px,'/imgs/icon-setting.png')
        }
        .icon-4{
          @include bgImg(20px,20px,'/imgs/icon-setting.png')
        }

    }
}

</style>