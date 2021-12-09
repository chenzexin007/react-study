import mockjs from 'mockjs'
export default {
  '/api/index': {
    id:1,
    name: 'Tom',
    age: 18
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
}