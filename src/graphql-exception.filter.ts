import { Catch, ExceptionFilter, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch(BadRequestException)
export class GqlBadRequestFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    // You can now return only the message or any other simplified error structure
    return new BadRequestException(exception.getResponse());
  }
}
