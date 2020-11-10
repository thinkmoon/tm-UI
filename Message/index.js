import Vue from 'vue'

const NoticeConstructor = Vue.extend(require('./index.vue').default)

const Message = options => {
    const NoticeInstance = new NoticeConstructor({
        data: options
    })
    NoticeInstance.vm = NoticeInstance.$mount();
    if (window.localStorage.getItem(options.uid)) {
        options.callBack("confirm")
        return NoticeInstance.vm
    }
    Object.assign(NoticeInstance.vm, options)
    NoticeInstance.vm.visible = true;
    NoticeInstance.dom = NoticeInstance.vm.$el;
    document.body.appendChild(NoticeInstance.dom)
    return NoticeInstance.vm
}
export default Message;
