import { createApp } from 'vue'
import Message from "./index.vue"


const msg = options => {
    const NoticeInstance = createApp(Message)
    let msgNode = document.createElement('div');
    NoticeInstance.vm = NoticeInstance.mount(msgNode);
    if (options && Object.keys(options).length > 0) {
        Object.assign(NoticeInstance.vm, options)
    }
    console.log(NoticeInstance)
    NoticeInstance.vm.visible = true;
    NoticeInstance.dom = NoticeInstance.vm.$el;
    document.body.appendChild(NoticeInstance.dom)
    return NoticeInstance.vm
}
export default msg;
