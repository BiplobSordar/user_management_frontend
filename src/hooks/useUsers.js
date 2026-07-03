import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from "../constants/queryKeys";
import { getUsers } from "../services/user.service";

const useUsers = () => {
  return useQuery({
    queryKey: QUERY_KEYS.users,
    queryFn: getUsers,

    // Cache only the array of users
    select: (response) => response.data,

    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useUsers;