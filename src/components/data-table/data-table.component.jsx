import React, { useContext } from 'react';
import { Table } from 'antd';

import { DataTableContext } from '../../services/hooks/data-table/data-table.context';

const DataTable = (props) => {
	const {
		data,
		loading,
		pagination,
		selectedRowKeys,
		onSelectRowChange,
	} = useContext(DataTableContext);

	const rowSelection = { selectedRowKeys, onChange: onSelectRowChange };

	return (
		<>
			<Table
				dataSource={data}
				columns={props.columns}
				rowKey={(record) => record.id}
				pagination={pagination}
				loading={loading}
				onChange={props.handleTableChange}
				size='small'
				rowSelection={rowSelection}
			/>
		</>
	);
};

export default DataTable;
