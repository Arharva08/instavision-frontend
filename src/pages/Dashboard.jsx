import { Typography } from 'antd'
const { Title, Text } = Typography

export default function Dashboard() {
  return (
    <>
      <Title level={3}>Welcome to the Dashboard</Title>
      <Text>Here you can see stats and recent activity.</Text>
    </>
  )
}
