import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@mui/material/styles';
import ThemeProviderTheme from 'components/ThemeProviderTheme/ThemeProviderTheme';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  selectCategoryList,
  selectRecipesByCategoryList,
} from 'redux/recipes/recipesSelectors';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { List } from './CategoriesTabPanel.styled';

const CategoriesTabPanel = () => {
  const [value, setValue] = useState('Beef');
  const categoryList = Object.entries(useSelector(selectCategoryList));
  const recipesByCategoryList = Object.entries(
    useSelector(selectRecipesByCategoryList)
  );
  const navigate = useNavigate();
  const location = useLocation();

  const [isSkeleton, setIsSkeleton] = useState(true);

  useEffect(() => {
    const query = location.pathname.split('/')[2];
    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1);
    setValue(formattedQuery);

    const timer = setTimeout(() => setIsSkeleton(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/categories/${newValue}`);
    setIsSkeleton(true);
    const timer = setTimeout(() => setIsSkeleton(false), 2000);
    return () => clearTimeout(timer);
  };
  return (
    <>
      <ThemeProvider theme={ThemeProviderTheme}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange}>
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
            <TabPanel value={value} sx={{ padding: '0', typography: 'body1' }}>
              {recipesByCategoryList.flatMap((item, key) => {
                return (
                  <div key={item[0]}>
                    {key === 0 ? (
                      <>
                        <List>
                          <RecipeCard
                            recipe={item[1]}
                            isSkeleton={isSkeleton}
                          ></RecipeCard>
                        </List>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CategoriesTabPanel;
