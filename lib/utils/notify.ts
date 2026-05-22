import 'server-only';

export interface AppointmentNotificationPayload {
  timestamp: string;
  name: string;
  service: string;
  date: string;
  time: string;
  phone: string;
  notes?: string;
}

export async function notifyAppointment(payload: AppointmentNotificationPayload): Promise<void> {
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;

  const sanitisedPayload = {
    ...payload,
    name: payload.name.substring(0, 100),
    notes: payload.notes?.substring(0, 200),
  };

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitisedPayload),
      });
    } catch (error) {
      console.error('[APPOINTMENT] Webhook notification failed:', error);
    }
  }
  
  console.log('[APPOINTMENT]', JSON.stringify(sanitisedPayload));
}
