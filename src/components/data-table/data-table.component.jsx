import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';

const DataTable = (props) => {
	return (
		<>
			<Table
				dataSource={props.data}
				columns={props.columns}
				rowKey={(record) => record.id}
				pagination={props.pagination}
				loading={props.loading}
				onChange={props.handleTableChange}
				size='small'
				rowSelection={props.rowSelection}
			/>
		</>
	);
};

export default DataTable;
