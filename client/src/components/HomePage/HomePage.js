import React from 'react';
import ScrollableCarousel from './ScrollableCarousel';
import { Box, Typography } from '@mui/material';
import { List1, List2, List3, CardList } from '../../data/podcasts';

function HomePage() {
	return (
		<Box sx={{ ml: 2, mt: 2 }}>
			<ScrollableCarousel
				section='Your Subscriptions'
				type='tile'
				data={List1}
			/>
			<ScrollableCarousel
				section='Popular & Trending'
				type='card'
				data={CardList}
			/>
			<ScrollableCarousel
				section='Popular & Trending'
				type='tile'
				data={List2}
			/>

			<ScrollableCarousel
				section='Top podcasts in Society & Culture'
				type='tile'
				data={List3}
			/>
		</Box>
	);
}

export default HomePage;
