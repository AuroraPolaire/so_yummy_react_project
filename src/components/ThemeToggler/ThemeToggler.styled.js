import styled from 'styled-components';

export const ThemeTogglerStyled = styled.div`
  display: inline-block;
  padding: 0;
  cursor: pointer;

.tgl {
	display: none;
  
	// add default box-sizing for this scope
	&,
  &:after,
  &:before,
	& *,
  & *:after,
  & *:before,
	& + .tgl-btn {
		box-sizing: border-box;
		&::selection {
			background: none;
		}
	}
  
	+ .tgl-btn {
		outline: 0;
		display: block;
		width: 61px;
		height: 27px;
		position: relative;
		cursor: pointer;
    user-select: none;
		&:after,
    &:before {
			position: relative;
			display: block;
			content: "";
			width: 21px;
			height: 21px;
		}
    
		&:after {
			left: 0;
		}
    
		&:before {
			display: none;
		}
	}
  
	&:checked + .tgl-btn:after {
		left: 60%;
	}
}

  .tgl-light {
	+ .tgl-btn {
		background: var(--switches-bg);
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
		border-radius: 50px;
		padding: 3px;
		transition: all .4s ease;
		&:after {
			border-radius: 50%;
			background: #fff;
			transition: all .2s ease;
		}
	}
  
	&:checked + .tgl-btn {
		background: var(--accent-color-green);
	}
}
`;
