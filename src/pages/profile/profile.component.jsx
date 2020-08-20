import React from 'react';
import { Card, Row, Col } from 'antd';

const Profile = () => {
	// const { Meta } = Card;

	return (
		<>
			<Row gutter={[16, 16]} justify={'end'}>
				<Col span={8}>
					<Card size='small' title='Profile Photo'>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]} justify={'center'}>
				<Col span={8}>
					<Card size='small' title='User Data'>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Card size='small' title='User Group Data'>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Profile;
