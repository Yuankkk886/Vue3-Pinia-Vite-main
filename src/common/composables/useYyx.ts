function initStarNotification() {
  setTimeout(() => {
    ElNotification({
      title: "学习Element Plus！",
      type: "success",
      message: h(
        "div",
        null,
        [
          h("div", null, "学习Element Plus！"),
          h("a", { style: "color: teal", target: "_blank", href: "https://element-plus.org/zh-CN/" }, "点击传送")
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 0)
}

function initStoreNotification() {
  setTimeout(() => {
    ElNotification({
      title: "学习pinia",
      type: "warning",
      message: h(
        "div",
        null,
        [
          h("div", null, "哦吼吼吼！"),
          h("a", { style: "color: teal", target: "_blank", href: "https://pinia.vuejs.org/zh/" }, "点击获取")
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 500)
}

function initMobileNotification() {
  setTimeout(() => {
    ElNotification({
      title: "学习Vite！",
      type: "primary",
      message: h(
        "div",
        null,
        [
          h("div", null, "你好！"),
          h("a", { style: "color: teal", target: "_blank", href: "https://vitejs.cn/vite3-cn" }, "点击查看")
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 1000)
}


export function useYyx() {
  return { initStarNotification, initStoreNotification, initMobileNotification }
}
