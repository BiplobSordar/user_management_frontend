import PageHeader from "../components/layout/PageHeader";
import Spinner from "../components/common/Spinner";
import EmptyState from "../components/common/EmptyState";
import DashboardStats from "../components/dashboard/DashboardStats";
import QuickActions from "../components/dashboard/QuickActions";

import useUsers from "../hooks/useUsers";

const Dashboard = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useUsers();

  if (isLoading) {
    return <Spinner centered />;
  }

  if (isError) {
    return (
      <EmptyState
        title="Something went wrong"
        description={error.message}
      />
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Welcome to the User Management Dashboard."
      />

      <DashboardStats users={users} />

      <QuickActions />

      {users.length === 0 && (
        <EmptyState
          title="No Users Found"
          description="Create your first user to get started."
        />
      )}
    </div>
  );
};

export default Dashboard;