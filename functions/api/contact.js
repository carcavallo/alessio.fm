// Cloudflare Pages Function: /api/contact
// POST → send contact form email via Resend

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function adminEmailHtml({ name, email, service, message }) {
  return `
  <div style="background:#050816;padding:40px 20px;font-family:'Helvetica Neue',Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;">
      <div style="text-align:center;padding:24px 0;font-size:24px;font-weight:800;letter-spacing:2px;color:#fff;">
        &lt;/&gt; <span style="color:#915EFF;">alessio.fm</span>
      </div>
      <div style="height:2px;background:linear-gradient(90deg,transparent,#915EFF,transparent);margin:0 40px;"></div>
      <div style="background:#0d0a1a;border-radius:12px;border:1px solid rgba(145,94,255,0.15);padding:40px;margin-top:32px;">
        <h1 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#fff;">Neue Anfrage 📩</h1>
        <p style="margin:0 0 24px;font-size:14px;color:#915EFF;font-weight:600;letter-spacing:1px;">${service || 'Allgemein'}</p>
        <div style="background:#050816;border-radius:8px;padding:20px;margin:16px 0;">
          <p style="margin:0 0 8px;font-size:13px;color:#915EFF;font-weight:700;">VON</p>
          <p style="margin:0 0 4px;font-size:15px;color:#fff;font-weight:600;">${name}</p>
          <p style="margin:0;font-size:14px;color:#b0b0b0;">${email}</p>
        </div>
        <div style="background:#050816;border-radius:8px;padding:20px;margin:16px 0;">
          <p style="margin:0 0 8px;font-size:13px;color:#915EFF;font-weight:700;">NACHRICHT</p>
          <p style="margin:0;font-size:15px;color:#e0e0e0;line-height:1.7;white-space:pre-wrap;">${message}</p>
        </div>
        <a href="mailto:${email}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#915EFF;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Antworten →</a>
      </div>
    </div>
  </div>`;
}

function confirmationEmailHtml({ name, service }) {
  return `
  <div style="background:#050816;padding:40px 20px;font-family:'Helvetica Neue',Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;">
      <div style="text-align:center;padding:24px 0;font-size:24px;font-weight:800;letter-spacing:2px;color:#fff;">
        &lt;/&gt; <span style="color:#915EFF;">alessio.fm</span>
      </div>
      <div style="height:2px;background:linear-gradient(90deg,transparent,#915EFF,transparent);margin:0 40px;"></div>
      <div style="background:#0d0a1a;border-radius:12px;border:1px solid rgba(145,94,255,0.15);padding:40px;margin-top:32px;">
        <h1 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#fff;">Anfrage erhalten ✅</h1>
        ${service ? `<p style="margin:0 0 24px;font-size:14px;color:#915EFF;font-weight:600;letter-spacing:1px;">${service}</p>` : ''}
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b0b0b0;">Hey ${name},</p>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b0b0b0;">
          Danke für deine Nachricht! Ich hab deine Anfrage erhalten und melde mich innerhalb von <strong style="color:#fff;">24 Stunden</strong> bei dir.
        </p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#b0b0b0;">
          Bis bald,<br><strong style="color:#fff;">Alessio</strong>
        </p>
      </div>
      <p style="text-align:center;margin-top:32px;font-size:12px;color:#666;">
        alessio.fm · Innerdorf 1, 7408 Cazis
      </p>
    </div>
  </div>`;
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}

export async function onRequestPost(context) {
  const resendKey = context.env.RESEND_API_KEY;
  if (!resendKey) {
    return new Response(JSON.stringify({ error: 'Server config error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, service, message } = await context.request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Bitte alle Felder ausfüllen.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send admin notification
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'alessio.fm <noreply@alpinsignals.com>',
        to: ['contact@alessio.fm'],
        reply_to: email,
        subject: `Neue Anfrage: ${service || 'Kontakt'} — ${name}`,
        html: adminEmailHtml({ name, email, service, message }),
      }),
    });

    // Send confirmation to customer
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Alessio Carcavallo <noreply@alpinsignals.com>',
        to: [email],
        subject: 'Deine Anfrage bei alessio.fm ✅',
        html: confirmationEmailHtml({ name, service }),
      }),
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Fehler beim Senden.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
