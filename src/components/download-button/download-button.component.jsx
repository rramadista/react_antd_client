import React, { useContext } from 'react';
import { Button } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';

import { DataTableContext } from '../../services/hooks/data-table/data-table.context';

const DownloadButton = ({ filename }) => {
	const { data } = useContext(DataTableContext);
	return (
		<Button
			icon={<FileExcelOutlined />}
			style={{ marginBottom: 16, color: 'green' }}
		>
			<CSVLink data={data} filename={`${filename}.csv`}>
				Download
			</CSVLink>
		</Button>
	);
};

export default DownloadButton;
