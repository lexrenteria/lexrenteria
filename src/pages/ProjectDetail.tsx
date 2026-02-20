import { useParams, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProjectGallery from "@/components/ProjectGallery";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useI18n();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-cinematic flex items-center justify-center">
        <p className="text-muted-foreground font-body">Project not found.</p>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const details = [
    { label: t.detail.type[lang], value: project.type[lang] },
    { label: t.detail.genre[lang], value: project.genre },
    { label: t.detail.director[lang], value: "Lex Rentería" },
    { label: t.detail.country[lang], value: project.country },
    { label: t.detail.language[lang], value: project.language },
    ...(project.duration ? [{ label: t.detail.duration[lang], value: project.duration }] : []),
    { label: t.detail.year[lang], value: project.year === "TBA" ? t.detail.comingSoon[lang] : project.year },
  ];

  return (
    <HelmetProvider>
      <SEOHead
        title={`${project.title} — Lex Rentería`}
        description={project.synopsis[lang].slice(0, 155)}
      />
      <Navbar />
      <main
        className="bg-cinematic min-h-screen pt-16"
        style={{
          "--primary": project.accent,
          "--accent": project.accent,
          "--ring": project.accent,
        } as React.CSSProperties}
      >
        {/* ── ZONE A: Hero + Title + CTA ── */}
        <div className="relative w-full aspect-video max-h-[60vh] overflow-hidden">
          <img
            src={project.still}
            alt={`${project.title} still`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 pb-20">
          <Link
            to="/"
            className="inline-block text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {t.detail.back[lang]}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-foreground italic mb-4"
          >
            {project.title}
          </motion.h1>

          {project.year === "TBA" ? (
            <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-8">
              {lang === "es" ? "En desarrollo" : "In Development"}
            </span>
          ) : (
            <span className="inline-block text-xs font-body tracking-widest uppercase text-muted-foreground mb-8">
              {project.year}
            </span>
          )}

          {/* Watch Online CTA */}
          {project.watchUrl && (
            <div className="mb-16">
              <a
                href={project.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto sm:inline-flex bg-primary text-primary-foreground px-10 py-4 text-base font-body font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                <ExternalLink size={18} />
                {lang === "es" ? "Ver Película" : "Watch Film"}
              </a>
              <p className="text-xs text-muted-foreground font-body mt-3">
                {lang === "es"
                  ? "Disponible gratis en Nuestro Cine MX (Requiere crear una cuenta gratuita)."
                  : "Available free on Nuestro Cine MX (Free account required)."}
              </p>
            </div>
          )}

          {/* ── ZONE B: Awards & Laurels (Full Width) ── */}
          {project.laurels && project.laurels.length > 0 && (
            <div className="mb-16">
              <h2 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 text-center">
                {t.detail.awards[lang]}
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {project.laurels.map((laurel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="relative flex flex-col items-center justify-center text-center w-[180px] h-[200px]"
                  >
                    {/* Classic laurel wreath SVG */}
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1475.4 801.7"
  className={`absolute inset-0 w-full h-full ${laurel.highlight ? "text-primary" : "text-foreground"}`}
  fill="currentColor"
>
  <path d="m334.46 49.002c-18.278 12.277-38.479 27.48-54.76 44.437-28.887 30.086-57.536 64.004-82.159 97.941-16.634 22.926-38.215 57.715-50.006 83.305-15.691 34.056-24.985 57.915-33.597 95.332-12.132 52.713-10.459 106.81 1.863 157.81 18.129 75.031 76.15 137.81 134.13 188.77 45.358 39.863 106.34 65.942 159.92 85.098l5.5363-14.63c-53.09-18.97-109.36-44.31-152.83-82.56-55.92-49.21-107.57-109.22-129.85-180.73-13.57-43.53-16.72-91.29-9.6-137.54 6.2375-40.516 21.918-81.121 37.193-118.04 12.558-30.349 27.2-53.991 45.06-78.892 22.645-31.574 47.529-62.365 73.981-90.48 17.123-18.199 40.023-34.629 58.415-46.982z" />
  <path d="m311.24 756.98s-37.634-11.898-67.5-8.3929c-47.415 5.5642-51.786 35-51.786 35s19.022 11.809 59.821 7.3214c47.796-5.2574 59.464-33.929 59.464-33.929z" />
  <path d="m247.15 713.02s-31.716-15.044-61.786-14.821c-52.058 0.38562-55.179 28.036-55.179 28.036s18.843 13.595 60.536 13.036c48.08-0.64498 56.429-26.25 56.429-26.25z" />
  <path d="m199.74 666.79s-30.157-26.43-59.326-33.739c-50.498-12.653-67.224 16.73-67.224 16.73s18.771 22.52 59.277 32.411c46.711 11.406 67.273-15.402 67.273-15.402z" />
  <path d="m146.2 595.58s-25.79-27.185-61.094-38.032c-46.073-14.156-67.729 13.636-68.361 14.331 0 0 18.879 23.762 58.267 34.179 52.832 13.973 71.188-10.478 71.188-10.478z" />
  <path d="m120.7 538.91s-24.019-36.576-59.844-53.84c-34.801-16.78-60.225-2.49-60.856-1.93 0 0 17.877 32.67 50.767 48.325 44.687 21.271 69.938 7.4411 69.938 7.4412z" />
  <path d="m112.96 489.18c-12.82-12.06-13.775-44.84-32.099-71.44-25.563-37.11-67.73-34.42-68.361-34.07 0 0 4.5142 46.234 36.481 74.178 33.973 29.697 63.978 31.335 63.978 31.335z" />
  <path d="m109.42 411.25s1.2445-40.185-9.3525-70.701c-14.783-42.569-55.138-50.926-55.839-50.759 0 0-6.5444 45.519 16.848 80.952 24.861 37.657 48.344 40.507 48.344 40.507z" />
  <path d="m126.51 335.94s8.0495-33.735 3.9716-65.78c-6.1462-48.297-43.73-58.521-44.448-58.451 0 0-12.884 44.733 5.4449 83.031 19.479 40.702 35.031 41.2 35.031 41.2z" />
  <path d="m159.62 255.08s13.089-30.516 11.412-62.775c-2.3279-44.771-32.665-63.685-33.385-63.711 0 0-29.251 26.374-12.451 83.145 10.191 34.437 34.425 43.342 34.425 43.342z" />
  <path d="m201.74 188.6s19.451-29.962 24.832-61.814c5.0517-29.903-7.0803-62.481-9.7885-65.475 0 0-31.65 13.91-30.465 67.294 0.79711 35.905 15.422 59.995 15.422 59.995z" />
  <path d="m253.49 124.45s23.192-24.697 29.233-58.466c5-27.984-0.04-58.394-5.31-65.984 0 0-30.25 18.795-32.448 66.327-1.6587 35.875 6.1262 52.95 8.5253 58.127z" />
  <path d="m291.03 85.107s44.199 1.5969 66.166-11.157c24.589-14.276 48.719-45.263 50.623-54.309 0 0-38.712-16.975-74.806 14.032-27.242 23.402-39.862-41.983 51.434z" />
  <path d="m242.33 138.43s21.141-24.752 57.469-31.147c28.002-4.9287 49.529-0.37797 63.35 7.6753 0 0-21.322 27.318-62.19 31.084-35.762 3.2949-53.376-5.3854-58.63-7.6124z" />
  <path d="m198.64 195.5s20.13-23.742 56.459-30.136c28.002-4.9287 41.448 0.12711 55.269 8.1804 0 0-17.029 26.056-57.897 29.821-35.762 3.2949-48.578-5.638-53.832-7.8649z" />
  <path d="m156.23 269.95s18.805-29.262 52.808-43.562c34.843-14.654 52.739-7.6569 67.725-2.0626-4.7791 7.1686-24.337 37.05-56.046 46.02-34.557 9.7763-58.932 0.90881-64.487-0.39556z" />
  <path d="m131.06 336.07s16.664-30.532 49.556-47.228c33.706-17.109 52.056-11.41 67.404-6.9021-4.254 7.4921-21.624 38.696-52.61 49.912-33.77 12.223-58.716 5.1223-64.35 4.2186z" />
  <path d="m117.84 414.65c14.421-18.489 22.261-38.366 44.449-58.149 27.336-24.373 50.792-16.603 66.711-15.029-7.8365 14.719-19.603 38.003-43.92 55.546-29.126 21.011-61.536 17.473-67.24 17.633z" />
  <path d="m119.63 487.05c12.262-19.986 18.081-35.565 37.916-57.707 24.437-27.278 47.605-22.435 63.6-22.652-6.1404 15.503-16.49 38.695-38.692 58.849-26.592 24.138-57.175 20.713-62.824 21.51z" />
  <path d="m135.4 544.78c18.448-28.481 16.12-34.927 34.176-58.542 19.392-25.362 43.885-24.665 59.811-26.165-4.8772 15.946-12.165 37.517-32.837 59.237-22.045 23.163-44.975 20.181-61.149 25.47z" />
  <path d="m165.71 601.35c11.63-25.198 9.6219-40.933 20.286-58.794 17.442-29.213 34.541-30.474 50.467-31.973-12.703 36.396-9.762 36.564-23.746 58.732-13.607 21.571-32.096 24.474-47.007 32.036z" />
  <path d="m202.25 648.92c6.628-26.95-0.10184-35.197 6.973-54.76 11.571-31.996 28.119-36.484 43.469-40.983-1.7651 21.479 0.89983 35.106-11.139 58.387-8.5015 16.44-26.101 27.098-39.303 37.356z" />
  <path d="m275.9 596.01s13.293 25.664 8.8773 55.408c-6.2559 42.144-28.777 48.458-28.777 48.458s-12.827-19.155-11.523-58.022c1.3924-41.516 31.423-45.845 31.423-45.845z" />
  <path d="m323.88 638.94s13.303 25.984 10.393 55.914c-3.7305 38.356-24.736 47.953-24.736 47.953s-13.232-21.412-13.796-53.728c-0.86041-49.346 28.14-50.138 28.14-50.138z" />
  <path d="m1140.9 49.002c18.278 12.277 38.479 27.48 54.76 44.437 28.887 30.086 57.536 64.004 82.159 97.941 16.634 22.926 38.215 57.715 50.006 83.305 15.691 34.056 24.985 57.915 33.597 95.332 12.132 52.713 10.46 106.81-1.863 157.81-18.129 75.031-76.15 137.81-134.13 188.77-45.358 39.863-106.34 65.942-159.92 85.098l-5.5-14.62c53.098-18.982 109.37-44.319 152.84-82.572 55.917-49.203 107.56-109.21 129.85-180.73 13.566-43.531 16.716-91.295 9.5968-137.54-6.2375-40.516-21.918-81.121-37.193-118.04-12.558-30.349-27.2-53.991-45.06-78.892-22.645-31.574-47.529-62.365-73.981-90.48-17.123-18.199-40.023-34.629-58.415-46.982z" />
  <path d="m1164.2 756.98s37.634-11.898 67.5-8.3929c47.415 5.5642 51.786 35 51.786 35s-19.022 11.809-59.822 7.3214c-47.796-5.2574-59.464-33.929-59.464-33.929z" />
  <path d="m1228.2 713.02s31.716-15.044 61.786-14.821c52.058 0.38562 55.179 28.036 55.179 28.036s-18.843 13.595-60.536 13.036c-48.08-0.64498-56.429-26.25-56.429-26.25z" />
  <path d="m1275.7 666.79s30.157-26.43 59.326-33.739c50.498-12.653 67.224 16.73 67.224 16.73s-18.771 22.52-59.277 32.411c-46.711 11.406-67.273-15.402-67.273-15.402z" />
  <path d="m1329.2 595.58s25.79-27.185 61.094-38.032c46.073-14.156 67.729 13.636 68.361 14.331 0 0-18.879 23.762-58.266 34.179-52.832 13.973-71.188-10.478-71.188-10.478z" />
  <path d="m1354.7 538.91s24.019-36.576 59.844-53.84c34.806-16.774 60.229-2.4885 60.861-1.9259 0 0-17.877 32.67-50.767 48.325-44.687 21.271-69.938 7.4411-69.938 7.4412z" />
  <path d="m1362.4 489.18c12.817-12.059 13.774-44.838 32.098-71.441 25.563-37.111 67.729-34.419 68.36-34.072 0 0-4.5142 46.234-36.481 74.178-33.973 29.697-63.978 31.335-63.978 31.335z" />
  <path d="m1366 411.25s-1.2445-40.185 9.3525-70.701c14.783-42.569 55.138-50.926 55.839-50.759 0 0 6.5444 45.519-16.848 80.952-24.86 37.657-48.344 40.507-48.344 40.507z" />
  <path d="m1348.9 335.94s-8.0496-33.735-3.9716-65.78c6.1462-48.297 43.73-58.521 44.448-58.451 0 0 12.884 44.733-5.4449 83.031-19.479 40.702-35.031 41.2-35.031 41.2z" />
  <path d="m1315.8 255.08s-13.089-30.516-11.412-62.775c2.3279-44.771 32.665-63.685 33.385-63.711 0 0 29.251 26.374 12.451 83.145-10.191 34.437-34.425 43.342-34.425 43.342z" />
  <path d="m1273.6 188.6s-19.451-29.962-24.832-61.814c-5.0516-29.903 7.0803-62.481 9.7885-65.475 0 0 31.65 13.91 30.465 67.294-0.7971 35.905-15.422 59.995-15.422 59.995z" />
  <path d="m1221.9 124.45s-23.192-24.697-29.233-58.466c-5.0068-27.989 0.034-58.399 5.3103-65.989 0 0 30.25 18.795 32.448 66.327 1.6588 35.875-6.1261 52.95-8.5252 58.127z" />
  <path d="m1184.4 85.107s-44.199 1.5969-66.166-11.157c-24.589-14.276-48.719-45.263-50.623-54.309 0 0 38.712-16.975 74.806 14.032 27.242 23.402 39.862 46.137 41.983 51.434z" />
  <path d="m1233.1 138.43s-21.141-24.752-57.469-31.147c-28.002-4.9287-49.529-0.37797-63.35 7.6753 0 0 21.322 27.318 62.19 31.084 35.762 3.2949 53.376-5.3854 58.63-7.6124z" />
  <path d="m1276.7 195.5s-20.13-23.742-56.459-30.136c-28.002-4.9287-41.448 0.12711-55.269 8.1804 0 0 17.029 26.056 57.897 29.821 35.762 3.2949 48.578-5.638 53.832-7.8649z" />
  <path d="m1319.2 269.95s-18.805-29.262-52.808-43.562c-34.843-14.654-52.739-7.6569-67.725-2.0626 4.779 7.1686 24.337 37.05 56.046 46.02 34.557 9.7763 58.932 0.90881 64.487-0.39556z" />
  <path d="m1344.3 336.07s-16.664-30.532-49.556-47.228c-33.706-17.109-52.056-11.41-67.404-6.9021 4.254 7.4921 21.624 38.696 52.61 49.912 33.77 12.223 58.716 5.1223 64.35 4.2186z" />
  <path d="m1357.5 414.65c-14.421-18.489-22.261-38.366-44.449-58.149-27.336-24.373-50.792-16.603-66.711-15.029 7.8366 14.719 19.603 38.003 43.92 55.546 29.126 21.011 61.536 17.473 67.24 17.633z" />
  <path d="m1355.8 487.05c-12.262-19.986-18.081-35.565-37.916-57.707-24.437-27.278-47.605-22.435-63.6-22.652 6.1404 15.503 16.49 38.695 38.692 58.849 26.592 24.138 57.174 20.713 62.824 21.51z" />
  <path d="m1340 544.78c-18.448-28.481-16.12-34.927-34.176-58.542-19.392-25.362-43.885-24.665-59.811-26.165 4.8772 15.946 12.166 37.517 32.837 59.237 22.045 23.163 44.975 20.181 61.149 25.47z" />
  <path d="m1309.7 601.35c-11.63-25.198-9.6218-40.933-20.286-58.794-17.442-29.213-34.541-30.474-50.467-31.973 12.703 36.396 9.7621 36.564 23.746 58.732 13.607 21.571 32.096 24.474 47.007 32.036z" />
  <path d="m1273.1 648.92c-6.6279-26.95 0.1019-35.197-6.973-54.76-11.571-31.996-28.119-36.484-43.469-40.983 1.7651 21.479-0.8999 35.106 11.139 58.387 8.5015 16.44 26.101 27.098 39.303 37.356z" />
  <path d="m1199.5 596.01s-13.293 25.664-8.8773 55.408c6.2559 42.144 28.777 48.458 28.777 48.458s12.827-19.155 11.523-58.022c-1.3925-41.516-31.423-45.845-31.423-45.845z" />
  <path d="m1151.5 638.94s-13.303 25.984-10.392 55.914c3.7305 38.356 24.736 47.953 24.736 47.953s13.232-21.412 13.796-53.728c0.8605-49.346-28.14-50.138-28.14-50.138z" />
</svg>
                    <div className="relative z-10 px-7 flex flex-col items-center gap-0.5">
                      <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                        {lang === "es" ? "Selección Oficial" : "Official Selection"}
                      </span>
                      <span className={`font-body text-sm font-black uppercase tracking-wide leading-tight mt-1 ${laurel.highlight ? "text-primary" : "text-foreground"}`}>
                        {laurel.main}
                      </span>
                      {laurel.sub && (
                        <span className="font-body text-[9px] leading-tight text-muted-foreground mt-0.5">
                          {laurel.sub}
                        </span>
                      )}
                      <span className="font-body text-xs font-semibold tracking-widest text-foreground mt-1">
                        {laurel.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── ZONE C: Split Layout — Synopsis + Poster/Specs ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Left Column (60%) — Synopsis */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                {t.detail.synopsis[lang]}
              </h2>
              <div className="text-muted-foreground font-body text-base leading-relaxed space-y-4">
                {project.synopsis[lang].split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column (40%) — Poster + Tech Specs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Official Poster */}
              <div className="border border-border rounded-sm overflow-hidden">
                <img
                  src={project.poster}
                  alt={`${project.title} poster`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tech Specs Table */}
              <div className="border border-border rounded-sm overflow-hidden">
                {details.map((d, i) => (
                  <div
                    key={d.label}
                    className={`flex justify-between px-5 py-3 text-sm font-body ${
                      i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <span className="text-muted-foreground">{d.label}</span>
                    <span className="text-foreground text-right">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legacy awards fallback */}
          {project.awards && !project.laurels && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t.detail.awards[lang]}
              </h2>
              <p className="text-muted-foreground font-body">{project.awards[lang]}</p>
            </div>
          )}

          {/* ── ZONE D: Gallery + Related ── */}
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}

          {relatedProjects.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                {lang === "es" ? "Más Proyectos" : "More Projects"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/projects/${rp.slug}`}
                    className="group block border border-border rounded-sm overflow-hidden bg-card-gradient transition-all duration-500 accent-border-hover"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={rp.still}
                        alt={`${rp.title} still`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      {rp.year === "TBA" ? (
                        <span className="inline-block text-xs font-body tracking-widest uppercase text-primary mb-1">
                          {lang === "es" ? "En desarrollo" : "In Development"}
                        </span>
                      ) : (
                        <span className="inline-block text-xs font-body tracking-widest uppercase text-muted-foreground mb-1">
                          {rp.year}
                        </span>
                      )}
                      <h3 className="font-heading text-lg font-bold text-foreground italic">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <FooterSection />
      </main>
    </HelmetProvider>
  );
};

export default ProjectDetail;
