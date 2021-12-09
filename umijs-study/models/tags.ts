import { request } from "umi"
const getTags = () => {
  return request('/api/tags')
}
export default{
  // 調用modal的时候，通过命名空间调用，不要和其他命名空间冲突
  namespace: 'tags',
  state: {  },
  effects: {  // 调用服务端接口获取数据
    *fetchTags({payload, callback}, {pull, call}){

    }
  },
  reducers: { // 更新state

  }
}