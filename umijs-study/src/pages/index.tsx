import styles from './index.less';
import { Pagination } from 'antd'
import { request, connect } from 'umi';

function IndexPage() {
  // request('/api/tags').then(res => { console.log(res) })
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default connect(() => ({  }))(IndexPage)
