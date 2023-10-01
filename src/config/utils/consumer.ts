import client, { Channel, ConsumeMessage} from 'amqplib'

export const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
  if (msg) {
    // Display the received message
    console.log(msg.content.toString())
    // Acknowledge the message
    channel.ack(msg)
  }
}


