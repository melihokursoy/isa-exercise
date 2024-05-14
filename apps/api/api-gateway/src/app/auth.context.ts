import { verify, decode } from 'jsonwebtoken';

export const authContext = async ({ req, context }) => {
  if (req?.headers?.authorization) {
    try {
      const [type, token] = req?.headers?.authorization?.split(' ') ?? [];
      //type === 'Bearer' ? token : undefined
      const decoded = token ? verify(token, '123') : undefined;
      return { ...context, auth: decoded };
    } catch (error) {
      return { ...context, auth: undefined }
    }
  }
};

