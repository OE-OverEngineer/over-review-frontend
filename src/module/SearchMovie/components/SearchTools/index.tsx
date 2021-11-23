import BannerSliderSection from 'module/Home/components/BannerSliderSection';
import DiscoverMovieSection from 'module/Home/components/DiscoverMovieSection';
import HallOfFameSection from 'module/Home/components/HallOfFameSection';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Head from 'next/head';

import TextHeader from 'common/components/TextHeader';

const SearchTools: React.FC = () => {
  return (
    <div className="flex flex-end mx-8 px-16">
      <Input
        allowClear
        placeholder="search something here"
        bordered={false}
        className="text-white mt-32 ml-auto w-80"
        prefix={<SearchOutlined className="text-white mr-2 " />}
        size="large"
      />
    </div>
  );
};
export default SearchTools;
