import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../comps/MyLayout';

export default () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
    </Layout>
  );
};