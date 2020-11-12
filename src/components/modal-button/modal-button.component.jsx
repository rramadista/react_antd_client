import React, { useState } from 'react';
import { Button, Modal, Form, message } from 'antd';
import { EditOutlined, PlusSquareOutlined } from '@ant-design/icons';
import AddEditForm from '../add-edit-form/add-edit-form.component';

const ModalButton = ({
	buttonLabel,
	record,
	updateDataItem,
	addItemToData,
}) => {
	const [form] = Form.useForm();
	const [visible, setVisible] = useState(false);

	const toggleModal = () => {
		setVisible(!visible);
	};

	let button = '';
	let title = '';

	if (buttonLabel === 'Add') {
		button = (
			<Button
				type='primary'
				icon={<PlusSquareOutlined />}
				onClick={toggleModal}
				style={{ marginBottom: 16 }}
			>
				{buttonLabel}
			</Button>
		);
		title = 'Create A New Collection';
	} else {
		button = (
			<Button icon={<EditOutlined />} onClick={toggleModal}>
				{buttonLabel}
			</Button>
		);
		title = 'Update Collection';
	}

	const onCreate = async (values) => {
		toggleModal();
		console.log(values);
		try {
			await fetch(`http://localhost:5000/org-group`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			})
				.then((res) => res.json())
				.then(() => addItemToData(values));
			message.success(`Success created ${values.id} record`);
		} catch (err) {
			message.error(`Error created ${values.id} record`);
		}
	};

	const onUpdate = async (values) => {
		toggleModal();
		console.log(values);
		try {
			await fetch(`http://localhost:5000/org-group/${values.id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			})
				.then((res) => res.json())
				.then(() => updateDataItem(values));
			message.success(`Success updated ${values.id} record`);
		} catch (err) {
			message.error(`Success updated ${values.id} record`);
		}
	};

	return (
		<>
			{button}
			<Modal
				visible={visible}
				title={title}
				cancelText='Cancel'
				okText='Submit'
				onCancel={toggleModal}
				onOk={() =>
					form
						.validateFields()
						.then((values) => {
							form.resetFields();
							if (buttonLabel === 'Add') {
								onCreate(values);
							} else {
								onUpdate(values);
								form.setFieldsValue(values);
							}
						})
						.catch((info) => {
							console.log('Validate Failed: ', info);
						})
				}
			>
				<AddEditForm
					form={form}
					record={record}
					buttonLabel={buttonLabel}
				/>
			</Modal>
		</>
	);
};

export default ModalButton;
