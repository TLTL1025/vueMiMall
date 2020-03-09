<template>
    <div>
        <div class="footer">
            <div class="footer-logo">
                <img src="/imgs/logo-footer.png" alt="">
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="https://github.com/TLTL1025/vueMiMall" target="_blank">谈蕾蕾vue项目</a><span>|</span>
                <a href="https://github.com/TLTL1025/vueMiMall">vue全家桶</a><span>|</span>
                <a href="https://github.com/TLTL1025/vueMiMall">加油</a><span>|</span>


            </div>
            <div class="copyright">
                1057798521@qq.com
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
.footer{
    height: 234px;
    border-top:4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        // a颜色的优先级大于父级的优先级，需要再定义一遍颜色
        a{
            color: #999999;
            display: inline-block;
        }
        span{
            margin:0 10px;
        }
        margin-bottom: 13px;
    }
}


</style>