import React, { useState, useEffect, useContext } from 'react';
import {
	Button,
	Checkbox,
	Dropdown,
	Menu,
	message,
	Row,
	Col,
	Select,
	Space,
} from 'antd';

import DataTable from '../../components/data-table/data-table.component';
import DownloadButton from '../../components/download-button/download-button.component';
import UploadButton from '../../components/upload-button/upload-button.component';
import ModalButton from '../../components/modal-button/modal-button.component';
import DeleteSelectionButton from '../../components/delete-selection-button/delete-selection-button.component';
import WipeButton from '../../components/wipe-button/wipe-button.component';

import TableActionButton from '../../components/table-action-button/table-action-button.component';
import useSearchColumn from '../../utils/function/use-search.state';

import { DataTableContext } from '../../services/hooks/data-table/data-table.context';

const { Option } = Select;

const OrgGroupComplex = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const {
		loading,
		data,
		selectedRowKeys,
		pagination,
		addItemToData,
		addMultipleItemsToData,
		updateDataItem,
		deleteItemFromData,
		deleteMultipleItemsFromData,
		deleteAllItems,
		getData,
		getDataSuccess,
		getDataFailure,
		onSelectRowChange,
	} = useContext(DataTableContext);

	const [visibleMenu, setVisibleMenu] = useState(false);
	const [checkedColumns, setCheckedColumns] = useState([]);
	const [initialColumns, setInitialColumns] = useState([]);
	const [columns, setColumns] = useState([
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
	]);

	useEffect(() => {
		setInitialColumns(columns);
		fetchData({ pagination });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onVisibleMenuChange = (flag) => {
		setVisibleMenu(flag);
	};

	const onColumnChange = (e) => {
		let checkedItems = checkedColumns;
		if (e.target.checked) {
			checkedItems = checkedItems.filter((id) => {
				return id !== e.target.id;
			});
		} else if (!e.target.checked) {
			checkedItems.push(e.target.id);
		}

		let filteredColumns = initialColumns;
		filteredColumns = filteredColumns.filter((el) => {
			return !checkedItems.includes(el.dataIndex);
		});

		setColumns(filteredColumns);
		setCheckedColumns(checkedItems);
	};

	const handleTableChange = (pagination, filters, sorter) => {
		fetchData({
			sortField: sorter.field,
			sortOrder: sorter.order,
			pagination,
			...filters,
		});
	};

	const fetchData = async (params = {}) => {
		getData();
		try {
			await fetch(`http://localhost:5000/org-group`)
				.then((res) => res.json())
				.then((data) => getDataSuccess(data))
				.then(() => message.success(`Success fetch data`));
		} catch (err) {
			getDataFailure();
			message.error(`Fetching error or no data`);
		}
	};

	const rowSelection = { selectedRowKeys, onChange: onSelectRowChange };

	const onSelectOptionChange = (value) => {
		message.success(`Selected ${value}`);
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

	const dropdownMenu = (
		<Menu>
			{initialColumns
				.filter((column) => column.dataIndex)
				.map((column) => {
					return (
						<Menu.Item key={`${column.key}`}>
							<Checkbox
								id={`${column.dataIndex}`}
								onChange={onColumnChange}
								defaultChecked
							>
								{`${column.title}`}
							</Checkbox>
						</Menu.Item>
					);
				})}
		</Menu>
	);

	return (
		<>
			<Row>
				<Col span={16}>
					<Space>
						<DownloadButton data={data} filename='org-group' />
						<UploadButton
							addMultipleItemsToData={addMultipleItemsToData}
						/>
						<ModalButton
							buttonLabel='Add'
							addItemToData={addItemToData}
						/>
						<WipeButton deleteAllItems={deleteAllItems} />
						<DeleteSelectionButton
							selectedRowKeys={selectedRowKeys}
							deleteMultipleItemsFromData={
								deleteMultipleItemsFromData
							}
						/>
					</Space>
				</Col>
				<Col span={8}>
					<Space style={{ float: 'right' }}>
						<Dropdown
							overlay={dropdownMenu}
							onVisibleChange={onVisibleMenuChange}
							visible={visibleMenu}
						>
							<Button style={{ marginBottom: 16 }}>
								Show/Hide
							</Button>
						</Dropdown>
						<Select
							showSearch
							allowClear
							style={{ width: 120, marginBottom: 16 }}
							placeholder='Year'
							optionFilterProp='value'
							filterOption={(input, option) =>
								option.value
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
							onChange={onSelectOptionChange}
						>
							<Option value='2018'>2018</Option>
							<Option value='2019'>2019</Option>
							<Option value='2020'>2020</Option>
						</Select>
					</Space>
				</Col>
			</Row>
			<DataTable
				data={data}
				rowSelection={rowSelection}
				columns={columns}
				pagination={pagination}
				loading={loading}
				handleTableChange={handleTableChange}
			/>
		</>
	);
};

export default OrgGroupComplex;
