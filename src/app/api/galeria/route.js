export async function POST(req) {
    const body = await req.json();
    const { nomor, nominal, payment } = body;

    console.log("Form data:", { nomor, nominal, payment });

    return new Response(JSON.stringify({ message: "Form submited successfully" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}