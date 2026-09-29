# Coordinator QA — WebMapp Venezia

Review date: 2026-09-28

Decision: admit. This is the Metropolitan City of Venice's mobile/web service,
not just a government-listed software package. The municipality's primary
2019 announcement says the app was developed in-house by the Metropolitan City
with local municipalities; its current project page identifies the intended
citizens/tourists use and links the Android, Apple, and web versions. A current
city service page, marked verified in August 2025, continues to expose WebMapp
in its public SITM catalogue. Google's listing records a 27 January 2026 update;
Apple identifies the developer as Città metropolitana di Venezia. These
product-specific distribution and operation signals support `Maintained` even
though the source repository itself has not changed since 2022.

Four checks:

- Government provenance: pass — the [city's first-party announcement](https://old.cittametropolitana.ve.it/notizie/presentata-webapp-l%E2%80%99applicazione-gratuita-smartphone-che-mette-rete-informazioni-cittadini-e)
  says the app was developed in-house by the Metropolitan City with local
  municipalities; its current [WebMapp project page](https://cittametropolitana.ve.it/node/1190997)
  identifies the government service and participating entities.
- Public source: pass — the [assigned public repository](https://github.com/CittaMetropolitanaVenezia/WebMappVenezia)
  contains backend and frontend application source plus reuse/build instructions.
- Eligible license: pass — root `LICENSE` is GNU GPL version 3; the repository's
  `publiccode.yml` identifies `GPL-3.0-or-later`. This is the grant for the
  covered application; separately licensed data, assets, or development tools
  are not inferred to share that grant.
- Primary evidence: pass — the city's [current SITM page](https://cittametropolitana.ve.it/amministrazione-trasparente/accesibilita-catalogo/sitm)
  lists WebMapp and its app-store distribution. The [Google Play record](https://play.google.com/store/apps/details?hl=it&id=it.cittametropolitanavenezia.webpapermapp)
  reports an update on 27 January 2026; Apple's [App Store record](https://apps.apple.com/it/app/webmapp-venezia/id1446858034)
  identifies the city as the developer.

Open-source year: **2022**. In the canonical Git history, the initial public
commit added the GPL license on 6 September 2022 at 16:04 CEST; the first
application source commit (`8a362ede624c93569dcd9a875d6fe4e059730620`) followed
that same day at 16:37 CEST. The date is therefore the first public licensed
application source, not the original 2019 launch of the operational app.
