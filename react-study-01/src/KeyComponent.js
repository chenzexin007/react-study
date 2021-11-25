import React from "react";
export default class KeyComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      infoList: [
        {
          name: 'lilei',
          age: 18,
          dataList: ['111','2222','3333']
        },
        {
          name: 'hanxin',
          age: 23,
          dataList: ['111','2222','3333']
        },
        {
          name: 'sunbin',
          age: 16,
          dataList: ['111','2222','3333']
        },
      ]
    }
  }

  insertData = () => {
    this.setState({
      infoList: this.state.infoList.concat([{
        name: 'sunbin',
        age: 16,
        dataList: ['111','2222','3333']
      }])
    })
  }

  render(){
    const { infoList } = this.state
    return (
      <div>
        {
          infoList.map((ele,index) => {
            return (
              <li key={index}>
                <p>{ele.name}</p>
                <p>{ele.age}</p>
                <div>数据集： { ele.dataList.map((childEle, childIndex) => {
                    return <p key={childIndex}>{childEle}</p>
                }) }</div>
              </li>
            )
          })
        }
        <button onClick={this.insertData}>插入数据</button>
      </div>
    )
  }
}