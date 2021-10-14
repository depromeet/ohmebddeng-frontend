import { rest } from 'msw';

let count = 1;

export const handlers = [
  rest.get('/test', (req, res, ctx) => {
    console.log('test request!!');

    return res(ctx.json({ message: 'Hello World!' }));
  }),

  rest.post('/level', (req, res, ctx) => {
    count++;
    return res(ctx.json({ message: count }));
  }),
];
