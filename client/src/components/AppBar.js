import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';

const PodcastAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						color='inherit'
						component='div'
						sx={{ flexGrow: 1 }}>
						Podcasts
					</Typography>
					<IconButton size='large' aria-label='search' color='inherit'>
						<SearchIcon />
					</IconButton>
					<IconButton size='large' aria-label='search' color='inherit'>
						<AppsIcon />
					</IconButton>
					<Avatar
						size='large'
						alt='Richard Novoa'
						src='https://en.gravatar.com/userimage/185977904/465df6c6090fb26376ef476519984665.jpg'
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default PodcastAppBar;
