import { useQueryClient } from '@tanstack/react-query';
import { GetAuthUserQuery } from '../gql/generated/graphql';
import { USER_CACHE_KEY } from '../constant';

const useUserQuery = () => {
  const cache = useQueryClient();
  return cache.getQueryData<GetAuthUserQuery>(USER_CACHE_KEY)?.getAuthUser;
};

export default useUserQuery;
