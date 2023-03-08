import { v4 as uuidv4 } from 'uuid';
export function generate(data) {
  const message = `Thank you for your interest in the ${data.role} position ${
    data.userName
  }!
      
    If we feel like you are a good fit, you will receive a message from us at ${
      data.email
    }.
    Here is your application id if you need it!
    application id: ${uuidv4()}`;
  return message;
}
