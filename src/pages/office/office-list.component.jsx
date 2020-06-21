import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
	{
		title: 'Office Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Branch ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (tags) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<Space>
				<Button icon={<EditOutlined />}>Edit</Button>
				<Button icon={<DeleteOutlined />} danger>
					Delete
				</Button>
			</Space>
		),
	},
];

const data = [
	{
		key: '1',
		name: 'KC Jakarta Sudirman',
		id: 1,
		address: 'Jalan Jend. Sudirman Kav. 76-78',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'KC Jakarta Tendean',
		id: 74,
		address: 'Jalan Kapten Tendean Kav. 12-14A',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Kanwil Jakarta 1',
		id: 805,
		address: 'Jalan Cikini Raya No. 28A',
		tags: ['cool', 'teacher'],
	},
	{
		key: '4',
		name: 'KPNO',
		id: 888,
		address: 'Jalan Kapten Tendean Kav. 12-14A',
		tags: ['cool', 'teacher'],
	},
	{
		key: '4',
		name: 'KCP Jakarta Rasuna Said',
		id: 20,
		address: 'Jalan H. R. Rasuna Said Kav. No. 19A',
		tags: ['cool', 'teacher'],
	},
];

const OfficeList = () => (
	<>
		<Table columns={columns} dataSource={data} />
	</>
);

export default OfficeList;
