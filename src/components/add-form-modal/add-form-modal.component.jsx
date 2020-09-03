import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';

const AddFormModal = () => {
	const [form] = Form.useForm();

	const initValue = { id: '', code: '', name: '' };
	const [formValues, setFormValues] = useState(initValue);

	const [visible, setVisible] = useState(false);

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onCreate = (values) => {
		setVisible(false);
		console.log('Received values of form: ', values);
		fetch(`http://localhost:5000/org-group`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		}).then((res) => res.json());
		message.success('Success created record');
	};

	return (
		<>
			<Button
				type='primary'
				onClick={() => setVisible(true)}
				style={{ marginBottom: 16 }}
			>
				Add
			</Button>
			<Modal
				visible={visible}
				title='Create A New Collection'
				cancelText='Cancel'
				onCancel={() => setVisible(false)}
				okText='Create'
				onOk={() => {
					form.validateFields()
						.then((values) => {
							form.resetFields();
							onCreate(values);
						})
						.catch((info) => {
							console.log('Validate Failed: ', info);
						});
				}}
			>
				<Form form={form} layout='vertical'>
					<Form.Item name='id'>
						<Input
							placeholder='Org Group ID'
							style={{ width: 160 }}
							onChange={onChange}
							value={formValues.id}
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
					<Form.Item name='name'>
						<Input
							placeholder='Org Group Name'
							onChange={onChange}
							value={formValues.name}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default AddFormModal;
