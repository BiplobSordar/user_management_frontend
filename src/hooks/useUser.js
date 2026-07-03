import { useQuery } from "@tanstack/react-query";

import QUERY_KEYS from "../constants/queryKeys";
import { getUser } from "../services/user.service";

const useUser = (id) => {
  return useQuery({
    queryKey: QUERY_KEYS.user(id),
    queryFn: () => getUser(id),

    enabled: !!id,

    select: (response) => response.data,
  });
};

export default useUser;