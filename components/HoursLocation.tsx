import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function HoursLocation() {
  const { hours } = site;
  const pending = (v: string) => v.includes("PENDIENTE");

  return (
    <section id="contacto" className="scroll-mt-20 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading kicker={hours.kicker} title={hours.title} />

          <Reveal delay={0.15}>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">Horario de cocina</dt>
                <dd className="mt-3 space-y-1.5">
                  {hours.schedule.map((row) => (
                    <div key={row.label} className="flex gap-6 text-beige">
                      <span className="w-16 shrink-0 text-beige-dim">{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                  <p className="pt-1 text-xs text-beige-dim/70">{hours.scheduleNote}</p>
                </dd>
              </div>

              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">Dirección</dt>
                <dd className="mt-3 text-beige">
                  {hours.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>

              <div className="flex gap-14">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">Teléfono</dt>
                  <dd className="mt-3">
                    {pending(hours.phone) ? (
                      <span className="text-sm text-beige-dim/60">{hours.phone}</span>
                    ) : (
                      <a
                        href={`tel:${hours.phone.replace(/\s+/g, "")}`}
                        className="text-beige underline-offset-4 hover:text-cream hover:underline"
                      >
                        {hours.phone}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.3em] text-aka-soft">Email</dt>
                  <dd className="mt-3">
                    {pending(hours.email) ? (
                      <span className="text-sm text-beige-dim/60">{hours.email}</span>
                    ) : (
                      <a
                        href={`mailto:${hours.email}`}
                        className="text-beige underline-offset-4 hover:text-cream hover:underline"
                      >
                        {hours.email}
                      </a>
                    )}
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-beige-dim">{hours.zoneText}</p>

            <a
              href={hours.mapsLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-beige/40 px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.25em] text-beige transition-all duration-300 hover:border-cream hover:text-cream"
            >
              {hours.ctaMap}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="h-full min-h-[24rem] w-full overflow-hidden border border-beige/10">
            <iframe
              src={hours.mapsEmbedUrl}
              title={`Mapa: ${site.nameFull} en ${site.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[35%] contrast-[0.9]"
              style={{ border: 0, minHeight: "24rem" }}
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
