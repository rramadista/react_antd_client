import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import PreviewDrawer from '../../components/preview-drawer/preview-drawer.component';
import useFetchTable from '../../utils/function/use-fetch.effect';

const { Column } = Table;

// const dataPosTitle = [
// 	{
// 		key: '1',
// 		name: 'President Director',
// 		category: ['Executive'],
// 		businessUnit: 'Utama',
// 		directorate: 'Utama',
// 		locCategory: 'Head Office',
// 		location: 'KPNO',
// 	},
// 	{
// 		key: '2',
// 		name: 'Compliance & Human Capital Managing Director',
// 		category: ['Executive'],
// 		businessUnit: 'Compliance & Human Capital',
// 		directorate: 'Compliance & Human Capital',
// 		locCategory: 'Head Office',
// 		location: 'KPNO',
// 	},
// 	{
// 		key: '3',
// 		name: 'Human Capital Management Head',
// 		category: ['FTE'],
// 		businessUnit: 'Human Capital Management',
// 		directorate: 'Compliance & Human Capital',
// 		locCategory: 'Head Office',
// 		location: 'KPNO',
// 	},
// 	{
// 		key: '4',
// 		name: 'Organization & System Development Head',
// 		category: ['FTE'],
// 		businessUnit: 'Human Capital Management',
// 		directorate: 'Compliance & Human Capital',
// 		locCategory: 'Head Office',
// 		location: 'KPNO',
// 	},
// 	{
// 		key: '5',
// 		name: 'Organization & System Development Specialist',
// 		category: ['FTE', 'OS'],
// 		businessUnit: 'Human Capital Management',
// 		directorate: 'Compliance & Human Capital',
// 		locCategory: 'Head Office',
// 		location: 'KPNO',
// 	},
// ];

const PosTitleList = () => {
	// const [visible, setVisible] = useState(false);
	// const [data, setData] = useState([]);

	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/pos_title`
	);

	// const showDrawer = (e) => {
	// 	setVisible(true);
	// 	setData(e);
	// };

	// const onClose = () => {
	// 	setVisible(false);
	// };

	return (
		<>
			<Table
				dataSource={data}
				rowKey={(record) => record.id}
				pagination={pagination}
				loading={loading}
				onChange={handleTableChange}
				size='small'
			>
				<Column
					title='Position Title'
					dataIndex='title'
					key='title'
					render={(text, item) => (
						<div
							// onClick={() => showDrawer(item)}
							key={`a-${item.id}`}
							data-id={text}
						>
							{text}
						</div>
					)}
				/>
				{/* <Column
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
				/> */}
				<Column
					title='Business Unit'
					dataIndex='business_unit'
					key='business_unit'
				/>
				<Column
					title='Directorate'
					dataIndex='directorate'
					key='directorate'
				/>
				<Column title='Location' dataIndex='location' key='location' />
				<Column
					title='Budget Total'
					dataIndex='budget_total'
					key='budget_total'
				/>
				<Column
					title='Current FTE'
					dataIndex='current_fte'
					key='current_fte'
				/>
				<Column
					title='Current OS'
					dataIndex='current_os'
					key='current_os'
				/>
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
			{/* <PreviewDrawer onClose={onClose} visible={visible} data={data} /> */}
		</>
	);
};

export default PosTitleList;
