import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useSelector } from 'react-redux';
import { selectCategoryList } from 'redux/recipes/recipesSelectors';

// import PropTypes from 'prop-types'

const CategoriesTabPanel = () => {
  const [value, setValue] = React.useState('1');
  const categoryList = useSelector(selectCategoryList);
  const list = Object.entries(categoryList);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
                <Tab label="Item One" value="4" />
                <Tab label="Item Two" value="5" />
                <Tab label="Item Three" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              Item One
              {/* {list.map(item => item)} */}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item One</TabPanel>
            <TabPanel value="5">Item Two</TabPanel>
            <TabPanel value="6">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

// CategoriesPage.propTypes = {}

export default CategoriesTabPanel;
