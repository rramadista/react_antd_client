import React, { useState } from 'react';
import { Form, Input } from 'antd';

const AddEditForm = ({ form, record, buttonLabel }) => {
	const [formValues, setFormValues] = useState({});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<Form form={form} initialValues={record} layout='vertical'>
			<Form.Item
				name='id'
				rules={[{ required: true, message: 'Please input ID!' }]}
			>
				<Input
					placeholder='Org Group ID'
					style={{ width: 160 }}
					onChange={onChange}
					value={formValues.id}
					disabled={buttonLabel === 'Add' ? false : true}
				/>
			</Form.Item>
			<Form.Item name='code'>
				<Input
					placeholder='Org Group Code'
					style={{ width: 160 }}
					onChange={onChange}
					value={formValues.code}
				/>
			</Form.Item>
			<Form.Item
				name='name'
				rules={[
					{ required: true, message: 'Please input required Name!' },
				]}
			>
				<Input
					placeholder='Org Group Name'
					onChange={onChange}
					value={formValues.name}
				/>
			</Form.Item>
		</Form>
	);
};

export default AddEditForm;
