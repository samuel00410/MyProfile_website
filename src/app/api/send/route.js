import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { subject, bodyContent } = body; // *從請求體中獲取收件人、主題和郵件內容
  // const from = "contact@samuelln.com"; // *寄件人
  const from = "onboarding@resend.dev";

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: ["samuel00410@gmail.com"], // 固定收件人
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>來自: {from}</p>
          <p>{bodyContent}</p>
        </>
      ),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
