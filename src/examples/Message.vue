<template>
  <div @click="showModal" class="bg-blue text-lg">
      点我弹窗(wx.showModal)
  </div>
</template>

<script>
export default {
    methods:{
        showModal(){
            this.$message({
                title:"弹窗标题",
                content:"弹窗内容",
                callBack: (action) => {
                    if(action == 'confirm') {
                        console.log("点击了确定")
                    }
                }
            })
        }
    }
}
</script>

<style>

</style>