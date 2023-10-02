import * as amqp from 'amqplib';
import notificationSchema from '../models/notification.model';
import {INotification} from '../domain/interfaces/notification.interfaces';
const queueName = process.env.QUEUE_NAME || 'notifications'
const rabbitMqUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5673'

async function startConsumer() {
    const connection = await amqp.connect(rabbitMqUrl); // Connect to RabbitMQ server
  
    const channel = await connection.createChannel(); // Create a channel
  
    await channel.assertQueue(queueName, { durable: false }); // Ensure the queue exists
  
    console.log(`[*] Waiting for messages in ${queueName}. To exit press CTRL+C`);
  
    channel.consume(
      queueName,
      (msg) => {
        if (msg !== null) {
          // Parse message content in json
          const content = JSON.parse(msg.content.toString());
          const notification = new notificationSchema({
            plate: content.plate,
            message: content.message,
          });
          notificationSchema.create(notification);
          channel.ack(msg); // Acknowledge that the message has been received and processed
        }
      },
      { noAck: false } // Set noAck to false to manually acknowledge messages
    );
  }
  
  startConsumer().catch(console.error);

export default startConsumer;