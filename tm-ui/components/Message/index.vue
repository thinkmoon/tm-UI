<template>
    <div v-if="visible" class="tm-message-wrapper">
        <div class="tm-message-dialog">
            <div class="tm-message-title">{{ title }}</div>
            <div class="tm-message-content">{{ content }}</div>
            <div class="tm-message-noRepeat" v-if="showNoRepeat"><input type="checkbox" v-model="noRepeat">不再提示</div>
            <div class="tm-message-operation-area">
                <div class="tm-message-cancel tm-message-operation" @click="action('cancel')">取消</div>
                <div class="tm-message-confirm tm-message-operation" @click="action('confirm')">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uid: "default",
            visible: false,
            title: "提示",
            content: "消息内容",
            showNoRepeat: false,
            noRepeat: false,
            callBack: null
        }
    },
    methods: {
        action(action) {
            this.visible = false
            if (action == "confirm" && this.showNoRepeat && this.noRepeat) {
                window.localStorage.setItem(this.uid, true)
            }
            if (this.callBack instanceof Function) {
                this.callBack(action)
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.tm-message-wrapper {
    position: fixed;
    z-index: 2;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .tm-message-dialog {
        width: 65%;
        background: #fff;
        border-radius: 0.1rem;
        overflow: hidden;
        .tm-message-title {
            background: #2790eb;
            color: #fff;
            text-align: center;
            padding: 0.1rem 0.1rem;
            font-size: 0.36rem;
            font-weight: 600;
        }
        .tm-message-content {
            padding: 0.3rem;
            text-align: center;
            font-size: 0.34rem;
            color: #666;
        }
        .tm-message-noRepeat {
            display: flex;
            align-items: center;
            padding: 0.2rem;
        }
        .tm-message-operation-area {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #ccc;
            .tm-message-operation {
                width: 50%;
                text-align: center;
                font-size: 0.36rem;
                padding: 0.16rem;
            }
            .tm-message-confirm {
                background: #2790eb;
                color: #fff;
            }
        }
    }
}
</style>
