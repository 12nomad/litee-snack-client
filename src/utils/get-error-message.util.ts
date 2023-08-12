import { GraphQLError } from 'graphql';

interface IResponse {
  statusCode: number;
  message: string;
}

const getErrorMessage = (errors: GraphQLError[] | undefined): IResponse => {
  if (!errors) {
    return { statusCode: 500, message: 'Internal server error' };
  }

  // NestJS Service Thrown Error
  const serviceResponse = errors[0]['extensions']['response'] as IResponse;

  if (!serviceResponse)
    return {
      message: errors[0]['extensions']['code'] as string,
      statusCode: 400,
    }; // NestJS DTO Error

  return serviceResponse;
};

export default getErrorMessage;
