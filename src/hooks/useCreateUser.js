import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import QUERY_KEYS from "../constants/queryKeys";
import { createUser } from "../services/user.service";
import { getErrorMessage } from "../utils/errorHandler";

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,

    onSuccess: async (response) => {
      toast.success(response.message);

      // Refetch the users list
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.users,
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export default useCreateUser;