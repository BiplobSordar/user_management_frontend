import { useNavigate } from "react-router-dom";

import PageHeader from "../components/layout/PageHeader";
import UserForm from "../components/users/UserForm";

import useCreateUser from "../hooks/useCreateUser";

const CreateUser = () => {
  const navigate = useNavigate();

  const createMutation = useCreateUser();

  const handleSubmit = (data) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        navigate("/users");
      },
    });
  };

  return (
    <>
      <PageHeader
        title="Create User"
        description="Add a new user."
      />

      <UserForm
        onSubmit={handleSubmit}
        isSubmitting={createMutation.isPending}
      />
    </>
  );
};

export default CreateUser;