import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--mainYellow);
	// border-color:${(props) => (props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
	color: var(--mainYellow);
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: var(--mainYellow);
		color: #333;
	}
	&:focus {
		outline: none;
	}
`;

export const ButtonBackTo = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--lightGray);
	color: var(--lightGray);
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: var(--lightGray);
		color: #f1f1f1;
	}
	&:focus {
		outline: none;
	}
`;
