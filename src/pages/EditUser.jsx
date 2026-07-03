import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../components/common/Spinner";
import EmptyState from "../components/common/EmptyState";

import PageHeader from "../components/layout/PageHeader";
import UserForm from "../components/users/UserForm";

import useUser from "../hooks/useUser";
import useUpdateUser from "../hooks/useUpdateUser";

const EditUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useUser(id);

  const updateMutation = useUpdateUser();

  if (isLoading) {
    return <Spinner centered />;
  }

  if (isError) {
    return (
      <EmptyState
        title="Failed to load user"
        description={error.message}
      />
    );
  }

  const handleSubmit = (data) => {
    updateMutation.mutate(
      {
        id,
        payload: data,
      },
      {
        onSuccess: () => {
          navigate("/users");
        },
      }
    );
  };

  return (
    <>
      <PageHeader
        title="Edit User"
        description="Update user information."
      />

      <UserForm
        defaultValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          age: user.age,
        }}
        onSubmit={handleSubmit}
        isSubmitting={updateMutation.isPending}
      />
    </>
  );
};

export default EditUser;