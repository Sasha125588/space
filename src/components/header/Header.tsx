import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { IoMdPlanet } from 'react-icons/io';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const Header = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
    console.log('onPopupScroll', e);
  };
  const SpaceX = 'Space<X>';

  return (
    <>
      <motion.div className="px-12 pt-3 pb-3 text-center flex items-center justify-between">
        <motion.div className=" ">
          <Link className="flex items-center text-center justify-center" to="/">
            {' '}
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <IoMdPlanet style={{ color: 'red' }} className="w-16 h-16" />
            </motion.div>
            <Title
              className="text-white"
              style={{ marginBottom: 0, marginLeft: 6, color: 'white' }}
              level={3}
            >
              {SpaceX}
            </Title>
          </Link>
        </motion.div>
        <motion.div className="flex items-center text-center justify-center">
          <ul className="flex gap-14 text-lg font-mont font-normal text-neutral-200 ">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#">
                {' '}
                <Link to="/planets">Planets</Link>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#">Research</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#">Projects</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#"><Link to="/gallery">Gallery</Link></a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#">About</a>
            </motion.li>
          </ul>
        </motion.div>
        <TreeSelect
          showSearch
          style={{ width: '15%' }}
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Search planets..."
          allowClear
          treeDefaultExpandAll
          onChange={onChange}
          onPopupScroll={onPopupScroll}
        />
      </motion.div>
    </>
  );
};

export default Header;
