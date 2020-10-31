import React, { useState, useEffect } from 'react';
import { Table, message, Dropdown, Button, Menu, Checkbox } from 'antd';
import TableActionButton from '../table-action-button/table-action-button.component';
import useSearchColumn from '../../utils/function/use-search.state';

const DataTable = ({
	data,
	setData,
	updateDataItem,
	deleteItemFromData,
	rowSelection,
}) => {
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		showTotal: (total, range) =>
			`${range[0]}-${range[1]} of ${total} items`,
		hideOnSinglePage: true, // hide pagination when single page or no data
	});

	const { getColumnSearchProps } = useSearchColumn();

	// const [visibleMenu, setVisibleMenu] = useState(false);
	// const [checkedColumns, setCheckedColumns] = useState([]);
	// const [initialColumns, setInitialColumns] = useState([]);
	// const [columns, setColumns] = useState([
	// 	{
	// 		title: 'Org Group ID',
	// 		dataIndex: 'id',
	// 		key: 'id',
	// 		...getColumnSearchProps('id'),
	// 		sorter: (a, b) => a.id.localeCompare(b.id),
	// 		defaultSortOrder: 'ascend',
	// 		sortDirections: ['descend', 'ascend', 'descend'],
	// 		width: 150,
	// 	},
	// 	{
	// 		title: 'Org Group Code',
	// 		dataIndex: 'code',
	// 		key: 'code',
	// 		...getColumnSearchProps('code'),
	// 		sorter: (a, b) => a.code.localeCompare(b.code),
	// 		sortDirections: ['ascend', 'descend'],
	// 		width: 170,
	// 	},
	// 	{
	// 		title: 'Organization Group Name',
	// 		dataIndex: 'name',
	// 		key: 'name',
	// 		...getColumnSearchProps('name'),
	// 		sorter: (a, b) => a.name.localeCompare(b.name),
	// 		sortDirections: ['ascend', 'descend'],
	// 		width: 400,
	// 	},
	// 	{
	// 		title: 'Action',
	// 		key: 'action',
	// 		render: (text, record) => (
	// 			<TableActionButton
	// 				onDeleteConfirm={() => onDeleteConfirm(record.id)}
	// 				updateDataItem={updateDataItem}
	// 				record={record}
	// 			/>
	// 		),
	// 	},
	// ]);

	// const onVisibleMenuChange = (flag) => {
	// 	setVisibleMenu(flag);
	// };

	// const onColumnChange = (e) => {
	// 	let checkedItems = checkedColumns;
	// 	if (e.target.checked) {
	// 		checkedItems = checkedItems.filter((id) => {
	// 			return id !== e.target.id;
	// 		});
	// 	} else if (!e.target.checked) {
	// 		checkedItems.push(e.target.id);
	// 	}

	// 	let filteredColumns = initialColumns;
	// 	filteredColumns = filteredColumns.filter((el) => {
	// 		return !checkedItems.includes(el.dataIndex);
	// 	});

	// 	setColumns(filteredColumns);
	// 	setCheckedColumns(checkedItems);
	// };

	useEffect(() => {
		// setInitialColumns(columns);
		fetchData({ pagination });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleTableChange = (pagination, filters, sorter) => {
		fetchData({
			sortField: sorter.field,
			sortOrder: sorter.order,
			pagination,
			...filters,
		});
	};

	// Get Data
	const fetchData = (params = {}) => {
		setLoading(true);
		fetch(`http://localhost:5000/org-group`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				if (data.results === undefined) {
					return null;
				} else {
					setData(data.results);
				}
				setPagination({
					...params.pagination,
					total: data.total,
				});
			})
			.catch((err) => console.log('Fetching error: ', err));
	};

	const onDeleteConfirm = (id) => {
		console.log(id);
		fetch(`http://localhost:5000/org-group/${id}`, {
			method: 'DELETE',
		})
			.then(() => deleteItemFromData(id))
			.catch((err) => console.log(err));
		message.success(`Success deleted ${id} record`);
	};

	// Use Get Columns
	// const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'Org Group ID',
			dataIndex: 'id',
			key: 'id',
			...getColumnSearchProps('id'),
			sorter: (a, b) => a.id.localeCompare(b.id),
			defaultSortOrder: 'ascend',
			sortDirections: ['descend', 'ascend', 'descend'],
			width: 150,
		},
		{
			title: 'Org Group Code',
			dataIndex: 'code',
			key: 'code',
			...getColumnSearchProps('code'),
			sorter: (a, b) => a.code.localeCompare(b.code),
			sortDirections: ['ascend', 'descend'],
			width: 170,
		},
		{
			title: 'Organization Group Name',
			dataIndex: 'name',
			key: 'name',
			...getColumnSearchProps('name'),
			sorter: (a, b) => a.name.localeCompare(b.name),
			sortDirections: ['ascend', 'descend'],
			width: 400,
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<TableActionButton
					onDeleteConfirm={() => onDeleteConfirm(record.id)}
					updateDataItem={updateDataItem}
					record={record}
				/>
			),
		},
	];

	// const dropdownMenu = (
	// 	<Menu>
	// 		{initialColumns
	// 			.filter((column) => column.dataIndex)
	// 			.map((column) => {
	// 				return (
	// 					<Menu.Item key={`${column.key}`}>
	// 						<Checkbox
	// 							id={`${column.dataIndex}`}
	// 							onChange={onColumnChange}
	// 							defaultChecked
	// 						>
	// 							{`${column.title}`}
	// 						</Checkbox>
	// 					</Menu.Item>
	// 				);
	// 			})}
	// 	</Menu>
	// );

	return (
		<>
			<Table
				dataSource={data}
				columns={columns}
				rowKey={(record) => record.id}
				pagination={pagination}
				loading={loading}
				onChange={handleTableChange}
				size='small'
				rowSelection={rowSelection}
			/>
			{/* <Dropdown
			overlay={dropdownMenu}
			onVisibleChange={onVisibleMenuChange}
			visible={visibleMenu}
			>
				<Button style={{ marginBottom: 16 }}>Show/Hide</Button>
			</Dropdown> */}
		</>
	);
};

export default DataTable;
