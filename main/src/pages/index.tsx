import styles from './index.less';
import { MicroApp,Link } from 'umi';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MicroApp name="app1" type="MicroApp"/>
      <Link to="#/child1">child1</Link>
      <MicroApp name="app2" type="MicroApp"/>
    </div>
  );
}
