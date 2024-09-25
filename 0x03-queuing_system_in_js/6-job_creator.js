import { createQueue } from 'kue';
const queue = kue.createQueue();

const jobData = {
  phoneNumber: '0775056439',
  message: 'Hello!',
};

const job = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (err) {
      console.error('Notification job failed');
      return;
    }
    console.log('Notification job created:', job.id);
  });

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
