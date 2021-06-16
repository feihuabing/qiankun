import { useModel } from 'umi';
export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return (
    <div>
      {masterProps.type} child1
    </div>
  );
}
