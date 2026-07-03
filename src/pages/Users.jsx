import { useState } from "react";

import { Link } from "react-router-dom";

import Button from "../components/common/Button";
import Spinner from "../components/common/Spinner";
import EmptyState from "../components/common/EmptyState";

import PageHeader from "../components/layout/PageHeader";

import UserTable from "../components/users/UserTable";
import DeleteModal from "../components/users/DeleteModal";

import useUsers from "../hooks/useUsers";
import useDeleteUser from "../hooks/useDeleteUser";

const Users = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useUsers();

  const deleteMutation =
    useDeleteUser();

  const [selectedUser, setSelectedUser] =
    useState(null);

  if (isLoading) {
    return <Spinner centered />;
  }

  if (isError) {
    return (
      <EmptyState
        title="Failed to load users"
        description={error.message}
      />
    );
  }

  return (
    <>
      <PageHeader
        title="Users"
        description="Manage all registered users."
        action={
          <Link to="/users/new">
            <Button>
              Add User
            </Button>
          </Link>
        }
      />

      {users.length === 0 ? (
        <EmptyState
          title="No Users"
          description="Create your first user."
        />
      ) : (
        <UserTable
          users={users}
          onDelete={setSelectedUser}
        />
      )}

      <DeleteModal
        open={!!selectedUser}
        user={selectedUser}
        loading={
          deleteMutation.isPending
        }
        onClose={() =>
          setSelectedUser(null)
        }
        onConfirm={() => {
          deleteMutation.mutate(
            selectedUser._id,
            {
              onSuccess: () =>
                setSelectedUser(
                  null
                ),
            }
          );
        }}
      />
    </>
  );
};

export default Users;