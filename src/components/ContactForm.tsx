import { Send } from "lucide-react";

export function ContactForm({ recipient }: { recipient?: string }) {
  return (
    <form
      className="contact-form"
      action={recipient ? `https://formsubmit.co/${recipient}` : undefined}
      method="POST"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title">
        Cuéntame tu idea<span>.</span>
      </h2>
      <input
        type="hidden"
        name="_subject"
        value="Nuevo mensaje del portafolio de Luis Dionicio"
      />
      <input type="hidden" name="_template" value="table" />
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Deja este campo vacío</label>
        <input
          id="contact-website"
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor="contact-name">Tu nombre</label>
          <input
            id="contact-name"
            name="nombre"
            type="text"
            autoComplete="name"
            placeholder="¿Cómo te llamas?"
            minLength={2}
            maxLength={100}
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Tu correo</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@correo.com"
            maxLength={254}
            required
          />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-subject">Asunto</label>
          <input
            id="contact-subject"
            name="asunto"
            type="text"
            placeholder="Una oportunidad, un proyecto, una idea…"
            minLength={3}
            maxLength={160}
            required
          />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-message">Tu mensaje</label>
          <textarea
            id="contact-message"
            name="mensaje"
            rows={6}
            placeholder="Me gustaría conversar contigo sobre…"
            minLength={10}
            maxLength={3000}
            required
          />
        </div>
      </div>
      <p className="contact-form-note" id="contact-privacy">
        Tu nombre, correo y mensaje se enviarán a Luis mediante FormSubmit para
        responderte. Al continuar podrás completar su verificación antispam.
      </p>
      <button
        className="button primary contact-primary"
        type="submit"
        disabled={!recipient}
        aria-describedby="contact-privacy"
      >
        <Send size={19} aria-hidden="true" />
        Enviar mensaje
      </button>
      {!recipient && (
        <p role="status" className="contact-hint">
          El formulario estará disponible cuando se configure el correo de
          destino. Por ahora puedes contactarme en LinkedIn.
        </p>
      )}
    </form>
  );
}
