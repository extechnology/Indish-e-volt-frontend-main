import emailjs from '@emailjs/browser'

export interface PartnerApplicationData {
  first_name: string
  last_name: string
  email: string
  phone: string
  property_type: string
  parking_bays: string
  property_address: string
}

// Configured EmailJS keys (with Vite env overrides)
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_w5wm3rb',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_sswyy9u',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'pP0VkIAm7y0gQdoRK',
}

/**
 * Sends the Become a Partner / Host form data using EmailJS
 * Maps each React state field to the corresponding EmailJS template variable:
 * - first_name: {{first_name}}
 * - last_name: {{last_name}}
 * - email: {{email}}
 * - phone: {{phone}}
 * - property_type: {{property_type}}
 * - parking_bays: {{parking_bays}}
 * - property_address: {{property_address}}
 */
export async function sendPartnerApplication(data: PartnerApplicationData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.serviceId
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_CONFIG.templateId
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.publicKey

  const templateParams: Record<string, string> = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    property_type: data.property_type,
    parking_bays: data.parking_bays,
    property_address: data.property_address,
  }

  return await emailjs.send(serviceId, templateId, templateParams, publicKey)
}
