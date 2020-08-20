import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './custom-node.styles.css';

const propTypes = {
	nodeData: PropTypes.object.isRequired,
};

const CustomNode = ({ nodeData }) => {
	return (
		<>
			<Card className='position' size='small' title={nodeData.title} />
		</>
	);
};

CustomNode.propTypes = propTypes;

export default CustomNode;
