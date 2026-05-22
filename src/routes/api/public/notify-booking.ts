import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'
const NOTIFY_TO = 'mhautocare0@gmail.com'

const BookingSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(30),
  vehicle: z.string().min(1).max(100),
  service: z.string().min(1).max(200),
  preferred_date: z.string().min(1).max(40),
  notes: z.string().max(1000).optional().nullable(),
})

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))
}

export const Route = createFileRoute('/api/public/notify-booking')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY
        const RESEND_API_KEY = process.env.RESEND_API_KEY
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          return new Response(JSON.stringify({ error: 'Email not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
        }

        let payload: unknown
        try { payload = await request.json() } catch { return new Response('Bad JSON', { status: 400 }) }
        const parsed = BookingSchema.safeParse(payload)
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
        }
        const b = parsed.data

        const rows: [string, string][] = [
          ['Name', b.name],
          ['Email', b.email],
          ['Phone', b.phone],
          ['Vehicle', b.vehicle],
          ['Service', b.service],
          ['Preferred date', b.preferred_date],
          ['Notes', b.notes || '—'],
        ]
        const html = `
          <h2>New booking request</h2>
          <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
            ${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#666"><strong>${k}</strong></td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`).join('')}
          </table>
        `

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: 'MH Auto Care <onboarding@resend.dev>',
            to: [NOTIFY_TO],
            reply_to: b.email,
            subject: `New booking — ${b.name} (${b.service})`,
            html,
          }),
        })

        if (!res.ok) {
          const text = await res.text()
          return new Response(JSON.stringify({ error: 'Send failed', detail: text }), { status: 502, headers: { 'Content-Type': 'application/json' } })
        }

        return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
      },
    },
  },
})
