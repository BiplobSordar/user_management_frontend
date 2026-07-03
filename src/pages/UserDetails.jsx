import { Link, useParams } from "react-router-dom";

import Button from "../components/common/Button";
import EmptyState from "../components/common/EmptyState";
import Spinner from "../components/common/Spinner";

import PageHeader from "../components/layout/PageHeader";

import UserCard from "../components/users/UserCard";

import useUser from "../hooks/useUser";

const UserDetails = () => {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useUser(id);

  if (isLoading) {
    return <Spinner centered />;
  }

  if (isError) {
    return (
      <EmptyState
        title="User Not Found"
        description={error.message}
      />
    );
  }

  return (
    <>
      <PageHeader
        title="User Details"
        description="View complete information about this user."
        action={
          <Link to="/users">
            <Button variant="secondary">
              Back to Users
            </Button>
          </Link>
        }
      />

      <UserCard user={user} />
    </>
  );
};

export default UserDetails;