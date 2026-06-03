"use client";

import { business, getCallLink, getWhatsAppLink } from "@/data/business";
import { WhatsappLogo, Phone } from "@phosphor-icons/react";

export default function FloatingButtons() {
  return (
    <>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn-redesigned float-btn-redesigned--wa"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp"
      >
        <WhatsappLogo size={24} weight="fill" />
      </a>
      <a
        href={getCallLink()}
        className="float-btn-redesigned float-btn-redesigned--call"
        aria-label={`Call ${business.phoneDisplay}`}
        id="floating-phone"
      >
        <Phone size={22} weight="fill" />
      </a>
    </>
  );
}
