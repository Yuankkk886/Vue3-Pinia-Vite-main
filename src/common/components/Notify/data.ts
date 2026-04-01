import type { NotifyItem } from "./type"

export const notifyData: NotifyItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: "应用消息",
    datetime: "十分钟前",
    description: "欢迎您，亲爱的用户"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: "消息助手",
    datetime: "五分钟前",
    description: "您有待办事项"
  }
]

export const messageData: NotifyItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "语音助手",
    description: "欢迎使用语音助手",
    datetime: "三分钟前"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "AI助理",
    description: "您好，我是您的AI助理",
    datetime: "半小时前"
  },
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "Admin-01",
    description: "早上好",
    datetime: "一分钟前"
  }
]

export const todoData: NotifyItem[] = [
  {
    title: "任务名称",
    description: "这家伙很懒，什么都没留下",
    extra: "未开始",
    status: "info"
  },
  {
    title: "任务名称",
    description: "这家伙很懒，什么都没留下",
    extra: "进行中",
    status: "primary"
  },
  {
    title: "任务名称",
    description: "这家伙很懒，什么都没留下",
    extra: "已超时",
    status: "danger"
  }
]
