import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const Tile = ({ title, author, cover }) => {
	return (
		<Box mr={2} sx={{ width: 96 }}>
			<div className='tile'>
				<img src={cover} width='96' height='96' alt='podcast cover' />
				<Typography variant='body2'>{title}</Typography>
				<Typography variant='caption'>{author}</Typography>
			</div>
		</Box>
	);
};

Tile.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	src: PropTypes.string
};

export default Tile;
