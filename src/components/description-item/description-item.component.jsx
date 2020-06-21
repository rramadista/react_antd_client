import React from 'react';
import './description-item.styles.css';

const DescriptionItem = ({ title, content }) => (
	<div className='site-description-item-profile-wrapper'>
		<p className='site-description-item-profile-p-label'>{title}:</p>
		{content}
	</div>
);

export default DescriptionItem;
