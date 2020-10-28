import React, { useState } from 'react';
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

const { Option } = Select;

const OrgGroupPage = () => {
	const [data, setData] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [visibleMenu, setVisibleMenu] = useState(false);

	const onVisibleMenuChange = (flag) => {
		setVisibleMenu(flag);
	};

	const addItemToData = (item) => {
		setData([...data, item]);
	};

	const addMultipleItemsToData = (items) => {
		setData(data.concat(items));
	};

	const updateDataItem = (item) => {
		const itemIndex = data.findIndex((record) => record.id === item.id);
		const updatedData = [
			...data.slice(0, itemIndex),
			item,
			...data.slice(itemIndex + 1),
		];
		setData(updatedData);
	};

	const deleteItemFromData = (id) => {
		const updatedData = data.filter((record) => record.id !== id);
		setData(updatedData);
	};

	const deleteMultipleItemsFromData = (ids) => {
		let updatedData = [...data];
		ids.forEach((id) => {
			updatedData = updatedData.filter((record) => record.id !== id);
		});
		setData(updatedData);
		setSelectedRowKeys([]);
	};

	const deleteAllItems = () => {
		let updatedData = [];
		setData(updatedData);
		setSelectedRowKeys([]);
	};

	const onSelectRowChange = (selectedRowKeys) => {
		console.log(`selectedRowKeys changed: `, selectedRowKeys);
		setSelectedRowKeys(selectedRowKeys);
	};

	const rowSelection = { selectedRowKeys, onChange: onSelectRowChange };

	const dropdownMenu = (
		<Menu>
			<Menu.Item key='1'>
				<Checkbox id='code' onChange={null} defaultChecked>
					Code
				</Checkbox>
			</Menu.Item>
			<Menu.Item key='2'>
				<Checkbox id='name' onChange={null} defaultChecked>
					Name
				</Checkbox>
			</Menu.Item>
		</Menu>
	);

	const onSelectOptionChange = (value) => {
		message.success(`Selected ${value}`);
	};

	return (
		<>
			<Row>
				<Col span={12}>
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
							setSelectedRowKeys={setSelectedRowKeys}
							deleteMultipleItemsFromData={
								deleteMultipleItemsFromData
							}
						/>
					</Space>
				</Col>
				<Col span={12}>
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
				setData={setData}
				updateDataItem={updateDataItem}
				deleteItemFromData={deleteItemFromData}
				rowSelection={rowSelection}
			/>
		</>
	);
};

export default OrgGroupPage;
