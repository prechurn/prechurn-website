import { useEffect } from "react";
import EmailCaptureForm from "./EmailCaptureForm";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const EmailCaptureModal = ({ isOpen, onClose, source }: EmailCaptureModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-2xl shadow-strong border border-border p-8 animate-fade-in-up">
        <EmailCaptureForm onClose={onClose} source={source} />
      </div>
    </div>
  );
};

export default EmailCaptureModal;
