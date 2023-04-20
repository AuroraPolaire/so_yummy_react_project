import React, {
} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default function CustomSelect({ options, ofType, ...props }) {

  const customStyles = {
    container: (provided, state) => {
      switch(ofType) {
        case 'measure':
            return {
              ...provided,
              width: '65%',
          };
        case 'descInput':
            return {
              ...provided,
              position: "absolute",
              top: 0,
              right: 0,
              minWidth: "85px",
            };
            default:
                return { ...provided };
          };
    },

    control: (provided, state) => {
      const defaultStyles = {
          border: 0,
          outline: 0,
        '& .css-1dimb5e-singleValue': {
        color: 'gray',
        fontSize: '14px',
        lineHeight: 1.5,
        fontFamily: 'Poppins',
        paddingRight: 0,
        '@media screen and (min-width: 768px)': {
          fontSize: '18px',
        },
      },
      '& .css-1jqq78o-placeholder': {
        color: 'gray',
        fontSize: '18px',
        lineHeight: 1.5,
        fontFamily: 'Poppins',
        '@media screen and (min-width: 768px)': {
          
        },
        '@media screen and (min-width: 1440px)': {
          
        },
        },
      // ARROW
      '& .css-1xc3v61-indicatorContainer': {
        display: 'none',
      },
      '& .css-1u9des2-indicatorSeparator': {
        display: 'none',
      }, 
      }
      switch (ofType) {
// RECIPE instructions measure SELECT
        case 'measure':
          return {
            ...provided,
            ...defaultStyles,
            width: '100%',
            height: '53px',
            marginLeft: 0,
            backgroundColor: '#f5f5f5',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            '@media screen and (min-width: 768px)': {
              maxHeight: '178px',
              height: '59px',
            },
            '@media screen and (min-width: 1440px)': {
          
            },
             '& .css-1xc3v61-indicatorContainer': {
               display: 'block',
               color: '#8BAA36',
               padding: '0 6px 0 0',
            },
            '& .css-1dimb5e-singleValue': {
               margin: 0,
            },
          };
        
  // RECIPE DESCRIPTION SELECTS: CATEGORY AND TIME
        case 'descInput':
          return {
            // ...provided,
            ...defaultStyles,
              display: 'flex',
              fontWeight: 400,
              border: "none",
              backgroundColor: "transparent",
            '@media screen and (min-width: 768px)': {

            },
            '@media screen and (min-width: 1440px)': {
          
            },
             '& .css-1xc3v61-indicatorContainer': {
               display: 'block',
               color: state.isFocused ? '#8BAA36' : '#8BAA36',
               padding: 0,
            },
            '& .css-1jqq78o-placeholder': {
                fontSize: "12px",
                color: "#000000",
                '@media screen and (min-width: 768px)': {
                  fontSize: "14px",
                },
                '@media screen and (min-width: 1440px)': {
                  
                },
              },
            '& .css-1dimb5e-singleValue': {
              fontSize: "12px",
              color: "#000000",
              '@media screen and (min-width: 768px)': {
                fontSize: "14px",
            },
            },
          };
        default:
          return { ...provided };
      }
    }, 
    valueContainer: (provided, state) => {
      switch(ofType) {
        case 'measure':
            return {
            ...provided,
            paddingRight: 0,
            paddingLeft: '4px',
            textOverflow: 'none',
          };
            default:
                return { ...provided };
          };
    },

    option: (provided, state) => {
      const defaultStyles = {
        minHeight: '18px',
        marginBottom: '6px',
        paddingLeft: '18px',
        fontSize: '12px',
        lineHeight: 1.5,
        fontFamily: 'Poppins',
        letterSpacing: '-0.02em',
        backgroundColor: state.isFocused ? '#ddd' : 'white',
        color: state.isFocused ? 'black' : 'gray',
        '@media screen and (min-width: 768px)': {
          minHeight: '21px',
          fontSize: '14px',
        },
      }
      switch (ofType) {
        case 'measure':
          return {
            // ...provided,
            ...defaultStyles,
          };
        default:
          return { ...provided, ...defaultStyles };
      }
    },

    menu:
      (provided) => {
    const defaultStyles = {
      backgroundColor: 'white',
      overflowY: 'hidden',
      boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
      borderRadius: '6px',
      maxHeight: '160px',
      '@media screen and (min-width: 768px)': {
        maxHeight: '178px',
      },
      '@media screen and (min-width: 1440px)': {

      },
  };
      switch (ofType) {
        case 'measure':
          return {
            ...provided,
            ...defaultStyles,
            position: 'absolute',
            width: '84px',
            right: 0,
            '@media screen and (min-width: 768px)': {
              width:'97px',
            },
          };
        default:
          return { ...provided, ...defaultStyles, };
      }
      }, 
// -------------SCROLLBAR ----------
    menuList: (provided) => {
       const defaultStyles = {...provided,
      '&::-webkit-scrollbar': {
        backgroundColor: 'white',
        width: '6px',
        height: '93px',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#E7E5E5',
        height: '93px',
        borderRadius: '12px',
         },
       }
      switch (ofType) {
        case 'measure':
          return {
            ...provided,
            ...defaultStyles,
            marging: '8px 4px 8px 0',
            '@media screen and (min-width: 768px)': {
              marging: '20px 37px',
            },
          };
        case 'descInput':
          return {
            ...provided,
            ...defaultStyles,
            paddingBottom: '130px',
            '@media screen and (min-width: 768px)': {
              paddingBottom: '120px',
            },
          };
        default:
          return { ...provided, ...defaultStyles, };
      }
    },
  };

  return (
    <>
      <Select
        options={options}
        styles={customStyles}
        {...props}
      />
    </>
  );
}

CustomSelect.propTypes = {
  ofType: PropTypes.string,
};
