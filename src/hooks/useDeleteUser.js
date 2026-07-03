import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import QUERY_KEYS from "../constants/queryKeys";
import { deleteUser } from "../services/user.service";
import { getErrorMessage } from "../utils/errorHandler";

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    onSuccess: async (_, deletedId) => {
      toast.success("User deleted successfully.");

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.users,
        }),

        queryClient.removeQueries({
          queryKey: QUERY_KEYS.user(deletedId),
        }),
      ]);
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export default useDeleteUser;