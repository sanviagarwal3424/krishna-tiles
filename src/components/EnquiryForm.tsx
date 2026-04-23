"use client";

import { FormEvent, useState } from "react";
import { getWhatsAppLink } from "@/data/business";

interface EnquiryFormProps {
  productName?: string;
}

const ROOM_OPTIONS = [
  "Living Room",
  "Bathroom",
  "Kitchen",
  "Outdoor",
  "Sanitaryware",
  "Multiple Rooms",
  "Other",
];

export default function EnquiryForm({ productName }: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const room = String(data.get("room") || "");
    const note = String(data.get("note") || "");

    const lines = [
      `Hi Krishna Tiles! I'd like to enquire about your tile collection.`,
      productName ? `Product: ${productName}` : null,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      room && `Room Interest: ${room}`,
      note && `Note: ${note}`,
    ].filter(Boolean) as string[];

    window.open(getWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <form className="form-redesigned" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="enq-name">Name</label>
        <input id="enq-name" name="name" type="text" placeholder="Your full name" required />
      </div>
      <div>
        <label htmlFor="enq-phone">Phone</label>
        <input id="enq-phone" name="phone" type="tel" placeholder="10-digit mobile" required />
      </div>
      <div>
        <label htmlFor="enq-room">Room Interest</label>
        <select id="enq-room" name="room" defaultValue="">
          <option value="" disabled>
            Select a room
          </option>
          {ROOM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="enq-note">Message</label>
        <textarea
          id="enq-note"
          name="note"
          placeholder={productName ? `Tell us what you'd like to know about ${productName}` : "Tell us what you're looking for"}
        />
      </div>
      <button type="submit" className="rd-btn rd-btn--primary-on-light" disabled={submitting}>
        {submitting ? "Opening WhatsApp..." : "Send Enquiry"}
      </button>
    </form>
  );
}
