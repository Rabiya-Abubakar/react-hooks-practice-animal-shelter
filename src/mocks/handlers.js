// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3001/api/pets', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        // Mock data
        { id: 1, name: 'Fluffy', type: 'cat', isAdopted: false },
        { id: 2, name: 'Buddy', type: 'dog', isAdopted: true },
        // Add more mock pets as needed
      ])
    );
  }),
];
