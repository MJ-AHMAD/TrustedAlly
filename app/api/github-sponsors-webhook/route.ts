import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  // Get the request body as text for signature verification
  const bodyText = await request.text()
  const body = JSON.parse(bodyText)

  // Get the signature from the headers
  const signature = request.headers.get("x-hub-signature-256")
  const webhookSecret = process.env.GITHUB_WEBHOOK_SECRET

  // Verify the webhook secret is configured
  if (!webhookSecret) {
    console.error("GITHUB_WEBHOOK_SECRET is not configured")
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
  }

  // Verify the signature
  if (!signature) {
    return NextResponse.json({ error: "No signature provided" }, { status: 401 })
  }

  // Compute the expected signature
  const hmac = crypto.createHmac("sha256", webhookSecret)
  const digest = "sha256=" + hmac.update(bodyText).digest("hex")

  // Compare signatures
  if (signature !== digest) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  }

  // Process the webhook data based on the event type
  const { action, sponsorship } = body

  try {
    if (action === "created") {
      // A new sponsor has signed up
      console.log(`New sponsor: ${sponsorship.sponsor.login} at tier: ${sponsorship.tier.name}`)

      // Here you could:
      // - Send a thank you email
      // - Add them to a sponsors database
      // - Grant access to private resources

      // Example: Store sponsor information in your database
      // await storeNewSponsor(sponsorship);
    } else if (action === "cancelled") {
      console.log(`Sponsorship cancelled: ${sponsorship.sponsor.login}`)
      // Handle cancellation
    } else if (action === "tier_changed") {
      console.log(`Sponsorship tier changed for ${sponsorship.sponsor.login} to ${sponsorship.tier.name}`)
      // Handle tier change
    }

    // Acknowledge receipt of the webhook
    return NextResponse.json({ received: true, status: "success" })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return NextResponse.json({ error: "Error processing webhook" }, { status: 500 })
  }
}
