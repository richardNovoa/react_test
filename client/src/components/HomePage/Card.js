import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
	IconButton
} from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddIcon from '@mui/icons-material/Add';

const PodcastCard = ({ cover, podcast, author, description, time }) => {
	return (
		<Box mr={1}>
			<Card sx={{ width: 275 }}>
				<CardHeader
					avatar={
						<img src={cover} width='40' height='40' alt='podcast cover'></img>
					}
					title={podcast}
					subheader={author}
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant='contained' startIcon={<AddIcon />}>
						{time} min
					</Button>
					<IconButton>
						<PlaylistAddIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
};

PodcastCard.propTypes = {
	cover: PropTypes.string.isRequired,
	podcast: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	time: PropTypes.number.isRequired
};

export default PodcastCard;
