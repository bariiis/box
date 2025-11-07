import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi girin.' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend API key not configured. Email not sent.');
      return NextResponse.json(
        {
          success: true,
          message: 'Mesajınız alındı! (Demo mode - email yapılandırması bekleniyor)',
        },
        { status: 200 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'BOXX Türkiye İletişim <onboarding@resend.dev>',
      to: ['info@boxxturkiye.com'],
      replyTo: email,
      subject: `Yeni İletişim Formu: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #20ace2 0%, #1890c4 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 6px;
                border-left: 4px solid #20ace2;
              }
              .field-label {
                font-weight: bold;
                color: #20ace2;
                margin-bottom: 5px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #20ace2;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Yeni İletişim Talebi</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">BOXX Türkiye Web Sitesi</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Ad Soyad</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">E-posta</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #20ace2;">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">Telefon</div>
                <div class="field-value">${phone}</div>
              </div>
              ` : ''}

              ${company ? `
              <div class="field">
                <div class="field-label">Şirket</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Konu</div>
                <div class="field-value"><strong>${subject}</strong></div>
              </div>

              <div class="field">
                <div class="field-label">Mesaj</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız başarıyla gönderildi!',
        data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
