import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import QUERY_KEYS from "../constants/queryKeys";
import { updateUser } from "../services/user.service";
import { getErrorMessage } from "../utils/errorHandler";

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) =>
      updateUser(id, payload),

    onSuccess: async (_, variables) => {
      toast.success("User updated successfully.");

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.users,
        }),

        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.user(variables.id),
        }),
      ]);
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export default useUpdateUser;