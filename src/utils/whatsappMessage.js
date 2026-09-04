/**
 * Baidyanath Travels — WhatsApp Message Builders
 * All customer-facing messages go through here for consistency.
 */

const WA_NUMBER = '918210049424'
const BRAND = 'Baidyanath Travels'
const DIVIDER = ''

/** Opens WhatsApp with a pre-built message */
export function openWhatsApp(message) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
}

/** Returns a wa.me href string (for <a> tags) */
export function waHref(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

// ─── Message Builders ────────────────────────────────────────────────────────

/**
 * Booking request from the Hero quick-booking form
 */
export function bookingRequestMsg({ name, phone, tripType, date, vehicle, location }) {
  const lines = [
    `\uD83D\uDE97 *Booking Request \u2014 ${BRAND}*`,
    DIVIDER,
    `\uD83D\uDC64 *Name:*  ${name}`,
    `\uD83D\uDCDE *Phone:*  ${phone}`,
    `\uD83D\uDDFA *Trip Type:*  ${tripType}`,
    `\uD83D\uDCC5 *Pickup Date:*  ${date || 'To be confirmed'}`,
    `\uD83D\uDE98 *Vehicle:*  ${vehicle}`,
    `\uD83D\uDCCD *Pickup Location:*  ${location || 'To be confirmed'}`,
    DIVIDER,
    `_Sent via ${BRAND} website_`,
  ]
  return lines.join('\n')
}

/**
 * General enquiry from the Contact form
 */
export function enquiryMsg({ name, phone, service, message }) {
  const lines = [
    `\uD83D\uDCE9 *New Enquiry \u2014 ${BRAND}*`,
    DIVIDER,
    `\uD83D\uDC64 *Name:*  ${name}`,
    `\uD83D\uDCDE *Phone:*  ${phone}`,
    `\uD83D\uDE97 *Service:*  ${service || 'Not specified'}`,
    `\uD83D\uDCAC *Message:*`,
    `${message || 'No additional message'}`,
    DIVIDER,
    `_Sent via ${BRAND} website_`,
  ]
  return lines.join('\n')
}

/**
 * Vehicle-specific booking from the Fleet section
 */
export function vehicleBookingMsg(vehicleName, price) {
  const lines = [
    `\uD83D\uDE98 *Vehicle Booking \u2014 ${BRAND}*`,
    DIVIDER,
    `I'd like to book the *${vehicleName}* (${price}).`,
    ``,
    `Please share availability and confirm the booking.`,
    DIVIDER,
    `_Sent via ${BRAND} website_`,
  ]
  return lines.join('\n')
}

/**
 * Service enquiry from the Services page
 */
export function serviceEnquiryMsg(serviceName) {
  const lines = [
    `\uD83D\uDCCB *Service Enquiry \u2014 ${BRAND}*`,
    DIVIDER,
    `I'm interested in: *${serviceName}*`,
    ``,
    `Could you please share more details \u2014 pricing, availability, and how to book?`,
    DIVIDER,
    `_Sent via ${BRAND} website_`,
  ]
  return lines.join('\n')
}

/**
 * General quick contact — floating buttons, CTA sections, FAQ, etc.
 */
export function quickContactMsg() {
  const lines = [
    `\uD83D\uDC4B *Hello, ${BRAND}!*`,
    DIVIDER,
    `I found your website and would like to enquire about your car rental services.`,
    ``,
    `Could you please help me with availability, pricing, and booking?`,
    DIVIDER,
    `_Sent via ${BRAND} website_`,
  ]
  return lines.join('\n')
}

/**
 * Blog CTA — user read a blog and wants to book
 */
export function blogBookingMsg(blogTitle) {
  const lines = [
    `\uD83D\uDC4B *Hello, ${BRAND}!*`,
    DIVIDER,
    `I just read your article:`,
    `\uD83D\uDCF0 _"${blogTitle}"_`,
    ``,
    `I'd like to know more about your services and make a booking.`,
    DIVIDER,
    `_Sent via ${BRAND} website_`,
  ]
  return lines.join('\n')
}
