import { useEffect } from 'react';

import mutationService from '../../../../services/mutation.service';

const useVerifyReset = (onSuccess: () => void) => {
  useEffect(() => {
    window.onbeforeunload = () => {
      return 'If you leave the page, the verification code will be reset. Are you sure?';
    };
  }, []);

  return mutationService.verifyReset(onSuccess);
};

export default useVerifyReset;
