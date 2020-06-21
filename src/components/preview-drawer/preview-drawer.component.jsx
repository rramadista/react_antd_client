import React from 'react';
import { Drawer, Divider, Col, Row } from 'antd';

import DescriptionItem from '../description-item/description-item.component';

const PreviewDrawer = ({ onClose, visible, data }) => {
	return (
		<>
			<Drawer
				width={640}
				placement='right'
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<p
					className='site-description-item-profile-p'
					style={{ marginBottom: 24 }}
				>
					<strong>INFORMATION DETAILS</strong>
				</p>
				<p className='site-description-item-profile-p'>
					<strong>Position</strong>
				</p>
				<Row>
					<DescriptionItem
						title='Position Title'
						content={data.name}
					/>
				</Row>
				<Row>
					<DescriptionItem
						title='Business Unit'
						content={data.businessUnit}
					/>
				</Row>
				<Row>
					<DescriptionItem
						title='Directorate'
						content={data.directorate}
					/>
				</Row>
				<Row>
					<DescriptionItem title='Location' content={data.location} />
				</Row>
				<Row>
					<Col span={24}>
						<DescriptionItem
							title='Message'
							content='Make things as simple as possible but no simpler.'
						/>
					</Col>
				</Row>
				<Divider />
				<p className='site-description-item-profile-p'>Company</p>
				<Row>
					<Col span={12}>
						<DescriptionItem
							title='Position'
							content='Programmer'
						/>
					</Col>
					<Col span={12}>
						<DescriptionItem
							title='Responsibilities'
							content='Coding'
						/>
					</Col>
				</Row>
				<Row>
					<DescriptionItem title='Department' content='XTech' />
				</Row>
				<Row>
					<Col span={24}>
						<DescriptionItem
							title='Skills'
							content='C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.'
						/>
					</Col>
				</Row>
			</Drawer>
		</>
	);
};

export default PreviewDrawer;
