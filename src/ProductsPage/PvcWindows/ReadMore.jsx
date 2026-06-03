import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	.content {
		max-height: ${({ $expanded, $width }) => ($expanded ? 'none' : `${$width}px`)};
		overflow: hidden;
		transition: 0.3s;
	}
`;

const ReadMoreComponent = ({ children, width }) => {
	const [showMore, setShowMore] = useState(false);

	return (
		<Wrapper $expanded={showMore} $width={width}>
			<div className="content">{children}</div>

			<button onClick={() => setShowMore(!showMore)}>
				{showMore ? 'Закрыть' : 'Читать далее'}
			</button>
		</Wrapper>
	);
};

export const ReadMore = styled(ReadMoreComponent)``;
