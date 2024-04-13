import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Button, Row, Col, Radio } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddMemberForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('URL_DE_VOTRE_API', values);

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }

      console.log('Nouveau membre ajouté avec succès');
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: '600px', margin: 'auto' }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="siPersonnel"
            label="Si personnel"
            rules={[{ required: true, message: 'Veuillez choisir si le membre est personnel' }]}
          >
            <Radio.Group>
              <Radio value={true}>Oui</Radio>
              <Radio value={false}>Non</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="langue"
            label="Langue"
            rules={[{ required: true, message: 'Veuillez choisir la langue' }]}
          >
            <Radio.Group>
              <Radio value="fr">Français</Radio>
              <Radio value="nl">Néerlandais</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="nom"
            label="Nom"
            rules={[{ required: true, message: 'Veuillez entrer le nom' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="prenom"
            label="Prénom"
            rules={[{ required: true, message: 'Veuillez entrer le prénom' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="telephone"
            label="Téléphone"
            rules={[{ required: true, message: 'Veuillez entrer le numéro de téléphone' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Veuillez entrer l\'adresse email' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="dateEntree"
            label="Date d'entrée"
            rules={[{ required: true, message: 'Veuillez choisir la date d\'entrée' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="grade"
            label="Grade"
            rules={[{ required: true, message: 'Veuillez choisir le grade' }]}
          >
            <Select style={{ width: '100%' }}>
              <Option value="grade1">Grade 1</Option>
              <Option value="grade2">Grade 2</Option>
              <Option value="grade3">Grade 3</Option>
              {/* Ajouter les options dynamiquement à partir de l'API */}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="adresse"
        label="Adresse"
        rules={[{ required: true, message: 'Veuillez choisir l\'adresse' }]}
      >
        <Select style={{ width: '100%' }}>
          <Option value="adresse1">Adresse 1</Option>
          <Option value="adresse2">Adresse 2</Option>
          <Option value="adresse3">Adresse 3</Option>
          {/* Ajouter les options dynamiquement à partir de l'API */}
        </Select>
      </Form.Item>
      <Form.Item style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Valider
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMemberForm;
