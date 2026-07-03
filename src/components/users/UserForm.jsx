import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../common/Input";
import Button from "../common/Button";

import {
  userSchema,
  defaultUserValues,
} from "../../schemas/user.schema";

const UserForm = ({
  defaultValues = defaultUserValues,
  onSubmit,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card space-y-6 p-6"
    >
      <Input
        label="First Name"
        {...register("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName?.message}
      />

      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Age"
        type="number"
        {...register("age")}
        error={errors.age?.message}
      />

      <Button
        type="submit"
        loading={isSubmitting}
      >
        Save User
      </Button>
    </form>
  );
};

export default UserForm;