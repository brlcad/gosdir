# Coordinator QA: GovPay Interaction Layer (GIL)

Decision: admit as a reusable Comune di Montesilvano service, separate from upstream GovPay and pagoPA. Luna review: `govoss-luna-005.jsonl`.

- Government provenance: the repository's [publiccode.yml](https://github.com/Comune-di-Montesilvano/GovPay-Interaction-Layer/blob/main/publiccode.yml) identifies the municipality as developer, copyright holder, and repository owner. The official municipal payment site is operated by Comune di Montesilvano and links this exact source as “Sportello pagamenti pagoPA (GIL v1.5.77).”
- Public source and license: the [repository](https://github.com/comune-di-montesilvano/govpay-interaction-layer) exposes the front office, back office, deployment configuration, and docs. The root [LICENSE](https://github.com/Comune-di-Montesilvano/GovPay-Interaction-Layer/blob/main/LICENSE) is EUPL-1.2 and applies to this repository's work; it does not relicense GovPay or pagoPA.
- Year: the first LICENSE-bearing commit is [8223a48](https://github.com/Comune-di-Montesilvano/GovPay-Interaction-Layer/commit/8223a48), dated 2025-10-16; the first source commit predates it but is not counted as open source.
- Primary evidence/notability: the municipality's [live payment portal](https://pagopa.comune.montesilvano.pe.it/) links to GIL v1.5.77 and describes the operational public payment service. Its [user guide](https://pagopa.comune.montesilvano.pe.it/guida) documents notice payment, spontaneous payments, receipts, and a five-notice cart; its distinctive workflows correspond to the repository's guide template. The repo also includes deployment instructions and versioned releases.
- Agency/geography: Comune di Montesilvano, Pescara province, Abruzzo, Italy; the municipality's publiccode record names its IT department contact.

Product boundary: catalog only this municipal interaction portal, not the broader GovPay platform, the national pagoPA infrastructure, or every integrated backend.
