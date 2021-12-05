import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useRouter } from 'next/dist/client/router';

const SearchTools: React.FC = () => {
  const Router = useRouter();
  const { search } = Router.query;
  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto my-8">
      <div className="text-2xl flex gap-4">
        <div>Key word: </div>
        <div>{search}</div>
      </div>
      <Input
        allowClear
        placeholder="search something here"
        bordered={false}
        className="text-white w-72"
        prefix={<SearchOutlined className="text-white mr-2" />}
        size="large"
        onPressEnter={(e: any) => {
          Router.push(`/search-movie?search=${e.target.value}`);
        }}
      />
    </div>
  );
};
export default SearchTools;
