import React, { useState } from 'react';
import { Table, Typography, Tag, Space, Button, Input } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
	SearchOutlined,
} from '@ant-design/icons';

// import PreviewDrawer from '../../components/preview-drawer/preview-drawer.component';
import useFetchTable from '../../utils/function/use-fetch.effect';

const { Column } = Table;
const { Text } = Typography;

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

	const [, setSearchText] = useState('');
	const [, setSearchedColumn] = useState('');

	const { data, loading, pagination, handleTableChange } = useFetchTable(
		`http://localhost:5000/pos-title`
	);

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() =>
						handleSearch(selectedKeys, confirm, dataIndex)
					}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Space>
					<Button
						type='primary'
						onClick={() =>
							handleSearch(selectedKeys, confirm, dataIndex)
						}
						icon={<SearchOutlined />}
					>
						Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)}
						size='small'
						style={{ width: 90 }}
					>
						Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{ color: filtered ? '#1890ff' : undefined }}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes(value.toLowerCase()),
	});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText('');
	};

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
				summary={(pageData) => {
					let totalBudget = 0;
					let totalFTE = 0;
					let totalOS = 0;
					let totalCurrent = 0;

					pageData.forEach(
						({
							budget_total,
							current_fte,
							current_os,
							current_total,
						}) => {
							totalBudget += budget_total;
							totalFTE += current_fte;
							totalOS += current_os;
							totalCurrent += current_total;
						}
					);

					return (
						<>
							<Table.Summary.Row align='center'>
								<Table.Summary.Cell colSpan={8} />
								<Table.Summary.Cell>
									<Text strong>{totalBudget}</Text>
								</Table.Summary.Cell>
								<Table.Summary.Cell>
									<Text strong>{totalFTE}</Text>
								</Table.Summary.Cell>
								<Table.Summary.Cell>
									<Text strong>{totalOS}</Text>
								</Table.Summary.Cell>
								<Table.Summary.Cell>
									<Text strong>{totalCurrent}</Text>
								</Table.Summary.Cell>
								<Table.Summary.Cell colSpan={2} />
							</Table.Summary.Row>
						</>
					);
				}}
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
					{...getColumnSearchProps('title')}
				/>
				<Column
					title='Layer'
					dataIndex='layer'
					key='layer'
					sorter={(a, b) => a.layer - b.layer}
				/>
				<Column
					title='Category'
					dataIndex='category'
					key='category'
					render={(tag) => {
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
					}}
				/>
				<Column
					title=''
					dataIndex='bu_code'
					key='bu_code'
					{...getColumnSearchProps('bu_code')}
				/>
				<Column
					title='Business Unit'
					dataIndex='business_unit'
					key='business_unit'
					{...getColumnSearchProps('business_unit')}
				/>
				<Column
					title=''
					dataIndex='dir_code'
					key='dir_code'
					{...getColumnSearchProps('dir_code')}
				/>
				<Column
					title='Directorate'
					dataIndex='directorate'
					key='directorate'
					{...getColumnSearchProps('directorate')}
				/>
				<Column title='Location' dataIndex='location' key='location' />
				<Column
					title='Budget Total'
					dataIndex='budget_total'
					key='budget_total'
					align='center'
				/>
				<Column
					title='Current FTE'
					dataIndex='current_fte'
					key='current_fte'
					align='center'
				/>
				<Column
					title='Current OS'
					dataIndex='current_os'
					key='current_os'
					align='center'
				/>
				<Column
					title='Current Total'
					dataIndex='current_total'
					key='current_total'
					align='center'
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
