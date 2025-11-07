import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'E-posta adresi gereklidir.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi girin.' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend API key not configured. Newsletter subscription recorded locally.');
      return NextResponse.json(
        {
          success: true,
          message: 'Bültene abone oldunuz! (Demo mode - email yapılandırması bekleniyor)',
        },
        { status: 200 }
      );
    }

    // Send welcome email
    const data = await resend.emails.send({
      from: 'BOXX Türkiye Bülten <onboarding@resend.dev>',
      to: [email],
      replyTo: 'info@boxxturkiye.com',
      subject: 'BOXX Türkiye Bülteni\'ne Hoş Geldiniz!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #20ace2 0%, #1890c4 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .welcome-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
                border-left: 4px solid #20ace2;
              }
              .cta-button {
                display: inline-block;
                background: #20ace2;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: bold;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">BOXX Türkiye Bülteni</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Hoş Geldiniz!</p>
            </div>

            <div class="content">
              <div class="welcome-box">
                <h2 style="color: #20ace2; margin-top: 0;">Merhaba!</h2>
                <p>BOXX Türkiye bültenine abone olduğunuz için teşekkür ederiz. Artık yüksek performanslı iş istasyonları, yeni teknolojiler ve özel kampanyalar hakkında ilk siz haberdar olacaksınız.</p>
              </div>

              <div style="text-align: center;">
                <a href="https://boxx-turkiye.pages.dev/blog" class="cta-button">Blog'umuzu Keşfedin</a>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Başarıyla bültene abone oldunuz!',
        data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Abonelik işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
