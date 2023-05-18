import { Box, Typography } from '@mui/material';
import React from 'react';
import PodcastCard from './Card';
import Tile from './Tile';

const ScrollableCarousel = ({ section, type, data }) => {
	return (
		<Box mb={2}>
			<Typography variant='subtitle1' mb={2}>
				{section}
			</Typography>
			<Box sx={{ display: 'flex' }}>
				{type === 'card' &&
					data.map((card) => (
						<PodcastCard
							key={card.id}
							cover={card.cover}
							podcast={card.podcast}
							author={card.author}
							description={card.description}
							time={card.time}
						/>
					))}
				{type === 'tile' &&
					data.map((tile) => (
						<Tile
							key={tile.id}
							title={tile.title}
							cover={tile.cover}
							author={tile.author}
						/>
					))}
			</Box>
		</Box>
	);
};

export default ScrollableCarousel;
