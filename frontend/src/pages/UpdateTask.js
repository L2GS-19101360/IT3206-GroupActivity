import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default function UpdateTask({ taskId, isOpen, onClose }) {
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [oldTitle, setOldTitle] = useState('');
    const [oldDesc, setOldDesc] = useState('');
    
    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/tasks/${taskId}`);
            const oldData = response.data; 
            setOldTitle(oldData.title);
            setOldDesc(oldData.description);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/api/tasks/${taskId}`, {
                title: updatedTitle,
                description: updatedDescription
            });
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" defaultValue={oldTitle} value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={4} defaultValue={oldDesc} value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={handleUpdate}>Update</Button>
            </Modal.Footer>
        </Modal>
    );
}
