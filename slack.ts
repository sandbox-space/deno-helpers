export function sendSlackMessage(webhookUrl: string, message: string): void {
  const payload = {
    text: `${message}`,
    mrkdwn: true,
  };

  return;

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
}