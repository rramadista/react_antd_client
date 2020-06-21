import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import PreviewDrawer from '../../components/preview-drawer/preview-drawer.component';

const { Column } = Table;

const dataPosTitle = [
	{
		key: '1',
		name: 'President Director',
		category: ['Executive'],
		businessUnit: 'Utama',
		directorate: 'Utama',
		locCategory: 'Head Office',
		location: 'KPNO',
	},
	{
		key: '2',
		name: 'Compliance & Human Capital Managing Director',
		category: ['Executive'],
		businessUnit: 'Compliance & Human Capital',
		directorate: 'Compliance & Human Capital',
		locCategory: 'Head Office',
		location: 'KPNO',
	},
	{
		key: '3',
		name: 'Human Capital Management Head',
		category: ['FTE'],
		businessUnit: 'Human Capital Management',
		directorate: 'Compliance & Human Capital',
		locCategory: 'Head Office',
		location: 'KPNO',
	},
	{
		key: '4',
		name: 'Organization & System Development Head',
		category: ['FTE'],
		businessUnit: 'Human Capital Management',
		directorate: 'Compliance & Human Capital',
		locCategory: 'Head Office',
		location: 'KPNO',
	},
	{
		key: '5',
		name: 'Organization & System Development Specialist',
		category: ['FTE', 'OS'],
		businessUnit: 'Human Capital Management',
		directorate: 'Compliance & Human Capital',
		locCategory: 'Head Office',
		location: 'KPNO',
	},
];

const PosTitleList = () => {
	const [visible, setVisible] = useState(false);
	const [data, setData] = useState([]);

	const showDrawer = (e) => {
		setVisible(true);
		setData(e);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<>
			<Table dataSource={dataPosTitle}>
				<Column
					title='Position Title'
					dataIndex='name'
					key='name'
					render={(text, item) => (
						<div
							onClick={() => showDrawer(item)}
							key={`a-${item.id}`}
							data-id={text}
						>
							{text}
						</div>
					)}
				/>
				<Column
					title='Category'
					dataIndex='category'
					key='category'
					render={(tags) => (
						<>
							{tags.map((tag) => {
								let color = '';
								if (tag === 'OS') {
									color = 'red';
								} else if (tag === 'FTE') {
									color = 'green';
								} else color = 'blue';
								return (
									<Tag color={color} key={tag}>
										{tag.toUpperCase()}
									</Tag>
								);
							})}
						</>
					)}
				/>
				<Column
					title='Business Unit'
					dataIndex='businessUnit'
					key='businessUnit'
				/>
				<Column
					title='Directorate'
					dataIndex='directorate'
					key='directorate'
				/>
				<Column title='Location' dataIndex='location' key='location' />
				<Column
					title='Action'
					dataIndex='action'
					key='action'
					render={() => (
						<Space>
							<Button icon={<EditOutlined />}>Edit</Button>
							<Button icon={<DeleteOutlined />} danger>
								Delete
							</Button>
						</Space>
					)}
				/>
			</Table>
			<PreviewDrawer onClose={onClose} visible={visible} data={data} />
		</>
	);
};

export default PosTitleList;
