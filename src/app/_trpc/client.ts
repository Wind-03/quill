import { AppRouter } from '@/trpc';
import { createTRPCReact } from '@trpc/react-query';
import { z } from 'zod';

export const trpc = createTRPCReact<AppRouter>({});
