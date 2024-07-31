import { defineEventHandler, readBody } from 'h3';
import { environment } from '../../../../environments/environment';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("the body is: ", JSON.stringify(body));
    const response = await fetch(`${environment.remoteApiHost}auditproject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log("Response is: ", response);

    const data = await response.json();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    const err = error as Error;
    return {
      success: false,
      message: 'Error: ' + err.message,
    };
  }

});
