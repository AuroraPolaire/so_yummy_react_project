import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  selectCategoryList,
  selectRecipesByCategoryList,
} from 'redux/recipes/recipesSelectors';

const CategoriesTabPanel = () => {
  const [value, setValue] = React.useState('Beef');
  const categoryList = Object.entries(useSelector(selectCategoryList));
  const recipesByCategoryList = Object.entries(
    useSelector(selectRecipesByCategoryList)
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = location.pathname.split('/')[2];
    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1);
    setValue(formattedQuery);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/categories/${newValue}`);
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
                {categoryList.flatMap(item => {
                  return (
                    <Tab
                      label={item[1].title}
                      value={item[1].title}
                      key={item[1].title}
                    />
                  );
                })}
              </TabList>
            </Box>
            <TabPanel value={value}>
              {recipesByCategoryList.flatMap((item, key) => {
                return (
                  <div key={item[0]}>
                    <div>
                      {key === 0
                        ? item[1].map(item => {
                            return (
                              <div className="card" key={item._id}>
                                <img src={item.preview} alt={item.title} />
                                <p className="title">{item.title}</p>
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>
                );
              })}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

export default CategoriesTabPanel;
