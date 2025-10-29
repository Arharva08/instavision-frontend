import { useState, useEffect } from 'react'
import {
  Layout,
  Button,
  Drawer,
  Form,
  Input,
  Row,
  Col,
  Typography,
  message,
  Table,
  Dropdown,
  Modal,
  Select,
  Tag,
  Space,
} from 'antd'
import { 
  User, 
  Mail, 
  Lock, 
  FileText, 
  Image, 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX, 
  Key,
  GraduationCap,
  Building,
  BookOpen,
  Hash
} from 'lucide-react'
import { registerUser, getToken } from '../api/authentication'
import { getAllUsers, updateUser, deleteUser, toggleUserStatus, resetUserPassword } from '../api/users'

const { Content } = Layout
const { Title } = Typography

const Registration = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  const showDrawer = () => setOpen(true)
  const onClose = () => setOpen(false)

  const fetchUsers = async () => {
    try {
      const token = getToken()
      if (!token) return message.error('You are not authorized.')

      const allUsers = await getAllUsers(token)
      // ✅ Filter out admins
      const filtered = allUsers.filter(
        (user) => user.role?.toLowerCase() !== 'admin'
      )
      setUsers(filtered)
    } catch (error) {
      console.error(error)
      message.error('Failed to fetch users.')
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const onFinish = async (values) => {
    setLoading(true)
    const token = getToken()

    if (!token) {
      message.error('You are not authorized. Please log in as admin.')
      return
    }

    try {
      const response = await registerUser(token, values)

      if (response.success) {
        message.success('Student registered successfully!')
        form.resetFields()
        setOpen(false)
        fetchUsers()
      } else {
        message.error(response.message || 'Registration failed.')
      }
    } catch (error) {
      console.error('Registration error:', error)
      message.error(error.message || 'Failed to register user.')
    } finally {
      setLoading(false)
    }
  }

  // Action handlers
  const handleEdit = (user) => {
    setEditingUser(user)
    editForm.setFieldsValue({
      full_name: user.full_name,
      email: user.email,
      college_university: user.college_university,
      course: user.course,
      batch_no: user.batch_no,
      reg_no: user.reg_no,
    })
    setEditOpen(true)
  }

  const handleDelete = (user) => {
    setUserToDelete(user)
    setDeleteModalVisible(true)
  }

  const confirmDelete = async () => {
    try {
      const token = getToken()
      await deleteUser(token, userToDelete.id)
      message.success('User deleted successfully!')
      setDeleteModalVisible(false)
      setUserToDelete(null)
      fetchUsers()
    } catch (error) {
      message.error(error.message || 'Failed to delete user')
    }
  }

  const handleStatusToggle = async (user) => {
    try {
      const token = getToken()
      const newStatus = user.status === 'active' ? 'inactive' : 'active'
      await toggleUserStatus(token, user.id, newStatus)
      message.success(`User ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully!`)
      fetchUsers()
    } catch (error) {
      message.error(error.message || 'Failed to update user status')
    }
  }

  const handlePasswordReset = async (user) => {
    try {
      const token = getToken()
      await resetUserPassword(token, user.id)
      message.success('Password reset successfully! New password sent to email.')
    } catch (error) {
      message.error(error.message || 'Failed to reset password')
    }
  }

  const handleEditSubmit = async (values) => {
    try {
      setLoading(true)
      const token = getToken()
      await updateUser(token, editingUser.id, values)
      message.success('User updated successfully!')
      setEditOpen(false)
      setEditingUser(null)
      editForm.resetFields()
      fetchUsers()
    } catch (error) {
      message.error(error.message || 'Failed to update user')
    } finally {
      setLoading(false)
    }
  }

  // Action menu items
  const getActionItems = (user) => [
    {
      key: 'edit',
      label: 'Edit',
      icon: <Edit size={16} />,
      onClick: () => handleEdit(user),
    },
    {
      key: 'status',
      label: user.status === 'active' ? 'Deactivate' : 'Activate',
      icon: user.status === 'active' ? <UserX size={16} /> : <UserCheck size={16} />,
      onClick: () => handleStatusToggle(user),
    },
    {
      key: 'reset-password',
      label: 'Reset Password',
      icon: <Key size={16} />,
      onClick: () => handlePasswordReset(user),
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 size={16} />,
      danger: true,
      onClick: () => handleDelete(user),
    },
  ]

  // Table columns
  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: 500 }}>{text}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>Reg: {record.reg_no || 'Pending'}</div>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'College/University',
      dataIndex: 'college_university',
      key: 'college_university',
      ellipsis: true,
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'Batch',
      dataIndex: 'batch_no',
      key: 'batch_no',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? 'Active' : 'Inactive'}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 80,
      render: (_, record) => (
        <Dropdown
          menu={{ items: getActionItems(record) }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button type="text" icon={<MoreVertical size={16} />} />
        </Dropdown>
      ),
    },
  ]

  // Filter users by search text
  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase()
    return (
      user.full_name?.toLowerCase().includes(searchText) ||
      user.email?.toLowerCase().includes(searchText) ||
      user.college_university?.toLowerCase().includes(searchText) ||
      user.course?.toLowerCase().includes(searchText) ||
      user.batch_no?.toLowerCase().includes(searchText) ||
      user.reg_no?.toLowerCase().includes(searchText)
    )
  })

  return (
    <Layout style={{ minHeight: '100vh', background: '#f9f9fb' }}>
      <Content
        style={{
          padding: '2rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title level={3} style={{ margin: 0 }}>
            Student Management
          </Title>
          <Button
            type="primary"
            icon={<Plus size={18} />}
            onClick={showDrawer}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              height: '45px',
              fontSize: '1rem',
              borderRadius: '10px',
            }}
          >
            Add Student
          </Button>
        </div>

        {/* Search Bar */}
        <Input
          prefix={<Search size={16} />}
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            maxWidth: 400,
            borderRadius: '8px',
            height: '40px',
          }}
        />

        {/* Table Section */}
        <div
          style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            flex: 1,
          }}
        >
          <Table
            columns={columns}
            dataSource={filteredUsers}
            rowKey={(record) => record.id || record.email}
            pagination={{ pageSize: 5, showSizeChanger: false }}
          />
        </div>

        {/* Drawer (Add Student Form) */}
        <Drawer
          title={<Title level={4}>Register New Student</Title>}
          width={480}
          onClose={onClose}
          open={open}
          placement="right"
          bodyStyle={{
            background: '#fff',
            paddingBottom: 80,
          }}
        >
          <Form form={form} layout="vertical" onFinish={onFinish} size="large">
            <Form.Item
              name="full_name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter full name' }]}
            >
              <Input prefix={<User />} placeholder="Enter full name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Enter valid email' },
              ]}
            >
              <Input prefix={<Mail />} placeholder="Enter email address" />
            </Form.Item>

            <Form.Item
              name="college_university"
              label="College/University"
              rules={[{ required: true, message: 'Please enter college/university' }]}
            >
              <Input prefix={<Building />} placeholder="Enter college/university name" />
            </Form.Item>

            <Form.Item
              name="course"
              label="Course"
              rules={[{ required: true, message: 'Please enter course' }]}
            >
              <Input prefix={<BookOpen />} placeholder="Enter course name" />
            </Form.Item>

            <Form.Item
              name="batch_no"
              label="Batch Number"
              rules={[{ required: true, message: 'Please enter batch number' }]}
            >
              <Input prefix={<Hash />} placeholder="Enter batch number" />
            </Form.Item>

            <Form.Item
              name="reg_no"
              label="Registration Number"
              rules={[{ required: true, message: 'Please enter registration number' }]}
            >
              <Input prefix={<Hash />} placeholder="Enter registration number" />
            </Form.Item>


            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                style={{
                  height: '50px',
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                }}
              >
                Register Student
              </Button>
            </Form.Item>
          </Form>
        </Drawer>

        {/* Edit User Drawer */}
        <Drawer
          title={<Title level={4}>Edit Student</Title>}
          width={480}
          onClose={() => {
            setEditOpen(false)
            setEditingUser(null)
            editForm.resetFields()
          }}
          open={editOpen}
          placement="right"
          bodyStyle={{
            background: '#fff',
            paddingBottom: 80,
          }}
        >
          <Form form={editForm} layout="vertical" onFinish={handleEditSubmit} size="large">
            <Form.Item
              name="full_name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter full name' }]}
            >
              <Input prefix={<User />} placeholder="Enter full name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Enter valid email' },
              ]}
            >
              <Input prefix={<Mail />} placeholder="Enter email address" />
            </Form.Item>

            <Form.Item
              name="college_university"
              label="College/University"
              rules={[{ required: true, message: 'Please enter college/university' }]}
            >
              <Input prefix={<Building />} placeholder="Enter college/university name" />
            </Form.Item>

            <Form.Item
              name="course"
              label="Course"
              rules={[{ required: true, message: 'Please enter course' }]}
            >
              <Input prefix={<BookOpen />} placeholder="Enter course name" />
            </Form.Item>

            <Form.Item
              name="batch_no"
              label="Batch Number"
              rules={[{ required: true, message: 'Please enter batch number' }]}
            >
              <Input prefix={<Hash />} placeholder="Enter batch number" />
            </Form.Item>

            <Form.Item
              name="reg_no"
              label="Registration Number"
              rules={[{ required: true, message: 'Please enter registration number' }]}
            >
              <Input prefix={<Hash />} placeholder="Enter registration number" />
            </Form.Item>


            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                style={{
                  height: '50px',
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                }}
              >
                Update Student
              </Button>
            </Form.Item>
          </Form>
        </Drawer>

        {/* Delete Confirmation Modal */}
        <Modal
          title="Delete Student"
          open={deleteModalVisible}
          onOk={confirmDelete}
          onCancel={() => {
            setDeleteModalVisible(false)
            setUserToDelete(null)
          }}
          okText="Delete"
          cancelText="Cancel"
          okButtonProps={{ danger: true }}
        >
          <p>
            Are you sure you want to delete <strong>{userToDelete?.full_name}</strong>? 
            This action cannot be undone.
          </p>
        </Modal>
      </Content>
    </Layout>
  )
}

export default Registration
