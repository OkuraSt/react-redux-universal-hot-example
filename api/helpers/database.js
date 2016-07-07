import mongoose from 'mongoose';

export { User } from '../database';

export function initialize(config) {
  mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`,
    err => (err ? console.error(err) : console.info('==> 🌎  Successfully connected to MongoDB'))
  );
}
